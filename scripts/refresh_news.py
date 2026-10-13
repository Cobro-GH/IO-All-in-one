#!/usr/bin/env python3
"""Refresh data/news.json from official ImmD, Policy Address, and publications pages.

Stdlib only, plus poppler's pdftotext when an annual-report PDF must be read.
Re-uses bullets already stored for the same report year so weekly runs need not
download the full PDF again.
"""

from __future__ import annotations

import json
import os
import re
import subprocess
import tempfile
import urllib.request
from datetime import datetime, timezone
from html import unescape
from pathlib import Path
from urllib.parse import urljoin

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "news.json"

UA = (
    "IOExamPrepBot/1.0 "
    "(static exam-prep site; +https://github.com/Cobro-GH/IO-All-in-one)"
)
PRESS_LIST = "https://www.immd.gov.hk/hkt/press/press_releases.html"
PRESS_BASE = "https://www.immd.gov.hk"
PUBS = "https://www.immd.gov.hk/hkt/press/press-publications.html"
PA_BASE = "https://www.policyaddress.gov.hk/2026/tc/"
PA_CHAPTERS = {
    "ch1": urljoin(PA_BASE, "chapter1.html"),
    "ch3": urljoin(PA_BASE, "chapter3.html"),
    "ch6": urljoin(PA_BASE, "chapter6.html"),
    "ch7": urljoin(PA_BASE, "chapter7.html"),
}

DISCLAIMER = "備考參考；內容可能滯後；以官網為準。"
BULLET_VERSION = 2

