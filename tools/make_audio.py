#!/usr/bin/env python3
"""
사이트의 네덜란드어 발음 파일을 만든다 (macOS 전용).

1) Chrome으로 tools/collect.html 을 열어 발음 문장 목록(tools/audio-texts.tsv)을 모은다.
2) macOS 'say' 의 Ellen(벨기에 네덜란드어) 음성으로 audio/<key>.m4a 를 만든다.
3) js/audio-manifest.js 에 있는 파일 목록을 쓴다.

레슨이나 단어를 추가한 뒤 다시 실행하면, 새 문장만 녹음한다.
  python3 tools/make_audio.py
"""
import html
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
VOICE = "Ellen"   # nl_BE. 네덜란드식이 좋으면 "Xander"
RATE = "140"      # 말 속도 (A1용으로 천천히)


def fnv1a(text):
    h = 0x811C9DC5
    for b in text.encode("utf-8"):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    return "%08x" % h


def spoken(text):
    """화면 글자 → 읽을 문장 (기호를 읽지 않게)."""
    t = text.replace("→", ", ").replace(" / ", ", ").replace("+", " ")
    t = re.sub(r"(\w)/(\w)", r"\1 of \2", t)   # heb/ben → heb of ben
    t = t.replace("...", ", ")
    return re.sub(r"\s+", " ", t).strip(" ,")


def collect():
    url = "file://" + os.path.join(ROOT, "tools", "collect.html")
    out = subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--virtual-time-budget=20000",
                          "--dump-dom", url], capture_output=True, text=True).stdout
    m = re.search(r'<pre id="out">BEGIN\n(.*?)\nEND</pre>', out, re.S)
    if not m:
        sys.exit("문장 목록을 모으지 못했어요.")
    rows = []
    for line in m.group(1).split("\n"):
        if re.match(r"^[0-9a-f]{8}\t", line):
            key, text = line.split("\t", 1)
            rows.append((key, html.unescape(text)))
    return rows


def main():
    rows = collect()
    bad = [(k, t) for k, t in rows if fnv1a(t) != k]
    if bad:
        sys.exit("키 불일치: %r" % bad[:3])
    with open(os.path.join(ROOT, "tools", "audio-texts.tsv"), "w") as f:
        f.writelines("%s\t%s\n" % r for r in rows)

    adir = os.path.join(ROOT, "audio")
    os.makedirs(adir, exist_ok=True)
    made = 0
    for i, (key, text) in enumerate(rows):
        path = os.path.join(adir, key + ".m4a")
        if os.path.exists(path):
            continue
        subprocess.run(["say", "-v", VOICE, "-r", RATE, "-o", path,
                        "--file-format=m4af", "--data-format=aac", "--bit-rate=32000", spoken(text)], check=True)
        made += 1
        if made % 100 == 0:
            print("  %d개 녹음..." % made, flush=True)

    keys = sorted(k for k, _ in rows if os.path.exists(os.path.join(adir, k + ".m4a")))
    with open(os.path.join(ROOT, "js", "audio-manifest.js"), "w") as f:
        f.write("/* tools/make_audio.py 가 만든 파일. 직접 고치지 마세요. */\n")
        f.write("window.AUDIO_FILES = {%s};\n" % ",".join('"%s":1' % k for k in keys))
    print("문장 %d개 · 새로 녹음 %d개 · 목록 %d개" % (len(rows), made, len(keys)))


if __name__ == "__main__":
    main()
