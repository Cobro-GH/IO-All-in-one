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

純靜態 HTML／CSS／JS，無後端。建站規格見 `docs/CONTENT_BRIEF.md`、`docs/SOURCE_INDEX.md`。
