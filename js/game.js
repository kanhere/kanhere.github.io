/* game.js — "Read or change?" mini game. Copy comes from AK.game; aria strings from AKt. */
(function () {
  'use strict';

  var SVGNS = 'http://www.w3.org/2000/svg';
  var BEST_KEY = 'ak-game-best';
  var FEEDBACK_MS = 2200;
  var SWIPE_PX = 70;

  function t(key, fallback) { return window.AKt ? window.AKt(key, fallback) : fallback; }
  function fill(s, vars) {
    Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }
  function h(tag, cls, text) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text != null) el.textContent = text;
    return el;
  }
  function svg(parts) {
    var s = document.createElementNS(SVGNS, 'svg');
    s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('width', '22');
    s.setAttribute('height', '22');
    s.setAttribute('fill', 'none');
    s.setAttribute('stroke', 'currentColor');
    s.setAttribute('stroke-width', '2');
    s.setAttribute('stroke-linecap', 'round');
    s.setAttribute('stroke-linejoin', 'round');
    s.setAttribute('aria-hidden', 'true');
    s.setAttribute('focusable', 'false');
    parts.forEach(function (p) {
      var n = document.createElementNS(SVGNS, p[0]);
      Object.keys(p[1]).forEach(function (k) { n.setAttribute(k, p[1][k]); });
      s.appendChild(n);
    });
    s.setAttribute('class', 'gm-ico');
    return s;
  }
  function eyeIcon() {
    return svg([['path', { d: 'M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z' }], ['circle', { cx: 12, cy: 12, r: 3 }]]);
  }
  function personIcon() {
    return svg([['circle', { cx: 12, cy: 8, r: 4 }], ['path', { d: 'M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7' }]]);
  }
  function reduced() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var x = a[i]; a[i] = a[j]; a[j] = x;
    }
    return a;
  }
  function pickSet(calls, n) {
    var reads = shuffle(calls.filter(function (c) { return !c.changes; }));
    var changes = shuffle(calls.filter(function (c) { return c.changes; }));
    var min = Math.min(3, Math.floor(n / 2), reads.length, changes.length);
    var chosen = reads.splice(0, min).concat(changes.splice(0, min));
    var rest = shuffle(reads.concat(changes));
    chosen = chosen.concat(rest.slice(0, Math.max(0, n - chosen.length)));
    return shuffle(chosen);
  }
  function readBest() {
    try {
      var v = localStorage.getItem(BEST_KEY);
      if (v === null) return null;
      var n = parseInt(v, 10);
      return isNaN(n) ? null : n;
    } catch (e) { return null; }
  }
  function writeBest(n) { try { localStorage.setItem(BEST_KEY, String(n)); } catch (e) {} }

  function mount() {
    if (!window.AK || !window.AK.game || document.getElementById('game')) return;
    var G = window.AK.game;
    var main = document.getElementById('main') || document.body;

    var sec = h('section', 'sec gm-sec');
    sec.id = 'game';
    sec.setAttribute('aria-labelledby', 'game-title');
    var wrap = h('div', 'wrap');
    sec.appendChild(wrap);

    var head = h('div', 'gm-head');
    head.appendChild(h('p', 'label gm-label', '★ / ' + G.label));
    var title = h('h2', 'sec__title gm-title', G.title);
    title.id = 'game-title';
    head.appendChild(title);
    var bodyEl = h('p', 'lead gm-body', G.body);
    head.appendChild(bodyEl);
    wrap.appendChild(head);

    var stage = h('div', 'gm-stage');
    wrap.appendChild(stage);
    var live = h('div', 'sr-only');
    live.setAttribute('aria-live', 'polite');
    live.setAttribute('role', 'status');
    wrap.appendChild(live);

    var anchor = document.getElementById('notes');
    if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(sec, anchor.nextSibling);
    else {
      var connect = document.getElementById('connect');
      if (connect && connect.parentNode) connect.parentNode.insertBefore(sec, connect);
      else main.appendChild(sec);
    }

    /* ---------- state ---------- */
    var S = { phase: 'idle', set: [], i: 0, score: 0, streak: 0, results: [], remaining: 0, fbRemaining: 0 };
    var total = G.secondsPerCall * 1000;
    var tickId = null, fbId = null, fbStarted = 0, lastT = 0, confettiId = null;
    var inView = true, pageVisible = !document.hidden;
    var ui = {};   // play-screen element refs
    var drag = null;

    function clearTimers() {
      if (tickId) { clearInterval(tickId); tickId = null; }
      if (fbId) { clearTimeout(fbId); fbId = null; }
    }
    function shouldRun() { return inView && pageVisible; }

    /* countdown */
    function paintTimer() {
      var frac = Math.max(0, S.remaining / total);
      ui.bar.style.transform = 'scaleX(' + frac + ')';
      ui.num.textContent = String(Math.max(0, Math.ceil(S.remaining / 1000)));
      ui.timer.classList.toggle('is-low', frac <= 0.4);
    }
    function startTick() {
      if (tickId) clearInterval(tickId);
      lastT = performance.now();
      tickId = setInterval(function () {
        var now = performance.now();
        S.remaining -= now - lastT;
        lastT = now;
        if (S.remaining <= 0) { S.remaining = 0; paintTimer(); answer(null); return; }
        paintTimer();
      }, reduced() ? 1000 : 100);
    }
    function startFb() {
      if (fbId) clearTimeout(fbId);
      fbStarted = performance.now();
      fbId = setTimeout(function () { fbId = null; next(); }, S.fbRemaining);
    }
    function syncRun() {
      /* stop whatever is running, then restart if allowed */
      if (S.phase === 'ask') {
        if (tickId) {
          var now = performance.now();
          S.remaining -= now - lastT; lastT = now;
          clearInterval(tickId); tickId = null;
        }
        if (shouldRun()) startTick();
      } else if (S.phase === 'fb') {
        if (fbId) {
          S.fbRemaining = Math.max(400, S.fbRemaining - (performance.now() - fbStarted));
          clearTimeout(fbId); fbId = null;
        }
        if (shouldRun()) startFb();
      }
    }
    document.addEventListener('visibilitychange', function () {
      pageVisible = !document.hidden;
      syncRun();
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        inView = es[es.length - 1].isIntersecting;
        syncRun();
      }, { threshold: 0 }).observe(sec);
    }

    /* ---------- screens ---------- */
    function setStage(node) {
      clearTimers();
      drag = null;
      while (stage.firstChild) stage.removeChild(stage.firstChild);
      stage.appendChild(node);
    }

    function showIdle() {
      S.phase = 'idle';
      var box = h('div', 'gm-idle');
      var best = readBest();
      if (best !== null) box.appendChild(h('p', 'gm-best', G.bestLabel + ': ' + best + ' / ' + G.perGame));
      var btn = h('button', 'btn btn--primary gm-start', G.start);
      btn.type = 'button';
      btn.addEventListener('click', startGame);
      box.appendChild(btn);
      setStage(box);
    }

    function startGame() {
      clearTimers();
      clearConfetti();
      S.set = pickSet(G.calls, G.perGame);
      S.i = 0; S.score = 0; S.streak = 0; S.results = [];
      inView = true;
      buildPlay();
      showCall();
      ui.allow.focus({ preventScroll: true });
    }

    function buildPlay() {
      var box = h('div', 'gm-play');
      var stats = h('div', 'gm-stats');
      ui.round = h('span', 'gm-round');
      var right = h('span', 'gm-stats__r');
      ui.score = h('span', 'gm-stat');
      ui.streak = h('span', 'gm-stat gm-streak');
      ui.badge = h('span', 'gm-badge');
      ui.badge.setAttribute('aria-hidden', 'true');
      right.appendChild(ui.score);
      right.appendChild(ui.streak);
      stats.appendChild(ui.round);
      stats.appendChild(right);
      box.appendChild(stats);

      ui.card = h('div', 'gm-card');
      ui.card.setAttribute('role', 'group');
      ui.card.setAttribute('aria-label', t('gameToolCall', 'Agent tool call'));
      var bar = h('div', 'gm-card__bar');
      bar.appendChild(h('span', 'gm-dots'));
      ui.mark = h('span', 'gm-mark');
      ui.mark.setAttribute('aria-hidden', 'true');
      bar.appendChild(ui.mark);
      ui.card.appendChild(bar);
      var line = h('div', 'gm-line');
      line.appendChild(h('span', 'gm-ps', '$'));
      ui.call = h('code', 'gm-call');
      line.appendChild(ui.call);
      ui.card.appendChild(line);
      box.appendChild(ui.card);

      ui.timer = h('div', 'gm-timer');
      ui.timer.setAttribute('aria-hidden', 'true');
      var track = h('div', 'gm-timer__track');
      ui.bar = h('div', 'gm-timer__bar');
      track.appendChild(ui.bar);
      ui.num = h('span', 'gm-timer__num');
      ui.timer.appendChild(track);
      ui.timer.appendChild(ui.num);
      box.appendChild(ui.timer);

      var btns = h('div', 'gm-btns');
      ui.allow = answerButton('gm-btn gm-btn--allow', eyeIcon(), G.allow, G.allowHint);
      ui.block = answerButton('gm-btn gm-btn--block', personIcon(), G.block, G.blockHint);
      ui.allow.addEventListener('click', function () { answer(false); });
      ui.block.addEventListener('click', function () { answer(true); });
      btns.appendChild(ui.allow);
      btns.appendChild(ui.block);
      box.appendChild(btns);

      ui.fb = h('div', 'gm-fb');
      ui.verdict = h('p', 'gm-fb__verdict');
      ui.why = h('p', 'gm-fb__why');
      ui.nextBtn = h('button', 'btn btn--primary gm-next', G.next);
      ui.nextBtn.type = 'button';
      ui.nextBtn.addEventListener('click', next);
      ui.fb.appendChild(ui.verdict);
      ui.fb.appendChild(ui.why);
      ui.fb.appendChild(ui.nextBtn);
      box.appendChild(ui.fb);

      attachSwipe(ui.card);
      setStage(box);
    }

    function answerButton(cls, icon, label, hint) {
      var b = h('button', cls);
      b.type = 'button';
      var top = h('span', 'gm-btn__top');
      top.appendChild(icon);
      top.appendChild(h('span', 'gm-btn__label', label));
      b.appendChild(top);
      b.appendChild(h('span', 'gm-btn__hint', hint));
      return b;
    }

    function updateStats() {
      ui.round.textContent = fill(G.round, { n: S.i + 1, total: S.set.length });
      ui.score.textContent = G.scoreLabel + ' ' + S.score;
      ui.streak.textContent = G.streakLabel + ' ' + S.streak;
      ui.streak.classList.toggle('is-hot', S.streak >= 3);
      if (S.streak >= 3) {
        ui.badge.textContent = '✦';
        ui.streak.insertBefore(ui.badge, ui.streak.firstChild);
      } else if (ui.badge.parentNode) ui.badge.parentNode.removeChild(ui.badge);
    }

    function showCall() {
      S.phase = 'ask';
      var c = S.set[S.i];
      ui.call.textContent = c.call;
      ui.card.classList.remove('is-right', 'is-wrong', 'gm-shake', 'is-snap');
      ui.card.style.transform = '';
      ui.mark.textContent = '';
      ui.allow.disabled = false;
      ui.block.disabled = false;
      ui.fb.classList.remove('is-on');
      ui.verdict.textContent = '';
      ui.why.textContent = '';
      ui.nextBtn.hidden = true;
      S.remaining = total;
      updateStats();
      paintTimer();
      ui.timer.classList.remove('is-frozen');
      syncRun();
    }

    function answer(says) {  /* says: true = change, false = read, null = timeout */
      if (S.phase !== 'ask') return;
      var c = S.set[S.i];
      clearTimers();
      S.phase = 'fb';
      var ok = says !== null && says === c.changes;
      S.results.push(ok);
      if (ok) { S.score++; S.streak++; } else S.streak = 0;
      ui.timer.classList.add('is-frozen');
      ui.allow.disabled = true;
      ui.block.disabled = true;
      ui.card.style.transform = '';
      ui.card.classList.add(ok ? 'is-right' : 'is-wrong');
      if (!ok && !reduced()) ui.card.classList.add('gm-shake');
      ui.mark.textContent = ok ? '✓' : '✕';
      var v = says === null ? G.timeout : (ok ? G.right : G.wrong);
      ui.verdict.textContent = v;
      ui.verdict.className = 'gm-fb__verdict ' + (ok ? 'is-ok' : 'is-bad');
      ui.why.textContent = c.why;
      ui.fb.classList.add('is-on');
      ui.nextBtn.hidden = false;
      live.textContent = '';
      setTimeout(function () { live.textContent = v + ' ' + c.why; }, 30);
      updateStats();
      ui.nextBtn.focus({ preventScroll: false });
      S.fbRemaining = FEEDBACK_MS;
      syncRun();
    }

    function next() {
      if (S.phase !== 'fb') return;
      clearTimers();
      if (S.i + 1 >= S.set.length) showResult();
      else { S.i++; showCall(); ui.allow.focus({ preventScroll: true }); }
    }

    /* ---------- result ---------- */
    function rankFor(score) {
      var r = G.ranks[0];
      G.ranks.forEach(function (x) { if (x.min <= score) r = x; });
      return r;
    }
    function showResult() {
      S.phase = 'result';
      var n = S.score, tot = S.set.length;
      var prev = readBest();
      var beat = n > (prev === null ? 0 : prev);
      if (beat) writeBest(n);
      var best = beat ? n : prev;
      var rank = rankFor(n);

      var box = h('div', 'gm-result');
      box.appendChild(h('p', 'gm-result__score', fill(G.resultTitle, { n: n, total: tot })));
      box.appendChild(h('p', 'gm-result__rank', rank.title));
      box.appendChild(h('p', 'gm-result__line', rank.line));
      var dots = h('ul', 'gm-rdots');
      dots.setAttribute('aria-label', t('gameResultDots', 'Result for each call'));
      S.results.forEach(function (ok) {
        var li = h('li', 'gm-rdot ' + (ok ? 'is-ok' : 'is-bad'));
        li.setAttribute('aria-label', ok ? t('gameDotRight', 'right') : t('gameDotWrong', 'wrong'));
        li.appendChild(h('span', null, ok ? '✓' : '✕')).setAttribute('aria-hidden', 'true');
        dots.appendChild(li);
      });
      box.appendChild(dots);
      box.appendChild(h('p', 'gm-share', G.share));
      if (best !== null) {
        var b = h('p', 'gm-best' + (beat ? ' is-new' : ''), G.bestLabel + ': ' + best + ' / ' + G.perGame);
        if (beat) b.insertBefore(h('span', 'gm-pop', '★'), b.firstChild);
        box.appendChild(b);
      }
      var again = h('button', 'btn btn--primary gm-start', G.again);
      again.type = 'button';
      again.addEventListener('click', startGame);
      box.appendChild(again);
      setStage(box);
      live.textContent = fill(G.resultTitle, { n: n, total: tot }) + '. ' + rank.title;
      again.focus({ preventScroll: true });
      if (n === tot && !reduced()) confetti(box);
    }

    function clearConfetti() {
      if (confettiId) { clearTimeout(confettiId); confettiId = null; }
      var old = sec.querySelector('.gm-confetti');
      if (old) old.parentNode.removeChild(old);
    }
    function confetti(host) {
      clearConfetti();
      var layer = h('div', 'gm-confetti');
      layer.setAttribute('aria-hidden', 'true');
      var colors = ['#F0643C', '#FFC02E', '#0F8F83', '#F47B58', '#5FD4C6'];
      for (var k = 0; k < 36; k++) {
        var p = h('i', 'gm-conf');
        var ang = Math.random() * Math.PI * 2;
        var dist = 90 + Math.random() * 170;
        p.style.setProperty('--dx', Math.round(Math.cos(ang) * dist) + 'px');
        p.style.setProperty('--dy', Math.round(Math.sin(ang) * dist - 70) + 'px');
        p.style.setProperty('--rot', Math.round(Math.random() * 540 - 270) + 'deg');
        p.style.background = colors[k % colors.length];
        p.style.animationDelay = Math.round(Math.random() * 120) + 'ms';
        layer.appendChild(p);
      }
      host.appendChild(layer);
      confettiId = setTimeout(clearConfetti, 1800);
    }

    /* ---------- swipe ---------- */
    function attachSwipe(card) {
      card.addEventListener('pointerdown', function (e) {
        if (S.phase !== 'ask' || (e.pointerType === 'mouse' && e.button !== 0)) return;
        drag = { x: e.clientX, y: e.clientY, dx: 0, id: e.pointerId, live: false };
      });
      card.addEventListener('pointermove', function (e) {
        if (!drag || e.pointerId !== drag.id) return;
        var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
        if (!drag.live) {
          if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(dy)) return;
          drag.live = true;
          try { card.setPointerCapture(e.pointerId); } catch (err) {}
          card.classList.remove('is-snap');
        }
        drag.dx = dx;
        if (!reduced()) card.style.transform = 'translateX(' + dx + 'px) rotate(' + (dx / 24) + 'deg)';
      });
      function end(e) {
        if (!drag || e.pointerId !== drag.id) return;
        var d = drag; drag = null;
        if (!d.live) return;
        if (Math.abs(d.dx) >= SWIPE_PX) answer(d.dx > 0);
        else {
          if (!reduced()) card.classList.add('is-snap');
          card.style.transform = '';
        }
      }
      card.addEventListener('pointerup', end);
      card.addEventListener('pointercancel', function (e) {
        if (!drag) return;
        drag = null; card.style.transform = '';
      });
    }

    /* ---------- keyboard ---------- */
    document.addEventListener('keydown', function (e) {
      if (S.phase !== 'ask' && S.phase !== 'fb') return;
      if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
      var tg = e.target;
      if (tg && (tg.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName))) return;
      var focusedHere = sec.contains(document.activeElement) && document.activeElement !== document.body;
      if (!inView && !focusedHere) return;
      var k = e.key;
      if (S.phase === 'ask') {
        if (k === 'ArrowLeft' || k === 'r' || k === 'R') { e.preventDefault(); answer(false); }
        else if (k === 'ArrowRight' || k === 'c' || k === 'C') { e.preventDefault(); answer(true); }
      } else if (k === 'Enter' || k === ' ' || k === 'Spacebar') {
        if (tg && tg.tagName === 'BUTTON') return;  /* native click handles it */
        e.preventDefault();
        next();
      }
    });

    /* ---------- hash ---------- */
    function goHash() {
      if (location.hash === '#game') sec.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
    }
    window.addEventListener('hashchange', goHash);

    showIdle();
    if (location.hash === '#game') goHash();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
