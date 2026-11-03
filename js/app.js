/* =========================================================
   Wafel Navigator — app (hash router + quiz engine + drills)
   ========================================================= */
(function () {
  "use strict";

  const HOST = "http://www.korean-waffle.be/nl/";
  const VERBS = window.VERBS || [];
  const NOUNS = window.NOUNS || [];
  const GROUPS = window.VERB_GROUPS || {};
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const view = () => $("#page");

  /* ---------------- utilities ---------------- */
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const fmt = (s) => esc(s).replace(/\*([^*]+)\*/g, "<b>$1</b>");
  const strip = (s) => String(s).replace(/\*/g, "");

  function norm(s) {
    return String(s == null ? "" : s)
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[’‘`´]/g, "'").replace(/[“”"]/g, "")
      .toLowerCase().replace(/\s+/g, " ").trim()
      .replace(/[.!?,;:]+$/g, "").trim();
  }
  const sameExact = (a, b) => String(a).trim().replace(/\s+/g, " ").replace(/[.!?]+$/, "").toLowerCase()
    === String(b).trim().replace(/\s+/g, " ").replace(/[.!?]+$/, "").toLowerCase();

  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const pick = (a) => a[Math.floor(Math.random() * a.length)];

  const store = {
    get(k, d) { try { const v = localStorage.getItem("wafel:" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) {
      try { localStorage.setItem("wafel:" + k, JSON.stringify(v)); } catch (e) { /* ignore */ }
      if (k !== "visits") window.dispatchEvent(new CustomEvent("wafel:store", { detail: k }));
    }
  };

  const sprite = (name, cls, alt) => `<img data-sprite="${name}" class="px ${cls || ""}" alt="${esc(alt || "")}">`;

  /* ---------------- lessons (base + A1 rewrites) ---------------- */
  function lessonsList() {
    const base = window.GRAMMAR || [];
    const extra = [].concat(window.GRAMMAR_A || [], window.GRAMMAR_B || []);
    return base.map((l) => extra.find((x) => x.id === l.id) || l);
  }

  /* ---------------- pronunciation (Web Speech API) ---------------- */
  let nlVoice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices();
    nlVoice = vs.find((v) => /nl[-_]BE/i.test(v.lang)) || vs.find((v) => /^nl/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  // 녹음 파일 키: 정리한 문장의 UTF-8 FNV-1a 해시 (tools/make_audio.py 와 동일해야 함)
  const cleanSay = (text) => strip(text).replace(/___/g, "...").replace(/\s+/g, " ").trim();
  function audioKey(text) {
    const bytes = new TextEncoder().encode(text);
    let h = 0x811c9dc5;
    for (const b of bytes) { h ^= b; h = Math.imul(h, 0x01000193) >>> 0; }
    return h.toString(16).padStart(8, "0");
  }
  let player = null;
  function speak(text) {
    const t = cleanSay(text);
    const key = audioKey(t);
    if (player) { player.pause(); player = null; }
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    if (window.AUDIO_FILES && window.AUDIO_FILES[key]) {
      player = new Audio("audio/" + key + ".m4a");
      player.play().catch(() => speakTTS(t));
      return;
    }
    speakTTS(t);
  }
  // 녹음이 없을 때만: 브라우저의 네덜란드어 음성 (없으면 영어로 읽지 않고 안내)
  function speakTTS(t) {
    if (!("speechSynthesis" in window)) { audioHelp(); return; }
    if (!nlVoice) pickVoice();
    if (!nlVoice) { audioHelp(); return; }
    const u = new SpeechSynthesisUtterance(t);
    u.voice = nlVoice; u.lang = nlVoice.lang; u.rate = 0.8;
    speechSynthesis.speak(u);
  }
  function audioHelp() {
    alert("이 문장은 녹음 파일이 없고, 브라우저에서 네덜란드어 음성도 찾지 못했어요.\n\n" +
      "Chrome이나 Safari로 열어 보세요. 그래도 안 되면 Mac의 시스템 설정 → 손쉬운 사용 → 읽기 및 말하기 → 시스템 음성에서 네덜란드어(Ellen 또는 Xander)를 선택해 주세요.");
  }
  const say = (text) => `<button class="say" type="button" data-say="${esc(strip(text))}" title="발음 듣기" aria-label="발음 듣기">${sprite("speaker")}</button>`;
  const nlSay = (text) => `<span class="nl">${fmt(text)}</span> ${say(text)}`;

  /* ---------------- visuals (pixel diagrams) ---------------- */
  function visual(v) {
    if (!v || !v.type) return "";
    const cap = v.caption ? `<div class="vis-cap">${v.caption}</div>` : "";
    switch (v.type) {
      case "blocks":
        return `<div class="vis vis-blocks">${(v.rows || []).map((r) => `
          <div class="brow-wrap"><div class="brow">${r.words.map((w, i) => `
            <span class="chip ${(r.hl || []).includes(i) ? "hl" : ""} ${(r.hl2 || []).includes(i) ? "hl2" : ""}">
              ${r.num ? `<span class="slot">${i + 1}</span>` : ""}${esc(w)}</span>`).join("")}
            ${say(r.words.join(" "))}</div>
            ${r.ko ? `<div class="brow-ko">${esc(r.ko)}</div>` : ""}</div>`).join("")}
          <div class="legend-row small"><span class="chip hl mini">주황</span> 주인공 단어(보통 동사) &nbsp; <span class="chip hl2 mini">파랑</span> 함께 눈여겨볼 말</div>
          ${cap}</div>`;
      case "timeline": {
        const col = (pos) => (v.marks || []).filter((m) => m.pos === pos).map((m) => `
          <div class="tl-card">${nlSay(m.nl)}<div class="small">${esc(m.ko || "")}</div></div>`).join("");
        return `<div class="vis vis-timeline">
          <div class="tl-grid">
            <div class="tl-col"><div class="tl-label">과거 ◀</div><div class="tl-bar past"></div>${col("past")}</div>
            <div class="tl-col"><div class="tl-label">지금 ${sprite("waffleFace", "tl-me")}</div><div class="tl-bar now"></div>${col("now")}</div>
            <div class="tl-col"><div class="tl-label">▶ 미래</div><div class="tl-bar future"></div>${col("future")}</div>
          </div>${cap}</div>`;
      }
      case "formula":
        return `<div class="vis vis-formula"><div class="frow">${(v.parts || []).map((p) =>
          /^[+=→]$/.test(p) ? `<span class="op">${esc(p)}</span>` : `<span class="chip">${esc(p)}</span>`).join("")}
          ${v.result ? `<span class="op">=</span><span class="chip hl big">${esc(v.result)}</span> ${say(v.result)}` : ""}</div>${cap}</div>`;
      case "twobox": {
        const box = (b, cls) => `<div class="tbox ${cls}"><div class="tbox-title">${esc(b.title)}</div>
          ${b.note ? `<div class="small">${esc(b.note)}</div>` : ""}
          <ul>${(b.items || []).map((it) => `<li>${it[2] && Pixel.has(it[2]) ? sprite(it[2], "pic-s") : ""}
            <span class="nl">${esc(it[0])}</span> ${say(it[0])} <span class="small muted">${esc(it[1] || "")}</span></li>`).join("")}</ul></div>`;
        return `<div class="vis vis-twobox">${box(v.left || {}, "left")}${box(v.right || {}, "right")}${cap}</div>`;
      }
      case "scale": {
        const sizes = (v.items || []).map((_, i) => 40 + i * 28);
        if (v.grow === false) sizes.reverse();
        const pic = v.pic && Pixel.has(v.pic) ? v.pic : "waffle";
        return `<div class="vis vis-scale"><div class="srow">${(v.items || []).map((it, i) => `
          <div class="scell"><img data-sprite="${pic}" class="px" alt="" style="width:${sizes[i]}px">
            <div>${nlSay(it[0])}</div><div class="small">${esc(it[1] || "")}</div></div>`).join("")}</div>${cap}</div>`;
      }
      case "neardist": {
        const pic = v.pic && Pixel.has(v.pic) ? v.pic : "waffle";
        return `<div class="vis vis-near">
          <div class="nd near">${sprite("jongen", "nd-me")} <span class="nd-arrow">☞</span> ${sprite(pic, "nd-big")}
            <div>${nlSay(v.near[0])}</div><div class="small">${esc(v.near[1] || "")} (가까이)</div></div>
          <div class="nd far">${sprite("jongen", "nd-me")} <span class="nd-arrow">☞ · · · · ·</span> ${sprite(pic, "nd-small")}
            <div>${nlSay(v.far[0])}</div><div class="small">${esc(v.far[1] || "")} (멀리)</div></div>${cap}</div>`;
      }
      case "pictures":
        return `<div class="vis vis-pics">${(v.items || []).map((it) => `
          <div class="pcard">${Pixel.has(it[0]) ? sprite(it[0], "pic") : ""}<div>${nlSay(it[1])}</div><div class="small">${esc(it[2] || "")}</div></div>`).join("")}${cap}</div>`;
      case "softketchup":
        return `<div class="vis vis-soft"><div class="frow">${"softketchup".split("").map((c) =>
          `<span class="chip ${"aeiou".includes(c) ? "" : "hl"}">${c}</span>`).join("")}</div>
          <div class="vis-cap">${v.caption || "동사원형에서 <b>-en 바로 앞 글자</b>가 이 단어 안에 있으면 <b>-t</b>, 없으면 <b>-d</b>를 붙여요."}</div></div>`;
      default:
        return "";
    }
  }

  /* ---------------- wrong-answer notebook ---------------- */
  const Notebook = {
    all() { return store.get("fouten", []); },
    add(item, src) {
      const list = this.all().filter((x) => x.item.q !== item.q);
      list.unshift({ item, src, t: Date.now() });
      store.set("fouten", list.slice(0, 300));
      updateBadge();
    },
    remove(q) { store.set("fouten", this.all().filter((x) => x.item.q !== q)); updateBadge(); },
    clear() { store.set("fouten", []); updateBadge(); }
  };
  function updateBadge() {
    const n = Notebook.all().length;
    const el = $("#fouten-count");
    if (el) el.textContent = n ? `(${n})` : "";
  }

  /* =======================================================
     QUIZ ENGINE
     item = { kind: "mc"|"fill", q (html), opts?, a (index | [answers]), ex?, hint? }
     ======================================================= */
  function checkItem(item, val) {
    if (item.kind === "mc") return Number(val) === Number(item.a);
    const answers = Array.isArray(item.a) ? item.a : [item.a];
    const v = norm(val);
    if (!v) return false;
    return answers.some((a) => norm(a) === v);
  }
  function displayAnswer(item) {
    if (item.kind === "mc") return item.opts[item.a];
    return (Array.isArray(item.a) ? item.a : [item.a]).join(" / ");
  }

  function Quiz(el, items, cfg) {
    cfg = cfg || {};
    let current = items.slice();
    let graded = false;

    function render() {
      graded = false;
      el.innerHTML = `
        <div class="panel quiz">
          ${current.map((it, i) => qHtml(it, i)).join("")}
        </div>
        <div class="actions">
          <button class="btn big primary" data-act="grade">${sprite("check")} 채점하기</button>
          ${cfg.regen ? `<button class="btn big" data-act="regen">${sprite("dice")} 새 문제</button>` : ""}
        </div>
        <div class="result"></div>`;
      Pixel.hydrate(el);
      $$(".btn img", el).forEach((im) => { im.style.width = "16px"; im.style.verticalAlign = "-2px"; });
      const inputs = $$("input[type=text]", el);
      inputs.forEach((inp, idx) => inp.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;
        e.preventDefault();
        if (inputs[idx + 1]) inputs[idx + 1].focus(); else grade();
      }));
      $('[data-act="grade"]', el).onclick = grade;
      if (cfg.regen) $('[data-act="regen"]', el).onclick = () => { current = cfg.regen(); render(); };
    }

    function qHtml(it, i) {
      const name = "q" + Math.random().toString(36).slice(2, 8) + i;
      let body;
      if (it.kind === "mc") {
        body = `<div class="opts">${it.opts.map((o, j) =>
          `<label><input type="radio" name="${name}" value="${j}"> ${esc(o)}</label>`).join("")}</div>`;
      } else {
        body = `<div class="fill"><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false"
          placeholder="${esc(it.hint || "답을 입력하세요")}"></div>`;
      }
      return `<div class="q" data-i="${i}"><div class="prompt"><span class="qnum">${i + 1}.</span>${it.q}</div>${body}<div class="verdict-slot"></div></div>`;
    }

    function grade() {
      if (graded) return;
      graded = true;
      let ok = 0;
      const wrong = [];
      $$(".q", el).forEach((qEl) => {
        const it = current[Number(qEl.dataset.i)];
        let val = "", correct;
        if (it.kind === "mc") {
          const r = $("input:checked", qEl);
          val = r ? r.value : "";
          correct = val !== "" && checkItem(it, val);
          $$("label", qEl).forEach((lab, j) => {
            if (j === Number(it.a)) lab.classList.add("is-answer");
            else if (String(j) === val) lab.classList.add("is-picked-wrong");
          });
          $$("input", qEl).forEach((x) => (x.disabled = true));
        } else {
          const inp = $("input", qEl);
          val = inp.value;
          correct = checkItem(it, val);
          inp.disabled = true;
        }
        qEl.classList.add(correct ? "correct" : "wrong");
        let spellNote = "";
        if (correct && it.kind === "fill") {
          const answers = Array.isArray(it.a) ? it.a : [it.a];
          if (!answers.some((a) => sameExact(a, val))) {
            const best = answers.find((a) => norm(a) === norm(val));
            spellNote = ` <span class="muted">(정확한 철자: <span class="nl">${esc(best)}</span>)</span>`;
          }
        }
        $(".verdict-slot", qEl).innerHTML = `<div class="verdict">${sprite(correct ? "check" : "cross")}
          <div>${correct ? "정답!" + spellNote : `정답: <span class="ans nl">${esc(displayAnswer(it))}</span>`}
          ${it.ex ? `<span class="ex">${it.ex}</span>` : ""}</div></div>`;
        if (correct) ok++; else { wrong.push(it); Notebook.add(it, cfg.src || "퀴즈"); }
      });
      Pixel.hydrate(el);
      $('[data-act="grade"]', el).disabled = true;

      const total = current.length;
      const ratio = ok / total;
      const stars = Math.round(ratio * 5);
      const msg = ratio === 1 ? "Perfect! 와플 한 판 다 구웠어요."
        : ratio >= 0.8 ? "Heel goed! 거의 다 왔어요."
        : ratio >= 0.5 ? "Goed bezig! 틀린 문제만 한 번 더 볼까요?"
        : "Geen paniek! 해설 읽고 다시 해봐요.";
      $(".result", el).innerHTML = `
        <div class="scorebox">
          <span class="big">${ok} / ${total}</span>
          <span>${Array.from({ length: 5 }, (_, i) => sprite(i < stars ? "star" : "starEmpty")).join("")}</span>
          <span class="msg">${msg}</span>
        </div>
        <div class="actions">
          ${wrong.length ? `<button class="btn" data-act="retry-wrong">틀린 문제만 다시 풀기 (${wrong.length})</button>` : ""}
          <button class="btn" data-act="retry-all">처음부터 다시</button>
          ${wrong.length ? `<a class="btn" href="#fouten">오답노트 보기</a>` : ""}
        </div>`;
      Pixel.hydrate(el);
      const rw = $('[data-act="retry-wrong"]', el);
      if (rw) rw.onclick = () => { current = wrong; render(); el.scrollIntoView({ behavior: "smooth" }); };
      $('[data-act="retry-all"]', el).onclick = () => { current = cfg.regen ? cfg.regen() : items.slice(); render(); el.scrollIntoView({ behavior: "smooth" }); };
      if (cfg.onScore) cfg.onScore(ok, total, current === items);
      $(".result", el).scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    render();
  }

  /* =======================================================
     PAGES
     ======================================================= */
  const pages = {};

  /* ---------------- HOME ---------------- */
  pages.home = function () {
    const lessons = window.GRAMMAR ? lessonsList() : [];
    const bests = store.get("best", {});
    const done = (window.GRAMMAR ? lessonsList() : []).filter((l) => Object.keys(bests).some((k) => k === String(l.id) || k.indexOf(l.id + "-") === 0)).length;
    const visits = store.get("visits", 0);
    const digits = String(visits).padStart(6, "0").split("");
    const today = new Date();
    const dateStr = today.toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" });
    view().innerHTML = `
      <div class="hero">
        <div>
          <h1 class="hero-title">Wafel<br>Nederlands</h1>
          <div class="hero-sub">와플과 함께 배우는 <span class="nl">네덜란드어</span></div>
          <div class="date-line">${esc(dateStr)} · A1–A2 · 한국어로 배워요</div>
        </div>
        <div class="hero-art">${sprite("waffleFace", "", "와플 마스코트")}</div>
      </div>

      <div class="hotnews">
        <div class="label">Hot News</div>
        <div class="marquee"><span>
          ★ Perfectum 동사 ${VERBS.length}개 수록! &nbsp;&nbsp; ★ de/het 연습기 오픈 &nbsp;&nbsp;
          ★ 시간여행 시제 변환기: 현재 → 과거 → 완료 → 미래 &nbsp;&nbsp; ★ 문법 ${lessons.length || 12}개 레슨 + 채점 기능 &nbsp;&nbsp;
          ★ NEW! 실생활 표현: 학교 · 마트 장보기 &nbsp;&nbsp; ★ NEW! 로그인하면 학습 기록 저장 &nbsp;&nbsp; ★ 단어 트레이너로 동사 전부 정복하기 &nbsp;&nbsp; ★ 레슨마다 문제 30개 &nbsp;&nbsp; ★ Veel succes! 화이팅!
        </span></div>
      </div>

      <div class="triad">
        <a href="#lessen">${sprite("book")}<span class="big-word">Leren.</span><span class="tag">문법 12개 레슨, 규칙과 예문</span></a>
        <a href="#woorden">${sprite("list")}<span class="big-word">Woorden.</span><span class="tag">Perfectum 동사 리스트 ${VERBS.length}개</span></a>
        <a href="#oefenen">${sprite("pencil")}<span class="big-word">Oefenen!</span><span class="tag">연습문제 풀고 채점하기</span></a>
      </div>

      <div class="storebar">
        <div class="brand">De Wafel<br>Winkel</div>
        <a href="#dehet">de / het</a>
        <a href="#tijdmachine">시제 변환기</a>
        <a href="#trainer">단어 트레이너</a>
        <a href="#fouten">오답노트 <span id="fouten-count"></span></a>
        <div class="logo">${sprite("flagBE")}</div>
        <a href="#les/4">단순과거</a>
        <a href="#les/5">현재완료</a>
        <a href="#les/6">미래</a>
        <a href="#leven/school">학교 표현</a>
        <a href="#leven/winkel">마트 표현</a>
        <a href="#over">About</a>
      </div>

      <div class="findrow">
        <label for="find">Zoeken:</label>
        <input id="find" type="text" placeholder="예: gaan, 먹다, to eat">
        <button class="btn" id="find-btn">Zoek</button>
        <a class="btn" href="#woorden">Woordenlijst</a>
      </div>

      <div class="groupbox"><span class="legend">처음 오셨나요? 이렇게 공부해요</span>
        <div class="guide">
          <div class="gstep">${sprite("book")}<b>1. 레슨 읽기</b><span class="small">와플 선생님이 그림과 함께 한 단계씩 설명해요</span></div>
          <div class="gstep">${sprite("speaker")}<b>2. 듣고 따라 하기</b><span class="small">스피커 버튼을 누르면 발음이 나와요</span></div>
          <div class="gstep">${sprite("pencil")}<b>3. 문제 풀고 채점</b><span class="small">해설로 "왜 틀렸는지" 확인해요</span></div>
          <div class="gstep">${sprite("floppy")}<b>4. 오답 복습</b><span class="small">틀린 문제는 오답노트에 저장돼요</span></div>
        </div>
        <p class="small muted" style="margin:8px 0 0">처음이라면 <a href="#les/1">1. 명사와 관사</a>부터 순서대로 가는 걸 추천해요. 하루 한 레슨이면 충분해요!</p>
      </div>

      <div class="groupbox"><span class="legend">나의 진도</span>
        <p>완료한 레슨: <b>${done}</b> / ${lessons.length || 12} &nbsp;·&nbsp; 오답노트: <b>${Notebook.all().length}</b>문제</p>
        <p class="small muted">추천 순서: 규칙 읽기 → 객관식 5문제 → 빈칸 5문제 → 해설 확인 → 틀린 문제 다시 풀기</p>
      </div>

      <div class="construction">${sprite("warn")}
        <div><span class="blink">UNDER CONSTRUCTION</span> — 새 레슨과 단어가 계속 추가될 예정이에요.</div></div>

      <div class="center small">당신은 <span class="counter">${digits.map((d) => `<span>${d}</span>`).join("")}</span> 번째 방문자입니다!</div>

      <div class="footer-links">
        <a href="#lessen">Lessen</a> | <a href="#woorden">Woorden</a> | <a href="#oefenen">Oefenen</a> |
        <a href="#dehet">de/het</a> | <a href="#tijdmachine">Tijdmachine</a> | <a href="#fouten">Foutenboek</a> | <a href="#over">Over</a>
      </div>
      <div class="best-viewed">Best viewed with Wafel Navigator 1.0 at 800×600 · Made with ♥ in België</div>`;
    Pixel.hydrate(view());
    updateBadge();
    const go = () => { const v = $("#find").value.trim(); location.hash = "#woorden" + (v ? "?q=" + encodeURIComponent(v) : ""); };
    $("#find-btn").onclick = go;
    $("#find").addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  };

  /* ---------------- LESSONS LIST ---------------- */
  pages.lessen = function () {
    const lessons = window.GRAMMAR ? lessonsList() : [];
    const bests = store.get("best", {});
    view().innerHTML = `
      ${head("book", "Lessen", "네덜란드어 문법 12개 카테고리 · A1–A2")}
      ${lessons.length ? "" : `<div class="construction">${sprite("warn")}<div>레슨 데이터(js/data-grammar.js)를 불러오지 못했어요.</div></div>`}
      <ul class="lesson-list">
        ${lessons.map((l) => {
          const nSets = Math.max(1, Math.ceil(Math.max((l.mc || []).length, (l.fill || []).length) / 5));
          const done = Array.from({ length: nSets }, (_, k) => bests[l.id + "-" + (k + 1)] || (k === 0 && bests[l.id]));
          const b = done.some(Boolean);
          return `<li><span class="bullet">${l.id}</span>
            <div><a href="#les/${l.id}">${esc(l.ko)}</a><span class="nl">${esc(l.nl)}</span>${l.easy ? `<span class="easy">${l.easy}</span>` : ""}</div>
            <span class="score">${b ? done.map((d) => sprite(d ? "star" : "starEmpty")).join("") + ` 세트 ${done.filter(Boolean).length}/${nSets}` : `<span class="muted">미완료 · ${nSets}세트</span>`}</span></li>`;
        }).join("")}
      </ul>
      <hr>
      <p class="small muted">팁: de/het는 시제가 아니라 명사의 관사예요. 현재완료(Perfectum)와 단순과거(Imperfectum)는 따로 연습해요.</p>`;
    Pixel.hydrate(view());
    $$(".lesson-list .score img").forEach((im) => { im.style.width = "14px"; im.style.verticalAlign = "-2px"; });
  };

  /* ---------------- ONE LESSON ---------------- */
  pages.les = function (arg) {
    const all = lessonsList();
    const id = Number(arg);
    const l = all.find((x) => x.id === id);
    if (!l) { pages.notfound(); return; }
    const prev = all.find((x) => x.id === id - 1), next = all.find((x) => x.id === id + 1);
    const MC = (l.mc || []).map((m) => Object.assign({ kind: "mc" }, m));
    const FI = (l.fill || []).map((f) => Object.assign({ kind: "fill" }, f));
    const nSets = Math.max(1, Math.ceil(Math.max(MC.length, FI.length) / 5));
    const setItems = (k) => [].concat(MC.slice(k * 5, k * 5 + 5), FI.slice(k * 5, k * 5 + 5));
    const randomItems = () => [].concat(shuffle(MC).slice(0, 5), shuffle(FI).slice(0, 5));
    const drillNames = { "#dehet": "de/het 연습기", "#tijdmachine": "시제 변환기", "#perfectum": "Perfectum 퀴즈" };
    const icon = l.emoji && Pixel.has(l.emoji) ? l.emoji : "book";
    const steps = l.steps || [];
    view().innerHTML = `
      ${head(icon, `${l.id}. ${l.ko}`, l.nl)}

      <div class="mascot">
        ${sprite("waffleFace", "mascot-img", "와플 선생님")}
        <div class="bubble">
          <div class="bubble-name">와플 선생님</div>
          <div class="bubble-text">${l.easy || l.intro || ""}</div>
          ${l.why ? `<div class="small muted" style="margin-top:6px">${l.why}</div>` : ""}
        </div>
      </div>

      ${steps.length ? `<div class="toc small">이 레슨의 순서: ${steps.map((s, i) => `<a href="#" data-jump="step${i}">${i + 1}단계</a>`).join(" → ")} → <a href="#" data-jump="quiz">문제 풀기</a></div>` : ""}

      ${(l.terms || []).length ? `<div class="groupbox"><span class="legend">${sprite("book", "ico-s")} 먼저 알아둘 말</span>
        <dl class="terms">${l.terms.map((t) => `<dt>${esc(t[0])}</dt><dd>${t[1]}</dd>`).join("")}</dl></div>` : ""}

      ${steps.map((s, i) => `
        <section class="step" id="step${i}">
          <div class="step-head"><span class="step-num">${i + 1}</span><h2>${esc(s.title.replace(/^\d+단계\.\s*/, ""))}</h2></div>
          <div class="step-body">${s.body || ""}</div>
          ${visual(s.visual)}
          ${(s.ex || []).length ? `<ul class="ex-list">${s.ex.map((e) => `<li>${nlSay(e[0])}<span class="ex-ko">${esc(e[1] || "")}</span></li>`).join("")}</ul>` : ""}
        </section>`).join("")}

      ${!steps.length && l.intro ? `<p>${l.intro}</p>` : ""}

      ${(l.mistakes || []).length ? `<div class="construction warnbox">${sprite("warn")}<div><b>이것만 조심!</b>
        <ul class="rule-list">${l.mistakes.map((m) => `<li>${m}</li>`).join("")}</ul></div></div>` : ""}

      <div class="groupbox"><span class="legend">${sprite("floppy", "ico-s")} 한눈에 정리</span>
        <ul class="rule-list">${(l.rules || []).map((r) => `<li>${r}</li>`).join("")}</ul>
        ${l.table ? `<div class="table-wrap"><table class="retro" style="width:auto;min-width:260px">
          <tr>${l.table.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr>
          ${l.table.rows.map((r) => `<tr>${r.map((c, i) => `<td class="${i ? "nl" : ""}">${esc(c)}</td>`).join("")}</tr>`).join("")}
        </table></div>` : ""}
      </div>

      <div class="groupbox"><span class="legend">${sprite("speaker", "ico-s")} 예문 듣고 따라 하기</span>
        <ul class="ex-list">${(l.examples || []).map((e) => `<li>${nlSay(e[0])}<span class="ex-ko">${esc(e[1])}</span></li>`).join("")}</ul>
        <p class="small muted" style="margin:6px 0 0">스피커 버튼을 누르면 네덜란드어 발음이 나와요. 소리 내서 두 번씩 따라 해 보세요.</p>
      </div>

      ${l.tip ? `<div class="construction">${sprite("star")}<div><b>외우기 팁</b><br>${l.tip}</div></div>` : ""}
      ${l.drill ? `<p>${sprite("pencil", "ico-s")} 더 연습하고 싶다면 → <a href="${l.drill}">${drillNames[l.drill] || "연습기"}</a></p>` : ""}

      <h2 id="quiz" style="margin-top:22px">${sprite("pencil", "ico")} 문제 풀기 <span class="small muted">전체 ${MC.length + FI.length}문제 · ${nSets}세트</span></h2>
      <div class="set-tabs">${Array.from({ length: nSets }, (_, k) => `<button class="btn" data-set="${k}">세트 ${k + 1}${k === 0 ? " (기초)" : ""}</button>`).join("")}
        <button class="btn" data-set="r">${sprite("dice", "ico-s")} 랜덤 10문제</button></div>
      <p class="small muted">다 풀고 아래 <b>채점하기</b>를 누르세요. 틀린 문제는 해설을 읽고 "틀린 문제만 다시 풀기"로 한 번 더! 빈칸은 대문자·마침표·ë 같은 점은 신경 쓰지 않아도 돼요.</p>
      <div id="quizbox"></div>
      <hr>
      <div class="actions">
        ${prev ? `<a class="btn" href="#les/${prev.id}">◀ ${esc(prev.ko)}</a>` : ""}
        <a class="btn" href="#lessen">목차</a>
        ${next ? `<a class="btn" href="#les/${next.id}">${esc(next.ko)} ▶</a>` : ""}
      </div>`;
    Pixel.hydrate(view());
    $$("[data-jump]").forEach((a) => (a.onclick = (e) => { e.preventDefault(); const t = document.getElementById(a.dataset.jump); if (t) t.scrollIntoView({ behavior: "smooth" }); }));
    const startSet = (k) => {
      $$("[data-set]").forEach((b) => b.classList.toggle("pressed", b.dataset.set === String(k)));
      const items = k === "r" ? randomItems() : setItems(k);
      Quiz($("#quizbox"), items, {
        src: `레슨 ${l.id}`,
        regen: k === "r" ? randomItems : null,
        onScore(ok, total, full) {
          if (!full || k === "r") return;
          const key = l.id + "-" + (k + 1);
          const bests = store.get("best", {});
          if (!bests[key] || bests[key].ok < ok) { bests[key] = { ok, total }; store.set("best", bests); }
        }
      });
    };
    $$("[data-set]").forEach((b) => (b.onclick = () => startSet(b.dataset.set === "r" ? "r" : Number(b.dataset.set))));
    startSet(0);
  };
  /* ---------------- PRACTICE HUB ---------------- */
  pages.oefenen = function () {
    view().innerHTML = `
      ${head("pencil", "Oefenen", "연습실 — 골라서 풀어보세요")}
      <div class="two-col">
        <div class="sidenav">
          <a href="#trainer"><span class="bullet"></span> 단어 트레이너</a>
          <a href="#dehet"><span class="bullet"></span> de / het</a>
          <a href="#tijdmachine"><span class="bullet"></span> 시제 변환기</a>
          <a href="#perfectum"><span class="bullet"></span> Perfectum 퀴즈</a>
          <a href="#lessen"><span class="bullet"></span> 레슨별 문제</a>
          <a href="#fouten"><span class="bullet"></span> 오답노트</a>
        </div>
        <div>
          <div class="panel" style="border-color:#e07a1a">
            <h3>${sprite("trophy", "ico")} 단어 트레이너 <span class="new-badge">NEW</span></h3>
            <p>단어 리스트의 <b>모든 동사</b>를 정복해요: 뜻 외우기 → 현재완료·미래 형태 → 문장 바꿔 쓰기. 진도가 칸으로 쌓여요.</p>
            <a class="btn" href="#trainer">시작하기 ▶</a>
          </div>
          <div class="panel">
            <h3>${sprite("flagNL", "ico")} de of het?</h3>
            <p>명사를 보고 <b>de</b>인지 <b>het</b>인지 고르고, 복수형까지 써 보는 연습. 키보드 <b>D</b> / <b>H</b>로도 답할 수 있어요.</p>
            <a class="btn" href="#dehet">시작하기 ▶</a>
          </div>
          <div class="panel">
            <h3>${sprite("clock", "ico")} 시간여행 시제 변환기</h3>
            <p>동사 하나를 <b>현재 → 단순과거 → 현재완료 → 미래</b>로 바꿔 쓰고 칸마다 채점받아요.</p>
            <a class="btn" href="#tijdmachine">시작하기 ▶</a>
          </div>
          <div class="panel">
            <h3>${sprite("trophy", "ico")} Perfectum 퀴즈</h3>
            <p>학습자료 동사로 만든 10문제: 과거분사 쓰기, hebben/zijn 고르기, -t/-d(softketchup) 고르기.</p>
            <a class="btn" href="#perfectum">시작하기 ▶</a>
          </div>
        </div>
      </div>`;
    Pixel.hydrate(view());
    $$("img.ico").forEach((im) => { im.style.width = "24px"; im.style.verticalAlign = "-4px"; });
  };

  /* ---------------- WORD LIST ---------------- */
  pages.woorden = function (_, query) {
    const q0 = (query && query.get("q")) || "";
    view().innerHTML = `
      ${head("list", "Woordenlijst", "Perfectum 동사 리스트 · 학습자료 PDF 기준")}
      <div class="filters">
        <label>검색 <input type="text" id="wf-q" value="${esc(q0)}" placeholder="동사 / 뜻"></label>
        <label>그룹 <select id="wf-g"><option value="">전체</option>
          ${Object.keys(GROUPS).map((k) => `<option value="${k}">${k}. ${esc(GROUPS[k].ko)}</option>`).join("")}</select></label>
        <label>조동사 <select id="wf-a"><option value="">전체</option><option value="h">hebben</option><option value="z">zijn</option><option value="hz">둘 다</option></select></label>
        <label><input type="checkbox" id="wf-s"> 분리동사만</label>
        <span id="wf-n" class="muted"></span>
      </div>
      <div class="table-wrap"><table class="retro" id="wf-t"></table></div>
      <p class="small muted" style="margin-top:8px">행을 누르면 예문이 나와요. <span class="pill z">zijn</span> 표시는 완료형에서 zijn을 쓰는 동사, <span class="pill hz">h/z</span>는 목적지가 있으면 zijn. 단순과거형은 학습자료에 없어서 추가한 정보예요.</p>`;
    const draw = () => {
      const q = norm($("#wf-q").value), g = $("#wf-g").value, a = $("#wf-a").value, s = $("#wf-s").checked;
      const rows = VERBS.filter((v) =>
        (!g || v.group === g) && (!a || v.aux === a) && (!s || v.sep) &&
        (!q || norm([v.inf, v.ko, v.en, v.part, v.impSg].join(" ")).includes(q)));
      $("#wf-n").textContent = `${rows.length}개`;
      setTimeout(() => Pixel.hydrate($("#wf-t")), 0);
      $("#wf-t").innerHTML = `<tr><th>동사원형</th><th>뜻</th><th>현재 (ik)</th><th>단순과거</th><th>현재완료</th><th>그룹</th></tr>` +
        rows.map((v) => `<tr class="clickable" data-id="${v.id}">
          <td class="nl">${esc(v.inf)} ${say(v.inf.replace("(zich) ", ""))}${v.sep ? ' <span class="pill sep">분리</span>' : ""}</td>
          <td>${esc(v.ko)}<div class="small muted">${esc(v.en)}</div></td>
          <td class="nl">${esc(v.ik === "-" ? "—" : "ik " + v.ik)}</td>
          <td class="nl">${esc(v.impSg)}<br><span class="small muted">${esc(v.impPl)}</span></td>
          <td class="nl">${auxLabel(v)} ${esc(v.part)}</td>
          <td>${v.group}</td></tr>`).join("");
    };
    Pixel.hydrate(view());
    draw();
    ["#wf-q", "#wf-g", "#wf-a", "#wf-s"].forEach((s) => $(s).addEventListener("input", draw));
    $("#wf-t").addEventListener("click", (e) => {
      const tr = e.target.closest("tr.clickable");
      if (!tr) return;
      const nx = tr.nextElementSibling;
      if (nx && nx.classList.contains("detail")) { nx.remove(); return; }
      const v = VERBS[Number(tr.dataset.id)];
      const d = document.createElement("tr");
      d.className = "detail";
      d.innerHTML = `<td colspan="6">
        <div class="examples">
          <span class="muted">현재</span><span>${v.presEx === "-" ? "—" : nlSay(v.presEx)}</span>
          <span class="muted">현재완료</span><span>${nlSay(v.perfEx)}</span>
          <span class="muted">미래</span><span class="nl">ik ga / zal ${esc(v.inf.replace("(zich) ", "me "))}</span>
        </div>
        <div class="small muted" style="margin-top:4px">${esc(GROUPS[v.group].nl)} · ${auxNote(v)}</div></td>`;
      tr.after(d);
      Pixel.hydrate(d);
    });
  };
  function auxLabel(v) {
    if (v.aux === "z") return '<span class="pill z">zijn</span>';
    if (v.aux === "hz") return '<span class="pill hz">h/z</span>';
    return '<span class="pill h">hebben</span>';
  }
  function auxNote(v) {
    if (v.aux === "z") return "완료형에 zijn을 써요 (이동·상태 변화·zijn/blijven 등).";
    if (v.aux === "hz") return "목적지(naar ...)가 있으면 zijn, 거리·시간·방식만 말하면 hebben.";
    return "완료형에 hebben을 써요.";
  }

  /* ---------------- PERFECTUM QUIZ ---------------- */
  const SOFT = "softketchup";
  const AUX_SWAP = { heb: "ben", hebt: "bent", heeft: "is", hebben: "zijn", ben: "heb", bent: "hebt", is: "heeft", zijn: "hebben" };
  const lastWord = (s) => s.trim().split(" ").pop();
  function tdInfo(v) {
    const inf = lastWord(v.inf);
    const base = inf.replace(/ën$/, "i").replace(/en$/, "");
    const letter = base.slice(-1);
    return { inf, letter };
  }
  function tdEligible(v) {
    if (!(v.group === "a" || v.group === "e")) return false;
    if (!/(de|te)$/.test(v.impSg.split(" ")[0])) return false;
    const { letter } = tdInfo(v);
    return !"td".includes(letter) && /[td]$/.test(v.part);
  }

  function makePerfectumItems(group, n) {
    const pool = VERBS.filter((v) => !group || v.group === group);
    const items = [];
    const used = new Set();
    let guard = 0;
    while (items.length < n && guard++ < 500) {
      const v = pick(pool);
      const type = pick(["part", "part", "aux", "aux", "td"]);
      const key = v.id + type;
      if (used.has(key)) continue;
      if (type === "part") {
        items.push({
          kind: "fill",
          q: ` <span class="nl">${esc(v.inf)}</span> <span class="muted">(${esc(v.ko)})</span> → 과거분사(voltooid deelwoord)는?`,
          a: [v.part], hint: "예: gewerkt",
          ex: partExplain(v)
        });
      } else if (type === "aux") {
        const sents = v.perfEx.split(" / ");
        const si = Math.floor(Math.random() * sents.length);
        const s = sents[si];
        const m = s.match(/\*([^*]+)\*/);
        if (!m || m[1].includes("/") || !AUX_SWAP[m[1].toLowerCase()]) continue;
        const ans = m[1];
        const other = AUX_SWAP[ans.toLowerCase()];
        const hForm = /^he/i.test(ans) ? ans : other;
        const zForm = /^he/i.test(ans) ? other : ans;
        const blanked = fmt(s.replace(m[0], "___"));
        items.push({
          kind: "mc",
          q: ` hebben / zijn? <span class="nl">${blanked}</span> <span class="muted small">(${esc(v.inf)})</span>`,
          opts: [hForm.toLowerCase(), zForm.toLowerCase()],
          a: /^he/i.test(ans) ? 0 : 1,
          ex: auxNote(v) + (v.aux === "hz" ? (si === 1 || /naar /.test(s) ? " 여기는 목적지가 있어서 zijn." : " 여기는 목적지가 없어서 hebben.") : "")
        });
      } else {
        if (!tdEligible(v)) continue;
        const stem = v.part.slice(0, -1);
        const { inf, letter } = tdInfo(v);
        const ans = v.part.slice(-1);
        items.push({
          kind: "mc",
          q: ` -t 일까 -d 일까? <span class="nl">${esc(v.inf)}</span> → <span class="nl">${esc(stem)}<mark>_</mark></span>`,
          opts: ["t", "d"],
          a: ans === "t" ? 0 : 1,
          ex: `동사원형 <span class="nl">${esc(inf)}</span>에서 -en 앞 글자는 '<b>${esc(letter)}</b>' → '${SOFT}'에 ${SOFT.includes(letter) ? "있으니 <b>-t</b>" : "없으니 <b>-d</b>"} → <span class="nl">${esc(v.part)}</span>`
        });
      }
      used.add(key);
    }
    return shuffle(items);
  }
  function partExplain(v) {
    const g = {
      a: "규칙 동사: ge + 어간 + t/d (softketchup 규칙).",
      b: "특수 불규칙 동사: 통째로 외워요.",
      c: "불규칙: ge + 동사원형 형태.",
      d: "불규칙: ge + 모음이 바뀐 형태.",
      e: "be-/ver-/ont-/her- 로 시작하면 ge-를 붙이지 않아요."
    }[v.group];
    return `${g}${v.sep ? " 분리동사는 접두사 + ge + 나머지: <span class='nl'>" + esc(v.part) + "</span>." : ""} 예문: <span class="nl">${fmt(v.perfEx.split(" / ")[0])}</span>`;
  }

  pages.perfectum = function () {
    view().innerHTML = `
      ${head("trophy", "Perfectum Quiz", "학습자료 동사로 자동 출제 · 10문제")}
      <div class="options-row" style="margin-bottom:8px">
        <label>그룹 <select id="pq-g"><option value="">전체</option>
          ${Object.keys(GROUPS).map((k) => `<option value="${k}">${k}. ${esc(GROUPS[k].ko)}</option>`).join("")}</select></label>
        <span class="muted">문제 유형: 과거분사 쓰기 · hebben/zijn · -t/-d</span>
      </div>
      <details class="beginner" ${store.get("pq-seen", false) ? "" : "open"}>
        <summary>${sprite("waffleFace", "ico")} 처음이라면 먼저 읽어 보세요: 현재완료(Perfectum) 만드는 법</summary>
        <div class="step-body">
          <p><b>현재완료</b>는 "~했어요"라고 과거 일을 말할 때 가장 많이 쓰는 모양이에요. 두 조각으로 만들어요:
          <b>① hebben 또는 zijn</b> (2번 자리) + <b>② 과거분사</b>(완료형에 쓰는 동사 모양, 문장 맨 끝).</p>
        </div>
        ${visual({ type: "blocks", rows: [{ words: ["Ik", "heb", "gisteren", "gewerkt"], hl: [1], hl2: [3], num: true, ko: "나는 어제 일했어요" }],
          caption: "heb(hebben)는 2번 자리, gewerkt(과거분사)는 맨 끝!" })}
        <h3>① 과거분사 만들기 (규칙 동사)</h3>
        <div class="step-body"><p>동사원형에서 <b>-en을 떼면 어간</b>(ik 모양)이 나와요. 앞에 <b>ge</b>, 뒤에 <b>t 또는 d</b>를 붙여요.</p></div>
        ${visual({ type: "formula", parts: ["ge", "+", "werk", "+", "t"], result: "gewerkt", caption: "werken → werk(어간) → ge + werk + t" })}
        ${visual({ type: "formula", parts: ["ge", "+", "luister", "+", "d"], result: "geluisterd", caption: "luisteren → luister(어간) → ge + luister + d" })}
        <h3>② t 일까, d 일까? → softketchup!</h3>
        ${visual({ type: "softketchup", caption: "동사원형에서 <b>-en 바로 앞 글자</b>를 보세요. werk<b>k</b>en → k가 있으니 <b>-t</b> · luiste<b>r</b>en → r이 없으니 <b>-d</b> · rei<b>z</b>en → z가 없으니 <b>-d</b> (gereisd)" })}
        <h3>③ hebben 일까, zijn 일까?</h3>
        ${visual({ type: "twobox",
          left: { title: "HEBBEN", note: "대부분의 동사 (거의 다!)", items: [["Ik heb gewerkt.", "일했어요"], ["Ik heb gegeten.", "먹었어요"], ["Ik heb 20 km gefietst.", "20km 자전거 탔어요"]] },
          right: { title: "ZIJN", note: "어디로 이동 · 상태가 바뀜 · zijn/blijven", items: [["Ik ben naar huis gegaan.", "집에 갔어요"], ["Ik ben verhuisd.", "이사했어요"], ["Ik ben naar school gefietst.", "학교에 자전거로 갔어요"]] },
          caption: "fietsen처럼 이동 방법 동사는 <b>목적지(naar ...)가 있으면 zijn</b>, 없으면 hebben이에요." })}
        <h3>④ 불규칙 동사는 외우기</h3>
        <div class="step-body"><p>eten → <span class="nl">gegeten</span>, gaan → <span class="nl">gegaan</span>, zijn → <span class="nl">geweest</span> 처럼 모양이 특별한 동사도 있어요. 단어장(Woorden)에서 그룹 b·c·d를 보며 외워요. be-/ver-/ont-로 시작하는 동사는 <b>ge를 안 붙여요</b>: betalen → <span class="nl">betaald</span>.</p></div>
      </details>
      <div id="quiz"></div>`;
    Pixel.hydrate(view());
    store.set("pq-seen", true);
    const start = () => Quiz($("#quiz"), makePerfectumItems($("#pq-g").value, 10), {
      src: "Perfectum 퀴즈",
      regen: () => makePerfectumItems($("#pq-g").value, 10)
    });
    $("#pq-g").addEventListener("change", start);
    start();
  };

  /* ---------------- TENSE MACHINE ---------------- */
  const TM_FIELDS = [
    { key: "pres", ex: "werk", label: "현재 · ik", pre: "ik", get: (v) => [v.ik] },
    { key: "pres3", ex: "werkt", label: "현재 · hij/zij", pre: "hij", get: (v) => [v.hij] },
    { key: "impSg", ex: "werkte", label: "단순과거 · ik (단수)", pre: "ik", get: (v) => [v.impSg] },
    { key: "impPl", ex: "werkten", label: "단순과거 · wij (복수)", pre: "wij", get: (v) => [v.impPl] },
    { key: "perf", ex: "heb gewerkt", label: "현재완료 · ik", pre: "ik", get: (v) => perfForms(v, "ik") },
    { key: "perf3", ex: "heeft gewerkt", label: "현재완료 · hij/zij", pre: "hij", get: (v) => perfForms(v, "hij") },
    { key: "futGa", ex: "ga werken", label: "미래 (gaan) · ik", pre: "ik", get: (v) => ["ga " + v.inf] },
    { key: "futZal", ex: "zullen werken", label: "미래 (zullen) · wij", pre: "wij", get: (v) => ["zullen " + v.inf] }
  ];
  function perfForms(v, who) {
    const h = who === "ik" ? "heb" : "heeft", z = who === "ik" ? "ben" : "is";
    if (v.aux === "z") return [z + " " + v.part];
    if (v.aux === "hz") return [h + " " + v.part, z + " " + v.part];
    return [h + " " + v.part];
  }
  const stripPronoun = (s) => String(s).replace(/^\s*(ik|jij|je|hij|zij|ze|wij|we|jullie)\s+/i, "");

  pages.tijdmachine = function () {
    const opts = store.get("tm-opts", { fields: ["pres", "impSg", "impPl", "perf", "futGa"], group: "", sep: false });
    const score = { ok: 0, total: 0, cards: 0 };
    let verb = null, graded = false;
    view().innerHTML = `
      ${head("clock", "Tijdmachine", "시간여행 시제 변환기 · 현재 → 과거 → 완료 → 미래")}
      <details class="beginner" ${store.get("tm-seen", false) ? "" : "open"}>
        <summary>${sprite("waffleFace", "ico")} 처음이라면 먼저 읽어 보세요: 시제가 뭐예요?</summary>
        <div class="step-body">
          <p><b>시제</b>는 "언제 일어난 일인지"를 동사 모양으로 보여 주는 거예요. 한국어도 "일해요 / 일했어요 / 일할 거예요"처럼 바뀌죠? 네덜란드어도 똑같아요.</p>
        </div>
        ${visual({ type: "timeline", marks: [
          { pos: "past", nl: "Ik werkte.", ko: "단순과거: 일했어요 (이야기·글)" },
          { pos: "past", nl: "Ik heb gewerkt.", ko: "현재완료: 일했어요 (말할 때 제일 많이 써요!)" },
          { pos: "now", nl: "Ik werk.", ko: "현재: 일해요" },
          { pos: "future", nl: "Ik ga werken.", ko: "미래: 일할 거예요" } ],
          caption: "과거를 말하는 방법은 두 가지예요. 일상 대화에서는 <b>현재완료(heb gewerkt)</b>를 훨씬 많이 써요." })}
        <div class="table-wrap"><table class="retro" style="width:auto">
          <tr><th>칸 이름</th><th>뜻</th><th>werken(일하다)이면</th></tr>
          <tr><td>현재 · ik</td><td>나는 ~해요</td><td class="nl">ik werk</td></tr>
          <tr><td>현재 · hij/zij</td><td>그/그녀는 ~해요 (끝에 -t)</td><td class="nl">hij werkt</td></tr>
          <tr><td>단순과거 · ik</td><td>나는 ~했어요 (한 명)</td><td class="nl">ik werkte</td></tr>
          <tr><td>단순과거 · wij</td><td>우리는 ~했어요 (여러 명, 끝에 -n)</td><td class="nl">wij werkten</td></tr>
          <tr><td>현재완료 · ik</td><td>나는 ~했어요 (heb/ben + 과거분사)</td><td class="nl">ik heb gewerkt</td></tr>
          <tr><td>미래 (gaan)</td><td>나는 ~할 거예요 (ga + 동사원형)</td><td class="nl">ik ga werken</td></tr>
          <tr><td>미래 (zullen)</td><td>우리는 ~할 거예요 (zullen + 동사원형)</td><td class="nl">wij zullen werken</td></tr>
        </table></div>
        <p class="small">칸에는 <b>주어(ik, wij) 빼고 동사 부분만</b> 쓰면 돼요. 모르면 "정답 보기"를 눌러도 괜찮아요. 보고 → 따라 쓰고 → 다음 카드! 그게 연습이에요.</p>
      </details>
      <div class="groupbox"><span class="legend">설정</span>
        <div class="options-row">
          ${TM_FIELDS.map((f) => `<label><input type="checkbox" value="${f.key}" ${opts.fields.includes(f.key) ? "checked" : ""}> ${esc(f.label)}</label>`).join("")}
        </div>
        <div class="options-row" style="margin-top:6px">
          <label>그룹 <select id="tm-g"><option value="">전체</option>
            ${Object.keys(GROUPS).map((k) => `<option value="${k}" ${opts.group === k ? "selected" : ""}>${k}. ${esc(GROUPS[k].ko)}</option>`).join("")}</select></label>
          <label><input type="checkbox" id="tm-s" ${opts.sep ? "checked" : ""}> 분리동사만</label>
        </div>
      </div>
      <div class="drill-card" id="tm-card"></div>
      <div class="stats" id="tm-stats"></div>
      <p class="small muted" style="margin-top:12px">주어(ik, wij 등)는 안 써도 돼요. 분리동사는 떨어진 그대로 (예: <span class="nl">sta op</span>), 미래형은 붙인 그대로 (<span class="nl">ga opstaan</span>). Enter: 다음 칸 → 채점 → 다음 동사.</p>`;
    Pixel.hydrate(view());

    const saveOpts = () => {
      opts.fields = $$(".options-row input[type=checkbox][value]").filter((c) => c.checked).map((c) => c.value);
      opts.group = $("#tm-g").value; opts.sep = $("#tm-s").checked;
      store.set("tm-opts", opts);
    };
    $$(".options-row input, .options-row select").forEach((x) => x.addEventListener("change", () => { saveOpts(); nextCard(); }));

    function nextCard() {
      const pool = VERBS.filter((v) => v.drill && (!opts.group || v.group === opts.group) && (!opts.sep || v.sep));
      const fields = TM_FIELDS.filter((f) => opts.fields.includes(f.key));
      if (!pool.length || !fields.length) {
        $("#tm-card").innerHTML = `<p>조건에 맞는 동사나 선택된 칸이 없어요. 설정을 바꿔 주세요.</p>`;
        return;
      }
      let v; do { v = pick(pool); } while (pool.length > 1 && verb && v.id === verb.id);
      verb = v; graded = false; store.set("tm-seen", true);
      $("#tm-card").innerHTML = `
        ${sprite("clock", "", "")}
        <div class="word nl">${esc(v.inf)} ${say(v.inf)}</div>
        <div class="meaning">${esc(v.ko)} <span class="muted small">· ${esc(v.en)}</span> ${auxLabel(v)}${v.sep ? ' <span class="pill sep">분리동사</span>' : ""}</div>
        <div class="fields">
          ${fields.map((f) => `<div class="field" data-k="${f.key}">
            <label>${esc(f.label)}</label>
            <span class="pre nl">${f.pre}</span><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="예) werken → ${esc(f.ex)}">
            <div class="sol"></div></div>`).join("")}
        </div>
        <div class="actions" style="justify-content:center;margin-top:14px">
          <button class="btn big primary" id="tm-grade">채점</button>
          <button class="btn big" id="tm-show">정답 보기</button>
          <button class="btn big" id="tm-next">다음 ▶</button>
        </div>`;
      Pixel.hydrate($("#tm-card"));
      $("#tm-card > img").style.width = "40px";
      const inputs = $$("#tm-card input");
      inputs.forEach((inp, i) => inp.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;
        e.preventDefault();
        if (graded) return nextCard();
        if (inputs[i + 1]) inputs[i + 1].focus(); else grade();
      }));
      inputs[0].focus();
      $("#tm-grade").onclick = grade;
      $("#tm-show").onclick = () => grade(true);
      $("#tm-next").onclick = nextCard;
    }

    function grade(reveal) {
      if (graded) return;
      graded = true;
      let ok = 0, n = 0;
      $$("#tm-card .field").forEach((fe) => {
        const f = TM_FIELDS.find((x) => x.key === fe.dataset.k);
        const answers = f.get(verb);
        const inp = $("input", fe);
        const val = stripPronoun(inp.value);
        const good = !reveal && answers.some((a) => norm(a) === norm(val));
        n++; if (good) ok++;
        fe.classList.add(good ? "ok" : "no");
        $(".sol", fe).innerHTML = (good ? "✓ " : "→ ") + answers.map((a) => `${esc(f.pre)} ${esc(a)}`).join(" / ");
        if (!good && !reveal) Notebook.add({ kind: "fill", q: ` <span class="nl">${esc(verb.inf)}</span> (${esc(verb.ko)}) → ${esc(f.label)}`, a: answers, ex: verb.aux !== "h" && f.key.startsWith("perf") ? auxNote(verb) : "" }, "시제 변환기");
        inp.disabled = true;
      });
      if (!reveal) { score.ok += ok; score.total += n; }
      score.cards++;
      drawStats(reveal ? null : `${ok}/${n}`);
      $("#tm-next").focus();
    }
    function drawStats(last) {
      $("#tm-stats").innerHTML = `<span>동사 ${score.cards}개</span><span>정답 칸 ${score.ok}/${score.total}</span>${last ? `<span>이번 카드 ${last}</span>` : ""}`;
    }
    drawStats();
    nextCard();
  };

  /* ---------------- DE / HET ---------------- */
  pages.dehet = function () {
    const mode = store.get("dh-mode", "art");
    const s = { ok: 0, bad: 0, streak: 0, best: store.get("dh-best", 0) };
    let queue = shuffle(NOUNS), cur = null, answered = false;
    view().innerHTML = `
      ${head("flagNL", "de of het?", "관사 고르기 · 복수형 만들기")}
      <details class="beginner" ${store.get("dh-seen", false) ? "" : "open"}>
        <summary>${sprite("waffleFace", "ico")} 처음이라면 먼저 읽어 보세요: de / het 이 뭐예요?</summary>
        <div class="step-body">
          <p>네덜란드어 명사(사물·사람 이름) 앞에는 <b>de</b> 또는 <b>het</b>이 붙어요. 둘 다 영어의 <b>the</b>(그)와 같은 뜻이에요. 뜻은 같지만, <b>단어마다 정해진 짝</b>이 있어요.</p>
          <p>한국어에는 이런 게 없어서 처음엔 헷갈려요. 그래서 단어를 외울 때 <b>de/het까지 한 덩어리로</b> 외우는 게 제일 좋아요. 예: "tafel"이 아니라 "<span class="nl">de tafel</span>"로!</p>
        </div>
        ${visual({ type: "twobox",
          left: { title: "DE", note: "명사의 약 2/3 · 사람 · 모든 복수형", items: [["de tafel", "탁자", "tafel"], ["de fiets", "자전거", "fiets"], ["de jongen", "소년", "jongen"], ["de boeken", "책들 (복수)", "boek"]] },
          right: { title: "HET", note: "-je 로 끝나는 말 · 언어 · 일부 단어", items: [["het huis", "집", "huis"], ["het boek", "책 (하나)", "boek"], ["het meisje", "소녀", "meisje"], ["het bed", "침대", "bed"]] },
          caption: "같은 boek도 하나일 땐 <b>het boek</b>, 여러 개일 땐 <b>de boeken</b>이에요. 복수형은 무조건 de!" })}
        <p class="small">연습 방법: 단어를 보고 <b>de</b>나 <b>het</b> 버튼을 누르세요 (키보드 D / H 도 돼요). 틀린 단어는 조금 뒤에 다시 나와요. 스피커를 누르면 발음을 들을 수 있어요.</p>
      </details>
      <div class="options-row">
        <label><input type="radio" name="dhm" value="art" ${mode === "art" ? "checked" : ""}> de/het 고르기</label>
        <label><input type="radio" name="dhm" value="plural" ${mode === "plural" ? "checked" : ""}> 복수형 쓰기</label>
        <label><input type="radio" name="dhm" value="both" ${mode === "both" ? "checked" : ""}> 둘 다</label>
      </div>
      <div class="drill-card" id="dh-card"></div>
      <div class="stats" id="dh-stats"></div>
      <div class="groupbox"><span class="legend">기억할 규칙</span>
        <ul class="rule-list small">
          <li>복수형은 <b>항상 de</b>: het boek → <span class="nl">de boeken</span></li>
          <li>-je 지소형은 <b>항상 het</b>: het meisje, het huisje</li>
          <li>사람·직업, -ing, -heid, -ie 로 끝나는 말은 대부분 <b>de</b></li>
          <li>동사원형이 명사가 된 것, 언어 이름, -ment, -um, ge-/be- 로 시작하는 말은 <b>het</b>인 경우가 많아요</li>
          <li>나머지는 외우기! 단어를 외울 때 관사까지 함께 외우세요.</li>
        </ul>
      </div>`;
    Pixel.hydrate(view());
    $$('input[name="dhm"]').forEach((r) => r.addEventListener("change", () => { store.set("dh-mode", r.value); pages.dehet(); }));

    const curMode = () => {
      const m = $('input[name="dhm"]:checked').value;
      return m;
    };

    function next() {
      if (!queue.length) queue = shuffle(NOUNS);
      const m = curMode();
      do { cur = queue.shift(); } while (m !== "art" && !cur.plural.length && queue.length);
      answered = false;
      const needArt = m !== "plural", needPl = m !== "art" && cur.plural.length;
      $("#dh-card").innerHTML = `
        ${cur.pic ? sprite(cur.pic, "pic-xl", cur.ko) : ""}
        <div class="word nl">${needArt ? "___ " : (cur.art + " ")}${esc(cur.noun)} ${say(cur.noun)}</div>
        <div class="meaning">${esc(cur.ko)}</div>
        ${needArt ? `<div class="dehet-btns"><button class="btn" data-a="de">de</button><button class="btn" data-a="het">het</button></div>` : ""}
        ${needPl ? `<div class="fill" style="margin:14px 0 0"><label>복수형: <span class="nl">de</span> <input type="text" id="dh-pl" autocomplete="off" autocapitalize="off" spellcheck="false"></label>
            ${needArt ? "" : ` <button class="btn" id="dh-check">확인</button>`}</div>` : ""}
        <div class="feedback" id="dh-fb"></div>
        <div class="actions" style="justify-content:center"><button class="btn" id="dh-next" ${needArt ? "disabled" : ""}>다음 ▶</button></div>`;
      Pixel.hydrate($("#dh-card"));
      $$("#dh-card [data-a]").forEach((b) => (b.onclick = () => answer(b.dataset.a)));
      const chk = $("#dh-check"); if (chk) chk.onclick = () => answer(null);
      const pl = $("#dh-pl");
      if (pl) {
        pl.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); answered ? next() : (needArt ? null : answer(null)); } });
        if (!needArt) pl.focus();
      }
      $("#dh-next").onclick = next;
    }

    function answer(art) {
      if (answered) return;
      const m = curMode();
      const needArt = m !== "plural", needPl = m !== "art" && cur.plural.length;
      const artOk = !needArt || art === cur.art;
      let plOk = true, plVal = "";
      if (needPl) {
        plVal = $("#dh-pl").value.replace(/^\s*de\s+/i, "");
        plOk = cur.plural.some((p) => norm(p) === norm(plVal));
        $("#dh-pl").disabled = true;
      }
      answered = true;
      const ok = artOk && plOk;
      if (ok) { s.ok++; s.streak++; if (s.streak > s.best) { s.best = s.streak; store.set("dh-best", s.best); } }
      else {
        s.bad++; s.streak = 0;
        queue.splice(Math.min(3, queue.length), 0, cur); // 틀린 단어는 곧 다시
        Notebook.add(needArt
          ? { kind: "mc", q: ` ___ <span class="nl">${esc(cur.noun)}</span> (${esc(cur.ko)})`, opts: ["de", "het"], a: cur.art === "de" ? 0 : 1, ex: cur.hint || "" }
          : { kind: "fill", q: ` <span class="nl">${esc(cur.art + " " + cur.noun)}</span> (${esc(cur.ko)}) → 복수형`, a: cur.plural, ex: "" }, "de/het");
      }
      $$("#dh-card [data-a]").forEach((b) => {
        b.disabled = true;
        if (b.dataset.a === cur.art) b.style.outline = "3px solid #008000";
        else if (b.dataset.a === art) b.style.outline = "3px solid #cc0000";
      });
      store.set("dh-seen", true);
      const plText = cur.plural.length ? `복수: <span class="nl">de ${esc(cur.plural.join(" / de "))}</span> ${say("de " + cur.plural[0])}` : "보통 복수형으로 안 써요";
      $("#dh-fb").innerHTML = `${sprite(ok ? "check" : "cross")}
        <span class="${ok ? "" : ""}">${ok ? "Juist!" : "Fout!"} <span class="nl">${esc(cur.art)} ${esc(cur.noun)}</span> · ${plText}</span>
        ${cur.hint ? `<div class="small muted">${esc(cur.hint)}</div>` : ""}`;
      Pixel.hydrate($("#dh-fb"));
      $("#dh-fb img").style.cssText = "width:20px;vertical-align:-4px";
      $("#dh-next").disabled = false;
      $("#dh-next").focus();
      stats();
    }

    function stats() {
      $("#dh-stats").innerHTML = `<span>정답 ${s.ok}</span><span>오답 ${s.bad}</span><span>연속 ${s.streak}</span><span>최고 연속 ${s.best}</span>`;
    }

    // keyboard: D / H
    const key = (e) => {
      if (!document.body.contains($("#dh-card"))) { document.removeEventListener("keydown", key); return; }
      if (e.target.tagName === "INPUT" && e.target.type === "text") return;
      const k = e.key.toLowerCase();
      if (!answered && k === "d") answer("de");
      else if (!answered && k === "h") answer("het");
      else if (answered && (k === "enter" || k === " ")) { e.preventDefault(); next(); }
    };
    document.addEventListener("keydown", key);
    stats();
    next();
  };

  /* ---------------- WORD TRAINER (all verbs) ---------------- */
  const TR_MODES = {
    m: { name: "1. 단어 외우기", short: "뜻", desc: "한국어 뜻을 보고 네덜란드어 동사를 떠올려요" },
    f: { name: "2. 현재완료 · 미래 형태", short: "형태", desc: "ik 로 현재완료(heb/ben + 과거분사)와 미래(ga + 동사원형)를 써요" },
    s: { name: "3. 문장 바꿔 쓰기", short: "문장", desc: "현재 문장을 현재완료 문장과 미래 문장으로 바꿔요" }
  };
  const MASTER = 2; // 연속 2번 맞히면 정복
  function sentencesFor(v) {
    const all = [].concat(window.SENTENCES_1 || [], window.SENTENCES_2 || []);
    const e = all.find((x) => x.inf === v.inf);
    return e ? e.pairs.filter((p) => p.pres && p.pres !== "-" && p.fut && p.perf) : [];
  }
  const trVerbs = () => VERBS.filter((v) => v.inf !== "geboren worden" || sentencesFor(v).length);
  const futAlt = (s) => s.replace(/\*(ga|gaat|gaan)\*/, (m, g) => "*" + ({ ga: "zal", gaat: "zal", gaan: "zullen" })[g] + "*");

  pages.trainer = function () {
    const prog = store.get("trainer", {});
    const opt = store.get("tr-opts", { mode: "m", group: "", onlyNew: true, input: "blocks", card: "write" });
    let cur = null, answered = false, recent = [];
    const lv = (v, m) => ((prog[v.inf] || {})[m] || 0);
    const verbs = trVerbs();

    view().innerHTML = `
      ${head("trophy", "Woordentrainer", `단어 리스트 동사 ${verbs.length}개를 하나도 빠짐없이 정복해요`)}
      <details class="beginner" ${store.get("tr-seen", false) ? "" : "open"}>
        <summary>${sprite("waffleFace", "ico")} 이렇게 써요 (처음이라면 읽어 보세요)</summary>
        <div class="step-body">
          <p>단어 리스트의 <b>모든 동사</b>를 세 단계로 연습해요. 순서대로 하는 걸 추천해요.</p>
          <ul class="rule-list">
            <li><b>1. 단어 외우기</b>: 한국어 뜻을 보고 네덜란드어 동사를 써요. 쓰기가 어려우면 <b>카드 모드</b>로 보고 떠올리기만 해도 돼요.</li>
            <li><b>2. 현재완료·미래 형태</b>: <span class="nl">werken</span> → <span class="nl">ik heb gewerkt</span> / <span class="nl">ik ga werken</span> 처럼 써요.</li>
            <li><b>3. 문장 바꿔 쓰기</b>: <span class="nl">Ik werk thuis.</span> → <span class="nl">Ik heb thuis gewerkt.</span> / <span class="nl">Ik ga thuis werken.</span> 단어 블록을 눌러서 순서대로 놓거나 직접 쓸 수 있어요.</li>
          </ul>
          <p>같은 단어를 <b>${MASTER}번 연속</b> 맞히면 그 단계는 "정복"이에요. 틀리면 처음부터 다시! 아래 칸 그림이 내 진도예요. 칸을 누르면 그 단어만 연습할 수 있어요.</p>
        </div>
        <div class="tr-legend small"><span class="cell c0"></span> 아직 <span class="cell c1"></span> 1단계 정복 <span class="cell c2"></span> 2단계까지 <span class="cell c3"></span> 3단계 모두 정복!</div>
      </details>

      <div class="groupbox"><span class="legend">나의 정복 현황</span>
        <div class="tr-counts" id="tr-counts"></div>
        <div class="tr-board" id="tr-board"></div>
      </div>

      <div class="set-tabs" id="tr-modes">${Object.keys(TR_MODES).map((k) => `<button class="btn" data-mode="${k}">${TR_MODES[k].name}</button>`).join("")}</div>
      <div class="options-row" style="margin:6px 0">
        <label>그룹 <select id="tr-g"><option value="">전체</option>
          ${Object.keys(GROUPS).map((k) => `<option value="${k}" ${opt.group === k ? "selected" : ""}>${k}. ${esc(GROUPS[k].ko)}</option>`).join("")}</select></label>
        <label><input type="checkbox" id="tr-new" ${opt.onlyNew ? "checked" : ""}> 아직 정복 못한 단어만</label>
        <span id="tr-sub"></span>
      </div>
      <div class="drill-card" id="tr-card"></div>`;
    Pixel.hydrate(view());

    function save() { store.set("trainer", prog); store.set("tr-opts", opt); }
    function setLevel(v, m, ok) {
      const p = prog[v.inf] || (prog[v.inf] = {});
      p[m] = ok ? Math.min(MASTER, (p[m] || 0) + 1) : 0;
      save(); board();
    }
    function board() {
      const counts = { m: 0, f: 0, s: 0 };
      $("#tr-board").innerHTML = verbs.map((v) => {
        const n = ["m", "f", "s"].filter((m) => lv(v, m) >= MASTER);
        n.forEach((m) => counts[m]++);
        return `<button class="cell c${n.length}" data-inf="${esc(v.inf)}" title="${esc(v.inf)} · ${esc(v.ko)}"></button>`;
      }).join("");
      $("#tr-counts").innerHTML = Object.keys(TR_MODES).map((m) => {
        const pct = Math.round((counts[m] / verbs.length) * 100);
        return `<div><span>${TR_MODES[m].short}</span><span class="bar"><span style="width:${pct}%"></span></span><span>${counts[m]} / ${verbs.length}</span></div>`;
      }).join("");
    }
    $("#tr-board").addEventListener("click", (e) => {
      const b = e.target.closest(".cell[data-inf]");
      if (!b) return;
      const v = verbs.find((x) => x.inf === b.dataset.inf);
      if (v) show(v);
      $("#tr-card").scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    function pool() {
      return verbs.filter((v) => (!opt.group || v.group === opt.group) &&
        (opt.mode !== "s" || sentencesFor(v).length) &&
        (opt.mode !== "f" || v.drill));
    }
    function next() {
      store.set("tr-seen", true);
      let p = pool();
      const fresh = p.filter((v) => lv(v, opt.mode) < MASTER);
      if (opt.onlyNew) p = fresh;
      if (!p.length) {
        $("#tr-card").innerHTML = `${sprite("trophy", "pic-xl")}<div class="word">Proficiat!</div>` +
          `<p>이 조건의 단어를 모두 정복했어요. 그룹을 바꾸거나 "아직 정복 못한 단어만"을 끄고 복습해 보세요.</p>`;
        Pixel.hydrate($("#tr-card"));
        return;
      }
      const minL = Math.min(...p.map((v) => lv(v, opt.mode)));
      let cands = p.filter((v) => lv(v, opt.mode) === minL && !recent.includes(v.inf));
      if (!cands.length) cands = p;
      show(pick(cands));
    }

    function show(v) {
      cur = v; answered = false;
      recent = [v.inf].concat(recent).slice(0, 4);
      const left = pool().filter((x) => lv(x, opt.mode) < MASTER).length;
      $("#tr-sub").innerHTML = `<span class="muted">남은 단어 ${left}개 · 이 단어 연속 정답 ${lv(v, opt.mode)}/${MASTER}</span>`;
      if (opt.mode === "m") showMeaning(v);
      else if (opt.mode === "f") showForms(v);
      else showSentence(v);
      Pixel.hydrate($("#tr-card"));
      const first = $("#tr-card input[type=text]");
      if (first) first.focus();
    }

    const infOf = (v) => v.inf.replace("(zich) ", "");
    function after(v) {
      return `<div class="tr-after">
        <div class="word nl">${esc(v.inf)} ${say(infOf(v))}</div>
        <div class="meaning">${esc(v.ko)} ${auxLabel(v)}${v.sep ? ' <span class="pill sep">분리동사</span>' : ""}</div>
        <div class="examples" style="text-align:left;margin-top:8px">
          <span class="muted">현재</span><span>${v.ik === "-" ? "—" : `<span class="nl">ik ${esc(v.ik)}</span>`}</span>
          <span class="muted">현재완료</span><span class="nl">ik ${esc(perfForms(v, "ik").join(" / ik "))}</span>
          <span class="muted">미래</span><span class="nl">ik ga ${esc(infOf(v))}</span>
          <span class="muted">예문</span><span>${nlSay(v.perfEx.split(" / ")[0])}</span>
        </div></div>`;
    }

    /* mode 1: meaning -> word */
    function showMeaning(v) {
      const cardMode = opt.card === "card";
      $("#tr-card").innerHTML = `
        <div class="options-row" style="justify-content:center">
          <label><input type="radio" name="trc" value="write" ${!cardMode ? "checked" : ""}> 직접 쓰기</label>
          <label><input type="radio" name="trc" value="card" ${cardMode ? "checked" : ""}> 카드 모드 (보고 떠올리기)</label>
        </div>
        <div class="muted small" style="margin-top:10px">이 뜻의 네덜란드어 동사는?</div>
        <div class="word">${esc(v.ko)}</div>
        <div class="meaning small">${esc(v.en)}</div>
        ${cardMode ? `<div class="actions" style="justify-content:center"><button class="btn big primary" id="tr-flip">카드 뒤집기</button></div>`
          : `<div class="fill" style="margin:12px 0 0"><input type="text" id="tr-in" placeholder="동사원형 (예: werken)" autocomplete="off" autocapitalize="off" spellcheck="false">
             <div class="actions" style="justify-content:center"><button class="btn big primary" id="tr-check">확인</button><button class="btn big" id="tr-idk">모르겠어요</button></div></div>`}
        <div id="tr-fb"></div>`;
      $$('input[name="trc"]').forEach((r) => (r.onchange = () => { opt.card = r.value; save(); show(v); }));
      if (cardMode) {
        $("#tr-flip").onclick = () => {
          $("#tr-fb").innerHTML = after(v) + `<div class="actions" style="justify-content:center">
            <button class="btn big" id="tr-yes">${sprite("check", "ico-s")} 알았어요</button><button class="btn big" id="tr-no">${sprite("cross", "ico-s")} 몰랐어요</button></div>`;
          $("#tr-flip").remove();
          Pixel.hydrate($("#tr-fb"));
          speak(infOf(v));
          $("#tr-yes").onclick = () => { setLevel(v, "m", true); next(); };
          $("#tr-no").onclick = () => { setLevel(v, "m", false); next(); };
        };
        return;
      }
      const check = (giveUp) => {
        if (answered) return next();
        answered = true;
        const val = $("#tr-in").value;
        const ok = !giveUp && [v.inf, infOf(v)].some((a) => norm(a) === norm(val));
        setLevel(v, "m", ok);
        if (!ok) Notebook.add({ kind: "fill", q: ` ${esc(v.ko)} (${esc(v.en)}) → 네덜란드어 동사원형`, a: [infOf(v)], ex: "" }, "단어 트레이너");
        $("#tr-in").disabled = true;
        $("#tr-fb").innerHTML = `<div class="feedback">${sprite(ok ? "check" : "cross", "ico")} ${ok ? "Juist! 맞았어요." : "괜찮아요, 이렇게 써요:"}</div>${after(v)}
          <div class="actions" style="justify-content:center"><button class="btn big primary" id="tr-next">다음 ▶</button></div>`;
        Pixel.hydrate($("#tr-fb"));
        speak(infOf(v));
        $("#tr-check").disabled = true; $("#tr-idk").disabled = true;
        $("#tr-next").onclick = next; $("#tr-next").focus();
      };
      $("#tr-check").onclick = () => check(false);
      $("#tr-idk").onclick = () => check(true);
      $("#tr-in").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); check(false); } });
    }

    /* mode 2: forms */
    function showForms(v) {
      const fields = [
        { label: "현재완료 (어제 ~했어요)", ans: perfForms(v, "ik"), ph: "예) werken → heb gewerkt" },
        { label: "미래 (내일 ~할 거예요)", ans: ["ga " + infOf(v), "zal " + infOf(v)], ph: "예) werken → ga werken" }
      ];
      $("#tr-card").innerHTML = `
        <div class="word nl">${esc(v.inf)} ${say(infOf(v))}</div>
        <div class="meaning">${esc(v.ko)} <span class="small muted">· ${esc(v.en)}</span>${v.sep ? ' <span class="pill sep">분리동사</span>' : ""}</div>
        <div class="fields">${fields.map((f, i) => `<div class="field" data-i="${i}"><label>${f.label}</label>
          <span class="pre nl">ik</span><input type="text" placeholder="${esc(f.ph)}" autocomplete="off" autocapitalize="off" spellcheck="false"><div class="sol"></div></div>`).join("")}</div>
        <div class="actions" style="justify-content:center;margin-top:12px">
          <button class="btn big primary" id="tr-check">채점</button>
          <button class="btn big" id="tr-hint">힌트</button>
          <button class="btn big" id="tr-idk">정답 보기</button>
        </div>
        <div id="tr-fb" class="small"></div>`;
      const inputs = $$("#tr-card .field input");
      $("#tr-hint").onclick = () => {
        $("#tr-fb").innerHTML = `<div class="feedback">${auxNote(v)}<br>과거분사는 <b class="nl">${esc(v.part.slice(0, Math.max(2, Math.ceil(v.part.length / 2))))}…</b> 로 시작해요.</div>`;
      };
      const check = (giveUp) => {
        if (answered) return next();
        answered = true;
        let all = true;
        $$("#tr-card .field").forEach((fe) => {
          const f = fields[Number(fe.dataset.i)];
          const inp = $("input", fe);
          const ok = !giveUp && f.ans.some((a) => norm(a) === norm(stripPronoun(inp.value)));
          if (!ok) all = false;
          fe.classList.add(ok ? "ok" : "no");
          $(".sol", fe).innerHTML = (ok ? "✓ " : "→ ") + f.ans.map((a) => "ik " + esc(a)).join(" / ");
          inp.disabled = true;
        });
        setLevel(v, "f", all);
        if (!all) Notebook.add({ kind: "fill", q: ` <span class="nl">${esc(v.inf)}</span> (${esc(v.ko)}) → 현재완료 ik`, a: perfForms(v, "ik"), ex: auxNote(v) }, "단어 트레이너");
        $("#tr-fb").innerHTML = `<div class="feedback">${sprite(all ? "check" : "cross", "ico")} ${all ? "Heel goed!" : "정답을 소리 내서 읽어 보고 다음으로 가요."}</div>
          <div>${partExplain(v)}</div>
          <div class="actions" style="justify-content:center"><button class="btn big primary" id="tr-next">다음 ▶</button></div>`;
        Pixel.hydrate($("#tr-fb"));
        $("#tr-next").onclick = next; $("#tr-next").focus();
      };
      inputs.forEach((inp, i) => inp.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;
        e.preventDefault();
        if (answered) return next();
        if (inputs[i + 1]) inputs[i + 1].focus(); else check(false);
      }));
      $("#tr-check").onclick = () => check(false);
      $("#tr-idk").onclick = () => check(true);
    }

    /* mode 3: sentences */
    function showSentence(v) {
      const pairs = sentencesFor(v);
      const pr = pick(pairs);
      const tasks = [
        { key: "perf", label: "현재완료 문장으로 (~했어요)", target: pr.perf, alts: [pr.perf], ko: pr.perfKo },
        { key: "fut", label: "미래 문장으로 (gaan 사용, ~할 거예요)", target: pr.fut, alts: [pr.fut, futAlt(pr.fut)], ko: pr.futKo }
      ];
      const blocks = opt.input === "blocks";
      $("#tr-card").innerHTML = `
        <div class="options-row" style="justify-content:center">
          <label><input type="radio" name="tri" value="blocks" ${blocks ? "checked" : ""}> 블록 놓기 (쉬움)</label>
          <label><input type="radio" name="tri" value="type" ${!blocks ? "checked" : ""}> 직접 쓰기</label>
        </div>
        <div class="muted small" style="margin-top:8px">${esc(v.inf)} · ${esc(v.ko)} ${auxLabel(v)}</div>
        <div class="tr-src">${nlSay(pr.pres)}<div class="small">${esc(pr.ko || "")}</div></div>
        ${tasks.map((t, i) => `<div class="tr-task" data-i="${i}">
          <div class="tr-task-label">${i + 1}. ${t.label} <span class="small muted">— ${esc(t.ko || "")}</span></div>
          ${blocks ? `<div class="bank-answer" data-role="ans"></div><div class="bank" data-role="bank">${shuffle(tokens(t.target)).map((w) =>
            `<button class="chip tok" type="button">${esc(w)}</button>`).join("")}</div>`
            : `<div class="fill" style="margin:6px 0 0"><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="문장을 써 보세요"></div>`}
          <div class="sol small"></div></div>`).join("")}
        <div class="actions" style="justify-content:center;margin-top:12px">
          <button class="btn big primary" id="tr-check">채점</button>
          <button class="btn big" id="tr-idk">정답 보기</button>
        </div>
        <div id="tr-fb" class="small"></div>`;
      $$('input[name="tri"]').forEach((r) => (r.onchange = () => { opt.input = r.value; save(); show(v); }));
      if (blocks) {
        $$("#tr-card .tr-task").forEach((task) => {
          const ans = $('[data-role="ans"]', task), bank = $('[data-role="bank"]', task);
          task.addEventListener("click", (e) => {
            const b = e.target.closest(".tok");
            if (!b || answered) return;
            (b.parentElement === bank ? ans : bank).appendChild(b);
          });
        });
      }
      const valueOf = (task) => blocks ? $$('[data-role="ans"] .tok', task).map((b) => b.textContent).join(" ") : $("input", task).value;
      const check = (giveUp) => {
        if (answered) return next();
        answered = true;
        let all = true;
        $$("#tr-card .tr-task").forEach((task) => {
          const t = tasks[Number(task.dataset.i)];
          const ok = !giveUp && t.alts.some((a) => norm(strip(a)) === norm(valueOf(task)));
          if (!ok) all = false;
          task.classList.add(ok ? "ok" : "no");
          $(".sol", task).innerHTML = `${ok ? "✓" : "→"} ${nlSay(t.target)}`;
          $$("input", task).forEach((x) => (x.disabled = true));
          if (!ok) Notebook.add({ kind: "fill", q: ` <span class="nl">${esc(strip(pr.pres))}</span> → ${esc(t.label)}`, a: t.alts.map(strip), ex: esc(t.ko || "") }, "단어 트레이너");
        });
        setLevel(v, "s", all);
        $("#tr-fb").innerHTML = `<div class="feedback">${sprite(all ? "check" : "cross", "ico")} ${all ? "Perfect! 두 문장 모두 맞았어요." : "초록 글씨 정답을 소리 내서 두 번 읽어 보세요."}</div>
          <div class="small muted">기억하기: 현재완료는 <b>heb/ben(2번 자리) … 과거분사(끝)</b>, 미래는 <b>ga/gaat/gaan(2번 자리) … 동사원형(끝)</b>.</div>
          <div class="actions" style="justify-content:center"><button class="btn big primary" id="tr-next">다음 ▶</button></div>`;
        Pixel.hydrate($("#tr-card"));
        $("#tr-next").onclick = next; $("#tr-next").focus();
      };
      $$("#tr-card input[type=text]").forEach((inp, i, arr) => inp.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;
        e.preventDefault();
        if (answered) return next();
        if (arr[i + 1]) arr[i + 1].focus(); else check(false);
      }));
      $("#tr-check").onclick = () => check(false);
      $("#tr-idk").onclick = () => check(true);
    }
    const tokens = (s) => strip(s).replace(/[.!?]+$/, "").split(/\s+/);

    // controls
    const paintModes = () => $$("[data-mode]").forEach((b) => b.classList.toggle("pressed", b.dataset.mode === opt.mode));
    $$("[data-mode]").forEach((b) => (b.onclick = () => { opt.mode = b.dataset.mode; save(); paintModes(); next(); }));
    $("#tr-g").onchange = () => { opt.group = $("#tr-g").value; save(); next(); };
    $("#tr-new").onchange = () => { opt.onlyNew = $("#tr-new").checked; save(); next(); };
    paintModes(); board(); next();
  };

  /* ---------------- NOTEBOOK ---------------- */
  pages.fouten = function () {
    const list = Notebook.all();
    view().innerHTML = `
      ${head("floppy", "Foutenboek", "오답노트 · 틀린 문제가 자동으로 저장돼요 (로그인하면 계정에도)")}
      ${list.length ? `
        <div class="actions">
          <button class="btn big primary" id="fb-quiz">오답 다시 풀기 (최대 10문제)</button>
          <button class="btn" id="fb-clear">모두 지우기</button>
        </div>
        <div id="quiz"></div>
        <div class="table-wrap"><table class="retro">
          <tr><th>문제</th><th>정답</th><th>출처</th><th></th></tr>
          ${list.map((x, i) => `<tr><td>${x.item.q}</td><td class="nl">${esc(displayAnswer(x.item))}</td>
            <td class="small">${esc(x.src)}</td><td><button class="btn" data-del="${i}">삭제</button></td></tr>`).join("")}
        </table></div>`
      : `<div class="panel center">${sprite("waffleFace", "", "")}<p>오답노트가 비어 있어요. 문제를 풀러 가볼까요?</p><a class="btn" href="#oefenen">연습하러 가기</a></div>`}`;
    Pixel.hydrate(view());
    const art = $(".panel.center img"); if (art) art.style.width = "120px";
    if (!list.length) return;
    $("#fb-clear").onclick = () => { if (confirm("오답노트를 모두 지울까요?")) { Notebook.clear(); pages.fouten(); } };
    $$("[data-del]").forEach((b) => (b.onclick = () => { Notebook.remove(list[Number(b.dataset.del)].item.q); pages.fouten(); }));
    $("#fb-quiz").onclick = () => {
      const items = shuffle(list).slice(0, 10).map((x) => x.item);
      Quiz($("#quiz"), items, {
        src: "오답노트",
        onScore() {
          // 맞힌 문제는 오답노트에서 빼기
          $$("#quiz .q.correct").forEach((qEl) => Notebook.remove(items[Number(qEl.dataset.i)].q));
        }
      });
    };
  };

  /* =======================================================
     실생활 표현 (학교 · 마트)  — data: js/data-phrases.js
     ======================================================= */
  const PH = () => window.PHRASES || {};
  const phItems = (t) => [].concat(...((t.sections || []).map((s) => (s.items || []).map((it) => Object.assign({ sec: s.title }, it)))));

  pages.leven = function (arg) {
    const P = PH();
    const t = P[arg];
    if (!t) {
      view().innerHTML = `
        ${head("winkelkar", "Praktisch Nederlands", "실생활에서 바로 쓰는 표현")}
        <div class="mascot">${sprite("waffleFace")}<div class="bubble">오늘 바로 쓸 수 있는 말을 모았어요. 장면을 골라 보세요!
          모든 문장 옆 ${sprite("speaker", "ico")} 버튼을 누르면 네덜란드어 발음을 들을 수 있어요.</div></div>
        <div class="triad leven-pick">
          ${["school", "winkel"].filter((k) => P[k]).map((k) => `<a href="#leven/${k}">${sprite(k === "school" ? "jongen" : "winkelkar")}
            <span class="big-word">${esc(P[k].nl)}</span><span class="tag">${esc(P[k].ko)} · 표현 ${phItems(P[k]).length}개${P[k].foods ? ` · 식료품 ${P[k].foods.length}개` : ""}</span></a>`).join("")}
        </div>
        ${Object.keys(P).length ? "" : `<p class="muted">표현 데이터를 불러오지 못했어요.</p>`}`;
      Pixel.hydrate(view());
      return;
    }
    const items = phItems(t);
    const bests = store.get("leven-best", {});
    const MODES = { listen: "듣고 뜻 고르기", pick: "알맞은 문장 고르기", gap: "빈칸 채우기" };
    if (t.foods) MODES.food = "장보기 단어 쓰기";
    const other = arg === "school" ? "winkel" : "school";
    const foodCats = t.foods ? [...new Set(t.foods.map((f) => f.cat))] : [];
    const foodPic = (f) => (f.pic && Pixel.has(f.pic) ? f.pic : Pixel.has(f.nl) ? f.nl : "");
    const foodCard = (f) => `<div class="pcard food">${foodPic(f) ? sprite(foodPic(f), "pic") : `<div class="pic-none">${esc(f.nl.slice(0, 1))}</div>`}
      <div><span class="nl"><span class="art-${f.art}">${esc(f.art)}</span> ${esc(f.nl)}</span> ${say(f.art + " " + f.nl)}</div>
      <div class="small">${esc(f.ko)}</div>
      <div class="small muted">${f.pl && f.pl !== "-" ? `여러 개: <span class="nl">${esc(f.pl)}</span>` : "보통 셀 수 없어요"}</div>
      ${f.note ? `<div class="small muted">${esc(f.note)}</div>` : ""}</div>`;

    view().innerHTML = `
      ${head(t.emoji || "wafel", t.nl, t.ko + " · 실생활 표현")}
      <div class="set-tabs"><a class="btn" href="#leven">← 장면 고르기</a><a class="btn" href="#leven/${other}">${esc((P[other] || {}).ko || "")} →</a></div>
      <div class="mascot">${sprite("waffleFace")}<div class="bubble">${esc(t.easy || "")}</div></div>
      ${(t.intro || []).length ? `<ul class="rule-list">${t.intro.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul>` : ""}
      ${(t.terms || []).length ? `<div class="groupbox"><span class="legend">${sprite("book", "ico-s")} 먼저 알아둘 말</span>
        <dl class="terms">${t.terms.map((x) => `<dt><span class="nl">${esc(x[0])}</span> ${say(x[0])}</dt><dd>${esc(x[1])}</dd>`).join("")}</dl></div>` : ""}
      <div class="toc small">바로 가기:
        ${t.foods ? `<a href="#" data-jump="ph-foods">식료품 이름</a> ·` : ""}
        ${(t.sections || []).map((s, i) => `<a href="#" data-jump="ph-s${i}">${esc(s.title)}</a>`).join(" · ")}
        · <a href="#" data-jump="ph-dlg">대화 예시</a> · <a href="#" data-jump="ph-quiz">연습 문제</a></div>

      ${t.foods ? `<div class="groupbox" id="ph-foods"><span class="legend">식료품 이름 (${t.foods.length})</span>
        <p class="small">이름 앞 <span class="art-de">de</span> / <span class="art-het">het</span>도 같이 외워요. 마트에서는 <b>여러 개</b> 모양(복수형)도 자주 써요.</p>
        ${foodCats.map((c) => `<h3 class="cat-h">${esc(c)}</h3><div class="vis-pics">${t.foods.filter((f) => f.cat === c).map(foodCard).join("")}</div>`).join("")}
      </div>` : ""}

      ${(t.sections || []).map((s, i) => `<div class="groupbox" id="ph-s${i}"><span class="legend">${esc(s.title)}</span>
        <div class="ph-list">${(s.items || []).map((it) => `
          <div class="ph-row">${say(it.nl)}<div class="ph-text"><div class="nl ph-nl">${fmt(it.nl)}</div>
            <div class="ph-ko">${esc(it.ko)}</div>
            ${it.alt ? `<div class="small">이렇게도 말해요: <span class="nl">${esc(it.alt)}</span> ${say(it.alt)}</div>` : ""}
            ${it.note ? `<div class="small muted">💡 ${esc(it.note)}</div>` : ""}</div></div>`).join("")}</div>
      </div>`).join("")}

      <div class="groupbox" id="ph-dlg"><span class="legend">대화 예시</span>
        ${(t.dialogs || []).map((d) => `<div class="dlg-box"><div class="dlg-title">${esc(d.title)}</div>
          ${d.lines.map((l) => { const me = l.who === "ouder" || l.who === "klant"; return `
            <div class="chat ${me ? "me" : "you"}"><div class="who">${me ? "나" : (l.who === "juf" ? "선생님" : "점원")}</div>
              <div class="chat-b"><span class="nl">${fmt(l.nl)}</span> ${say(l.nl)}<div class="small">${esc(l.ko)}</div></div></div>`; }).join("")}
        </div>`).join("")}
      </div>

      ${t.tip ? `<div class="tip">${sprite("star", "ico")} ${esc(t.tip)}</div>` : ""}

      <div class="groupbox" id="ph-quiz"><span class="legend">연습 문제 (채점)</span>
        <div class="set-tabs" id="ph-modes">${Object.keys(MODES).map((m) => {
          const b = bests[arg + "-" + m];
          return `<button class="btn" data-m="${m}">${esc(MODES[m])}${b ? ` <span class="small">(${b.ok}/${b.total})</span>` : ""}</button>`; }).join("")}</div>
        <div id="ph-q"></div>
      </div>`;
    Pixel.hydrate(view());
    $$("[data-jump]").forEach((a) => (a.onclick = (e) => { e.preventDefault(); const el = $("#" + a.dataset.jump); if (el) el.scrollIntoView({ behavior: "smooth" }); }));

    const others = (it, key) => shuffle(items.filter((x) => x[key] !== it[key])).slice(0, 3).map((x) => x[key]);
    function mcOf(correct, wrongs) {
      const opts = shuffle([correct].concat(wrongs));
      return { opts, a: opts.indexOf(correct) };
    }
    function gapOf(it) {
      const raw = strip(it.nl);
      const marked = (it.nl.match(/\*([^*]+)\*/) || [])[1];
      const words = raw.split(/\s+/).map((w) => w.replace(/[.,!?¿]+$/g, "").replace(/^[¿¡]/, ""));
      const cands = words.filter((w) => w.length >= 4 && !/^(alstublieft|alsjeblieft)$/i.test(w));
      const word = marked && marked.indexOf(" ") < 0 ? marked : (cands.sort((a, b) => b.length - a.length)[0] || words[0]);
      const shown = raw.replace(new RegExp("(^|[^\\p{L}])" + word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![\\p{L}])", "u"), "$1_____");
      return { kind: "fill", q: `${esc(it.ko)}<div class="nl q-sent">${esc(shown)}</div>`, a: [word],
        hint: word[0] + "… (" + word.length + "글자)", ex: `<span class="nl">${esc(raw)}</span> ${say(raw)}` };
    }
    function build(m) {
      const pool = shuffle(m === "food" ? t.foods : items).slice(0, 10);
      return pool.map((it) => {
        if (m === "listen") {
          const o = mcOf(it.ko, others(it, "ko"));
          return { kind: "mc", q: `${say(it.nl)} 잘 듣고 뜻을 골라요. <span class="small muted">(${esc(it.sec)})</span>`, opts: o.opts, a: o.a, ex: `<span class="nl">${esc(strip(it.nl))}</span>` };
        }
        if (m === "pick") {
          const o = mcOf(strip(it.nl), others(it, "nl").map(strip));
          return { kind: "mc", q: `"${esc(it.ko)}" 를 네덜란드어로 하면?`, opts: o.opts, a: o.a, ex: it.note ? esc(it.note) : "" };
        }
        if (m === "gap") return gapOf(it);
        const ans = [it.art + " " + it.nl];
        if (it.alt) ans.push(it.art + " " + it.alt);
        return { kind: "fill", q: `${foodPic(it) ? sprite(foodPic(it), "pic-s") : ""} <b>${esc(it.ko)}</b> — de/het까지 써요`,
          a: ans, hint: "de ... / het ...",
          ex: `${it.pl && it.pl !== "-" ? `여러 개: <span class="nl">${esc(it.pl)}</span>` : ""} ${say(it.art + " " + it.nl)}` };
      });
    }
    function run(m) {
      $$("#ph-modes .btn").forEach((b) => b.classList.toggle("active", b.dataset.m === m));
      Quiz($("#ph-q"), build(m), {
        src: t.ko + " · " + MODES[m],
        regen: () => build(m),
        onScore(ok, total) {
          const all = store.get("leven-best", {});
          const k = arg + "-" + m;
          if (!all[k] || all[k].ok < ok) { all[k] = { ok, total }; store.set("leven-best", all); }
        }
      });
    }
    $$("#ph-modes .btn").forEach((b) => (b.onclick = () => run(b.dataset.m)));
    run("listen");
  };

  /* =======================================================
     로그인 · 피드백 · 관리자  (js/cloud.js)
     ======================================================= */
  const Cloud = () => window.WafelCloud;

  function modal(title, html, mount) {
    const d = document.createElement("div");
    d.className = "dialog-backdrop";
    d.innerHTML = `<div class="window dialog wide" role="dialog" aria-label="${esc(title)}">
      <div class="titlebar"><span class="title-text">${esc(title)}</span><span class="tb-btns"><button class="tb-btn" data-x aria-label="닫기">×</button></span></div>
      <div class="form-body">${html}</div></div>`;
    document.body.appendChild(d);
    const close = () => d.remove();
    $$("[data-x]", d).forEach((b) => (b.onclick = close));
    d.addEventListener("click", (e) => { if (e.target === d) close(); });
    d.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    Pixel.hydrate(d);
    if (mount) mount(d, close);
    const f = $("input, textarea", d); if (f) f.focus();
    return d;
  }
  const notReady = `<div class="dlg-body">${sprite("warn")}<div><b>아직 준비 중이에요.</b><br>
    <span class="small">지금은 학습 기록이 <b>이 기기(브라우저)</b>에 저장돼요. 로그인과 피드백은 곧 열려요!</span></div></div>`;

  const SYNC_TEXT = { off: "이 기기에만 저장", loading: "연결 중…", out: "로그인하면 어디서나 이어서 공부해요",
    syncing: "저장 중…", saved: "모든 기기에 저장됨", error: "저장 실패 (인터넷 확인)" };

  function accountDialog() {
    const C = Cloud();
    if (!C || !C.configured) { modal("Login", notReady); return; }
    const u = C.user;
    if (u) {
      modal("Mijn account", `
        <div class="dlg-body">${sprite("user")}<div><b>안녕하세요, ${esc(u.displayName || (u.email || "").split("@")[0])}님!</b><br>
          <span class="small">${esc(u.email || "")}</span><br>
          <span class="small">학습 기록: <b id="acc-sync">${esc(SYNC_TEXT[C.state] || "")}</b></span></div></div>
        <p class="small">레슨 점수, 단어 트레이너 진도, 오답노트, de/het 기록이 계정에 저장돼요. 다른 기기에서 같은 계정으로 로그인하면 이어서 할 수 있어요.</p>
        ${C.isAdmin ? `<p><a class="btn" href="#admin" data-x>${sprite("mail", "ico")} 받은 피드백 보기 ${C.unread ? `(새 글 ${C.unread})` : ""}</a></p>` : ""}
        <div class="dlg-actions"><button class="btn" id="acc-sync-now">지금 동기화</button> <button class="btn" id="acc-out">로그아웃</button> <button class="btn" data-x>닫기</button></div>`,
        (d, close) => {
          $("#acc-sync-now", d).onclick = () => { $("#acc-sync", d).textContent = "저장 중…"; C.syncNow().then(() => { $("#acc-sync", d).textContent = SYNC_TEXT[C.state]; }); };
          $("#acc-out", d).onclick = () => { C.signOut().then(close); };
        });
      return;
    }
    modal("Login", `
      <div class="mascot small-m">${sprite("waffleFace")}<div class="bubble">로그인하면 공부한 기록이 저장돼서, <b>휴대폰·컴퓨터 어디서나</b> 이어서 공부할 수 있어요. (로그인 안 해도 이 기기에서는 그대로 쓸 수 있어요.)</div></div>
      <button class="btn big google" id="lg-google"><span class="g">G</span> Google 계정으로 로그인</button>
      <div class="or"><span>또는 이메일로</span></div>
      <label class="fld">이메일<input type="email" id="lg-email" autocomplete="email" placeholder="me@example.com"></label>
      <label class="fld">비밀번호 <span class="small muted">(6글자 이상)</span><input type="password" id="lg-pw" autocomplete="current-password"></label>
      <label class="fld" id="lg-name-row" hidden>이름 (선택)<input type="text" id="lg-name" autocomplete="nickname" maxlength="30"></label>
      <div class="form-msg" id="lg-msg" role="status"></div>
      <div class="dlg-actions"><button class="btn primary" id="lg-in">로그인</button> <button class="btn" id="lg-up">새로 가입</button> <button class="btn" id="lg-reset">비밀번호 찾기</button></div>`,
      (d, close) => {
        const msg = (t, ok) => { const m = $("#lg-msg", d); m.textContent = t; m.className = "form-msg " + (ok ? "ok" : "bad"); };
        const val = (id) => $(id, d).value.trim();
        const done = () => { close(); };
        const fail = (e) => msg(C.message(e));
        $("#lg-google", d).onclick = () => { msg("로그인 창을 여는 중…", true); C.signInGoogle().then(done, fail); };
        $("#lg-in", d).onclick = () => C.signInEmail(val("#lg-email"), $("#lg-pw", d).value).then(done, fail);
        $("#lg-up", d).onclick = () => {
          const row = $("#lg-name-row", d);
          if (row.hidden) { row.hidden = false; msg("이름을 적고 한 번 더 '새로 가입'을 눌러 주세요. (이름은 비워도 돼요)", true); return; }
          C.signUpEmail(val("#lg-email"), $("#lg-pw", d).value, val("#lg-name")).then(done, fail);
        };
        $("#lg-reset", d).onclick = () => {
          if (!val("#lg-email")) { msg("이메일을 먼저 적어 주세요."); return; }
          C.resetPassword(val("#lg-email")).then(() => msg("비밀번호를 다시 만드는 메일을 보냈어요. 메일함을 확인해 주세요.", true), fail);
        };
        $("#lg-pw", d).addEventListener("keydown", (e) => { if (e.key === "Enter") $("#lg-in", d).click(); });
      });
  }

  let lastFeedback = 0;
  function feedbackDialog() {
    const C = Cloud();
    if (!C || !C.configured) { modal("Feedback", notReady); return; }
    modal("Feedback", `
      <div class="mascot small-m">${sprite("waffleFace")}<div class="bubble">불편한 점, 틀린 네덜란드어, 있었으면 하는 기능… 무엇이든 알려 주세요! 글은 <b>관리자에게만</b> 전달돼요.</div></div>
      <label class="fld">제목<input type="text" id="fb-title" maxlength="100" placeholder="예: 3과 문제 7번 정답이 이상해요"></label>
      <label class="fld">내용<textarea id="fb-body" rows="7" maxlength="3000" placeholder="자세히 적어 주시면 고치기 쉬워요."></textarea></label>
      <div class="small muted">${C.user ? `보내는 사람: ${esc(C.user.email || C.user.displayName || "")} (로그인 계정)` : "로그인하지 않았어요. 답장이 필요하면 내용에 연락처를 적어 주세요."}</div>
      <div class="form-msg" id="fb-msg" role="status"></div>
      <div class="dlg-actions"><button class="btn primary" id="fb-send">${sprite("mail", "ico")} 보내기</button> <button class="btn" data-x>취소</button></div>`,
      (d, close) => {
        const msg = (t, ok) => { const m = $("#fb-msg", d); m.textContent = t; m.className = "form-msg " + (ok ? "ok" : "bad"); };
        $("#fb-send", d).onclick = () => {
          const title = $("#fb-title", d).value.trim(), body = $("#fb-body", d).value.trim();
          if (!title) { msg("제목을 적어 주세요."); return; }
          if (!body) { msg("내용을 적어 주세요."); return; }
          if (Date.now() - lastFeedback < 30000) { msg("조금 전에 보냈어요. 30초 뒤에 다시 보내 주세요."); return; }
          $("#fb-send", d).disabled = true; msg("보내는 중…", true);
          C.sendFeedback(title, body).then(() => {
            lastFeedback = Date.now();
            $(".form-body", d).innerHTML = `<div class="dlg-body">${sprite("check")}<div><b>Bedankt! 고마워요.</b><br><span class="small">피드백이 관리자에게 전달됐어요.</span></div></div>
              <div class="dlg-actions"><button class="btn" data-x>닫기</button></div>`;
            Pixel.hydrate(d); $$("[data-x]", d).forEach((b) => (b.onclick = close));
          }, (e) => { $("#fb-send", d).disabled = false; msg(C.message(e)); });
        };
      });
  }

  pages.admin = function () {
    const C = Cloud();
    view().innerHTML = `${head("mail", "Feedback inbox", "받은 피드백 (관리자 전용)")}<div id="adm">불러오는 중…</div>`;
    Pixel.hydrate(view());
    const box = $("#adm");
    if (!C || !C.configured) { box.innerHTML = notReady; Pixel.hydrate(box); return; }
    C.ready.then(() => {
      if (!C.user) { box.innerHTML = `<p>관리자 계정으로 로그인해 주세요.</p><button class="btn" id="adm-login">로그인</button>`; $("#adm-login").onclick = accountDialog; return; }
      C.listFeedback().then((list) => {
        const fmtDate = (x) => (x.createdAt && x.createdAt.toDate ? x.createdAt.toDate().toLocaleString("ko-KR") : "");
        box.innerHTML = `<p class="small">모두 ${list.length}개 · 안 읽음 ${list.filter((x) => !x.read).length}개</p>` + (list.length ? list.map((x) => `
          <div class="fb-item ${x.read ? "read" : "new"}" data-id="${esc(x.id)}">
            <div class="fb-head"><b>${x.read ? "" : "● "}${esc(x.title)}</b><span class="small muted">${esc(fmtDate(x))}</span></div>
            <div class="fb-body">${esc(x.body)}</div>
            <div class="small muted">보낸 사람: ${esc(x.name || "")} ${esc(x.email || (x.uid ? "" : "익명"))} · 페이지: ${esc(x.page || "")}</div>
            <div class="fb-act"><button class="btn" data-read="${x.read ? 0 : 1}">${x.read ? "안 읽음으로" : "읽음으로"}</button> <button class="btn" data-del>삭제</button></div>
          </div>`).join("") : `<p class="muted">아직 받은 피드백이 없어요.</p>`);
        $$(".fb-item", box).forEach((el) => {
          const id = el.dataset.id;
          $("[data-read]", el).onclick = (e) => C.markFeedback(id, e.target.dataset.read === "1").then(pages.admin);
          $("[data-del]", el).onclick = () => { if (confirm("이 피드백을 지울까요?")) C.deleteFeedback(id).then(pages.admin); };
        });
      }, (e) => {
        box.innerHTML = `<div class="dlg-body">${sprite("warn")}<div><b>관리자만 볼 수 있어요.</b><br><span class="small">${esc(C.message(e))}</span></div></div>`;
        Pixel.hydrate(box);
      });
    });
  };

  function paintAccount() {
    const C = Cloud();
    const b = $("#btn-login"); if (!b) return;
    const u = C && C.user;
    const name = u ? (u.displayName || (u.email || "").split("@")[0] || "Account") : "Login";
    $(".lbl", b).textContent = name.length > 8 ? name.slice(0, 7) + "…" : name;
    b.classList.toggle("on", !!u);
    b.title = u ? "내 계정 · " + (SYNC_TEXT[C.state] || "") : "로그인하고 학습 기록 저장하기";
    const st = $("#st-sync");
    if (st) st.textContent = C ? (u ? "☁ " : "") + (SYNC_TEXT[C.state] || "") + (C.isAdmin && C.unread ? ` · 새 피드백 ${C.unread}` : "") : "";
  }

  /* ---------------- ABOUT ---------------- */
  pages.over = function () {
    view().innerHTML = `
      ${head("globe", "Over deze site", "이 사이트에 대해")}
      <div class="hero"><div>
        <p>벨기에에 사는 한국인을 위한 네덜란드어(A1–A2) 공부 사이트예요. 문법 규칙 → 예문 → 연습문제 → 채점 → 오답 복습 순서로 공부해요.</p>
        <ul class="rule-list">
          <li><b>Lessen</b>: 12개 문법 카테고리 (learning_objective.md 기준)</li>
          <li><b>Woordenlijst</b>: Perfectum 동사 ${VERBS.length}개 (학습자료 PDF)</li>
          <li><b>de/het</b>: 명사 ${NOUNS.length}개로 관사·복수형 연습</li>
          <li><b>Tijdmachine</b>: 동사를 현재 / 단순과거 / 현재완료 / 미래로 변환</li>
          <li><b>Foutenboek</b>: 틀린 문제 자동 저장</li>
          <li><b>Praktisch</b>: 학교(학부모-선생님) · 마트 장보기 실생활 표현</li>
          <li><b>Login</b>: 구글 또는 이메일로 로그인하면 학습 기록이 계정에 저장돼요</li>
          <li><b>Feedback</b>: 툴바의 Feedback 버튼으로 의견을 보내 주세요 (관리자에게만 전달)</li>
        </ul>
        <p class="small muted">채점은 대소문자, 끝의 마침표, ë 같은 악센트 차이를 너그럽게 봐요. 대신 정확한 철자를 함께 보여줘요.</p>
      </div><div class="hero-art">${sprite("computer", "", "")}<div class="nl" style="font-size:22px">hallo!</div></div></div>`;
    Pixel.hydrate(view());
    $(".hero-art img").style.width = "160px";
  };

  pages.notfound = function () {
    view().innerHTML = `${head("warn", "404 Not Found", "페이지를 찾을 수 없어요")}
      <p>The requested URL was not found on this server.</p><a class="btn" href="#home">Home</a>`;
    Pixel.hydrate(view());
  };

  function head(icon, title, sub) {
    return `<div class="page-head">${sprite(icon)}<div><h1>${esc(title)}</h1><div class="sub">${esc(sub)}</div></div></div>`;
  }

  /* =======================================================
     ROUTER + CHROME
     ======================================================= */
  const TITLES = { home: "Home", lessen: "Lessen", les: "Les", oefenen: "Oefenen", woorden: "Woordenlijst",
    perfectum: "Perfectum Quiz", trainer: "Woordentrainer", tijdmachine: "Tijdmachine", dehet: "de of het?", fouten: "Foutenboek", over: "Over", leven: "Praktisch", admin: "Feedback inbox" };

  function route() {
    const raw = location.hash.replace(/^#\/?/, "") || "home";
    const [pathPart, qs] = raw.split("?");
    const [name, arg] = pathPart.split("/");
    const fn = pages[name] || pages.notfound;
    const thr = $(".throbber");
    thr.classList.add("busy");
    $("#status").textContent = "Contacting host: www.korean-waffle.be...";
    setTimeout(() => {
      fn(arg, new URLSearchParams(qs || ""));
      thr.classList.remove("busy");
      $("#status").textContent = "Document: Done";
      $(".viewport").scrollTop = 0;
    }, 180);
    $("#loc").value = HOST + (raw === "home" ? "" : raw);
    document.title = "Wafel Navigator - [" + (TITLES[name] || "404") + "]";
    $("#wintitle").textContent = document.title;
    $$(".tool[data-route]").forEach((t) => t.classList.toggle("active", t.dataset.route === name));
  }

  function aboutDialog() {
    const d = document.createElement("div");
    d.className = "dialog-backdrop";
    d.innerHTML = `<div class="window dialog" style="min-height:0">
      <div class="titlebar"><span class="title-text">About Wafel Navigator</span><span class="tb-btns"><button class="tb-btn" data-x>×</button></span></div>
      <div class="dlg-body">${sprite("waffleFace")}<div><b>Wafel Navigator 1.0</b><br>Copyright © 1996–2026 @korean_waffle<br>
        <span class="small">네덜란드어 학습용 브라우저. 와플을 굽는 마음으로 한 문제씩!</span></div></div>
      <div class="dlg-actions"><button class="btn" data-x>OK</button></div></div>`;
    document.body.appendChild(d);
    Pixel.hydrate(d);
    $$("[data-x]", d).forEach((b) => (b.onclick = () => d.remove()));
    d.addEventListener("click", (e) => { if (e.target === d) d.remove(); });
  }

  function init() {
    // visitor counter (once per session)
    try {
      if (!sessionStorage.getItem("wafel:seen")) {
        sessionStorage.setItem("wafel:seen", "1");
        store.set("visits", store.get("visits", 1336) + 1);
      }
    } catch (e) { /* ignore */ }

    document.documentElement.style.setProperty("--tile", `url(${Pixel.url("waffleTile")})`);
    Pixel.hydrate(document);

    $("#btn-back").onclick = () => history.back();
    $("#btn-fwd").onclick = () => history.forward();
    $$("[data-go]").forEach((b) => (b.onclick = () => (location.hash = b.dataset.go)));
    $$("[data-about]").forEach((b) => (b.onclick = aboutDialog));
    $("#loc").addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const v = $("#loc").value.replace(HOST, "").replace(/^https?:\/\/[^/]+\/?(nl\/)?/, "");
      location.hash = "#" + (v || "home");
    });
    document.addEventListener("mouseover", (e) => {
      const a = e.target.closest && e.target.closest("a[href^='#']");
      if (a) $("#status").textContent = HOST + a.getAttribute("href").slice(1);
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest && e.target.closest("a[href^='#']")) $("#status").textContent = "Document: Done";
    });
    $("#clock").textContent = new Date().toLocaleTimeString("nl-BE", { hour: "2-digit", minute: "2-digit" });
    setInterval(() => { $("#clock").textContent = new Date().toLocaleTimeString("nl-BE", { hour: "2-digit", minute: "2-digit" }); }, 30000);

    document.addEventListener("click", (e) => {
      const b = e.target.closest && e.target.closest("[data-say]");
      if (b) { e.preventDefault(); e.stopPropagation(); speak(b.dataset.say); }
    }, true);
    if ($("#btn-login")) $("#btn-login").onclick = accountDialog;
    if ($("#btn-feedback")) $("#btn-feedback").onclick = feedbackDialog;
    if (window.WafelCloud) WafelCloud.onChange(paintAccount);
    paintAccount();
    // 다른 기기의 기록을 받아오면 지금 화면을 새로 그려요 (입력 중인 문제는 그대로 둠)
    window.addEventListener("wafel:synced", () => {
      updateBadge();
      const busy = $("#page input:not([disabled]):not([type=radio]):not([type=checkbox])") && $("#page input:focus");
      if (!busy) route();
    });
    window.addEventListener("hashchange", route);
    route();
  }

  // exposed for tests
  window.WafelApp = { cleanSay, audioKey, norm, checkItem, makePerfectumItems, tdEligible, tdInfo, perfForms, TM_FIELDS };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
