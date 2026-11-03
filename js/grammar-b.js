/* Grammar lessons 7-12 (A1, easy Korean explanations) */
window.GRAMMAR_B = [
  {
    id: 7,
    ko: "문장 어순",
    nl: "Woordvolgorde",
    emoji: "trein",
    easy: "네덜란드어 문장에서 동사는 언제나 두 번째 자리에 와요.",
    why: "단어를 다 알아도 순서가 틀리면 어색하게 들려요. '오늘 나는 일해요', '내일 일해?' 같은 매일 쓰는 문장을 바로 말할 수 있게 돼요.",
    intro: "네덜란드어 문장의 가장 중요한 규칙은 '동사는 두 번째 자리'예요. 이것만 지켜도 문장이 훨씬 자연스러워져요.",
    terms: [
      ["어순", "문장 안에서 단어가 놓이는 순서예요."],
      ["주어", "문장의 주인공이에요. '나는', '그는'처럼 '~은/는, ~이/가'에 해당해요. 예: ik, hij"],
      ["동사", "'일하다, 살다, 먹다'처럼 움직임이나 상태를 나타내는 말이에요. 주어에 따라 모양이 바뀌어요. 예: ik werk, hij werkt"],
      ["도치", "주어와 동사의 순서가 서로 바뀌는 것이에요. ik werk → werk ik"],
      ["부정문", "'안 ~해요, ~없어요'처럼 아니라고 말하는 문장이에요. niet이나 geen을 써요."]
    ],
    steps: [
      {
        title: "1단계. 동사는 2번 자리예요",
        body: "네덜란드어 평서문(보통 말하는 문장)에서 <b>동사는 항상 두 번째 자리</b>에 와요. 한국어는 동사가 맨 끝에 오지만, 네덜란드어는 앞쪽 2번 칸이에요. 단어 하나가 아니라 <b>덩어리 하나가 한 자리</b>라는 것도 기억해 주세요.",
        visual: { type: "blocks", caption: "주황색 동사는 언제나 2번 자리!", rows: [
          { words: ["Ik", "werk", "vandaag", "thuis"], hl: [1], num: true, ko: "나는 오늘 집에서 일해요" },
          { words: ["Wij", "eten", "vaak", "friet"], hl: [1], num: true, ko: "우리는 감자튀김을 자주 먹어요" }
        ] },
        ex: [["Ik werk vandaag thuis.", "나는 오늘 집에서 일해요."], ["Wij eten vaak friet.", "우리는 감자튀김을 자주 먹어요."], ["Mijn zus woont in Gent.", "우리 언니는 겐트에 살아요."]]
      },
      {
        title: "2단계. 다른 말이 먼저 오면 주어가 뒤로 가요 (도치)",
        body: "'오늘', '벨기에에서'처럼 주어가 아닌 말이 맨 앞에 올 수도 있어요. 그래도 동사는 <b>2번 자리를 지켜요</b>. 그래서 주어는 동사 <b>뒤</b>(3번 자리)로 밀려나요. 이렇게 주어와 동사 순서가 바뀌는 것을 <b>도치</b>라고 해요.",
        visual: { type: "blocks", caption: "1번에 시간이나 장소가 오면, 주어는 동사 뒤로!", rows: [
          { words: ["Vandaag", "werk", "ik", "thuis"], hl: [1], num: true, ko: "오늘 나는 집에서 일해요" },
          { words: ["In Gent", "woon", "ik"], hl: [1], num: true, ko: "겐트에 나는 살아요" }
        ] },
        ex: [["Vandaag werk ik thuis.", "오늘 나는 집에서 일해요."], ["In België eten we vaak friet.", "벨기에에서 우리는 감자튀김을 자주 먹어요."], ["Morgen ga ik naar Brussel.", "내일 나는 브뤼셀에 가요."]]
      },
      {
        title: "3단계. 질문할 때는 동사가 앞으로 와요",
        body: "'예/아니오'로 대답하는 질문은 <b>동사가 맨 앞</b>(1번 자리)에 와요. '어디, 언제' 같은 의문사가 있으면 <b>의문사 → 동사 → 주어</b> 순서예요. 그리고 <span class='nl'>jij / je</span>가 동사 바로 뒤에 오면 동사 끝의 <b>-t가 빠져요</b>. (hij나 u 뒤에서는 -t가 그대로 있어요.)",
        visual: { type: "blocks", caption: "질문: 동사가 1번! 의문사가 있으면 동사는 2번!", rows: [
          { words: ["Werk", "je", "morgen"], hl: [0], num: true, ko: "너 내일 일해?" },
          { words: ["Waar", "woon", "je"], hl: [1], num: true, ko: "너 어디 살아?" }
        ] },
        ex: [["Werk je morgen?", "너 내일 일해?"], ["Waar woon je?", "너 어디 살아?"], ["Werkt hij morgen?", "그는 내일 일해? (hij 뒤라 -t가 그대로)"]]
      },
      {
        title: "4단계. 가운데 순서: 시간 → 방법 → 장소",
        body: "동사 뒤에 정보가 여러 개 오면 보통 <b>언제 → 어떻게 → 어디로</b> 순서로 말해요. '내일, 기차로, 브뤼셀에'처럼 차례대로 놓으면 돼요.",
        visual: { type: "blocks", caption: "언제(morgen) → 어떻게(met de trein) → 어디로(naar Brussel)", rows: [
          { words: ["Ik", "ga", "morgen", "met de trein", "naar Brussel"], hl: [1], num: true, ko: "나는 내일 기차로 브뤼셀에 가요" }
        ] },
        ex: [["Ik ga morgen met de trein naar Brussel.", "나는 내일 기차로 브뤼셀에 가요."], ["We gaan vanavond met de fiets naar huis.", "우리는 오늘 저녁 자전거로 집에 가요."]]
      },
      {
        title: "5단계. '안 ~해요'는 niet, '~없어요'는 geen",
        body: "<b>niet</b>은 '안 ~해요'예요. 짧은 문장에서는 보통 <b>문장 끝</b>에, 형용사(moe 같은 꾸미는 말) 앞에 와요. <b>geen</b>은 '하나도 없는'이라는 뜻이에요. <span class='nl'>een</span> + 명사나 관사(de, het, een)가 없는 명사를 부정할 때 써요.",
        visual: { type: "twobox",
          left: { title: "NIET", note: "동작이나 상태를 부정", items: [["Ik werk morgen niet.", "나는 내일 일 안 해요."], ["Ik ben niet moe.", "나는 안 피곤해요."]] },
          right: { title: "GEEN", note: "een + 명사, 관사 없는 명사를 부정", items: [["Ik heb geen auto.", "나는 차가 없어요.", "auto"], ["Ik drink geen koffie.", "나는 커피를 안 마셔요.", "koffie"]] } },
        ex: [["Ik werk morgen niet.", "나는 내일 일 안 해요."], ["Ik ben niet moe.", "나는 안 피곤해요."], ["Ik heb geen tijd.", "시간이 없어요."]]
      }
    ],
    mistakes: [
      "<span class='nl'>Vandaag ik werk.</span> ✗ → <span class='nl'>Vandaag werk ik.</span> ✓ 맨 앞에 다른 말이 와도 동사는 2번 자리예요.",
      "<span class='nl'>Werkt je morgen?</span> ✗ → <span class='nl'>Werk je morgen?</span> ✓ je가 동사 뒤에 오면 -t를 빼요.",
      "<span class='nl'>Ik heb niet auto.</span> ✗ → <span class='nl'>Ik heb geen auto.</span> ✓ 명사를 '없다'고 할 때는 geen이에요."
    ],
    rules: [
      "<b>V2 규칙</b>: 평서문에서 변하는 동사는 항상 <b>두 번째 자리</b>에 와요. <span class='nl'>Ik werk vandaag thuis.</span>",
      "<b>도치</b>: 주어가 아닌 말(시간, 장소 등)이 맨 앞에 오면 주어가 동사 뒤로 가요. <span class='nl'>Vandaag werk ik thuis.</span>",
      "예/아니오 의문문은 <b>동사가 맨 앞</b>: <span class='nl'>Werk je morgen?</span> 의문사 의문문은 의문사 + 동사 + 주어: <span class='nl'>Waar woon je?</span>",
      "jij/je가 동사 뒤에 오면 동사의 -t가 빠져요. <span class='nl'>Werk je? Woon jij hier?</span>",
      "가운데 순서는 보통 <b>시간 → 방법 → 장소</b>: <span class='nl'>Ik ga morgen met de trein naar Brussel.</span>",
      "<b>niet</b>은 짧은 문장에서는 끝에, 형용사, 장소, 전치사구, 두 번째 동사 앞에 와요: <span class='nl'>Ik werk morgen niet. Ik ben niet moe. Ik heb niet gewerkt.</span>",
      "관사 없는 명사나 een + 명사를 부정할 때는 <b>geen</b>: <span class='nl'>Ik heb geen auto.</span>"
    ],
    examples: [
      ["Vandaag werk ik thuis.", "오늘 나는 집에서 일해요."],
      ["In België eten we vaak friet.", "벨기에에서 우리는 감자튀김을 자주 먹어요."],
      ["Werk je morgen?", "내일 일해?"],
      ["Waar woon je?", "어디 살아?"],
      ["Ik werk morgen niet.", "나는 내일 일 안 해요."],
      ["Ik heb geen tijd.", "시간이 없어요."]
    ],
    tip: "문장 맨 앞에 무엇이 오든, 동사는 두 번째 자리를 지켜요.",
    mc: [
      { q: "Vandaag ___.", opts: ["ik werk thuis", "werk ik thuis", "thuis ik werk"], a: 1, ex: "Vandaag이 1번 자리를 차지했어요. 그래서 동사 werk가 2번, 주어 ik는 그 뒤에 와요." },
      { q: "Waar ___?", opts: ["woon je", "je woont", "woont je"], a: 0, ex: "의문사 Waar 다음에 바로 동사가 와요. je가 동사 뒤에 있으니 -t가 빠져서 woon이에요." },
      { q: "Ik ben ___. (나는 안 피곤해요)", opts: ["moe niet", "geen moe", "niet moe"], a: 2, ex: "moe는 명사가 아니라 상태를 꾸미는 말이라 niet을 써요. niet은 그 말 바로 앞에 와요." },
      { q: "Ik heb ___ auto.", opts: ["niet", "geen"], a: 1, ex: "'차가 없다'처럼 명사(een auto)를 부정할 때는 geen을 써요." },
      { q: "너 내일 일해?", opts: ["Werk je morgen?", "Werkt je morgen?", "Morgen je werkt?"], a: 0, ex: "예/아니오 질문은 동사가 맨 앞이에요. 뒤에 je가 오니 -t를 빼서 Werk예요." },
      { q: "그녀는 자주 집에서 일해요.", opts: ["Zij vaak werkt thuis.", "Zij werkt vaak thuis.", "Vaak zij werkt thuis."], a: 1, ex: "주어 Zij가 1번이니 동사 werkt는 바로 2번 자리예요. vaak는 동사 뒤에 와요." },
      { q: "Morgen ___ naar Brussel.", opts: ["ik ga", "ga ik", "gaat ik"], a: 1, ex: "Morgen이 1번 자리를 차지했어요. 그래서 동사 ga가 2번, 주어 ik는 동사 뒤에 와요." },
      { q: "Waar ___ hij?", opts: ["werk", "werkt", "werken"], a: 1, ex: "-t가 빠지는 건 jij/je 뒤에서만이에요. hij 뒤에서는 -t가 그대로 있어서 werkt예요." },
      { q: "나는 내일 기차로 겐트에 가요.", opts: ["Ik ga naar Gent morgen met de trein.", "Ik ga morgen met de trein naar Gent.", "Ik morgen ga met de trein naar Gent."], a: 1, ex: "동사 ga는 2번 자리예요. 그 뒤는 언제(morgen) → 어떻게(met de trein) → 어디로(naar Gent) 순서예요." },
      { q: "Ik drink ___ bier. (나는 맥주를 안 마셔요)", opts: ["niet", "geen"], a: 1, ex: "bier는 앞에 관사가 없는 명사예요. 이런 명사를 부정할 때는 geen을 써요." },
      { q: "우리는 매일 일해요.", opts: ["Wij werken elke dag.", "Wij elke dag werken.", "Elke dag wij werken."], a: 0, ex: "주어 Wij가 1번, 동사 werken이 2번이에요. 한국어처럼 동사를 끝에 두면 안 돼요." },
      { q: "Na het werk ___. (일 끝나고 나는 요리해요)", opts: ["ik kook", "kook ik", "koken ik"], a: 1, ex: "Na het werk가 한 덩어리로 1번 자리예요. 동사 kook이 2번, 주어 ik는 3번으로 가요." },
      { q: "너 커피 마셔? (jij)", opts: ["Drinkt jij koffie?", "Drink jij koffie?", "Drinken jij koffie?"], a: 1, ex: "예/아니오 질문이라 동사가 맨 앞이에요. 바로 뒤에 jij가 오니 -t를 빼서 Drink예요." },
      { q: "우리는 오늘 저녁 버스로 집에 가요.", opts: ["We gaan vanavond met de bus naar huis.", "We vanavond gaan met de bus naar huis.", "We gaan naar huis vanavond met de bus."], a: 0, ex: "동사 gaan은 2번 자리예요. 그 뒤는 언제(vanavond) → 어떻게(met de bus) → 어디로(naar huis) 순서예요." },
      { q: "Het is ___ duur. (안 비싸요)", opts: ["geen", "niet"], a: 1, ex: "duur는 명사가 아니라 꾸미는 말(형용사)이에요. 그래서 niet을 쓰고, duur 바로 앞에 놓아요." }
    ],
    fill: [
      { q: "vandaag / ik / werk (vandaag로 시작)", a: ["Vandaag werk ik"], ex: "Vandaag이 1번이니 동사 werk가 2번이에요. 주어 ik는 동사 뒤로 가요.", hint: "Vandaag + 동사 + 주어" },
      { q: "Ik woon in Gent. → In Gent로 시작", a: ["In Gent woon ik"], ex: "In Gent가 한 덩어리로 1번 자리예요. 그래서 woon이 2번, ik가 3번이에요." },
      { q: "jij / morgen / werken → 예/아니오 의문문", a: ["Werk je morgen?", "Werk jij morgen?"], ex: "질문이라 동사가 맨 앞에 와요. 바로 뒤에 jij가 오니 werkt가 아니라 werk예요." },
      { q: "Ik werk morgen. → 부정문", a: ["Ik werk morgen niet"], ex: "'일 안 해요'는 동작을 부정하는 거라 niet이에요. 짧은 문장에서는 끝에 놓아요." },
      { q: "Ik heb tijd. → 부정문", a: ["Ik heb geen tijd"], ex: "tijd는 앞에 관사가 없는 명사예요. 이런 명사를 '없다'고 할 때는 geen을 써요." },
      { q: "wij / wonen / in Brussel (wij로 시작)", a: ["Wij wonen in Brussel", "We wonen in Brussel"], ex: "주어 Wij가 1번이니 동사 wonen이 2번이에요. 장소 in Brussel은 그 뒤에 와요.", hint: "주어 + 동사 + 장소" },
      { q: "Ik ga morgen naar Gent. → Morgen으로 시작", a: ["Morgen ga ik naar Gent"], ex: "Morgen이 1번이 되면 동사 ga는 2번을 지켜요. 그래서 주어 ik는 동사 뒤로 가요.", hint: "Morgen + 동사 + 주어" },
      { q: "waar / werken / jij → 의문문", a: ["Waar werk je?", "Waar werk jij?"], ex: "의문사 Waar 다음에 바로 동사가 와요. 뒤에 jij가 오니 werkt가 아니라 werk예요.", hint: "Waar + 동사 + 주어" },
      { q: "ik / ga / naar huis / met de fiets / vandaag (ik로 시작)", a: ["Ik ga vandaag met de fiets naar huis"], ex: "동사 ga가 2번 자리예요. 그 뒤는 언제(vandaag) → 어떻게(met de fiets) → 어디로(naar huis) 순서예요.", hint: "시간 → 방법 → 장소" },
      { q: "Ik kom vandaag. → 부정문", a: ["Ik kom vandaag niet"], ex: "'안 와요'는 동작을 부정하는 거라 niet이에요. 짧은 문장에서는 끝에 놓아요." },
      { q: "mijn broer / werkt / vandaag / in Antwerpen (Mijn broer로 시작)", a: ["Mijn broer werkt vandaag in Antwerpen"], ex: "Mijn broer가 한 덩어리로 1번, 동사 werkt가 2번이에요. 시간(vandaag)이 장소(in Antwerpen)보다 먼저 와요.", hint: "주어 + 동사 + 시간 + 장소" },
      { q: "Ik werk in Brussel. → In Brussel로 시작", a: ["In Brussel werk ik"], ex: "In Brussel이 한 덩어리로 1번 자리예요. 그래서 werk가 2번, ik가 3번이에요." },
      { q: "u / in Gent / wonen → 예/아니오 의문문", a: ["Woont u in Gent?"], ex: "질문이라 동사가 맨 앞에 와요. -t가 빠지는 건 jij/je 뒤뿐이라 u 뒤에서는 woont 그대로예요.", hint: "u 뒤에서는 -t가 그대로" },
      { q: "We gaan naar de zee. + morgen + met de auto → 한 문장 (We로 시작)", a: ["We gaan morgen met de auto naar de zee", "Wij gaan morgen met de auto naar de zee"], ex: "동사 gaan 뒤에 언제(morgen) → 어떻게(met de auto) → 어디로(naar de zee) 순서로 놓아요.", hint: "시간 → 방법 → 장소" },
      { q: "Ik heb kinderen. → 부정문", a: ["Ik heb geen kinderen"], ex: "kinderen은 관사가 없는 명사(복수)예요. 이런 명사를 '없다'고 할 때는 geen을 써요." }
    ]
  },
  {
    id: 8,
    ko: "분리동사",
    nl: "Scheidbare werkwoorden",
    emoji: "bed",
    easy: "앞부분(접두사)이 떨어져서 문장 끝으로 가는 동사가 있어요.",
    why: "'일어나다(opstaan)', '정리하다(opruimen)', '가져가다(meenemen)'처럼 매일 쓰는 동사가 많아요. 떨어지는 규칙을 알면 아침부터 밤까지 일상을 말할 수 있어요.",
    intro: "opstaan, opruimen처럼 앞부분이 떨어져 나가는 동사예요. 어디로 떨어지는지만 알면 일상 표현이 확 늘어요.",
    terms: [
      ["분리동사", "앞부분과 뒷부분이 문장 안에서 떨어질 수 있는 동사예요. 예: opstaan → Ik sta op."],
      ["접두사", "동사 앞에 붙는 작은 조각이에요. op, aan, af, in, mee, uit 같은 것이에요."],
      ["동사원형", "사전에 나오는 기본 모양이에요. 보통 -en으로 끝나요. 예: opstaan, werken"],
      ["조동사", "다른 동사를 도와주는 동사예요. '~해야 해요(moeten)', '~할 수 있어요(kunnen)' 같은 것이에요."],
      ["과거분사", "'~했어요'(현재완료)를 만들 때 쓰는 동사 모양이에요. 보통 ge-로 시작해요. 예: gewerkt"]
    ],
    steps: [
      {
        title: "1단계. 분리동사는 '접두사 + 동사'예요",
        body: "<span class='nl'>opstaan</span>(일어나다)은 <b>op</b> + <b>staan</b>(서다)이 붙은 말이에요. 앞의 작은 조각을 <b>접두사</b>라고 해요. 소리 낼 때 접두사에 <b>힘(강세)</b>이 들어가요: <b>OP</b>staan.",
        visual: { type: "formula", parts: ["op", "+", "staan"], result: "opstaan", caption: "op(위로) + staan(서다) = 일어나다" },
        ex: [["opstaan", "일어나다"], ["opruimen", "정리하다"], ["meenemen", "가져가다"], ["invullen", "(서류를) 작성하다"]]
      },
      {
        title: "2단계. 동사가 혼자면, 접두사는 문장 끝으로!",
        body: "문장에 동사가 하나뿐이면 동사 몸통은 <b>2번 자리</b>로 가고, 접두사는 <b>문장 맨 끝</b>으로 떨어져요. 질문에서도 똑같이 접두사는 끝에 남아요.",
        visual: { type: "blocks", caption: "주황색 = 동사(2번), 파란색 = 접두사(맨 끝)", rows: [
          { words: ["Ik", "sta", "elke dag", "vroeg", "op"], hl: [1], hl2: [4], num: true, ko: "나는 매일 일찍 일어나요" },
          { words: ["Hij", "ruimt", "zijn kamer", "op"], hl: [1], hl2: [3], num: true, ko: "그는 자기 방을 정리해요" },
          { words: ["Neem", "je", "een paraplu", "mee"], hl: [0], hl2: [3], num: true, ko: "우산 가져가?" }
        ] },
        ex: [["Ik sta om zeven uur op.", "나는 7시에 일어나요."], ["Hij ruimt zijn kamer op.", "그는 자기 방을 정리해요."], ["Ik heb een jas aan.", "나는 코트를 입고 있어요. (aanhebben = 입고 있다)"]]
      },
      {
        title: "3단계. 동사가 둘이면, 한 단어로 붙여서 끝에!",
        body: "<b>조동사</b>(moeten, kunnen 같은 도우미 동사)나 <span class='nl'>gaan</span>(~할 거예요)이 함께 있으면, 분리동사는 떨어지지 않아요. <b>동사원형 그대로 한 단어</b>로 문장 끝에 가요.",
        visual: { type: "blocks", caption: "도우미 동사는 2번, 분리동사는 붙은 채로 끝!", rows: [
          { words: ["Ik", "moet", "vroeg", "opstaan"], hl: [1], hl2: [3], num: true, ko: "나는 일찍 일어나야 해요" },
          { words: ["Ik", "ga", "mijn kamer", "opruimen"], hl: [1], hl2: [3], num: true, ko: "나는 내 방을 정리할 거예요" }
        ] },
        ex: [["Ik moet vroeg opstaan.", "나는 일찍 일어나야 해요."], ["Ik moet dit formulier invullen.", "이 서류를 작성해야 해요."], ["Ik ga mijn kamer opruimen.", "내 방을 정리할 거예요."]]
      },
      {
        title: "4단계. '~했어요'는 접두사 + ge + 동사",
        body: "현재완료('~했어요')에서는 <b>접두사와 동사 사이에 ge</b>가 들어가서 한 단어가 돼요. <span class='nl'>op + ge + ruimd = opgeruimd</span>. 이동을 나타내는 동사(thuiskomen, opstaan)는 hebben 대신 <b>zijn</b>과 함께 써요.",
        visual: { type: "formula", parts: ["op", "+", "ge", "+", "ruimd"], result: "opgeruimd", caption: "ge는 접두사 뒤, 동사 앞에 쏙!" },
        ex: [["Ik heb mijn kamer opgeruimd.", "내 방을 정리했어요."], ["Ik heb het formulier ingevuld.", "서류를 작성했어요."], ["We zijn gisteren laat thuisgekomen.", "우리는 어제 늦게 집에 왔어요."]]
      },
      {
        title: "5단계. 떨어지지 않는 동사도 있어요",
        body: "<b>be-, ver-, ont-</b>로 시작하는 동사는 절대 떨어지지 않아요. 이 앞부분에는 힘(강세)이 들어가지 않아요. 그래서 동사 전체가 2번 자리에 그대로 있어요.",
        visual: { type: "twobox",
          left: { title: "떨어져요", note: "op, aan, af, in, mee, uit ...", items: [["Ik sta op.", "일어나요."], ["Ik neem een boek mee.", "책을 가져가요.", "boek"]] },
          right: { title: "안 떨어져요", note: "be-, ver-, ont-", items: [["De trein vertrekt.", "기차가 출발해요.", "trein"], ["Ik betaal.", "내가 계산할게요."]] } },
        ex: [["De trein vertrekt om acht uur.", "기차는 8시에 출발해요."], ["Ik betaal met de kaart.", "카드로 계산해요."], ["Wij verhuizen.", "우리는 이사해요."]]
      }
    ],
    mistakes: [
      "<span class='nl'>Ik opsta om zeven uur.</span> ✗ → <span class='nl'>Ik sta om zeven uur op.</span> ✓ 동사가 혼자면 접두사 op은 끝으로 보내요.",
      "<span class='nl'>Ik moet vroeg staan op.</span> ✗ → <span class='nl'>Ik moet vroeg opstaan.</span> ✓ 조동사가 있으면 붙인 채로 끝에 놓아요.",
      "<span class='nl'>geopruimd</span> ✗ → <span class='nl'>opgeruimd</span> ✓ ge는 맨 앞이 아니라 접두사 뒤에 들어가요."
    ],
    rules: [
      "분리동사는 강세가 있는 접두사(<span class='nl'>op, aan, af, in, mee, uit, thuis, terug</span>)와 동사로 이루어져요. <span class='nl'>opstaan = op + staan</span>",
      "현재형과 과거형의 평서문에서는 동사가 두 번째 자리, 접두사는 <b>문장 끝</b>으로 가요. <span class='nl'>Ik sta vroeg op. Ik stond vroeg op.</span>",
      "조동사나 gaan과 함께 쓰면 동사원형이 <b>한 단어로 붙어서</b> 문장 끝에 와요. <span class='nl'>Ik moet vroeg opstaan.</span>",
      "현재완료에서는 접두사 + <b>ge</b> + 과거분사를 한 단어로 써요. <span class='nl'>opstaan → opgestaan, afdrogen → afgedroogd, invullen → ingevuld, meebrengen → meegebracht, thuiskomen → thuisgekomen</span>",
      "<b>aanhebben</b>은 '(옷을) 입고 있다'예요. <span class='nl'>Ik heb een T-shirt aan.</span>",
      "be-, ver-, ont-로 시작하는 동사는 분리되지 않아요. <span class='nl'>De trein vertrekt. Wij verhuizen.</span>"
    ],
    examples: [
      ["Ik sta elke dag om zeven uur op.", "나는 매일 7시에 일어나요."],
      ["Ik heb vandaag een gestreept T-shirt aan.", "나는 오늘 줄무늬 티셔츠를 입고 있어요."],
      ["Hij ruimt zijn kamer op.", "그는 자기 방을 정리해요."],
      ["Ik moet dit formulier invullen.", "이 서류를 작성해야 해요."],
      ["We zijn gisteren laat thuisgekomen.", "우리는 어제 늦게 집에 왔어요."],
      ["Neem je een paraplu mee?", "우산 가져가?"]
    ],
    tip: "혼자 있는 동사는 앞부분을 끝으로 보내고, 다른 동사와 함께 있으면 한 단어로 붙여서 끝에!",
    mc: [
      { q: "Ik ___ elke dag vroeg op. (opstaan)", opts: ["opsta", "sta", "staat"], a: 1, ex: "문장 끝에 op이 이미 있어요. 그래서 2번 자리에는 몸통 sta만 들어가요." },
      { q: "올바른 문장은?", opts: ["Ik moet vroeg staan op.", "Ik moet op vroeg staan.", "Ik moet vroeg opstaan."], a: 2, ex: "조동사 moet가 있으니 분리동사는 떨어지지 않아요. opstaan 한 단어로 맨 끝에 와요." },
      { q: "invullen의 과거분사는?", opts: ["geinvuld", "ingevuld", "invulgd"], a: 1, ex: "ge는 접두사 in 뒤에 들어가요. in + ge + vuld = ingevuld." },
      { q: "Ik heb een jas ___. ((옷을) 입고 있다)", opts: ["aan", "op", "uit"], a: 0, ex: "'입고 있다'는 aanhebben이에요. heb가 2번 자리에 가고 aan은 끝에 남아요." },
      { q: "기차는 8시에 출발해요.", opts: ["De trein trekt om acht uur ver.", "De trein vertrekt om acht uur."], a: 1, ex: "ver-로 시작하는 동사는 떨어지지 않아요. vertrekt 전체가 2번 자리에 있어요." },
      { q: "opstaan을 말할 때 힘(강세)이 들어가는 부분은?", opts: ["OP", "STAAN"], a: 0, ex: "분리동사는 앞의 접두사에 힘이 들어가요. 그래서 OPstaan이라고 말해요." },
      { q: "Wij ___ de tafel af. (afruimen)", opts: ["afruimen", "ruimen", "ruimt"], a: 1, ex: "문장 끝에 af가 이미 있어요. 2번 자리에는 몸통만 오고, wij라서 ruimen이에요." },
      { q: "Ik ga morgen mijn vriend ___. (ophalen, 데리러 가다)", opts: ["ophalen", "halen op", "op halen"], a: 0, ex: "gaan이 함께 있으면 분리동사는 떨어지지 않아요. ophalen 한 단어로 맨 끝에 와요." },
      { q: "opstaan의 과거분사는?", opts: ["geopstaan", "opgestaan", "opstaand"], a: 1, ex: "ge는 접두사 op 뒤에 들어가요. op + ge + staan = opgestaan." },
      { q: "떨어지지 않는 동사는?", opts: ["opruimen", "vertrekken", "meenemen"], a: 1, ex: "ver-로 시작하는 동사는 절대 떨어지지 않아요. op-, mee-는 떨어지는 접두사예요." },
      { q: "invullen의 접두사(앞조각)는?", opts: ["in", "vul", "len"], a: 0, ex: "invullen은 in + vullen이에요. 떨어져 나가는 앞조각은 in이에요." },
      { q: "De trein ___ om acht uur aan. (aankomen, 도착하다)", opts: ["komt", "aankomt", "aan komt"], a: 0, ex: "동사가 하나뿐이라 몸통 komt만 2번 자리에 와요. 접두사 aan은 이미 맨 끝에 있어요." },
      { q: "나는 그릇을 닦아 말려야 해요.", opts: ["Ik moet de borden afdrogen.", "Ik moet de borden drogen af.", "Ik moet afdrogen de borden."], a: 0, ex: "조동사 moet가 2번 자리예요. 분리동사는 afdrogen 한 단어로 붙어서 맨 끝에 가요." },
      { q: "Ik heb een paraplu ___. (meenemen)", opts: ["gemeenomen", "meegenomen", "meegenemen"], a: 1, ex: "ge는 접두사 mee 뒤에 들어가요. nemen의 과거분사는 genomen이라서 meegenomen이에요." },
      { q: "Ik ___ mijn oude fiets. (verkopen, 팔다)", opts: ["verkoop", "koop ... ver", "verkoopt"], a: 0, ex: "ver-로 시작하는 동사는 떨어지지 않아요. ik에는 -t가 없으니 verkoop이에요." }
    ],
    fill: [
      { q: "ik / opstaan / om zeven uur (현재형)", a: ["Ik sta om zeven uur op"], ex: "동사가 하나뿐이라 몸통 sta는 2번 자리, 접두사 op은 맨 끝으로 가요.", hint: "op은 맨 끝" },
      { q: "hij / de borden / afdrogen (현재형)", a: ["Hij droogt de borden af"], ex: "hij라서 droogt(-t 붙음)가 2번 자리에 와요. 접두사 af는 끝으로 가요.", hint: "af는 맨 끝" },
      { q: "Ik ruim mijn kamer op. → 현재완료로", a: ["Ik heb mijn kamer opgeruimd"], ex: "현재완료는 heb + 과거분사예요. ge가 op과 ruimd 사이에 들어가서 opgeruimd가 돼요." },
      { q: "Ik kom om zes uur thuis. → 현재완료로", a: ["Ik ben om zes uur thuisgekomen"], ex: "집으로 '오는' 이동이라 hebben이 아니라 zijn을 써요. 과거분사는 thuis + ge + komen이에요.", hint: "zijn + thuis-ge-komen" },
      { q: "meebrengen → 과거분사", a: ["meegebracht"], ex: "mee 뒤에 ge를 넣어요. brengen의 과거분사는 특별한 모양 gebracht라서 meegebracht예요.", hint: "brengen → gebracht" },
      { q: "meenemen = ___ + nemen (접두사 쓰기)", a: ["mee"], ex: "meenemen은 mee(함께) + nemen(가져가다)이에요. 앞조각 mee가 접두사예요." },
      { q: "ik / de tafel / afruimen (현재형)", a: ["Ik ruim de tafel af"], ex: "동사가 하나뿐이라 몸통 ruim은 2번 자리, 접두사 af는 맨 끝으로 가요.", hint: "af는 맨 끝" },
      { q: "Ik vul het formulier in. → moeten을 넣어서", a: ["Ik moet het formulier invullen"], ex: "moet가 2번 자리를 차지해요. 분리동사는 invullen 한 단어로 붙어서 맨 끝에 가요.", hint: "moet ... invullen" },
      { q: "afdrogen → 과거분사", a: ["afgedroogd"], ex: "ge는 접두사 af 뒤에 들어가요. af + ge + droogd = afgedroogd.", hint: "af + ge + ..." },
      { q: "de trein / om negen uur / vertrekken (현재형)", a: ["De trein vertrekt om negen uur"], ex: "ver-로 시작하는 동사는 떨어지지 않아요. vertrekt 전체가 2번 자리에 와요.", hint: "vertrekken은 안 떨어져요" },
      { q: "aan + komen → 동사원형 (도착하다)", a: ["aankomen"], ex: "동사원형에서는 접두사와 동사가 한 단어로 붙어 있어요. aan + komen = aankomen." },
      { q: "jij / vanavond / uitgaan → 예/아니오 의문문", a: ["Ga je vanavond uit?", "Ga jij vanavond uit?"], ex: "질문이라 몸통 ga가 맨 앞에 와요. 접두사 uit은 질문에서도 맨 끝에 남아요.", hint: "Ga ... uit?" },
      { q: "Ik sta vroeg op. → gaan을 넣어서 (~할 거예요)", a: ["Ik ga vroeg opstaan"], ex: "ga가 2번 자리에 와요. 분리동사는 opstaan 한 단어로 붙어서 맨 끝에 가요." },
      { q: "Ik neem een cadeautje mee. → 현재완료로", a: ["Ik heb een cadeautje meegenomen"], ex: "현재완료는 heb + 과거분사예요. mee + ge + nomen이 붙어서 meegenomen이 돼요.", hint: "nemen → genomen" },
      { q: "wij / verhuizen / naar Gent (현재형)", a: ["Wij verhuizen naar Gent", "We verhuizen naar Gent"], ex: "ver-로 시작하는 동사는 떨어지지 않아요. verhuizen 전체가 2번 자리에 와요." }
    ]
  },
  {
    id: 9,
    ko: "비교급과 최상급",
    nl: "Trappen van vergelijking",
    emoji: "appel",
    easy: "'더 ~한'은 -er, '가장 ~한'은 -st를 붙여요.",
    why: "마트에서 '이게 더 싸요', 친구에게 '벨기에 감자튀김이 제일 맛있어!'라고 말할 때 꼭 필요해요.",
    intro: "더 크다, 제일 맛있다처럼 비교하는 표현이에요. 장보기나 도시 이야기를 할 때 정말 자주 써요.",
    terms: [
      ["형용사", "'작은, 큰, 비싼'처럼 모양이나 성질을 말해 주는 단어예요. 예: klein, groot, duur"],
      ["비교급", "'더 ~한'이라는 뜻의 모양이에요. 예: kleiner(더 작은)"],
      ["최상급", "'가장 ~한, 제일 ~한'이라는 뜻의 모양이에요. 예: kleinst(가장 작은)"],
      ["불규칙", "규칙대로 바뀌지 않아서 따로 외워야 하는 것이에요. 예: goed → beter → best"]
    ],
    steps: [
      {
        title: "1단계. 더 ~하면 -er, 제일 ~하면 -st",
        body: "형용사 뒤에 <b>-er</b>를 붙이면 '더 ~한', <b>-st</b>를 붙이면 '가장 ~한'이 돼요. 한국어에서 '더', '제일'을 앞에 붙이는 것처럼, 네덜란드어는 <b>뒤에</b> 붙여요.",
        visual: { type: "scale", items: [["klein", "작은"], ["kleiner", "더 작은"], ["kleinst", "가장 작은"]], grow: false },
        ex: [["klein → kleiner → kleinst", "작은 → 더 작은 → 가장 작은"], ["snel → sneller → snelst", "빠른 → 더 빠른 → 가장 빠른"], ["Gent is kleiner dan Brussel.", "겐트는 브뤼셀보다 작아요."]]
      },
      {
        title: "2단계. 철자가 살짝 바뀌는 경우",
        body: "소리를 지키려고 철자가 바뀔 때가 있어요. ① <b>oo, aa 같은 긴 모음</b>은 -er 앞에서 글자 하나를 빼요: <span class='nl'>groot → groter</span>. ② <b>짧은 모음 뒤</b>에서는 자음을 두 번 써요: <span class='nl'>dik → dikker</span>. ③ <b>-r로 끝나는 말</b>은 비교급에 <b>-der</b>를 붙여요: <span class='nl'>duur → duurder</span>.",
        visual: { type: "scale", items: [["groot", "큰"], ["groter", "더 큰"], ["grootst", "가장 큰"]], grow: true },
        ex: [["groot → groter → grootst", "큰 → 더 큰 → 가장 큰"], ["dik → dikker → dikst", "두꺼운 → 더 두꺼운 → 가장 두꺼운"], ["duur → duurder → duurst", "비싼 → 더 비싼 → 가장 비싼"]]
      },
      {
        title: "3단계. '~보다'는 dan, '~만큼 똑같이'는 even ... als",
        body: "두 개가 <b>다를 때</b>는 비교급 뒤에 <b>dan</b>(~보다)을 써요. 두 개가 <b>같을 때</b>는 <b>even</b> + 형용사 + <b>als</b>(~만큼)를 써요. 말로는 groter als도 들리지만, 바른 표현은 <b>groter dan</b>이에요.",
        visual: { type: "twobox",
          left: { title: "DAN", note: "달라요 (~보다 더)", items: [["Brussel is groter dan Gent.", "브뤼셀은 겐트보다 커요."], ["Een auto is duurder dan een fiets.", "차는 자전거보다 비싸요.", "auto"]] },
          right: { title: "EVEN ... ALS", note: "같아요 (~만큼)", items: [["Ik ben even oud als jij.", "나는 너랑 나이가 같아."], ["Gent is even mooi als Brugge.", "겐트는 브뤼헤만큼 예뻐요."]] } },
        ex: [["Gent is kleiner dan Brussel.", "겐트는 브뤼셀보다 작아요."], ["Mijn broer is even groot als ik.", "우리 오빠는 나랑 키가 같아요."]]
      },
      {
        title: "4단계. 따로 외우는 말 (불규칙)",
        body: "자주 쓰는 몇 개는 규칙과 달라요. <span class='nl'>goed</span>(좋은, 잘)는 goeder가 아니라 <b>beter</b>예요. <span class='nl'>graag</span>(기꺼이, 좋아서)의 비교급 <b>liever</b>는 '더 좋아해요'라는 뜻으로 정말 많이 써요.",
        visual: { type: "scale", items: [["goed", "좋은"], ["beter", "더 좋은"], ["best", "가장 좋은"]], grow: true },
        ex: [["veel → meer → meest", "많은 → 더 많은 → 가장 많은"], ["Zij spreekt beter Nederlands dan ik.", "그녀는 나보다 네덜란드어를 더 잘해요."], ["Ik drink liever thee dan koffie.", "나는 커피보다 차를 더 좋아해요."]]
      },
      {
        title: "5단계. '제일 ~한 것'이라고 말하기",
        body: "명사 앞에서 최상급을 쓸 때는 <b>de/het</b> + 최상급 + <b>-e</b>예요: <span class='nl'>de grootste stad</span>. 명사 없이 '~이 제일 ~해요'라고 할 때는 <b>het</b> + 최상급이에요: <span class='nl'>Friet is het lekkerst.</span>",
        visual: { type: "pictures", items: [["huis", "het grootste huis", "제일 큰 집"], ["fiets", "de snelste fiets", "제일 빠른 자전거"], ["appel", "de lekkerste appel", "제일 맛있는 사과"]] },
        ex: [["Dit is de duurste winkel van de straat.", "여기가 이 거리에서 제일 비싼 가게예요."], ["Belgische friet is het lekkerst!", "벨기에 감자튀김이 제일 맛있어요!"]]
      }
    ],
    mistakes: [
      "<span class='nl'>groter als</span> ✗ → <span class='nl'>groter dan</span> ✓ 다를 때는 dan, 같을 때만 als예요.",
      "<span class='nl'>goeder</span> ✗ → <span class='nl'>beter</span> ✓ goed는 불규칙이에요: goed → beter → best.",
      "<span class='nl'>meer duur</span> ✗ → <span class='nl'>duurder</span> ✓ '더'를 따로 쓰지 않고 형용사에 -er(-der)를 붙여요."
    ],
    rules: [
      "비교급은 <b>-er</b>, 최상급은 <b>-st</b>를 붙여요. <span class='nl'>klein → kleiner → kleinst</span>",
      "철자 규칙은 형용사 -e와 같아요: <span class='nl'>groot → groter → grootst, dik → dikker → dikst</span>",
      "<b>-r</b>로 끝나는 형용사는 비교급에 <b>-der</b>: <span class='nl'>duur → duurder, lekker → lekkerder, ver → verder</span>",
      "비교 대상 앞에는 <b>dan</b>: <span class='nl'>groter dan</span>. 같을 때는 <b>even ... als</b>: <span class='nl'>even groot als</span>. (groter als는 말로는 들리지만 표준어로는 dan이 맞아요.)",
      "불규칙: <span class='nl'>goed → beter → best, veel → meer → meest, weinig → minder → minst, graag → liever → liefst</span>",
      "명사 앞 최상급은 -e를 붙여요: <span class='nl'>de grootste stad</span>. 서술로 쓸 때는 <span class='nl'>het grootst</span>처럼 써요."
    ],
    examples: [
      ["Gent is kleiner dan Brussel.", "겐트는 브뤼셀보다 작아요."],
      ["Mijn broer is even groot als ik.", "우리 오빠는 나랑 키가 같아요."],
      ["Dit is de duurste winkel van de straat.", "여기가 이 거리에서 제일 비싼 가게예요."],
      ["Ik drink liever thee dan koffie.", "나는 커피보다 차를 더 좋아해요."],
      ["Zij spreekt beter Nederlands dan ik.", "그녀는 나보다 네덜란드어를 더 잘해요."],
      ["Belgische friet is het lekkerst!", "벨기에 감자튀김이 제일 맛있어요!"]
    ],
    tip: "다르면 dan, 같으면 even ... als.",
    mc: [
      { q: "Brussel is groter ___ Gent.", opts: ["als", "dan", "of"], a: 1, ex: "groter(더 큰)처럼 서로 다를 때는 '~보다'라는 뜻의 dan을 써요." },
      { q: "Ik ben even oud ___ jij.", opts: ["dan", "als"], a: 1, ex: "even이 있으면 '똑같이'라는 뜻이에요. 같을 때는 als를 짝으로 써요." },
      { q: "goed의 비교급은?", opts: ["goeder", "meer goed", "beter"], a: 2, ex: "goed는 규칙을 따르지 않는 불규칙 형용사예요. goed → beter → best로 외워요." },
      { q: "duur의 비교급은?", opts: ["duurder", "duurer", "duurst"], a: 0, ex: "duur는 r로 끝나요. r로 끝나는 말은 -er 대신 -der를 붙여요." },
      { q: "Ik drink ___ thee dan koffie. (더 좋아해서)", opts: ["meer graag", "liever", "graagder"], a: 1, ex: "graag(좋아서)의 비교급은 특별한 모양 liever예요. '더 좋아해요'라는 뜻이에요." },
      { q: "snel의 최상급은?", opts: ["sneller", "snelst", "snelder"], a: 1, ex: "'가장 ~한'은 뒤에 -st를 붙여요. snel + st = snelst. sneller는 비교급이에요." },
      { q: "groot의 비교급은?", opts: ["grooter", "groter", "grotter"], a: 1, ex: "-er가 붙으면 oo의 긴 소리가 저절로 지켜져요. 그래서 o 하나를 빼고 groter예요." },
      { q: "Thee is goedkoper ___ koffie.", opts: ["als", "dan"], a: 1, ex: "goedkoper(더 싼)처럼 서로 다를 때는 '~보다'라는 뜻의 dan을 써요." },
      { q: "goed의 최상급은?", opts: ["goedst", "best", "meest goed"], a: 1, ex: "goed는 불규칙이에요. goed → beter → best로 따로 외워요." },
      { q: "Dit is het ___ huis van de straat. (가장 큰)", opts: ["groot", "grootst", "grootste"], a: 2, ex: "명사 huis 앞에서 최상급을 쓰면 -e를 붙여요. 그래서 het grootste huis예요." },
      { q: "Een trein is ___ dan een fiets.", opts: ["snel", "sneller", "snelst"], a: 1, ex: "뒤에 dan(~보다)이 있으니 비교급이 필요해요. snel + er = sneller." },
      { q: "lekker의 비교급은?", opts: ["lekkerder", "lekkerer", "lekkerst"], a: 0, ex: "lekker는 r로 끝나요. r로 끝나는 말은 비교급에 -der를 붙여요." },
      { q: "Deze fiets is ___ duur als die fiets. (똑같이 비싸요)", opts: ["even", "meer", "dan"], a: 0, ex: "'똑같이'라고 할 때는 even + 형용사 + als를 짝으로 써요." },
      { q: "Ik heb ___ tijd dan jij. (더 적은)", opts: ["minder", "weiniger", "meer"], a: 0, ex: "weinig(적은)는 불규칙이에요. weinig → minder → minst로 외워요." },
      { q: "Dit is de ___ winkel van Gent. (가장 싼)", opts: ["goedkoopst", "goedkoopste", "goedkoper"], a: 1, ex: "명사 winkel 앞에서 최상급을 쓰면 -e를 붙여요. 그래서 de goedkoopste winkel이에요." }
    ],
    fill: [
      { q: "klein → 비교급", a: ["kleiner"], ex: "'더 ~한'은 뒤에 -er를 붙여요. klein + er = kleiner.", hint: "-er" },
      { q: "groot → 최상급", a: ["grootst", "grootste", "het grootst", "de grootste"], ex: "'가장 ~한'은 -st를 붙여요. 뒤에 모음이 오지 않으니 oo는 그대로 grootst예요.", hint: "-st" },
      { q: "veel → 비교급", a: ["meer"], ex: "veel은 불규칙이라 따로 외워요. veel → meer → meest." },
      { q: "dik → 비교급", a: ["dikker"], ex: "dik의 i는 짧은 소리예요. 짧은 소리를 지키려고 k를 두 번 쓰고 -er를 붙여요.", hint: "자음 두 번" },
      { q: "Gent is mooi. Brugge is ook mooi. → even ... als로 한 문장", a: ["Gent is even mooi als Brugge", "Brugge is even mooi als Gent"], ex: "두 도시가 똑같이 예뻐요. 같을 때는 even + 형용사 + als를 써요." },
      { q: "snel → 비교급", a: ["sneller"], ex: "'더 ~한'은 뒤에 -er를 붙여요. snel + er = sneller.", hint: "-er" },
      { q: "laat → 비교급", a: ["later"], ex: "aa 같은 긴 소리는 -er 앞에서 a 하나를 빼도 소리가 지켜져요. 그래서 later예요.", hint: "aa → a" },
      { q: "Een fiets is goedkoop. Een auto is duur. → 'Een fiets is ... dan een auto.' (더 싼)", a: ["Een fiets is goedkoper dan een auto"], ex: "다를 때는 비교급 + dan이에요. goedkoop의 oo는 -er 앞에서 o 하나를 빼서 goedkoper예요.", hint: "goedkoper dan" },
      { q: "graag → 비교급", a: ["liever"], ex: "graag는 불규칙이에요. graag → liever → liefst로 외워요." },
      { q: "Dit is de ___ fiets. (snel, 가장 빠른)", a: ["snelste"], ex: "명사 fiets 앞에서 최상급을 쓰면 -e를 붙여요. snel + st + e = snelste.", hint: "-st + e" },
      { q: "oud → 비교급", a: ["ouder"], ex: "oud 뒤에 -er만 붙이면 돼요. oud + er = ouder." },
      { q: "ver → 비교급", a: ["verder"], ex: "ver는 r로 끝나요. r로 끝나는 말은 비교급에 -der를 붙여요.", hint: "-r로 끝나면 -der" },
      { q: "Deze trui is mooi. Die trui is ook mooi. → even ... als로 한 문장", a: ["Deze trui is even mooi als die trui", "Die trui is even mooi als deze trui"], ex: "두 스웨터가 똑같이 예뻐요. 같을 때는 even + 형용사 + als를 써요." },
      { q: "veel → 최상급", a: ["meest", "meeste", "het meest", "de meeste"], ex: "veel은 불규칙이에요. veel → meer → meest로 외워요." },
      { q: "Deze winkel is ___. (제일 비싸요, 뒤에 명사 없이)", a: ["het duurst", "de duurste"], ex: "명사 없이 '제일 ~해요'라고 할 때는 het + 최상급이에요. duur + st = het duurst.", hint: "het + 최상급" }
    ]
  },
  {
    id: 10,
    ko: "조동사",
    nl: "Modale werkwoorden",
    emoji: "koffie",
    easy: "'~할 수 있어요, ~해야 해요' 같은 도우미 동사는 2번 자리, 진짜 동사는 원형으로 맨 끝에 와요.",
    why: "카페에서 'Mag ik een koffie?', 대화 중에 'Kunt u dat herhalen?'처럼 부탁하고 허락을 구할 때 바로 쓸 수 있어요.",
    intro: "할 수 있다, 해야 한다, 해도 된다처럼 마음과 상황을 더해 주는 동사예요. 조동사는 두 번째 자리, 동사원형은 끝이라는 것만 기억하세요.",
    terms: [
      ["조동사", "다른 동사 앞에서 '~할 수 있어요, ~해야 해요'처럼 뜻을 더해 주는 도우미 동사예요. 예: kunnen, moeten, mogen, willen, zullen"],
      ["본동사", "실제로 하는 행동을 말하는 진짜 동사예요. 예: Ik kan zwemmen.에서 zwemmen"],
      ["동사원형", "사전에 나오는 기본 모양이에요. 보통 -en으로 끝나요. 예: spreken, werken"],
      ["활용", "주어(ik, hij, wij...)에 맞춰 동사 모양이 바뀌는 것이에요. 예: ik kan, wij kunnen"]
    ],
    steps: [
      {
        title: "1단계. 조동사 다섯 개의 뜻",
        body: "<b>kunnen</b> = ~할 수 있어요(능력), <b>moeten</b> = ~해야 해요(의무), <b>mogen</b> = ~해도 돼요(허락), <b>willen</b> = ~하고 싶어요(원함), <b>zullen</b> = ~할게요, ~할까요(약속, 제안). 이 다섯 개면 대부분의 부탁과 계획을 말할 수 있어요.",
        visual: { type: "blocks", caption: "주황색 = 조동사, 파란색 = 진짜 동사(원형)", rows: [
          { words: ["Ik", "kan", "zwemmen"], hl: [1], hl2: [2], ko: "나는 수영할 수 있어요" },
          { words: ["Ik", "moet", "werken"], hl: [1], hl2: [2], ko: "나는 일해야 해요" },
          { words: ["Je", "mag", "hier", "zitten"], hl: [1], hl2: [3], ko: "여기 앉아도 돼요" },
          { words: ["Ik", "wil", "koffie", "drinken"], hl: [1], hl2: [3], ko: "커피 마시고 싶어요" },
          { words: ["Ik", "zal", "je", "helpen"], hl: [1], hl2: [3], ko: "내가 도와줄게요" }
        ] },
        ex: [["Ik kan zwemmen.", "나는 수영할 수 있어요."], ["Ik wil koffie drinken.", "커피 마시고 싶어요."], ["Ik zal je helpen.", "내가 도와줄게요."]]
      },
      {
        title: "2단계. 샌드위치 규칙: 조동사는 2번, 원형은 맨 끝",
        body: "조동사는 주어에 맞춰 모양이 바뀌고 <b>2번 자리</b>에 와요. 진짜 동사는 모양을 바꾸지 않고 <b>원형 그대로 맨 끝</b>으로 가요. 나머지 말은 그 사이에 끼워요. 맨 앞에 시간이 와도 조동사는 2번이에요.",
        visual: { type: "blocks", caption: "조동사(2번) ... 동사원형(끝)", rows: [
          { words: ["Ik", "kan", "Nederlands", "spreken"], hl: [1], hl2: [3], num: true, ko: "나는 네덜란드어를 할 수 있어요" },
          { words: ["Morgen", "moet", "ik", "vroeg", "werken"], hl: [1], hl2: [4], num: true, ko: "내일 나는 일찍 일해야 해요" }
        ] },
        ex: [["Ik kan Nederlands spreken.", "나는 네덜란드어를 할 수 있어요."], ["Ik wil morgen naar Gent gaan.", "나는 내일 겐트에 가고 싶어요."], ["Morgen moet ik vroeg werken.", "내일 나는 일찍 일해야 해요."]]
      },
      {
        title: "3단계. 모양 바꾸기: ik와 hij는 -t가 없어요",
        body: "보통 동사와 달리, 조동사는 <b>ik와 hij에 -t를 붙이지 않아요</b>: <span class='nl'>ik kan, hij kan</span>. jij와 u는 두 가지 모두 괜찮아요: <span class='nl'>jij kunt / kan, jij wilt / wil</span>. 여럿(wij, jullie, zij)은 <b>원형과 똑같아요</b>. 아래 표도 함께 보세요.",
        visual: { type: "twobox",
          left: { title: "ik / hij", note: "-t 없음", items: [["ik kan, hij kan", "할 수 있어요"], ["ik wil, hij wil", "하고 싶어요"], ["ik mag, hij mag", "해도 돼요"]] },
          right: { title: "wij / jullie / zij", note: "원형과 똑같아요", items: [["wij kunnen", "우리는 할 수 있어요"], ["jullie willen", "너희는 하고 싶어요"], ["zij mogen", "그들은 해도 돼요"]] } },
        ex: [["Hij wil een nieuwe gsm kopen.", "그는 새 휴대폰을 사고 싶어 해요."], ["Wij moeten nu gaan.", "우리는 지금 가야 해요."], ["Jij kunt goed koken.", "너는 요리를 잘해."]]
      },
      {
        title: "4단계. 부탁하고 허락 구하기",
        body: "질문할 때는 <b>조동사가 맨 앞</b>에 와요. 진짜 동사는 여전히 맨 끝이에요. <span class='nl'>Kunt u ...?</span>(~해 주시겠어요?), <span class='nl'>Mag ik ...?</span>(~해도 될까요?)는 가게와 카페에서 정말 자주 써요. jij 질문은 <span class='nl'>Kun je? / Kan je?</span> 둘 다 써요.",
        visual: { type: "blocks", caption: "질문: 조동사가 1번, 동사원형은 끝!", rows: [
          { words: ["Kunt", "u", "dat", "herhalen"], hl: [0], hl2: [3], num: true, ko: "다시 말씀해 주시겠어요?" },
          { words: ["Mag", "ik", "hier", "zitten"], hl: [0], hl2: [3], num: true, ko: "여기 앉아도 될까요?" }
        ] },
        ex: [["Kunt u dat herhalen?", "다시 한 번 말씀해 주시겠어요?"], ["Mag ik een koffie?", "커피 한 잔 주시겠어요?"], ["Wil je een pintje drinken?", "맥주 한 잔 마실래?"]]
      },
      {
        title: "5단계. '하면 안 돼요'와 '안 해도 돼요'는 달라요",
        body: "<span class='nl'>mag niet</span>은 '<b>하면 안 돼요</b>'(금지)예요. '<b>안 해도 돼요</b>'는 moeten을 쓰지 않고 <span class='nl'>niet hoeven te</span> + 동사원형으로 말해요. 헷갈리기 쉬우니 두 문장을 짝으로 외워 두세요.",
        visual: { type: "twobox",
          left: { title: "MAG NIET", note: "하면 안 돼요 (금지)", items: [["Je mag hier niet roken.", "여기서 담배 피우면 안 돼요."], ["Je mag niet parkeren.", "주차하면 안 돼요.", "auto"]] },
          right: { title: "HOEFT NIET TE", note: "안 해도 돼요 (괜찮아요)", items: [["Je hoeft niet te komen.", "안 와도 돼요."], ["Je hoeft niet te betalen.", "돈 안 내도 돼요."]] } },
        ex: [["Je mag hier niet roken.", "여기서 담배 피우면 안 돼요."], ["Je hoeft niet te komen.", "안 와도 돼요."]]
      }
    ],
    mistakes: [
      "<span class='nl'>Ik wil gaan morgen naar Gent.</span> ✗ → <span class='nl'>Ik wil morgen naar Gent gaan.</span> ✓ 동사원형은 맨 끝으로 보내요.",
      "<span class='nl'>Hij kant / Hij wilt</span> ✗ → <span class='nl'>Hij kan / Hij wil</span> ✓ hij에는 -t를 붙이지 않아요.",
      "<span class='nl'>Je moet niet komen.</span>은 '오지 마'에 가까워요. '안 와도 돼'는 <span class='nl'>Je hoeft niet te komen.</span>이에요."
    ],
    rules: [
      "<b>kunnen</b> = 할 수 있다(능력, 가능), <b>moeten</b> = 해야 한다(의무), <b>mogen</b> = 해도 된다(허락), <b>willen</b> = 하고 싶다(원함), <b>zullen</b> = ~할 것이다, ~할까요(미래, 약속, 제안)",
      "조동사는 <b>두 번째 자리</b>에서 변하고, 본동사는 <b>동사원형으로 문장 끝</b>에 와요. <span class='nl'>Ik kan Nederlands spreken.</span>",
      "ik와 hij에는 -t가 붙지 않아요: <span class='nl'>ik kan, hij kan, hij mag, hij wil, hij zal</span>",
      "jij와 u에는 두 형태 다 맞아요: <span class='nl'>kunt / kan, wilt / wil, zult / zal</span>. 의문문에서는 <span class='nl'>Kun je? Kan je? Wil je?</span>",
      "공손하게 부탁할 때: <span class='nl'>Kunt u dat herhalen? Mag ik een koffie?</span>",
      "'안 해도 된다'는 보통 <b>niet hoeven te</b>로 말해요. <span class='nl'>Je hoeft niet te komen.</span> <span class='nl'>Je mag niet roken.</span>은 '피우면 안 된다'예요."
    ],
    table: {
      head: ["주어", "kunnen", "moeten", "mogen", "willen", "zullen"],
      rows: [
        ["ik", "kan", "moet", "mag", "wil", "zal"],
        ["jij / je", "kunt / kan", "moet", "mag", "wilt / wil", "zult / zal"],
        ["u", "kunt / kan", "moet", "mag", "wilt / wil", "zult / zal"],
        ["hij / zij / het", "kan", "moet", "mag", "wil", "zal"],
        ["wij / we", "kunnen", "moeten", "mogen", "willen", "zullen"],
        ["jullie", "kunnen", "moeten", "mogen", "willen", "zullen"],
        ["zij / ze (복수)", "kunnen", "moeten", "mogen", "willen", "zullen"]
      ]
    },
    examples: [
      ["Ik kan Nederlands spreken.", "나는 네덜란드어를 할 수 있어요."],
      ["Je moet morgen vroeg opstaan.", "너 내일 일찍 일어나야 해."],
      ["Mag ik hier zitten?", "여기 앉아도 돼요?"],
      ["Wil je een pintje drinken?", "맥주 한 잔 마실래?"],
      ["Zal ik een maat kleiner halen?", "한 사이즈 작은 걸 가져다 드릴까요?"],
      ["Kunt u dat herhalen?", "다시 한 번 말씀해 주시겠어요?"]
    ],
    tip: "조동사 문장은 샌드위치예요. 조동사가 앞(두 번째 자리), 동사원형이 뒤(끝), 나머지는 가운데!",
    mc: [
      { q: "Ik ___ zwemmen. (능력: 수영할 줄 안다)", opts: ["moet", "kan", "mag"], a: 1, ex: "'할 수 있다(능력)'는 kunnen이에요. ik에는 -t 없이 kan을 써요." },
      { q: "___ ik hier roken? (허락을 구함)", opts: ["Moet", "Wil", "Mag"], a: 2, ex: "'~해도 돼요?'라고 허락을 구할 때는 mogen이에요. 질문이라 Mag이 맨 앞에 와요." },
      { q: "Hij ___ een nieuwe gsm kopen. (원함)", opts: ["wil", "wilt", "willen"], a: 0, ex: "조동사는 hij에 -t를 붙이지 않아요. 그래서 wil이에요." },
      { q: "올바른 문장은?", opts: ["Ik wil gaan morgen naar Gent.", "Ik wil morgen naar Gent gaan.", "Ik morgen wil naar Gent gaan."], a: 1, ex: "조동사 wil은 2번 자리에 와요. 진짜 동사 gaan은 원형으로 맨 끝에 가요." },
      { q: "Je ___ morgen werken. (의무: 해야 한다)", opts: ["mag", "wil", "moet"], a: 2, ex: "'해야 한다(의무)'는 moeten이에요. je에는 moet를 써요." },
      { q: "'~하고 싶어요'라는 뜻의 조동사는?", opts: ["moeten", "willen", "mogen"], a: 1, ex: "willen은 원하는 마음을 말해요. moeten은 의무, mogen은 허락이에요." },
      { q: "나는 오늘 요리해야 해요.", opts: ["Ik moet vandaag kook.", "Ik moet vandaag koken.", "Ik vandaag moet koken."], a: 1, ex: "조동사 moet는 2번 자리예요. 진짜 동사는 원형 koken으로 맨 끝에 가요." },
      { q: "Mijn zus ___ goed zingen.", opts: ["kan", "kunt", "kunnen"], a: 0, ex: "mijn zus는 '그녀(zij)' 한 명이에요. 조동사는 hij/zij에 -t가 없어서 kan이에요." },
      { q: "카페에서: '커피 한 잔 주시겠어요?'", opts: ["Mag ik een koffie?", "Moet ik een koffie?", "Zal ik een koffie?"], a: 0, ex: "'~해도 될까요?'라고 정중하게 부탁할 때는 Mag ik ...?를 써요." },
      { q: "'돈 안 내도 돼요.'", opts: ["Je mag niet betalen.", "Je hoeft niet te betalen.", "Je wilt niet betalen."], a: 1, ex: "'안 해도 돼요'는 niet hoeven te + 동사원형이에요. mag niet은 '하면 안 돼요'예요." },
      { q: "Je ___ hier zitten. (허락: 앉아도 돼요)", opts: ["mag", "moet", "wil"], a: 0, ex: "'~해도 돼요(허락)'는 mogen이에요. je에는 mag를 써요." },
      { q: "내일 나는 일찍 일어나야 해요.", opts: ["Morgen moet ik vroeg opstaan.", "Morgen ik moet vroeg opstaan.", "Morgen moet ik opstaan vroeg."], a: 0, ex: "Morgen이 1번이니 조동사 moet가 2번, ik가 3번이에요. 동사원형 opstaan은 맨 끝이에요." },
      { q: "Jullie ___ hier zitten.", opts: ["mag", "mogen", "magt"], a: 1, ex: "jullie는 여럿이라서 조동사가 원형과 똑같아요. 그래서 mogen이에요." },
      { q: "친구에게: '나 좀 도와줄 수 있어?'", opts: ["Kun je me helpen?", "Kunt je me helpen?", "Kunnen je me helpen?"], a: 0, ex: "질문에서 je가 바로 뒤에 오면 Kun je(또는 Kan je)예요. 동사원형 helpen은 맨 끝이에요." },
      { q: "'여기 주차하면 안 돼요.'", opts: ["Je hoeft hier niet te parkeren.", "Je mag hier niet parkeren.", "Je kunt hier parkeren."], a: 1, ex: "'하면 안 돼요'(금지)는 mag niet이에요. hoeft niet te는 '안 해도 돼요'라는 뜻이에요." }
    ],
    fill: [
      { q: "wij + kunnen", a: ["kunnen"], ex: "wij처럼 여럿이 주어면 동사원형과 모양이 똑같아요." },
      { q: "hij + mogen", a: ["mag"], ex: "mogen은 모양이 많이 바뀌는 동사예요. ik와 hij는 둘 다 mag이에요.", hint: "ik mag" },
      { q: "ik / Nederlands / spreken / kunnen", a: ["Ik kan Nederlands spreken"], ex: "조동사 kan이 2번 자리에 와요. 진짜 동사 spreken은 맨 끝에 가요." },
      { q: "Ik werk vandaag. → moeten을 넣어서", a: ["Ik moet vandaag werken"], ex: "moet가 2번 자리를 차지해요. werk는 원형 werken이 되어 맨 끝으로 가요.", hint: "moet ... werken" },
      { q: "jij + willen", a: ["wilt", "wil"], ex: "jij에는 wilt와 wil 둘 다 쓸 수 있어요. 둘 다 맞아요." },
      { q: "'~해야 해요'(의무)라는 뜻의 조동사 (동사원형)", a: ["moeten"], ex: "의무는 moeten이에요. ik moet, hij moet처럼 써요." },
      { q: "ik / naar Brussel / gaan / willen / morgen (ik로 시작)", a: ["Ik wil morgen naar Brussel gaan"], ex: "조동사 wil이 2번 자리예요. 그 뒤에 시간(morgen) → 장소(naar Brussel), 동사원형 gaan은 맨 끝이에요.", hint: "wil ... gaan" },
      { q: "ik + willen", a: ["wil"], ex: "조동사는 ik에 -t를 붙이지 않아요. 그래서 ik wil이에요." },
      { q: "u / mij / helpen / kunnen → 공손한 질문", a: ["Kunt u mij helpen?", "Kunt u me helpen?", "Kan u mij helpen?", "Kan u me helpen?"], ex: "질문이라 조동사 Kunt가 맨 앞이에요. 동사원형 helpen은 맨 끝에 가요.", hint: "Kunt u ...?" },
      { q: "'너 내일 일 안 해도 돼.' (hoeven te 사용, Je로 시작)", a: ["Je hoeft morgen niet te werken", "Jij hoeft morgen niet te werken"], ex: "'안 해도 돼요'는 hoeft niet te + 동사원형이에요. 시간 morgen은 hoeft 바로 뒤에 와요.", hint: "hoeft ... niet te ..." },
      { q: "'~할 수 있어요'(능력)라는 뜻의 조동사 (동사원형)", a: ["kunnen"], ex: "능력은 kunnen이에요. ik kan, wij kunnen처럼 써요." },
      { q: "Hij spreekt Nederlands. → kunnen을 넣어서", a: ["Hij kan Nederlands spreken"], ex: "kan이 2번 자리를 차지해요. spreekt는 원형 spreken이 되어 맨 끝으로 가요.", hint: "kan ... spreken" },
      { q: "zij (복수, 그들) + moeten", a: ["moeten"], ex: "여럿(zij 복수)이 주어면 동사원형과 모양이 똑같아요." },
      { q: "jij / morgen / komen / kunnen → 예/아니오 의문문", a: ["Kun je morgen komen?", "Kan je morgen komen?", "Kun jij morgen komen?", "Kan jij morgen komen?"], ex: "질문이라 조동사가 맨 앞이에요. je 앞에서는 Kun(또는 Kan)이고, 동사원형 komen은 맨 끝이에요.", hint: "Kun je ...?" },
      { q: "'여기서 먹으면 안 돼요.' (mogen 사용, Je로 시작)", a: ["Je mag hier niet eten", "Jij mag hier niet eten"], ex: "'하면 안 돼요'는 mag niet이에요. 동사원형 eten은 맨 끝에 가요.", hint: "mag ... niet ..." }
    ]
  },
  {
    id: 11,
    ko: "대명사와 지시어",
    nl: "Voornaamwoorden",
    emoji: "boek",
    easy: "'나, 그를, 우리의, 이것, 저것'을 말하는 작은 단어들을 배워요.",
    why: "같은 이름을 계속 반복하지 않아도 돼요. 가게에서 '이거 주세요, 저거는 비싸요'라고 말할 때도 꼭 필요해요.",
    intro: "나, 너, 그것, 이것, 저것을 말하는 작은 단어들이에요. 같은 명사를 반복하지 않게 해 줘서 말이 훨씬 자연스러워져요.",
    terms: [
      ["대명사", "이름 대신 쓰는 짧은 말이에요. 예: 'Marie' 대신 '그녀(zij)'"],
      ["주격", "문장의 주인공(~은/는, ~이/가) 자리에 쓰는 모양이에요. 예: hij(그는)"],
      ["목적격", "'~을/를, ~에게' 자리에 쓰는 모양이에요. 동사 뒤나 voor, met 같은 말 뒤에 와요. 예: hem(그를)"],
      ["소유격", "'~의'라는 뜻의 모양이에요. 예: mijn(나의), ons/onze(우리의)"],
      ["지시어", "'이, 저'처럼 가리키는 말이에요. 예: dit, dat, deze, die"]
    ],
    steps: [
      {
        title: "1단계. 주인공 대명사: 강한 모양과 약한 모양",
        body: "많은 대명사에는 <b>두 가지 모양</b>이 있어요. <span class='nl'>jij / je, wij / we, zij / ze</span>. 평소에는 짧은 <b>약한 모양(je, we, ze)</b>을 많이 쓰고, 강조할 때 긴 모양을 써요. 뜻은 똑같아요.",
        visual: { type: "pictures", items: [["jongen", "hij", "그 (남자)"], ["meisje", "zij / ze", "그녀"]] },
        ex: [["Waar woon je?", "너 어디 살아?"], ["We gaan naar huis.", "우리는 집에 가요."], ["Hij is mijn broer.", "그는 우리 오빠예요."]]
      },
      {
        title: "2단계. '~을/를, ~에게'는 목적격",
        body: "동사 뒤에서 '그를, 그녀에게'처럼 쓸 때나 <span class='nl'>voor</span>(~을 위해), <span class='nl'>met</span>(~와 함께) 뒤에서는 <b>목적격</b>을 써요. 한국어의 '~을/를'을 붙인 모양이라고 생각하면 쉬워요.",
        visual: { type: "twobox",
          left: { title: "주격", note: "~은/는, ~이/가", items: [["ik", "나는"], ["jij", "너는"], ["hij", "그는", "jongen"], ["zij", "그녀는", "meisje"]] },
          right: { title: "목적격", note: "~을/를, ~에게", items: [["mij / me", "나를"], ["jou / je", "너를"], ["hem", "그를", "jongen"], ["haar", "그녀를", "meisje"]] } },
        ex: [["Ik zie hem.", "나는 그를 봐요."], ["Ik bel haar morgen.", "내일 그녀에게 전화할게요."], ["Dit cadeau is voor jou.", "이 선물은 너를 위한 거야."]]
      },
      {
        title: "3단계. '우리의'는 ons와 onze, 두 가지예요",
        body: "'나의'는 <span class='nl'>mijn</span>, '너의'는 <span class='nl'>jouw</span>처럼 하나뿐이지만, '우리의'만 두 가지예요. <b>het 단어 하나</b> 앞에는 <b>ons</b>, <b>de 단어</b>와 <b>여러 개(복수)</b> 앞에는 <b>onze</b>를 써요.",
        visual: { type: "twobox",
          left: { title: "ONS", note: "het 단어 (1개)", items: [["ons huis", "우리 집", "huis"], ["ons boek", "우리 책", "boek"]] },
          right: { title: "ONZE", note: "de 단어, 복수", items: [["onze auto", "우리 차", "auto"], ["onze kat", "우리 고양이", "kat"]] } },
        ex: [["Ons huis is klein.", "우리 집은 작아요."], ["Onze kat slaapt.", "우리 고양이는 자고 있어요."], ["Onze kinderen spelen buiten.", "우리 아이들은 밖에서 놀아요."]]
      },
      {
        title: "4단계. het 단어에는 dit(이)와 dat(저)",
        body: "가까이 있으면 '이', 멀리 있으면 '저'예요. <b>het 단어</b>에는 가까우면 <b>dit</b>, 멀면 <b>dat</b>을 써요. 그리고 사람이나 물건을 <b>소개할 때</b>는 de/het와 상관없이 <span class='nl'>Dit is ... / Dat is ...</span>를 써요.",
        visual: { type: "neardist", near: ["dit huis", "이 집"], far: ["dat huis", "저 집"], pic: "huis" },
        ex: [["Dit huis is groot.", "이 집은 커요."], ["Dat boek is van mij.", "저 책은 내 거예요."], ["Dit is mijn broer.", "이쪽은 우리 오빠예요."]]
      },
      {
        title: "5단계. de 단어와 복수에는 deze(이)와 die(저)",
        body: "<b>de 단어</b>와 <b>여러 개(복수)</b>에는 가까우면 <b>deze</b>, 멀면 <b>die</b>를 써요. 복수가 되면 het 단어도 deze/die를 써요: <span class='nl'>dit boek → deze boeken</span>.",
        visual: { type: "twobox",
          left: { title: "DE 단어 · 복수", note: "deze(이) / die(저)", items: [["deze fiets", "이 자전거", "fiets"], ["die fiets", "저 자전거", "fiets"], ["deze boeken", "이 책들", "boek"]] },
          right: { title: "HET 단어 (1개)", note: "dit(이) / dat(저)", items: [["dit boek", "이 책", "boek"], ["dat boek", "저 책", "boek"], ["dit huis", "이 집", "huis"]] } },
        ex: [["Deze fiets is nieuw.", "이 자전거는 새 거예요."], ["Die schoenen zijn te duur.", "저 신발은 너무 비싸요."], ["Deze jurk is mooi, maar die jurk is te duur.", "이 원피스는 예쁜데, 저 원피스는 너무 비싸요."]]
      }
    ],
    mistakes: [
      "<span class='nl'>Ik zie hij.</span> ✗ → <span class='nl'>Ik zie hem.</span> ✓ 동사 뒤 '그를' 자리에는 목적격 hem이에요.",
      "<span class='nl'>onze huis</span> ✗ → <span class='nl'>ons huis</span> ✓ huis는 het 단어라서 ons예요.",
      "<span class='nl'>dit fiets</span> ✗ → <span class='nl'>deze fiets</span> ✓ fiets는 de 단어라서 deze예요."
    ],
    rules: [
      "많은 대명사에 강조형과 약한형이 있어요: <span class='nl'>jij / je, wij / we, zij / ze, mij / me</span>. 보통 말할 때는 약한형을 많이 써요.",
      "동사의 목적어나 전치사 뒤에는 목적격: <span class='nl'>Ik zie hem. Dit is voor jou.</span>",
      "'우리의'는 <b>ons</b>(het 단수 명사) / <b>onze</b>(de 명사, 복수): <span class='nl'>ons huis, onze tafel, onze kinderen</span>",
      "지시어: de 명사와 복수에는 <b>deze</b>(이) / <b>die</b>(저), het 단수 명사에는 <b>dit</b>(이) / <b>dat</b>(저). <span class='nl'>deze jurk, die boeken, dit huis, dat boek</span>",
      "사람이나 물건을 소개할 때는 명사와 상관없이 <b>dit / dat</b>: <span class='nl'>Dit is mijn broer. Dat zijn mijn boeken.</span>",
      "<b>er</b>: 장소(거기)를 가리키거나(<span class='nl'>Ik woon er al twee jaar.</span>), 숫자와 함께 쓰거나(<span class='nl'>Ik heb er drie.</span>), 전치사와 붙어 '그것'을 대신해요(<span class='nl'>Je staat er goed mee.</span>)."
    ],
    table: {
      head: ["인칭", "주격", "목적격", "소유격"],
      rows: [
        ["나", "ik", "mij / me", "mijn"],
        ["너", "jij / je", "jou / je", "jouw / je"],
        ["당신", "u", "u", "uw"],
        ["그", "hij", "hem", "zijn"],
        ["그녀", "zij / ze", "haar", "haar"],
        ["그것", "het", "het", "zijn"],
        ["우리", "wij / we", "ons", "ons / onze"],
        ["너희", "jullie", "jullie", "jullie"],
        ["그들", "zij / ze", "hen / hun / ze", "hun"]
      ]
    },
    examples: [
      ["Deze jurk is mooi, maar die jurk is te duur.", "이 원피스는 예쁜데, 저 원피스는 너무 비싸요."],
      ["Dit huis is van ons.", "이 집은 우리 거예요."],
      ["Onze kinderen spelen buiten.", "우리 아이들은 밖에서 놀아요."],
      ["Ik bel hem morgen.", "내일 그에게 전화할게요."],
      ["Je staat er goed mee!", "그거 너한테 잘 어울려!"],
      ["Hoeveel appels heb je? Ik heb er drie.", "사과 몇 개 있어? 세 개 있어."]
    ],
    tip: "het 단어 짝꿍: dit, dat, ons. de 단어와 복수 짝꿍: deze, die, onze.",
    mc: [
      { q: "___ huis (가까이 있는 것)", opts: ["Deze", "Dit", "Die"], a: 1, ex: "huis는 het 단어예요. het 단어가 가까이 있으면 dit을 써요." },
      { q: "___ boeken (멀리 있는 것, 복수)", opts: ["Dat", "Die", "Dit"], a: 1, ex: "여러 개(복수)에는 deze/die를 써요. 멀리 있으니 die예요." },
      { q: "___ huis is groot. (우리의)", opts: ["Onze", "Ons"], a: 1, ex: "huis는 het 단어 하나예요. 그래서 '우리의'는 ons를 써요." },
      { q: "Ik zie ___. (그 남자를)", opts: ["hij", "hem", "zijn"], a: 1, ex: "'그를'처럼 동사 뒤 '~을/를' 자리예요. 그래서 목적격 hem을 써요." },
      { q: "Dit cadeau is voor ___. (너)", opts: ["jij", "jouw", "jou"], a: 2, ex: "voor(~을 위해) 뒤에는 목적격이 와요. '너'의 목적격은 jou예요." },
      { q: "___ gaan naar huis. (우리는, 짧은 모양)", opts: ["We", "Ons", "Onze"], a: 0, ex: "'우리는'(주인공)은 wij이고, 짧은 모양은 we예요. ons/onze는 '우리를, 우리의'예요." },
      { q: "Ik bel ___ morgen. (그녀에게)", opts: ["zij", "haar", "hij"], a: 1, ex: "동사 뒤 '~에게' 자리라서 목적격이에요. '그녀'의 목적격은 haar예요." },
      { q: "___ auto is oud. (우리의)", opts: ["Ons", "Onze"], a: 1, ex: "auto는 de 단어예요. de 단어 앞 '우리의'는 onze예요." },
      { q: "___ boek is van mij. (멀리 있는 책)", opts: ["Dit", "Dat", "Die"], a: 1, ex: "boek는 het 단어예요. het 단어가 멀리 있으면 dat을 써요." },
      { q: "___ jas is warm. (가까이 있는 외투)", opts: ["Dit", "Deze", "Dat"], a: 1, ex: "jas는 de 단어예요. de 단어가 가까이 있으면 deze를 써요." },
      { q: "___ is mijn zus. (그녀는)", opts: ["Zij", "Haar", "Hem"], a: 0, ex: "문장의 주인공(~는) 자리라서 주격이에요. '그녀는'은 zij예요." },
      { q: "Kom je met ___? (우리와 함께)", opts: ["wij", "ons", "onze"], a: 1, ex: "met(~와 함께) 뒤에는 목적격이 와요. '우리'의 목적격은 ons예요." },
      { q: "___ appartement is klein. (우리의)", opts: ["Ons", "Onze"], a: 0, ex: "appartement는 het 단어 하나예요. 그래서 '우리의'는 ons예요." },
      { q: "___ huis is te duur. (멀리 있는 집)", opts: ["Dat", "Die", "Deze"], a: 0, ex: "huis는 het 단어예요. het 단어가 멀리 있으면 dat을 써요." },
      { q: "___ schoenen zijn mooi. (가까이 있는 신발들)", opts: ["Dit", "Deze", "Dat"], a: 1, ex: "schoenen은 여러 개(복수)예요. 복수가 가까이 있으면 deze를 써요." }
    ],
    fill: [
      { q: "___ tafel (가까이 있는 것)", a: ["deze"], ex: "tafel은 de 단어예요. de 단어가 가까이 있으면 deze를 써요.", hint: "de tafel" },
      { q: "___ kinderen (우리의)", a: ["onze"], ex: "kinderen은 여러 명(복수)이에요. 복수 앞 '우리의'는 onze예요." },
      { q: "Ik zie Marie. → Marie를 대명사로", a: ["Ik zie haar"], ex: "Marie는 여자이고 '~를' 자리에 있어요. 그래서 목적격 haar(그녀를)를 써요.", hint: "그녀를" },
      { q: "Ik woon al twee jaar in Gent. → in Gent를 er로", a: ["Ik woon er al twee jaar"], ex: "er는 '거기'라는 뜻이에요. 장소 대신 쓰는 er는 동사 바로 뒤에 놓아요.", hint: "er = 거기" },
      { q: "___ is mijn broer. (옆에 있는 사람을 소개할 때, 가까이)", a: ["dit"], ex: "사람을 소개할 때는 de/het와 상관없이 dit이나 dat을 써요. 가까이 있으니 dit이에요." },
      { q: "jij의 짧은(약한) 모양", a: ["je"], ex: "jij와 je는 뜻이 같아요. 평소에는 짧은 je를 많이 써요." },
      { q: "Ik help Tom. → Tom을 대명사로", a: ["Ik help hem"], ex: "Tom은 남자이고 '~를' 자리에 있어요. 그래서 목적격 hem(그를)을 써요.", hint: "그를" },
      { q: "___ boek (우리의)", a: ["ons"], ex: "boek는 het 단어 하나예요. het 단어 앞 '우리의'는 ons예요.", hint: "het boek" },
      { q: "___ boek (가까이 있는 것)", a: ["dit"], ex: "boek는 het 단어예요. het 단어가 가까이 있으면 dit을 써요.", hint: "het boek" },
      { q: "___ boeken (가까이 있는 것, 복수)", a: ["deze"], ex: "여러 개(복수)는 het 단어였어도 deze/die를 써요. 가까이 있으니 deze예요." },
      { q: "wij의 짧은(약한) 모양", a: ["we"], ex: "wij와 we는 뜻이 같아요. 평소에는 짧은 we를 많이 써요." },
      { q: "Hij belt ___ morgen. (나에게)", a: ["mij", "me"], ex: "동사 뒤 '~에게' 자리라서 목적격이에요. '나'의 목적격은 mij 또는 짧은 me예요." },
      { q: "___ tafel (우리의)", a: ["onze"], ex: "tafel은 de 단어예요. de 단어 앞 '우리의'는 onze예요.", hint: "de tafel" },
      { q: "___ huis (멀리 있는 것)", a: ["dat"], ex: "huis는 het 단어예요. het 단어가 멀리 있으면 dat을 써요.", hint: "het huis" },
      { q: "___ jurk (멀리 있는 것)", a: ["die"], ex: "jurk는 de 단어예요. de 단어가 멀리 있으면 die를 써요.", hint: "de jurk" }
    ]
  },
  {
    id: 12,
    ko: "명령문과 실용 표현",
    nl: "Imperatief en praktische uitdrukkingen",
    emoji: "deur",
    easy: "'~해!'라고 말할 때는 ik 모양 그대로 맨 앞에 쓰면 돼요.",
    why: "'들어와요!', '조심해!', '우리 커피 마실까?'처럼 집, 가게, 친구 사이에서 바로 쓰는 말이에요.",
    intro: "가게, 집, 친구와의 대화에서 바로 쓸 수 있는 부탁과 제안 표현이에요. 명령형은 어간만 쓰면 돼서 정말 간단해요.",
    terms: [
      ["명령문", "'~해!, ~하세요'처럼 시키거나 부탁하는 문장이에요."],
      ["어간", "동사원형에서 -en을 뺀 몸통이에요. ik 모양과 같아요. 예: komen → kom"],
      ["접두사", "분리동사 앞의 작은 조각이에요. 예: opstaan의 op"],
      ["제안", "'~할까요?'처럼 함께 하자고 묻거나 해 주겠다고 말하는 것이에요."]
    ],
    steps: [
      {
        title: "1단계. 명령형은 ik 모양 그대로!",
        body: "'~해!'라고 말할 때는 <b>어간</b>(ik 뒤에 오는 모양)만 쓰면 돼요. <b>주어도 없고, -t도 붙이지 않아요</b>. 동사가 맨 앞에 와요. 끝에 <span class='nl'>alsjeblieft</span>(부탁해요)를 붙이면 더 친절해요.",
        visual: { type: "formula", parts: ["ik geef", "−", "ik"], result: "Geef!", caption: "ik 모양에서 ik만 빼면 명령형!" },
        ex: [["Kom hier!", "이리 와!"], ["Geef me het boek, alsjeblieft.", "그 책 좀 줘."], ["Lees dit boek!", "이 책 읽어 봐!"]]
      },
      {
        title: "2단계. 부드럽게 말하기: maar, even",
        body: "명령형은 조금 세게 들릴 수 있어요. <span class='nl'>maar</span>를 넣으면 '편하게 ~해요'처럼 부드러워지고, <span class='nl'>even</span>을 넣으면 '잠깐 ~해 줘'라는 느낌이 돼요. <span class='nl'>Doe maar!</span>는 '응, 그렇게 해!'라는 허락이에요.",
        visual: { type: "blocks", caption: "maar가 들어가면 부드러운 말투가 돼요", rows: [
          { words: ["Kom", "maar", "binnen"], hl: [0], hl2: [2], ko: "편하게 들어오세요" },
          { words: ["Wacht", "even"], hl: [0], ko: "잠깐만 기다려" },
          { words: ["Doe", "maar"], hl: [0], ko: "응, 그렇게 해" }
        ] },
        ex: [["Kom maar binnen.", "편하게 들어오세요."], ["Wacht even.", "잠깐만 기다려."], ["Mag ik je pen gebruiken? Ja, doe maar!", "펜 좀 써도 돼? 응, 써!"]]
      },
      {
        title: "3단계. 분리동사는 접두사가 끝으로",
        body: "8과에서 배운 분리동사도 명령형이 될 수 있어요. 동사 몸통은 <b>맨 앞</b>, 접두사(op, in 같은 앞조각)는 <b>맨 끝</b>으로 가요.",
        visual: { type: "blocks", caption: "주황색 = 동사(맨 앞), 파란색 = 접두사(맨 끝)", rows: [
          { words: ["Sta", "op"], hl: [0], hl2: [1], ko: "일어나!" },
          { words: ["Ruim", "je kamer", "op"], hl: [0], hl2: [2], ko: "네 방 정리해!" },
          { words: ["Vul", "het formulier", "in"], hl: [0], hl2: [2], ko: "서류를 작성하세요" }
        ] },
        ex: [["Sta op!", "일어나!"], ["Ruim je kamer op!", "네 방 정리해!"], ["Neem een paraplu mee!", "우산 가져가!"]]
      },
      {
        title: "4단계. zijn(~이다)만 특별해요: Wees!",
        body: "거의 모든 동사는 ik 모양이 명령형이지만, <b>zijn</b>(~이다, ~하다)은 예외예요. '조심해!, 조용히 해!'는 <b>Wees</b>로 시작해요. '~하지 마'는 뒤에 <span class='nl'>niet</span>을 넣어요.",
        visual: { type: "twobox",
          left: { title: "보통 동사", note: "ik 모양 그대로", items: [["Kom!", "와!"], ["Geef!", "줘!"], ["Maak!", "만들어!"]] },
          right: { title: "zijn → WEES", note: "특별한 모양", items: [["Wees voorzichtig!", "조심해!"], ["Wees stil!", "조용히 해!"], ["Wees niet bang.", "겁먹지 마."]] } },
        ex: [["Wees voorzichtig!", "조심해!"], ["Wees niet bang.", "겁먹지 마."], ["Heb geduld.", "조금만 참아. (hebben → heb)"]]
      },
      {
        title: "5단계. 제안하고 정중하게 부탁하기",
        body: "'내가 ~할까요?'는 <b>Zal ik ...?</b>, '우리 ~할까요?'는 <b>Zullen we ...?</b>예요. 조동사(도우미 동사)가 맨 앞, 동사원형은 맨 끝이에요. 가게에서는 <span class='nl'>Hebt u ...? Mag ik ...? Ik wil graag ...</span>로 정중하게 말해요.",
        visual: { type: "blocks", caption: "Zal / Zullen이 1번, 동사원형은 끝!", rows: [
          { words: ["Zal", "ik", "het raam", "openen"], hl: [0], hl2: [3], num: true, ko: "내가 창문 열까요?" },
          { words: ["Zullen", "we", "koffie", "drinken"], hl: [0], hl2: [3], num: true, ko: "우리 커피 마실까?" }
        ] },
        ex: [["Zal ik een maat kleiner halen?", "한 사이즈 작은 걸 가져다 드릴까요?"], ["Zullen we een pintje drinken?", "우리 맥주 한 잔 할까?"], ["Hebt u deze broek in een maat kleiner?", "이 바지 한 사이즈 작은 거 있나요?"]]
      }
    ],
    mistakes: [
      "<span class='nl'>Komt!</span> ✗ → <span class='nl'>Kom!</span> ✓ 명령형에는 -t를 붙이지 않아요.",
      "<span class='nl'>Ben voorzichtig!</span> ✗ → <span class='nl'>Wees voorzichtig!</span> ✓ zijn의 명령형은 Wees예요.",
      "<span class='nl'>Opsta!</span> ✗ → <span class='nl'>Sta op!</span> ✓ 분리동사는 명령형에서도 접두사가 끝으로 가요."
    ],
    rules: [
      "명령형 = <b>어간</b>(주어 없음, -t 없음): <span class='nl'>geven → Geef!, komen → Kom!, lezen → Lees!, maken → Maak!</span>",
      "<b>zijn</b>의 명령형은 특별하게 <b>Wees!</b>: <span class='nl'>Wees voorzichtig! Wees niet bang.</span> hebben은 <span class='nl'>Heb geduld.</span>",
      "분리동사는 접두사가 끝으로 가요: <span class='nl'>Sta op! Ruim je kamer op! Vul het formulier in!</span>",
      "<b>maar, even, eens</b>를 넣으면 부드러워져요. <span class='nl'>Doe maar!</span> = 그래, 그렇게 해 / 편하게 해. 격식 있게는 <span class='nl'>Komt u maar binnen.</span>",
      "제안: <b>Zal ik ...?</b> (내가 ~할까요?), <b>Zullen we ...?</b> (우리 ~할까요?) <span class='nl'>Zal ik een maat kleiner halen?</span>",
      "정중한 요청: <span class='nl'>Hebt u (Heeft u) een maat kleiner? Mag ik ...? Kunt u ...? Ik wil graag ...</span>"
    ],
    examples: [
      ["Geef me het boek, alsjeblieft.", "그 책 좀 줘."],
      ["Mag ik je pen gebruiken? Ja, doe maar!", "펜 좀 써도 돼? 응, 써!"],
      ["Wees voorzichtig!", "조심해!"],
      ["Zal ik een maat kleiner halen?", "한 사이즈 작은 걸 가져다 드릴까요?"],
      ["Hebt u deze broek in een maat kleiner?", "이 바지 한 사이즈 작은 거 있나요?"],
      ["Zullen we een pintje drinken?", "우리 맥주 한 잔 할까?"]
    ],
    tip: "명령형은 ik 형태와 같아요. ik geef → Geef! 단, zijn만은 Wees!",
    mc: [
      { q: "geven → 명령형", opts: ["Geeft!", "Geef!", "Geven!"], a: 1, ex: "명령형은 ik 모양과 같아요. ik geef이니까 Geef!예요." },
      { q: "zijn → 명령형: '조용히 해!'", opts: ["Ben stil!", "Is stil!", "Wees stil!"], a: 2, ex: "zijn만 특별해서 ik 모양(ben)을 쓰지 않아요. 명령형은 Wees예요." },
      { q: "가게에서 점원에게 정중하게 '한 사이즈 작은 거 있나요?'", opts: ["Hebt u een maat kleiner?", "Heeft jij een maat kleiner?", "Hebben u een maat kleiner?"], a: 0, ex: "점원에게는 정중한 u를 써요. u에는 hebt(또는 heeft)가 짝이에요." },
      { q: "친구: Mag ik je pen gebruiken? → '그럼, 써!'", opts: ["Wees maar!", "Zal ik?", "Doe maar!"], a: 2, ex: "Doe maar는 '응, 그렇게 해'라는 허락의 말이에요. 부드럽고 친근하게 들려요." },
      { q: "내가 창문 열까요? → ___ ik het raam openen?", opts: ["Zullen", "Zal", "Zult"], a: 1, ex: "'내가 ~할까요?'는 Zal ik ...?예요. ik에는 zal이 짝이에요." },
      { q: "lezen → 명령형", opts: ["Lees!", "Lest!", "Lezen!"], a: 0, ex: "명령형은 ik 모양과 같아요. ik lees이니까 Lees!예요." },
      { q: "손님에게: '편하게 들어오세요.'", opts: ["Kom maar binnen.", "Maar kom binnen.", "Komt maar binnen."], a: 0, ex: "명령형 Kom이 맨 앞이고, maar는 바로 뒤에 넣어요. 명령형에는 -t를 붙이지 않아요." },
      { q: "'외투 입어!' (aandoen)", opts: ["Aandoe je jas!", "Doe je jas aan!", "Doe aan je jas!"], a: 1, ex: "분리동사라서 몸통 Doe가 맨 앞, 접두사 aan은 맨 끝으로 가요." },
      { q: "'제시간에 와!' (op tijd = 제시간에)", opts: ["Wees op tijd!", "Ben op tijd!", "Is op tijd!"], a: 0, ex: "zijn은 특별해서 명령형이 Wees예요. ik 모양 ben을 쓰지 않아요." },
      { q: "우리 산책할까? → ___ we wandelen?", opts: ["Zal", "Zullen", "Zult"], a: 1, ex: "'우리 ~할까?'는 Zullen we ...?예요. we(여럿)에는 zullen이 짝이에요." },
      { q: "wachten → 명령형", opts: ["Wacht!", "Wachten!", "Wachtt!"], a: 0, ex: "ik wacht에서 ik만 빼면 Wacht!예요. 어간이 원래 t로 끝나서 t가 하나뿐이에요." },
      { q: "'잠깐만 도와줘.'", opts: ["Help me even.", "Helpt me even.", "Even me help."], a: 0, ex: "명령형 Help가 맨 앞이에요. even을 넣으면 '잠깐 ~해 줘'처럼 부드러워져요." },
      { q: "'식탁 치워!' (afruimen)", opts: ["Ruim de tafel af!", "Afruim de tafel!", "Ruim af de tafel!"], a: 0, ex: "분리동사라서 몸통 Ruim이 맨 앞, 접두사 af는 맨 끝으로 가요." },
      { q: "hebben → 명령형: '조금만 참아.'", opts: ["Heb geduld.", "Hebt geduld.", "Wees geduld."], a: 0, ex: "hebben은 ik 모양 heb 그대로 명령형이 돼요. -t는 붙이지 않아요." },
      { q: "가게에서 정중하게: '빵 하나 주세요.'", opts: ["Ik wil graag een brood.", "Ik graag wil een brood.", "Geeft een brood!"], a: 0, ex: "Ik wil graag ...는 가게에서 쓰는 정중한 부탁이에요. 동사 wil은 2번 자리예요." }
    ],
    fill: [
      { q: "komen → 명령형", a: ["Kom", "Kom!"], ex: "ik kom에서 ik만 빼면 돼요. 그래서 Kom!이에요.", hint: "ik kom" },
      { q: "opstaan → 명령형", a: ["Sta op"], ex: "분리동사라서 몸통 sta가 맨 앞, 접두사 op은 맨 끝으로 가요." },
      { q: "Je moet je kamer opruimen. → 명령문", a: ["Ruim je kamer op", "Ruim jouw kamer op"], ex: "명령문은 동사 몸통 ruim으로 시작해요. 접두사 op은 맨 끝으로 보내요.", hint: "Ruim ... op" },
      { q: "zijn + voorzichtig → 명령문", a: ["Wees voorzichtig"], ex: "zijn은 특별한 동사라서 명령형이 Wees예요. 그래서 Wees voorzichtig!예요." },
      { q: "we / koffie / drinken → Zullen으로 제안하는 의문문", a: ["Zullen we koffie drinken?", "Zullen wij koffie drinken?"], ex: "'우리 ~할까?'는 Zullen이 맨 앞, 그다음 we예요. 동사원형 drinken은 맨 끝에 가요." },
      { q: "maken → 명령형", a: ["Maak", "Maak!"], ex: "ik maak에서 ik만 빼면 돼요. 그래서 Maak!이에요.", hint: "ik maak" },
      { q: "Wacht! → even을 넣어서 부드럽게", a: ["Wacht even"], ex: "even은 명령형 바로 뒤에 넣어요. '잠깐만 기다려'라는 부드러운 말이 돼요." },
      { q: "Je moet het formulier invullen. → 명령문", a: ["Vul het formulier in"], ex: "명령문은 동사 몸통 Vul로 시작해요. 접두사 in은 맨 끝으로 보내요.", hint: "Vul ... in" },
      { q: "zijn + niet bang → 명령문 (겁먹지 마)", a: ["Wees niet bang"], ex: "zijn의 명령형은 Wees예요. '~하지 마'는 뒤에 niet을 넣어요.", hint: "Wees ..." },
      { q: "ik / je / helpen → Zal로 제안하는 의문문", a: ["Zal ik je helpen?", "Zal ik jou helpen?"], ex: "'내가 ~할까요?'는 Zal ik가 맨 앞이에요. 동사원형 helpen은 맨 끝에 가요." },
      { q: "drinken → 명령형: ___ water! (물 마셔!)", a: ["Drink"], ex: "ik drink에서 ik만 빼면 돼요. 그래서 Drink water!예요.", hint: "ik drink" },
      { q: "Kom binnen. → maar를 넣어서 부드럽게", a: ["Kom maar binnen"], ex: "maar는 명령형 Kom 바로 뒤에 넣어요. '편하게 들어오세요'라는 뜻이 돼요." },
      { q: "meenemen → '우산 가져가!' (een paraplu)", a: ["Neem een paraplu mee"], ex: "분리동사라서 몸통 Neem이 맨 앞, 접두사 mee는 맨 끝으로 가요.", hint: "Neem ... mee" },
      { q: "zijn + lief → 명령문 (착하게 굴어!)", a: ["Wees lief"], ex: "zijn은 특별한 동사라서 명령형이 Wees예요. 그래서 Wees lief!예요." },
      { q: "we / naar het park / gaan → Zullen으로 제안하는 의문문", a: ["Zullen we naar het park gaan?", "Zullen wij naar het park gaan?"], ex: "'우리 ~할까?'는 Zullen we가 맨 앞이에요. 동사원형 gaan은 맨 끝에 가요." }
    ]
  }
];
