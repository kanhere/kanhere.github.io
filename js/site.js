/* site.js — renders everything except the projects section from window.AK.
   All data is inserted with textContent (see el()); the only innerHTML is for static icon strings written here. */
(function () {
  'use strict';

  var AK = window.AK;
  if (!AK) return;

  var doc = document;
  var root = doc.documentElement;

  /* ---------- helpers ---------- */

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

  function byId(id) { return doc.getElementById(id); }

  /* static, trusted SVG strings only */
  function svgIcon(markup, cls) {
    var s = el('span', { class: cls || 'icon', 'aria-hidden': 'true' });
    s.innerHTML = markup;
    return s;
  }

  function sectionHead(num, name, id, title) {
    return [
      el('p', { class: 'label' }, [num + ' / ' + name]),
      el('h2', { class: 'sec__title', id: id, text: title })
    ];
  }

  function paragraphs(list, cls) {
    return (list || []).map(function (t) { return el('p', { class: cls || 'lead', text: t }); });
  }

  function chipList(items, cls) {
    return el('ul', { class: 'chips ' + (cls || '') }, (items || []).map(function (t) {
      return el('li', null, [el('span', { class: 'chip', text: t })]);
    }));
  }

  function append(parent, nodes) {
    nodes.forEach(function (n) { parent.appendChild(n); });
  }

  var PLUS = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';

  /* ---------- theme toggle ---------- */

  var SUN = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';

  function effectiveTheme() {
    var t = root.dataset.theme;
    if (t === 'light' || t === 'dark') return t;
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function initTheme() {
    var btn = byId('theme-toggle');
    if (!btn) return;
    function paint() {
      var dark = effectiveTheme() === 'dark';
      btn.innerHTML = dark ? SUN : MOON;
      btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    btn.addEventListener('click', function () {
      var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('ak-theme', next); } catch (e) {}
      paint();
    });
    if (window.matchMedia) {
      var mq = matchMedia('(prefers-color-scheme: dark)');
      var onChange = function () { paint(); };
      if (mq.addEventListener) mq.addEventListener('change', onChange);
    }
    paint();
  }

  /* ---------- hero ---------- */

  function renderHero() {
    var p = AK.profile;
    var text = byId('hero-text');
    if (!text) return;

    var nameEl = byId('brand-name');
    if (nameEl) nameEl.textContent = p.name;

    text.appendChild(el('h1', { class: 'hero__name', id: 'hero-title', text: p.name }));
    text.appendChild(el('p', { class: 'hero__role', text: p.role }));
    text.appendChild(el('p', { class: 'hero__meta' }, [
      el('span', { text: p.team }),
      el('span', { class: 'sep', 'aria-hidden': 'true', text: ' · ' }),
      el('span', { text: p.place })
    ]));
    append(text, paragraphs(p.intro, 'hero__intro'));

    text.appendChild(el('p', { class: 'mini-label', id: 'ask-label', text: 'Ask me about' }));
    var ask = chipList(p.askMeAbout, 'chips--ask');
    ask.setAttribute('aria-labelledby', 'ask-label');
    text.appendChild(ask);

    var learn = el('p', { class: 'hero__learn' });
    learn.appendChild(el('span', { class: 'hero__learn-label', text: 'Here to learn: ' }));
    learn.appendChild(doc.createTextNode((p.hereToLearn || []).join(' · ')));
    text.appendChild(learn);

    text.appendChild(el('div', { class: 'actions' }, [
      el('a', { class: 'btn btn--primary', href: p.linkedin, target: '_blank', rel: 'noopener', text: AK.connect.linkedinLabel }),
      el('a', { class: 'btn', href: '#approach', text: 'How to say hi' })
    ]));

    /* mark caption: tap or hover reveals the note */
    var cap = byId('mark-cap');
    var art = byId('hero-art');
    if (cap && AK.mark) {
      var btn = el('button', { class: 'mark-cap__btn', type: 'button', 'aria-expanded': 'false', 'aria-controls': 'mark-note', text: AK.mark.name });
      var note = el('p', { class: 'mark-cap__note', id: 'mark-note', hidden: true, text: AK.mark.note });
      cap.appendChild(btn);
      cap.appendChild(note);
      var setOpen = function (open) {
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        note.hidden = !open;
      };
      btn.addEventListener('click', function () { setOpen(note.hidden); });
      if (window.matchMedia && matchMedia('(hover: hover)').matches && art) {
        art.addEventListener('mouseenter', function () { setOpen(true); });
        art.addEventListener('mouseleave', function () { setOpen(false); });
      }
    }
  }

  /* ---------- approach ---------- */

  function renderApproach() {
    var host = byId('approach-root');
    if (!host) return;
    var a = AK.approach;
    append(host, sectionHead('01', 'say hi', 'approach-title', a.title));
    append(host, paragraphs(a.body));
    host.appendChild(el('h3', { class: 'mini-label openers-label', text: a.startersLabel }));

    var list = el('ul', { class: 'openers' });
    var items = [];
    a.starters.forEach(function (s, i) {
      var qid = 'opener-a-' + i;
      var btn = el('button', { class: 'opener__btn', type: 'button', 'aria-expanded': 'false', 'aria-controls': qid }, [
        el('span', { class: 'opener__q', text: '“' + s.ask + '”' }),
        svgIcon(PLUS, 'opener__plus')
      ]);
      var ans = el('div', { class: 'opener__a', id: qid, hidden: true }, [el('p', { text: s.mine })]);
      var li = el('li', { class: 'card opener' }, [btn, ans]);
      list.appendChild(li);
      items.push({ btn: btn, ans: ans, li: li });
    });
    items.forEach(function (it) {
      it.btn.addEventListener('click', function () {
        var open = it.ans.hidden;
        items.forEach(function (o) {
          o.ans.hidden = true;
          o.btn.setAttribute('aria-expanded', 'false');
          o.li.classList.remove('is-open');
        });
        if (open) {
          it.ans.hidden = false;
          it.btn.setAttribute('aria-expanded', 'true');
          it.li.classList.add('is-open');
        }
      });
    });
    host.appendChild(list);
  }

  /* ---------- journey ---------- */

  function tagChips(tags) {
    if (!tags || !tags.length) return null;
    return chipList(tags, 'stop__tags');
  }

  function renderJourney() {
    var host = byId('journey-root');
    if (!host) return;
    var j = AK.journey;
    var stops = j.stops;
    var lastIdx = stops.length - 1;

    append(host, sectionHead('02', 'journey', 'journey-title', j.title));

    /* route strip */
    var route = el('ol', { class: 'route', 'aria-label': j.route.join(', ') });
    j.route.forEach(function (city, i) {
      route.appendChild(el('li', { class: 'route__stop' + (i === j.route.length - 1 ? ' is-end' : '') }, [
        el('span', { class: 'route__dot', 'aria-hidden': 'true' }),
        el('span', { class: 'route__city', text: city })
      ]));
    });
    host.appendChild(route);

    /* subtle ridge silhouette */
    var ridge = svgIcon(
      '<svg viewBox="0 0 1200 70" preserveAspectRatio="none" focusable="false">' +
      '<path d="M0 70V46l90-22 70 20 110-34 90 36 80-18 120 30 100-40 110 44 90-26 120 30 110-36 110 32V70z" class="ridge__far"/>' +
      '<path d="M0 70V58l130-20 100 24 140-30 120 26 150-22 130 24 110-18 140 22 180-16V70z" class="ridge__near"/>' +
      '</svg>', 'ridge');
    host.appendChild(ridge);

    /* --- phone: vertical trail --- */
    var trail = el('ol', { class: 'trail trail--mobile' });
    var mItems = [];
    stops.forEach(function (s, i) {
      var isNow = i === lastIdx;
      var pid = 'stop-panel-' + s.id;
      var whenRow = el('span', { class: 'stop__when' }, [s.when]);
      if (isNow) whenRow.appendChild(el('span', { class: 'here', text: 'You are here' }));
      var btn = el('button', { class: 'stop__btn', type: 'button', 'aria-expanded': 'false', 'aria-controls': pid }, [
        whenRow,
        el('span', { class: 'stop__title', text: s.title }),
        el('span', { class: 'stop__place', text: s.place }),
        svgIcon(PLUS, 'stop__plus')
      ]);
      var panel = el('div', { class: 'stop__panel', id: pid, hidden: true }, [
        el('p', { class: 'stop__sub', text: s.sub }),
        el('p', { class: 'stop__body', text: s.body }),
        tagChips(s.tags)
      ]);
      var li = el('li', { class: 'stop' + (isNow ? ' is-now' : '') }, [
        el('span', { class: 'stop__dot', 'aria-hidden': 'true' }),
        el('div', { class: 'card stop__card' }, [el('h3', { class: 'stop__h' }, [btn]), panel])
      ]);
      trail.appendChild(li);
      mItems.push({ btn: btn, panel: panel, li: li });
    });
    function setStop(it, open) {
      it.panel.hidden = !open;
      it.btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      it.li.classList.toggle('is-open', open);
    }
    mItems.forEach(function (it) {
      it.btn.addEventListener('click', function () { setStop(it, it.panel.hidden); });
    });
    setStop(mItems[lastIdx], true);
    host.appendChild(trail);

    /* --- laptop: tabs + one panel --- */
    var desk = el('div', { class: 'trail trail--desk' });
    var tabs = el('div', { class: 'tabs', role: 'tablist', 'aria-label': j.title });
    var tabEls = [];
    stops.forEach(function (s, i) {
      var isNow = i === lastIdx;
      var tab = el('button', {
        class: 'tab' + (isNow ? ' is-now' : ''), type: 'button', role: 'tab',
        id: 'tab-' + s.id, 'aria-controls': 'trail-panel', 'aria-selected': 'false', tabindex: '-1'
      }, [
        el('span', { class: 'tab__dot', 'aria-hidden': 'true' }),
        el('span', { class: 'tab__year', text: s.year }),
        el('span', { class: 'tab__title', text: s.title })
      ]);
      tabs.appendChild(tab);
      tabEls.push(tab);
    });
    var panel = el('div', { class: 'card tabpanel', role: 'tabpanel', id: 'trail-panel', tabindex: '0' });

    function selectTab(i, focus) {
      var s = stops[i];
      tabEls.forEach(function (t, k) {
        var on = k === i;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        t.classList.toggle('is-active', on);
      });
      panel.setAttribute('aria-labelledby', 'tab-' + s.id);
      panel.textContent = '';
      var meta = el('p', { class: 'tabpanel__meta' }, [s.when + ' · ' + s.place]);
      if (i === lastIdx) meta.appendChild(el('span', { class: 'here', text: 'You are here' }));
      append(panel, [
        meta,
        el('h3', { class: 'tabpanel__title', text: s.title }),
        el('p', { class: 'stop__sub', text: s.sub }),
        el('p', { class: 'stop__body', text: s.body }),
        tagChips(s.tags)
      ].filter(Boolean));
      if (focus) tabEls[i].focus();
    }
    tabEls.forEach(function (t, i) {
      t.addEventListener('click', function () { selectTab(i, false); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % tabEls.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + tabEls.length) % tabEls.length;
        else if (e.key === 'Home') n = 0;
        else if (e.key === 'End') n = tabEls.length - 1;
        if (n !== null) { e.preventDefault(); selectTab(n, true); }
      });
    });
    desk.appendChild(tabs);
    desk.appendChild(panel);
    host.appendChild(desk);
    selectTab(lastIdx, false);

    /* certifications */
    host.appendChild(el('div', { class: 'certs' }, [
      el('p', { class: 'mini-label', id: 'certs-label', text: j.certsLabel }),
      (function () { var c = chipList(j.certs, 'chips--certs'); c.setAttribute('aria-labelledby', 'certs-label'); return c; })()
    ]));
  }

  /* ---------- field notes ---------- */

  function renderNotes() {
    var host = byId('notes-root');
    if (!host) return;
    var f = AK.fieldNotes;
    append(host, sectionHead('04', 'field notes', 'notes-title', f.title));
    host.appendChild(el('p', { class: 'lead', text: f.body }));
    var list = el('ol', { class: 'notes' });
    f.notes.forEach(function (n, i) {
      var num = (i + 1 < 10 ? '0' : '') + (i + 1);
      list.appendChild(el('li', { class: 'card note' }, [
        el('span', { class: 'note__num', 'aria-hidden': 'true', text: num }),
        el('h3', { class: 'note__rule', text: n.rule }),
        el('p', { class: 'note__why', text: n.why })
      ]));
    });
    host.appendChild(list);
  }

  /* ---------- toolbox ---------- */

  function renderToolbox() {
    var host = byId('toolbox-root');
    if (!host) return;
    var t = AK.toolbox;
    append(host, sectionHead('05', 'toolbox', 'toolbox-title', t.title));
    var groups = el('div', { class: 'tool-groups' });
    t.groups.forEach(function (g) {
      groups.appendChild(el('div', { class: 'tool-group' }, [
        el('h3', { class: 'mini-label', text: g.label }),
        chipList(g.items)
      ]));
    });
    host.appendChild(groups);
  }

  /* ---------- personal ---------- */

  var ICONS = {
    tech: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="3"/><path d="M7.5 10l3 2.2-3 2.2M12.5 15h4.5"/></svg>',
    hiking: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 19.5l6.5-11 4 6.5 2.5-3.5 6 8z"/><path d="M7.6 11.6l1.4 1.4 1.4-1.4"/></svg>',
    quiet: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4.5" height="6.5" rx="2"/><rect x="16.5" y="14" width="4.5" height="6.5" rx="2"/></svg>'
  };

  function renderPersonal() {
    var host = byId('personal-root');
    if (!host) return;
    var p = AK.personal;
    append(host, sectionHead('06', 'away from the keyboard', 'personal-title', p.title));
    var grid = el('ul', { class: 'pcards' });
    p.cards.forEach(function (c) {
      var li = el('li', { class: 'card pcard' }, [
        svgIcon(ICONS[c.id] || ICONS.tech, 'pcard__icon'),
        el('h3', { class: 'pcard__title', text: c.title }),
        el('p', { class: 'pcard__body', text: c.body })
      ]);
      if (c.todo) li.appendChild(el('p', { class: 'todo', text: c.todo }));
      grid.appendChild(li);
    });
    host.appendChild(grid);
  }

  /* ---------- connect + QR ---------- */

  function qrTarget() {
    var url = AK.siteUrl || ((location.protocol === 'http:' || location.protocol === 'https:') &&
      !/^(localhost|127\.|\[::1\]|0\.0\.0\.0)/.test(location.hostname) ? location.origin + location.pathname : '');
    return url;
  }

  /* returns an <svg> element (scalable) or null */
  function buildQr(text) {
    if (!window.AKQR || typeof window.AKQR.svg !== 'function') return null;
    try {
      var holder = el('div');
      holder.innerHTML = window.AKQR.svg(text, { margin: 4, moduleSize: 8 });
      var svg = holder.querySelector('svg');
      if (!svg) return null;
      if (!svg.getAttribute('viewBox')) {
        var w = parseFloat(svg.getAttribute('width')), h = parseFloat(svg.getAttribute('height'));
        if (w && h) svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
      }
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'QR code');
      return svg;
    } catch (e) {
      return null;
    }
  }

  function renderConnect() {
    var host = byId('connect-root');
    if (!host) return;
    var c = AK.connect;
    append(host, sectionHead('07', 'connect', 'connect-title', c.title));

    var grid = el('div', { class: 'connect' });
    var left = el('div', { class: 'connect__text' }, [
      el('p', { class: 'lead', text: c.body }),
      el('div', { class: 'actions' }, [
        el('a', { class: 'btn btn--primary', href: AK.profile.linkedin, target: '_blank', rel: 'noopener', text: c.linkedinLabel })
      ])
    ]);
    grid.appendChild(left);

    var url = qrTarget();
    var target = url || AK.profile.linkedin;
    var svg = buildQr(target);

    var card = el('div', { class: 'card qrcard' });
    card.appendChild(el('h3', { class: 'qrcard__title', text: c.qrTitle }));
    if (svg) {
      var tile = el('div', { class: 'qr-tile' });
      tile.appendChild(svg);
      card.appendChild(tile);
    }
    card.appendChild(el('p', { class: 'qrcard__cap', text: url ? c.qrReady : c.qrPending }));
    if (url) card.appendChild(el('p', { class: 'qrcard__url', text: url }));

    if (svg) {
      var dlg = el('dialog', { class: 'qr-dialog', 'aria-label': c.qrTitle });
      var big = el('div', { class: 'qr-tile qr-tile--big' });
      big.appendChild(svg.cloneNode(true));
      var close = el('button', { class: 'btn', type: 'button', text: 'Close' });
      dlg.appendChild(big);
      if (url) dlg.appendChild(el('p', { class: 'qrcard__url', text: url }));
      dlg.appendChild(close);
      doc.body.appendChild(dlg);

      var openBtn = el('button', { class: 'btn', type: 'button', text: 'Show QR full screen' });
      openBtn.addEventListener('click', function () {
        if (typeof dlg.showModal === 'function') dlg.showModal();
        else dlg.setAttribute('open', '');
      });
      close.addEventListener('click', function () {
        if (typeof dlg.close === 'function') dlg.close(); else dlg.removeAttribute('open');
      });
      dlg.addEventListener('click', function (e) {
        if (e.target === dlg && typeof dlg.close === 'function') dlg.close();
      });
      card.appendChild(openBtn);
    }
    grid.appendChild(card);
    host.appendChild(grid);
  }

  /* ---------- footer ---------- */

  function renderFooter() {
    var host = byId('footer-root');
    if (!host) return;
    var f = AK.footer;
    append(host, paragraphs(f.lines, 'footer__line'));
    host.appendChild(el('p', { class: 'footer__line footer__built', text: f.built }));
  }

  /* ---------- draft pill ---------- */

  function initDraft() {
    if (AK.draft !== true) return;
    root.classList.add('is-draft');
    doc.body.appendChild(el('div', { class: 'draft-pill', text: 'draft' }));
  }

  /* ---------- reveal on scroll ---------- */

  function initReveal() {
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    var items = doc.querySelectorAll('.reveal');
    if (!items.length) return;
    root.classList.add('js-reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.04, rootMargin: '0px 0px -4% 0px' });
    items.forEach(function (n) { io.observe(n); });
    /* safety net: never leave content hidden */
    setTimeout(function () {
      items.forEach(function (n) { n.classList.add('in'); });
    }, 4000);
  }

  /* ---------- go ---------- */

  function safe(fn) { try { fn(); } catch (e) { if (window.console) console.error(e); } }

  safe(initTheme);
  safe(renderHero);
  safe(renderApproach);
  safe(renderJourney);
  safe(renderNotes);
  safe(renderToolbox);
  safe(renderPersonal);
  safe(renderConnect);
  safe(renderFooter);
  safe(initDraft);
  safe(initReveal);
})();
