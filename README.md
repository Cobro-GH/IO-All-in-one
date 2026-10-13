# 入境事務主任應考指南

香港入境事務主任（Immigration Officer）備考靜態網站。

**備考參考，非正式官方教材。** 內容整理自公開資料與個人筆記摘要，並非入境事務處或公務員事務局的官方教材。招聘條件、法例與試題形式以政府原文為準。

## 網上瀏覽

GitHub Pages：<https://cobro-gh.github.io/IO-All-in-one/>

首次發布後，頁面可能需要約一分鐘才可開啟。

## 本地瀏覽

在本倉庫根目錄啟動靜態伺服器：

```bash
python3 -m http.server 8765
```

瀏覽器打開：<http://127.0.0.1:8765/>

直接開啟 `index.html` 亦可閱讀正文。依賴 `fetch` 的 `drive/manifest.json` 在 `file://` 下可能無法載入，不影響其餘章節。

## 章節

| 章節 | 頁面 |
|------|------|
| 招聘流程總覽 | `index.html` |
| 筆試 Paper I | `written.html` |
| 筆試 Paper II | `angles.html` |
| 即席演講 | `speech.html` |
| 小組討論 | `group-discussion.html` |
| 面試職能地圖 | `interview.html`、`knowledge.html` |
| 法例速查 | `law.html` |
| 證件／簽證／身份 | `identity.html` |
| 時事與政策 | `current-affairs.html` |
| 詞彙／答法／清單 | `glossary.html`、`phrases.html` |

輔助頁：`requirements.html`、`plan.html`、`scorecards.html`、`drive-materials.html`、`sources.html`。

官方消息頁：`news.html`（知識庫分組內的「新聞／部門消息」）。分為最新新聞、施政報告相關、規劃／五年計劃相關、入境處年報／刊物。頁面讀取 `data/news.json`。

**備考參考；內容可能滯後；以官網為準。**

## 更新新聞與官方摘錄

`scripts/refresh_news.py` 會重新抓取：

- 入境事務處新聞公報（與政府新聞處發布同步）
- [2026年施政報告](https://www.policyaddress.gov.hk/2026/tc/) 中與入境、簽證、人才、口岸、非法勞工有關的段落
- 香港五年規劃／國家「十五五」裡與入境處職責有關的摘錄（不是規劃全文）
- 刊物頁上的最新年報連結；若已安裝 `pdftotext`（poppler），會從年報開頭抽出與出入境、人才、證件、執法有關的短撮要

```bash
python3 scripts/refresh_news.py
```

同年年報的撮要會沿用 `data/news.json` 已有內容，避免每次都下載整本年報 PDF。若要強制重讀本機 PDF，可設定 `IMMD_AR_PDF=/path/to/report.pdf`。

GitHub Actions 工作流程 `.github/workflows/refresh-immd-news.yml` 每週一 09:00（香港時間）及可手動執行，在有改動時把新的 JSON 提交到 `main`。以 `GITHUB_TOKEN` 提交未必會自動觸發 Pages 重建；工作流程會再請求一次 Pages build（Pages 尚未啟用時該步會失敗並略過）。

純靜態 HTML／CSS／JS，無後端。建站規格見 `docs/CONTENT_BRIEF.md`、`docs/SOURCE_INDEX.md`。

頂欄可切「中文｜EN｜精要｜考場模式」（記在本機 `io-prep-lang`、`io-prep-mode`）。溫習預設中文正文；Stance、口號、GSMEAC、A/C/R/U 與詞彙名中英各一行。完整另一語用「顯示對照」或切到 EN。考場模式只留一種語言，演講計時不顯示故事提示。句式與詞彙卡可點擊翻面。導覽分組：總覽、筆試、初步面試、最後面試、知識庫、工具。
