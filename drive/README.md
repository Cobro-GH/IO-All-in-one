# Drive「IO」資料夾併入說明

此目錄預留給用戶 Google Drive「IO」資料夾的匯出／摘要內容。

## 建議檔名（主代理或後續步驟放入）

| 檔案 | 用途 |
|------|------|
| `manifest.json` | 檔案清單：title, type, summary, sourcePath, tags |
| `notes-*.md` 或 `.html` | 筆記摘要（小組討論／演講／筆試／面試） |
| `questions-*.json` | 額外題庫（可被 `js/drive-content.js` 載入） |
| `snippets-*.html` | 可直接嵌入各模組 `#drive-slot-*` 的 HTML 片段 |

## 網站接口

- 各主模組頁底部有 `<section id="drive-slot-...">` 佔位。
- `js/drive-content.js` 會嘗試讀取 `drive/manifest.json`；若存在則在首頁與對應模組顯示「來自你的 IO 資料夾」區塊。
- 未放入檔案時，佔位區顯示「暫無 Drive 材料」，不影響其餘內容。

請勿把含私隱或未授權分享的完整付費課程原文直接公開到靜態站；宜改寫為個人筆記摘要後再併入。
