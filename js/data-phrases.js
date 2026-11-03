/* 실생활 표현: 학교(학부모-선생님), 마트 장보기 */
window.PHRASES = {
  school: {
    id: "school", ko: "유치원·학교에서", nl: "Op school", emoji: "huis",
    easy: "아이를 맡기고 데리러 갈 때, 선생님과 나누는 짧은 말이에요.",
    intro: [
      "벨기에(플랑드르) 학교에서는 선생님을 juf(여자) 또는 meester(남자)라고 불러요.",
      "선생님께는 기본으로 u(존댓말 '당신')를 써요. 하지만 플랑드르에서는 많은 부모님이 juf에게 je(반말 '너')도 편하게 써요.",
      "예문은 아들 기준(hij, zijn, hem)이에요. 딸이면 zij(ze), haar로 바꾸면 돼요.",
      "짧고 친절하게 말하면 충분해요. 완벽하지 않아도 괜찮아요!"
    ],
    terms: [
      ["juf", "여자 선생님 (플랑드르). 이름 앞에도 붙여요: juf Sara"],
      ["meester", "남자 선생님. 이름 앞에도 붙여요: meester Tom"],
      ["kleuterschool", "유치원 (2살 반~6살). 아이는 kleuter라고 해요."],
      ["lagere school", "초등학교 (6살~12살)"],
      ["boekentas", "책가방 (플랑드르 말). 네덜란드에서는 schooltas라고 해요."],
      ["u / je", "u는 존댓말, je는 반말이에요. 선생님께는 u가 안전해요."]
    ],
    sections: [
      { title: "아침 인사·등원", items: [
        { nl: "Goedemorgen, juf!", ko: "안녕하세요, 선생님!", note: "남자 선생님이면 meester라고 해요.", alt: "Dag juf!" },
        { nl: "Dag juf, tot straks!", ko: "선생님, 이따 봬요!", note: "Dag는 벨기에에서 아주 많이 쓰는 인사예요. 만날 때도, 헤어질 때도 써요." },
        { nl: "Een fijne dag, juf!", ko: "오늘도 잘 부탁드립니다!", note: "네덜란드어에는 '잘 부탁드립니다'라는 말이 없어요. 아침에 아이를 맡길 때는 '좋은 하루 보내세요'라고 따뜻하게 인사하면 같은 마음이 전해져요.", alt: "Dank u, tot straks!" },
        { nl: "Ik hoop op een goede samenwerking.", ko: "(새 학기에) 앞으로 잘 부탁드려요.", note: "'좋은 협력을 바라요'라는 뜻이에요. 새 학년 첫날이나 첫 상담 때 한 번 쓰기 좋아요." },
        { nl: "Hij is een beetje moe vandaag.", ko: "아이가 오늘 좀 피곤해해요." },
        { nl: "Hij heeft slecht geslapen.", ko: "아이가 잠을 잘 못 잤어요." },
        { nl: "Hij heeft nog niet ontbeten.", ko: "아이가 아직 아침을 안 먹었어요." },
        { nl: "Zeg maar dag tegen de juf!", ko: "(아이에게) 선생님께 인사하자!", note: "아이에게 하는 말이에요. 벨기에 부모님이 정말 자주 써요." }
      ] },
      { title: "하원·데리러 올 때", items: [
        { nl: "Vandaag haalt *oma* hem op.", ko: "오늘은 할머니가 데리러 와요.", note: "ophalen(데리러 가다)은 분리동사예요. op이 문장 끝으로 가요. 할아버지는 opa예요." },
        { nl: "Ik haal hem vandaag vroeger op.", ko: "오늘 일찍 데리러 올게요.", note: "벨기에에서는 '더 일찍'을 vroeger라고 많이 해요. 표준어로는 eerder예요.", alt: "Ik kom hem vandaag eerder halen." },
        { nl: "Ik ben vandaag een beetje later.", ko: "오늘 조금 늦게 올 것 같아요." },
        { nl: "Hij blijft vandaag in de opvang.", ko: "오늘은 방과후 돌봄에 남아요.", note: "opvang은 수업 전후에 아이를 봐 주는 돌봄이에요." },
        { nl: "Hij gaat vandaag met de bus naar huis.", ko: "오늘은 버스 타고 집에 가요." },
        { nl: "Is zijn jas hier nog?", ko: "아이 외투가 아직 여기 있나요?" }
      ] },
      { title: "아플 때·결석", items: [
        { nl: "Mijn kind is vandaag ziek.", ko: "오늘 아이가 아파요.", note: "mijn zoon(아들), mijn dochter(딸)라고 해도 좋아요.", alt: "Hij voelt zich niet goed." },
        { nl: "Hij heeft koorts.", ko: "열이 나요." },
        { nl: "Hij heeft buikpijn.", ko: "배가 아파요.", note: "머리가 아프면 hoofdpijn이에요." },
        { nl: "Hij heeft overgegeven.", ko: "토했어요." },
        { nl: "Hij kan vandaag niet komen.", ko: "오늘 학교에 못 가요.", alt: "Hij blijft vandaag thuis." },
        { nl: "We moeten naar de dokter.", ko: "병원에 가야 해요.", note: "벨기에에서는 먼저 동네 의사(huisarts)에게 가요." },
        { nl: "Hij moet om twaalf uur medicijnen nemen.", ko: "12시에 약을 먹어야 해요.", note: "약을 '먹다'는 eten이 아니라 nemen(먹다·복용하다)을 써요." },
        { nl: "Hier is het doktersbriefje.", ko: "여기 진단서(의사 소견서)예요.", note: "벨기에 학교는 아파서 며칠 쉬면 doktersbriefje를 달라고 할 때가 있어요." },
        { nl: "Morgen komt hij weer naar school.", ko: "내일은 다시 학교에 와요." }
      ] },
      { title: "연락·부탁", items: [
        { nl: "Als er iets is, mag u me altijd bellen.", ko: "무슨 일 생기면 언제든 연락 주세요.", note: "'무슨 일이 있으면'은 als er iets is라고 해요. 아주 자연스러운 표현이에요.", alt: "Bel me gerust als er iets is." },
        { nl: "Kunt u me bellen, alstublieft?", ko: "전화해 주시겠어요?" },
        { nl: "Ik stuur u een mail.", ko: "메일 보낼게요.", note: "학교 앱(예: Smartschool)으로 연락하는 학교도 많아요." },
        { nl: "Hier is mijn gsm-nummer.", ko: "여기 제 휴대폰 번호예요.", note: "gsm은 벨기에에서 휴대폰을 부르는 말이에요. 네덜란드에서는 mobiel이라고 해요." },
        { nl: "Ik heb dit formulier getekend.", ko: "이 서류에 서명했어요.", note: "벨기에에서는 '서명하다'를 tekenen이라고 많이 해요. 표준어로는 ondertekenen이에요." },
        { nl: "Mag ik even iets vragen?", ko: "잠깐 뭐 좀 여쭤봐도 될까요?", note: "even은 '잠깐'이라는 뜻으로 말을 부드럽게 해 줘요." },
        { nl: "Kunt u dat nog eens zeggen, alstublieft?", ko: "다시 한번 말씀해 주시겠어요?" },
        { nl: "Kunt u wat trager spreken, alstublieft?", ko: "조금 천천히 말씀해 주시겠어요?", note: "trager는 벨기에식 표현이에요. 표준어로는 langzamer예요." }
      ] },
      { title: "아이에 대해 묻기", items: [
        { nl: "Is alles goed gegaan vandaag?", ko: "오늘 잘 지냈어요?" },
        { nl: "Heeft hij goed gegeten?", ko: "밥 잘 먹었어요?" },
        { nl: "Heeft hij geslapen?", ko: "낮잠 잤어요?", note: "낮잠은 middagdutje라고 해요. 그냥 geslapen(잤어요)이라고 물어도 돼요.", alt: "Heeft hij een middagdutje gedaan?" },
        { nl: "Heeft hij goed gespeeld met de andere kinderen?", ko: "친구들이랑 잘 놀았어요?" },
        { nl: "Heeft hij gehuild?", ko: "울었어요?" },
        { nl: "Hoe gaat het met hem in de klas?", ko: "반에서 아이는 어때요?" }
      ] },
      { title: "준비물·행사", items: [
        { nl: "Wat moet hij meebrengen?", ko: "뭘 가져가야 하나요?", note: "벨기에에서는 meebrengen을 많이 써요. 네덜란드에서는 meenemen이 더 흔해요." },
        { nl: "Wanneer is de schooluitstap?", ko: "소풍이 언제예요?", note: "uitstap은 벨기에 말이에요. 네덜란드에서는 schoolreisje라고 해요." },
        { nl: "Er zitten extra kleren in zijn boekentas.", ko: "여벌 옷을 가방에 넣었어요." },
        { nl: "Hoeveel moet ik betalen?", ko: "얼마를 내야 하나요?" },
        { nl: "Is er morgen school?", ko: "내일 학교 가는 날이에요?" },
        { nl: "Morgen is hij jarig.", ko: "내일이 아이 생일이에요.", note: "벨기에 유치원에서는 생일에 간식을 나눠 먹는 일이 많아요." }
      ] },
      { title: "알레르기·특이사항", items: [
        { nl: "Hij is allergisch voor *noten*.", ko: "아이가 견과류 알레르기가 있어요.", note: "allergisch 뒤에는 voor를 써요. 달걀이면 eieren, 우유면 melk예요." },
        { nl: "Hij eet geen varkensvlees.", ko: "아이는 돼지고기를 안 먹어요." },
        { nl: "Hij spreekt nog niet zo goed Nederlands.", ko: "아이가 아직 네덜란드어를 잘 못해요." },
        { nl: "Thuis spreken we Koreaans.", ko: "집에서는 한국어를 써요." },
        { nl: "Hij is een beetje verlegen.", ko: "아이가 조금 수줍음이 많아요." }
      ] },
      { title: "선생님이 자주 하는 말", items: [
        { nl: "Hij was een beetje moe.", ko: "아이가 조금 피곤해했어요." },
        { nl: "Hij heeft goed gegeten.", ko: "밥을 잘 먹었어요." },
        { nl: "Hij is gevallen, maar alles is oké.", ko: "넘어졌는데, 괜찮아요." },
        { nl: "Vergeet morgen de *turnzak* niet.", ko: "내일 체육복 가방 잊지 마세요.", note: "turnzak은 체육복을 넣는 가방이에요 (벨기에 말)." },
        { nl: "Er zit een briefje in zijn boekentas.", ko: "가방에 안내문이 들어 있어요.", note: "briefje는 학교에서 보내는 짧은 안내문이에요. 꼭 확인하세요!" },
        { nl: "Kunt u dit even tekenen?", ko: "여기 서명 좀 해 주시겠어요?" },
        { nl: "Woensdagnamiddag is er geen school.", ko: "수요일 오후에는 수업이 없어요.", note: "벨기에 학교는 보통 수요일 오후에 수업이 없어요. namiddag는 벨기에에서 '오후'예요." }
      ] },
      { title: "감사·인사", items: [
        { nl: "Dank u wel, juf!", ko: "선생님, 정말 감사해요!", note: "선생님께 je를 쓰는 사이라면 Dank je wel!이라고 해요." },
        { nl: "Bedankt voor alles!", ko: "여러모로 감사했어요!" },
        { nl: "Tot morgen!", ko: "내일 봬요!" },
        { nl: "Prettig weekend!", ko: "주말 잘 보내세요!", alt: "Fijn weekend!" },
        { nl: "Fijne vakantie!", ko: "방학 잘 보내세요!" }
      ] }
    ],
    dialogs: [
      { title: "아이가 아플 때 (전화)", lines: [
        { who: "ouder", nl: "Goedemorgen, met de mama van Minjun.", ko: "안녕하세요, 민준이 엄마예요." },
        { who: "juf", nl: "Goedemorgen! Zeg het maar.", ko: "안녕하세요! 말씀하세요." },
        { who: "ouder", nl: "Minjun is ziek. Hij heeft koorts.", ko: "민준이가 아파요. 열이 나요." },
        { who: "juf", nl: "Oei, beterschap!", ko: "어머, 얼른 낫길 바라요!" },
        { who: "ouder", nl: "Hij blijft vandaag thuis.", ko: "오늘은 집에서 쉬어요." },
        { who: "juf", nl: "Geen probleem. Dank u om te bellen.", ko: "괜찮아요. 전화 주셔서 고마워요." }
      ] },
      { title: "아침에 아이를 맡길 때", lines: [
        { who: "ouder", nl: "Dag juf!", ko: "안녕하세요, 선생님!" },
        { who: "juf", nl: "Dag! Alles goed?", ko: "안녕하세요! 잘 지내셨어요?" },
        { who: "ouder", nl: "Ja. Vandaag haalt oma hem op.", ko: "네. 오늘은 할머니가 데리러 와요." },
        { who: "juf", nl: "Oké, geen probleem.", ko: "네, 알겠어요." },
        { who: "ouder", nl: "Als er iets is, mag u me altijd bellen. Een fijne dag!", ko: "무슨 일 있으면 언제든 연락 주세요. 오늘도 잘 부탁드려요!" }
      ] },
      { title: "데리러 갔을 때", lines: [
        { who: "ouder", nl: "Is alles goed gegaan vandaag?", ko: "오늘 잘 지냈어요?" },
        { who: "juf", nl: "Ja, hij heeft goed gespeeld.", ko: "네, 잘 놀았어요." },
        { who: "ouder", nl: "Heeft hij goed gegeten?", ko: "밥은 잘 먹었어요?" },
        { who: "juf", nl: "Ja, maar hij was een beetje moe.", ko: "네, 그런데 조금 피곤해했어요." },
        { who: "ouder", nl: "Oké, dank u wel. Tot morgen!", ko: "알겠어요, 감사해요. 내일 봬요!" }
      ] }
    ],
    tip: "모르는 말이 나오면 웃으면서 'Mag ik even iets vragen?'으로 시작해 보세요. 선생님들이 천천히 다시 설명해 줘요."
  },

  winkel: {
    id: "winkel", ko: "마트 장보기", nl: "In de supermarkt", emoji: "brood",
    easy: "Delhaize, Colruyt 같은 마트에서 찾고, 묻고, 계산할 때 쓰는 말이에요.",
    intro: [
      "마트에서는 점원에게 u(존댓말)를 쓰면 돼요.",
      "부탁할 때는 끝에 alstublieft를 붙여요. 친구에게는 alsjeblieft예요.",
      "벨기에에서는 영수증을 ticket(je), 봉투를 zak(je)라고 많이 해요.",
      "빵집 코너에서는 빵을 썰어 달라고(gesneden) 하는 게 아주 흔해요."
    ],
    terms: [
      ["alstublieft", "'부탁해요'와 '여기 있어요' 둘 다 돼요. 벨기에에서는 '뭐라고요?'라는 뜻으로도 써요."],
      ["de kassa", "계산대"],
      ["de klantenkaart", "마트 회원 카드 (포인트 카드)"],
      ["het ticketje", "영수증 (벨기에 말). 네덜란드에서는 bonnetje라고 해요."],
      ["Bancontact", "벨기에에서 가장 많이 쓰는 체크카드 결제 방식"],
      ["in promotie", "할인 중 (벨기에 말). 네덜란드에서는 in de aanbieding이에요."]
    ],
    foods: [
      { cat: "채소", art: "de", nl: "aardappel", ko: "감자", pl: "aardappelen", pic: "aardappel", note: "복수형 aardappels도 맞아요." },
      { cat: "채소", art: "de", nl: "prei", ko: "대파 (리크)", pl: "preien", pic: "prei", note: "한국 대파보다 굵지만, 한식에 대파 대신 쓰기 좋아요." },
      { cat: "채소", art: "de", nl: "look", ko: "마늘", pl: "-", pic: "look", note: "벨기에에서는 look이라고 많이 해요. 표준어 knoflook도 같은 뜻이에요. 한 통은 een bol look이에요." },
      { cat: "채소", art: "de", nl: "ui", ko: "양파", pl: "uien", pic: "ui" },
      { cat: "채소", art: "de", nl: "wortel", ko: "당근", pl: "wortels", pic: "wortel" },
      { cat: "채소", art: "de", nl: "tomaat", ko: "토마토", pl: "tomaten", pic: "tomaat" },
      { cat: "채소", art: "de", nl: "komkommer", ko: "오이", pl: "komkommers" },
      { cat: "채소", art: "de", nl: "paprika", ko: "파프리카", pl: "paprika's" },
      { cat: "채소", art: "de", nl: "sla", ko: "상추 (샐러드 채소)", pl: "-", note: "한 포기는 een krop sla예요." },
      { cat: "채소", art: "de", nl: "champignon", ko: "양송이버섯", pl: "champignons" },
      { cat: "채소", art: "de", nl: "kool", ko: "양배추", pl: "kolen", note: "배추(Chinese kool)도 마트에 있어요. 김치 만들 때 좋아요." },
      { cat: "채소", art: "de", nl: "spinazie", ko: "시금치", pl: "-" },
      { cat: "과일", art: "de", nl: "appel", ko: "사과", pl: "appels", pic: "appel" },
      { cat: "과일", art: "de", nl: "sinaasappel", ko: "오렌지", pl: "sinaasappels", pic: "sinaasappel", note: "벨기에에서는 appelsien이라고도 해요." },
      { cat: "과일", art: "de", nl: "banaan", ko: "바나나", pl: "bananen", pic: "banaan" },
      { cat: "과일", art: "de", nl: "citroen", ko: "레몬", pl: "citroenen" },
      { cat: "과일", art: "de", nl: "aardbei", ko: "딸기", pl: "aardbeien" },
      { cat: "과일", art: "de", nl: "druif", ko: "포도", pl: "druiven", note: "보통 복수형 druiven으로 사요." },
      { cat: "과일", art: "de", nl: "peer", ko: "배 (서양배)", pl: "peren" },
      { cat: "유제품·달걀", art: "de", nl: "melk", ko: "우유", pl: "-", pic: "melk" },
      { cat: "유제품·달걀", art: "de", nl: "yoghurt", ko: "요거트", pl: "yoghurts", pic: "yoghurt" },
      { cat: "유제품·달걀", art: "het", nl: "ei", ko: "달걀", pl: "eieren", pic: "ei" },
      { cat: "유제품·달걀", art: "de", nl: "kaas", ko: "치즈", pl: "kazen", pic: "kaas" },
      { cat: "유제품·달걀", art: "de", nl: "boter", ko: "버터", pl: "-" },
      { cat: "유제품·달걀", art: "de", nl: "room", ko: "생크림", pl: "-", note: "벨기에에서는 room이라고 해요. 네덜란드에서는 slagroom이 더 흔해요." },
      { cat: "빵·곡물", art: "het", nl: "brood", ko: "빵 (식빵)", pl: "broden", pic: "brood" },
      { cat: "빵·곡물", art: "de", nl: "pistolet", ko: "동그란 작은 빵", pl: "pistolets", note: "벨기에 말이에요. 주말 아침에 많이 먹어요." },
      { cat: "빵·곡물", art: "de", nl: "bloem", ko: "밀가루", pl: "-", pic: "bloem", note: "bloem은 '꽃'이라는 뜻도 있어요. 꽃의 복수형은 bloemen이에요." },
      { cat: "빵·곡물", art: "de", nl: "rijst", ko: "쌀·밥", pl: "-", pic: "rijst" },
      { cat: "빵·곡물", art: "de", nl: "pasta", ko: "파스타", pl: "-" },
      { cat: "빵·곡물", art: "de", nl: "noedels", ko: "면 (국수)", pl: "-", note: "보통 복수형 noedels로만 말해요." },
      { cat: "고기·생선", art: "de", nl: "kip", ko: "닭고기", pl: "-", note: "살아 있는 닭 여러 마리는 kippen이에요. 고기로 살 때는 보통 셀 수 없어요. 닭가슴살은 kipfilet예요." },
      { cat: "고기·생선", art: "het", nl: "varkensvlees", ko: "돼지고기", pl: "-" },
      { cat: "고기·생선", art: "het", nl: "rundvlees", ko: "소고기", pl: "-" },
      { cat: "고기·생선", art: "het", nl: "gehakt", ko: "다진 고기", pl: "-", note: "벨기에 마트에서는 소·돼지 섞은 gemengd gehakt가 많아요." },
      { cat: "고기·생선", art: "de", nl: "vis", ko: "생선", pl: "vissen" },
      { cat: "고기·생선", art: "de", nl: "zalm", ko: "연어", pl: "-" },
      { cat: "양념·기타", art: "de", nl: "tofu", ko: "두부", pl: "-" },
      { cat: "양념·기타", art: "de", nl: "suiker", ko: "설탕", pl: "-" },
      { cat: "양념·기타", art: "het", nl: "zout", ko: "소금", pl: "-" },
      { cat: "양념·기타", art: "de", nl: "peper", ko: "후추", pl: "-" },
      { cat: "양념·기타", art: "de", nl: "olie", ko: "식용유", pl: "-" },
      { cat: "양념·기타", art: "de", nl: "azijn", ko: "식초", pl: "-" },
      { cat: "양념·기타", art: "de", nl: "sojasaus", ko: "간장", pl: "-" },
      { cat: "음료·간식", art: "het", nl: "water", ko: "물", pl: "-", note: "탄산수는 bruisend water, 그냥 물은 plat water예요." },
      { cat: "음료·간식", art: "de", nl: "koffie", ko: "커피", pl: "-", pic: "koffie" },
      { cat: "음료·간식", art: "de", nl: "thee", ko: "차", pl: "-" },
      { cat: "음료·간식", art: "de", nl: "chips", ko: "감자칩", pl: "-", note: "한 봉지는 een zak chips예요." },
      { cat: "음료·간식", art: "het", nl: "ijs", ko: "아이스크림", pl: "-", note: "ijs는 '얼음'이라는 뜻도 있어요. 아이스크림 하나는 een ijsje예요." }
    ],
    sections: [
      { title: "찾기·묻기", items: [
        { nl: "Waar vind ik de *bloem*?", ko: "밀가루는 어디에 있나요?", note: "'~는 어디에 있나요?'를 물을 때 가장 쉬운 말이에요. 단어만 바꿔 쓰세요." },
        { nl: "Waar ligt de *look*?", ko: "마늘은 어디에 있나요?", note: "눕혀 놓은 물건은 liggen(놓여 있다)을 써요. 채소, 고기, 빵이 그래요." },
        { nl: "Waar staat de *melk*?", ko: "우유는 어디에 있나요?", note: "병이나 팩처럼 세워 둔 물건은 staan(서 있다)을 써요. 헷갈리면 Waar vind ik...?를 쓰면 돼요." },
        { nl: "Waar zijn de *eieren*?", ko: "달걀은 어디에 있나요?", note: "여러 개(복수)면 zijn을 써요." },
        { nl: "Ik zoek *sojasaus*.", ko: "간장을 찾고 있어요." },
        { nl: "Heeft u *tofu*?", ko: "두부 있나요?" },
        { nl: "Ik vind de *rijst* niet.", ko: "쌀을 못 찾겠어요." },
        { nl: "Is dit vers?", ko: "이거 신선한가요?" }
      ] },
      { title: "가격·계산", items: [
        { nl: "Hoeveel kost dit?", ko: "이거 얼마인가요?", alt: "Wat kost dit?" },
        { nl: "Hoeveel kost een kilo *tomaten*?", ko: "토마토 1킬로에 얼마예요?" },
        { nl: "Is dit in promotie?", ko: "이거 할인 중인가요?", note: "벨기에에서는 할인을 promotie, 줄여서 promo라고 해요." },
        { nl: "Kan ik met kaart betalen?", ko: "카드로 계산할 수 있나요?", alt: "Kan ik met Bancontact betalen?" },
        { nl: "Ik betaal cash.", ko: "현금으로 낼게요.", note: "벨기에에서는 cash를 많이 써요. 표준어로는 contant예요." },
        { nl: "Nee, ik heb geen klantenkaart.", ko: "아니요, 회원 카드 없어요." },
        { nl: "Nee, dank u. Ik heb een eigen tas.", ko: "아니요, 괜찮아요. 장바구니 있어요." },
        { nl: "Mag ik een zak, alstublieft?", ko: "봉투 하나 주시겠어요?", note: "벨기에 마트는 봉투가 유료인 경우가 많아요." },
        { nl: "Mag ik het ticketje, alstublieft?", ko: "영수증 주시겠어요?" }
      ] },
      { title: "양·무게", items: [
        { nl: "Een kilo *aardappelen*, alstublieft.", ko: "감자 1킬로 주세요." },
        { nl: "Een halve kilo, alstublieft.", ko: "반 킬로 주세요.", note: "kilo는 de 단어라서 halve(반)가 돼요." },
        { nl: "Vijfhonderd gram *gehakt*, alstublieft.", ko: "다진 고기 500그램 주세요." },
        { nl: "Twee stuks, alstublieft.", ko: "두 개 주세요.", note: "stuk(s)는 '개'예요." },
        { nl: "Zes eieren, alstublieft.", ko: "달걀 여섯 개 주세요." },
        { nl: "Een beetje meer, alstublieft.", ko: "조금 더 주세요." },
        { nl: "Een beetje minder, alstublieft.", ko: "조금 덜 주세요." },
        { nl: "Dat is genoeg, dank u.", ko: "그거면 충분해요, 감사해요." }
      ] },
      { title: "빵·정육 코너", items: [
        { nl: "Mag ik een *brood*, alstublieft?", ko: "빵 하나 주시겠어요?" },
        { nl: "Gesneden, alstublieft.", ko: "썰어 주세요.", note: "벨기에 빵집과 마트에서는 빵을 기계로 썰어 줘요. 아주 흔한 부탁이에요." },
        { nl: "Een wit brood, gesneden, alstublieft.", ko: "흰 식빵 하나, 썰어서 주세요.", note: "통밀빵은 bruin brood예요." },
        { nl: "Mag ik vier *pistolets*?", ko: "작은 빵 네 개 주시겠어요?" },
        { nl: "Mag ik tweehonderd gram *kipfilet*?", ko: "닭가슴살 200그램 주시겠어요?" },
        { nl: "Kunt u het dun snijden, alstublieft?", ko: "얇게 썰어 주시겠어요?", note: "불고기나 샤브샤브용 고기를 살 때 좋아요." }
      ] },
      { title: "점원이 하는 말", items: [
        { nl: "Heeft u een Colruyt-kaart?", ko: "콜루이트 카드 있으세요?", note: "마트 이름만 바뀌어요. 그냥 klantenkaart라고도 해요." },
        { nl: "Wilt u een zak?", ko: "봉투 필요하세요?" },
        { nl: "Wilt u uw ticketje?", ko: "영수증 드릴까요?" },
        { nl: "Dat is dan twaalf euro vijftig.", ko: "그럼 12유로 50센트예요.", note: "dan은 여기서 '그럼, 모두 합해서'라는 느낌이에요." },
        { nl: "Nog iets?", ko: "더 필요한 거 있으세요?", alt: "Anders nog iets?" },
        { nl: "Mag het iets meer zijn?", ko: "조금 더 많아도 괜찮을까요?", note: "정육 코너에서 무게가 조금 넘을 때 자주 물어봐요. Ja, geen probleem.(네, 괜찮아요)이라고 하면 돼요." },
        { nl: "Wie is er aan de beurt?", ko: "다음 차례 누구세요?", note: "번호표가 있는 코너에서 자주 들려요." },
        { nl: "U mag uw kaart insteken.", ko: "카드 꽂아 주세요." }
      ] },
      { title: "문제·교환", items: [
        { nl: "Dit is kapot.", ko: "이거 망가졌어요 (깨졌어요)." },
        { nl: "De prijs klopt niet.", ko: "가격이 맞지 않아요." },
        { nl: "Ik wil dit ruilen.", ko: "이거 교환하고 싶어요." },
        { nl: "Ik wil dit terugbrengen.", ko: "이거 반품하고 싶어요." },
        { nl: "Sorry, ik begrijp het niet.", ko: "죄송해요, 잘 못 알아들었어요." },
        { nl: "Kunt u dat herhalen, alstublieft?", ko: "다시 한번 말씀해 주시겠어요?" }
      ] }
    ],
    dialogs: [
      { title: "물건 찾기", lines: [
        { who: "klant", nl: "Pardon, waar vind ik de bloem?", ko: "실례지만, 밀가루는 어디에 있나요?" },
        { who: "verkoper", nl: "Daar, bij de suiker.", ko: "저기요, 설탕 옆에 있어요." },
        { who: "klant", nl: "En heeft u tofu?", ko: "그리고 두부도 있나요?" },
        { who: "verkoper", nl: "Ja, bij de groenten.", ko: "네, 채소 코너에 있어요." },
        { who: "klant", nl: "Dank u wel!", ko: "감사해요!" }
      ] },
      { title: "빵 코너에서", lines: [
        { who: "verkoper", nl: "Wie is er aan de beurt?", ko: "다음 분 누구세요?" },
        { who: "klant", nl: "Ik. Een wit brood, alstublieft.", ko: "저요. 흰 식빵 하나 주세요." },
        { who: "verkoper", nl: "Gesneden?", ko: "썰어 드릴까요?" },
        { who: "klant", nl: "Ja, graag. En vier pistolets.", ko: "네, 좋아요. 그리고 작은 빵 네 개요." },
        { who: "verkoper", nl: "Nog iets?", ko: "더 필요한 거 있으세요?" },
        { who: "klant", nl: "Nee, dank u.", ko: "아니요, 괜찮아요." }
      ] },
      { title: "계산대에서", lines: [
        { who: "verkoper", nl: "Dag! Heeft u een klantenkaart?", ko: "안녕하세요! 회원 카드 있으세요?" },
        { who: "klant", nl: "Nee, sorry.", ko: "아니요, 없어요." },
        { who: "verkoper", nl: "Wilt u een zak?", ko: "봉투 필요하세요?" },
        { who: "klant", nl: "Nee, dank u. Kan ik met kaart betalen?", ko: "아니요, 괜찮아요. 카드로 계산할 수 있나요?" },
        { who: "verkoper", nl: "Ja, natuurlijk. Dat is dan twaalf euro vijftig.", ko: "네, 물론이죠. 12유로 50센트예요." },
        { who: "klant", nl: "Alstublieft. Dag!", ko: "여기요. 안녕히 계세요!" }
      ] }
    ],
    tip: "단어를 몰라도 괜찮아요. 물건을 가리키며 'Hoeveel kost dit?' 또는 'Waar vind ik ...?' 하나만 알아도 장보기가 훨씬 쉬워져요."
  }
};
