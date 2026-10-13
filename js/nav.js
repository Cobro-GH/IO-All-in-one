/* Inject shared header — grouped primary nav */
(function () {
  var groups = [
    { label: "總覽", href: "index.html" },
    {
      label: "筆試",
      items: [
        ["written.html", "筆試 I"],
        ["angles.html", "作文 II"]
      ]
    },
    {
      label: "初步面試",
      items: [
        ["group-discussion.html", "小組討論"],
        ["speech.html", "即席演講"]
      ]
    },
    { label: "最後面試", href: "interview.html" },
    {
      label: "知識庫",
      items: [
        ["knowledge.html", "職能地圖"],
        ["law.html", "法例速查"],
        ["identity.html", "證件身份"],
        ["current-affairs.html", "時事政策"],
        ["news.html", "新聞／部門消息"]
      ]
    },
    {
      label: "工具",
      items: [
        ["glossary.html", "詞彙複習"],
        ["phrases.html", "句式"],
        ["scorecards.html", "評分表"],
        ["plan.html", "計劃"],
        ["requirements.html", "入職條件"],
        ["drive-materials.html", "Drive"],
        ["sources.html", "來源"]
      ]
    }
  ];

  function itemLinks(items) {
    return items.map(function (p) {
      return '<li><a href="' + p[0] + '">' + p[1] + "</a></li>";
    }).join("");
  }

  var links = groups.map(function (g) {
    if (g.href) return '<li><a href="' + g.href + '">' + g.label + "</a></li>";
    return (
      '<li class="nav-parent">' +
      '<button type="button" aria-expanded="false">' + g.label + "</button>" +
      '<ul class="nav-sub">' + itemLinks(g.items) + "</ul></li>"
    );
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
