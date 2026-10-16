/* Speech readings for news items that otherwise only list facts.
   Figures are the ones already in data/news.json or the current-affairs cards.
   refresh_news.py rewrites news.json, so this file stays separate. */
var SPEECH_SOURCES = {
  "入境事務處二○二五年工作回顧": [
    {
      layerZh: "印象 3｜身份",
      layerEn: "Impression 3, identity",
      meaningZh: "這篇是處長的年度口述，撮要沒有列出人次或遣返數字。它適合收結，不適合當統計來源。",
      meaningEn: "This is the Director’s spoken review of the year. The digest does not list passenger or removal figures. Use it to close, not as the source of a statistic.",
      angleZh: "守護南大門、配合施政、便利和執法放在同一段。數字改用年報序言撮要，並說「年報」而不是「這篇回顧」。",
      angleEn: "Guarding the southern gateway, supporting the policy agenda, facilitation and enforcement sit in one passage. Take figures from the annual-report foreword digest, and say “the annual report”, not “this review”.",
      biteZh: "工作回顧讓我把部門說成一句：既配合施政，也守護南大門。人次、e-道和遣返我改引用年報撮要，不在這篇公報裡現編數字。",
      biteEn: "The year-in-review lets me say the department in one line: it supports the policy agenda and guards the southern gateway. For passenger numbers, e-Channel and removal I switch to the annual-report digest. I do not invent figures inside this press release.",
      href: "speech.html#ex-flow",
      linkZh: "年報人流的完整示例",
      linkEn: "Full example: annual-report flow"
    }
  ],
  "大灣區校園畢業生留港／回港就業": [
    {
      layerZh: "印象 2｜一項便利",
      layerEn: "Impression 2, one facilitation",
      meaningZh: "試行延長兩年，讓更多大灣區校園畢業生留港或回港工作。不是所有分校畢業生已經永久納入。",
      meaningEn: "The trial is extended for two years so more graduates of Greater Bay Area campuses can stay or return to work. It is not a permanent rule for every branch-campus graduate.",
      angleZh: "主任核對的是這個人符不符合該安排，不是替香港決定要不要人才。",
      angleEn: "An officer checks whether this person fits the arrangement. An officer does not decide for Hong Kong whether it wants talent.",
      biteZh: "施政報告把大灣區校園畢業生留港或回港就業的試行再延長兩年。我的第一句是開門和把關是同一句。這是試行，資格仍然要核對。",
      biteEn: "The Policy Address extends for two years the trial under which Greater Bay Area campus graduates may stay or return to work. My first line is that opening the door and keeping the gate are one sentence. It is a trial, and the eligibility is still checked.",
      href: "speech.html#ex-talent",
      linkZh: "人才示例",
      linkEn: "Talent example"
    }
  ],
  "高才通續簽要求放寬": [
    {
      layerZh: "印象 2｜一類文件",
      layerEn: "Impression 2, one class of document",
      meaningZh: "只限獲指定公營機構支持的初創科企經營者，續簽時可豁免公司收入證明等要求。不是所有高才通續簽都免收入證明，也不是 2026 年 3 月起提早三個月申請延長逗留。",
      meaningEn: "Only operators of start-ups supported by designated public organisations may be exempted from requirements such as proof of company income on renewal. It is not every Top Talent Pass renewal, and it is not the March 2026 change that lets people apply three months early to extend a stay.",
      angleZh: "寬的是一類證明，不是真確性。學歷和受僱仍然可以假，那張卡在時事頁，不要裝進這一段施政報告。",
      angleEn: "What is relaxed is one class of proof, not genuineness. Qualifications and employment can still be false. That card is on the current-affairs page. Do not pretend it is inside this Policy Address paragraph.",
      biteZh: "如果我只講這一項：指定支持的初創科企經營者，高才通續簽可以少交收入證明，因為創業初期收入不穩。少交一類文件，不是不用核對身份。提早三個月交延長申請是另一件事。",
      biteEn: "If I speak only this item: operators of designated supported start-ups may submit less income proof when they renew a Top Talent Pass, because income is unstable at the start. One fewer document is not a skipped identity check. Applying three months early to extend a stay is a different measure.",
      href: "speech.html#ex-talent",
      linkZh: "和提早三個月怎樣分開",
      linkEn: "How to keep it apart from the three-month change"
    }
  ],
  "擴大「特邀人士入境便利計劃」": [
    {
      layerZh: "印象 2｜邀請不是免查",
      layerEn: "Impression 2, an invitation is not a waiver",
      meaningZh: "計劃由東盟擴到中亞和中東，所有政策局和部門都可以發邀請，目的是經貿往來。",
      meaningEn: "The scheme extends from ASEAN to Central Asia and the Middle East, and every bureau and department may issue an invitation, to promote business and exchanges.",
      angleZh: "邀請解釋了這個人為甚麼來，不代替管制站的身份核對和逗留條件。",
      angleEn: "The invitation explains why the person is coming. It does not replace an identity check or the conditions of stay at the control point.",
      biteZh: "特邀人士計劃擴大了地區，也讓所有部門都能發邀請。我的印象是：邀請讓對的人來得順，來到仍然要核對他是不是被邀請的那一個。",
      biteEn: "The invited-persons scheme now covers more regions, and every department may invite. My impression is that an invitation lets the right person arrive smoothly, and on arrival we still check that this is the person who was invited.",
      href: "speech.html#ex-talent",
      linkZh: "人才示例",
      linkEn: "Talent example"
    }
  ],
  "新增短期培訓簽證類別": [
    {
      layerZh: "印象 2｜新的逗留目的",
      layerEn: "Impression 2, a new purpose of stay",
      meaningZh: "新增簽證，讓非本地人士來港上政府政策局和部門認可的短期培訓課程，服務「區域培訓中心」。",
      meaningEn: "A new visa lets non-local people attend short training courses recognised by government bureaux and departments, as part of making Hong Kong a regional training centre.",
      angleZh: "課程是逗留目的。它不是工作許可，也不是免審查的入境。",
      angleEn: "The course is the purpose of stay. It is not permission to work, and it is not entry without a check.",
      biteZh: "新的短期培訓簽證多了一種合法來港的理由。印象 1 是目的要和簽證一致。如果培訓變成受僱，那就回到逗留條件，而不是稱讚多一個簽證。",
      biteEn: "The new short-term training visa adds one lawful reason to come. Impression 1 is that the purpose must match the visa. If the training becomes employment, the question returns to conditions of stay, not to praise for having another visa.",
      href: "speech.html#ex-talent",
      linkZh: "人才示例",
      linkEn: "Talent example"
    }
  ],
  "港珠澳大橋「智通行」先導計劃": [
    {
      layerZh: "印象 2｜已登記的人才上車",
      layerEn: "Impression 2, only registered people stay in the car",
      meaningZh: "今年 12 月在大橋香港口岸試行。AI 配合人面辨識，自動識別已登記的合資格跨境私家車司機和乘客，車上無感通關。",
      meaningEn: "The pilot starts in December at the Bridge Hong Kong Port. AI with facial recognition identifies registered eligible drivers and passengers of cross-boundary private cars, for clearance without leaving the vehicle.",
      angleZh: "「無感」是少一次停車，不是少一次身份核對。未登記、證件有問題、或系統對不上的人，仍然要停下來。",
      angleEn: "“Contactless” means one less stop. It does not mean one less identity check. A person who is not registered, whose document is doubtful, or whom the system does not match, still stops.",
      biteZh: "智通行是給已登記、合資格的司機和乘客，人不用下車。我不會把它說成所有車輛都自動放行。科技改的是步驟，判斷還在。",
      biteEn: "Smart Crossing is for registered, eligible drivers and passengers, who need not leave the car. I would not describe it as every vehicle being released automatically. Technology changes the step. Judgement stays.",
      href: "speech.html#ex-flow",
      linkZh: "和年報人流怎樣二選一",
      linkEn: "How to choose this or the annual-report flow"
    }
  ],
  "皇崗口岸「一地兩檢」": [
    {
      layerZh: "印象 2｜一次放行不是沒有檢查",
      layerEn: "Impression 2, one release is not no inspection",
      meaningZh: "施政報告這句仍是計劃：重建後的皇崗預計今年第四季啟用，一地兩檢，以及「合作查驗、一次放行」。落實見 2026 年 10 月 12 日上午 6 時 30 分的開通，不要把計劃句改寫成公報，也不要把兩句當成無關的兩則新聞。",
      meaningEn: "This Policy Address sentence is still the plan: the rebuilt Huanggang Port was expected to open in the fourth quarter, with co-location and “joint inspection, one release”. The opening at 6:30 a.m. on 12 October 2026 is that plan carried out. Do not rewrite the plan sentence as if it were the announcement, and do not treat the two sentences as unrelated items.",
      angleZh: "旅客少排一次隊，兩邊的查驗仍然發生。合作是流程，不是把任何一方的法律取消。開通時刻和暫停落馬洲旅檢才是 10 月 9 日公報；每日約 20 萬人次是 7 月的設計流量。一則演講只選其中一個事實。",
      angleEn: "The passenger queues once. Inspection on both sides still happens. Cooperation is a process. It does not cancel either side’s law. The opening time and the Lok Ma Chau suspension are the 9 October announcement. About 200,000 passenger trips a day is the July design flow. One talk uses only one of those facts.",
      biteZh: "皇崗的一地兩檢讓旅客少走一次。一次放行的意思是查完才放，不是不查。如果我要加事實，我只加 10 月 12 日早上 6 時 30 分已開通，或 24 小時旅客和客運車輛，然後停。不再加年報的人次。",
      biteEn: "Co-location at Huanggang means the passenger moves once. One release means release after the inspection, not instead of it. If I add a fact, I add only that it opened at 6:30 a.m. on 12 October, or that passengers and passenger vehicles clear around the clock, and then I stop. I do not add the annual report’s passenger total.",
      href: "speech.html#ex-huanggang",
      linkZh: "皇崗 1-2-3 示例",
      linkEn: "Huanggang 1-2-3 example"
    }
  ],
  "全方位打擊非法勞工": [
    {
      layerZh: "印象 2｜五項，不要背罰則表",
      layerEn: "Impression 2, five measures, not a penalty table",
      meaningZh: "施政報告這段是五項：強化跨部門專責組、業界反黑工大使、網上巡邏和情報、檢視刑罰、針對性聯合行動，並減低潛在免遣返聲請人的經濟誘因。",
      meaningEn: "This Policy Address passage is five measures: strengthen the inter-departmental task force, appoint trade ambassadors, patrol and gather intelligence online, review penalties, and run targeted joint operations, and reduce the economic incentive for potential non-refoulement claimants.",
      angleZh: "僱主最高罰款 50 萬元及監禁 10 年是角度筆記，不是這一段的原文。年報的 2,600 人是聲請不獲確立後的遣離，不要塞進「五項」裡當同一個數字。",
      angleEn: "An employer’s maximum fine of $500,000 and 10 years is the angles note, not the wording of this paragraph. The report’s 2,600 people are removals after a claim was not substantiated. Do not drop that figure into the “five measures” as if it were the same statistic.",
      biteZh: "打黑工我只講施政報告的五項：專責組、大使、網上巡邏、檢視刑罰、聯合行動。目的是本地工人優先，也是減少違法受僱的誘因。罰則和年報遣返數字我另說出處，不混在這一句。",
      biteEn: "On illegal employment I say only the five Policy Address measures: the task force, ambassadors, online patrols, a review of penalties, and joint operations. The purpose is local workers’ priority, and fewer reasons to employ people illegally. The penalty and the annual-report removal figure get their own sources. They do not share this sentence.",
      href: "speech.html#ex-enforce",
      linkZh: "執行示例",
      linkEn: "Enforcement example"
    }
  ],
  "香港第一個五年規劃，對接國家「十五五」": [
    {
      layerZh: "印象 1｜兩份文件的關係",
      layerEn: "Impression 1, how the two documents relate",
      meaningZh: "五年規劃是未來五年的方向；施政報告是落實該規劃的年度安排。這段不是入境處的工作清單。",
      meaningEn: "The five-year plan is the direction for five years. The Policy Address is the year’s arrangement for carrying it out. This passage is not ImmD’s work list.",
      angleZh: "接到入境處時只留三樣：人才入境、口岸人流、大灣區機制。其餘產業段落不要背。",
      angleEn: "When you connect it to ImmD, keep only three things: talent admission, port passenger flow, and Greater Bay Area mechanisms. Do not recite the industry paragraphs.",
      biteZh: "我不會背五年規劃。我只記它和施政報告的關係：規劃是方向，施政報告是這一年怎樣做。對主任來說，那就是人才、口岸人流，和兩地規則怎樣對得上。",
      biteEn: "I would not recite the five-year plan. I remember only how it relates to the Policy Address: the plan is the direction, and the Policy Address is what this year does about it. For an officer that means talent, passenger flow at the ports, and whether the rules on the two sides meet.",
      href: "speech.html#impression",
      linkZh: "先造印象 1",
      linkEn: "Build impression 1 first"
    }
  ],
  "「十五五」開局與大灣區人員往來": [
    {
      layerZh: "印象 2｜軟聯通才是入境處的句子",
      layerEn: "Impression 2, soft connectivity is ImmD’s sentence",
      meaningZh: "硬聯通是基建，軟聯通是規則和機制，心聯通是居民往來。全文還有產業和國際交往，那些不是這一則演講的材料。",
      meaningEn: "Hard connectivity is infrastructure, soft connectivity is rules and mechanisms, and heart connectivity is contact among residents. The rest of the passage is industry and international engagement. That is not material for this talk.",
      angleZh: "入境處站在軟聯通：人怎樣合法往來、證件和逗留條件怎樣對得上。不要把「心聯通」說成免檢查。",
      angleEn: "ImmD stands in soft connectivity: how people move lawfully, and how documents and conditions of stay match. Do not describe heart connectivity as no inspection.",
      biteZh: "大灣區和入境處有關的一句，是規則對得上，人才能往來。基建和產業我不會在即席演講裡展開。便利的人走得快，條件仍然在。",
      biteEn: "The one Greater Bay Area line that belongs to ImmD is that people can move when the rules meet. I would not open infrastructure or industry in an impromptu talk. Eligible people move faster, and the conditions are still there.",
      href: "speech.html#ex-flow",
      linkZh: "人流示例",
      linkEn: "Flow example"
    }
  ],
  "入境事務處2025年年報": [
    {
      layerZh: "印象 2｜人流，只講一個數字",
      layerEn: "Impression 2, passenger flow, one figure",
      meaningZh: "約 3.35 億人次、較 2024 年約 +12%、超過 2019 年約 3 億，說明的是量。e-道年齡 11 歲下調至 7 歲，以及機場容易飛 e-道以容貌識別、無須出示實體證件，說明的是合資格的人怎樣走。第五次 Skytrax 只可作輕收結。",
      meaningEn: "About 335 million movements, about 12% more than in 2024, above the 2019 record of about 300 million, is the volume. The e-Channel age moving from 11 to 7, and Easy Fly e-Channel at the airport with facial recognition and no physical document, is how eligible people move. A fifth Skytrax award is only a light close.",
      angleZh: "人多了，檢查沒有取消。自助通關是分流，判斷沒有交給機器。",
      angleEn: "More people did not cancel the check. Self-service clearance is streaming. Judgement has not been handed to a machine.",
      biteZh: "年報序言撮要：2025 年約 3.35 億人次，比 2024 年多約 12%。我只加一個配套：e-道年齡降到 7 歲，或機場容易飛 e-道。第一句是便利給合資格的人，最後一句是判斷仍在主任手上。",
      biteEn: "The annual-report foreword digest: about 335 million movements in 2025, about 12% more than in 2024. I add only one companion: the e-Channel age down to 7, or Easy Fly e-Channel at the airport. The first line is facilitation for eligible people. The last line is that judgement stays with the officer.",
      href: "speech.html#ex-flow",
      linkZh: "人流示例",
      linkEn: "Flow example"
    },
    {
      layerZh: "印象 2｜證件和人才，不要和人次綁在一起",
      layerEn: "Impression 2, documents and talent, not tied to the passenger total",
      meaningZh: "換證約 746 萬人、換證率約 93%；174 個國家或地區給予特區護照免簽證或落地簽證；序言說配合人才入境政策和電子簽證，以及十五五支持香港作為國際高端人才集聚的方向。",
      meaningEn: "About 7.46 million identity cards replaced, a rate of about 93%. 174 countries and territories offer visa-free access or visa on arrival to HKSAR passport holders. The foreword says ImmD supports talent-admission policies and electronic visas, and that the 15th Five-Year Plan proposals support Hong Kong as a hub for high-end international talent.",
      angleZh: "證件可信，人才通道才有意義。逾 23 萬人和假學歷個案不在年報這八點裡，要講就改口說角度筆記。",
      angleEn: "A talent route means something only if the document is trustworthy. “More than 230,000” and the fake-credential case are not in these eight annual-report points. If you use them, say they are the angles notes.",
      biteZh: "年報如果我拿來講證件，就講約 746 萬人換領、約 93%，或者 174 個地方給特區護照免簽或落地簽。人才那句只說到配合政策和電子簽證。我不把 3.35 億人次再講一次。",
      biteEn: "If I use the annual report for documents, I say about 7.46 million cards replaced, about 93%, or 174 places offering visa-free access or visa on arrival to the HKSAR passport. The talent line only says ImmD supports the policies and electronic visas. I do not quote 335 million movements again.",
      href: "speech.html#ex-talent",
      linkZh: "人才示例",
      linkEn: "Talent example"
    },
    {
      layerZh: "印象 2｜遣離，不要改寫成聲請成功率",
      layerEn: "Impression 2, removal, not rewritten as a claim success rate",
      meaningZh: "2025 年遣離超過 2,600 名免遣返聲請不獲確立人士，較前一年增加約 18%。",
      meaningEn: "In 2025 more than 2,600 people whose non-refoulement claims were not substantiated were removed, about 18% more than the year before.",
      angleZh: "這是不獲確立之後的執行。不能用來宣稱所有聲請都是濫用，也不能代替施政報告的五項打黑工。",
      angleEn: "This is enforcement after a claim was not substantiated. It cannot be used to say every claim is abusive, and it does not replace the five illegal-employment measures in the Policy Address.",
      biteZh: "年報這句我只會這樣說：2025 年遣離超過 2,600 名聲請不獲確立的人士，約多 18%。它說明執行，不說明每一個聲請人都在濫用。遣送和遞解我仍然分開。",
      biteEn: "I would say the annual-report line only like this: in 2025 more than 2,600 people whose claims were not substantiated were removed, about 18% more than the year before. It shows enforcement. It does not show that every claimant is abusing the system. I still keep removal apart from deportation.",
      href: "speech.html#ex-enforce",
      linkZh: "執行示例",
      linkEn: "Enforcement example"
    }
  ],
  "刊物目錄（年報、新聞公報）": [
    {
      layerZh: "印象 1｜你怎樣跟進部門",
      layerEn: "Impression 1, how you follow the department",
      meaningZh: "這是目錄，不是新數字。新一年年報上載後，站內撮要才會改年份。",
      meaningEn: "This is an index, not a new figure. The digest on this site changes year only after a new annual report is uploaded.",
      angleZh: "被問「你如何認識部門」時，答年報、工作回顧和新聞公報，不答補習筆記。",
      angleEn: "If you are asked how you follow the department, name the annual report, the year-in-review and press releases, not revision notes.",
      biteZh: "我跟進部門靠三樣：年報、處長的工作回顧、新聞公報。筆記幫我記住哪一層印象，數字以官網為準。",
      biteEn: "I follow the department through three things: the annual report, the Director’s year-in-review, and press releases. Notes help me remember which impression a fact belongs to. The figures follow the official site.",
      href: "speech.html#impression",
      linkZh: "1-2-3 方法",
      linkEn: "The 1-2-3 method"
    }
  ]
};

