# 레슨 데이터 작성 규칙 (A1 학습자용)

## 독자
- 네덜란드어를 **처음 배우는 A1 한국인**(벨기에 거주). 문법 용어를 모른다고 가정한다.
- 영어 문법 지식도 기대하지 않는다. 비유는 한국어/영어(the, a)로 아주 가볍게만.

## 글쓰기 원칙
1. **쉬운 말**: 한 문장에 개념 하나. 문장은 짧게. "~해요"체, 다정하고 차분한 톤.
2. **용어는 꼭 풀어서**: 관사, 어간, 과거분사, 조동사, 도치처럼 처음 나오는 용어는 `terms`에서 먼저 설명한다. 본문에서는 "과거분사(완료형에 쓰는 동사 모양)"처럼 괄호 풀이를 한 번 더 붙여도 좋다.
3. **단계별로**: 한 단계에 규칙 하나 + 예문 2~3개 + (가능하면) 그림 하나.
4. **예문은 짧고 쉬운 A1 단어**로. 모든 예문에 한국어 뜻.
5. **정확성**: 모든 네덜란드어(관사, 복수형, 동사 변화, 어순)는 표준 네덜란드어로 정확해야 한다. 플랑드르 단어(gsm, zetel, pintje)는 괜찮다.
6. 기존 문제(mc, fill)는 유지하되, 너무 어렵거나 A1 범위를 벗어나면 쉬운 문제로 바꿔도 된다. 해설(`ex`)은 **"왜 그런지"를 1~2문장의 쉬운 말**로.

## 데이터 형식 (브라우저 JS, ES5 문법, 큰따옴표 문자열)

```js
{
  id: 1,
  ko: "명사와 관사",
  nl: "Zelfstandige naamwoorden en lidwoorden",
  emoji: "huis",              // 레슨 대표 그림 (아래 그림 목록에서)
  easy: "한 줄 요약. 아주 쉬운 말로.",
  why: "이걸 왜 배우는지 1~2문장 (생활 장면으로).",
  terms: [ ["관사", "명사 앞에 붙는 작은 말. 영어의 the 같은 것."], ... ],   // 2~5개
  steps: [
    {
      title: "1단계. de와 het, 두 가지가 있어요",
      body: "쉬운 설명 2~4문장. <b>강조</b>, <span class='nl'>네덜란드어</span> 사용 가능.",
      visual: { ...아래 그림 타입 중 하나... },   // 선택
      ex: [ ["de tafel", "탁자"], ["het huis", "집"] ]                // 2~3개
    }
  ],                                                  // 3~5단계
  mistakes: [ "한국인이 자주 하는 실수와 고치는 법 (짧게)" ],   // 2~3개
  rules: [ "요약 정리용 짧은 규칙" ],                   // 기존 rules 유지/다듬기
  table: { head: [...], rows: [[...]] },              // 선택 (활용표)
  examples: [ ["Dutch.", "한국어"] ],                 // 4~6
  tip: "외우기 팁 한 줄",
  drill: "#dehet",                                    // 기존 값 유지
  mc: [ { q, opts, a, ex } ],    // 정확히 5개
  fill: [ { q, a: [...], ex, hint } ]  // 정확히 5개
}
```

## 그림(visual) 타입 — 이것만 쓸 수 있다

1. **blocks** — 단어 블록. 어순, 동사 위치, 분리동사 설명에 사용.
   ```js
   { type: "blocks", caption: "동사는 항상 2번 자리!",
     rows: [ { words: ["Vandaag", "werk", "ik", "thuis"], hl: [1], hl2: [], num: true, ko: "오늘 나는 집에서 일해요" } ] }
   ```
   - `hl`: 주황색 강조할 칸 번호(0부터) — 보통 활용된 동사
   - `hl2`: 파란색 강조 칸 — 문장 끝으로 가는 부분(과거분사, 동사원형, 분리 접두사)
   - `num: true` 이면 칸 위에 1, 2, 3… 자리 번호 표시
   - `ko`: 줄 아래 한국어 뜻 (선택)
2. **timeline** — 과거·현재·미래 시간선. 시제 설명에 사용.
   ```js
   { type: "timeline", caption: "...", marks: [ { pos: "past", nl: "Ik werkte.", ko: "일했어요" }, { pos: "now", nl: "Ik werk.", ko: "일해요" }, { pos: "future", nl: "Ik ga werken.", ko: "일할 거예요" } ] }
   ```
   pos: "past" | "now" | "future"
3. **formula** — 공식 칩. 예: `{ type: "formula", parts: ["ge", "+", "werk", "+", "t"], result: "gewerkt", caption: "..." }`
4. **twobox** — 두 그룹 비교. 예: de/het, hebben/zijn, dit/dat.
   ```js
   { type: "twobox", left: { title: "DE", note: "대부분의 명사", items: [ ["tafel", "탁자", "tafel"] ] }, right: { title: "HET", note: "...", items: [ ["huis", "집", "huis"] ] } }
   ```
   items: [네덜란드어, 한국어, 그림이름(선택)]
5. **scale** — 커지는 크기 비교(비교급). `{ type: "scale", items: [ ["klein", "작은"], ["kleiner", "더 작은"], ["kleinst", "가장 작은"] ], grow: false }` (grow:false면 점점 작아짐)
6. **neardist** — 가까운 것/먼 것. `{ type: "neardist", near: ["dit huis", "이 집"], far: ["dat huis", "저 집"], pic: "huis" }`
7. **pictures** — 그림 단어 카드. `{ type: "pictures", items: [ ["huis", "het huis", "집"], ["fiets", "de fiets", "자전거"] ] }` (첫 칸은 그림 이름)
8. **softketchup** — softketchup 글자 판. `{ type: "softketchup" }`

## 그림 이름 목록 (pictures, twobox, neardist, emoji에 쓸 수 있는 것)
huis, boek, wafel, fiets, auto, tafel, koffie, meisje, jongen, bal, sleutel, kat, hond, appel, brood, trein, klok, ster, potlood, brief, deur, bed, telefoon, schoen
