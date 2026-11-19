/* lang.js — picks the language and builds window.AK from the English copy plus a translation.
   Loaded after data.js, data.fr.js, data.de.js and before everything else.
   English is the default; a visitor's choice is remembered. ?lang=fr or ?lang=de also works (for sharing). */
(function () {
  var LANGS = window.AK_LANGS || {};
  var SUPPORTED = [
    { id: "en", label: "EN", name: "English" },
    { id: "fr", label: "FR", name: "Français" },
    { id: "de", label: "DE", name: "Deutsch" }
  ];

  function isSupported(id) {
    return !!LANGS[id] && SUPPORTED.some(function (l) { return l.id === id; });
  }

  function pick() {
    try {
      var q = new URLSearchParams(location.search).get("lang");
      if (q && isSupported(q)) { try { localStorage.setItem("ak-lang", q); } catch (e) {} return q; }
    } catch (e) {}
    try {
      var s = localStorage.getItem("ak-lang");
      if (s && isSupported(s)) return s;
    } catch (e) {}
    return "en";
  }

  /* Translation files hold only strings, in the same shape as the English object.
     Objects merge by key, arrays by position; anything missing falls back to English. */
  function merge(base, over) {
    if (over === undefined || over === null) return base;
    if (Array.isArray(base)) {
      if (!Array.isArray(over)) return base;
      return base.map(function (item, i) { return merge(item, over[i]); });
    }
    if (base && typeof base === "object") {
      if (typeof over !== "object" || Array.isArray(over)) return base;
      var out = {};
      Object.keys(base).forEach(function (k) { out[k] = merge(base[k], over[k]); });
      return out;
    }
    return typeof over === typeof base ? over : base;
  }

  var lang = pick();
  var AK = lang === "en" ? LANGS.en : merge(LANGS.en, LANGS[lang]);
  AK.lang = lang;
  AK.langs = SUPPORTED.filter(function (l) { return !!LANGS[l.id]; });
  window.AK = AK;
  document.documentElement.lang = lang;

  /* t("key", "English fallback", {n: 3}) -> interface string with placeholders filled in */
  window.AKt = function (key, fallback, vars) {
    var s = (AK.ui && AK.ui[key]) || fallback || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  };

  window.AKsetLang = function (id) {
    if (!isSupported(id)) return;
    try { localStorage.setItem("ak-lang", id); } catch (e) {}
    var url = new URL(location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.delete("lang");
      url.hash = "";
      location.replace(url.pathname + url.search);
    } else {
      location.reload();
    }
  };
})();
