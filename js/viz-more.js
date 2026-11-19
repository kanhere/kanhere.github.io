/* viz-more.js: seven small visualisations for the project cards.
   Contract: window.AKVIZ[type](body, viz, ctx) -> { play(), interactive }.
   ctx.t keys used: vm_from, vm_skip, vm_id, vm_pass, vm_fail, vm_score, vm_count */
(function () {
  'use strict';
  window.AKVIZ = window.AKVIZ || {};

  var NS = 'http://www.w3.org/2000/svg';
  function el(tag, cls, txt, parent) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    if (parent) parent.appendChild(n);
    return n;
  }
  function sv(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function icon(vb, parent, cls) {
    var s = sv('svg', { viewBox: vb, 'aria-hidden': 'true', focusable: 'false' }, parent);
    if (cls) s.setAttribute('class', cls);
    return s;
  }
  function ease(p) { return 1 - Math.pow(1 - p, 3); }
  function cname(i) { return 'vm-c' + (i % 4); }

  /* cancellable timers and tweens, one per visual */
  function timers() {
    var ts = [], raf = [];
    var api = {
      at: function (fn, ms) { ts.push(setTimeout(fn, ms)); },
      tween: function (ms, fn, done) {
        var s = Date.now(), h = { id: 0, dead: false };
        function step() {
          if (h.dead) return;
          var p = Math.min(1, (Date.now() - s) / ms);
          fn(ease(p));
          if (p < 1) h.id = setTimeout(step, 16); else if (done) done();
        }
        step();
        raf.push(h);
      },
      clear: function () {
        ts.forEach(clearTimeout); ts = [];
        raf.forEach(function (h) { h.dead = true; clearTimeout(h.id); }); raf = [];
      }
    };
    return api;
  }

  /* ---------- 1. waterfall ---------- */
  window.AKVIZ.waterfall = function (body, viz, ctx) {
    var T = timers();
    var root = el('div', 'vm-wf', null, body);
    var srcUl = el('ul', 'vm-wf-src', null, root);
    var srcs = (viz.sources || []).map(function (s, i) {
      var li = el('li', 'vm-chip ' + cname(i), null, srcUl);
      el('span', 'vm-num', String(i + 1), li);
      el('span', 'vm-chip-t', s, li);
      return li;
    });
    var rec = el('div', 'vm-rec', null, root);
    var rows = (viz.fields || []).map(function (f) {
      var r = el('div', 'vm-row', null, rec);
      el('span', 'vm-k', f.label, r);
      var slot = el('span', 'vm-slot', '—', r);
      return { f: f, slot: slot };
    });
    var stamp = el('p', 'vm-stamp', null, root);
    var gl = icon('0 0 16 16', stamp, 'vm-gl');
    sv('circle', { cx: 8, cy: 8, r: 6.5 }, gl);
    sv('path', { d: 'M8 4.5V8l2.4 1.6' }, gl);
    el('span', null, viz.stamp || '', stamp);

    function fill(i) {
      rows.forEach(function (r) {
        if (r.f.from !== i) return;
        r.slot.className = 'vm-slot vm-filled ' + cname(i);
        r.slot.textContent = ctx.t('vm_from', 'from {src}', { src: viz.sources[i] });
      });
    }
    function reset() {
      T.clear();
      srcs.forEach(function (s) { s.className = 'vm-chip ' + cname(srcs.indexOf(s)); });
      rows.forEach(function (r) { r.slot.className = 'vm-slot'; r.slot.textContent = '—'; });
      stamp.classList.remove('vm-show');
    }
    return {
      interactive: false,
      play: function () {
        reset();
        if (ctx.reduced) {
          srcs.forEach(function (s, i) { s.classList.add('vm-seen'); fill(i); });
          stamp.classList.add('vm-show');
          return;
        }
        srcs.forEach(function (s, i) {
          T.at(function () {
            srcs.forEach(function (o, j) { if (j < i) o.classList.replace('vm-on', 'vm-seen'); });
            s.classList.add('vm-on');
          }, i * 850);
          T.at(function () { fill(i); }, i * 850 + 280);
        });
        T.at(function () {
          srcs.forEach(function (o) { o.classList.replace('vm-on', 'vm-seen'); });
        }, srcs.length * 850);
        T.at(function () { stamp.classList.add('vm-show'); }, srcs.length * 850 + 100);
      }
    };
  };

  /* ---------- 2. chain ---------- */
  window.AKVIZ.chain = function (body, viz, ctx) {
    var T = timers();
    var root = el('div', 'vm-chain', null, body);
    var nodes = [], gates = [];
    var SHACKLE_C = 'M5.5 7V5a2.5 2.5 0 0 1 5 0v2', SHACKLE_O = 'M5.5 7V5a2.5 2.5 0 0 1 4.9-.6';
    (viz.steps || []).forEach(function (s, i, arr) {
      var n = el('div', 'vm-node', null, root);
      el('span', 'vm-nidx', String(i + 1), n);
      el('span', 'vm-nname', s, n);
      var b = el('span', 'vm-nbadges', null, n);
      var idc = el('span', 'vm-idc', ctx.t('vm_id', 'ID ✓'), b);
      var sk = el('span', 'vm-skipc', '↷ ' + ctx.t('vm_skip', 'skip'), b);
      nodes.push({ n: n, idc: idc, sk: sk });
      if (i < arr.length - 1) {
        var gr = el('div', 'vm-gate-row', null, root);
        el('span', 'vm-wire', null, gr);
        var g = el('span', 'vm-gate', null, gr);
        var ic = icon('0 0 16 16', g, 'vm-lock');
        var sh = sv('path', { d: SHACKLE_C }, ic);
        sv('rect', { x: 3, y: 7, width: 10, height: 7, rx: 1.6 }, ic);
        el('span', null, viz.gate || '', g);
        gates.push({ g: g, sh: sh });
      }
    });
    var r1 = el('p', 'vm-res', viz.firstRun || '', root);
    var r2 = el('p', 'vm-res vm-res2', viz.secondRun || '', root);

    function reset() {
      T.clear();
      nodes.forEach(function (o) { o.n.className = 'vm-node'; });
      gates.forEach(function (o) { o.g.className = 'vm-gate'; o.sh.setAttribute('d', SHACKLE_C); });
      r1.classList.remove('vm-show'); r2.classList.remove('vm-show');
    }
    function create(i) { nodes[i].n.classList.add('vm-made'); }
    function open(i) { gates[i].g.classList.add('vm-open'); gates[i].sh.setAttribute('d', SHACKLE_O); }
    function skip(i) {
      nodes[i].n.classList.remove('vm-made'); nodes[i].n.classList.add('vm-skipped', 'vm-flash');
      nodes[i].idc.style.display = 'none';
      if (gates[i]) gates[i].g.classList.add('vm-pulse');
    }
    return {
      interactive: false,
      play: function () {
        reset();
        nodes.forEach(function (o) { o.idc.style.display = ''; });
        var step = 700, n = nodes.length;
        if (ctx.reduced) {
          nodes.forEach(function (o, i) { create(i); if (gates[i]) open(i); });
          r1.classList.add('vm-show');
          nodes.forEach(function (o, i) { skip(i); o.n.classList.remove('vm-flash'); });
          nodes.forEach(function (o) { o.idc.style.display = ''; });
          r2.classList.add('vm-show');
          return;
        }
        nodes.forEach(function (o, i) {
          T.at(function () { create(i); }, i * step);
          if (gates[i]) T.at(function () { open(i); }, i * step + 350);
        });
        T.at(function () { r1.classList.add('vm-show'); }, n * step);
        var p2 = n * step + 900;
        nodes.forEach(function (o, i) {
          T.at(function () { skip(i); o.idc.style.display = ''; }, p2 + i * 160);
        });
        T.at(function () { r2.classList.add('vm-show'); }, p2 + n * 160 + 200);
      }
    };
  };

  /* ---------- 3. merge ---------- */
  window.AKVIZ.merge = function (body, viz, ctx) {
    var T = timers();
    var root = el('div', 'vm-mg', null, body);
    var rows = viz.rows || [], keys = [], counts = {};
    rows.forEach(function (r) {
      if (!(r.key in counts)) { counts[r.key] = 0; keys.push(r.key); }
      counts[r.key]++;
    });
    el('p', 'vm-lab', viz.beforeLabel || '', root);
    var ul = el('ul', 'vm-mg-before', null, root);
    var pills = rows.map(function (r) {
      var li = el('li', 'vm-rp ' + cname(keys.indexOf(r.key)), null, ul);
      el('span', 'vm-rn', r.name, li);
      el('span', 'vm-rk', r.key, li);
      return li;
    });
    var afterWrap = el('div', 'vm-mg-afterwrap', null, root);
    var afterLab = el('p', 'vm-lab vm-lab-after', null, afterWrap);
    var arrow = icon('0 0 16 16', afterLab, 'vm-gl');
    sv('path', { d: 'M8 2v11M3.5 9L8 13.5 12.5 9' }, arrow);
    el('span', null, viz.afterLabel || '', afterLab);
    var gl = el('div', 'vm-mg-after', null, afterWrap);
    var groups = keys.map(function (k, i) {
      var g = el('div', 'vm-grp ' + cname(i) + (counts[k] > 1 ? ' vm-stack' : ''), null, gl);
      el('span', 'vm-gk', k, g);
      el('span', 'vm-gc', ctx.t('vm_count', '×{n}', { n: counts[k] }), g);
      return g;
    });
    function reset() {
      T.clear();
      pills.forEach(function (p) { p.classList.remove('vm-keyed', 'vm-fold'); });
      groups.forEach(function (g) { g.classList.remove('vm-in'); });
      afterWrap.classList.remove('vm-show');
    }
    return {
      interactive: false,
      play: function () {
        reset();
        if (ctx.reduced) {
          pills.forEach(function (p) { p.classList.add('vm-keyed', 'vm-fold'); });
          groups.forEach(function (g) { g.classList.add('vm-in'); });
          afterWrap.classList.add('vm-show');
          return;
        }
        pills.forEach(function (p, i) { T.at(function () { p.classList.add('vm-keyed'); }, i * 160); });
        var t0 = pills.length * 160 + 700;
        T.at(function () {
          pills.forEach(function (p) { p.classList.add('vm-fold'); });
          afterWrap.classList.add('vm-show');
        }, t0);
        groups.forEach(function (g, i) { T.at(function () { g.classList.add('vm-in'); }, t0 + 250 + i * 300); });
      }
    };
  };

  /* ---------- 4. scorecard ---------- */
  window.AKVIZ.scorecard = function (body, viz, ctx) {
    var T = timers();
    var root = el('div', 'vm-sc', null, body);
    var leg = el('p', 'vm-sc-leg', null, root);
    el('span', 'vm-tick vm-tick-s', null, leg);
    el('span', null, viz.passLabel || '', leg);
    var rows = (viz.tests || []).map(function (t) {
      var ok = t.score >= t.pass;
      var r = el('div', 'vm-sc-row', null, root);
      r.setAttribute('role', 'group');
      r.setAttribute('aria-label', ctx.t('vm_score', '{label}: {score} of 100, pass line {pass}, {result}', {
        label: t.label, score: t.score, pass: t.pass, result: ok ? ctx.t('vm_pass', 'pass') : ctx.t('vm_fail', 'fail')
      }));
      el('span', 'vm-sc-lab', t.label, r);
      var line = el('div', 'vm-sc-line', null, r);
      var track = el('div', 'vm-track', null, line);
      var fill = el('div', 'vm-fill', null, track);
      var tick = el('span', 'vm-tick', null, track);
      tick.style.left = t.pass + '%';
      var num = el('span', 'vm-sc-num', '0', line);
      var g = el('span', 'vm-sc-g', ok ? '✓' : '✕', line);
      g.setAttribute('aria-hidden', 'true');
      return { t: t, ok: ok, fill: fill, num: num, g: g };
    });
    var verdict = el('p', 'vm-verdict', viz.verdict || '', root);
    function set(r, p) {
      r.fill.style.width = (r.t.score * p) + '%';
      r.num.textContent = String(Math.round(r.t.score * p));
    }
    function reset() {
      T.clear();
      rows.forEach(function (r) {
        r.fill.className = 'vm-fill'; set(r, 0); r.g.classList.remove('vm-show');
      });
      verdict.classList.remove('vm-show');
    }
    function cls(r) { r.fill.classList.add(r.ok ? 'vm-ok' : 'vm-bad'); }
    return {
      interactive: false,
      play: function () {
        reset();
        if (ctx.reduced) {
          rows.forEach(function (r) { cls(r); set(r, 1); r.g.classList.add('vm-show'); });
          verdict.classList.add('vm-show');
          return;
        }
        rows.forEach(function (r, i) {
          T.at(function () {
            cls(r);
            T.tween(650, function (p) { set(r, p); }, function () { r.g.classList.add('vm-show'); });
          }, i * 420);
        });
        T.at(function () { verdict.classList.add('vm-show'); }, rows.length * 420 + 700);
      }
    };
  };

  /* ---------- 5. map ---------- */
  window.AKVIZ.map = function (body, viz, ctx) {
    var T = timers();
    var root = el('div', 'vm-map', null, body);
    var nodes = viz.nodes || [], links = viz.links || [], total = nodes.length;
    /* ring layout, six nodes: 0 left, 1 top, 5 top-right, 4 right, 3 bottom-right, 2 bottom */
    var POS = [[50, 130], [150, 45], [150, 215], [250, 215], [250, 130], [250, 45]];
    var W = 84, H = 40;
    var s = sv('svg', { viewBox: '0 0 300 250', role: 'img', 'class': 'vm-map-svg' }, root);
    s.setAttribute('aria-label', nodes.map(function (n) { return n.label; }).join(', '));
    var ghost = [], live = [], boxes = [], texts = [];
    links.forEach(function (l) {
      var a = POS[l[0]], b = POS[l[1]];
      ghost.push(sv('line', { x1: a[0], y1: a[1], x2: b[0], y2: b[1], 'class': 'vm-ghost' }, s));
    });
    links.forEach(function (l) {
      var a = POS[l[0]];
      live.push(sv('line', { x1: a[0], y1: a[1], x2: a[0], y2: a[1], 'class': 'vm-live' }, s));
    });
    nodes.forEach(function (n, i) {
      var p = POS[i];
      var g = sv('g', null, s);
      boxes.push(sv('rect', { x: p[0] - W / 2, y: p[1] - H / 2, width: W, height: H, rx: 10, 'class': 'vm-nbox' }, g));
      var words = String(n.label), lines = [words];
      var sp = words.indexOf(' ');
      if (words.length > 10 && sp > 0) lines = [words.slice(0, sp), words.slice(sp + 1)];
      var t = sv('text', { x: p[0], y: lines.length > 1 ? p[1] - 3 : p[1] + 4, 'text-anchor': 'middle', 'class': 'vm-ntext' }, g);
      lines.forEach(function (ln, k) {
        var ts = sv('tspan', { x: p[0], dy: k ? 13 : 0 }, t);
        ts.textContent = ln;
      });
      texts.push(t);
    });
    var agent = sv('g', { 'class': 'vm-agent' }, s);
    sv('circle', { r: 8, cx: 0, cy: 0, 'class': 'vm-ag-body' }, agent);
    sv('circle', { r: 3.6, cx: 0, cy: 0, 'class': 'vm-ag-eye' }, agent);
    sv('circle', { r: 1.6, cx: 0.6, cy: 0, 'class': 'vm-ag-pupil' }, agent);

    var cnt = el('div', 'vm-counts', null, root);
    var readEl = el('span', 'vm-cnt', null, cnt);
    var chgEl = el('span', 'vm-cnt vm-cnt-ok', null, cnt);
    var lk = icon('0 0 16 16', chgEl, 'vm-lock');
    sv('path', { d: 'M5.5 7V5a2.5 2.5 0 0 1 5 0v2' }, lk);
    sv('rect', { x: 3, y: 7, width: 10, height: 7, rx: 1.6 }, lk);
    var chgTxt = el('span', null, (viz.changedLabel || '') + ' ' + viz.changed, chgEl);

    var seen = {};
    function readCount() { return Object.keys(seen).length; }
    function showRead() { readEl.textContent = (viz.readLabel || '') + ' ' + readCount() + '/' + total; }
    function mark(i) {
      seen[i] = true; boxes[i].classList.add('vm-read'); texts[i].classList.add('vm-read'); showRead();
    }
    function place(a) { agent.setAttribute('transform', 'translate(' + a[0] + ' ' + a[1] + ')'); }
    function reset() {
      T.clear(); seen = {};
      boxes.forEach(function (b) { b.setAttribute('class', 'vm-nbox'); });
      texts.forEach(function (t) { t.setAttribute('class', 'vm-ntext'); });
      links.forEach(function (l, i) {
        var a = POS[l[0]];
        live[i].setAttribute('x2', a[0]); live[i].setAttribute('y2', a[1]);
      });
      agent.setAttribute('class', 'vm-agent');
      place(POS[0]); showRead();
    }
    function drawn(i) {
      var b = POS[links[i][1]]; live[i].setAttribute('x2', b[0]); live[i].setAttribute('y2', b[1]);
    }
    return {
      interactive: false,
      play: function () {
        reset();
        if (ctx.reduced) {
          nodes.forEach(function (n, i) { mark(i); });
          links.forEach(function (l, i) { drawn(i); });
          agent.setAttribute('class', 'vm-agent vm-gone');
          return;
        }
        agent.classList.add('vm-on');
        mark(0);
        links.forEach(function (l, i) {
          T.at(function () {
            var a = POS[l[0]], b = POS[l[1]];
            T.tween(480, function (p) {
              var x = a[0] + (b[0] - a[0]) * p, y = a[1] + (b[1] - a[1]) * p;
              place([x, y]);
              live[i].setAttribute('x2', x); live[i].setAttribute('y2', y);
            }, function () { if (!seen[l[1]]) mark(l[1]); });
          }, i * 620);
        });
        T.at(function () { agent.classList.add('vm-gone'); }, links.length * 620 + 300);
      }
    };
  };

  /* ---------- 6. inventory ---------- */
  window.AKVIZ.inventory = function (body, viz, ctx) {
    var T = timers();
    var root = el('div', 'vm-inv', null, body);
    var COL = ['var(--ok)', 'var(--tag-data)', 'var(--tag-automation)', 'var(--tag-quality)', 'var(--text-2)'];
    var sts = viz.statuses || [];
    var grid = el('div', 'vm-inv-grid', null, root);
    grid.setAttribute('role', 'img');
    grid.setAttribute('aria-label', sts.map(function (s) { return s.label + ' ' + s.count; }).join(', ') +
      '; ' + viz.flagged + ' ' + (viz.flagLabel || ''));
    var tiles = [], byStatus = [];
    sts.forEach(function (s, si) {
      byStatus[si] = [];
      for (var k = 0; k < s.count; k++) {
        var t = el('span', 'vm-tile', null, grid);
        t.style.background = COL[si % COL.length];
        t.dataset.s = String(si);
        tiles.push(t); byStatus[si].push(t);
      }
    });
    /* flag deterministically: spread across the first statuses, live first */
    var left = viz.flagged || 0;
    byStatus.forEach(function (pool) {
      var k = Math.min(left, pool.length);
      for (var i = 0; i < k; i++) pool[Math.floor((i + 0.5) * pool.length / k)].classList.add('vm-flag');
      left -= k;
    });
    var legend = el('div', 'vm-inv-leg', null, root);
    var btns = sts.map(function (s, si) {
      var b = el('button', 'vm-lg', null, legend);
      b.type = 'button';
      b.setAttribute('aria-pressed', 'false');
      var sw = el('span', 'vm-sw', null, b); sw.style.background = COL[si % COL.length];
      el('span', 'vm-lg-t', s.label, b);
      el('span', 'vm-lg-n', String(s.count), b);
      b.addEventListener('click', function () { setFilter(active === si ? -1 : si); });
      return b;
    });
    var fl = el('p', 'vm-flagkey', null, root);
    el('span', 'vm-tile vm-flag vm-flag-s', null, fl);
    el('span', null, viz.flagged + ' ' + (viz.flagLabel || ''), fl);

    var active = -1;
    function setFilter(si) {
      active = si;
      btns.forEach(function (b, i) { b.setAttribute('aria-pressed', i === si ? 'true' : 'false'); });
      tiles.forEach(function (t) { t.classList.toggle('vm-dim', si >= 0 && Number(t.dataset.s) !== si); });
    }
    function reset() { T.clear(); tiles.forEach(function (t) { t.classList.remove('vm-in'); }); }
    return {
      interactive: false,
      play: function () {
        reset();
        if (ctx.reduced) { tiles.forEach(function (t) { t.classList.add('vm-in'); }); return; }
        byStatus.forEach(function (pool, si) {
          pool.forEach(function (t, k) {
            T.at(function () { t.classList.add('vm-in'); }, si * 450 + k * 22);
          });
        });
      }
    };
  };

  /* ---------- 7. footer ---------- */
  window.AKVIZ.footer = function (body, viz, ctx) {
    var T = timers();
    var root = el('div', 'vm-ft', null, body);
    var kinds = viz.kinds || [];
    var seg = el('div', 'vm-seg', null, root);
    var btns = kinds.map(function (k, i) {
      var b = el('button', 'vm-seg-b', k.label, seg);
      b.type = 'button'; b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () { T.clear(); pick(i, true); });
      return b;
    });
    var card = el('div', 'vm-ft-card', null, root);
    var mark = el('div', 'vm-ft-mark', null, card);
    var m = icon('0 0 64 64', mark, 'vm-cog');
    m.setAttribute('role', 'img'); m.removeAttribute('aria-hidden');
    m.setAttribute('aria-label', viz.signature || '');
    for (var i = 0; i < 8; i++) {
      var a = i * Math.PI / 4, c = Math.cos(a), s = Math.sin(a);
      sv('line', { x1: 32 + c * 20, y1: 32 + s * 20, x2: 32 + c * 27, y2: 32 + s * 27, 'class': 'vm-ray' }, m);
    }
    sv('circle', { cx: 32, cy: 32, r: 16, 'class': 'vm-disc' }, m);
    sv('path', { d: 'M25 32.5q7 8 14 0', 'class': 'vm-smile' }, m);
    sv('circle', { cx: 50, cy: 50, r: 13, 'class': 'vm-badge' }, m);
    var ig = sv('g', { 'class': 'vm-ic' }, m);
    var ICONS = {
      events: ['M44.5 46.5h11v8h-11z', 'M44.5 49.5h11', 'M47.5 44.5v3', 'M52.5 44.5v3'],
      digest: ['M46 54L50 46L54 54', 'M46 54H54'],
      usage: ['M45.5 55.5v-3', 'M50 55.5v-7', 'M54.5 55.5v-5']
    };
    function drawIcon(id) {
      while (ig.firstChild) ig.removeChild(ig.firstChild);
      (ICONS[id] || ICONS.events).forEach(function (d) { sv('path', { d: d, 'class': 'vm-icp' }, ig); });
      if (id === 'digest') [[46, 54], [54, 54], [50, 46]].forEach(function (p) {
        sv('circle', { cx: p[0], cy: p[1], r: 1.9, 'class': 'vm-icd' }, ig);
      });
    }
    var txt = el('div', 'vm-ft-txt', null, card);
    el('strong', 'vm-sig', viz.signature || '', txt);
    var kindEl = el('span', 'vm-kind', '', txt);
    kindEl.setAttribute('aria-live', 'polite');
    var dl = el('dl', 'vm-rows', null, txt);
    (viz.rows || []).forEach(function (r) {
      var w = el('div', 'vm-rw', null, dl);
      el('dt', null, r.k, w); el('dd', null, r.v, w);
    });
    function pick(i, pop) {
      btns.forEach(function (b, j) { b.setAttribute('aria-pressed', j === i ? 'true' : 'false'); });
      drawIcon(kinds[i].id);
      kindEl.textContent = kinds[i].label;
      ig.classList.remove('vm-pop');
      if (pop && !ctx.reduced) { void ig.getBoundingClientRect(); ig.classList.add('vm-pop'); }
    }
    pick(0, false);
    return {
      interactive: false,
      play: function () {
        T.clear();
        pick(0, false);
        if (ctx.reduced) return;
        kinds.forEach(function (k, i) {
          if (i === 0) return;
          T.at(function () { pick(i, true); }, i * 900);
        });
        T.at(function () { pick(0, true); }, kinds.length * 900);
      }
    };
  };
})();
