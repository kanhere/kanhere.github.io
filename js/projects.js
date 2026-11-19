/* projects.js: "Recent work" section. Renders from window.AK into #projects-root. */
(function () {
  'use strict';
  var root = document.getElementById('projects-root');
  var AK = window.AK;
  if (!root || !AK || !AK.projects) return;

  var NS = 'http://www.w3.org/2000/svg';
  var tr = window.AKt || function (k, f, vars) {
    var x = f || k;
    if (vars) Object.keys(vars).forEach(function (n) { x = x.split('{' + n + '}').join(vars[n]); });
    return x;
  };
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  function reduced() { return !!(mq && mq.matches); }

  /* ---------- helpers ---------- */
  function h(tag, cls, text, attrs) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function s(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function icon(d, cls) {
    var e = s('svg', { viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false' });
    e.setAttribute('class', 'pj-ic ' + (cls || ''));
    e.appendChild(s('path', { d: d }));
    return e;
  }
  function staticSvg(markup) { /* markup is a fixed literal, never data */
    var d = document.createElement('div');
    d.innerHTML = markup;
    return d.firstChild;
  }
  function mkCtx() {
    var t = [];
    return {
      later: function (f, ms) { t.push(setTimeout(f, ms)); },
      clear: function () { t.forEach(clearTimeout); t.length = 0; }
    };
  }
  function tagLabel(id) {
    var th = AK.themes || [];
    for (var i = 0; i < th.length; i++) if (th[i].id === id) return th[i].label;
    return id;
  }
  var ICON = {
    replay: 'M20 12a8 8 0 11-2.6-5.9M20 4v5h-5',
    play: 'M7 5l12 7-12 7z',
    chevron: 'M6 9l6 6 6-6',
    lock: 'M7 11V8a5 5 0 0110 0v3M5 11h14v9H5z',
    hand: 'M8 13V6a1.5 1.5 0 013 0v5M11 11V4.5a1.5 1.5 0 013 0V11M14 11V6a1.5 1.5 0 013 0v7c0 4-2.5 7-6 7-3 0-4.5-1.5-6-4l-2-3a1.5 1.5 0 012.3-1.8L8 14',
    cog: 'M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1',
    input: 'M5 12h12M13 7l5 5-5 5',
    agent: 'M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3',
    rule: 'M4 5h16l-6 8v6l-4-2v-5z',
    data: 'M5 6c0-1.7 3-3 7-3s7 1.3 7 3-3 3-7 3-7-1.3-7-3zM5 6v12c0 1.7 3 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3 3 7 3s7-1.3 7-3',
    human: 'M12 4a4 4 0 100 8 4 4 0 000-8zM4 21c0-4 4-7 8-7s8 3 8 7',
    output: 'M4 12l5 5L20 6'
  };
  function avatar() {
    return staticSvg('<svg class="pj-avatar" viewBox="0 0 28 28" aria-hidden="true" focusable="false"><circle cx="14" cy="14" r="14"/><circle class="pj-av-f" cx="10" cy="11.5" r="1.6"/><circle class="pj-av-f" cx="18" cy="11.5" r="1.6"/><path class="pj-av-s" d="M8.5 16.5q5.5 5 11 0"/></svg>');
  }

  var BUILD = {};

  /* ---------- pipeline ---------- */
  BUILD.pipeline = function (v) {
    var st = v.stages, n = st.length, max = 0, kinds = [];
    st.forEach(function (c) {
      if (c.kind !== 'input') max = Math.max(max, c.count);
      if (kinds.indexOf(c.kind) < 0) kinds.push(c.kind);
    });
    var el = h('div', 'pj-pl');
    var now = h('div', 'pj-pl-now', null, { 'aria-hidden': 'true' });
    var nowN = h('span', 'pj-pl-n'), nowU = h('span', 'pj-pl-u');
    now.appendChild(nowN); now.appendChild(nowU);
    var ol = h('ol', 'pj-pl-list');
    var tok = h('span', 'pj-pl-token', null, { 'aria-hidden': 'true' });
    ol.appendChild(tok);
    var rows = st.map(function (c) {
      var li = h('li', 'pj-st');
      li.setAttribute('data-kind', c.kind);
      var node = h('span', 'pj-node');
      node.appendChild(icon(ICON[c.kind] || ICON.input));
      var txt = h('span', 'pj-st-txt');
      txt.appendChild(h('span', 'pj-st-label', c.label));
      txt.appendChild(h('span', 'pj-st-count', c.count + ' ' + c.unit));
      li.appendChild(node); li.appendChild(txt);
      ol.appendChild(li);
      return li;
    });
    var legend = h('ul', 'pj-legend', null, { 'aria-hidden': 'true' });
    kinds.forEach(function (k) {
      var li = h('li', 'pj-lg'); li.setAttribute('data-kind', k);
      li.appendChild(h('span', 'pj-lg-dot')); li.appendChild(document.createTextNode(tr('kind' + k.charAt(0).toUpperCase() + k.slice(1), k)));
      legend.appendChild(li);
    });
    var fn = h('ul', 'pj-fn', null, { 'aria-hidden': 'true' });
    var fnRows = [];
    st.forEach(function (c, i) {
      if (c.kind === 'input') { fnRows[i] = null; return; }
      var li = h('li', 'pj-fn-row'); li.setAttribute('data-kind', c.kind);
      li.appendChild(h('span', 'pj-fn-l', c.label));
      var tr = h('span', 'pj-fn-track'), f = h('span', 'pj-fn-fill');
      f.style.setProperty('--w', (c.count / max * 100).toFixed(1) + '%');
      tr.appendChild(f); li.appendChild(tr);
      li.appendChild(h('span', 'pj-fn-n', String(c.count)));
      fn.appendChild(li); fnRows[i] = li;
    });
    el.appendChild(now); el.appendChild(ol); el.appendChild(legend); el.appendChild(fn);

    function moveTo(i) {
      var r = rows[i];
      tok.classList.add('on');
      tok.style.transform = 'translateY(' + (r.offsetTop + r.offsetHeight / 2 - 7) + 'px)';
    }
    function light(i) {
      rows[i].classList.add('on');
      if (fnRows[i]) fnRows[i].classList.add('on');
      nowN.textContent = String(st[i].count); nowU.textContent = ' ' + st[i].unit;
    }
    function reset() {
      rows.forEach(function (r) { r.classList.remove('on'); });
      fnRows.forEach(function (r) { if (r) r.classList.remove('on'); });
      tok.classList.remove('on'); tok.style.transform = '';
      nowN.textContent = ''; nowU.textContent = '';
    }
    return {
      el: el, reset: reset,
      play: function (ctx) {
        (function step(i) {
          if (i >= n) return;
          moveTo(i);
          ctx.later(function () { light(i); }, 380);
          ctx.later(function () { step(i + 1); }, 720);
        })(0);
      },
      end: function () { rows.forEach(function (r, i) { light(i); }); moveTo(n - 1); }
    };
  };

  /* ---------- beforeAfter ---------- */
  BUILD.beforeAfter = function (v, ctx) {
    var modes = [v.before, v.after], cur = 0;
    var el = h('div', 'pj-ba');
    var seg = h('div', 'pj-seg', null, { role: 'tablist', 'aria-label': v.caption });
    var tabs = modes.map(function (m, i) {
      var b = h('button', null, m.label, { type: 'button', role: 'tab' });
      b.addEventListener('click', function () { ctx.clear(); render(i, !reduced()); });
      b.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          var j = 1 - i; tabs[j].focus(); ctx.clear(); render(j, !reduced()); e.preventDefault();
        }
      });
      seg.appendChild(b); return b;
    });
    var panel = h('div', 'pj-ba-panel', null, { role: 'tabpanel', 'aria-live': 'polite' });
    var list = h('ol', 'pj-ba-list');
    var effort = h('p', 'pj-ba-effort');
    panel.appendChild(list); panel.appendChild(effort);
    el.appendChild(seg); el.appendChild(panel);
    function render(i, animate) {
      cur = i;
      var m = modes[i];
      tabs.forEach(function (b, j) { b.setAttribute('aria-selected', j === i ? 'true' : 'false'); b.tabIndex = j === i ? 0 : -1; });
      panel.setAttribute('data-mode', i ? 'after' : 'before');
      list.textContent = '';
      m.steps.forEach(function (t, k) {
        var li = h('li', 'pj-pill');
        li.appendChild(icon(i ? ICON.cog : ICON.hand));
        li.appendChild(h('span', 'pj-pill-n', String(k + 1)));
        li.appendChild(h('span', 'pj-pill-t', t));
        list.appendChild(li);
        if (animate) ctx.later(function () { li.classList.add('in'); }, 60 + k * 110);
        else li.classList.add('in');
      });
      effort.classList.remove('in');
      effort.textContent = m.effort;
      if (animate) ctx.later(function () { effort.classList.add('in'); }, 60 + m.steps.length * 110);
      else effort.classList.add('in');
    }
    render(0, false);
    return {
      el: el, label: tr('play', 'Play'), isPlay: true,
      reset: function () { render(0, false); },
      play: function (c) { render(0, true); c.later(function () { render(1, true); }, 2300); },
      end: function () { render(1, false); }
    };
  };

  /* ---------- storyboard ---------- */
  var DOODLES = [
    '<path d="M52 10h42l14 14v56H52z"/><path d="M94 10v14h14M64 40h32M64 50h32M64 60h20"/>',
    '<path d="M28 22h60M28 38h96M28 54h48M28 70h78"/><circle class="pj-df" cx="18" cy="22" r="3.5"/><circle class="pj-df" cx="18" cy="38" r="3.5"/><circle class="pj-df" cx="18" cy="54" r="3.5"/><circle class="pj-df" cx="18" cy="70" r="3.5"/>',
    '<text class="pj-dt" x="26" y="55">A</text><path class="pj-da" d="M56 46h28M77 38l8 8-8 8"/><text class="pj-dt" x="96" y="55">ay</text>',
    '<path class="pj-da" d="M24 45v0M36 36v18M48 26v38M60 14v62M72 30v30M84 20v50M96 34v22M108 24v42M120 36v18M132 42v6"/>',
    '<rect x="20" y="8" width="120" height="58" rx="6"/><path d="M50 66l-8 16M110 66l8 16"/><circle class="pj-da" cx="80" cy="37" r="19" stroke-dasharray="4 5" stroke-width="4"/><circle class="pj-df" cx="80" cy="37" r="14"/><circle class="pj-dk" cx="75" cy="34" r="1.8"/><circle class="pj-dk" cx="85" cy="34" r="1.8"/><path class="pj-dk" d="M73 40q7 7 14 0"/>',
    '<rect x="14" y="8" width="132" height="74" rx="6"/><circle cx="40" cy="28" r="7"/><path d="M114 38V22l14-3v16"/><circle cx="110" cy="38" r="4"/><circle cx="124" cy="35" r="4"/><rect class="pj-df" x="30" y="52" width="100" height="8" rx="4"/><rect class="pj-df pj-half" x="48" y="66" width="64" height="8" rx="4"/>'
  ];
  BUILD.storyboard = function (v, ctx) {
    var fr = v.frames, n = fr.length;
    var el = h('div', 'pj-sb');
    var strip = h('ol', 'pj-sb-strip');
    var frames = fr.map(function (f, i) {
      var li = h('li', 'pj-sb-frame');
      var pic = h('div', 'pj-sb-pic');
      var svg = staticSvg('<svg viewBox="0 0 160 90" aria-hidden="true" focusable="false" class="pj-doodle">' + (DOODLES[i % DOODLES.length]) + '</svg>');
      pic.appendChild(svg);
      var lab = h('p', 'pj-sb-lab');
      lab.appendChild(h('span', 'pj-sb-i', String(i + 1)));
      lab.appendChild(document.createTextNode(f.label));
      li.appendChild(pic); li.appendChild(lab); li.appendChild(h('p', 'pj-sb-note', f.note));
      strip.appendChild(li); return li;
    });
    var prog = h('div', 'pj-sb-prog', null, { 'aria-hidden': 'true' });
    var fill = h('span', 'pj-sb-fill'); prog.appendChild(fill);
    el.appendChild(strip); el.appendChild(prog);
    function setOn(i) {
      frames.forEach(function (f, j) { f.classList.toggle('on', j === i); });
      fill.style.width = ((i + 1) / n * 100) + '%';
      var f = frames[i];
      if (strip.scrollWidth > strip.clientWidth + 2) {
        try { strip.scrollTo({ left: f.offsetLeft - (strip.clientWidth - f.offsetWidth) / 2, behavior: reduced() ? 'auto' : 'smooth' }); } catch (e) { strip.scrollLeft = f.offsetLeft; }
      }
    }
    return {
      el: el, label: tr('play', 'Play'), isPlay: true,
      reset: function () { frames.forEach(function (f) { f.classList.remove('on'); }); fill.style.width = '0'; strip.scrollLeft = 0; },
      play: function (c) { for (var i = 0; i < n; i++) (function (i) { c.later(function () { setOn(i); }, i * 950); })(i); },
      end: function () { frames.forEach(function (f) { f.classList.remove('on'); }); fill.style.width = '100%'; }
    };
  };

  /* ---------- testGrid ---------- */
  BUILD.testGrid = function (v) {
    var flakyIdx = [7, 15, 3, 11].slice(0, v.flaky), failIdx = [19, 23].slice(0, v.fail);
    var el = h('div', 'pj-tg');
    var grid = h('div', 'pj-tg-grid', null, { role: 'img', 'aria-label': v.message });
    var dots = [];
    for (var i = 0; i < v.total; i++) { var d = h('span', 'pj-dot'); grid.appendChild(d); dots.push(d); }
    var msg = h('div', 'pj-tg-msg');
    msg.appendChild(avatar());
    var bub = h('div', 'pj-bubble'); bub.appendChild(h('code', 'pj-tg-code', v.message));
    msg.appendChild(bub);
    el.appendChild(grid); el.appendChild(msg);
    function settle(i, animate) {
      var d = dots[i];
      if (failIdx.indexOf(i) > -1) d.className = 'pj-dot fail';
      else if (flakyIdx.indexOf(i) > -1) d.className = animate ? 'pj-dot flaky blink' : 'pj-dot flaky';
      else d.className = 'pj-dot pass';
    }
    return {
      el: el,
      reset: function () { dots.forEach(function (d) { d.className = 'pj-dot'; }); msg.classList.remove('in'); },
      play: function (c) {
        dots.forEach(function (d, i) { c.later(function () { settle(i, true); }, 120 + i * 75); });
        c.later(function () { msg.classList.add('in'); }, 300 + v.total * 75);
      },
      end: function () { dots.forEach(function (d, i) { settle(i, false); }); msg.classList.add('in'); }
    };
  };

  /* ---------- flags ---------- */
  BUILD.flags = function (v) {
    var modes = [tr('flagOff', 'Off'), tr('flagPilot', 'Pilot'), tr('flagEveryone', 'Everyone')], mode = 1, kill = false;
    var el = h('div', 'pj-fl');
    var ctl = h('div', 'pj-fl-ctl');
    var seg = h('div', 'pj-seg', null, { role: 'radiogroup', 'aria-label': tr('rolloutLabel', 'Rollout') });
    var btns = modes.map(function (m, i) {
      var b = h('button', null, m, { type: 'button', role: 'radio' });
      b.addEventListener('click', function () { mode = i; update(); });
      b.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        mode = (i + d + 3) % 3; update(); btns[mode].focus(); e.preventDefault();
      });
      seg.appendChild(b); return b;
    });
    var sw = h('button', 'pj-kill', null, { type: 'button', role: 'switch', 'aria-checked': 'false' });
    sw.appendChild(h('span', 'pj-kill-track')); sw.appendChild(h('span', 'pj-kill-l', tr('killSwitch', 'Kill switch')));
    sw.firstChild.appendChild(h('span', 'pj-kill-thumb'));
    sw.addEventListener('click', function () { kill = !kill; update(); });
    ctl.appendChild(seg); ctl.appendChild(sw);
    var dotsEl = h('div', 'pj-fl-dots', null, { 'aria-hidden': 'true' });
    var dots = [];
    for (var i = 0; i < v.users; i++) {
      var d = h('span', 'pj-user' + (i < v.pilot ? ' pilot' : ''));
      d.style.transitionDelay = (i * 18) + 'ms';
      dotsEl.appendChild(d); dots.push(d);
    }
    var leg = h('p', 'pj-fl-leg', null, { 'aria-hidden': 'true' });
    leg.appendChild(h('span', 'pj-ring-sample')); leg.appendChild(document.createTextNode(tr('pilotGroup', 'Pilot group')));
    var live = h('p', 'pj-fl-live', null, { 'aria-live': 'polite' });
    var liveN = h('span', 'pj-fl-n'), liveK = h('span', 'pj-fl-k');
    live.appendChild(liveN); live.appendChild(liveK);
    el.appendChild(ctl); el.appendChild(dotsEl); el.appendChild(leg); el.appendChild(live);
    function update() {
      var n = kill ? 0 : mode === 0 ? 0 : mode === 1 ? v.pilot : v.users;
      btns.forEach(function (b, i) { b.setAttribute('aria-checked', i === mode ? 'true' : 'false'); b.tabIndex = i === mode ? 0 : -1; });
      seg.classList.toggle('over', kill);
      sw.setAttribute('aria-checked', kill ? 'true' : 'false');
      dots.forEach(function (d, i) { d.classList.toggle('see', i < n); });
      liveN.textContent = tr('seeFeature', '{n} of {total} see the feature', { n: n, total: v.users });
      liveK.textContent = kill ? tr('killWins', 'Kill switch wins') : '';
    }
    update();
    return { el: el, manual: true, reset: function () {}, play: function () {}, end: function () {} };
  };

  /* ---------- usage ---------- */
  BUILD.usage = function (v) {
    var S = v.series, n = S.length, W = 300, H = 170, L = 10, R = 10, T = 26, B = 36;
    var pw = W - L - R, ph = H - T - B, base = T + ph;
    var peak = 0, mx = v.threshold;
    S.forEach(function (x, i) { if (x > S[peak]) peak = i; if (x > mx) mx = x; });
    mx *= 1.12;
    function X(i) { return L + pw * i / (n - 1); }
    function Y(x) { return T + ph * (1 - x / mx); }
    var el = h('div', 'pj-us');
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'pj-us-svg', role: 'group', tabindex: '0',
      'aria-label': tr('usageAria', '{caption}. Peak {peak} {unit} on day {day}, alert line at {threshold}. Use arrow keys to read each day.', { caption: v.caption, peak: S[peak], unit: v.unit, day: peak + 1, threshold: v.threshold }) });
    var line = S.map(function (x, i) { return (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(x).toFixed(1); }).join('');
    svg.appendChild(s('path', { class: 'pj-us-area', d: line + 'L' + X(n - 1) + ' ' + base + 'L' + X(0) + ' ' + base + 'Z' }));
    svg.appendChild(s('path', { class: 'pj-us-axis', d: 'M' + L + ' ' + base + 'H' + (W - R) }));
    var ty = Y(v.threshold);
    svg.appendChild(s('path', { class: 'pj-us-thr', d: 'M' + L + ' ' + ty + 'H' + (W - R) }));
    var tl = s('text', { class: 'pj-us-tl', x: L, y: ty - 6 }); tl.textContent = tr('alertLine', 'alert line'); svg.appendChild(tl);
    var path = s('path', { class: 'pj-us-line', d: line });
    svg.appendChild(path);
    var pts = [];
    S.forEach(function (x, i) {
      var above = x > v.threshold;
      var c = s('circle', { class: 'pj-us-pt' + (above ? ' bad' : ''), cx: X(i), cy: Y(x), r: above ? 4 : 2.5 });
      c.style.transitionDelay = (i / n * 1100) + 'ms';
      svg.appendChild(c); pts.push(c);
      if (above) {
        var b = s('path', { class: 'pj-us-bell', transform: 'translate(' + X(i) + ' ' + (Y(x) - 15) + ')',
          d: 'M0 -6c-3 0-4.5 2.2-4.5 5v2.5L-6 3h12l-1.5-1.5V-1c0-2.8-1.5-5-4.5-5zM-1.6 4.5a1.6 1.6 0 003.2 0z' });
        b.style.transitionDelay = (i / n * 1100 + 150) + 'ms';
        svg.appendChild(b);
      }
    });
    var sel = s('g', { class: 'pj-us-sel' });
    var sl = s('path', { d: 'M0 ' + T + 'V' + base }), sr = s('circle', { r: 6 });
    sel.appendChild(sl); sel.appendChild(sr); svg.appendChild(sel);
    var step = pw / (n - 1);
    S.forEach(function (x, i) {
      svg.appendChild(s('rect', { class: 'pj-us-hit', 'data-i': i, x: X(i) - step / 2, y: 0, width: step, height: H }));
    });
    var a = s('text', { class: 'pj-us-ax', x: L, y: H - 6 }); a.textContent = tr('dayN', 'Day {n}', { n: 1 }); svg.appendChild(a);
    var z = s('text', { class: 'pj-us-ax', x: W - R, y: H - 6, 'text-anchor': 'end' }); z.textContent = tr('dayN', 'Day {n}', { n: n }); svg.appendChild(z);
    var read = h('p', 'pj-us-read', tr('tapAPoint', 'Tap a day'), { 'aria-live': 'polite' });
    el.appendChild(svg); el.appendChild(read);
    var cur = -1;
    function select(i) {
      i = Math.max(0, Math.min(n - 1, i)); cur = i;
      sl.setAttribute('transform', 'translate(' + X(i) + ' 0)');
      sr.setAttribute('cx', X(i)); sr.setAttribute('cy', Y(S[i]));
      sel.classList.add('on');
      read.textContent = tr('dayReadout', 'Day {n} · {v} {unit}', { n: i + 1, v: S[i], unit: v.unit });
      read.classList.toggle('bad', S[i] > v.threshold);
    }
    function fromEvent(e) {
      var t = e.target && e.target.getAttribute && e.target.getAttribute('data-i');
      if (t != null) return +t;
      var r = svg.getBoundingClientRect();
      return Math.round(((e.clientX - r.left) / r.width * W - L) / pw * (n - 1));
    }
    svg.addEventListener('pointerdown', function (e) { select(fromEvent(e)); });
    svg.addEventListener('pointermove', function (e) { if (e.pointerType === 'mouse' || e.buttons) select(fromEvent(e)); });
    svg.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { select((cur < 0 ? peak : cur) + (e.key === 'ArrowRight' ? 1 : -1)); e.preventDefault(); }
    });
    var len = 1200;
    try { len = Math.ceil(path.getTotalLength()) + 2; } catch (e) {}
    path.style.setProperty('--len', len);
    return {
      el: el,
      reset: function () { svg.classList.remove('go'); sel.classList.remove('on'); read.textContent = tr('tapAPoint', 'Tap a day'); read.classList.remove('bad'); cur = -1; },
      play: function (c) { c.later(function () { svg.classList.add('go'); }, 60); c.later(function () { select(peak); }, 1700); },
      end: function () { svg.classList.add('go'); select(peak); }
    };
  };

  /* ---------- schedule ---------- */
  BUILD.schedule = function (v) {
    var days = v.days, runs = v.runs;
    var el = h('div', 'pj-sc');
    var week = h('div', 'pj-sc-week', null, { 'aria-hidden': 'true' });
    var now = h('span', 'pj-sc-now'); week.appendChild(now);
    var cells = days.map(function (d, i) {
      var c = h('span', 'pj-sc-day');
      c.appendChild(h('span', 'pj-sc-dn', d));
      var dots = h('span', 'pj-sc-dots');
      runs.forEach(function (r) { if (r.day === i) { var dt = h('span', 'pj-sc-dot'); dt.setAttribute('data-tag', r.tag); dots.appendChild(dt); } });
      c.appendChild(dots); week.appendChild(c); return c;
    });
    var list = h('ul', 'pj-sc-list');
    var rows = [];
    days.forEach(function (d, i) {
      var mine = runs.filter(function (r) { return r.day === i; });
      if (!mine.length) { rows[i] = null; return; }
      var li = h('li', 'pj-sc-row');
      li.appendChild(h('span', 'pj-sc-rd', d));
      var ul = h('ul', 'pj-sc-runs');
      mine.forEach(function (r) {
        var p = h('li', 'pj-sc-run'); p.setAttribute('data-tag', r.tag);
        p.appendChild(h('span', 'pj-sc-time', r.time));
        p.appendChild(h('span', 'pj-sc-lab', r.label));
        ul.appendChild(p);
      });
      li.appendChild(ul); list.appendChild(li); rows[i] = li;
    });
    el.appendChild(week); el.appendChild(list);
    function at(i) {
      now.classList.add('show'); now.style.transform = 'translateX(' + (i * 100) + '%)';
      cells[i].classList.add('past');
      if (rows[i]) rows[i].classList.add('on');
    }
    return {
      el: el,
      reset: function () {
        now.classList.remove('show'); now.style.transform = 'translateX(0)';
        cells.forEach(function (c) { c.classList.remove('past'); });
        rows.forEach(function (r) { if (r) r.classList.remove('on'); });
      },
      play: function (c) { for (var i = 0; i < days.length; i++) (function (i) { c.later(function () { at(i); }, 150 + i * 520); })(i); },
      end: function () { cells.forEach(function (c) { c.classList.add('past'); }); rows.forEach(function (r) { if (r) r.classList.add('on'); }); }
    };
  };

  /* ---------- chat ---------- */
  BUILD.chat = function (v) {
    var el = h('div', 'pj-ch');
    var top = h('div', 'pj-ch-top');
    var pill = h('span', 'pj-lock'); pill.appendChild(icon(ICON.lock)); pill.appendChild(document.createTextNode(v.badge));
    top.appendChild(pill);
    var ul = h('ul', 'pj-ch-msgs');
    var items = v.messages.map(function (m) {
      var li = h('li', 'pj-msg ' + (m.from === 'agent' ? 'agent' : 'colleague'));
      if (m.from === 'agent') li.appendChild(avatar());
      var b = h('div', 'pj-bubble');
      b.appendChild(h('span', 'sr-only', (m.from === 'agent' ? tr('chatFromAgent', 'Agent') : tr('chatFromColleague', 'Colleague')) + ': '));
      b.appendChild(document.createTextNode(m.text));
      li.appendChild(b); ul.appendChild(li); return li;
    });
    var why = h('p', 'pj-ch-why');
    why.appendChild(icon(ICON.lock)); why.appendChild(document.createTextNode(v.why));
    el.appendChild(top); el.appendChild(ul); el.appendChild(why);
    return {
      el: el,
      reset: function () { items.forEach(function (i) { i.classList.remove('on'); }); why.classList.remove('on'); },
      play: function (c) {
        items.forEach(function (it, i) { c.later(function () { it.classList.add('on'); }, 250 + i * 1100); });
        c.later(function () { why.classList.add('on'); }, 250 + items.length * 1100);
      },
      end: function () { items.forEach(function (i) { i.classList.add('on'); }); why.classList.add('on'); }
    };
  };


  /* ---------- viz mounting ---------- */
  /* Builds the visual into `parent` (the card). Internal builders first, then window.AKVIZ[type]. */
  function mountViz(p, parent) {
    var v = p.viz;
    if (!v) return null;
    var internal = BUILD[v.type];
    var ext = !internal && window.AKVIZ && window.AKVIZ[v.type];
    if (!internal && !ext) return null;
    var panel = h('div', 'pj-viz');
    var body = h('div', 'pj-viz-body');
    var foot = h('div', 'pj-viz-foot');
    panel.appendChild(body); panel.appendChild(foot);
    parent.appendChild(panel);
    var ctx = mkCtx(), api, run, manual = false, label = tr('runAgain', 'Run again'), isPlay = false;
    if (internal) {
      api = internal(v, ctx);
      body.appendChild(api.el);
      manual = !!api.manual;
      if (api.label) { label = api.label; isPlay = !!api.isPlay; }
      run = function () {
        ctx.clear(); api.reset();
        if (reduced()) api.end(); else api.play(ctx);
      };
    } else {
      var xctx = { t: tr };
      Object.defineProperty(xctx, 'reduced', { get: reduced, enumerable: true });
      api = ext(body, v, xctx) || {};
      manual = !!api.interactive;
      run = function () { if (typeof api.play === 'function') api.play(); };
    }
    if (v.caption) foot.appendChild(h('p', 'pj-cap', v.caption));
    if (!manual) {
      var btn = h('button', 'pj-replay', null, { type: 'button' });
      btn.appendChild(icon(isPlay ? ICON.play : ICON.replay));
      btn.appendChild(h('span', null, label));
      btn.addEventListener('click', run);
      foot.appendChild(btn);
    }
    return {
      panel: panel,
      start: (internal && manual) ? null : run,
      stop: function () { ctx.clear(); }
    };
  }

  function buildHow(p, compact) {
    var inner = h('div', 'pj-how-in');
    inner.appendChild(h('p', 'pj-how-p', p.how));
    var les = h('p', 'pj-lesson');
    les.appendChild(h('span', 'pj-lesson-l', tr('lesson', 'Lesson')));
    les.appendChild(h('span', 'pj-lesson-t', p.lesson));
    inner.appendChild(les);
    if (p.stack && p.stack.length) {
      var st = h('div', 'pj-stack');
      st.appendChild(h('span', 'pj-stack-l', tr('stack', 'Stack')));
      var u = h('ul', 'pj-stack-ul');
      p.stack.forEach(function (t) { var li = h('li'); li.appendChild(h('span', 'chip pj-chip-s', t)); u.appendChild(li); });
      st.appendChild(u); inner.appendChild(st);
    }
    if (compact) {
      var wrap = h('div', 'pj-how pj-how-static');
      wrap.appendChild(h('p', 'pj-how-h', tr('howItWorks', 'How it works')));
      wrap.appendChild(inner);
      return wrap;
    }
    var det = h('details', 'pj-how');
    det.appendChild(h('summary', null, tr('howItWorks', 'How it works')));
    det.appendChild(inner);
    return det;
  }

  /* ---------- page ---------- */
  var intro = AK.projectsIntro || {};
  var head = h('header', 'pj-head');
  head.appendChild(h('p', 'label', '04 / ' + tr('labelProjects', 'recent work')));
  head.appendChild(h('h2', 'pj-h2', intro.title, { id: 'projects-title' }));
  if (intro.body) head.appendChild(h('p', 'pj-intro', intro.body));
  root.appendChild(head);

  var bar = h('div', 'pj-bar');
  var filters = h('div', 'pj-filters', null, { role: 'group', 'aria-label': intro.title });
  var count = h('p', 'pj-count', null, { role: 'status', 'aria-live': 'polite' });
  bar.appendChild(filters); bar.appendChild(count);
  root.appendChild(bar);

  var grid = h('div', 'pj-grid');
  root.appendChild(grid);

  var io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var big = e.rootBounds && e.intersectionRect.height >= e.rootBounds.height * 0.7;
        if (e.isIntersecting && (e.intersectionRatio >= 0.5 || big)) {
          io.unobserve(e.target);
          var f = e.target.__pjStart;
          if (f) try { f(); } catch (err) {}
        }
      });
    }, { threshold: [0.25, 0.5, 0.75] });
  }

  function setOpen(c, open) {
    if (!c.compact || c.open === open) return;
    c.open = open;
    c.btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    c.btnLabel.textContent = open ? tr('close', 'Close') : tr('open', 'Open');
    c.more.hidden = !open;
    c.el.classList.toggle('pj-expanded', open);
    if (open) {
      if (!c.built) {
        c.built = true;
        try { c.mv = mountViz(c.p, c.more); } catch (err) { if (window.console) console.warn('projects: viz failed for ' + c.p.id, err); }
        if (c.mv) c.more.insertBefore(c.mv.panel, c.more.firstChild);
        c.more.appendChild(buildHow(c.p, true));
      }
      if (c.mv && c.mv.start) requestAnimationFrame(function () { try { c.mv.start(); } catch (err) {} });
    } else if (c.mv && c.mv.stop) c.mv.stop();
  }

  var cards = AK.projects.map(function (p, idx) {
    var compact = p.featured === false;
    var art = h('article', 'card pj-card' + (compact ? ' pj-compact' : ''), null, { id: 'p-' + p.id, 'aria-labelledby': 'pj-t-' + p.id });
    var c = { el: art, tags: p.tags || [], p: p, compact: compact, open: false, built: false };
    try {
      var meta = h('div', 'pj-meta');
      (p.tags || []).forEach(function (t) {
        var ch = h('span', 'chip', tagLabel(t)); ch.setAttribute('data-tag', t); meta.appendChild(ch);
      });
      if (p.status) meta.appendChild(h('span', 'pj-status', p.status));
      art.appendChild(meta);
      art.appendChild(h('h3', 'pj-title', p.title, { id: 'pj-t-' + p.id }));
      art.appendChild(h('p', 'pj-one', p.oneLiner));
      if (compact) {
        var more = h('div', 'pj-more', null, { id: 'pj-more-' + p.id });
        more.hidden = true;
        var btn = h('button', 'pj-open', null, { type: 'button', 'aria-expanded': 'false', 'aria-controls': 'pj-more-' + p.id });
        var bl = h('span', 'pj-open-l', tr('open', 'Open'));
        btn.appendChild(bl); btn.appendChild(icon(ICON.chevron, 'pj-open-ic'));
        btn.addEventListener('click', function () { setOpen(c, !c.open); });
        art.appendChild(btn); art.appendChild(more);
        c.btn = btn; c.btnLabel = bl; c.more = more;
      } else {
        try {
          var mv = mountViz(p, art);
          if (mv && mv.start) {
            mv.panel.__pjStart = mv.start;
            if (io) io.observe(mv.panel); else setTimeout(mv.start, 300 + idx * 100);
          }
        } catch (err) { if (window.console) console.warn('projects: viz failed for ' + p.id, err); }
        art.appendChild(buildHow(p, false));
      }
    } catch (err) { if (window.console) console.warn('projects: card failed for ' + p.id, err); }
    grid.appendChild(art);
    return c;
  });

  var foot = h('p', 'pj-disclaimer', intro.disclaimer || '');
  if (intro.disclaimer) root.appendChild(foot);

  /* filter */
  var current = 'all', chips = [];
  function applyFilter(tag) {
    current = tag; var shown = 0;
    chips.forEach(function (c) { c.b.setAttribute('aria-pressed', c.id === tag ? 'true' : 'false'); });
    cards.forEach(function (c) {
      var show = tag === 'all' || c.tags.indexOf(tag) > -1;
      if (show) shown++;
      var e = c.el;
      if (show) {
        if (e.hidden) {
          e.hidden = false; e.classList.add('pj-out');
          requestAnimationFrame(function () { requestAnimationFrame(function () { e.classList.remove('pj-out'); }); });
        } else e.classList.remove('pj-out');
      } else if (!e.hidden) {
        e.classList.add('pj-out');
        setTimeout(function () { if (e.classList.contains('pj-out')) e.hidden = true; }, 220);
      }
    });
    count.textContent = tr('ofCount', '{n} of {total}', { n: shown, total: cards.length });
  }
  [{ id: 'all', label: tr('all', 'All') }].concat(AK.themes || []).forEach(function (t) {
    var b = h('button', 'chip', t.label, { type: 'button', 'aria-pressed': t.id === 'all' ? 'true' : 'false' });
    if (t.id !== 'all') b.setAttribute('data-tag', t.id);
    b.addEventListener('click', function () { applyFilter(t.id); });
    filters.appendChild(b); chips.push({ id: t.id, b: b });
  });
  applyFilter('all');

  /* deep link: #p-<id> scrolls to the card and opens it if compact */
  function goHash() {
    var m = /^#p-(.+)$/.exec(location.hash || '');
    if (!m) return;
    var id; try { id = decodeURIComponent(m[1]); } catch (e) { return; }
    var c = null;
    cards.forEach(function (x) { if (x.p.id === id) c = x; });
    if (!c) return;
    if (current !== 'all' && c.tags.indexOf(current) < 0) applyFilter('all');
    c.el.hidden = false; c.el.classList.remove('pj-out');
    setOpen(c, true);
    setTimeout(function () {
      try { c.el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' }); } catch (e) { c.el.scrollIntoView(); }
    }, 120);
  }
  goHash();
  window.addEventListener('hashchange', goHash);
})();
