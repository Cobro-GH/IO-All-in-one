/* ImmD IO Exam Prep — timers, question banks, score helpers */
(function () {
  "use strict";

  // Mobile nav
  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", function () {
        links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", links.classList.contains("open"));
      });
    }
    // Mark active nav
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href === path || (path === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  });

  // ——— Question banks (練習／據公開分享改編) ———
  var BANKS = {
    gd_zh: [
      "政府應否進一步擴展長者醫療券至大灣區更多城市？請討論利弊並提出建議。",
      "如何在繁忙管制站平衡旅客通關效率與保安檢查？",
      "面對情緒激動、不斷責罵職員的旅客，前線人員應如何處理？",
      "「搶人才」各項計劃對香港人口及公共服務的影響，應如何評估？",
      "是否應加強對非法勞工的執法力度？討論持份者及可行措施。",
      "電子化出入境服務如何改善市民體驗，同時保障個人資料私隱？",
      "公務員應如何在社交媒體上維持專業形象與操守？",
      "新口岸落成後，入境處在人手調配及培訓上面臨甚麼挑戰？",
      "如何向公眾解釋「入境處對人、海關對貨」的職責分工？",
      "免費或低收費公共交通優惠擴大後，對出入境及旅遊人流有何啟示？",
      "是否應提高訪客簽證／過境簽證的審批透明度？",
      "青年住屋困難與人口政策（包括輸入人才）之間應如何取捨？",
      "人工智能用於證件真偽識別的好處與風險是甚麼？",
      "大型活動或假期高峰期，管制站應如何預先部署？",
      "公務員輪班制對工作與生活平衡的影響，部門可如何支援？",
      "是否應全面擴大 e-道？請平衡便利與保安。",
      "打擊假結婚應更側重情報定還是口岸審查？",
      "人才計劃應收緊還是維持開放？提出把關建議。"
    ],
    gd_en: [
      "Should Hong Kong further expand talent admission schemes? Discuss benefits, risks and safeguards.",
      "How can ImmD balance efficient passenger clearance with rigorous security checks at busy control points?",
      "What should frontline officers do when a passenger becomes verbally abusive or physically threatening?",
      "Discuss the role of digitalisation in immigration services and data privacy concerns.",
      "How should the government manage non-refoulement claim cases while upholding due process?",
      "Is greater use of AI in document authentication desirable? What are the risks?",
      "How can civil servants maintain integrity and professionalism on social media?",
      "What challenges do new boundary control points create for staffing and training?",
      "Discuss ways to improve service for elderly and persons with disabilities at immigration counters.",
      "Should visitor visa policies be tightened or relaxed in the next five years? Why?",
      "How can ImmD better combat forged documents and identity fraud?",
      "What makes a good team leader in a disciplined service? Give examples.",
      "Discuss the impact of cross-boundary travel recovery on Hong Kong's economy and ImmD workload.",
      "How should officers handle media enquiries at a control point incident?",
      "Is bilingual service (Chinese and English) enough, or should more languages be supported?"
    ],
    speech: [
      "Teamwork", "Leadership", "Conflict", "Communication", "Time Management",
      "Stress", "Responsibility", "Integrity", "Patience", "Adaptability",
      "Rules", "Service", "EQ", "Technology", "Change", "Health", "Security",
      "Cooperation", "Resilience", "Discipline", "Efficiency", "Fairness",
      "Empathy", "Accountability", "Courage", "Trust", "Innovation",
      "Orange", "Bridge", "Passport", "Queue", "Balance", "Boundary", "Smart"
    ],
    speech_stories: [
      "用故事 A（小組 Project）講 Teamwork／Leadership／Stress",
      "用故事 B（侍應）講 Integrity／EQ／Adaptability",
      "用故事 C（疫情／e-Channel）講 Technology／Resilience／Rules",
      "主題 Adaptability：完整 3 分鐘結構（Intro→B→C→Close）"
    ],
    written_topics: [
      "【練習｜角度1+6】智慧口岸／e-道擴展如何同時提升便利與保安？",
      "【練習｜角度3】分析高才通等人才計劃的成效與防濫用把關。",
      "【練習｜S1】打擊非法勞工：刑罰加重與專責組之後，還需要甚麼？",
      "【練習｜S2】假結婚執法如何平衡嚴查與保護真正夫婦？",
      "【練習｜S3】逾期逗留與遣返：效率、法治與尊嚴如何兼顧？",
      "【練習｜S4】偽造證件與身份欺詐：科技與人員判斷如何分工？",
      "【練習｜S5】免遣返聲請：公平、效率與防濫用。",
      "【練習｜角度7】大灣區／北部都會區人流增加，入境處應如何準備？",
      "【練習｜角度5】專業服務與公眾信任：堅定是否等於無禮？",
      "【練習｜角度8】政策與科技的成效為何取決於執行人員質素？"
    ],
    interview: [
      "你對入境處服務有何認識？（執法＋公共服務）",
      "如何平衡便利與管制？",
      "哪類服務最能反映入境主任的專業？",
      "哪些法例與入境事務主任最相關？（Cap.115／331 等）",
      "請用 GSMEAC 處理：管制站懷疑假證、旅客激動鼓譟。",
      "口岸大型活動期間突然擠塞，你會怎樣處理？",
      "解釋簽證／進入許可與逗留條件的關係。",
      "高才通與一般就業政策有何分別？",
      "身份地位、旅行證件、簽證為何不是同一回事？",
      "居留權、入境權、無條件逗留有何不同？",
      "身份證符號：三粒星是否等於永久居民？",
      "Arrest、detain、removal、deportation 如何區分？",
      "外傭政策要留意哪些風險（合約真實、剝削、非法工作）？",
      "假結婚專案（如閃刺行動）說明甚麼執法重點？",
      "非法勞工：僱主刑罰與專責組之後，前線主任角色是甚麼？",
      "e-道與人員判斷如何分工？",
      "你為甚麼投考入境處而不是海關？",
      "請用三分鐘介紹自己（粵／英／普可能轉換）。",
      "下屬公開頂撞你，怎麼處理？",
      "發現同事疑似利益衝突，你會怎樣做？",
      "施政報告／北都／大灣區如何影響入境處工作？",
      "誠信對入境事務主任意味著甚麼？"
    ],
    current_affairs: [
      "高端人才通行證計劃（高才通）與優才、專才等計劃的定位分別",
      "出入境數字復甦與旅遊／商務人流對管制站壓力",
      "電子簽證、電子旅程／預約過關等數碼服務趨勢",
      "大灣區醫療、居住與跨境通勤對出入境政策的啟示",
      "證件防偽、生物特徵及身份管理科技",
      "公務員操守、《基本法》及《香港國安法》測試作為入職條件",
      "新／擴建口岸的人手及培訓需求（以官方公布為準）",
      "非法入境、逾期逗留、非法僱用之執法重點（概念層面）",
      "人事登記、出生／死亡／婚姻登記與市民生活的關係",
      "紀律部隊形象、市民投訴處理與服務承諾"
    ]
  };

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function $(id) {
    return document.getElementById(id);
  }

  // Generic practice widget: data-bank + optional timer
  window.IOPrep = {
    banks: BANKS,
    drawQuestion: function (bankKey, targetId) {
      var el = $(targetId);
      if (!el || !BANKS[bankKey]) return;
      el.textContent = pick(BANKS[bankKey]);
      el.dataset.bank = bankKey;
    },
    drawMany: function (bankKey, targetId, n) {
      var el = $(targetId);
      if (!el || !BANKS[bankKey]) return;
      var copy = BANKS[bankKey].slice();
      var out = [];
      n = Math.min(n || 5, copy.length);
      for (var i = 0; i < n; i++) {
        var idx = Math.floor(Math.random() * copy.length);
        out.push(copy.splice(idx, 1)[0]);
      }
      el.innerHTML = "<ol>" + out.map(function (q) {
        return "<li>" + escapeHtml(q) + "</li>";
      }).join("") + "</ol>";
    },
    startTimer: function (seconds, displayId, onEnd) {
      var el = $(displayId);
      if (!el) return;
      if (el._timer) clearInterval(el._timer);
      var left = seconds;
      function render() {
        var m = Math.floor(left / 60);
        var s = left % 60;
        el.textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
        if (left <= 30) el.style.color = "#f59e0b";
        if (left <= 10) el.style.color = "#ef4444";
        if (left <= 0) {
          clearInterval(el._timer);
          el._timer = null;
          el.textContent = "00:00";
          if (onEnd) onEnd();
          else if (navigator.vibrate) navigator.vibrate(200);
        }
        left--;
      }
      el.style.color = "";
      render();
      el._timer = setInterval(render, 1000);
    },
    stopTimer: function (displayId) {
      var el = $(displayId);
      if (el && el._timer) {
        clearInterval(el._timer);
        el._timer = null;
      }
    },
    sumScore: function (formId, outId) {
      var form = $(formId);
      var out = $(outId);
      if (!form || !out) return;
      var total = 0;
      var max = 0;
      form.querySelectorAll("select[data-score]").forEach(function (sel) {
        var v = parseInt(sel.value, 10) || 0;
        var m = parseInt(sel.getAttribute("data-max") || "5", 10);
        total += v;
        max += m;
      });
      out.textContent = "自我評分合計：" + total + " / " + max +
        (max ? "（" + Math.round((total / max) * 100) + "%）" : "");
    },
    printPage: function () {
      window.print();
    },
    saveChecklist: function (key) {
      var data = {};
      document.querySelectorAll('[data-check="' + key + '"]').forEach(function (cb, i) {
        data[i] = cb.checked;
      });
      try { localStorage.setItem("io-prep-" + key, JSON.stringify(data)); } catch (e) {}
    },
    loadChecklist: function (key) {
      try {
        var raw = localStorage.getItem("io-prep-" + key);
        if (!raw) return;
        var data = JSON.parse(raw);
        document.querySelectorAll('[data-check="' + key + '"]').forEach(function (cb, i) {
          if (data[i]) cb.checked = true;
        });
      } catch (e) {}
    }
  };

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-autoload-check]").forEach(function (el) {
      IOPrep.loadChecklist(el.getAttribute("data-autoload-check"));
    });
  });
})();
