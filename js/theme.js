/* theme.js — applies the saved light/dark choice before the first paint.
   Kept in its own file (not inline) so the page's Content-Security-Policy
   can refuse every inline script. Loaded in <head>, without async or defer. */
(function () {
  try {
    var t = localStorage.getItem('ak-theme');
    if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
  } catch (e) {}
})();
