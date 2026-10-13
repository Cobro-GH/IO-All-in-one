/* Language + exam mode. Keys: io-prep-lang (zh|en|bi-key), io-prep-mode (study|exam). */
(function () {
  "use strict";

  var LANGS = ["zh", "en", "bi-key"];
  var lang = "zh";
  var mode = "study";

  try {
    var storedLang = localStorage.getItem("io-prep-lang");
    var storedMode = localStorage.getItem("io-prep-mode");
    if (LANGS.indexOf(storedLang) !== -1) lang = storedLang;
    if (storedMode === "study" || storedMode === "exam") mode = storedMode;
  } catch (e) {}

  function apply() {
    var root = document.documentElement;
    root.dataset.lang = lang;
    root.dataset.mode = mode;
    root.lang = lang === "en" ? "en" : "zh-HK";
  }

  apply();

  function persist() {
    try {
      localStorage.setItem("io-prep-lang", lang);
      localStorage.setItem("io-prep-mode", mode);
    } catch (e) {}
  }

  function compareLabel(open) {
    if (lang === "en") return open ? "Hide comparison" : "Show comparison";
    return open ? "隱藏對照" : "顯示對照";
  }

  function paintBar() {
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-set-lang") === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("is-on", on);
    });
    document.querySelectorAll("[data-set-mode]").forEach(function (btn) {
      var on = mode === "exam";
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("is-on", on);
    });
    document.querySelectorAll("[data-compare]").forEach(function (btn) {
      var block = btn.closest(".lang-block");
      var open = !!(block && block.classList.contains("is-compare-open"));
      btn.textContent = compareLabel(open);
    });
  }

  function notify() {
    document.dispatchEvent(new CustomEvent("io-prep-langchange", {
      detail: { lang: lang, mode: mode }
    }));
  }

  function mountBar() {
    var host = document.querySelector(".nav-inner");
    if (!host || host.querySelector(".lang-bar")) return;
    var bar = document.createElement("div");
    bar.className = "lang-bar";
    bar.setAttribute("role", "group");
    bar.setAttribute("aria-label", "語言與模式");
    bar.innerHTML =
      '<button type="button" data-set-lang="zh">中文</button>' +
      '<button type="button" data-set-lang="en">EN</button>' +
      '<button type="button" data-set-lang="bi-key">精要</button>' +
      '<button type="button" data-set-mode="exam">考場模式</button>';
    var toggle = host.querySelector(".nav-toggle");
    if (toggle) host.insertBefore(bar, toggle);
    else host.appendChild(bar);
    paintBar();
    notify();
  }

  document.addEventListener("DOMContentLoaded", function () {
    mountBar();
    paintBar();
  });

  document.addEventListener("click", function (e) {
    var langBtn = e.target.closest("[data-set-lang]");
    if (langBtn) {
      var next = langBtn.getAttribute("data-set-lang");
      if (LANGS.indexOf(next) === -1) return;
      lang = next;
      persist();
      apply();
      paintBar();
      notify();
      return;
    }
    var modeBtn = e.target.closest("[data-set-mode]");
    if (modeBtn) {
      mode = mode === "exam" ? "study" : "exam";
      persist();
      apply();
      paintBar();
      notify();
      return;
    }
    var compare = e.target.closest("[data-compare]");
    if (compare) {
      var block = compare.closest(".lang-block");
      if (!block) return;
      var open = block.classList.toggle("is-compare-open");
      compare.setAttribute("aria-expanded", open ? "true" : "false");
      compare.textContent = compareLabel(open);
      return;
    }
    var card = e.target.closest(".flip-card");
    if (!card || e.target.closest("a")) return;
    var flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", flipped ? "true" : "false");
  });
})();
