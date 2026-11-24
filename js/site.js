/* site.js — renders everything except the projects section from window.AK.
   All data is inserted with textContent (see el()); the only innerHTML is for static icon strings written here.
   Interface strings go through AKt('key', 'English fallback'). */
(function () {
  'use strict';

  var AK = window.AK;
  if (!AK) return;

  var doc = document;
  var root = doc.documentElement;

  /* interface strings: window.AKt comes from lang.js; the fallback keeps the page working without it */
  var t = typeof window.AKt === 'function' ? window.AKt : function (key, fallback, vars) {
    var s = fallback || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  };

  function reduced() {
    return !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

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

  function sectionHead(num, labelKey, labelFallback, id, title) {
    return [
      el('p', { class: 'label' }, [num + ' / ' + t(labelKey, labelFallback)]),
      el('h2', { class: 'sec__title', id: id, text: title })
    ];
  }

  function paragraphs(list, cls) {
    return (list || []).map(function (x) { return el('p', { class: cls || 'lead', text: x }); });
  }

  function chipList(items, cls) {
    return el('ul', { class: 'chips ' + (cls || '') }, (items || []).map(function (x) {
      return el('li', null, [el('span', { class: 'chip', text: x })]);
    }));
  }

  function append(parent, nodes) {
    nodes.forEach(function (n) { parent.appendChild(n); });
  }

  /* run fn only while the node is on screen and the tab is visible */
  function whileVisible(node, onChange) {
    var inView = true;
    function update() { onChange(inView && !doc.hidden); }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[entries.length - 1].isIntersecting;
        update();
      }, { threshold: 0.05 }).observe(node);
    }
    doc.addEventListener('visibilitychange', update);
    update();
  }

  var PLUS = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';

  /* ---------- top bar: skip link, brand, nav, language, theme ---------- */

  var SUN = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';

  function effectiveTheme() {
    var th = root.dataset.theme;
    if (th === 'light' || th === 'dark') return th;
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function initTheme() {
    var btn = byId('theme-toggle');
    if (!btn) return;
    var metas = [].slice.call(doc.querySelectorAll('meta[name="theme-color"]'));
    var originals = metas.map(function (m) { return m.getAttribute('content'); });
    var COLORS = { light: '#FFF4E8', dark: '#14171E' };

    function paint() {
      var dark = effectiveTheme() === 'dark';
      btn.innerHTML = dark ? SUN : MOON;
      btn.setAttribute('aria-label', t('themeToggle', 'Switch between light and dark'));
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      /* a manual choice overrides both media-specific theme-color tags */
      var manual = root.dataset.theme === 'light' || root.dataset.theme === 'dark';
      metas.forEach(function (m, i) {
        m.setAttribute('content', manual ? COLORS[root.dataset.theme] : originals[i]);
      });
    }
    btn.addEventListener('click', function () {
      var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('ak-theme', next); } catch (e) {}
      paint();
    });
    if (window.matchMedia) {
      var mq = matchMedia('(prefers-color-scheme: dark)');
      if (mq.addEventListener) mq.addEventListener('change', paint);
    }
    paint();
  }

  var NAV = [
    ['approach', 'navApproach', 'Say hi'],
    ['craft', 'navCraft', 'What I do'],
    ['journey', 'navJourney', 'Journey'],
    ['work', 'navWork', 'How I work'],
    ['projects', 'navProjects', 'Projects'],
    ['notes', 'navNotes', 'Field notes'],
    ['toolbox', 'navToolbox', 'Toolbox'],
    ['personal', 'navPersonal', 'Personal'],
    ['connect', 'navConnect', 'Connect']
  ];

  function initChrome() {
    var p = AK.profile;
    var skip = byId('skip-link');
    if (skip) skip.textContent = t('skipToContent', 'Skip to content');

    var brand = byId('brand');
    if (brand) brand.setAttribute('aria-label', t('topOfPage', '{name}, top of page', { name: p.name }));
    var nameEl = byId('brand-name');
    if (nameEl) nameEl.textContent = p.name;

    var nav = byId('topnav');
    if (nav) {
      nav.setAttribute('aria-label', t('navSections', 'Sections'));
      NAV.forEach(function (n) {
        nav.appendChild(el('a', { href: '#' + n[0], text: t(n[1], n[2]) }));
      });
    }

    var proj = byId('projects');
    if (proj && !proj.hasAttribute('aria-labelledby')) proj.setAttribute('aria-label', t('navProjects', 'Projects'));

    var group = byId('lang-switch');
    if (group && AK.langs && AK.langs.length > 1) {
      group.setAttribute('aria-label', t('language', 'Language'));
      AK.langs.forEach(function (l) {
        var b = el('button', {
          class: 'lang__btn', type: 'button', lang: l.id, title: l.name,
          'aria-pressed': l.id === AK.lang ? 'true' : 'false', text: l.label
        });
        b.addEventListener('click', function () {
          if (l.id !== AK.lang && typeof window.AKsetLang === 'function') window.AKsetLang(l.id);
        });
        group.appendChild(b);
      });
    } else if (group) {
      group.hidden = true;
    }
  }

  /* ---------- hero ---------- */

  var COG = '<svg viewBox="4 0 112 104" focusable="false"><circle cx="60" cy="52" r="52" fill="#FFF4E8"/>' +
    '<g class="rays">' +
    [0, 45, 90, 135, 180, 225, 270, 315].map(function (a) {
      return '<rect x="53" y="6" width="14" height="22" rx="5" fill="#F0643C" transform="rotate(' + a + ' 60 52)"/>';
    }).join('') +
    '</g><circle cx="60" cy="52" r="29" fill="#F0643C"/>' +
    '<path d="M46 48 q5 -6 10 0 M64 48 q5 -6 10 0" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round"/>' +
    '<path d="M47 58 q13 13 26 0" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/></svg>';

  function renderAvatar() {
    var art = byId('hero-art');
    if (!art) return;
    var ph = AK.photos && AK.photos.portrait;
    var who = el('div', { class: 'hero__who' });
    var box = el('div', { class: 'portrait' });
    if (ph) {
      box.appendChild(el('img', {
        class: 'portrait__img', src: ph.src, alt: ph.alt, width: '480', height: '480',
        loading: 'eager', decoding: 'async'
      }));
    }
    who.appendChild(box);
    art.appendChild(who);

    if (!AK.mark) return;
    var badge = el('button', {
      class: 'badge', type: 'button', 'aria-expanded': 'false', 'aria-controls': 'mark-note', 'aria-label': AK.mark.name
    });
    badge.appendChild(svgIcon(COG, 'badge__cog'));
    box.appendChild(badge);

    var note = el('p', { class: 'mark-pop', id: 'mark-note', hidden: true }, [
      el('strong', { class: 'mark-pop__name', text: AK.mark.name }),
      doc.createTextNode(' '),
      el('span', { text: AK.mark.note })
    ]);
    who.appendChild(note);

    function setOpen(open) {
      badge.setAttribute('aria-expanded', open ? 'true' : 'false');
      note.hidden = !open;
    }
    badge.addEventListener('click', function () { setOpen(note.hidden); });
    if (window.matchMedia && matchMedia('(hover: hover)').matches) {
      who.addEventListener('mouseenter', function () { setOpen(true); });
      who.addEventListener('mouseleave', function () { setOpen(false); });
    }
  }

  /* the hero terminal: a few scripted commands, tapped rather than typed */
  function renderTerminal(host) {
    var T = AK.terminal;
    if (!T || !T.commands || !T.commands.length) return;
    var screen = el('div', { class: 'term__screen', role: 'log', 'aria-live': 'polite', 'aria-label': T.title, tabindex: '0' });
    var hint = el('p', { class: 'term__hint', text: T.hint });
    var chipRow = el('div', { class: 'term__chips', role: 'group', 'aria-label': t('terminalCommands', 'Commands') });
    var active = null;

    function scroll() { screen.scrollTop = screen.scrollHeight; }

    function linesFor(c) {
      if (c.dynamic === 'projects') {
        return (AK.projects || []).map(function (pr, i) { return (i + 1 < 10 ? '0' : '') + (i + 1) + '  ' + pr.title; });
      }
      if (c.dynamic === 'opener') {
        var st = (AK.approach && AK.approach.starters) || [];
        return st.length ? [st[Math.floor(Math.random() * st.length)].ask] : [];
      }
      return c.out || [];
    }

    function printOut(block, c) {
      var out = el('div', { class: 'term__out' + (c.code ? ' term__out--code' : '') });
      linesFor(c).forEach(function (ln) { out.appendChild(el('div', { class: 'term__row', text: ln })); });
      if (c.link) {
        out.appendChild(el('div', { class: 'term__row' }, [
          el('a', { class: 'term__link', href: c.link.href, target: '_blank', rel: 'noopener', text: c.link.label })
        ]));
      }
      block.appendChild(out);
    }

    function run(c) {
      if (active) active.finish();
      var typed = el('span', { class: 'term__typed' });
      var cursor = el('span', { class: 'term__cursor', 'aria-hidden': 'true' });
      var line = el('div', { class: 'term__line', 'aria-hidden': 'true' }, [
        el('span', { class: 'term__ps', 'aria-hidden': 'true', text: '$ ' }), typed, cursor
      ]);
      var block = el('div', { class: 'term__block' }, [line]);
      screen.appendChild(block);
      while (screen.children.length > 2) screen.removeChild(screen.firstChild);
      scroll();

      var i = 0, timer = null, done = false;
      function finish() {
        if (done) return;
        done = true;
        if (timer) clearInterval(timer);
        typed.textContent = c.cmd;
        if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
        line.removeAttribute('aria-hidden');
        printOut(block, c);
        active = null;
        scroll();
      }
      active = { finish: finish };
      if (reduced()) { finish(); return; }
      timer = setInterval(function () {
        i++;
        typed.textContent = c.cmd.slice(0, i);
        scroll();
        if (i >= c.cmd.length) finish();
      }, 25);
    }

    T.commands.forEach(function (c) {
      var b = el('button', { class: 'term__chip', type: 'button', text: c.cmd });
      b.addEventListener('click', function () {
        hint.hidden = true;
        b.classList.add('is-used');
        run(c);
      });
      chipRow.appendChild(b);
    });

    var win = el('div', { class: 'term__window' }, [
      el('div', { class: 'term__bar' }, [
        el('span', { class: 'term__dots', 'aria-hidden': 'true' }, [el('i'), el('i'), el('i')]),
        el('span', { class: 'term__title', text: T.title })
      ]),
      screen
    ]);
    host.appendChild(el('div', { class: 'term' }, [win, chipRow, hint]));

    /* first command runs once on load */
    run(T.commands[0]);
    chipRow.firstChild.classList.add('is-used');
  }

  function renderGlance(host) {
    var p = AK.profile;
    var g = p.glance;
    if (!host || !g) return;
    var card = el('section', { class: 'card glance', 'aria-labelledby': 'glance-title' });
    card.appendChild(el('h2', { class: 'glance__title', id: 'glance-title', text: g.title }));
    var dl = el('dl', { class: 'glance__rows' });
    (g.rows || []).forEach(function (r) {
      dl.appendChild(el('div', { class: 'glance__row' }, [
        el('dt', { text: r.k }), el('dd', { text: r.v })
      ]));
    });
    card.appendChild(dl);
    var o = p.openTo;
    if (o && o.roles && o.roles.length) {
      var open = el('div', { class: 'glance__open' });
      open.appendChild(el('p', { class: 'glance__label', id: 'open-label', text: o.label }));
      var roles = chipList(o.roles, 'chips--open');
      roles.setAttribute('aria-labelledby', 'open-label');
      open.appendChild(roles);
      if (o.where) open.appendChild(el('p', { class: 'glance__line', text: o.where }));
      if (o.note) open.appendChild(el('p', { class: 'glance__line', text: o.note }));
      card.appendChild(open);
    }
    host.appendChild(card);
  }

  function renderHero() {
    var p = AK.profile;
    var text = byId('hero-text');
    if (!text) return;

    var head = el('div', { class: 'hero__head' });
    head.appendChild(el('h1', { class: 'hero__name', id: 'hero-title', text: p.name }));
    head.appendChild(el('p', { class: 'hero__role', text: p.role }));
    head.appendChild(el('p', { class: 'hero__meta' }, [
      el('span', { text: p.team }),
      el('span', { class: 'sep', 'aria-hidden': 'true', text: ' · ' }),
      el('span', { text: p.place })
    ]));
    text.appendChild(head);

    var body = el('div', { class: 'hero__body' });
    append(body, paragraphs(p.intro, 'hero__intro'));
    body.appendChild(el('div', { class: 'actions hero__actions' }, [
      el('a', { class: 'btn btn--primary', href: p.linkedin, target: '_blank', rel: 'noopener', text: AK.connect.linkedinLabel }),
      el('a', { class: 'btn', href: '#projects', text: t('seeWork', 'See recent work') }),
      el('a', { class: 'btn', href: '#approach', text: t('howToSayHi', 'How to say hi') })
    ]));

    text.appendChild(body);

    var more = el('div', { class: 'hero__more' });
    more.appendChild(el('p', { class: 'mini-label', id: 'ask-label', text: t('askMeAbout', 'Ask me about') }));
    var ask = chipList(p.askMeAbout, 'chips--ask');
    ask.setAttribute('aria-labelledby', 'ask-label');
    more.appendChild(ask);

    var learn = el('p', { class: 'hero__learn' });
    learn.appendChild(el('span', { class: 'hero__learn-label', text: t('hereToLearn', 'Here to learn:') + ' ' }));
    learn.appendChild(doc.createTextNode((p.hereToLearn || []).join(' · ')));
    more.appendChild(learn);
    text.appendChild(more);

    renderTerminal(byId('hero-term') || text);
    renderAvatar();
    renderGlance(byId('hero-art'));
  }

  /* ---------- approach + social battery ---------- */

  function renderBattery(host) {
    var B = AK.approach.battery;
    if (!B) return null;
    var total = 5;
    var segs = 1;
    var cells = [];
    for (var i = 0; i < total; i++) cells.push(el('span', { class: 'battery__cell' + (i === 0 ? ' is-on' : '') }));
    var meter = el('div', {
      class: 'battery__meter', role: 'meter', 'aria-label': B.label,
      'aria-valuemin': '0', 'aria-valuemax': String(total), 'aria-valuenow': '1', 'aria-valuetext': B.levels[0]
    }, [
      el('div', { class: 'battery__cells' }, cells),
      el('span', { class: 'battery__nub', 'aria-hidden': 'true' })
    ]);
    var status = el('p', { class: 'battery__text', 'aria-live': 'polite', text: B.levels[0] });
    var hint = el('p', { class: 'battery__hint', text: B.hint });
    var box = el('div', { class: 'battery', 'data-level': '1' }, [
      el('p', { class: 'mini-label battery__label', text: B.label }), meter, status, hint
    ]);
    host.appendChild(box);

    var seen = {};
    return function charge(idx) {
      if (seen[idx]) return;
      seen[idx] = true;
      if (segs >= total) return;
      var cell = cells[segs];
      segs++;
      cell.classList.add('is-on', 'is-charging');
      setTimeout(function () { cell.classList.remove('is-charging'); }, 1000);
      var text = B.levels[Math.min(segs - 1, B.levels.length - 1)];
      box.setAttribute('data-level', String(segs));
      meter.setAttribute('aria-valuenow', String(segs));
      meter.setAttribute('aria-valuetext', text);
      status.textContent = text;
      hint.hidden = true;
    };
  }

  function renderApproach() {
    var host = byId('approach-root');
    if (!host) return;
    var a = AK.approach;
    append(host, sectionHead('01', 'labelApproach', 'say hi', 'approach-title', a.title));
    append(host, paragraphs(a.body));
    host.appendChild(el('h3', { class: 'mini-label openers-label', text: a.startersLabel }));

    var list = el('ul', { class: 'openers' });
    var items = [];
    var holder = el('div');
    var charge = null;
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
    items.forEach(function (it, i) {
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
          if (charge) charge(i);
        }
      });
    });
    host.appendChild(list);
    host.appendChild(holder);
    charge = renderBattery(holder);
  }

  /* ---------- journey ---------- */

  function tagChips(tags) {
    if (!tags || !tags.length) return null;
    return chipList(tags, 'stop__tags');
  }

  /* small flag-and-dot marker that walks the trail */
  var HIKER = '<svg viewBox="0 0 28 40" width="28" height="40" focusable="false">' +
    '<line class="hiker__pole" x1="14" y1="3" x2="14" y2="22"/>' +
    '<path class="hiker__flag" d="M14 4 L26 8.5 L14 13z"/>' +
    '<circle class="hiker__body" cx="14" cy="29" r="9"/><circle class="hiker__core" cx="14" cy="29" r="3"/></svg>';

  function hiker() { return svgIcon(HIKER, 'hiker'); }

  function renderJourney() {
    var host = byId('journey-root');
    if (!host) return;
    var j = AK.journey;
    var stops = j.stops;
    var lastIdx = stops.length - 1;
    var hereText = t('youAreHere', 'you are here');

    append(host, sectionHead('03', 'labelJourney', 'journey', 'journey-title', j.title));

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
    host.appendChild(svgIcon(
      '<svg viewBox="0 0 1200 70" preserveAspectRatio="none" focusable="false">' +
      '<path d="M0 70V46l90-22 70 20 110-34 90 36 80-18 120 30 100-40 110 44 90-26 120 30 110-36 110 32V70z" class="ridge__far"/>' +
      '<path d="M0 70V58l130-20 100 24 140-30 120 26 150-22 130 24 110-18 140 22 180-16V70z" class="ridge__near"/>' +
      '</svg>', 'ridge'));

    /* --- phone: vertical trail --- */
    var trail = el('ol', { class: 'trail trail--mobile' });
    var mItems = [];
    stops.forEach(function (s, i) {
      var isNow = i === lastIdx;
      var pid = 'stop-panel-' + s.id;
      var whenRow = el('span', { class: 'stop__when' }, [s.when]);
      if (isNow) whenRow.appendChild(el('span', { class: 'here', text: hereText }));
      var btn = el('button', { class: 'stop__btn', type: 'button', 'aria-expanded': 'false', 'aria-controls': pid }, [
        whenRow,
        el('span', { class: 'stop__title', text: s.title }),
        el('span', { class: 'stop__org', text: s.sub }),
        el('span', { class: 'stop__place', text: s.place }),
        svgIcon(PLUS, 'stop__plus')
      ]);
      var panel = el('div', { class: 'stop__panel', id: pid, hidden: true }, [
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
    var mHiker = hiker();
    trail.appendChild(mHiker);
    var mCur = lastIdx;
    function placeM() {
      if (!trail.offsetParent) return;
      mHiker.style.transform = 'translateY(' + (mItems[mCur].li.offsetTop - 1) + 'px)';
    }
    function setStop(it, open) {
      it.panel.hidden = !open;
      it.btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      it.li.classList.toggle('is-open', open);
    }
    mItems.forEach(function (it, i) {
      it.btn.addEventListener('click', function () {
        var open = it.panel.hidden;
        setStop(it, open);
        if (open) mCur = i;
        placeM();
      });
    });
    setStop(mItems[lastIdx], true);
    host.appendChild(trail);
    placeM();
    window.addEventListener('resize', placeM);
    window.addEventListener('load', function () {
      placeM();
      /* only now allow the walk animation, so the first placement is not animated */
      trail.classList.add('is-ready');
    });
    if (doc.readyState === 'complete') trail.classList.add('is-ready');
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(placeM);

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
        el('span', { class: 'tab__title', text: s.title }),
        el('span', { class: 'tab__org', text: s.org || '' })
      ]);
      tabs.appendChild(tab);
      tabEls.push(tab);
    });
    var dHiker = hiker();
    tabs.appendChild(dHiker);
    var panel = el('div', { class: 'card tabpanel', role: 'tabpanel', id: 'trail-panel', tabindex: '0' });

    function selectTab(i, focus) {
      var s = stops[i];
      tabEls.forEach(function (tb, k) {
        var on = k === i;
        tb.setAttribute('aria-selected', on ? 'true' : 'false');
        tb.tabIndex = on ? 0 : -1;
        tb.classList.toggle('is-active', on);
      });
      dHiker.style.left = (((i + 0.5) / stops.length) * 100) + '%';
      panel.setAttribute('aria-labelledby', 'tab-' + s.id);
      panel.textContent = '';
      var meta = el('p', { class: 'tabpanel__meta' }, [s.when + ' · ' + s.place]);
      if (i === lastIdx) meta.appendChild(el('span', { class: 'here', text: hereText }));
      append(panel, [
        meta,
        el('h3', { class: 'tabpanel__title', text: s.title }),
        el('p', { class: 'stop__sub', text: s.sub }),
        el('p', { class: 'stop__body', text: s.body }),
        tagChips(s.tags)
      ].filter(Boolean));
      if (focus) tabEls[i].focus();
    }
    tabEls.forEach(function (tb, i) {
      tb.addEventListener('click', function () { selectTab(i, false); });
      tb.addEventListener('keydown', function (e) {
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

    /* what I did where */
    if (j.tracks) renderTracks(host, j.tracks);

    /* certifications */
    host.appendChild(el('div', { class: 'certs' }, [
      el('p', { class: 'mini-label', id: 'certs-label', text: j.certsLabel }),
      (function () { var c = chipList(j.certs, 'chips--certs'); c.setAttribute('aria-labelledby', 'certs-label'); return c; })()
    ]));
  }

  /* ---------- journey: what I did where (matrix) ---------- */

  function renderTracks(host, tr) {
    if (!tr || !tr.rows || !tr.chapters) return;
    var n = tr.chapters.length;
    var table = el('table', { class: 'tk-table', 'aria-labelledby': 'tk-title', 'aria-describedby': tr.caption ? 'tk-cap' : null });
    var headRow = el('tr', null, [el('td', { class: 'tk-corner' })]);
    tr.chapters.forEach(function (c) {
      headRow.appendChild(el('th', { scope: 'col', class: 'tk-col' }, [
        el('span', { class: 'tk-when', text: c.when }),
        el('span', { class: 'tk-org', text: c.org })
      ]));
    });
    table.appendChild(el('thead', null, [headRow]));
    var body = el('tbody');
    tr.rows.forEach(function (r) {
      var row = el('tr', null, [el('th', { scope: 'row', class: 'tk-row', text: r.label })]);
      for (var i = 0; i < n; i++) {
        var on = !!(r.in && r.in[i]);
        var cls = 'tk-cell' + (on ? ' is-on' : '');
        if (on && i > 0 && r.in[i - 1]) cls += ' tk-join-l';
        if (on && i < n - 1 && r.in[i + 1]) cls += ' tk-join-r';
        row.appendChild(el('td', { class: cls }, [
          el('span', { class: 'tk-mark', 'aria-hidden': 'true' }),
          el('span', { class: 'sr-only', text: on ? tr.yes : tr.no })
        ]));
      }
      body.appendChild(row);
    });
    table.appendChild(body);
    host.appendChild(el('div', { class: 'tk' }, [
      el('h3', { class: 'mini-label tk-title', id: 'tk-title', text: tr.title }),
      el('div', { class: 'tk-card card' }, [table]),
      tr.caption ? el('p', { class: 'tk-caption', id: 'tk-cap', text: tr.caption }) : null
    ]));
  }

  /* ---------- how I work: the loop ---------- */

  function renderWork() {
    var host = byId('work-root');
    var w = AK.howIWork;
    if (!host || !w || !w.steps) return;
    append(host, sectionHead('04', 'labelWork', 'how I work', 'work-title', w.title));
    if (w.body) host.appendChild(el('p', { class: 'lead', text: w.body }));

    var steps = w.steps;
    var cur = 0;
    var list = el('ol', { class: 'loop__steps' });
    var ret = el('span', { class: 'loop__return', 'aria-hidden': 'true' });
    var lis = [], btns = [];
    var panel = el('div', { class: 'card loop__panel', id: 'loop-panel', 'aria-live': 'polite' });

    steps.forEach(function (s, i) {
      var b = el('button', { class: 'loop__step', type: 'button', 'aria-controls': 'loop-panel', 'aria-pressed': 'false' }, [
        el('span', { class: 'loop__num', 'aria-hidden': 'true', text: String(i + 1) }),
        el('span', { class: 'loop__label', text: s.label })
      ]);
      var li = el('li', { class: 'loop__item' }, [b]);
      list.appendChild(li);
      lis.push(li);
      btns.push(b);
      b.addEventListener('click', function () { select(i); });
      b.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % steps.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + steps.length) % steps.length;
        if (n !== null) { e.preventDefault(); btns[n].focus(); select(n); }
      });
    });

    function select(i) {
      cur = i;
      btns.forEach(function (b, k) {
        b.setAttribute('aria-pressed', k === i ? 'true' : 'false');
        b.tabIndex = k === i ? 0 : -1;
      });
      lis.forEach(function (li, k) { li.classList.toggle('is-active', k === i); });
      panel.textContent = '';
      append(panel, [
        el('p', { class: 'loop__n', text: t('stepN', 'Step {n}', { n: i + 1 }) + ' · ' + steps[i].label }),
        el('p', { class: 'loop__line', text: steps[i].line }),
        el('p', { class: 'loop__ex', text: steps[i].example })
      ]);
    }

    host.appendChild(el('div', { class: 'loop' }, [list, ret]));
    host.appendChild(panel);
    select(0);

    /* the pulse: node, connector, node ... then the return arrow, one beat at a time */
    var n = steps.length;
    var beat = -1, timer = null;
    var states = n * 2; /* n nodes, n-1 connectors, 1 return */
    function paintPulse() {
      lis.forEach(function (li, k) {
        li.classList.toggle('is-pulse', beat === k * 2);
        li.classList.toggle('is-flow', beat === k * 2 + 1);
      });
      ret.classList.toggle('is-flow', beat === states - 1);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
      beat = -1; paintPulse();
    }
    function start() {
      if (timer || reduced()) return;
      beat = 0; paintPulse();
      timer = setInterval(function () { beat = (beat + 1) % states; paintPulse(); }, 850);
    }
    whileVisible(host, function (on) { if (on) start(); else stop(); });
  }

  /* ---------- field notes ---------- */

  function renderNotes() {
    var host = byId('notes-root');
    if (!host) return;
    var f = AK.fieldNotes;
    append(host, sectionHead('06', 'labelNotes', 'field notes', 'notes-title', f.title));
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
    var tb = AK.toolbox;
    append(host, sectionHead('07', 'labelToolbox', 'toolbox', 'toolbox-title', tb.title));
    var groups = el('div', { class: 'tool-groups' });
    tb.groups.forEach(function (g) {
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
    append(host, sectionHead('08', 'labelPersonal', 'away from the keyboard', 'personal-title', p.title));
    var grid = el('div', { class: 'personal__grid' });

    var ph = AK.photos && AK.photos.outdoors;
    if (ph) {
      var fig = el('figure', { class: 'personal__photo' }, [
        el('img', { src: ph.src, alt: ph.alt, width: '800', height: '1000', loading: 'lazy', decoding: 'async' })
      ]);
      if (p.photoCaption) fig.appendChild(el('figcaption', { text: p.photoCaption }));
      grid.appendChild(fig);
    }

    var cards = el('ul', { class: 'pcards' });
    p.cards.forEach(function (c) {
      var li = el('li', { class: 'card pcard' }, [
        svgIcon(ICONS[c.id] || ICONS.tech, 'pcard__icon'),
        el('h3', { class: 'pcard__title', text: c.title }),
        el('p', { class: 'pcard__body', text: c.body })
      ]);
      if (c.todo) li.appendChild(el('p', { class: 'todo', text: c.todo }));
      cards.appendChild(li);
    });
    grid.appendChild(cards);
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
      svg.setAttribute('aria-label', t('qrCode', 'QR code'));
      return svg;
    } catch (e) {
      return null;
    }
  }

  function renderConnect() {
    var host = byId('connect-root');
    if (!host) return;
    var c = AK.connect;
    append(host, sectionHead('09', 'labelConnect', 'connect', 'connect-title', c.title));

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
      var close = el('button', { class: 'btn', type: 'button', text: t('close', 'Close') });
      dlg.appendChild(big);
      if (url) dlg.appendChild(el('p', { class: 'qrcard__url', text: url }));
      dlg.appendChild(close);
      doc.body.appendChild(dlg);

      var openBtn = el('button', { class: 'btn', type: 'button', text: t('showQr', 'Show QR full screen') });
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
    if (f.built) host.appendChild(el('p', { class: 'footer__line footer__built', text: f.built }));
  }

  /* ---------- draft pill ---------- */

  function initDraft() {
    if (AK.draft !== true) return;
    root.classList.add('is-draft');
    doc.body.appendChild(el('div', { class: 'draft-pill', text: t('draft', 'draft') }));
  }

  /* ---------- reveal on scroll ---------- */

  function initReveal() {
    if (reduced() || !('IntersectionObserver' in window)) return;
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

  /* ---------- for people who open devtools ---------- */

  function greet() {
    if (!window.console || !console.log) return;
    console.log('Hi. You read source too. Come find me: I\'m the quiet one near the wall.\n' + (AK.profile.linkedin || ''));
  }

  /* ---------- go ---------- */

  function safe(fn) { try { fn(); } catch (e) { if (window.console) console.error(e); } }

  safe(initChrome);
  safe(initTheme);
  safe(renderHero);
  safe(renderApproach);
  safe(renderJourney);
  safe(renderWork);
  safe(renderNotes);
  safe(renderToolbox);
  safe(renderPersonal);
  safe(renderConnect);
  safe(renderFooter);
  safe(initDraft);
  safe(initReveal);
  safe(greet);
})();
