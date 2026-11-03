/* Dutch grammar lessons 1-6, rewritten for A1 Korean learners. ES5, no modules. */
window.GRAMMAR_A = [
  {
    id: 1,
    ko: "명사와 관사",
    nl: "Zelfstandige naamwoorden en lidwoorden",
    emoji: "huis",
    easy: "네덜란드어 명사 앞에는 de 아니면 het가 붙어요. 여러 개가 되면 언제나 de예요.",
    why: "마트에서 \"het brood, alstublieft(빵 주세요)\"처럼 물건 이름을 말할 때마다 de나 het가 필요해요. 처음부터 같이 외우면 나중에 형용사도 훨씬 쉬워져요.",
    terms: [
      ["명사", "사람, 물건, 장소의 이름이에요. 예: 집(huis), 책(boek), 탁자(tafel)."],
      ["관사", "명사 앞에 붙는 작은 말이에요. 영어의 the, a 같은 것이에요. 네덜란드어에는 de, het, een이 있어요."],
      ["복수형", "여러 개를 말할 때 쓰는 모양이에요. 예: boek(책 한 권) → boeken(책들)."],
      ["지소형", "'작은 ~', '귀여운 ~'이라는 뜻으로 끝에 -je를 붙인 모양이에요. 예: huis(집) → huisje(작은 집)."]
    ],
    steps: [
      {
        title: "1단계. 관사는 de와 het, 두 가지예요",
        body: "'그 ~'라고 말할 때 명사 앞에 <b>de</b>나 <b>het</b>를 붙여요. 어느 쪽인지는 단어마다 정해져 있어요. 명사의 약 3분의 2는 <b>de</b>예요. 그래서 단어를 외울 때 <span class='nl'>de tafel</span>처럼 <b>관사까지 한 덩어리로</b> 외우는 게 제일 좋아요. 참고로 '하나의 ~'라고 할 때는 de, het 상관없이 <span class='nl'>een</span>을 써요.",
        visual: {
          type: "twobox",
          left: { title: "DE", note: "대부분의 명사 (약 2/3)", items: [["de tafel", "탁자", "tafel"], ["de fiets", "자전거", "fiets"], ["de kat", "고양이", "kat"], ["de deur", "문", "deur"]] },
          right: { title: "HET", note: "나머지 명사 (약 1/3)", items: [["het huis", "집", "huis"], ["het boek", "책", "boek"], ["het brood", "빵", "brood"], ["het bed", "침대", "bed"]] }
        },
        ex: [["de tafel / een tafel", "그 탁자 / 탁자 하나"], ["het huis / een huis", "그 집 / 집 하나"], ["de koffie", "커피"]]
      },
      {
        title: "2단계. de인지 het인지 알려 주는 힌트",
        body: "규칙이 100%는 아니지만, 힌트가 몇 개 있어요. <b>사람</b>(남자, 여자)과 <b>-ing, -heid, -tie</b>로 끝나는 말은 보통 <b>de</b>예요. <b>-je로 끝나는 말</b>, <b>동사원형을 명사로 쓴 말</b>(<span class='nl'>het eten</span> 음식), <b>-um으로 끝나는 말</b>은 <b>het</b>예요.",
        visual: {
          type: "twobox",
          left: { title: "DE 힌트", note: "사람, -ing, -heid, -tie", items: [["de jongen", "남자아이", "jongen"], ["de man", "남자"], ["de woning", "집, 주거"], ["de informatie", "정보"]] },
          right: { title: "HET 힌트", note: "-je, 동사원형, -um", items: [["het meisje", "여자아이", "meisje"], ["het eten", "음식"], ["het zwemmen", "수영"], ["het museum", "박물관"]] }
        },
        ex: [["de vrouw", "여자"], ["het meisje", "여자아이 (-je라서 het!)"], ["het museum", "박물관"]]
      },
      {
        title: "3단계. 여러 개가 되면 언제나 de",
        body: "이건 예외가 없는 규칙이에요. het 단어도 <b>여러 개(복수형)</b>가 되면 관사가 <b>de</b>로 바뀌어요. 그래서 복수형 앞에서는 고민할 필요가 없어요.",
        visual: { type: "formula", parts: ["het boek", "+", "en"], result: "de boeken", caption: "het 단어도 여러 개가 되면 de로 바뀌어요!" },
        ex: [["het boek → de boeken", "책 → 책들"], ["het huis → de huizen", "집 → 집들"], ["de tafel → de tafels", "탁자 → 탁자들"]]
      },
      {
        title: "4단계. 복수형 만들기: -en 또는 -s",
        body: "보통은 끝에 <b>-en</b>을 붙여요. 단어가 강세 없는 <b>-el, -er, -em, -en, -je</b>로 끝나면 <b>-s</b>를 붙여요. -en을 붙일 때 철자가 조금 바뀌기도 해요. 짧은 모음 뒤 자음은 두 번 쓰고(<span class='nl'>kat → katten</span>), 긴 모음은 하나로 줄여요(<span class='nl'>straat → straten</span>). f는 v로, s는 z로 바뀌어요(<span class='nl'>brief → brieven, huis → huizen</span>).",
        visual: { type: "pictures", items: [["kat", "de katten", "고양이들 (t 두 번)"], ["brief", "de brieven", "편지들 (f → v)"], ["huis", "de huizen", "집들 (s → z)"], ["tafel", "de tafels", "탁자들 (-el → -s)"]] },
        ex: [["de kat → de katten", "고양이 → 고양이들"], ["de brief → de brieven", "편지 → 편지들"], ["de sleutel → de sleutels", "열쇠 → 열쇠들"]]
      },
      {
        title: "5단계. 작아지면 언제나 het (-je)",
        body: "'작은 ~', '귀여운 ~'이라고 말하고 싶으면 끝에 <b>-je</b>(또는 -tje, -pje, -etje)를 붙여요. 이렇게 만든 단어는 원래 de 단어였어도 <b>항상 het</b>예요. 여러 개가 되면 -s를 붙여요(<span class='nl'>de huisjes</span>).",
        visual: { type: "formula", parts: ["de tafel", "+", "tje"], result: "het tafeltje", caption: "작아지면 de도 het로 바뀌어요!" },
        ex: [["het huis → het huisje", "집 → 작은 집"], ["de tafel → het tafeltje", "탁자 → 작은 탁자"], ["het boek → het boekje", "책 → 작은 책, 수첩"]]
      }
    ],
    mistakes: [
      "<span class='nl'>het boeken</span> ✗ → <span class='nl'>de boeken</span> ✓ 여러 개가 되면 het도 de로 바꿔야 해요.",
      "<span class='nl'>de meisje</span> ✗ → <span class='nl'>het meisje</span> ✓ 사람이라도 -je로 끝나면 het예요.",
      "단어만 외우고 관사를 안 외우면 나중에 헷갈려요. 단어장에는 늘 <span class='nl'>de tafel, het huis</span>처럼 관사까지 적어 두세요."
    ],
    rules: [
      "정관사는 <b>de</b>와 <b>het</b> 두 가지예요. 명사의 약 3분의 2가 de 명사라서, 관사까지 한 덩어리로 외우는 게 좋아요. 예: <span class='nl'>de tafel, het huis</span>",
      "'하나의 ~'는 de, het 상관없이 <b>een</b>이에요. <span class='nl'>een tafel, een huis</span>",
      "<b>het</b>가 붙는 대표 그룹: -je로 끝나는 말(<span class='nl'>het meisje</span>), 명사로 쓴 동사원형(<span class='nl'>het eten, het zwemmen</span>), -um으로 끝나는 말(<span class='nl'>het museum</span>), -ment로 끝나는 말 대부분(<span class='nl'>het moment</span>).",
      "<b>de</b>가 붙는 대표 그룹: 사람(<span class='nl'>de man, de vrouw</span>), -heid, -ing, -tie로 끝나는 말(<span class='nl'>de vrijheid, de woning, de informatie</span>).",
      "<b>복수형에는 언제나 de</b>를 써요. <span class='nl'>het boek → de boeken</span>",
      "복수형은 보통 <b>-en</b>. 철자 변화: 긴 모음은 하나로(<span class='nl'>straat → straten</span>), 짧은 모음 뒤 자음은 두 번(<span class='nl'>kat → katten</span>), f → v, s → z(<span class='nl'>brief → brieven, doos → dozen</span>).",
      "강세 없는 -el, -er, -em, -en, -je로 끝나면 <b>-s</b>: <span class='nl'>tafels, kamers, meisjes</span>",
      "지소형(-je, -tje, -pje, -etje)은 언제나 <b>het</b>: <span class='nl'>het huisje, het tafeltje, het balletje</span>"
    ],
    examples: [
      ["Het huis is groot.", "그 집은 커요."],
      ["De tafel staat in de keuken.", "식탁은 부엌에 있어요."],
      ["Het meisje leest een boek.", "그 여자아이는 책을 읽어요."],
      ["De boeken liggen op de zetel.", "책들이 소파 위에 있어요."],
      ["Waar is mijn gsm?", "내 휴대폰 어디 있지?"],
      ["Wij hebben een huisje in de Ardennen.", "우리는 아르덴에 작은 집이 있어요."]
    ],
    tip: "작아지면 무조건 het, 여러 개가 되면 무조건 de! 이 두 가지는 예외가 없어요.",
    drill: "#dehet",
    mc: [
      { q: "___ huis (집)", opts: ["de", "het"], a: 1, ex: "huis는 het 단어예요. 이런 단어는 규칙보다 'het huis'로 통째로 외우는 게 좋아요." },
      { q: "___ meisje (여자아이)", opts: ["de", "het"], a: 1, ex: "-je로 끝나는 말은 항상 het예요. 사람이어도 마찬가지예요." },
      { q: "___ woning (집, 주거)", opts: ["de", "het"], a: 0, ex: "-ing으로 끝나는 말은 de예요." },
      { q: "___ boeken (책들)", opts: ["het", "de"], a: 1, ex: "여러 개(복수형)일 때는 언제나 de예요." },
      { q: "het boek의 복수형은?", opts: ["de boeks", "de boeken", "het boeken"], a: 1, ex: "boek에는 -en을 붙여요. 여러 개가 됐으니 관사도 de로 바뀌어요." },
      { q: "___ fiets (자전거)", opts: ["de", "het"], a: 0, ex: "fiets는 de 단어예요. 명사의 약 3분의 2가 de라서 de 단어가 훨씬 많아요." },
      { q: "___ eten (음식)", opts: ["de", "het"], a: 1, ex: "eten은 원래 동사 '먹다'예요. 동사원형을 명사로 쓰면 항상 het예요." },
      { q: "___ vrouw (여자)", opts: ["de", "het"], a: 0, ex: "사람을 가리키는 말은 보통 de예요." },
      { q: "___ huizen (집들)", opts: ["het", "de"], a: 1, ex: "huis는 het 단어지만, 여러 개가 되면 언제나 de로 바뀌어요." },
      { q: "de kat의 복수형은?", opts: ["de kats", "de katen", "de katten"], a: 2, ex: "kat은 짧은 '아' 소리예요. 이 소리를 지키려고 t를 두 번 쓰고 -en을 붙여요." },
      { q: "___ museum (박물관)", opts: ["de", "het"], a: 1, ex: "-um으로 끝나는 말은 het예요." },
      { q: "___ informatie (정보)", opts: ["de", "het"], a: 0, ex: "-tie로 끝나는 말은 de예요." },
      { q: "___ huisje (작은 집)", opts: ["de", "het"], a: 1, ex: "-je를 붙여 작아진 말은 언제나 het예요." },
      { q: "het meisje의 복수형은?", opts: ["de meisjes", "het meisjes", "de meisjen"], a: 0, ex: "-je로 끝나는 말은 -s를 붙여요. 여러 개가 되면 관사는 de예요." },
      { q: "'자전거 하나'는?", opts: ["de fiets", "een fiets", "het fiets"], a: 1, ex: "'하나의 ~'는 de, het 상관없이 een을 써요." }
    ],
    fill: [
      { q: "boek(책) → 복수형", a: ["boeken", "de boeken"], ex: "대부분의 명사는 끝에 -en을 붙여서 여러 개를 만들어요.", hint: "-en" },
      { q: "tafel(탁자) → 복수형", a: ["tafels", "de tafels"], ex: "tafel처럼 -el로 끝나는 말은 -en 대신 -s를 붙여요.", hint: "-el로 끝나요" },
      { q: "doos(상자) → 복수형", a: ["dozen", "de dozen"], ex: "-en을 붙이면 긴 모음 oo는 o 하나로 줄고, s는 z로 바뀌어요.", hint: "s → z" },
      { q: "huis(집) → 지소형 (작은 집)", a: ["huisje", "het huisje"], ex: "끝에 -je를 붙이면 '작은 ~'이 돼요. 관사는 언제나 het예요.", hint: "-je" },
      { q: "틀린 곳 고치기: De meisje speelt.", a: ["Het meisje speelt"], ex: "meisje는 -je로 끝나서 de가 아니라 het를 써요.", hint: "-je로 끝나는 단어" },
      { q: "brief(편지) → 복수형", a: ["brieven", "de brieven"], ex: "-en을 붙일 때 f는 v로 바뀌어요.", hint: "f → v" },
      { q: "sleutel(열쇠) → 복수형", a: ["sleutels", "de sleutels"], ex: "-el로 끝나는 말은 -s를 붙여요.", hint: "-el로 끝나요" },
      { q: "tafel(탁자) → 지소형 (작은 탁자)", a: ["tafeltje", "het tafeltje"], ex: "tafel에는 -tje를 붙여요. 작아지면 de 단어도 het로 바뀌어요.", hint: "-tje" },
      { q: "'그 집들'을 관사까지 써 보세요 (huis)", a: ["de huizen"], ex: "여러 개라서 관사는 de예요. huis의 s는 z로 바뀌어서 huizen이 돼요.", hint: "de ..., s → z" },
      { q: "'집 하나'를 관사까지 써 보세요 (huis)", a: ["een huis"], ex: "'하나의 ~'는 de, het 상관없이 een이에요.", hint: "een" },
      { q: "straat(거리) → 복수형", a: ["straten", "de straten"], ex: "-en을 붙이면 긴 모음 aa가 a 하나로 줄어요.", hint: "aa → a" },
      { q: "kamer(방) → 복수형", a: ["kamers", "de kamers"], ex: "강세 없는 -er로 끝나는 말은 -s를 붙여요.", hint: "-er로 끝나요" },
      { q: "boek(책) → 지소형 (작은 책, 수첩)", a: ["boekje", "het boekje"], ex: "끝에 -je를 붙여요. 관사는 언제나 het예요.", hint: "-je" },
      { q: "틀린 곳 고치기: Het boeken liggen op de tafel.", a: ["De boeken liggen op de tafel"], ex: "boeken은 여러 개라서 het가 아니라 de를 써요.", hint: "여러 개면?" },
      { q: "bed(침대) → 복수형", a: ["bedden", "de bedden"], ex: "bed는 짧은 '에' 소리예요. 이 소리를 지키려고 d를 두 번 쓰고 -en을 붙여요.", hint: "자음 두 번" }
    ]
  },
  {
    id: 2,
    ko: "형용사 변화",
    nl: "Bijvoeglijke naamwoorden",
    emoji: "schoen",
    easy: "형용사가 명사 앞에 오면 보통 끝에 -e가 붙어요. 'een + het 단어'일 때만 안 붙어요.",
    why: "옷 가게에서 \"een blauwe jurk(파란 원피스)\", 집 이야기할 때 \"een groot huis(큰 집)\"처럼 모양과 색을 말할 때 꼭 필요해요.",
    terms: [
      ["형용사", "모양, 색, 크기를 말하는 단어예요. 예: groot(큰), klein(작은), rood(빨간)."],
      ["명사 앞", "형용사가 명사 바로 앞에 오는 경우예요. 예: de <b>grote</b> tafel(큰 탁자)."],
      ["동사 뒤", "'~은 ~해요'처럼 is 같은 동사 뒤에 형용사가 오는 경우예요. 예: De tafel is <b>groot</b>(탁자가 커요)."],
      ["단수", "하나를 말하는 모양이에요. 여러 개는 복수라고 해요."]
    ],
    steps: [
      {
        title: "1단계. 동사 뒤에서는 그대로",
        body: "'~이 ~해요'처럼 형용사가 <b>is, zijn 같은 동사 뒤</b>에 오면 모양이 <b>변하지 않아요</b>. de 단어든 het 단어든, 하나든 여러 개든 똑같아요.",
        visual: {
          type: "blocks",
          caption: "형용사가 동사 뒤에 있으면 사전에 나온 모양 그대로!",
          rows: [
            { words: ["De tafel", "is", "groot"], hl: [1], hl2: [2], num: false, ko: "탁자가 커요" },
            { words: ["Het huis", "is", "groot"], hl: [1], hl2: [2], num: false, ko: "집이 커요" }
          ]
        },
        ex: [["De soep is warm.", "수프가 따뜻해요."], ["Het weer is mooi.", "날씨가 좋아요."], ["De boeken zijn oud.", "책들이 오래됐어요."]]
      },
      {
        title: "2단계. 명사 앞에서는 보통 -e",
        body: "형용사가 <b>명사 바로 앞</b>에 오면 끝에 <b>-e</b>를 붙여요. de 앞이든 het 앞이든, 여러 개든 대부분 -e가 붙어요.",
        visual: { type: "formula", parts: ["groot", "+", "e"], result: "grote", caption: "de grote tafel, het grote huis, de grote huizen" },
        ex: [["de grote tafel", "큰 탁자"], ["het grote huis", "큰 집"], ["de grote huizen", "큰 집들"]]
      },
      {
        title: "3단계. 딱 하나의 예외: een + het 단어",
        body: "<b>het 단어 하나</b> 앞에 <b>een</b>(하나의), <b>geen</b>(~없는)이 있거나 관사가 아예 없으면 <b>-e를 붙이지 않아요</b>. de 단어는 een이 있어도 -e가 붙어요. 이것만 기억하면 형용사는 끝이에요.",
        visual: {
          type: "twobox",
          left: { title: "DE 단어 + een", note: "-e 붙어요", items: [["een grote tafel", "큰 탁자", "tafel"], ["een rode fiets", "빨간 자전거", "fiets"], ["een kleine kat", "작은 고양이", "kat"]] },
          right: { title: "HET 단어 + een", note: "-e 없어요", items: [["een groot huis", "큰 집", "huis"], ["een rood boek", "빨간 책", "boek"], ["een klein bed", "작은 침대", "bed"]] }
        },
        ex: [["een groot huis", "큰 집 (het 단어 + een)"], ["het grote huis", "그 큰 집 (het 뒤에는 -e)"], ["een blauwe jurk", "파란 원피스 (de 단어라서 -e)"]]
      },
      {
        title: "4단계. -e를 붙일 때 철자가 바뀌어요",
        body: "-e를 붙이면 소리를 지키려고 철자가 바뀌기도 해요. 긴 모음(oo, aa)은 글자 하나로 줄여요(<span class='nl'>groot → grote</span>). 짧은 모음 뒤 자음은 두 번 써요(<span class='nl'>dik → dikke</span>). f는 v로, s는 z로 바뀌어요(<span class='nl'>lief → lieve, grijs → grijze</span>). <span class='nl'>oranje, roze</span>는 변하지 않아요.",
        visual: { type: "formula", parts: ["dik", "+", "k", "+", "e"], result: "dikke", caption: "짧은 '이' 소리를 지키려고 k를 한 번 더!" },
        ex: [["rood → de rode tas", "빨간 → 그 빨간 가방"], ["dik → een dikke trui", "두꺼운 → 두꺼운 스웨터"], ["lief → een lieve hond", "착한 → 착한 강아지"]]
      }
    ],
    mistakes: [
      "<span class='nl'>Het huis is grote.</span> ✗ → <span class='nl'>Het huis is groot.</span> ✓ 동사 뒤에서는 -e를 붙이지 않아요.",
      "<span class='nl'>een grote huis</span> ✗ → <span class='nl'>een groot huis</span> ✓ een + het 단어 하나일 때는 -e가 없어요.",
      "<span class='nl'>de roode tas</span> ✗ → <span class='nl'>de rode tas</span> ✓ -e를 붙이면 oo는 o 하나로 줄여요."
    ],
    rules: [
      "형용사가 동사 뒤에 오면 <b>변화 없음</b>: <span class='nl'>De tafel is groot. Het huis is groot.</span>",
      "형용사가 명사 앞에 오면 보통 <b>-e</b>: <span class='nl'>de grote tafel, het grote huis, de grote huizen</span>",
      "예외는 하나: <b>het 단수 명사</b> 앞에 <b>een / geen / 관사 없음</b>이면 -e가 없어요. <span class='nl'>een groot huis, geen groot huis, mooi weer</span>",
      "de 명사는 een이 와도 -e: <span class='nl'>een blauwe jurk, een grote tafel</span>",
      "철자 변화: <span class='nl'>groot → grote, dik → dikke, lief → lieve, grijs → grijze</span>",
      "무늬도 같은 규칙: <span class='nl'>een gestreept T-shirt, een gestreepte broek</span>. <span class='nl'>oranje, roze</span>는 변하지 않아요."
    ],
    examples: [
      ["Ik draag een gestreept T-shirt.", "나는 줄무늬 티셔츠를 입고 있어요."],
      ["Zij heeft een blauwe jurk gekocht.", "그녀는 파란 원피스를 샀어요."],
      ["Het grote huis staat naast de kerk.", "그 큰 집은 교회 옆에 있어요."],
      ["Dat is een groot huis.", "그건 큰 집이에요."],
      ["De soep is warm.", "수프가 따뜻해요."],
      ["We hebben een kleine tuin.", "우리는 작은 정원이 있어요."]
    ],
    tip: "'een + het 단어'일 때만 -e가 빠져요! 나머지는 거의 다 -e.",
    mc: [
      { q: "een ___ huis (groot, 큰)", opts: ["groot", "grote"], a: 0, ex: "huis는 het 단어이고 앞에 een이 있어요. 이때만 -e를 붙이지 않아요." },
      { q: "het ___ huis (groot, 큰)", opts: ["groot", "grote"], a: 1, ex: "het 뒤, 명사 앞이라 -e를 붙여요. -e가 빠지는 건 een일 때뿐이에요." },
      { q: "een ___ jurk (blauw, 파란)", opts: ["blauw", "blauwe"], a: 1, ex: "jurk는 de 단어예요. de 단어는 een이 있어도 -e가 붙어요." },
      { q: "De tafel is ___. (groot, 큰)", opts: ["grote", "groot"], a: 1, ex: "형용사가 is(동사) 뒤에 있어서 모양이 변하지 않아요." },
      { q: "de ___ huizen (oud, 오래된)", opts: ["oud", "oude", "ouden"], a: 1, ex: "여러 개(복수) 앞에서도 형용사에는 -e 하나만 붙여요." },
      { q: "Het weer is ___. (mooi, 좋은)", opts: ["mooi", "mooie"], a: 0, ex: "형용사가 is(동사) 뒤에 있어서 모양이 그대로예요." },
      { q: "een ___ tafel (klein, 작은)", opts: ["klein", "kleine"], a: 1, ex: "tafel은 de 단어예요. de 단어는 een이 있어도 -e가 붙어요." },
      { q: "een ___ boek (rood, 빨간)", opts: ["rood", "rode", "roode"], a: 0, ex: "boek는 het 단어이고 앞에 een이 있어요. 그래서 -e 없이 rood예요." },
      { q: "de ___ fiets (nieuw, 새)", opts: ["nieuw", "nieuwe"], a: 1, ex: "de 뒤, 명사 앞이라 -e를 붙여요." },
      { q: "lief(착한)에 -e를 붙이면?", opts: ["liefe", "lieve", "lievve"], a: 1, ex: "-e를 붙이면 f가 v로 바뀌어요. 그래서 lieve예요." },
      { q: "Het huis is ___. (oud, 오래된)", opts: ["oud", "oude"], a: 0, ex: "형용사가 is 뒤에 있으면 het 단어여도 모양이 변하지 않아요." },
      { q: "geen ___ brood (wit, 하얀)", opts: ["wit", "witte"], a: 0, ex: "brood는 het 단어이고 앞에 geen이 있어요. een처럼 geen일 때도 -e를 붙이지 않아요." },
      { q: "de ___ tassen (zwart, 검은)", opts: ["zwart", "zwarte", "zwarten"], a: 1, ex: "여러 개 앞에서도 형용사에는 -e 하나만 붙여요." },
      { q: "een ___ jas (dik, 두꺼운)", opts: ["dike", "dikke", "dik"], a: 1, ex: "jas는 de 단어라서 -e를 붙여요. 짧은 '이' 소리를 지키려고 k를 두 번 써요." },
      { q: "올바른 것은?", opts: ["een grote huis", "een groot huis", "een groote huis"], a: 1, ex: "een + het 단어 하나일 때는 -e를 붙이지 않아요." }
    ],
    fill: [
      { q: "een ___ trui (dik, 두꺼운)", a: ["dikke"], ex: "trui는 de 단어라서 -e를 붙여요. 짧은 모음 뒤라 k를 두 번 써요.", hint: "자음 두 번" },
      { q: "de ___ tas (rood, 빨간)", a: ["rode"], ex: "de 뒤라 -e를 붙여요. 그러면 oo가 o 하나로 줄어서 rode가 돼요.", hint: "oo → o" },
      { q: "een ___ appartement (klein, 작은)", a: ["klein"], ex: "appartement는 het 단어이고 een이 있어요. 그래서 -e 없이 klein이에요.", hint: "een + het 단어" },
      { q: "Het T-shirt is gestreept. → het ___ T-shirt", a: ["gestreepte"], ex: "형용사가 명사 앞으로 오고 앞에 het가 있으니 -e를 붙여요.", hint: "명사 앞" },
      { q: "een groot huis → een을 het로 바꾸기", a: ["het grote huis"], ex: "een이 het로 바뀌면 더 이상 예외가 아니라서 -e가 붙어요.", hint: "het ___ huis" },
      { q: "de ___ kat (klein, 작은)", a: ["kleine"], ex: "de 뒤, 명사 앞이라 -e를 붙여요.", hint: "명사 앞" },
      { q: "een ___ huis (mooi, 예쁜)", a: ["mooi"], ex: "huis는 het 단어이고 een이 있어요. 이때는 -e를 붙이지 않아요.", hint: "een + het 단어" },
      { q: "De kat is ___. (klein, 작은)", a: ["klein"], ex: "형용사가 is(동사) 뒤에 있어서 모양이 변하지 않아요.", hint: "동사 뒤" },
      { q: "een ___ broek (grijs, 회색)", a: ["grijze"], ex: "broek는 de 단어라서 -e를 붙여요. 이때 s가 z로 바뀌어요.", hint: "s → z" },
      { q: "het ___ bed (groot, 큰)", a: ["grote"], ex: "het 뒤, 명사 앞이라 -e를 붙여요. oo는 o 하나로 줄어요.", hint: "oo → o" },
      { q: "het ___ meisje (lief, 착한)", a: ["lieve"], ex: "het 뒤, 명사 앞이라 -e를 붙여요. f는 v로 바뀌어요.", hint: "f → v" },
      { q: "een ___ T-shirt (wit, 하얀)", a: ["wit"], ex: "T-shirt는 het 단어이고 een이 있어요. 그래서 -e 없이 wit예요.", hint: "een + het 단어" },
      { q: "De jurk is rood. → een ___ jurk", a: ["rode"], ex: "형용사가 명사 앞으로 왔어요. jurk는 de 단어라 een이 있어도 -e를 붙이고, oo는 o 하나로 줄어요.", hint: "oo → o" },
      { q: "Wat ___ weer! (mooi, 좋은, 관사 없음)", a: ["mooi"], ex: "weer는 het 단어이고 앞에 관사가 없어요. 이때도 -e를 붙이지 않아요.", hint: "관사 없는 het 단어" },
      { q: "een klein huis → 여러 개로 (de ... huizen)", a: ["de kleine huizen"], ex: "여러 개가 되면 een 예외가 아니라서 형용사에 -e가 붙어요.", hint: "de ___ huizen" }
    ]
  },
  {
    id: 3,
    ko: "현재 시제",
    nl: "Tegenwoordige tijd",
    emoji: "klok",
    easy: "동사에서 -en을 빼면 어간이에요. ik는 어간, 한 사람은 어간+t, 여럿은 원형 그대로예요.",
    why: "\"Ik woon in Gent(겐트에 살아요)\", \"Ik werk thuis(집에서 일해요)\"처럼 자기소개와 일상 대화는 거의 다 현재형이에요.",
    terms: [
      ["동사", "'하다, 먹다, 살다'처럼 움직임이나 상태를 말하는 단어예요. 예: werken(일하다)."],
      ["동사원형", "사전에 나오는 기본 모양이에요. 대부분 -en으로 끝나요. 예: werken, wonen."],
      ["어간", "동사원형에서 끝의 -en을 뺀 몸통 부분이에요. 예: werken → werk."],
      ["주어", "'누가'에 해당하는 말이에요. 예: ik(나), jij(너), hij(그), wij(우리)."],
      ["활용", "주어에 맞게 동사 모양을 바꾸는 것이에요. 예: ik werk, hij werkt."]
    ],
    steps: [
      {
        title: "1단계. 어간 찾기: -en을 빼요",
        body: "현재형을 만들려면 먼저 <b>어간</b>(동사의 몸통)을 찾아요. 방법은 간단해요. 동사원형 끝의 <b>-en을 빼면</b> 돼요.",
        visual: { type: "formula", parts: ["werken", "−", "en"], result: "werk", caption: "werken에서 -en을 빼면 어간 werk!" },
        ex: [["werken → werk", "일하다"], ["drinken → drink", "마시다"], ["spelen → speel", "놀다 (3단계에서 설명해요)"]]
      },
      {
        title: "2단계. 주어에 따라 세 가지 모양",
        body: "현재형은 딱 세 칸만 기억하면 돼요. <b>ik</b>(나)는 <b>어간만</b>. <b>jij, u, hij, zij, het</b>(너, 당신, 그, 그녀, 그것)는 <b>어간 + t</b>. <b>wij, jullie, zij</b>(우리, 너희, 그들)는 <b>동사원형 그대로</b>예요.",
        visual: {
          type: "blocks",
          caption: "주어가 바뀌면 동사 모양도 바뀌어요",
          rows: [
            { words: ["Ik", "werk", "thuis"], hl: [1], hl2: [], num: false, ko: "나는 집에서 일해요 (어간)" },
            { words: ["Hij", "werkt", "thuis"], hl: [1], hl2: [], num: false, ko: "그는 집에서 일해요 (어간 + t)" },
            { words: ["Wij", "werken", "thuis"], hl: [1], hl2: [], num: false, ko: "우리는 집에서 일해요 (원형)" }
          ]
        },
        ex: [["Ik woon in Gent.", "나는 겐트에 살아요."], ["Zij woont in Brussel.", "그녀는 브뤼셀에 살아요."], ["Wij wonen in België.", "우리는 벨기에에 살아요."]]
      },
      {
        title: "3단계. 어간 철자 규칙",
        body: "-en을 뺄 때 소리가 바뀌지 않게 철자를 고쳐요. <b>긴 모음은 두 번</b> 써요(<span class='nl'>maken → maak</span>). <b>같은 자음 두 개는 하나로</b> 줄여요(<span class='nl'>zitten → zit</span>). 끝이 <b>v는 f로, z는 s로</b> 바뀌어요(<span class='nl'>leven → leef, lezen → lees</span>).",
        visual: { type: "formula", parts: ["maken", "−", "en", "+", "a"], result: "maak", caption: "mak이 아니라 maak! 긴 '아' 소리를 지키려고 a를 두 번 써요." },
        ex: [["maken → ik maak", "나는 만들어요"], ["zitten → ik zit", "나는 앉아 있어요"], ["lezen → ik lees", "나는 읽어요"]]
      },
      {
        title: "4단계. 질문할 때 jij 뒤에서는 -t가 빠져요",
        body: "질문할 때는 동사가 맨 앞으로 와요. 이때 <b>jij/je가 동사 뒤</b>에 오면 <b>-t를 빼요</b>. hij, zij는 그대로 -t가 있어요. 그리고 어간이 이미 t로 끝나면 t를 또 붙이지 않아요(<span class='nl'>hij zit</span>).",
        visual: {
          type: "blocks",
          caption: "jij가 뒤로 가면 t가 사라져요",
          rows: [
            { words: ["Jij", "werkt", "thuis."], hl: [1], hl2: [], num: false, ko: "너는 집에서 일해." },
            { words: ["Werk", "jij", "thuis?"], hl: [0], hl2: [], num: false, ko: "너 집에서 일해?" }
          ]
        },
        ex: [["Werk jij morgen?", "너 내일 일해?"], ["Woon je in Gent?", "너 겐트에 살아?"], ["Werkt hij morgen?", "그는 내일 일해? (hij는 t 그대로)"]]
      },
      {
        title: "5단계. zijn과 hebben은 따로 외워요",
        body: "가장 많이 쓰는 두 동사 <b>zijn</b>(~이다, 있다)과 <b>hebben</b>(가지고 있다)은 규칙을 따르지 않아요. 아래 모양을 통째로 외워요. 아래 표에 전체 모양이 있어요.",
        visual: {
          type: "twobox",
          left: { title: "ZIJN", note: "~이다, ~에 있다", items: [["ik ben", "나는 ~이에요"], ["jij bent", "너는 ~이야"], ["hij / zij is", "그/그녀는 ~이에요"], ["wij zijn", "우리는 ~이에요"]] },
          right: { title: "HEBBEN", note: "가지고 있다", items: [["ik heb", "나는 있어요"], ["jij hebt", "너는 있어"], ["hij / zij heeft", "그/그녀는 있어요"], ["wij hebben", "우리는 있어요"]] }
        },
        ex: [["Ik ben moe.", "나는 피곤해요."], ["Hij heeft een hond.", "그는 강아지가 있어요."], ["Wij zijn thuis.", "우리는 집에 있어요."]]
      }
    ],
    mistakes: [
      "<span class='nl'>Jij werk.</span> ✗ → <span class='nl'>Jij werkt.</span> ✓ 하지만 질문에서는 <span class='nl'>Werk jij?</span>처럼 t를 빼요.",
      "<span class='nl'>Ik ben werk.</span> ✗ → <span class='nl'>Ik werk.</span> ✓ 영어 I am working처럼 zijn을 붙이지 않아요. 동사 하나면 충분해요.",
      "<span class='nl'>Hij zitt.</span> ✗ → <span class='nl'>Hij zit.</span> ✓ 어간이 이미 t로 끝나면 t를 더 붙이지 않아요."
    ],
    rules: [
      "어간은 동사원형에서 <b>-en</b>을 뺀 모양이에요. <span class='nl'>werken → werk</span>",
      "철자 규칙: 긴 모음은 두 번(<span class='nl'>maken → maak</span>), 겹자음은 하나로(<span class='nl'>zitten → zit</span>), v → f, z → s(<span class='nl'>leven → leef, lezen → lees</span>).",
      "<b>ik</b> = 어간, <b>jij / u / hij / zij / het</b> = 어간 + t, <b>wij / jullie / zij(복수)</b> = 동사원형. <span class='nl'>ik werk, jij werkt, wij werken</span>",
      "어간이 t로 끝나면 t를 더 붙이지 않아요: <span class='nl'>hij zit</span>. d로 끝나면 dt: <span class='nl'>hij vindt</span>.",
      "jij/je가 동사 <b>뒤</b>에 오면 -t가 빠져요. <span class='nl'>Jij werkt. → Werk jij?</span>",
      "<b>zijn</b>과 <b>hebben</b>은 불규칙이라 표로 외워요. u에는 <span class='nl'>u hebt</span>와 <span class='nl'>u heeft</span> 둘 다 써요."
    ],
    table: {
      head: ["주어", "werken", "zijn", "hebben"],
      rows: [
        ["ik", "werk", "ben", "heb"],
        ["jij / je", "werkt", "bent", "hebt"],
        ["u", "werkt", "bent", "hebt / heeft"],
        ["hij / zij / het", "werkt", "is", "heeft"],
        ["wij / we", "werken", "zijn", "hebben"],
        ["jullie", "werken", "zijn", "hebben"],
        ["zij / ze (복수)", "werken", "zijn", "hebben"]
      ]
    },
    examples: [
      ["Ik werk in Gent.", "나는 겐트에서 일해요."],
      ["Jij bent mijn beste vriendin.", "너는 내 제일 친한 친구야."],
      ["Hij heeft een nieuwe gsm.", "그는 새 휴대폰이 있어요."],
      ["Wij wonen in België.", "우리는 벨기에에 살아요."],
      ["Lees jij vandaag de krant?", "너 오늘 신문 읽어?"],
      ["Ze drinken een pintje op het terras.", "그들은 테라스에서 맥주 한 잔을 마셔요."]
    ],
    tip: "ik는 어간만, 한 사람(jij/hij/zij)은 +t, 여럿은 원형 그대로. 이 세 칸이 현재형의 전부예요.",
    mc: [
      { q: "Hij ___ in Brussel. (wonen, 살다)", opts: ["woon", "woont", "wonen"], a: 1, ex: "hij(그)는 한 사람이라 어간 woon에 t를 붙여요." },
      { q: "Wij ___ moe. (zijn, ~이다)", opts: ["is", "bent", "zijn"], a: 2, ex: "wij(우리)는 여러 사람이라 원형 zijn 그대로 써요." },
      { q: "Jij ___ een broer. (hebben, 있다)", opts: ["hebt", "heb", "hebben"], a: 0, ex: "jij가 동사 앞에 있으니 t가 붙은 hebt예요." },
      { q: "___ je morgen? (werken, 질문)", opts: ["Werkt", "Werk", "Werken"], a: 1, ex: "질문에서 je가 동사 뒤에 오면 t를 빼요." },
      { q: "Zij(그녀) ___ Nederlands. (spreken, 말하다)", opts: ["spreek", "spreekt", "spreken"], a: 1, ex: "그녀는 한 사람이라 어간 spreek에 t를 붙여요." },
      { q: "Ik ___ koffie. (drinken, 마시다)", opts: ["drink", "drinkt", "drinken"], a: 0, ex: "ik는 어간만 써요. drinken에서 -en을 빼면 drink예요." },
      { q: "Jullie ___ in Gent. (wonen, 살다)", opts: ["woont", "wonen", "woon"], a: 1, ex: "jullie(너희)는 여러 사람이라 동사원형 wonen 그대로 써요." },
      { q: "lezen(읽다)의 어간은?", opts: ["lez", "lees", "leez"], a: 1, ex: "긴 '에' 소리를 지키려고 e를 두 번 쓰고, 끝의 z는 s로 바뀌어요." },
      { q: "___ jij Nederlands? (spreken, 질문)", opts: ["Spreekt", "Spreek", "Spreken"], a: 1, ex: "질문에서 jij가 동사 뒤에 오면 t를 빼요." },
      { q: "Hij ___ een hond. (hebben, 있다)", opts: ["hebt", "heeft", "heb"], a: 1, ex: "hebben은 불규칙이에요. hij와 쓸 때는 heeft예요." },
      { q: "Zij(그들) ___ samen. (koken, 요리하다)", opts: ["kookt", "koken", "kook"], a: 1, ex: "zij(그들)는 여러 사람이라 동사원형 koken 그대로 써요." },
      { q: "Het meisje ___ in de tuin. (spelen, 놀다)", opts: ["speel", "speelt", "spelen"], a: 1, ex: "het meisje(그 여자아이)는 한 사람이라 어간 speel에 t를 붙여요." },
      { q: "Jij ___ moe. (zijn, ~이다)", opts: ["bent", "is", "ben"], a: 0, ex: "zijn은 불규칙이에요. jij와 쓸 때는 bent예요." },
      { q: "Hij ___ het boek goed. (vinden, 생각하다)", opts: ["vind", "vindt", "vint"], a: 1, ex: "어간 vind가 d로 끝나도 hij에는 t를 붙여서 vindt예요." },
      { q: "올바른 질문은?", opts: ["Woont je in Gent?", "Woon je in Gent?", "Wonen je in Gent?"], a: 1, ex: "je가 동사 뒤에 오면 t를 빼요. 그래서 Woon je ...?예요." }
    ],
    fill: [
      { q: "hij + werken", a: ["werkt"], ex: "hij는 한 사람이라 어간 werk에 t를 붙여요.", hint: "어간 + t" },
      { q: "ik + zijn", a: ["ben"], ex: "zijn은 규칙을 따르지 않아요. ik와 쓸 때는 ben이에요.", hint: "불규칙" },
      { q: "zij(그녀) + hebben", a: ["heeft"], ex: "hebben은 규칙을 따르지 않아요. 그녀/그와 쓸 때는 heeft예요.", hint: "불규칙" },
      { q: "ik + maken", a: ["maak"], ex: "-en을 빼면 mak이 되지만, 긴 '아' 소리를 지키려고 a를 두 번 써요.", hint: "긴 모음 유지" },
      { q: "hij + zitten", a: ["zit"], ex: "어간 zit가 이미 t로 끝나서 t를 또 붙이지 않아요.", hint: "t를 또 붙일까요?" },
      { q: "jij + wonen", a: ["woont"], ex: "jij가 동사 앞에 있으면 어간 woon에 t를 붙여요.", hint: "어간 + t" },
      { q: "wij + hebben", a: ["hebben"], ex: "wij(우리)는 여러 사람이라 동사원형 그대로 써요.", hint: "여러 사람" },
      { q: "ik + lezen", a: ["lees"], ex: "긴 '에' 소리를 지키려고 e를 두 번 쓰고, z는 s로 바뀌어요.", hint: "z → s" },
      { q: "hij + zijn", a: ["is"], ex: "zijn은 불규칙이에요. hij와 쓸 때는 is예요.", hint: "불규칙" },
      { q: "Jij werkt morgen. → 질문으로", a: ["Werk jij morgen?", "Werk je morgen?"], ex: "질문은 동사가 맨 앞이에요. jij가 동사 뒤로 가면 t가 빠져요.", hint: "Werk jij ...?" },
      { q: "ik + leven", a: ["leef"], ex: "-en을 빼면 lev가 되지만, 긴 '에' 소리를 지키려고 e를 두 번 쓰고 v는 f로 바꿔요.", hint: "v → f" },
      { q: "zij(그녀) + maken", a: ["maakt"], ex: "어간은 maak(a 두 번)이에요. 그녀는 한 사람이라 t를 붙여요.", hint: "어간 + t" },
      { q: "jullie + zijn", a: ["zijn"], ex: "jullie(너희)는 여러 사람이라 zijn 그대로 써요.", hint: "여러 사람" },
      { q: "u + hebben", a: ["hebt", "heeft"], ex: "u(당신)에는 hebt와 heeft 둘 다 쓸 수 있어요.", hint: "두 가지 다 정답" },
      { q: "틀린 곳 고치기: Hij woon in Gent.", a: ["Hij woont in Gent"], ex: "hij는 한 사람이라 어간 woon에 t를 붙여야 해요.", hint: "어간 + t" }
    ]
  },
  {
    id: 4,
    ko: "단순과거 시제",
    nl: "Onvoltooid verleden tijd (imperfectum)",
    emoji: "brief",
    easy: "과거를 이야기처럼 말할 때 써요. 규칙 동사는 어간에 -te나 -de를 붙여요.",
    why: "\"Ik was moe(피곤했어요)\", \"Ik had geen tijd(시간이 없었어요)\"처럼 was와 had는 말할 때도 아주 자주 써요. 책이나 이야기를 읽을 때도 꼭 필요해요.",
    terms: [
      ["단순과거", "'~했어요'를 동사 하나로 말하는 과거형이에요. 예: werkte(일했어요). 이야기나 글에서 많이 써요."],
      ["어간", "동사원형에서 -en을 뺀 몸통이에요. 예: werken → werk."],
      ["규칙 동사", "정해진 규칙(-te/-de)대로 과거형을 만드는 동사예요. 대부분이 여기에 속해요."],
      ["불규칙 동사", "규칙대로 안 되고 모음이 바뀌는 동사예요. 예: gaan → ging. 따로 외워야 해요."],
      ["softketchup", "-te를 쓸지 -de를 쓸지 알려 주는 외우기 단어예요. 이 단어 속 자음 s, f, t, k, ch, p 뒤에는 -te를 써요. 't kofschip이라고도 해요."]
    ],
    steps: [
      {
        title: "1단계. 단순과거는 '~했어요'를 한 단어로",
        body: "단순과거는 지나간 일을 <b>동사 하나로</b> 말하는 방법이에요. 이야기를 들려주거나 글을 쓸 때 많이 써요. 대화에서 과거는 보통 다음 레슨의 현재완료로 말하지만, <span class='nl'>was</span>(~였어요)와 <span class='nl'>had</span>(있었어요)는 말할 때도 아주 자주 써요.",
        visual: {
          type: "timeline",
          caption: "시간이 바뀌면 동사 모양이 바뀌어요",
          marks: [
            { pos: "past", nl: "Ik werkte.", ko: "일했어요" },
            { pos: "now", nl: "Ik werk.", ko: "일해요" }
          ]
        },
        ex: [["Gisteren werkte ik thuis.", "어제 나는 집에서 일했어요."], ["Ik was moe.", "나는 피곤했어요."], ["We hadden geen tijd.", "우리는 시간이 없었어요."]]
      },
      {
        title: "2단계. 모양은 딱 두 개: 하나(-te) / 여럿(-ten)",
        body: "규칙 동사는 <b>어간 + -te</b> 또는 <b>어간 + -de</b>를 붙여요. ik, jij, hij처럼 <b>한 사람</b>이면 모두 같은 모양(-te/-de)이에요. wij, jullie, zij처럼 <b>여러 사람</b>이면 끝에 n을 더 붙여요(-ten/-den). 현재형보다 오히려 간단해요!",
        visual: { type: "formula", parts: ["werk", "+", "te"], result: "werkte", caption: "ik / jij / hij werkte · wij / jullie / zij werkten" },
        ex: [["ik werkte / hij werkte", "나는 일했어요 / 그는 일했어요"], ["wij werkten", "우리는 일했어요"], ["zij woonden", "그들은 살았어요"]]
      },
      {
        title: "3단계. -te일까 -de일까? softketchup!",
        body: "어간의 <b>마지막 소리</b>를 보세요. 그 소리가 <b>softketchup</b>에 들어 있는 자음 <b>s, f, t, k, ch, p</b> 중 하나면 <b>-te</b>를 붙여요. 그 밖의 소리면 <b>-de</b>를 붙여요. 어간이 t나 d로 끝나도 그대로 붙여요(<span class='nl'>praten → praatte, antwoorden → antwoordde</span>).",
        visual: { type: "softketchup" },
        ex: [["werken → werk → werkte", "일했어요 (k는 softketchup에 있어요 → -te)"], ["maken → maak → maakte", "만들었어요 (k → -te)"], ["wonen → woon → woonde", "살았어요 (n은 없어요 → -de)"]]
      },
      {
        title: "4단계. 주의! 원래 동사원형의 자음으로 판단해요",
        body: "<span class='nl'>leven</span>(살다)의 어간은 <span class='nl'>leef</span>예요. f가 보여서 -te 같지만, <b>원래 동사원형은 v</b>예요. v는 softketchup에 없으니 <b>-de</b>를 붙여요. <span class='nl'>reizen</span>(여행하다)도 원래 z라서 <span class='nl'>reisde</span>예요. 동사원형을 보고 판단하는 습관을 들여요.",
        visual: { type: "formula", parts: ["leven", "→", "leef", "+", "de"], result: "leefde", caption: "원래 v라서 -de! (leefte ✗)" },
        ex: [["leven → leefde", "살았어요 (원래 v → -de)"], ["reizen → reisde", "여행했어요 (원래 z → -de)"], ["verhuizen → verhuisde", "이사했어요 (원래 z → -de)"]]
      },
      {
        title: "5단계. 자주 쓰는 불규칙 동사는 외워요",
        body: "자주 쓰는 동사 중에는 모음이 바뀌는 <b>불규칙 동사</b>가 있어요. 이건 규칙이 없어서 외워야 해요. 그래도 한 사람/여러 사람 두 모양만 외우면 돼요. 특히 <b>zijn → was / waren</b>, <b>hebben → had / hadden</b>은 꼭 외워요.",
        visual: {
          type: "twobox",
          left: { title: "한 사람", note: "ik / jij / hij / zij", items: [["was", "~였어요 (zijn)"], ["had", "있었어요 (hebben)"], ["ging", "갔어요 (gaan)"], ["at", "먹었어요 (eten)", "appel"]] },
          right: { title: "여러 사람", note: "wij / jullie / zij", items: [["waren", "~였어요 (zijn)"], ["hadden", "있었어요 (hebben)"], ["gingen", "갔어요 (gaan)"], ["aten", "먹었어요 (eten)", "appel"]] }
        },
        ex: [["Ik ging naar de markt.", "나는 시장에 갔어요."], ["Hij at een wafel.", "그는 와플을 먹었어요."], ["Zij kwamen laat.", "그들은 늦게 왔어요."]]
      }
    ],
    mistakes: [
      "<span class='nl'>werkde</span> ✗ → <span class='nl'>werkte</span> ✓ k는 softketchup에 있어서 -te예요.",
      "<span class='nl'>leefte</span> ✗ → <span class='nl'>leefde</span> ✓ 어간이 아니라 원래 동사원형(leven, v)으로 판단해요.",
      "<span class='nl'>Wij werkte.</span> ✗ → <span class='nl'>Wij werkten.</span> ✓ 여러 사람이면 끝에 n을 붙이는 걸 잊지 마세요."
    ],
    rules: [
      "규칙 동사: 어간 + <b>-te / -de</b>(한 사람), <b>-ten / -den</b>(여러 사람). ik, jij, hij는 모두 같은 모양이에요.",
      "<b>softketchup</b>('t kofschip) 규칙: 어간의 마지막 소리가 <b>s, f, t, k, ch, p</b> 중 하나면 -te(n), 아니면 -de(n). <span class='nl'>werken → werkte, wonen → woonde</span>",
      "판단은 원래 동사원형의 자음으로 해요. <span class='nl'>leven → leefde</span>(원래 v), <span class='nl'>reizen → reisde</span>(원래 z).",
      "어간이 t나 d로 끝나도 그대로 붙여요: <span class='nl'>praten → praatte, antwoorden → antwoordde</span>",
      "불규칙 동사는 외워요: <span class='nl'>gaan → ging, eten → at, komen → kwam, zien → zag, doen → deed, kopen → kocht</span>",
      "<b>zijn</b> → was / waren, <b>hebben</b> → had / hadden"
    ],
    table: {
      head: ["동사", "한 사람 (ik / jij / hij)", "여러 사람 (wij / jullie / zij)"],
      rows: [
        ["werken (일하다)", "werkte", "werkten"],
        ["leven (살다)", "leefde", "leefden"],
        ["wonen (살다, 거주하다)", "woonde", "woonden"],
        ["zijn (~이다)", "was", "waren"],
        ["hebben (가지다)", "had", "hadden"],
        ["gaan (가다)", "ging", "gingen"],
        ["eten (먹다)", "at", "aten"],
        ["komen (오다)", "kwam", "kwamen"]
      ]
    },
    examples: [
      ["Gisteren werkte ik thuis.", "어제 나는 집에서 일했어요."],
      ["Vroeger woonden wij in Seoul.", "예전에 우리는 서울에 살았어요."],
      ["Ik was moe, dus ik ging vroeg slapen.", "피곤해서 일찍 자러 갔어요."],
      ["We hadden geen tijd.", "우리는 시간이 없었어요."],
      ["Hij at een wafel op de markt.", "그는 시장에서 와플을 먹었어요."],
      ["Zij kochten groenten op de markt.", "그들은 시장에서 채소를 샀어요."]
    ],
    tip: "softketchup의 자음 s, f, t, k, ch, p 뒤에는 -te, 나머지는 -de!",
    drill: "#tijdmachine",
    mc: [
      { q: "wij + werken (과거)", opts: ["werkte", "werkten", "werkden"], a: 1, ex: "k는 softketchup에 있어서 -te예요. wij는 여러 사람이라 n을 붙여 werkten이에요." },
      { q: "ik + leven (과거)", opts: ["leefte", "leefde", "leefden"], a: 1, ex: "원래 동사원형 leven의 자음은 v라서 -de예요. ik는 한 사람이라 n이 없어요." },
      { q: "Gisteren ___ wij moe. (zijn)", opts: ["was", "waren", "zijnden"], a: 1, ex: "zijn의 과거형은 한 사람 was, 여러 사람 waren이에요. wij는 여러 사람이에요." },
      { q: "Jij ___ gisteren een afspraak. (hebben)", opts: ["hadden", "hebde", "had"], a: 2, ex: "hebben의 과거형은 한 사람 had, 여러 사람 hadden이에요. jij는 한 사람이에요." },
      { q: "다음 중 불규칙 동사는?", opts: ["werken", "gaan", "wonen"], a: 1, ex: "gaan은 과거형이 ging으로 모양이 확 바뀌어서 불규칙이에요. 나머지는 -te/-de 규칙대로예요." },
      { q: "ik + wonen (과거)", opts: ["woonte", "woonde", "woonden"], a: 1, ex: "n은 softketchup에 없어서 -de예요. ik는 한 사람이라 n이 없어요." },
      { q: "hij + reizen (과거)", opts: ["reiste", "reisde", "reizde"], a: 1, ex: "원래 동사원형 reizen의 자음은 z라서 -de예요. 어간은 reis예요." },
      { q: "Ik ___ gisteren geen tijd. (hebben)", opts: ["hadden", "had", "heb"], a: 1, ex: "gisteren(어제)이라 과거예요. ik는 한 사람이라 had예요." },
      { q: "jullie + koken (과거)", opts: ["kookte", "kookten", "kookden"], a: 1, ex: "k는 softketchup에 있어서 -te예요. jullie는 여러 사람이라 n을 붙여요." },
      { q: "Hij ___ een wafel. (eten, 과거)", opts: ["eette", "at", "aten"], a: 1, ex: "eten은 불규칙이라 at / aten이에요. hij는 한 사람이라 at예요." },
      { q: "hij + praten (과거)", opts: ["praatte", "praatde", "praate"], a: 0, ex: "t는 softketchup에 있어서 -te예요. 어간 praat가 t로 끝나도 그대로 붙여서 tt가 돼요." },
      { q: "zij(그들) + hebben (과거)", opts: ["had", "hadden", "hebden"], a: 1, ex: "hebben의 과거형은 had / hadden이에요. 그들은 여러 사람이라 hadden이에요." },
      { q: "Gisteren ___ wij naar de markt. (gaan)", opts: ["ging", "gingen", "gaanden"], a: 1, ex: "gaan은 불규칙이라 ging / gingen이에요. wij는 여러 사람이라 gingen이에요." },
      { q: "과거형에 -te를 붙이는 동사는?", opts: ["wonen", "spelen", "dansen"], a: 2, ex: "dansen의 어간 dans는 s로 끝나요. s는 softketchup에 있어서 danste예요." },
      { q: "ik + komen (과거)", opts: ["kwam", "komde", "kwamen"], a: 0, ex: "komen은 불규칙이라 kwam / kwamen이에요. ik는 한 사람이라 kwam이에요." }
    ],
    fill: [
      { q: "ik + gaan (과거)", a: ["ging"], ex: "gaan은 불규칙 동사라서 외워야 해요. 한 사람은 ging이에요.", hint: "불규칙" },
      { q: "wij + eten (과거)", a: ["aten"], ex: "eten은 불규칙이라 at / aten이에요. wij는 여러 사람이라 aten이에요.", hint: "불규칙, 여러 사람" },
      { q: "hij + maken (과거)", a: ["maakte"], ex: "어간 maak의 마지막 소리 k가 softketchup에 있어서 -te를 붙여요.", hint: "softketchup" },
      { q: "zij(그들) + wonen (과거)", a: ["woonden"], ex: "n은 softketchup에 없어서 -de예요. 여러 사람이라 n을 붙여 woonden이에요.", hint: "-de(n) 또는 -te(n)?" },
      { q: "Vandaag ben ik moe. → 과거로 (Gisteren으로 시작)", a: ["Gisteren was ik moe"], ex: "ben의 과거형은 was예요. Gisteren이 첫 자리라 동사가 두 번째, ik가 그 뒤에 와요.", hint: "Gisteren ___ ik moe." },
      { q: "ik + werken (과거)", a: ["werkte"], ex: "k는 softketchup에 있어서 -te를 붙여요.", hint: "softketchup" },
      { q: "zij(그녀) + zijn (과거)", a: ["was"], ex: "zijn의 과거형은 was / waren이에요. 그녀는 한 사람이라 was예요.", hint: "불규칙" },
      { q: "wij + spelen (과거)", a: ["speelden"], ex: "l은 softketchup에 없어서 -de예요. wij는 여러 사람이라 n을 붙여요.", hint: "여러 사람" },
      { q: "hij + verhuizen (과거)", a: ["verhuisde"], ex: "원래 동사원형의 자음이 z라서 -de를 붙여요. 어간은 verhuis예요.", hint: "원래 자음은 z" },
      { q: "Ik woon in Gent. → 과거로 (Vroeger로 시작)", a: ["Vroeger woonde ik in Gent"], ex: "wonen은 -de라서 woonde예요. Vroeger가 첫 자리라 동사가 두 번째, ik가 그 뒤에 와요.", hint: "Vroeger ___ ik in Gent." },
      { q: "ik + fietsen (과거)", a: ["fietste"], ex: "어간 fiets의 마지막 소리 s가 softketchup에 있어서 -te를 붙여요.", hint: "softketchup" },
      { q: "wij + leven (과거)", a: ["leefden"], ex: "원래 동사원형의 자음이 v라서 -de예요. wij는 여러 사람이라 -den이에요.", hint: "원래 자음은 v" },
      { q: "ik + antwoorden (과거)", a: ["antwoordde"], ex: "d는 softketchup에 없어서 -de예요. 어간이 d로 끝나도 그대로 붙여서 dd가 돼요.", hint: "어간 antwoord + ?" },
      { q: "hij + kopen (과거)", a: ["kocht"], ex: "kopen은 불규칙이라 kocht / kochten이에요. 외워 두세요.", hint: "불규칙" },
      { q: "Hij is moe. → 과거로", a: ["Hij was moe"], ex: "is의 과거형은 was예요. hij는 한 사람이에요.", hint: "Hij ___ moe." }
    ]
  },
  {
    id: 5,
    ko: "현재완료 시제",
    nl: "Voltooid tegenwoordige tijd (perfectum)",
    emoji: "fiets",
    easy: "말로 과거를 이야기할 때 가장 많이 쓰는 방법이에요. hebben/zijn + 과거분사로 만들어요.",
    why: "\"Wat heb je gedaan?(뭐 했어?)\", \"Ik ben naar Gent gegaan(겐트에 갔어)\"처럼 주말 이야기, 동료와의 잡담은 거의 다 현재완료예요.",
    terms: [
      ["현재완료", "말할 때 가장 많이 쓰는 과거 표현이에요. '도우미 동사 + 과거분사' 두 덩어리로 만들어요."],
      ["조동사", "다른 동사를 도와주는 동사예요. 현재완료에서는 hebben이나 zijn이 도우미 역할을 해요."],
      ["과거분사", "완료형에 쓰는 동사 모양이에요. 보통 ge-로 시작해요. 예: werken → gewerkt."],
      ["분리동사", "앞부분(af-, op-, in- 같은 것)이 떨어질 수 있는 동사예요. 예: afdrogen(물기를 닦다)."],
      ["softketchup", "-t를 쓸지 -d를 쓸지 알려 주는 외우기 단어예요. s, f, t, k, ch, p 뒤에는 -t를 써요."]
    ],
    steps: [
      {
        title: "1단계. 두 덩어리: hebben/zijn + 과거분사",
        body: "현재완료는 두 부분으로 만들어요. <b>hebben 또는 zijn</b>(현재형)은 <b>두 번째 자리</b>에 오고, <b>과거분사</b>(완료형에 쓰는 동사 모양)는 <b>문장 맨 끝</b>으로 가요. 그 사이에 나머지 말을 넣어요. 뜻은 '~했어요'예요.",
        visual: {
          type: "blocks",
          caption: "hebben/zijn은 2번 자리, 과거분사는 맨 끝!",
          rows: [
            { words: ["Ik", "heb", "vandaag", "thuis", "gewerkt"], hl: [1], hl2: [4], num: true, ko: "나는 오늘 집에서 일했어요" },
            { words: ["Gisteren", "heb", "ik", "een wafel", "gegeten"], hl: [1], hl2: [4], num: true, ko: "어제 나는 와플을 먹었어요" }
          ]
        },
        ex: [["Ik heb gewerkt.", "나는 일했어요."], ["Wij hebben een pizza gegeten.", "우리는 피자를 먹었어요."], ["Heb je het formulier ingevuld?", "서류 작성했어?"]]
      },
      {
        title: "2단계. 과거분사 만들기: ge + 어간 + t/d",
        body: "규칙 동사의 과거분사는 <b>ge</b> + <b>어간</b> + <b>t 또는 d</b>예요. 어간은 동사원형에서 -en을 뺀 몸통이에요. 끝에 t를 쓸지 d를 쓸지는 다음 단계에서 알려 드릴게요.",
        visual: { type: "formula", parts: ["ge", "+", "werk", "+", "t"], result: "gewerkt", caption: "werken → gewerkt (일했다)" },
        ex: [["werken → gewerkt", "일하다 → 일했다"], ["wonen → gewoond", "살다 → 살았다"], ["spelen → gespeeld", "놀다 → 놀았다"]]
      },
      {
        title: "3단계. t일까 d일까? softketchup!",
        body: "단순과거(4과)와 같은 규칙이에요. 어간의 마지막 소리가 <b>softketchup</b>의 자음 <b>s, f, t, k, ch, p</b> 중 하나면 <b>-t</b>, 아니면 <b>-d</b>예요. 이때도 <b>원래 동사원형의 자음</b>으로 판단해요. <span class='nl'>leven</span>은 원래 v라서 <span class='nl'>geleefd</span>, <span class='nl'>reizen</span>은 원래 z라서 <span class='nl'>gereisd</span>예요.",
        visual: { type: "softketchup" },
        ex: [["maken → gemaakt", "만들었다 (k → -t)"], ["leven → geleefd", "살았다 (원래 v → -d)"], ["reizen → gereisd", "여행했다 (원래 z → -d)"]]
      },
      {
        title: "4단계. 특별한 경우 세 가지",
        body: "① <b>be-, ver-, ont-, her-, ge-</b>로 시작하는 동사는 <b>ge-를 붙이지 않아요</b>(<span class='nl'>betalen → betaald</span>). ② <b>분리동사</b>는 앞부분과 동사 사이에 ge가 들어가요(<span class='nl'>afdrogen → af + ge + droogd</span>). ③ <b>불규칙 동사</b>는 모양을 외워요(<span class='nl'>eten → gegeten, gaan → gegaan, zijn → geweest</span>).",
        visual: { type: "formula", parts: ["af", "+", "ge", "+", "droog", "+", "d"], result: "afgedroogd", caption: "분리동사는 ge가 가운데로 쏙! (geafdroogd ✗)" },
        ex: [["betalen → betaald", "돈을 냈다 (be-라서 ge 없음)"], ["opruimen → opgeruimd", "정리했다 (op + ge + ruimd)"], ["drinken → gedronken", "마셨다 (불규칙)"]]
      },
      {
        title: "5단계. hebben일까 zijn일까?",
        body: "대부분은 <b>hebben</b>을 써요. <b>zijn</b>을 쓰는 건 두 가지예요. ① <b>어디로 이동</b>했을 때(<span class='nl'>gaan, komen, vertrekken, verhuizen</span>). ② <b>상태가 바뀌었을 때</b>(<span class='nl'>worden</span> 되다, <span class='nl'>opstaan</span> 일어나다). <span class='nl'>blijven</span>(머물다)과 <span class='nl'>zijn</span>도 zijn을 써요. fietsen, lopen 같은 이동 방법은 <b>목적지(naar ...)가 있으면 zijn</b>, 없으면 hebben이에요.",
        visual: {
          type: "twobox",
          left: { title: "HEBBEN", note: "대부분의 동사", items: [["Ik heb een appel gegeten.", "사과를 먹었어요", "appel"], ["Ik heb een boek gelezen.", "책을 읽었어요", "boek"], ["Ik heb een uur gefietst.", "한 시간 자전거를 탔어요 (목적지 없음)", "fiets"]] },
          right: { title: "ZIJN", note: "어디로 이동, 상태 변화", items: [["Ik ben naar huis gegaan.", "집에 갔어요", "huis"], ["Ik ben naar huis gefietst.", "자전거로 집에 갔어요 (목적지 있음)", "fiets"], ["Hij is groot geworden.", "그는 키가 컸어요 (상태 변화)", "jongen"]] }
        },
        ex: [["We zijn naar Gent verhuisd.", "우리는 겐트로 이사했어요."], ["Hij is om zeven uur opgestaan.", "그는 7시에 일어났어요."], ["Ik heb de borden afgedroogd.", "접시의 물기를 닦았어요."]]
      }
    ],
    mistakes: [
      "<span class='nl'>Ik heb naar huis gegaan.</span> ✗ → <span class='nl'>Ik ben naar huis gegaan.</span> ✓ 어디로 이동했으면 zijn을 써요.",
      "<span class='nl'>gebetaald, geafdroogd</span> ✗ → <span class='nl'>betaald, afgedroogd</span> ✓ be-로 시작하면 ge가 없고, 분리동사는 ge가 가운데로 들어가요.",
      "<span class='nl'>Ik heb gegeten een wafel.</span> ✗ → <span class='nl'>Ik heb een wafel gegeten.</span> ✓ 과거분사는 꼭 문장 맨 끝에 둬요."
    ],
    rules: [
      "구조: <b>hebben / zijn</b>(현재형, 두 번째 자리) + <b>과거분사</b>(문장 끝). <span class='nl'>Ik heb gewerkt.</span>",
      "규칙 과거분사: <b>ge + 어간 + t / d</b> (softketchup이면 t, 아니면 d). <span class='nl'>werken → gewerkt, wonen → gewoond, leven → geleefd, reizen → gereisd</span>",
      "불규칙 과거분사는 외워요: <span class='nl'>eten → gegeten, zwemmen → gezwommen, zijn → geweest, gaan → gegaan, komen → gekomen, drinken → gedronken, kopen → gekocht, brengen → gebracht</span>",
      "<b>be-, ver-, ont-, ge-, her-, er-</b>로 시작하는 동사는 ge-를 붙이지 않아요: <span class='nl'>betalen → betaald, verhuizen → verhuisd, vertrekken → vertrokken, ontmoeten → ontmoet</span>",
      "분리동사는 접두사와 동사 사이에 ge-: <span class='nl'>afdrogen → afgedroogd, opruimen → opgeruimd, invullen → ingevuld, meebrengen → meegebracht</span>",
      "대부분은 <b>hebben</b>. 장소 이동이나 상태 변화는 <b>zijn</b>: <span class='nl'>gaan, komen, blijven, worden, zijn, verhuizen, vertrekken, aankomen, opstaan, thuiskomen</span>",
      "fietsen, lopen, zwemmen 같은 이동 방법 동사는 <b>목적지가 있으면 zijn</b>, 없으면 hebben: <span class='nl'>Ik ben naar huis gefietst. / Ik heb een uur gefietst.</span>"
    ],
    examples: [
      ["Ik heb vandaag thuis gewerkt.", "오늘 집에서 일했어요."],
      ["Ik ben naar huis gegaan.", "집에 갔어요."],
      ["We zijn vorig jaar naar Gent verhuisd.", "우리는 작년에 겐트로 이사했어요."],
      ["Ik heb de borden afgedroogd.", "접시의 물기를 닦았어요."],
      ["Hij is om zeven uur opgestaan.", "그는 7시에 일어났어요."],
      ["Heb je het formulier ingevuld?", "서류 작성했어?"]
    ],
    tip: "'어디로 움직였거나 상태가 바뀌었다'면 zijn, 그 밖에는 hebben.",
    drill: "#perfectum",
    mc: [
      { q: "Ik ___ naar huis gegaan.", opts: ["heb", "ben"], a: 1, ex: "gaan은 집으로 이동한 거라서 zijn을 써요. ik와 쓰는 zijn은 ben이에요." },
      { q: "Wij ___ een pizza gegeten.", opts: ["hebben", "zijn"], a: 0, ex: "먹는 건 이동도 상태 변화도 아니라서 hebben을 써요." },
      { q: "Zij(그녀) ___ naar Antwerpen verhuisd.", opts: ["heeft", "is"], a: 1, ex: "이사는 사는 곳을 옮기는 이동이라서 zijn을 써요. 그녀와 쓰는 zijn은 is예요." },
      { q: "Ik ___ naar het werk gefietst.", opts: ["heb", "ben"], a: 1, ex: "naar het werk(직장으로)라는 목적지가 있어서 zijn을 써요." },
      { q: "betalen(돈을 내다)의 과거분사는?", opts: ["gebetaald", "betaalt", "betaald"], a: 2, ex: "be-로 시작하는 동사는 ge를 붙이지 않아요. l은 softketchup에 없어서 끝은 -d예요." },
      { q: "Hij ___ een boek gelezen.", opts: ["heeft", "is"], a: 0, ex: "읽는 건 이동도 상태 변화도 아니라서 hebben을 써요. hij와 쓰는 hebben은 heeft예요." },
      { q: "werken(일하다)의 과거분사는?", opts: ["gewerkd", "gewerkt", "werkt"], a: 1, ex: "ge + werk + t예요. k는 softketchup에 있어서 끝이 -t예요." },
      { q: "wonen(살다)의 과거분사는?", opts: ["gewoont", "gewoond", "gewonen"], a: 1, ex: "ge + woon + d예요. n은 softketchup에 없어서 끝이 -d예요." },
      { q: "afdrogen(물기를 닦다)의 과거분사는?", opts: ["geafdroogd", "afgedroogd", "afgedroogt"], a: 1, ex: "분리동사라서 af와 droogd 사이에 ge가 들어가요. 원래 자음 g는 softketchup에 없어서 -d예요." },
      { q: "Wij ___ thuis gebleven.", opts: ["hebben", "zijn"], a: 1, ex: "blijven(머물다)은 zijn을 쓰는 동사예요. wij와 쓰는 zijn은 zijn이에요." },
      { q: "올바른 문장은?", opts: ["Ik heb gegeten een wafel.", "Ik heb een wafel gegeten.", "Ik een wafel heb gegeten."], a: 1, ex: "heb는 2번 자리, 과거분사 gegeten은 문장 맨 끝에 와요." },
      { q: "Zij(그들) ___ gisteren aangekomen.", opts: ["hebben", "zijn"], a: 1, ex: "aankomen(도착하다)은 어디에 도착하는 이동이라서 zijn을 써요." },
      { q: "Wij ___ een uur gewandeld.", opts: ["hebben", "zijn"], a: 0, ex: "어디로 갔는지 목적지가 없어서 hebben을 써요." },
      { q: "invullen(작성하다)의 과거분사는?", opts: ["geinvuld", "ingevuld", "invulled"], a: 1, ex: "분리동사라서 in과 vuld 사이에 ge가 들어가요." },
      { q: "bestellen(주문하다)의 과거분사는?", opts: ["gebesteld", "besteld", "bestelt"], a: 1, ex: "be-로 시작해서 ge를 붙이지 않아요. l은 softketchup에 없어서 끝이 -d예요." }
    ],
    fill: [
      { q: "zwemmen(수영하다) → 과거분사", a: ["gezwommen"], ex: "zwemmen은 불규칙 동사라서 모음이 o로 바뀌어요. 외워 두세요.", hint: "모음이 o로 바뀌어요" },
      { q: "reizen(여행하다) → 과거분사", a: ["gereisd"], ex: "원래 동사원형의 자음이 z예요. z는 softketchup에 없어서 -d를 붙여요.", hint: "원래 자음은 z" },
      { q: "opruimen(정리하다) → 과거분사", a: ["opgeruimd"], ex: "분리동사라서 op와 ruimd 사이에 ge가 들어가요. m은 softketchup에 없어서 -d예요.", hint: "op + ge + ..." },
      { q: "vertrekken(떠나다) → 과거분사", a: ["vertrokken"], ex: "ver-로 시작해서 ge가 없어요. 불규칙 동사라 모음이 o로 바뀌어요.", hint: "ver-로 시작해요" },
      { q: "Ik at een wafel. → 현재완료로", a: ["Ik heb een wafel gegeten"], ex: "먹는 건 hebben을 써요. 과거분사 gegeten은 문장 맨 끝에 와요.", hint: "Ik heb ... gegeten" },
      { q: "maken(만들다) → 과거분사", a: ["gemaakt"], ex: "ge + maak + t예요. k는 softketchup에 있어서 -t를 붙여요.", hint: "ge + 어간 + t/d" },
      { q: "spelen(놀다) → 과거분사", a: ["gespeeld"], ex: "ge + speel + d예요. l은 softketchup에 없어서 -d를 붙여요.", hint: "ge + 어간 + t/d" },
      { q: "verhuizen(이사하다) → 과거분사", a: ["verhuisd"], ex: "ver-로 시작해서 ge가 없어요. 원래 자음이 z라서 끝은 -d예요.", hint: "ver-로 시작해요" },
      { q: "drinken(마시다) → 과거분사", a: ["gedronken"], ex: "drinken은 불규칙 동사라서 모음이 o로 바뀌어요. 외워 두세요.", hint: "모음이 o로 바뀌어요" },
      { q: "Ik werk thuis. → 현재완료로", a: ["Ik heb thuis gewerkt"], ex: "일하는 건 hebben을 써요. 과거분사 gewerkt는 문장 맨 끝에 와요.", hint: "Ik heb ... gewerkt" },
      { q: "dansen(춤추다) → 과거분사", a: ["gedanst"], ex: "어간 dans의 마지막 소리 s가 softketchup에 있어서 -t를 붙여요.", hint: "softketchup" },
      { q: "komen(오다) → 과거분사", a: ["gekomen"], ex: "komen은 불규칙 동사라서 ge + komen 모양이에요. 외워 두세요.", hint: "불규칙" },
      { q: "ophalen(데리러 가다) → 과거분사", a: ["opgehaald"], ex: "분리동사라서 op와 haald 사이에 ge가 들어가요. l은 softketchup에 없어서 -d예요.", hint: "op + ge + ..." },
      { q: "Hij gaat naar Gent. → 현재완료로", a: ["Hij is naar Gent gegaan"], ex: "Gent로 이동한 거라서 zijn을 써요. hij와 쓰는 zijn은 is이고, gegaan은 맨 끝에 와요.", hint: "Hij is ... gegaan" },
      { q: "zijn(~이다) → 과거분사", a: ["geweest"], ex: "zijn은 불규칙이라 과거분사가 geweest예요. 외워 두세요.", hint: "불규칙" }
    ]
  },
  {
    id: 6,
    ko: "미래 시제",
    nl: "Toekomende tijd",
    emoji: "ster",
    easy: "미래는 현재형 + 시간 표현, 또는 gaan + 동사원형으로 쉽게 말해요.",
    why: "\"Morgen ga ik naar Brugge(내일 브뤼허에 갈 거예요)\"처럼 주말 계획, 약속 잡기, \"Zullen we koffie drinken?(커피 마실까요?)\" 같은 제안에 매일 써요.",
    terms: [
      ["미래", "아직 일어나지 않은, 앞으로 할 일이에요."],
      ["시간 표현", "'언제'를 알려 주는 말이에요. 예: morgen(내일), volgende week(다음 주), vanavond(오늘 저녁)."],
      ["동사원형", "사전에 나오는 기본 모양이에요. 예: werken, studeren. gaan, zullen 뒤에 이 모양을 써요."],
      ["2번 자리", "네덜란드어 문장에서 변하는 동사가 서는 자리예요. 맨 앞 덩어리 바로 다음이에요."]
    ],
    steps: [
      {
        title: "1단계. 미래를 말하는 세 가지 방법",
        body: "네덜란드어로 미래를 말하는 방법은 세 가지예요. ① <b>현재형 + 시간 표현</b>, ② <b>gaan + 동사원형</b>, ③ <b>zullen + 동사원형</b>. 일상 대화에서는 ①과 ②를 가장 많이 써요. 헷갈리면 gaan을 쓰면 돼요.",
        visual: {
          type: "timeline",
          caption: "미래는 '앞으로 할 일'이에요",
          marks: [
            { pos: "past", nl: "Gisteren werkte ik.", ko: "어제 일했어요" },
            { pos: "now", nl: "Vandaag werk ik.", ko: "오늘 일해요" },
            { pos: "future", nl: "Morgen ga ik werken.", ko: "내일 일할 거예요" }
          ]
        },
        ex: [["Morgen werk ik thuis.", "내일은 집에서 일해요."], ["Ik ga morgen studeren.", "나는 내일 공부할 거예요."], ["Ik zal je helpen.", "내가 도와줄게요."]]
      },
      {
        title: "2단계. 가장 쉬운 방법: 현재형 + 시간 표현",
        body: "동사는 그대로 <b>현재형</b>을 쓰고, <b>morgen</b>(내일) 같은 시간 표현만 넣으면 미래 뜻이 돼요. 시간 표현을 맨 앞에 두면 동사가 <b>2번 자리</b>를 지키고, 주어는 동사 뒤로 가요.",
        visual: {
          type: "blocks",
          caption: "Morgen이 1번, 동사는 2번 자리!",
          rows: [
            { words: ["Morgen", "werk", "ik", "thuis"], hl: [1], hl2: [], num: true, ko: "내일 나는 집에서 일해요" },
            { words: ["Volgende week", "gaan", "we", "naar Brugge"], hl: [1], hl2: [], num: true, ko: "다음 주에 우리는 브뤼허에 가요" }
          ]
        },
        ex: [["Morgen werk ik thuis.", "내일은 집에서 일해요."], ["Vanavond kook ik.", "오늘 저녁엔 내가 요리해요."], ["Volgende week gaan we naar Brugge.", "다음 주에 우리는 브뤼허에 가요."]]
      },
      {
        title: "3단계. gaan + 동사원형 = '~할 거예요'",
        body: "영어의 'be going to'와 비슷해요. <b>gaan</b>은 주어에 맞게 바꿔서 <b>2번 자리</b>에 두고, 하려는 동작은 <b>동사원형</b>으로 <b>문장 맨 끝</b>에 둬요. 계획이나 곧 할 일을 말할 때 써요.",
        visual: {
          type: "blocks",
          caption: "ga는 2번 자리, 동사원형은 맨 끝!",
          rows: [
            { words: ["Ik", "ga", "morgen", "studeren"], hl: [1], hl2: [3], num: true, ko: "나는 내일 공부할 거예요" },
            { words: ["Hij", "gaat", "een wafel", "eten"], hl: [1], hl2: [3], num: true, ko: "그는 와플을 먹을 거예요" }
          ]
        },
        ex: [["Ik ga morgen studeren.", "나는 내일 공부할 거예요."], ["Wij gaan samen koken.", "우리는 같이 요리할 거예요."], ["Ga je vanavond voetbal kijken?", "오늘 저녁에 축구 볼 거야?"]]
      },
      {
        title: "4단계. zullen + 동사원형 = 약속, 예측",
        body: "<b>zullen</b>은 '꼭 ~할게요'라는 <b>약속</b>이나 '~할 거예요'라는 <b>예측</b>에 써요. 조금 단정한 느낌이에요. 위치 규칙은 gaan과 같아요. zullen은 2번 자리, 동사원형은 맨 끝이에요. 모양은 ik zal, hij zal, wij zullen이에요. jij와 u는 <span class='nl'>zult</span>와 <span class='nl'>zal</span> 둘 다 써요.",
        visual: {
          type: "blocks",
          caption: "zal은 2번 자리, 동사원형은 맨 끝!",
          rows: [
            { words: ["Ik", "zal", "je", "helpen"], hl: [1], hl2: [3], num: true, ko: "내가 도와줄게요" },
            { words: ["Het", "zal", "morgen", "regenen"], hl: [1], hl2: [3], num: true, ko: "내일 비가 올 거예요" }
          ]
        },
        ex: [["Ik zal je helpen.", "내가 도와줄게요."], ["Ik zal het niet vergeten.", "잊지 않을게요."], ["Het zal morgen regenen.", "내일 비가 올 거예요."]]
      },
      {
        title: "5단계. 제안하기: Zal ik ...? / Zullen we ...?",
        body: "zullen으로 질문하면 <b>제안</b>이 돼요. <b>Zal ik ...?</b>는 '내가 ~할까요?', <b>Zullen we ...?</b>는 '우리 ~할까요?'예요. 질문이라서 zal/zullen이 맨 앞에 오고, 동사원형은 끝에 와요.",
        visual: {
          type: "twobox",
          left: { title: "ZAL IK ...?", note: "내가 ~할까요?", items: [["Zal ik koffie maken?", "내가 커피 만들까요?", "koffie"], ["Zal ik de deur dichtdoen?", "내가 문 닫을까요?", "deur"]] },
          right: { title: "ZULLEN WE ...?", note: "우리 ~할까요?", items: [["Zullen we wafels eten?", "우리 와플 먹을까요?", "wafel"], ["Zullen we samen koken?", "우리 같이 요리할까요?"]] }
        },
        ex: [["Zal ik je helpen?", "내가 도와줄까요?"], ["Zullen we samen koken?", "우리 같이 요리할까요?"], ["Zullen we morgen gaan fietsen?", "우리 내일 자전거 타러 갈까요?"]]
      }
    ],
    mistakes: [
      "<span class='nl'>Ik ga studeer.</span> ✗ → <span class='nl'>Ik ga studeren.</span> ✓ gaan, zullen 뒤에는 꼭 동사원형(-en)을 써요.",
      "<span class='nl'>Ik ga studeren morgen.</span> ✗ → <span class='nl'>Ik ga morgen studeren.</span> ✓ 동사원형은 문장 맨 끝에 둬요.",
      "<span class='nl'>Morgen ik werk thuis.</span> ✗ → <span class='nl'>Morgen werk ik thuis.</span> ✓ 시간 표현이 맨 앞이면 동사가 바로 다음(2번 자리)에 와요."
    ],
    rules: [
      "<b>현재형 + 시간 표현</b>: 가장 흔한 방법이에요. <span class='nl'>Morgen werk ik thuis.</span>",
      "<b>gaan + 동사원형</b>: 계획이나 곧 할 일. <span class='nl'>Ik ga morgen studeren.</span>",
      "<b>zullen + 동사원형</b>: 약속, 예측, 조금 격식 있는 말. <span class='nl'>Ik zal je helpen.</span>",
      "gaan과 zullen은 두 번째 자리에서 변하고, 동사원형은 <b>문장 끝</b>에 와요.",
      "<b>Zal ik ...?</b>은 '내가 ~할까요?'(제안), <b>Zullen we ...?</b>는 '우리 ~할까요?'(함께 하자는 제안)예요.",
      "jij와 u에는 <span class='nl'>zult</span>와 <span class='nl'>zal</span> 둘 다 써요. 벨기에에서는 zal도 아주 흔해요."
    ],
    table: {
      head: ["주어", "gaan", "zullen"],
      rows: [
        ["ik", "ga", "zal"],
        ["jij / je", "gaat", "zult / zal"],
        ["u", "gaat", "zult / zal"],
        ["hij / zij / het", "gaat", "zal"],
        ["wij / we", "gaan", "zullen"],
        ["jullie", "gaan", "zullen"],
        ["zij / ze (복수)", "gaan", "zullen"]
      ]
    },
    examples: [
      ["Ik ga morgen studeren.", "나는 내일 공부할 거예요."],
      ["Ik zal je helpen.", "내가 도와줄게."],
      ["Morgen werk ik thuis.", "내일은 집에서 일해요."],
      ["Zullen we samen koken?", "우리 같이 요리할까?"],
      ["Volgende week gaan we naar Brugge.", "다음 주에 우리는 브뤼허에 가요."],
      ["Ga je vanavond voetbal kijken?", "오늘 저녁에 축구 볼 거야?"]
    ],
    tip: "헷갈리면 gaan을 쓰세요. 일상 대화의 미래 표현은 gaan과 현재형이면 거의 충분해요.",
    drill: "#tijdmachine",
    mc: [
      { q: "Wij ___ je helpen.", opts: ["zal", "zullen", "zult"], a: 1, ex: "wij(우리)는 여러 사람이라 zullen을 그대로 써요." },
      { q: "Ik ___ morgen studeren.", opts: ["ga", "gaat", "gaan"], a: 0, ex: "ik는 어간만 써요. gaan의 ik 모양은 ga예요." },
      { q: "같이 요리할까요? → ___ we samen koken?", opts: ["Zal", "Zult", "Zullen"], a: 2, ex: "'우리 ~할까요?'는 Zullen we ...?예요. we는 여러 사람이라 zullen이에요." },
      { q: "현재형으로 미래를 말한 문장은?", opts: ["Gisteren werkte ik thuis.", "Morgen werk ik thuis.", "Ik heb thuis gewerkt."], a: 1, ex: "werk는 현재형인데 morgen(내일)이 있어서 미래 뜻이 돼요. 나머지 둘은 과거예요." },
      { q: "올바른 문장은?", opts: ["Ik ga morgen studeren.", "Ik studeren ga morgen.", "Ik morgen ga studeren."], a: 0, ex: "변하는 동사 ga는 2번 자리, 동사원형 studeren은 맨 끝에 와요." },
      { q: "Hij ___ morgen werken.", opts: ["ga", "gaat", "gaan"], a: 1, ex: "hij는 한 사람이라 gaat예요." },
      { q: "Ik ___ je helpen. (약속)", opts: ["zal", "zullen", "zult"], a: 0, ex: "ik와 쓰는 zullen은 zal이에요." },
      { q: "Volgende week ___ we naar Brugge.", opts: ["gaan", "gaat", "ga"], a: 0, ex: "we(우리)는 여러 사람이라 gaan 그대로 써요. Volgende week가 1번이라 동사가 2번 자리에 와요." },
      { q: "내가 커피 만들까요? → ___ ik koffie maken?", opts: ["Zullen", "Zal", "Gaat"], a: 1, ex: "'내가 ~할까요?'는 Zal ik ...?예요. ik와 쓰는 zullen은 zal이에요." },
      { q: "어순이 올바른 문장은?", opts: ["Vanavond ik kook.", "Vanavond kook ik.", "Kook vanavond ik."], a: 1, ex: "Vanavond가 1번 자리라 동사 kook가 2번, 주어 ik는 그 뒤에 와요." },
      { q: "Jullie ___ vanavond koken.", opts: ["gaat", "gaan", "ga"], a: 1, ex: "jullie(너희)는 여러 사람이라 gaan 그대로 써요." },
      { q: "Het ___ morgen regenen. (예측)", opts: ["zal", "zullen", "zult"], a: 0, ex: "het는 하나라서 zal이에요." },
      { q: "Ik ga morgen ___. (werken)", opts: ["werk", "werkt", "werken"], a: 2, ex: "gaan 뒤에 오는 동사는 꼭 동사원형이에요." },
      { q: "'내가 도와줄까요?'는?", opts: ["Zal ik je helpen?", "Zullen ik je helpen?", "Zal ik je help?"], a: 0, ex: "제안은 Zal ik ...?이에요. ik에는 zal, 끝에는 동사원형 helpen을 써요." },
      { q: "gaan + 동사원형으로 미래를 말한 문장은?", opts: ["Ik zal het niet vergeten.", "Wij gaan samen koken.", "Morgen werk ik thuis."], a: 1, ex: "gaan이 2번 자리, 동사원형 koken이 맨 끝에 있어요. 첫 번째는 zullen, 세 번째는 현재형이에요." }
    ],
    fill: [
      { q: "ik / morgen / studeren (gaan 사용)", a: ["Ik ga morgen studeren"], ex: "ga는 2번 자리, studeren은 문장 맨 끝에 와요.", hint: "Ik ga ... studeren" },
      { q: "Ik werk thuis. → gaan으로 미래", a: ["Ik ga thuis werken"], ex: "ga가 2번 자리에 들어가고, werk는 원형 werken이 되어 맨 끝으로 가요.", hint: "Ik ga ... werken" },
      { q: "jij + zullen", a: ["zult", "zal"], ex: "jij에는 zult와 zal 둘 다 쓸 수 있어요. 벨기에에서는 zal도 자주 들려요.", hint: "두 가지 다 정답" },
      { q: "morgen / ik / thuis / werk (Morgen으로 시작)", a: ["Morgen werk ik thuis"], ex: "Morgen이 1번 자리라 동사 werk가 2번, 주어 ik는 그 뒤에 와요.", hint: "동사는 2번 자리" },
      { q: "jij / vanavond / koken → gaan을 쓴 질문", a: ["Ga jij vanavond koken?", "Ga je vanavond koken?"], ex: "질문은 동사가 맨 앞이에요. jij가 동사 뒤로 가면 gaat의 t가 빠져서 ga가 돼요.", hint: "Ga jij ...?" },
      { q: "hij + zullen", a: ["zal"], ex: "hij는 한 사람이라 zal이에요.", hint: "한 사람" },
      { q: "Wij koken samen. → gaan으로 미래", a: ["Wij gaan samen koken", "We gaan samen koken"], ex: "gaan이 2번 자리에 들어가고, koken은 맨 끝으로 가요.", hint: "Wij gaan ... koken" },
      { q: "vanavond / ik / kook (Vanavond으로 시작)", a: ["Vanavond kook ik"], ex: "Vanavond가 1번 자리라 동사 kook가 2번, 주어 ik는 그 뒤에 와요.", hint: "동사는 2번 자리" },
      { q: "우리 와플 먹을까요? (Zullen we로 시작, wafels eten)", a: ["Zullen we wafels eten?", "Zullen wij wafels eten?"], ex: "'우리 ~할까요?'는 Zullen we ...?예요. 동사원형 eten은 맨 끝에 와요.", hint: "Zullen we ... eten?" },
      { q: "zij(그녀) + gaan", a: ["gaat"], ex: "그녀는 한 사람이라 gaat예요.", hint: "한 사람" },
      { q: "wij + zullen", a: ["zullen"], ex: "wij(우리)는 여러 사람이라 zullen 그대로 써요.", hint: "여러 사람" },
      { q: "Ik zal je helpen. → '내가 도와줄까요?' 제안으로", a: ["Zal ik je helpen?"], ex: "제안 질문은 Zal이 맨 앞에 오고, ik가 그 뒤에 와요.", hint: "Zal ik ...?" },
      { q: "jij / morgen / werken (gaan 사용, Jij로 시작)", a: ["Jij gaat morgen werken", "Je gaat morgen werken"], ex: "jij가 동사 앞이라 gaat예요. werken은 맨 끝에 와요.", hint: "Jij gaat ... werken" },
      { q: "우리 같이 공부할까요? (samen, studeren)", a: ["Zullen we samen studeren?", "Zullen wij samen studeren?"], ex: "'우리 ~할까요?'는 Zullen we ...?예요. studeren은 맨 끝에 와요.", hint: "Zullen we ...?" },
      { q: "틀린 곳 고치기: Ik ga studeer.", a: ["Ik ga studeren"], ex: "gaan 뒤에는 꼭 동사원형(-en)을 써요.", hint: "동사원형" }
    ]
  }
];
