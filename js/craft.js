/* craft.js — the "What I do" section (#craft), rendered from AK.craft.
   Self-contained: own helpers, textContent only (the one innerHTML is for static icon markup written here).
   Interface strings come through AKt('key', 'English fallback'). */
(function () {
  'use strict';

  var AK = window.AK;
  if (!AK || !AK.craft) return;

  var doc = document;
  var SVGNS = 'http://www.w3.org/2000/svg';
  var C = AK.craft;

  var t = typeof window.AKt === 'function' ? window.AKt : function (key, fallback) { return fallback || key; };

  function reduced() {
    return !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function el(tag, props, kids) {
    var n = doc.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') n.className = v;
        else if (k === 'text') n.textContent = v;
        else n.setAttribute(k, v === true ? '' : v);
      });
    }
    (kids || []).forEach(function (c) {
      if (c === null || c === undefined) return;
      n.appendChild(typeof c === 'string' ? doc.createTextNode(c) : c);
    });
    return n;
  }

  function sv(tag, attrs, kids) {
    var n = doc.createElementNS(SVGNS, tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    (kids || []).forEach(function (c) { n.appendChild(c); });
    return n;
  }

  /* run fn once, the first time node scrolls into view (immediately if motion is reduced) */
  function onceVisible(node, fn) {
    if (reduced() || !('IntersectionObserver' in window)) { fn(true); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); fn(false); }
    }, { threshold: 0.25 });
    io.observe(node);
  }

  function caption(text) {
    return text ? el('figcaption', { class: 'cr-cap', text: text }) : null;
  }

  /* ---------- toolmap ---------- */

  var SHIELD = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

  function badge() {
    var b = el('span', { class: 'cr-badge', 'aria-hidden': 'true' });
    b.innerHTML = SHIELD;
    return b;
  }

  function vizToolmap(v) {
    var tools = v.tools || [];
    if (!tools.length) return null;
    var n = tools.length;
    var map = el('div', { class: 'cr-map' });

    /* spokes: one line per tool, centre to tool, in a 100x100 box that stretches with the map */
    var lines = [];
    var svg = sv('svg', { class: 'cr-spokes', viewBox: '0 0 100 100', preserveAspectRatio: 'none', 'aria-hidden': 'true', focusable: 'false' });
    var pts = tools.map(function (tool, i) {
      var a = (-90 + (360 / n) * i) * Math.PI / 180;
      return { x: 50 + 41 * Math.cos(a), y: 50 + 38 * Math.sin(a) };
    });
    pts.forEach(function (p) {
      var ln = sv('line', { x1: 50, y1: 50, x2: p.x.toFixed(2), y2: p.y.toFixed(2), 'vector-effect': 'non-scaling-stroke', class: 'cr-spoke' });
      svg.appendChild(ln);
      lines.push(ln);
    });
    map.appendChild(svg);
    map.appendChild(el('div', { class: 'cr-hub', text: v.hub || '' }));

    var readout = el('p', { class: 'cr-readout', 'aria-live': 'polite' });
    var btns = [];
    var grid = el('ul', { class: 'cr-tools' });
    tools.forEach(function (tool, i) {
      var b = el('button', { type: 'button', class: 'cr-tool' + (tool.admin ? ' is-admin' : ''), 'aria-pressed': 'false', 'data-tool': tool.id });
      b.style.setProperty('--x', pts[i].x.toFixed(2) + '%');
      b.style.setProperty('--y', pts[i].y.toFixed(2) + '%');
      b.appendChild(el('span', { class: 'cr-tool__name', text: tool.name }));
      if (tool.admin) {
        b.appendChild(badge());
        if (v.adminLabel) b.appendChild(el('span', { class: 'sr-only', text: ', ' + v.adminLabel }));
      }
      b.addEventListener('click', function () { select(i); });
      b.addEventListener('focus', function () { select(i); });
      btns.push(b);
      grid.appendChild(el('li', { class: 'cr-tools__li' }, [b]));
    });
    map.appendChild(grid);

    function select(i) {
      var tool = tools[i];
      btns.forEach(function (b, k) { b.setAttribute('aria-pressed', k === i ? 'true' : 'false'); });
      lines.forEach(function (ln, k) { ln.classList.toggle('is-on', k === i); });
      readout.textContent = '';
      readout.appendChild(el('strong', { class: 'cr-readout__name', text: tool.name }));
      if (tool.admin && v.adminLabel) readout.appendChild(el('span', { class: 'cr-readout__admin', text: v.adminLabel }));
      readout.appendChild(el('span', { class: 'cr-readout__role', text: tool.role }));
    }
    select(0);

    var legend = v.adminNote
      ? el('p', { class: 'cr-legend' }, [badge(), el('span', { text: v.adminNote })])
      : null;

    return el('figure', { class: 'cr-viz cr-viz--toolmap' }, [map, readout, legend, caption(v.caption)]);
  }

  function compareBlock(cmp) {
    if (!cmp) return null;
    function col(side, cls) {
      if (!side) return null;
      return el('div', { class: 'cr-col ' + cls }, [
        el('h4', { class: 'cr-col__label', text: side.label }),
        el('ol', { class: 'cr-steps' }, (side.steps || []).map(function (s) {
          return el('li', { class: 'cr-step', text: s });
        }))
      ]);
    }
    return el('figure', { class: 'cr-compare' }, [
      el('div', { class: 'cr-compare__cols' }, [col(cmp.before, 'cr-col--before'), col(cmp.after, 'cr-col--after')]),
      caption(cmp.caption)
    ]);
  }

  /* ---------- flow ---------- */

  function vizFlow(v) {
    var stages = v.stages || [];
    if (!stages.length) return null;
    var ol = el('ol', { class: 'cr-flow' }, stages.map(function (s, i) {
      var li = el('li', { class: 'cr-stage' }, [
        el('span', { class: 'cr-stage__label', text: s.label }),
        el('span', { class: 'cr-stage__note', text: s.note })
      ]);
      li.style.setProperty('--i', i);
      return li;
    }));
    var fig = el('figure', { class: 'cr-viz cr-viz--flow' }, [ol, caption(v.caption)]);
    onceVisible(fig, function (instant) {
      if (instant) { fig.classList.add('is-in'); return; }
      fig.classList.add('is-armed');
      requestAnimationFrame(function () { requestAnimationFrame(function () { fig.classList.add('is-in'); }); });
    });
    return fig;
  }

  /* ---------- runReport ---------- */

  function vizReport(v) {
    var rows = v.rows || [];
    var dl = el('dl', { class: 'cr-rows' });
    var counters = [];
    rows.forEach(function (r, i) {
      var dd = el('dd', { class: 'cr-v' });
      var final = String(r.v);
      if (/^\d+$/.test(final)) {
        dd.appendChild(el('span', { class: 'sr-only', text: final }));
        var vis = el('span', { 'aria-hidden': 'true', text: final });
        dd.appendChild(vis);
        counters.push({ node: vis, to: parseInt(final, 10), text: final });
      } else {
        dd.textContent = final;
      }
      var row = el('div', { class: 'cr-row' }, [el('dt', { class: 'cr-k', text: r.k }), dd]);
      row.style.setProperty('--i', i);
      dl.appendChild(row);
    });

    var head = el('div', { class: 'cr-report__head' }, [
      el('span', { class: 'cr-report__title', text: v.title || '' }),
      v.status ? el('span', { class: 'cr-pill', text: v.status }) : null
    ]);
    var card = el('div', { class: 'cr-report card' }, [head, dl, v.note ? el('p', { class: 'cr-report__note', text: v.note }) : null]);
    var fig = el('figure', { class: 'cr-viz cr-viz--report' }, [card, caption(v.caption)]);

    onceVisible(fig, function (instant) {
      if (instant) { return; }
      fig.classList.add('is-armed');
      counters.forEach(function (c) { c.node.textContent = '0'; });
      requestAnimationFrame(function () { requestAnimationFrame(function () { fig.classList.add('is-in'); }); });
      var start = null, dur = 900;
      function tick(ts) {
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        var e = 1 - Math.pow(1 - p, 3);
        counters.forEach(function (c) { c.node.textContent = String(Math.round(c.to * e)); });
        if (p < 1) requestAnimationFrame(tick);
        else counters.forEach(function (c) { c.node.textContent = c.text; });
      }
      setTimeout(function () { requestAnimationFrame(tick); }, 250);
    });
    return fig;
  }

  /* ---------- artifacts ---------- */

  var ICONS = {
    poc: [['path', { d: 'M9 3h6' }], ['path', { d: 'M10 3v6L4.7 18.2A1.6 1.6 0 0 0 6.1 21h11.8a1.6 1.6 0 0 0 1.4-2.8L14 9V3' }], ['path', { d: 'M7.5 15h9' }]],
    demo: [['rect', { x: 3, y: 4, width: 18, height: 12, rx: 2 }], ['path', { d: 'M10.5 7.5v5l4-2.5z' }], ['path', { d: 'M8 20h8M12 16v4' }]],
    dashboard: [['path', { d: 'M3 20h18' }], ['path', { d: 'M6.5 20v-7M12 20V5M17.5 20v-10' }]],
    page: [['path', { d: 'M6 3h8.5L19 7.5V21H6z' }], ['path', { d: 'M14.5 3v4.5H19' }], ['path', { d: 'M9 12h7M9 15.5h7M9 8.5h2.5' }]],
    video: [['rect', { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ['path', { d: 'M7 5v14M17 5v14M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4' }], ['path', { d: 'M10.5 9.5v5l3.5-2.5z' }]]
  };

  function icon(id) {
    var parts = ICONS[id] || ICONS.page;
    var s = sv('svg', {
      viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none', stroke: 'currentColor', 'stroke-width': 1.8,
      'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', focusable: 'false', class: 'cr-ico'
    });
    parts.forEach(function (p) { s.appendChild(sv(p[0], p[1])); });
    return s;
  }

  function vizArtifacts(v) {
    var items = v.items || [];
    if (!items.length) return null;
    var ul = el('ul', { class: 'cr-arts' }, items.map(function (it) {
      return el('li', { class: 'cr-art' }, [
        el('span', { class: 'cr-art__icon' }, [icon(it.id)]),
        el('span', { class: 'cr-art__label', text: it.label }),
        el('span', { class: 'cr-art__note', text: it.note })
      ]);
    }));
    return el('figure', { class: 'cr-viz cr-viz--arts' }, [ul, caption(v.caption)]);
  }

  /* ---------- trace: step-through of a made-up bug ---------- */

  function vizTrace(v) {
    var steps = v.steps || [];
    if (!steps.length) return null;
    var shown = 1;
    var items = steps.map(function (st) {
      var kind = /^(symptom|ok|bad|root)$/.test(st.kind) ? st.kind : 'symptom';
      return el('li', { class: 'cr-tr cr-tr--' + kind }, [
        el('span', { class: 'cr-tr__label', text: st.label }),
        el('span', { class: 'cr-tr__text', text: st.text })
      ]);
    });
    var list = el('ol', { class: 'cr-trace', 'aria-live': 'polite' }, items);
    var fix = el('p', { class: 'cr-trace__fix', 'aria-live': 'polite' });
    var btn = el('button', { type: 'button', class: 'btn cr-trace__btn' });

    function paint() {
      items.forEach(function (li, i) {
        if (i < shown) li.removeAttribute('hidden'); else li.setAttribute('hidden', '');
        li.classList.toggle('is-last', i === shown - 1);
      });
      var done = shown >= steps.length;
      fix.textContent = done && v.fix ? v.fix : '';
      if (done && v.fix) fix.removeAttribute('hidden'); else fix.setAttribute('hidden', '');
      btn.textContent = done ? (v.again || 'Again') : (v.next || 'Next');
    }
    btn.addEventListener('click', function () {
      shown = shown >= steps.length ? 1 : shown + 1;
      paint();
    });
    paint();

    var card = el('div', { class: 'cr-tracecard card' }, [list, fix, btn]);
    return el('figure', { class: 'cr-viz cr-viz--trace' }, [card, caption(v.caption)]);
  }

  var VIZ = { toolmap: vizToolmap, flow: vizFlow, runReport: vizReport, trace: vizTrace, artifacts: vizArtifacts };
  var FULL = { toolmap: 1, flow: 1, artifacts: 1 };   /* these need the full width on laptops */

  /* ---------- section ---------- */

  function render() {
    var host = doc.getElementById('craft-root');
    if (!host) return;

    host.appendChild(el('p', { class: 'label', text: '02 / ' + t('labelCraft', 'what I do') }));
    host.appendChild(el('h2', { class: 'sec__title', id: 'craft-title', text: C.title }));
    if (C.body) host.appendChild(el('p', { class: 'lead', text: C.body }));

    var list = el('div', { class: 'cr-pillars' });
    (C.pillars || []).forEach(function (p, i) {
      var v = p.viz;
      var viz = null;
      if (v) {
        var fn = VIZ[v.type];
        if (fn) {
          try { viz = fn(v); } catch (e) { if (window.console) console.error(e); }
        } else if (window.console) {
          console.warn('craft: unknown viz type "' + v.type + '", skipped');
        }
      }
      var cmp = viz ? compareBlock(p.compare) : null;
      var full = v && FULL[v.type];
      var hid = 'cr-h-' + (p.id || i);
      var text = el('div', { class: 'cr-text' }, [el('h3', { class: 'cr-title', id: hid, text: p.title })]
        .concat((p.body || []).map(function (x) { return el('p', { class: 'cr-p', text: x }); })));
      var vizWrap = viz ? el('div', { class: 'cr-visual' }, [viz, cmp]) : null;
      list.appendChild(el('article', {
        class: 'cr-pillar' + (full ? ' cr-pillar--full' : '') + (!full && i % 2 ? ' cr-pillar--flip' : ''),
        'aria-labelledby': hid
      }, [text, vizWrap]));
    });
    host.appendChild(list);
  }

  try { render(); } catch (e) { if (window.console) console.error(e); }
})();
