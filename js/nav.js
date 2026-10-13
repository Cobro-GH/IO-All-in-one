/* Inject shared header — CONTENT_BRIEF A1–A10 */
(function () {
  var pages = [
    ["index.html", "總覽"],
    ["written.html", "筆試I"],
    ["angles.html", "作文II"],
    ["speech.html", "即席演講"],
    ["group-discussion.html", "小組討論"],
    ["interview.html", "最後面試"],
    ["knowledge.html", "職能地圖"],
    ["law.html", "法例速查"],
    ["identity.html", "證件身份"],
    ["current-affairs.html", "時事政策"],
    ["glossary.html", "詞彙複習"],
    ["phrases.html", "句式"],
    ["scorecards.html", "評分表"],
    ["plan.html", "計劃"],
    ["requirements.html", "入職條件"],
    ["drive-materials.html", "Drive"],
    ["sources.html", "來源"]
  ];
  var links = pages.map(function (p) {
    return '<li><a href="' + p[0] + '">' + p[1] + "</a></li>";
  }).join("");
  var html =
    '<a class="skip-link" href="#main">跳至正文</a>' +
    '<div class="disclaimer-bar">備考參考，非正式官方教材 · 用戶 Drive「IO」＋網上公開資料 · 法例以電子法例為準 · <a href="https://www.immd.gov.hk/hkt/recruitment/" target="_blank" rel="noopener" style="color:#fde68a">immd.gov.hk</a></div>' +
    '<header class="site-header"><div class="nav-inner">' +
    '<a class="brand" href="index.html">入境事務主任<span>應考指南</span></a>' +
    '<button type="button" class="nav-toggle" aria-expanded="false" aria-controls="nav-menu">選單</button>' +
    '<ul class="nav-links" id="nav-menu">' + links + "</ul></div></header>";
  var el = document.getElementById("site-nav-root");
  if (el) el.innerHTML = html;
})();