POLICY_KEYS = (
    "高才通",
    "簽證類別",
    "智通行",
    "皇崗口岸",
    "非法勞工",
    "免遣返",
    "留港",
    "入境便利",
    "特邀人士",
)
def fetch(url: str, timeout: int = 45) -> str:
    req = urllib.request.Request(
        url,
        headers={"User-Agent": UA, "Accept-Language": "zh-HK,zh;q=0.9,en;q=0.5"},
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        raw = resp.read()
        charset = resp.headers.get_content_charset() or "utf-8"
    return raw.decode(charset, errors="replace")


def fetch_bytes(url: str, timeout: int = 180) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def strip_tags(fragment: str) -> str:
    text = re.sub(r"(?is)<script.*?>.*?</script>", " ", fragment)
    text = re.sub(r"(?is)<style.*?>.*?</style>", " ", text)
    text = re.sub(r"(?i)<br\s*/?>", " ", text)
    text = re.sub(r"<[^>]+>", " ", text)
    text = unescape(text).replace("\xa0", " ")
    return re.sub(r"\s+", " ", text).strip()


def clip(text: str, limit: int = 220) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip("，,；;、 ") + "…"


def parse_zh_date(value: str) -> str:
    match = re.search(r"(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日", value)
    if not match:
        return ""
    year, month, day = (int(part) for part in match.groups())
    return f"{year:04d}-{month:02d}-{day:02d}"


def why_for(*parts: str) -> str:
    blob = " ".join(parts)
    if "工作回顧" in blob:
        return "部門年度工作回顧適合答「你對入境處有多認識」：人才、通關和執法數字以該篇公報為準。"
    if "1+2" in blob or "聯繫協作" in blob:
        return "粵港澳出入境管理協作：重大活動通關、大灣區人流、口岸科技。可講跨地機制，而不是只背單次拘捕數字。"
    if any(key in blob for key in ("免遣返", "遣返", "遣送")):
        return "遣送和免遣返聲請是主任常見情景：依法執行，同時守住程序公正，並留意聲請機制被濫用的公開說法。"
    if any(key in blob for key in ("高才", "優才", "留港", "簽證類別", "入境便利", "人才清單")):
        return "人才政策題：入境便利與防濫用（偽學歷、虛假受僱、續簽）要一起答，並指出審批與執法後盾。"
    if any(key in blob for key in ("詐騙", "虛假", "偽造", "欺騙")):
        return "文件真偽與以欺騙手段取得服務：面試可講核實、情報和檢控，不要只背個案數字。"
    if any(key in blob for key in ("e-道", "無感", "智通行", "一地兩檢")):
        return "管制站效率題：自助通關、容貌識別與身份核實要同時講得通。準備人流、私隱，以及兒童、證件失效等例外。"
    if any(key in blob for key in ("護照", "免簽證", "身份證", "1868")):
        return "個人證件與外遊便利：防偽證件、居民身份、旅行證件和協助在外港人（1868）可以分開講。"
    if any(key in blob for key in ("通關", "口岸")):
        return "管制站效率題：自助通關、容貌識別與身份核實要同時講得通。準備人流、私隱，以及兒童、證件失效等例外。"
    if any(key in blob for key in ("非法勞工", "黑工", "逗留條件", "外傭")):
        return "面試和小組討論常考「便利與管制」：逗留條件、僱主查核身份、跨部門執法。可接本地就業、專業執法、不歧視。"
    if any(key in blob for key in ("十五五", "五年規劃", "大灣")):
        return "只記與入境處職責有關的摘錄：人才集聚、口岸人流、規則銜接。不必背整份規劃。"
    if any(key in blob for key in ("國安", "南大門")):
        return "可連結總體國家安全觀，以及出入境「入境前、入境時、入境後」三道防線。"
    return "用官方例子說明入境處的角色。數字和個案以公報原文為準，不要背過時剪報。"


def parse_press_list(html: str) -> list[dict]:
    sections = re.findall(
        r'data-section-id="(\d{4})"(.*?)(?=data-section-id="\d{4}"|$)',
        html,
        flags=re.S,
    )
    if not sections:
        sections = [("", html)]
    latest_year = max((year for year, _ in sections if year.isdigit()), default="")
    chunk = next((body for year, body in sections if year == latest_year), html)
    items = []
    for row in re.findall(r"<tr\b[^>]*>(.*?)</tr>", chunk, flags=re.S):
        cells = re.findall(r"<td\b[^>]*>(.*?)</td>", row, flags=re.S)
        if len(cells) < 2:
            continue
        date = parse_zh_date(strip_tags(cells[0]))
        link = re.search(r'href="([^"]+)"[^>]*>(.*?)</a>', cells[1], flags=re.S)
        if not link or not date:
            continue
        title = strip_tags(link.group(2))
        title = re.sub(r"（附圖）|\(附圖\)", "", title).strip()
        if not title:
            continue
        items.append(
            {
                "title": title,
                "date": date,
                "url": urljoin(PRESS_BASE, link.group(1)),
            }
        )
    items.sort(key=lambda item: item["date"], reverse=True)
    return items


def select_press(items: list[dict]) -> list[dict]:
    selected: list[dict] = []
    seen: set[str] = set()
    routine = 0

    def add(item: dict) -> None:
        if item["url"] in seen:
            return
        seen.add(item["url"])
        selected.append(item)

    for item in items:
        if len(selected) >= 8:
            break
        if "旅遊業監管局" in item["title"] and any(
            "旅遊業監管局" in one["title"] for one in selected
        ):
            continue
        routine_title = item["title"].startswith("反非法勞工行動")
        if routine_title:
            if routine >= 2:
                continue
            routine += 1
        add(item)

    themes = (
        "e-道",
        "無感",
        "Go香港",
        "工作回顧",
        "護照",
        "簽證",
        "人才",
        "遣返",
        "外傭",
        "聯繫協作",
        "身份證",
        "國安",
        "偽",
        "詐騙",
        "欺騙",
        "智通行",
    )
    for item in items:
        if len(selected) >= 12:
            break
        if item["url"] in seen:
            continue
        if "旅遊業監管局" in item["title"] and any("旅遊業監管局" in one["title"] for one in selected):
            continue
        if any(theme in item["title"] for theme in themes):
            add(item)
    for item in items:
        if "工作回顧" in item["title"] and item["url"] not in seen:
            add(item)
            break
    selected.sort(key=lambda item: item["date"], reverse=True)
    return selected


def press_summary(url: str) -> str:
    html = fetch(url)
    paragraphs = [
        strip_tags(part)
        for part in re.findall(r"<p\b[^>]*>(.*?)</p>", html, flags=re.S)
    ]
    kept = []
    for text in paragraphs:
        if not text or re.fullmatch(r"\d{4}年\d{1,2}月\d{1,2}日", text):
            continue
        if text in {"完", "完稿"} or text.startswith("（"):
            continue
        if len(text) < 24:
            continue
        kept.append(text)
        if len(kept) >= 2:
            break
    return clip(" ".join(kept), 240)


def build_news() -> list[dict]:
    items = select_press(parse_press_list(fetch(PRESS_LIST)))
    built = []
    for item in items:
        try:
            summary = press_summary(item["url"])
        except Exception as exc:  # noqa: BLE001 — keep the title/link if one page fails
            summary = f"未能抽取內文撮要（{exc.__class__.__name__}）。請開啟官方公報。"
        built.append(
            {
                "title": item["title"],
                "date": item["date"],
                "source": "入境事務處新聞公報",
                "summary": summary,
                "why": why_for(item["title"], summary),
                "url": item["url"],
            }
        )
    if not built:
        raise RuntimeError("No ImmD press releases parsed")
    return built


def numbered_blocks(html: str) -> list[dict]:
    """Return numbered paragraphs and any immediately following list items."""
    pattern = re.compile(
        r"<p\b[^>]*>\s*(\d+)\.\s*(.*?)</p>(?:\s*<ol\b[^>]*>(.*?)</ol>)?",
        flags=re.S,
    )
    blocks = []
    for match in pattern.finditer(html):
        lead = strip_tags(match.group(2))
        extras = []
        if match.group(3):
            extras = [
                strip_tags(piece)
                for piece in re.findall(r"<li\b[^>]*>(.*?)</li>", match.group(3), flags=re.S)
            ]
            extras = [piece for piece in extras if piece]
        if lead:
            blocks.append(
                {"number": int(match.group(1)), "lead": lead, "extras": extras, "text": lead}
            )
    return blocks


def short_title(text: str) -> str:
    rules = (
        ("高才通", "高才通續簽要求放寬"),
        ("簽證類別", "新增短期培訓簽證類別"),
        ("智通行", "港珠澳大橋「智通行」先導計劃"),
        ("皇崗口岸", "皇崗口岸「一地兩檢」"),
        ("非法勞工", "全方位打擊非法勞工"),
        ("留港", "大灣區校園畢業生留港／回港就業"),
        ("特邀人士", "擴大「特邀人士入境便利計劃」"),
        ("人才清單", "人才清單與人才入境措施"),
    )
    for key, title in rules:
        if key in text:
            return title
    return clip(text, 36).replace("…", "")


def policy_texts(blocks: list[dict]) -> list[str]:
    texts = []
    strong = ("非法勞工", "免遣返", "智通行", "皇崗口岸", "入境事務處")
    for block in blocks:
        lead = block["lead"]
        extras = block["extras"]
        lead_hit = any(key in lead for key in POLICY_KEYS)
        extra_hits = [extra for extra in extras if any(key in extra for key in POLICY_KEYS)]
        if lead_hit and any(key in lead for key in strong):
            text = lead
            if extras and any(key in lead for key in ("非法勞工", "免遣返")):
                text = lead.rstrip("：:") + "：" + "；".join(extras)
            texts.append(text)
        elif extra_hits:
            texts.extend(extra_hits)
        elif lead_hit:
            texts.append(lead)
    return texts


def policy_and_planning() -> tuple[list[dict], list[dict]]:
    pages = {key: fetch(url) for key, url in PA_CHAPTERS.items()}
    blocks = {key: numbered_blocks(html) for key, html in pages.items()}
    policy = []
    seen_titles = set()
    for key in ("ch3", "ch7"):
        for text in policy_texts(blocks[key]):
            title = short_title(text)
            if title in seen_titles:
                continue
            seen_titles.add(title)
            policy.append(
                {
                    "title": title,
                    "date": "2026-09",
                    "source": "行政長官2026年施政報告",
                    "summary": clip(text, 360),
                    "why": why_for(text),
                    "url": PA_CHAPTERS[key],
                }
            )
    planning = []
    plan_bits = [
        block["lead"]
        for block in blocks["ch1"]
        if block["number"] in {10, 11}
    ]
    if plan_bits:
        planning.append(
            {
                "title": "香港第一個五年規劃，對接國家「十五五」",
                "date": "2026-09",
                "source": "2026年施政報告第一章（香港一五規劃）",
                "summary": clip(" ".join(plan_bits), 420),
                "why": "這是規劃與施政報告的關係，不是整份五年規劃。應考時只接入境處：人才入境、口岸人流、大灣區機制對接。",
                "url": PA_CHAPTERS["ch1"],
            }
        )
    for block in blocks["ch6"]:
        if "十五五" in block["text"] or (
            "大灣區" in block["text"] and "心聯通" in block["text"]
        ):
            planning.append(
                {
                    "title": "「十五五」開局與大灣區人員往來",
                    "date": "2026-09",
                    "source": "2026年施政報告（融入國家發展大局）",
                    "summary": clip(block["text"], 360),
                    "why": "與入境處相關的是人員流動、人才與規則銜接，不是產業段落全文。",
                    "url": PA_CHAPTERS["ch6"],
                }
            )
            break
    return policy, planning


def absolute_immd(href: str) -> str:
    return urljoin("https://www.immd.gov.hk/", href)


def chinese_year(label: str) -> int | None:
    digits = {"零": "0", "〇": "0", "一": "1", "二": "2", "三": "3", "四": "4", "五": "5", "六": "6", "七": "7", "八": "8", "九": "9"}
    match = re.search(r"二([零〇一二三四五六七八九])([零〇一二三四五六七八九])([零〇一二三四五六七八九])年年報", label)
    if not match:
        return None
    return int("2" + "".join(digits[part] for part in match.groups()))


def latest_report_links(html: str) -> dict:
    """Pick the newest annual-report ebook and PDF from the publications page."""
    years = []
    for href, label in re.findall(r'href="([^"]+)"[^>]*>([^<]{0,80})', html, flags=re.S):
        label_text = strip_tags(label)
        year = None
        year_match = re.search(r"a_report_(20\d{2})", href)
        if year_match:
            year = int(year_match.group(1))
        else:
            short = re.search(r"AR(\d{2})", href, flags=re.I)
            if short and "年報" in label_text:
                year = 2000 + int(short.group(1))
        if year is None:
            year = chinese_year(label_text)
        if year is None:
            continue
        years.append((year, href, label_text))
    if not years:
        raise RuntimeError("Could not find an ImmD annual report link")
    newest = max(item[0] for item in years)
    ebook = ""
    pdf = ""
    for year, href, _label in years:
        if year != newest:
            continue
        full = absolute_immd(href)
        if full.lower().endswith(".pdf") or "/pdf/" in full:
            pdf = pdf or full
        elif "a_report_" in full:
            ebook = ebook or full
    if not ebook and not pdf:
        raise RuntimeError("Annual report links were empty")
    return {"year": newest, "ebook": ebook, "pdf": pdf}


def pdf_plaintext(pdf_path: Path) -> str:
    proc = subprocess.run(
        ["pdftotext", "-f", "1", "-l", "8", "-nopgbrk", str(pdf_path), "-"],
        check=True,
        capture_output=True,
        text=True,
    )
    return proc.stdout


def report_bullets(text: str) -> list[str]:
    compact = re.sub(r"\s+", "", text)
    spaced = re.sub(r"\s+", " ", text)
    bullets = []

    def add(evidence: str, sentence: str) -> None:
        if re.search(evidence, compact) or re.search(evidence, spaced, flags=re.I):
            bullets.append(sentence)

    add(r"3\.35億|335million", "2025年全港總出入境人次約3.35億，較2024年升約12%，並打破2019年約3億人次的紀錄。")
    add(r"11歲下調至7歲|from11to7", "e-道合資格年齡由11歲下調至7歲，適用於持智能身份證的香港永久性居民，以及指定電子旅行證件的過境及訪港旅客。")
    add(r"容易飛", "香港國際機場推出「容易飛e-道」：合資格香港居民入境時可以容貌識別核實身份，無須出示實體證件或掃描非觸式e-道二維碼。")
    add(r"十五五", "年報序言指出國家《「十五五」規劃建議》支持香港打造國際高端人才集聚高地；入境處配合各項人才入境政策和電子化簽證申請。")
    add(r"746萬", "全港市民換領身份證計劃完結後，舊款智能身份證於2025年分兩階段失效；約746萬人已換領，換證率約93%。")
    add(r"174個國家", "截至2025年年底，174個國家／地區給予香港特區護照持有人免簽證或落地簽證待遇。")
    add(r"2,?600|2600名|morethan2,600", "2025年遣離超過2,600名免遣返聲請不獲確立人士，較前一年增加約18%。")
    add(r"Skytrax|全球最佳機場出入境", "入境處第五次獲得 Skytrax「全球最佳機場出入境服務大獎」。")
    return bullets[:8]


def obtain_pdf(url: str) -> Path | None:
    cached = os.environ.get("IMMD_AR_PDF")
    if cached and Path(cached).is_file():
        return Path(cached)
    if not url or shutil_which("pdftotext") is None:
        return None
    data = fetch_bytes(url)
    handle = tempfile.NamedTemporaryFile(prefix="immd-ar-", suffix=".pdf", delete=False)
    handle.write(data)
    handle.close()
    return Path(handle.name)


def shutil_which(cmd: str) -> str | None:
    from shutil import which

    return which(cmd)


def build_publications(old: dict | None) -> list[dict]:
    links = latest_report_links(fetch(PUBS))
    year = links["year"]
    old_items = []
    if old:
        for section in old.get("sections") or []:
            if section.get("id") == "publications":
                old_items = section.get("items") or []
    reused = next(
        (
            item
            for item in old_items
            if item.get("reportYear") == year
            and item.get("bulletVersion") == BULLET_VERSION
            and item.get("bullets")
        ),
        None,
    )
    bullets = list(reused["bullets"]) if reused else []
    if not bullets and links.get("pdf") and shutil_which("pdftotext"):
        pdf_path = obtain_pdf(links["pdf"])
        if pdf_path:
            try:
                bullets = report_bullets(pdf_plaintext(pdf_path))
            finally:
                if not os.environ.get("IMMD_AR_PDF"):
                    pdf_path.unlink(missing_ok=True)
    if bullets:
        summary = "以下只撮寫年報序言中與出入境、人才、證件及執法有關的重點，不是年報全文。"
    else:
        summary = "最新年報已上載。請開啟電子書或 PDF 查閱序言；本頁不轉載全文。"
    item = {
        "title": f"入境事務處{year}年年報",
        "date": str(year),
        "source": "入境事務處刊物",
        "summary": summary,
        "why": "年報序言適合準備「部門角色」：便利旅客、匯聚人才、防偽證件、打擊黑工、守護南大門。法例和數字以年報及電子法例為準。",
        "url": links.get("ebook") or links.get("pdf"),
        "reportYear": year,
        "bulletVersion": BULLET_VERSION,
        "bullets": bullets,
        "links": [],
    }
    if links.get("ebook"):
        item["links"].append({"label": "電子書", "url": links["ebook"]})
    if links.get("pdf"):
        item["links"].append({"label": "PDF", "url": links["pdf"]})
    review = {
        "title": "刊物目錄（年報、新聞公報）",
        "date": str(year),
        "source": "入境事務處",
        "summary": "年報以外的部門刊物和新聞公報索引。新一年年報上載後，重新執行更新腳本就會改指向最新年份。",
        "why": "面試若被問「你如何跟進部門工作」，應答會看年報、工作回顧和新聞公報，而不是只靠補習筆記。",
        "url": PUBS,
    }
    return [item, review]


def same_content(old: dict | None, sections: list[dict]) -> bool:
    if not old:
        return False
    return old.get("sections") == sections


def build(old: dict | None) -> dict:
    news = build_news()
    policy, planning = policy_and_planning()
    publications = build_publications(old)
    if not policy:
        raise RuntimeError("No Policy Address excerpts matched")
    if not planning:
        raise RuntimeError("No five-year-plan excerpts matched")
    sections = [
        {
            "id": "news",
            "title": "最新新聞",
            "intro": "摘自入境事務處新聞公報（與政府新聞處發布同步）。同類反非法勞工行動只保留最近數則，並優先收錄通關、人才、證件、遣返等不同主題。",
            "items": news,
        },
        {
            "id": "policy",
            "title": "施政報告相關",
            "intro": "只收錄2026年《施政報告》中與入境、簽證、人才續簽、口岸通關、非法勞工或免遣返直接有關的段落。",
            "items": policy,
        },
        {
            "id": "planning",
            "title": "規劃／五年計劃相關",
            "intro": "國家「十五五」與香港第一個五年規劃的入境處相關摘錄，不是規劃全文。",
            "items": planning,
        },
        {
            "id": "publications",
            "title": "入境處年報／刊物",
            "intro": "最新年報連結，加上序言裡與出入境、人才、證件和執法有關的短撮要。",
            "items": publications,
        },
    ]
    updated = (old or {}).get("updated")
    if not same_content(old, sections):
        updated = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    return {
        "updated": updated,
        "disclaimer": DISCLAIMER,
        "sources": [
            PRESS_LIST,
            "https://www.info.gov.hk/",
            PA_BASE,
            PUBS,
        ],
        "sections": sections,
    }


def main() -> None:
    old = None
    if OUT.exists():
        old = json.loads(OUT.read_text(encoding="utf-8"))
    payload = build(old)
    if old == payload:
        print("unchanged", OUT)
        return
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    counts = {section["id"]: len(section["items"]) for section in payload["sections"]}
    print("wrote", OUT, counts, "updated", payload["updated"])


if __name__ == "__main__":
    main()
