/* Render data/news.json — official ImmD / Policy Address excerpts */
(function () {
  "use strict";

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function link(href, label) {
    var anchor = el("a", null, label);
    anchor.href = href;
    anchor.target = "_blank";
    anchor.rel = "noopener";
    return anchor;
  }

  function render(data) {
    var root = document.getElementById("news-root");
    root.textContent = "";

    var updated = data.updated ? "資料更新：" + data.updated + "（UTC）" : "";
    var note = el("p", "news-meta", [updated, data.disclaimer || ""].filter(Boolean).join(" · "));
    root.appendChild(note);

    var jump = el("nav", "section-nav");
    jump.setAttribute("aria-label", "消息分類");
    (data.sections || []).forEach(function (section) {
      var anchor = el("a", null, section.title);
      anchor.href = "#" + section.id;
      jump.appendChild(anchor);
    });
    root.appendChild(jump);

    (data.sections || []).forEach(function (section) {
      var heading = el("h2", null, section.title);
      heading.id = section.id;
      root.appendChild(heading);
      if (section.intro) root.appendChild(el("p", null, section.intro));

      var list = el("div", "news-list");
      (section.items || []).forEach(function (item) {
        var article = el("article", "news-item");
        article.appendChild(el("h3", null, item.title || "（無標題）"));
        var metaBits = [item.date, item.source].filter(Boolean);
        if (metaBits.length) article.appendChild(el("p", "news-meta", metaBits.join(" · ")));
        if (item.summary) article.appendChild(el("p", null, item.summary));
        if (item.bullets && item.bullets.length) {
          var bullets = el("ul");
          item.bullets.forEach(function (line) {
            bullets.appendChild(el("li", null, line));
          });
          article.appendChild(bullets);
        }
        if (item.why) article.appendChild(el("p", "why", "應考提示：" + item.why));
        var links = el("p", "news-links");
        var hasLink = false;
        if (item.url) {
          links.appendChild(link(item.url, "官方原文"));
          hasLink = true;
        }
        (item.links || []).forEach(function (extra) {
          if (!extra || !extra.url || extra.url === item.url) return;
          links.appendChild(link(extra.url, extra.label || "相關連結"));
          hasLink = true;
        });
        if (hasLink) article.appendChild(links);
        list.appendChild(article);
      });
      root.appendChild(list);
    });

    if (data.sources && data.sources.length) {
      var sources = el("p", "news-meta");
      sources.appendChild(document.createTextNode("抓取起點："));
      data.sources.forEach(function (href, index) {
        if (index) sources.appendChild(document.createTextNode(" · "));
        sources.appendChild(link(href, href.replace(/^https?:\/\//, "")));
      });
      root.appendChild(sources);
    }
  }

  var root = document.getElementById("news-root");
  if (!root) return;
  fetch("data/news.json", { cache: "no-cache" })
    .then(function (response) {
      if (!response.ok) throw new Error(String(response.status));
      return response.json();
    })
    .then(render)
    .catch(function () {
      root.textContent = "";
      root.appendChild(el("div", "panel warn", null));
      root.firstChild.appendChild(el(
        "p",
        null,
        "未能載入 data/news.json。請在倉庫根目錄執行 python3 -m http.server 後再開啟本頁；file:// 無法讀取 JSON。"
      ));
    });
})();
