/* Dutch grammar lessons (A1-A2) for Korean learners. ES5, no modules. */
window.GRAMMAR = [
  {
    id: 1,
    ko: "명사와 관사",
    nl: "Zelfstandige naamwoorden en lidwoorden",
    intro: "네덜란드어 명사에는 de 아니면 het가 붙어요. 관사를 같이 외워 두면 형용사, 지시어까지 훨씬 쉬워져요.",
    rules: [
      "정관사는 <b>de</b>와 <b>het</b> 두 가지예요. 명사의 약 3분의 2가 de 명사라서, 단어를 외울 때 관사까지 한 덩어리로 외우는 게 제일 좋아요. 예: <span class='nl'>de tafel, het huis</span>",
      "<b>het</b>가 붙는 대표 그룹: 지소형(-je), 명사로 쓴 동사원형(<span class='nl'>het eten, het zwemmen</span>), -um으로 끝나는 말(<span class='nl'>het museum</span>), -ment로 끝나는 말 대부분(<span class='nl'>het moment, het appartement</span>).",
      "<b>de</b>가 붙는 대표 그룹: 사람(<span class='nl'>de man, de vrouw</span>), -heid, -ing, -tie로 끝나는 말(<span class='nl'>de vrijheid, de woning, de informatie</span>). 단, <span class='nl'>het meisje</span>는 -je 때문에 het예요.",
      "<b>복수형에는 언제나 de</b>를 써요. <span class='nl'>het boek → de boeken</span>",
      "복수형은 보통 <b>-en</b>을 붙여요. 이때 철자가 바뀌어요: 긴 모음은 하나로 줄이고(<span class='nl'>de straat → straten</span>), 짧은 모음 뒤 자음은 두 번(<span class='nl'>de kat → katten</span>), f는 v로, s는 z로(<span class='nl'>de brief → brieven, de doos → dozen</span>).",
      "강세 없는 -el, -er, -em, -en, -je로 끝나면 <b>-s</b>를 붙여요. <span class='nl'>de tafel → tafels, de kamer → kamers, het meisje → meisjes</span>",
      "지소형(작은 것, 귀여운 것)은 <b>-je / -tje / -pje / -etje</b>를 붙이고, 관사는 항상 <b>het</b>예요. <span class='nl'>het huisje, het stoeltje, het boompje, het balletje</span>"
    ],
    examples: [
      ["Het huis is groot.", "그 집은 커요."],
      ["De tafel staat in de keuken.", "식탁은 부엌에 있어요."],
      ["Het meisje leest een boek.", "그 여자아이는 책을 읽어요."],
      ["De boeken liggen op de zetel.", "책들이 소파 위에 있어요."],
      ["Waar is mijn gsm?", "내 휴대폰 어디 있지?"],
      ["Wij hebben een huisje in de Ardennen.", "우리는 아르덴에 작은 집이 있어요."]
    ],
    tip: "작아지면 무조건 het! de tafel도 작아지면 het tafeltje가 돼요. 그리고 여러 개가 되면 무조건 de.",
    drill: "#dehet",
    mc: [
      { q: "___ huis", opts: ["de", "het"], a: 1, ex: "huis는 het 명사예요: het huis." },
      { q: "___ meisje", opts: ["de", "het"], a: 1, ex: "-je로 끝나는 지소형은 사람이어도 항상 het예요." },
      { q: "___ woning", opts: ["de", "het"], a: 0, ex: "-ing으로 끝나는 명사는 de예요: de woning." },
      { q: "___ boeken (복수)", opts: ["het", "de"], a: 1, ex: "복수형에는 관사가 항상 de예요." },
      { q: "het boek의 복수형은?", opts: ["de boeks", "de boeken", "het boeken"], a: 1, ex: "boek는 -en을 붙이고, 복수라서 관사는 de가 돼요." }
    ],
    fill: [
      { q: "boek → 복수형", a: ["boeken", "de boeken"], ex: "대부분의 명사는 -en을 붙여요: boeken.", hint: "-en" },
      { q: "tafel → 복수형", a: ["tafels", "de tafels"], ex: "강세 없는 -el로 끝나서 -s를 붙여요: tafels.", hint: "-el로 끝나요" },
      { q: "doos → 복수형", a: ["dozen", "de dozen"], ex: "긴 모음 oo는 o 하나로 줄이고, s는 z로 바뀌어요: dozen.", hint: "s → z" },
      { q: "huis → 지소형 (작은 집)", a: ["huisje", "het huisje"], ex: "huis에 -je를 붙여 huisje, 관사는 het예요.", hint: "-je" },
      { q: "관사 오류 고치기: De meisje speelt.", a: ["Het meisje speelt"], ex: "meisje는 -je로 끝나는 지소형이라 het를 써요.", hint: "-je로 끝나는 단어" }
    ]
  },
  {
    id: 2,
    ko: "형용사 변화",
    nl: "Bijvoeglijke naamwoorden",
    intro: "형용사가 명사 앞에 오면 대부분 -e가 붙어요. 딱 하나의 예외만 기억하면 옷 가게에서도 자신 있게 말할 수 있어요.",
    rules: [
      "형용사가 동사 뒤(서술)에 오면 <b>변화 없음</b>: <span class='nl'>De tafel is groot. Het huis is groot.</span>",
      "형용사가 명사 앞에 오면 보통 <b>-e</b>를 붙여요: <span class='nl'>de grote tafel, het grote huis, de grote huizen</span>",
      "예외는 하나: <b>het 단수 명사</b> 앞에 <b>een / geen / 관사 없음</b>일 때는 -e가 없어요. <span class='nl'>een groot huis, geen groot huis, mooi weer</span>",
      "de 명사는 een이 와도 -e가 붙어요: <span class='nl'>een blauwe jurk, een grote tafel</span>",
      "-e를 붙일 때 철자 변화: <span class='nl'>groot → grote, dik → dikke, lief → lieve, grijs → grijze</span>",
      "색깔과 무늬도 같은 규칙: <span class='nl'>een gestreept T-shirt, een gestreepte broek, een geruite rok, een gebloemde jurk</span>. 단 <span class='nl'>oranje, roze</span>는 변하지 않아요."
    ],
    examples: [
      ["Ik draag een gestreept T-shirt.", "나는 줄무늬 티셔츠를 입고 있어요."],
      ["Zij heeft een blauwe jurk gekocht.", "그녀는 파란 원피스를 샀어요."],
      ["Het grote huis staat naast de kerk.", "그 큰 집은 교회 옆에 있어요."],
      ["Dat is een groot huis.", "그건 큰 집이에요."],
      ["De soep is warm.", "수프가 따뜻해요."],
      ["We hebben een kleine tuin.", "우리는 작은 정원이 있어요."]
    ],
    tip: "'een + het 단어'일 때만 -e가 빠진다! 나머지는 거의 다 -e.",
    mc: [
      { q: "een ___ huis (groot)", opts: ["groot", "grote"], a: 0, ex: "huis는 het 명사이고 앞에 een이 있어서 -e가 붙지 않아요." },
      { q: "het ___ huis (groot)", opts: ["groot", "grote"], a: 1, ex: "정관사 het 뒤에서는 -e가 붙어요: het grote huis." },
      { q: "een ___ jurk (blauw)", opts: ["blauw", "blauwe"], a: 1, ex: "jurk는 de 명사라서 een이 있어도 -e가 붙어요." },
      { q: "De tafel is ___. (groot)", opts: ["grote", "groot"], a: 1, ex: "형용사가 동사 뒤에 오면 변하지 않아요." },
      { q: "de ___ huizen (oud)", opts: ["oud", "oude", "ouden"], a: 1, ex: "복수 명사 앞의 형용사는 -e를 붙여요: de oude huizen." }
    ],
    fill: [
      { q: "een ___ trui (dik)", a: ["dikke"], ex: "trui는 de 명사라서 -e를 붙이고, 짧은 모음 뒤라 k를 두 번 써요: dikke.", hint: "자음 두 번" },
      { q: "de ___ tas (rood)", a: ["rode"], ex: "de 뒤라 -e를 붙이고, 긴 모음 oo는 o 하나로 줄어요: rode.", hint: "oo → o" },
      { q: "een ___ appartement (klein)", a: ["klein"], ex: "appartement는 het 명사이고 een이 있어서 -e 없이 klein이에요." },
      { q: "Het T-shirt is gestreept. → het ___ T-shirt", a: ["gestreepte"], ex: "정관사 het 뒤 명사 앞이라 -e가 붙어요: het gestreepte T-shirt." },
      { q: "een groot huis → het로 바꾸기", a: ["het grote huis"], ex: "een을 het로 바꾸면 형용사에 -e가 붙어요.", hint: "het ___ huis" }
    ]
  },
  {
    id: 3,
    ko: "현재 시제",
    nl: "Tegenwoordige tijd",
    intro: "현재형은 모든 문장의 기본이에요. 어간(stam)만 찾으면 대부분의 동사를 바로 쓸 수 있어요.",
    rules: [
      "어간(stam)은 동사원형에서 <b>-en</b>을 뺀 형태예요. <span class='nl'>werken → werk</span>",
      "철자 규칙: 긴 모음은 두 번 쓰고(<span class='nl'>maken → maak</span>), 겹자음은 하나로(<span class='nl'>zitten → zit</span>), v는 f로, z는 s로(<span class='nl'>leven → leef, lezen → lees</span>).",
      "<b>ik</b> = 어간, <b>jij / u / hij / zij / het</b> = 어간 + t, <b>wij / jullie / zij(복수)</b> = 동사원형. <span class='nl'>ik werk, jij werkt, wij werken</span>",
      "어간이 이미 t로 끝나면 t를 더 붙이지 않아요: <span class='nl'>hij zit</span>. d로 끝나면 dt로 써요: <span class='nl'>hij vindt</span>.",
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
      { q: "Hij ___ in Brussel. (wonen)", opts: ["woon", "woont", "wonen"], a: 1, ex: "hij는 어간 + t: woont." },
      { q: "Wij ___ moe. (zijn)", opts: ["is", "bent", "zijn"], a: 2, ex: "wij와 함께 쓰는 zijn의 형태는 zijn이에요." },
      { q: "Jij ___ een broer. (hebben)", opts: ["hebt", "heb", "hebben"], a: 0, ex: "jij가 동사 앞에 있으니 hebt예요." },
      { q: "___ je morgen? (werken, 의문문)", opts: ["Werkt", "Werk", "Werken"], a: 1, ex: "je가 동사 뒤에 오면 -t가 빠져요: Werk je?" },
      { q: "Zij(그녀) ___ Nederlands. (spreken)", opts: ["spreek", "spreekt", "spreken"], a: 1, ex: "그녀(한 사람)는 어간 + t: spreekt." }
    ],
    fill: [
      { q: "hij + werken", a: ["werkt"], ex: "hij는 어간 werk + t = werkt." },
      { q: "ik + zijn", a: ["ben"], ex: "zijn은 불규칙: ik ben." },
      { q: "zij(그녀) + hebben", a: ["heeft"], ex: "hebben은 불규칙: zij heeft." },
      { q: "ik + maken", a: ["maak"], ex: "maken의 어간은 긴 모음을 유지하려고 a를 두 번 써요: maak.", hint: "긴 모음 유지" },
      { q: "hij + zitten", a: ["zit"], ex: "어간 zit가 이미 t로 끝나서 t를 더 붙이지 않아요.", hint: "t를 또 붙일까요?" }
    ]
  },
  {
    id: 4,
    ko: "단순과거 시제",
    nl: "Onvoltooid verleden tijd (imperfectum)",
    intro: "단순과거는 이야기하듯 과거를 말할 때 써요. 단수형과 복수형 두 가지만 있어서 생각보다 단순해요.",
    rules: [
      "규칙 동사: 어간 + <b>-te / -de</b>(단수), <b>-ten / -den</b>(복수). ik, jij, hij는 모두 같은 형태예요.",
      "<b>'t kofschip</b> 규칙: 어간의 마지막 소리가 <b>t, k, f, s, ch, p</b> 중 하나면 -te(n), 아니면 -de(n). <span class='nl'>werken → werkte, wonen → woonde</span>",
      "판단은 원래 동사원형의 자음으로 해요. <span class='nl'>leven → leefde</span>(원래 v), <span class='nl'>reizen → reisde</span>(원래 z).",
      "어간이 t나 d로 끝나도 그대로 붙여요: <span class='nl'>praten → praatte, antwoorden → antwoordde</span>",
      "불규칙 동사는 모음이 바뀌어서 따로 외워요: <span class='nl'>gaan → ging, eten → at, komen → kwam, zien → zag, doen → deed, kopen → kocht</span>",
      "<b>zijn</b> → was / waren, <b>hebben</b> → had / hadden"
    ],
    table: {
      head: ["동사", "단수 (ik / jij / hij)", "복수 (wij / jullie / zij)"],
      rows: [
        ["werken", "werkte", "werkten"],
        ["leven", "leefde", "leefden"],
        ["wonen", "woonde", "woonden"],
        ["zijn", "was", "waren"],
        ["hebben", "had", "hadden"],
        ["gaan", "ging", "gingen"],
        ["eten", "at", "aten"],
        ["komen", "kwam", "kwamen"]
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
    tip: "'t kofschip = t, k, f, s, ch, p. 이 소리 뒤에는 -te, 나머지는 -de!",
    drill: "#tijdmachine",
    mc: [
      { q: "wij + werken (과거)", opts: ["werkte", "werkten", "werkden"], a: 1, ex: "k는 't kofschip에 있어서 -te, 복수라서 -ten: werkten." },
      { q: "ik + leven (과거)", opts: ["leefte", "leefde", "leefden"], a: 1, ex: "원래 자음이 v라서 -de, 단수라서 leefde." },
      { q: "Gisteren ___ wij moe. (zijn)", opts: ["was", "waren", "zijnden"], a: 1, ex: "zijn의 복수 과거형은 waren이에요." },
      { q: "Jij ___ gisteren een afspraak. (hebben)", opts: ["hadden", "hebde", "had"], a: 2, ex: "hebben의 단수 과거형은 had예요." },
      { q: "다음 중 불규칙 동사는?", opts: ["werken", "gaan", "wonen"], a: 1, ex: "gaan의 과거형은 ging이라 불규칙이에요. werken → werkte, wonen → woonde는 규칙이에요." }
    ],
    fill: [
      { q: "ik + gaan (과거)", a: ["ging"], ex: "gaan은 불규칙: ging / gingen." },
      { q: "wij + eten (과거)", a: ["aten"], ex: "eten은 불규칙: at / aten. 복수라서 aten." },
      { q: "hij + maken (과거)", a: ["maakte"], ex: "어간 maak의 k는 't kofschip에 있어서 -te: maakte.", hint: "'t kofschip" },
      { q: "zij(복수) + wonen (과거)", a: ["woonden"], ex: "n은 't kofschip에 없어서 -de, 복수라서 woonden.", hint: "-de(n) 또는 -te(n)?" },
      { q: "Vandaag ben ik moe. → 과거로 (Gisteren으로 시작)", a: ["Gisteren was ik moe"], ex: "ben의 과거형은 was. Gisteren이 맨 앞이라 동사가 두 번째 자리에 와요." }
    ]
  },
  {
    id: 5,
    ko: "현재완료 시제",
    nl: "Voltooid tegenwoordige tijd (perfectum)",
    intro: "말할 때 과거 일은 대부분 현재완료로 말해요. hebben과 zijn 중 무엇을 쓸지, 과거분사를 어떻게 만드는지가 핵심이에요.",
    rules: [
      "구조: <b>hebben / zijn</b>(현재형, 두 번째 자리) + <b>과거분사</b>(문장 끝). <span class='nl'>Ik heb gewerkt.</span>",
      "규칙 과거분사: <b>ge + 어간 + t / d</b> ('t kofschip이면 t, 아니면 d). <span class='nl'>werken → gewerkt, wonen → gewoond, leven → geleefd, reizen → gereisd</span>",
      "불규칙 과거분사는 외워요: <span class='nl'>eten → gegeten, zwemmen → gezwommen, zijn → geweest, gaan → gegaan, komen → gekomen, drinken → gedronken, kopen → gekocht, brengen → gebracht</span>",
      "<b>be-, ver-, ont-, ge-, her-, er-</b>로 시작하는 동사는 ge-를 붙이지 않아요: <span class='nl'>betalen → betaald, verhuizen → verhuisd, vertrekken → vertrokken, ontmoeten → ontmoet</span>",
      "분리동사는 접두사와 동사 사이에 ge-가 들어가요: <span class='nl'>afdrogen → afgedroogd, opruimen → opgeruimd, invullen → ingevuld, meebrengen → meegebracht</span>",
      "대부분은 <b>hebben</b>. 장소 이동이나 상태 변화는 <b>zijn</b>: <span class='nl'>gaan, komen, blijven, worden, zijn, verhuizen, vertrekken, aankomen, opstaan, thuiskomen</span>",
      "fietsen, lopen, zwemmen 같은 이동 방법 동사는 <b>목적지가 있으면 zijn</b>, 없으면 hebben: <span class='nl'>Ik ben naar huis gefietst. / Ik heb een uur gefietst.</span>"
    ],
    examples: [
      ["Ik heb vandaag thuis gewerkt.", "오늘 집에서 일했어요."],
      ["Ik ben naar huis gegaan.", "집에 갔어요."],
      ["We zijn vorig jaar naar Gent verhuisd.", "우리는 작년에 겐트로 이사했어요."],
      ["Ik heb de borden afgedroogd.", "접시를 닦아서 말렸어요."],
      ["Hij is om zeven uur opgestaan.", "그는 7시에 일어났어요."],
      ["Heb je het formulier ingevuld?", "서류 작성했어?"]
    ],
    tip: "'어디로 움직였거나 상태가 바뀌었다'면 zijn, 그 밖에는 hebben.",
    drill: "#perfectum",
    mc: [
      { q: "Ik ___ naar huis gegaan.", opts: ["heb", "ben"], a: 1, ex: "gaan은 장소 이동이라 zijn과 함께 써요." },
      { q: "Wij ___ een pizza gegeten.", opts: ["hebben", "zijn"], a: 0, ex: "eten은 이동이나 상태 변화가 아니라 hebben을 써요." },
      { q: "Zij(그녀) ___ naar Antwerpen verhuisd.", opts: ["heeft", "is"], a: 1, ex: "verhuizen(이사하다)은 장소가 바뀌는 동사라 zijn을 써요." },
      { q: "Ik ___ naar het werk gefietst.", opts: ["heb", "ben"], a: 1, ex: "목적지(naar het werk)가 있으면 이동 방법 동사도 zijn을 써요." },
      { q: "betalen의 과거분사는?", opts: ["gebetaald", "betaalt", "betaald"], a: 2, ex: "be-로 시작해서 ge-가 붙지 않고, l은 't kofschip에 없어서 -d: betaald." }
    ],
    fill: [
      { q: "zwemmen → 과거분사", a: ["gezwommen"], ex: "zwemmen은 불규칙: gezwommen.", hint: "모음이 o로 바뀌어요" },
      { q: "reizen → 과거분사", a: ["gereisd"], ex: "원래 자음이 z라서 -d: gereisd.", hint: "원래 자음은 z" },
      { q: "opruimen → 과거분사", a: ["opgeruimd"], ex: "분리동사라 op + ge + ruimd: opgeruimd." },
      { q: "vertrekken → 과거분사", a: ["vertrokken"], ex: "ver-로 시작해서 ge-가 없고, 불규칙이라 vertrokken." },
      { q: "Ik at een wafel. → 현재완료로", a: ["Ik heb een wafel gegeten"], ex: "eten은 hebben + gegeten, 과거분사는 문장 끝에 와요." }
    ]
  },
  {
    id: 6,
    ko: "미래 시제",
    nl: "Toekomende tijd",
    intro: "네덜란드어로 미래를 말하는 방법은 세 가지예요. 일상에서는 현재형과 gaan을 가장 많이 써요.",
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
      { q: "Wij ___ je helpen.", opts: ["zal", "zullen", "zult"], a: 1, ex: "wij와 쓰는 zullen의 형태는 zullen이에요." },
      { q: "Ik ___ morgen studeren.", opts: ["ga", "gaat", "gaan"], a: 0, ex: "ik와 쓰는 gaan의 형태는 ga예요." },
      { q: "같이 요리할까요? → ___ we samen koken?", opts: ["Zal", "Zult", "Zullen"], a: 2, ex: "we와 함께 제안할 때는 Zullen we ...?예요." },
      { q: "현재형으로 미래를 말한 문장은?", opts: ["Gisteren werkte ik thuis.", "Morgen werk ik thuis.", "Ik heb thuis gewerkt."], a: 1, ex: "Morgen 같은 시간 표현과 현재형을 함께 쓰면 미래 뜻이 돼요." },
      { q: "올바른 문장은?", opts: ["Ik ga morgen studeren.", "Ik studeren ga morgen.", "Ik morgen ga studeren."], a: 0, ex: "변하는 동사(ga)는 두 번째 자리, 동사원형(studeren)은 문장 끝이에요." }
    ],
    fill: [
      { q: "ik / morgen / studeren (gaan 사용)", a: ["Ik ga morgen studeren"], ex: "ga는 두 번째 자리, studeren은 문장 끝에 와요." },
      { q: "Ik werk thuis. → gaan으로 미래", a: ["Ik ga thuis werken"], ex: "werk가 원형 werken으로 바뀌어 문장 끝으로 가요." },
      { q: "jij + zullen", a: ["zult", "zal"], ex: "jij에는 zult와 zal 둘 다 쓸 수 있어요." },
      { q: "morgen / ik / thuis / werk (Morgen으로 시작)", a: ["Morgen werk ik thuis"], ex: "Morgen이 첫 자리라 동사 werk가 두 번째, 주어 ik는 그 뒤에 와요." },
      { q: "jij / vanavond / koken → gaan을 쓴 의문문", a: ["Ga jij vanavond koken?", "Ga je vanavond koken?"], ex: "의문문은 동사가 맨 앞이고, jij가 뒤에 오면 gaat가 ga로 바뀌어요." }
    ]
  },
  {
    id: 7,
    ko: "문장 어순",
    nl: "Woordvolgorde",
    intro: "네덜란드어 문장의 가장 중요한 규칙은 '동사는 두 번째 자리'예요. 이것만 지켜도 문장이 훨씬 자연스러워져요.",
    rules: [
      "<b>V2 규칙</b>: 평서문에서 변하는 동사는 항상 <b>두 번째 자리</b>에 와요. <span class='nl'>Ik werk vandaag thuis.</span>",
      "<b>도치</b>: 주어가 아닌 말(시간, 장소 등)이 맨 앞에 오면 주어가 동사 뒤로 가요. <span class='nl'>Vandaag werk ik thuis.</span>",
      "예/아니오 의문문은 <b>동사가 맨 앞</b>: <span class='nl'>Werk je morgen?</span> 의문사 의문문은 의문사 + 동사 + 주어: <span class='nl'>Waar woon je?</span>",
      "jij/je가 동사 뒤에 오면 동사의 -t가 빠져요. <span class='nl'>Werk je? Woon jij hier?</span>",
      "중간 순서는 보통 <b>시간 → 방법 → 장소</b>: <span class='nl'>Ik ga morgen met de trein naar Brussel.</span>",
      "<b>niet</b>은 간단한 문장에서는 끝에, 형용사, 장소, 전치사구, 두 번째 동사 앞에 와요: <span class='nl'>Ik werk morgen niet. Ik ben niet moe. Ik heb niet gewerkt.</span>",
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
      { q: "Vandaag ___.", opts: ["ik werk thuis", "werk ik thuis", "thuis ik werk"], a: 1, ex: "Vandaag이 첫 자리라 동사 werk가 두 번째, 주어 ik는 그 뒤에 와요." },
      { q: "Waar ___?", opts: ["woon je", "je woont", "woont je"], a: 0, ex: "의문사 뒤에 동사, 그다음 주어. je가 동사 뒤라 -t가 빠져요." },
      { q: "Ik ben ___. (나는 안 피곤해요)", opts: ["moe niet", "geen moe", "niet moe"], a: 2, ex: "niet은 형용사 앞에 와요: niet moe." },
      { q: "Ik heb ___ auto.", opts: ["niet", "geen"], a: 1, ex: "een + 명사를 부정할 때는 geen을 써요." },
      { q: "너 내일 일해?", opts: ["Werk je morgen?", "Werkt je morgen?", "Morgen je werkt?"], a: 0, ex: "예/아니오 의문문은 동사가 맨 앞이고, je 앞에서 -t가 빠져요." }
    ],
    fill: [
      { q: "vandaag / ik / werk (vandaag로 시작)", a: ["Vandaag werk ik"], ex: "동사 werk가 두 번째 자리, 주어 ik는 동사 뒤로 가요." },
      { q: "Ik woon in Gent. → In Gent로 시작", a: ["In Gent woon ik"], ex: "In Gent가 첫 자리라 동사 woon 다음에 주어 ik가 와요." },
      { q: "jij / morgen / werken → 예/아니오 의문문", a: ["Werk je morgen?", "Werk jij morgen?"], ex: "동사가 맨 앞에 오고, jij/je 앞이라 werkt가 werk로 바뀌어요." },
      { q: "Ik werk morgen. → 부정문", a: ["Ik werk morgen niet"], ex: "간단한 문장에서 niet은 끝에 와요." },
      { q: "Ik heb tijd. → 부정문", a: ["Ik heb geen tijd"], ex: "관사 없는 명사(tijd)를 부정할 때는 geen을 써요." }
    ]
  },
  {
    id: 8,
    ko: "분리동사",
    nl: "Scheidbare werkwoorden",
    intro: "opstaan, opruimen처럼 앞부분이 떨어져 나가는 동사예요. 어디로 떨어지는지만 알면 일상 표현이 확 늘어요.",
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
      { q: "Ik ___ elke dag vroeg op. (opstaan)", opts: ["opsta", "sta", "staat"], a: 1, ex: "접두사 op은 문장 끝으로 가고, 동사 sta가 두 번째 자리에 와요." },
      { q: "올바른 문장은?", opts: ["Ik moet vroeg staan op.", "Ik moet op vroeg staan.", "Ik moet vroeg opstaan."], a: 2, ex: "조동사가 있으면 분리동사는 한 단어(opstaan)로 문장 끝에 와요." },
      { q: "invullen의 과거분사는?", opts: ["geinvuld", "ingevuld", "invulgd"], a: 1, ex: "접두사 in과 vuld 사이에 ge가 들어가요: ingevuld." },
      { q: "Ik heb een jas ___. ((옷을) 입고 있다)", opts: ["aan", "op", "uit"], a: 0, ex: "aanhebben = 입고 있다. 접두사 aan이 문장 끝에 와요." },
      { q: "기차는 8시에 출발해요.", opts: ["De trein trekt om acht uur ver.", "De trein vertrekt om acht uur."], a: 1, ex: "ver-로 시작하는 vertrekken은 분리되지 않아요." }
    ],
    fill: [
      { q: "ik / opstaan / om zeven uur (현재형)", a: ["Ik sta om zeven uur op"], ex: "동사 sta는 두 번째 자리, 접두사 op은 문장 끝으로 가요." },
      { q: "hij / de borden / afdrogen (현재형)", a: ["Hij droogt de borden af"], ex: "droogt는 두 번째 자리, 접두사 af는 문장 끝으로 가요." },
      { q: "Ik ruim mijn kamer op. → 현재완료로", a: ["Ik heb mijn kamer opgeruimd"], ex: "opruimen은 hebben + opgeruimd. ge가 op과 ruimd 사이에 들어가요." },
      { q: "Ik kom om zes uur thuis. → 현재완료로", a: ["Ik ben om zes uur thuisgekomen"], ex: "thuiskomen은 이동이라 zijn을 쓰고, 과거분사는 thuisgekomen이에요." },
      { q: "meebrengen → 과거분사", a: ["meegebracht"], ex: "mee + ge + bracht(불규칙): meegebracht.", hint: "brengen → gebracht" }
    ]
  },
  {
    id: 9,
    ko: "비교급과 최상급",
    nl: "Trappen van vergelijking",
    intro: "더 크다, 제일 맛있다처럼 비교하는 표현이에요. 장보기나 도시 이야기를 할 때 정말 자주 써요.",
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
      { q: "Brussel is groter ___ Gent.", opts: ["als", "dan", "of"], a: 1, ex: "비교급 뒤에는 dan을 써요." },
      { q: "Ik ben even oud ___ jij.", opts: ["dan", "als"], a: 1, ex: "같음을 말하는 even ... als 구조예요." },
      { q: "goed의 비교급은?", opts: ["goeder", "meer goed", "beter"], a: 2, ex: "goed는 불규칙: goed → beter → best." },
      { q: "duur의 비교급은?", opts: ["duurder", "duurer", "duurst"], a: 0, ex: "-r로 끝나는 형용사는 비교급에 -der을 붙여요." },
      { q: "Ik drink ___ thee dan koffie. (더 좋아해서)", opts: ["meer graag", "liever", "graagder"], a: 1, ex: "graag의 비교급은 불규칙인 liever예요." }
    ],
    fill: [
      { q: "klein → 비교급", a: ["kleiner"], ex: "klein + er = kleiner." },
      { q: "groot → 최상급", a: ["grootst", "grootste", "het grootst", "de grootste"], ex: "groot + st = grootst. 긴 모음 oo는 그대로 유지돼요." },
      { q: "veel → 비교급", a: ["meer"], ex: "veel은 불규칙: veel → meer → meest." },
      { q: "dik → 비교급", a: ["dikker"], ex: "짧은 모음 뒤라 k를 두 번 쓰고 -er: dikker.", hint: "자음 두 번" },
      { q: "Gent is mooi. Brugge is ook mooi. → even ... als로 한 문장", a: ["Gent is even mooi als Brugge", "Brugge is even mooi als Gent"], ex: "둘이 같을 때는 even + 형용사 + als를 써요." }
    ]
  },
  {
    id: 10,
    ko: "조동사",
    nl: "Modale werkwoorden",
    intro: "할 수 있다, 해야 한다, 해도 된다처럼 마음과 상황을 더해 주는 동사예요. 조동사는 두 번째 자리, 동사원형은 끝이라는 것만 기억하세요.",
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
      { q: "Ik ___ zwemmen. (능력: 수영할 줄 안다)", opts: ["moet", "kan", "mag"], a: 1, ex: "능력은 kunnen: ik kan." },
      { q: "___ ik hier roken? (허락을 구함)", opts: ["Moet", "Wil", "Mag"], a: 2, ex: "허락을 구할 때는 mogen: Mag ik ...?" },
      { q: "Hij ___ een nieuwe gsm kopen. (원함)", opts: ["wil", "wilt", "willen"], a: 0, ex: "hij에는 -t 없이 wil이에요." },
      { q: "올바른 문장은?", opts: ["Ik wil gaan morgen naar Gent.", "Ik wil morgen naar Gent gaan.", "Ik morgen wil naar Gent gaan."], a: 1, ex: "조동사 wil은 두 번째 자리, 동사원형 gaan은 문장 끝이에요." },
      { q: "Je ___ morgen werken. (의무: 해야 한다)", opts: ["mag", "wil", "moet"], a: 2, ex: "의무는 moeten: je moet." }
    ],
    fill: [
      { q: "wij + kunnen", a: ["kunnen"], ex: "복수 주어는 동사원형과 같아요: wij kunnen." },
      { q: "hij + mogen", a: ["mag"], ex: "mogen은 불규칙: hij mag." },
      { q: "ik / Nederlands / spreken / kunnen", a: ["Ik kan Nederlands spreken"], ex: "kan은 두 번째 자리, spreken은 문장 끝이에요." },
      { q: "Ik werk vandaag. → moeten을 넣어서", a: ["Ik moet vandaag werken"], ex: "moet가 두 번째 자리로 오고, werk는 원형 werken으로 문장 끝에 가요." },
      { q: "jij + willen", a: ["wilt", "wil"], ex: "jij에는 wilt와 wil 둘 다 쓸 수 있어요." }
    ]
  },
  {
    id: 11,
    ko: "대명사와 지시어",
    nl: "Voornaamwoorden",
    intro: "나, 너, 그것, 이것, 저것을 말하는 작은 단어들이에요. 같은 명사를 반복하지 않게 해 줘서 말이 훨씬 자연스러워져요.",
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
      { q: "___ huis (가까이 있는 것)", opts: ["Deze", "Dit", "Die"], a: 1, ex: "huis는 het 명사이고 가까이 있어서 dit예요." },
      { q: "___ boeken (멀리 있는 것, 복수)", opts: ["Dat", "Die", "Dit"], a: 1, ex: "복수 명사에는 de 명사처럼 deze/die를 쓰고, 멀리 있어서 die예요." },
      { q: "___ huis is groot. (우리의)", opts: ["Onze", "Ons"], a: 1, ex: "huis는 het 단수 명사라서 ons예요." },
      { q: "Ik zie ___. (그 남자를)", opts: ["hij", "hem", "zijn"], a: 1, ex: "동사의 목적어 자리라 목적격 hem을 써요." },
      { q: "Dit cadeau is voor ___. (너)", opts: ["jij", "jouw", "jou"], a: 2, ex: "전치사 voor 뒤에는 목적격 jou를 써요." }
    ],
    fill: [
      { q: "___ tafel (가까이 있는 것)", a: ["deze"], ex: "tafel은 de 명사이고 가까이 있어서 deze예요.", hint: "de tafel" },
      { q: "___ kinderen (우리의)", a: ["onze"], ex: "복수 명사 앞에서는 onze를 써요." },
      { q: "Ik zie Marie. → Marie를 대명사로", a: ["Ik zie haar"], ex: "여성 목적격은 haar예요." },
      { q: "Ik woon al twee jaar in Gent. → in Gent를 er로", a: ["Ik woon er al twee jaar"], ex: "장소를 가리키는 er는 동사 바로 뒤쪽에 와요." },
      { q: "___ is mijn broer. (옆에 있는 사람을 소개할 때, 가까이)", a: ["dit"], ex: "사람이나 물건을 소개할 때는 명사와 상관없이 dit / dat을 써요. 가까이 있으니 dit." }
    ]
  },
  {
    id: 12,
    ko: "명령문과 실용 표현",
    nl: "Imperatief en praktische uitdrukkingen",
    intro: "가게, 집, 친구와의 대화에서 바로 쓸 수 있는 부탁과 제안 표현이에요. 명령형은 어간만 쓰면 돼서 정말 간단해요.",
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
      { q: "geven → 명령형", opts: ["Geeft!", "Geef!", "Geven!"], a: 1, ex: "명령형은 어간만 써요: geef." },
      { q: "zijn → 명령형: '조용히 해!'", opts: ["Ben stil!", "Is stil!", "Wees stil!"], a: 2, ex: "zijn의 명령형은 특별하게 Wees예요." },
      { q: "가게에서 점원에게 정중하게 '한 사이즈 작은 거 있나요?'", opts: ["Hebt u een maat kleiner?", "Heeft jij een maat kleiner?", "Hebben u een maat kleiner?"], a: 0, ex: "u와 함께 hebt(또는 heeft)를 써요. jij에는 heeft, u에는 hebben을 쓰지 않아요." },
      { q: "친구: Mag ik je pen gebruiken? → '그럼, 써!'", opts: ["Wees maar!", "Zal ik?", "Doe maar!"], a: 2, ex: "Doe maar는 '그래, 그렇게 해'라는 허락 표현이에요." },
      { q: "내가 창문 열까요? → ___ ik het raam openen?", opts: ["Zullen", "Zal", "Zult"], a: 1, ex: "ik와 함께 제안할 때는 Zal ik ...?예요." }
    ],
    fill: [
      { q: "komen → 명령형", a: ["Kom", "Kom!"], ex: "어간 kom이 그대로 명령형이에요." },
      { q: "opstaan → 명령형", a: ["Sta op"], ex: "어간 sta 다음에 접두사 op이 끝으로 가요." },
      { q: "Je moet je kamer opruimen. → 명령문", a: ["Ruim je kamer op", "Ruim jouw kamer op"], ex: "어간 ruim으로 시작하고 접두사 op은 끝으로 가요." },
      { q: "zijn + voorzichtig → 명령문", a: ["Wees voorzichtig"], ex: "zijn의 명령형은 Wees예요." },
      { q: "we / koffie / drinken → Zullen으로 제안하는 의문문", a: ["Zullen we koffie drinken?", "Zullen wij koffie drinken?"], ex: "Zullen이 맨 앞, 주어 we, 동사원형 drinken은 문장 끝이에요." }
    ]
  }
];
