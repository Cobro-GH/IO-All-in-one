/* Render data/news.json — official ImmD / Policy Address excerpts, with English twins from news-en.js */
(function () {
  "use strict";

  var EN = window.NEWS_EN || {};
  var chrome = EN.chrome || {};

  function el(tag, cls) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    return node;
  }

  var SOURCE_EN = {
    "入境事務處新聞公報": "Immigration Department press release",
    "行政長官2026年施政報告": "Chief Executive’s 2026 Policy Address",
    "2026年施政報告第一章（香港一五規劃）": "2026 Policy Address, Chapter 1 (Hong Kong’s first five-year plan)",
    "2026年施政報告（融入國家發展大局）": "2026 Policy Address (integrating into national development)",
    "入境事務處刊物": "Immigration Department publication",
    "入境事務處": "Immigration Department"
  };

  function sourceEn(zh) {
    return SOURCE_EN[zh] || zh;
  }

  function textPair(zh, en) {
    var wrap = document.createDocumentFragment();
    var z = document.createElement("span");
    z.setAttribute("data-l", "zh");
    z.textContent = zh || "";
    wrap.appendChild(z);
    if (en) {
      var e = document.createElement("span");
      e.setAttribute("data-l", "en");
      e.textContent = en;
      wrap.appendChild(e);
    }
    return wrap;
  }

  function link(href, zhLabel, enLabel) {
    var anchor = document.createElement("a");
    anchor.href = href;
    anchor.target = "_blank";
    anchor.rel = "noopener";
    anchor.appendChild(textPair(zhLabel, enLabel || zhLabel));
    return anchor;
  }

  function compareButton() {
    var btn = el("button", "btn secondary compare-btn");
    btn.type = "button";
    btn.setAttribute("data-compare", "");
    btn.setAttribute("aria-expanded", "false");
    var en = document.documentElement.dataset.lang === "en";
    btn.textContent = en ? "Show comparison" : "顯示對照";
    return btn;
  }

  function fillProse(node, summary, bullets, why) {
    if (summary) node.appendChild(el("p")).textContent = summary;
    if (bullets && bullets.length) {
      var list = el("ul");
      bullets.forEach(function (line) {
        var item = el("li");
        item.textContent = line;
        list.appendChild(item);
      });
      node.appendChild(list);
    }
    if (why) {
      var tip = el("p", "why");
      tip.textContent = why;
      node.appendChild(tip);
    }
  }

  function render(data) {
    var root = document.getElementById("news-root");
    root.textContent = "";
    var dict = EN.items || {};
    var sections = EN.sections || {};

    var updatedZh = data.updated ? "資料更新：" + data.updated + "（UTC）" : "";
    var updatedEn = data.updated ? (chrome.updated || "Updated") + ": " + data.updated + " (UTC)" : "";
    var note = el("p", "news-meta");
    if (updatedZh) {
      note.appendChild(textPair(updatedZh, updatedEn));
      note.appendChild(document.createTextNode(" · "));
    }
    note.appendChild(textPair(data.disclaimer || "", EN.disclaimer || ""));
    root.appendChild(note);

    var jump = el("nav", "section-nav");
    jump.setAttribute("aria-label", chrome.jump || "Sections");
    (data.sections || []).forEach(function (section) {
      var meta = sections[section.id] || {};
      var anchor = document.createElement("a");
      anchor.href = "#" + section.id;
      anchor.appendChild(textPair(section.title, meta.title));
      jump.appendChild(anchor);
    });
    root.appendChild(jump);

    (data.sections || []).forEach(function (section) {
      var meta = sections[section.id] || {};
      var heading = el("h2");
      heading.id = section.id;
      heading.appendChild(textPair(section.title, meta.title || section.title));
      root.appendChild(heading);
      if (section.intro) {
        var intro = el("p");
        intro.appendChild(textPair(section.intro, meta.intro));
        root.appendChild(intro);
      }

      var list = el("div", "news-list");
      (section.items || []).forEach(function (item) {
        var article = el("article", "news-item");
        var copy = dict[item.title] || null;
        var h3 = el("h3");
        if (copy && copy.title) {
          h3.appendChild(textPair(item.title || chrome.untitled, copy.title));
        } else {
          h3.textContent = item.title || chrome.untitled || "（無標題）";
        }
        article.appendChild(h3);

        var metaBits = [item.date, item.source].filter(Boolean);
        if (metaBits.length) {
          var metaP = el("p", "news-meta");
          metaP.appendChild(document.createTextNode(item.date ? item.date + " · " : ""));
          metaP.appendChild(textPair(item.source || "", sourceEn((copy && copy.source) || item.source || "")));
          article.appendChild(metaP);
        }

        var block = el("div", "lang-block");
        block.appendChild(compareButton());
        var zh = el("div", "prose");
        zh.setAttribute("data-l", "zh");
        fillProse(zh, item.summary, item.bullets, item.why ? "應考提示：" + item.why : "");
        if (item.why) {
          var gloss = document.createElement("a");
          gloss.href = "glossary.html";
          gloss.appendChild(textPair("詞彙", chrome.glossary || "Glossary"));
          zh.querySelector(".why").appendChild(document.createTextNode(" "));
          zh.querySelector(".why").appendChild(gloss);
        }
        block.appendChild(zh);

        var en = el("div", "prose");
        en.setAttribute("data-l", "en");
        if (copy) {
          var whyEn = copy.why ? (chrome.examTip || "Exam tip") + ": " + copy.why : "";
          fillProse(en, copy.summary, copy.bullets || null, whyEn);
          if (copy.why) {
            var glossEn = document.createElement("a");
            glossEn.href = "glossary.html";
            glossEn.textContent = chrome.glossary || "Glossary";
            en.querySelector(".why").appendChild(document.createTextNode(" "));
            en.querySelector(".why").appendChild(glossEn);
          }
        } else {
          var noteP = el("p");
          noteP.textContent = chrome.missingEn || "No English study note is attached for this item yet. Read the official Chinese text.";
          en.appendChild(noteP);
          zh.removeAttribute("data-l");
        }
        block.appendChild(en);
        article.appendChild(block);

        var links = el("p", "news-links");
        var hasLink = false;
        if (item.url) {
          links.appendChild(link(item.url, "官方原文", chrome.official || "Official text"));
          hasLink = true;
        }
        (item.links || []).forEach(function (extra) {
          if (!extra || !extra.url || extra.url === item.url) return;
          var zhLabel = extra.label || "相關連結";
          var enLabel = (EN.linkLabels && EN.linkLabels[zhLabel]) || chrome.related || zhLabel;
          links.appendChild(link(extra.url, zhLabel, enLabel));
          hasLink = true;
        });
        if (hasLink) article.appendChild(links);
        list.appendChild(article);
      });
      root.appendChild(list);
    });

    if (data.sources && data.sources.length) {
      var sources = el("p", "news-meta");
      sources.appendChild(textPair("抓取起點：", (chrome.sources || "Sources fetched") + ": "));
      data.sources.forEach(function (href, index) {
        if (index) sources.appendChild(document.createTextNode(" · "));
        sources.appendChild(link(href, href.replace(/^https?:\/\//, ""), href.replace(/^https?:\/\//, "")));
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
      var panel = el("div", "panel warn");
      var p = el("p");
      p.appendChild(textPair(
        "未能載入 data/news.json。請在倉庫根目錄執行 python3 -m http.server 後再開啟本頁；file:// 無法讀取 JSON。",
        chrome.loadError || "Could not load data/news.json."
      ));
      panel.appendChild(p);
      root.appendChild(panel);
    });
})();
