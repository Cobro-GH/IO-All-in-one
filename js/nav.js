/* Inject shared header — grouped primary nav */
(function () {
  function bi(zh, en) {
    return '<span data-l="zh">' + zh + '</span><span data-l="en">' + en + "</span>";
  }

  var groups = [
    { label: bi("總覽", "Overview"), href: "index.html" },
    {
      label: bi("筆試", "Written"),
      items: [
        ["written.html", bi("筆試 I", "Paper I")],
        ["angles.html", bi("作文 II", "Paper II")]
      ]
    },
    {
      label: bi("初步面試", "Initial interview"),
      items: [
        ["group-discussion.html", bi("小組討論", "Group discussion")],
        ["group-discussion.html#prelim-sheet", bi("考前一屏", "Prelim sheet")],
        ["speech.html", bi("即席演講 2:30", "Impromptu 2:30")]
      ]
    },
    { label: bi("最後面試", "Final interview"), href: "interview.html" },
    {
      label: bi("知識庫", "Knowledge"),
      items: [
        ["knowledge.html", bi("職能地圖", "Service map")],
        ["law.html", bi("法例速查", "Law notes")],
        ["identity.html", bi("證件身份", "Identity")],
        ["current-affairs.html", bi("時事政策", "Current affairs")],
        ["news.html", bi("新聞／部門消息", "News")]
      ]
    },
    {
      label: bi("工具", "Tools"),
      items: [
        ["glossary.html", bi("詞彙複習", "Glossary")],
        ["phrases.html", bi("句式", "Phrases")],
        ["scorecards.html", bi("評分表", "Scorecards")],
        ["plan.html", bi("計劃", "Plan")],
        ["requirements.html", bi("入職條件", "Entry requirements")],
        ["drive-materials.html", "Drive"],
        ["sources.html", bi("來源", "Sources")]
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
    '<a class="skip-link" href="#main">' + bi("跳至正文", "Skip to content") + "</a>" +
    '<div class="disclaimer-bar">' + bi(
      "備考參考，非正式官方教材 · 用戶 Drive「IO」＋網上公開資料 · 法例以電子法例為準 · ",
      "Study notes, not an official textbook · Drive “IO” plus public sources · Ordinances follow the e-Legislation · "
    ) + '<a href="https://www.immd.gov.hk/hkt/recruitment/" target="_blank" rel="noopener" style="color:#fde68a">immd.gov.hk</a></div>' +
    '<header class="site-header"><div class="nav-inner">' +
    '<a class="brand" href="index.html">' + bi("入境事務主任", "Immigration Officer") + "<span>" + bi("應考指南", "exam guide") + "</span></a>" +
    '<button type="button" class="nav-toggle" aria-expanded="false" aria-controls="nav-menu">' + bi("選單", "Menu") + "</button>" +
    '<ul class="nav-links" id="nav-menu">' + links + "</ul></div></header>";
  var el = document.getElementById("site-nav-root");
  if (el) el.innerHTML = html;
})();
