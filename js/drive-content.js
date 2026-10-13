/* Load optional Drive「IO」folder manifest into page slots */
(function () {
  "use strict";
  function renderEmpty(el) {
    if (!el) return;
    el.innerHTML =
      '<div class="panel tip"><p style="margin:0"><strong><span data-l="zh">Drive 材料接口：</span><span data-l="en">Drive materials slot: </span></strong>' +
      '<span data-l="zh">此模組暫未併入 Google Drive「IO」資料夾內容。匯入後會顯示於此。</span>' +
      '<span data-l="en">This module does not yet include the Google Drive “IO” folder. It will appear here after import.</span></p></div>';
  }
  function renderItems(el, items, module) {
    var filtered = (items || []).filter(function (it) {
      return !module || it.module === module || it.module === "general";
    });
    if (!filtered.length) {
      renderEmpty(el);
      return;
    }
    var html =
      '<div class="panel ok"><h3 style="margin-top:0"><span data-l="zh">來自你的 Google Drive「IO」資料夾</span><span data-l="en">From your Google Drive “IO” folder</span></h3><ul>';
    filtered.forEach(function (it) {
      html += "<li><strong>" + (it.title
        ? escapeHtml(it.title)
        : '<span data-l="zh">未命名</span><span data-l="en">Untitled</span>') + "</strong>";
      if (it.summary) html += " — " + escapeHtml(it.summary);
      if (it.tags && it.tags.length)
        html +=
          " <span class=\"tag\">" +
          escapeHtml(it.tags.join(", ")) +
          "</span>";
      html += "</li>";
    });
    html += "</ul><p style=\"font-size:.85rem;color:var(--text-muted);margin-bottom:0\"><span data-l=\"zh\">完整筆記可置於 <code>drive/</code> 目錄後由此站連結。</span><span data-l=\"en\">Full notes can live in <code>drive/</code> and be linked from this site.</span></p></div>";
    el.innerHTML = html;
  }
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function load() {
    var slots = document.querySelectorAll("[data-drive-slot]");
    if (!slots.length) return;
    fetch("drive/manifest.json", { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("no manifest");
        return r.json();
      })
      .then(function (data) {
        slots.forEach(function (el) {
          var mod = el.getAttribute("data-drive-slot");
          renderItems(el, data.items || [], mod === "home" ? null : mod);
          if (mod === "home" && (!data.items || !data.items.length)) {
            renderEmpty(el);
          }
        });
      })
      .catch(function () {
        slots.forEach(function (el) {
          renderEmpty(el);
        });
      });
  }
  document.addEventListener("DOMContentLoaded", load);
})();