/* Plain reading of thin excerpts. Official summary/bullets stay; these sentences say what they mean.
   refresh_news.py rewrites news.json, so the reading lives here. */
var EXCERPT_ANALYSIS = {
  "入境事務處二○二五年工作回顧": {
    zh: {
      after: [
        "這篇是處長在新聞發布會上的年度口述。本頁留下的撮要講的是部門怎樣定位自己：作為維護國家安全的一環，按適用法例和現行入境政策守護南大門，同時配合特區政府的施政。它沒有在這段撮要裡列出人次、換證或遣返數字。那些數字在下面的年報序言，不要把兩篇當成同一組統計。"
      ]
    },
    en: {
      after: [
        "This is the Director’s year-in-review at a press conference. The digest kept here is how the department describes itself: part of safeguarding national security, applying the law and current immigration policy, guarding the southern gateway, and supporting the Government’s agenda. This extract does not list passenger, identity-card or removal figures. Those figures are in the annual-report foreword below. Do not treat the two texts as one set of statistics."
      ]
    }
  },
  "大灣區校園畢業生留港／回港就業": {
    zh: {
      after: [
        "講的是一個仍在試行的安排：本港大學在大灣區校園的畢業生，可以繼續被納入「留港／回港就業安排」，試行再延長兩年，讓更多這類畢業生留在香港或回來工作。受影響的是這些校園的畢業生，不是所有在內地讀書的人，也不是已經取得居留權。考生要記住它仍然是試行，有畢業和院校條件；延長兩年不是永久納入，更不是自動批准。"
      ]
    },
    en: {
      after: [
        "This is still a trial. Graduates of Hong Kong universities’ Greater Bay Area campuses can continue to be included in the Immigration Arrangements for Non-local Graduates, and the trial is extended for two years so more of them can stay or return to work. It affects those graduates, not everyone who studied on the Mainland, and it is not the right of abode. The two-year extension is not a permanent rule and not an automatic approval. Eligibility still has to be met."
      ]
    }
  },
  "高才通續簽要求放寬": {
    zh: {
      after: [
        "講的是高才通續簽時少交一類文件，不是降低整個計劃的審查。對象只限獲指定公營機構支持的初創科企經營者：企業初期收入不穩，所以續簽可以獲豁免公司收入證明等要求。其他高才通申請人沒有這項豁免。它也不是 2026 年 3 月起「延長逗留可提早三個月申請」——那一項改的是遞表時間，這一項改的是個別類別要交的收入文件。身份、學歷和其他續簽條件仍然要核對。"
      ]
    },
    en: {
      after: [
        "This relaxes one class of document at Top Talent Pass renewal. It does not lower the check for the whole scheme. Only operators of start-ups supported by designated public organisations are covered: income is often low while the business is unstable, so they may be exempted from proof of company income and similar items. Other Top Talent Pass applicants do not get that exemption. It is also not the March 2026 change that lets people apply three months early to extend a stay. That change is about when the form is filed. This one is about an income document for one class of applicant. Identity, qualifications and the other renewal conditions are still checked."
      ]
    }
  },
  "擴大「特邀人士入境便利計劃」": {
    zh: {
      after: [
        "講的是誰可以被邀請、從哪些地方來。計劃原先涵蓋東盟成員國，現在擴到中亞和中東；而且不限某幾個部門，所有政策局和部門都可以發邀請，目的是經貿和交流。受影響的是這些地方、持有邀請的訪客，不是一般旅客的免簽名單。邀請說明來港目的，管制站仍要核對這個人是不是被邀請的那一個，以及逗留條件是否相符。"
      ]
    },
    en: {
      after: [
        "This says who may be invited, and from where. The scheme used to cover ASEAN member states. It now extends to Central Asia and the Middle East, and every bureau and department may issue an invitation, for business and exchanges. It affects invited visitors from those places, not the general visa-free list for ordinary travellers. The invitation explains the purpose of the visit. At the control point the officer still checks that this is the person invited, and that the conditions of stay match."
      ]
    }
  },
  "新增短期培訓簽證類別": {
    zh: {
      after: [
        "講的是多了一種來港目的，不是多了一種工作簽證。非本地人士可以來港上政府政策局和部門認可的短期培訓課程，對應的政策是把香港做成區域培訓中心。受影響的是獲批這類簽證的學員，以及認可那些課程的政策局和部門。逗留理由是課程本身。如果人在港轉去做課程以外的受僱，問題就回到逗留條件，不能用「已經有簽證」帶過。"
      ]
    },
    en: {
      after: [
        "This adds a purpose of stay, not a work visa. Non-local people may come for short training courses recognised by government bureaux and departments, as part of making Hong Kong a regional training centre. It affects people granted that visa, and the bureaux that recognise the courses. The reason for the stay is the course. If the person takes employment outside the course, the question is a breach of the conditions of stay. “I already have a visa” does not answer it."
      ]
    }
  },
  "港珠澳大橋「智通行」先導計劃": {
    zh: {
      after: [
        "講的是大橋香港口岸一種不用下車的通關試驗，時間是今年 12 月。系統用人工智能配合人面辨識，認出已經登記、合資格的跨境私家車司機和乘客。受影響的是這批已登記的人，不是每一輛過橋的車，也不是步行過關的旅客。「無感」是少一次停車和出示證件，身份仍然要被識別。未登記、系統對不上，或證件有疑問的人，不能當成已經放行。"
      ]
    },
    en: {
      after: [
        "This is a pilot at the Hong Kong Port of the Hong Kong-Zhuhai-Macao Bridge, starting in December, for clearance without leaving the car. AI and facial recognition identify drivers and passengers of cross-boundary private cars who have already registered and are eligible. It affects that registered group, not every vehicle on the bridge and not passengers clearing on foot. “Contactless” means one less stop and one less document produced. Identity is still identified. Someone who is not registered, whom the system does not match, or whose document is doubtful, has not been cleared."
      ]
    }
  },
  "皇崗口岸「一地兩檢」": {
    zh: {
      after: [
        "講的是施政報告裡的計劃：重建後的皇崗口岸預計今年第四季啟用。旅客在同一地點完成兩邊的檢查，模式叫「合作查驗、一次放行」，所以少走一次、少排一次隊。受影響的是使用皇崗的旅客，以及兩邊的查驗人員。一次放行是查完才放，不是取消其中一方的檢查，也不是把法律併成一套。這一句維持施政報告的原文，不要改寫成已經開通。",
        "開通是另一份文件，接的是同一件事。保安局與深圳市人民政府口岸辦公室 2026 年 10 月 9 日的聯合公布寫明：港方口岸區及相關延伸區自 2026 年 7 月 31 日零時起依照香港法律實施管轄；口岸於 2026 年 10 月 12 日上午 6 時 30 分正式開通，為旅客和客運車輛提供 24 小時通關，同時暫停往來深圳皇崗口岸臨時旅檢樓和香港落馬洲管制站的旅檢服務。這份公布沒有寫設計人次。每日約 20 萬人次、北環線支線開通後約 30 萬人次，是 2026 年 7 月 17 日政府公布的設計流量，不是開通當日的實際人次。應考時用時事頁「新皇崗口岸」那一張卡，把計劃和開通說成一層印象。"
      ]
    },
    en: {
      after: [
        "This Policy Address sentence is the plan: the rebuilt Huanggang Port was expected to open in the fourth quarter. Passengers complete both sides’ checks in one place, under “joint inspection, one release”, so they move and queue once. It affects passengers using Huanggang and the officers on both sides. One release means release after the inspection. It does not cancel either side’s check, and it does not merge the two legal systems. Keep this as the Policy Address wording. Do not rewrite it as if the port had already opened inside that sentence.",
        "The opening is a different document about the same project. The joint announcement of 9 October 2026, by the Security Bureau and the Shenzhen Municipal People’s Government Port Office, states that the Hong Kong port area and the related extended areas have been administered under Hong Kong law since 00:00 on 31 July 2026. The port opened at 6:30 a.m. on 12 October 2026, with 24-hour clearance for passengers and passenger vehicles, and passenger clearance between the temporary passenger building at Shenzhen Huanggang Port and Hong Kong’s Lok Ma Chau Control Point was suspended. That announcement does not state a design throughput. About 200,000 passenger trips a day, and about 300,000 after the Northern Link spur line opens, is the design flow in the government announcement of 17 July 2026, not the actual count on opening day. In the exam, use the “new Huanggang Port” card on the current-affairs page, and say the plan and the opening as one impression."
      ]
    }
  },
  "全方位打擊非法勞工": {
    zh: {
      after: [
        "講的是怎樣減少聘用沒有許可的人，以及減少有人為了工作而來港、其後走上免遣返聲請的經濟誘因。五項都是手段：強化跨部門專責組並檢視成員、在個別行業找「反黑工大使」收集情報和做宣傳、用科技做網上巡邏、檢視刑罰以求更有阻嚇力、以及針對性的跨部門聯合行動。受影響的是僱主、不符合逗留條件而工作的人，和參與執法的部門。這一段沒有寫出罰款或監禁年期；角度筆記裡的僱主最高罰款 50 萬元及監禁 10 年是另一個出處，不要說成施政報告這段的數字。"
      ]
    },
    en: {
      after: [
        "This is about making it less worthwhile to employ someone who has no permission to work, and about reducing the economic pull for people who might later make a non-refoulement claim. The five items are the means: strengthen the inter-departmental task force and review who sits on it, appoint trade ambassadors in selected sectors to gather intelligence and publicise the rules, use technology for online patrols, review penalties so the courts can pass more deterrent sentences, and run targeted joint operations. It affects employers, people working in breach of their conditions of stay, and the departments that enforce the rules. This paragraph does not state a fine or a term of imprisonment. The angles note of an employer’s maximum fine of $500,000 and 10 years is a different source. Do not attribute it to this Policy Address passage."
      ]
    }
  },
  "香港第一個五年規劃，對接國家「十五五」": {
    zh: {
      after: [
        "講的是兩份文件的關係，不是入境處的工作清單。今年是國家「十五五」開局之年；香港寫了自己第一份五年規劃，用來對接國家規劃。五年規劃定未來五年的方向，施政報告則是這一年怎樣落實、行政長官當年的重點。中間關於經濟和民生的句子是全港的方向，不要背成主任的職責。接到入境處時只留三件相關的事：人才怎樣進來、口岸人流怎樣處理、大灣區的規則和機制怎樣對得上。"
      ]
    },
    en: {
      after: [
        "This explains how two documents relate. It is not ImmD’s work list. This year is the first year of the national 15th Five-Year Plan. Hong Kong has written its own first five-year plan so that it lines up with the national plan. The five-year plan sets the direction for five years. The Policy Address is how that direction is carried out this year, and what the Chief Executive is prioritising now. The sentences about the economy and livelihoods are for Hong Kong as a whole. Do not memorise them as an officer’s duties. What belongs to ImmD is three things only: how talent is admitted, how port passenger flow is handled, and how Greater Bay Area rules and mechanisms match."
      ]
    }
  },
  "「十五五」開局與大灣區人員往來": {
    zh: {
      after: [
        "講的是大灣區協同發展裡，人怎樣往來。原文把合作分成基建的「硬聯通」、規則和機制的「軟聯通」、居民之間的「心聯通」，後面還有產業、創新和「一帶一路」。和入境處直接有關的是軟聯通：人要合法往來，證件、簽證和逗留條件就要對得上。硬聯通是口岸和橋，心聯通不是免檢查。產業和國際組織那些句子不要在這一則裡展開。"
      ]
    },
    en: {
      after: [
        "This is about how people move inside Greater Bay Area cooperation. The text splits the work into “hard connectivity” of infrastructure, “soft connectivity” of rules and mechanisms, and “heart connectivity” among residents, then goes on to industry, innovation and the Belt and Road. What belongs directly to ImmD is soft connectivity: lawful movement depends on documents, visas and conditions of stay matching. Hard connectivity is ports and bridges. Heart connectivity is not the cancellation of inspection. Do not develop the industry and international-organisation sentences in this item."
      ]
    }
  },
  "入境事務處2025年年報": {
    zh: {
      after: [
        "下面八點都來自年報序言的撮要，不是年報全文。每一點先是原文裡的事實，接著說明它在講什麼、影響誰。"
      ],
      points: [
        "講的是 2025 年全港進出境的總量，不是某一個口岸。約 3.35 億人次，比 2024 年多約 12%，也超過 2019 年約 3 億的紀錄，所以口岸比疫前更忙。考生要接的不是背誦人次，而是人多了仍然要分流：合資格的人走得快，有疑問的人停下來。",
        "講的是誰可以走 e-道，不是取消兒童的身份核對。年齡由 11 歲降到 7 歲，適用於持智能身份證的香港永久性居民，以及持指定電子旅行證件的過境和訪港旅客。更年幼的旅客會進入自助通道；證件不符、系統對不上，或需要同行大人處理的情況，仍然要有人在櫃檯接手。",
        "講的是機場入境少一次拿出證件。合資格香港居民用容貌識別核實身份，不用出示實體證件，也不用掃描非觸式 e-道二維碼。受影響的是這批合資格居民。未符合資格或系統認不出的人，不能當成已經通關。",
        "講的是人才政策和電子簽證要配合國家規劃，不是公布一個新配額。序言說《「十五五」規劃建議》支持香港作為國際高端人才集聚的方向，入境處配合各項人才入境政策，並做電子化簽證申請。這句沒有批准人數。考生不要把別頁的「逾 23 萬人」安到這一句上。",
        "講的是舊智能身份證已經不能再用。換證計劃完結後，舊證在 2025 年分兩階段失效；約 746 萬人已換領，換證率約 93%。受影響的是尚未換領、仍拿舊證的人。管制站和人事登記認的是仍有效的證，不能假設舊證過關或辦證仍然可以。",
        "講的是香港特區護照在外地的待遇，不是外地人免簽來港的名單。截至 2025 年年底，174 個國家或地區給護照持有人免簽證或落地簽證。考生可以用它說明旅行證件的認受性，不能說成所有訪客都免簽進入香港。",
        "講的是免遣返聲請不獲確立之後的遣離，不是聲請成功率。2025 年超過 2,600 人，比前一年多約 18%。受影響的是聲請已經完結、不獲確立的人。不能用這個數字說每一個聲請人都在濫用，也不要把它和遞解混成同一種權力。",
        "講的是機場出入境服務的外界評價。入境處第五次獲得 Skytrax「全球最佳機場出入境服務大獎」。它可以用來說明便利和秩序可以同時存在，但不是執法成績，也不能代替上面的人次或遣返數字。"
      ]
    },
    en: {
      after: [
        "The eight points below are from the foreword digest, not the full report. Each point is the fact in the foreword, then what it is saying and who it affects."
      ],
      points: [
        "This is the total of arrivals and departures for Hong Kong in 2025, not one control point. About 335 million movements, about 12% more than in 2024, and above the 2019 record of about 300 million, means the ports are busier than before the pandemic. The point to learn is not the headcount. It is that a larger flow still has to be streamed: eligible people move faster, and a doubtful case stops.",
        "This is who may use e-Channel, not the cancellation of identity checks for children. The age goes from 11 to 7, for Hong Kong permanent residents holding a smart identity card and for specified visitors and transit passengers holding an electronic travel document. Younger passengers enter the self-service channel. A document that does not match, a system that does not recognise the person, or a case that needs the accompanying adult, still comes back to an officer.",
        "This is one less time a document is produced at the airport. Eligible Hong Kong residents verify identity by facial recognition, without a physical document and without scanning a contactless e-Channel QR code. It affects that eligible group. Someone who is not eligible, or whom the system does not recognise, has not been cleared.",
        "This says talent policy and electronic visas have to support the national plan. It does not announce a new quota. The foreword says the 15th Five-Year Plan proposals support Hong Kong as a hub for high-end international talent, and that ImmD supports the talent-admission policies and electronic visa applications. There is no approval figure in the sentence. Do not attach the “more than 230,000” from another page to this line.",
        "This says the old smart identity card can no longer be used. After the replacement exercise, old cards ceased to be valid in two phases in 2025. About 7.46 million people had replaced theirs, a rate of about 93%. It affects people who still hold an old card. Control points and registration of persons recognise a card that is still valid. An old card is not a reason to assume clearance or a counter service will proceed.",
        "This is the treatment of the HKSAR passport abroad, not the list of foreigners who may enter Hong Kong visa-free. By the end of 2025, 174 countries and territories offered visa-free access or visa on arrival to passport holders. A candidate can use it to show that the travel document is widely accepted. It does not mean every visitor enters Hong Kong visa-free.",
        "This is removal after a non-refoulement claim was not substantiated, not a success rate for claims. More than 2,600 people in 2025, about 18% more than the year before. It affects people whose claims have ended and were not substantiated. The figure does not show that every claimant is abusing the system, and it is not the same power as deportation.",
        "This is an outside view of airport immigration service. ImmD received the Skytrax award for the world’s best airport immigration service for the fifth time. It can show that facilitation and order can exist together. It is not an enforcement result, and it does not replace the passenger or removal figures above."
      ]
    }
  },
  "刊物目錄（年報、新聞公報）": {
    zh: {
      after: [
        "這不是另一組統計，而是入境處放年報和新聞公報的目錄。考生要用它知道全文在哪裡，而不是在目錄頁背數字。新一年年報上載之後，本站的更新腳本才會改指到最新年份；目錄本身不會告訴你今年的人次。"
      ]
    },
    en: {
      after: [
        "This is not another set of statistics. It is ImmD’s index of annual reports and press releases. A candidate uses it to know where the full text is, not to memorise a figure from the index page. After a new annual report is uploaded, this site’s update script points at the latest year. The index itself does not state this year’s passenger total."
      ]
    }
  }
};
