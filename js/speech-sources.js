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
      meaningZh: "重建後的皇崗口岸預計今年第四季啟用，一地兩檢，以及「合作查驗、一次放行」。",
      meaningEn: "The rebuilt Huanggang Port is expected to open in the fourth quarter, with co-location and “joint inspection, one release”.",
      angleZh: "旅客少排一次隊，兩邊的查驗仍然發生。合作是流程，不是把任何一方的法律取消。",
      angleEn: "The passenger queues once. Inspection on both sides still happens. Cooperation is a process. It does not cancel either side’s law.",
      biteZh: "皇崗的一地兩檢讓旅客少走一次。一次放行的意思是查完才放，不是不查。如果講合作，我就停在這一句，不再加年報的人次。",
      biteEn: "Co-location at Huanggang means the passenger moves once. One release means release after the inspection, not instead of it. If I am talking about cooperation, I stop at that sentence and do not add the annual report’s passenger total.",
      href: "speech.html#story-c",
      linkZh: "公共例子怎樣選一個場景",
      linkEn: "How a public example picks one scene"
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
