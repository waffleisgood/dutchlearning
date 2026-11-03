/* =========================================================
   Perfectum lijst (learning_material/Perfectum lijst - English meanings.pdf)
   Format per line:
   infinitief | 한국어 | English | ik (presens) | hij (presens) |
   imperfectum enkelvoud | imperfectum meervoud | aux | participium |
   groep | presens-voorbeeld | perfectum-voorbeeld
   aux: h = hebben, z = zijn, hz = 둘 다(목적지 있으면 zijn)
   *word* = 강조(동사 부분). " / " = 예문 두 개.
   단순과거(imperfectum)는 PDF에 없어서 추가한 정보.
   ========================================================= */
(function () {
  var RAW = [
    // ---- a. Regelmatige verba (ge + stam + t/d)
    "afdrogen|(그릇을) 닦아 말리다|to dry; to dry off|droog af|droogt af|droogde af|droogden af|h|afgedroogd|a|Hij *droogt* de borden *af*.|Hij *heeft* de borden *afgedroogd*.",
    "afruimen|(식탁을) 치우다|to clear (the table)|ruim af|ruimt af|ruimde af|ruimden af|h|afgeruimd|a|Ik *ruim* na het eten de tafel *af*.|Ik *heb* na het eten de tafel *afgeruimd*.",
    "opruimen|정리하다, 치우다|to tidy up; to put away|ruim op|ruimt op|ruimde op|ruimden op|h|opgeruimd|a|Mijn zoon *ruimt* zijn speelgoed *op*.|Mijn zoon *heeft* zijn speelgoed *opgeruimd*.",
    "annuleren|취소하다|to cancel|annuleer|annuleert|annuleerde|annuleerden|h|geannuleerd|a|Ik *annuleer* de afspraak.|Ik *heb* de afspraak *geannuleerd*.",
    "antwoorden|대답하다|to answer; to reply|antwoord|antwoordt|antwoordde|antwoordden|h|geantwoord|a|Ik *antwoord* goed.|Ik *heb* goed *geantwoord*.",
    "bellen|전화하다|to call; to phone|bel|belt|belde|belden|h|gebeld|a|Zij *belt* naar haar vriend.|Zij *heeft* naar haar vriend *gebeld*.",
    "dansen|춤추다|to dance|dans|danst|danste|dansten|h|gedanst|a|Ik *dans* in de discotheek.|Ik *heb* in de discotheek *gedanst*.",
    "eindigen|끝나다|to end; to finish|eindig|eindigt|eindigde|eindigden|z|geëindigd|a|De les *eindigt* vandaag een beetje vroeger.|De les *is* vandaag een beetje vroeger *geëindigd*.",
    "fietsen|자전거를 타다|to cycle; to ride a bike|fiets|fietst|fietste|fietsten|hz|gefietst|a|Ik *fiets* 20 km. / Ik *fiets* elke dag naar school.|Ik *heb* gisteren 20 km *gefietst*. / Ik *ben* gisteren naar school *gefietst*.",
    "gooien|던지다|to throw|gooi|gooit|gooide|gooiden|h|gegooid|a|Mijn dochter *gooit* met de bal.|Mijn dochter *heeft* met de bal *gegooid*.",
    "weggooien|버리다|to throw away|gooi weg|gooit weg|gooide weg|gooiden weg|h|weggegooid|a|Ik *gooi* mijn kapotte jas *weg*.|Ik *heb* mijn kapotte jas *weggegooid*.",
    "halen|가져오다, 데려오다|to get; to collect|haal|haalt|haalde|haalden|h|gehaald|a|Wij *halen* de kinderen van school.|Wij *hebben* de kinderen van school *gehaald*.",
    "ophalen|찾아오다, 데리러 가다|to pick up; to collect|haal op|haalt op|haalde op|haalden op|h|opgehaald|a|Ik *haal* mijn jas *op* bij Verloren Voorwerpen.|Ik *heb* mijn jas *opgehaald* bij Verloren Voorwerpen.",
    "horen|듣다, 들리다|to hear|hoor|hoort|hoorde|hoorden|h|gehoord|a|Hij *hoort* kinderen in het park.|Hij *heeft* kinderen in het park *gehoord*.",
    "huren|빌리다(임대)|to rent|huur|huurt|huurde|huurden|h|gehuurd|a|Wij *huren* een appartement in het centrum.|Wij *hebben* een appartement in het centrum *gehuurd*.",
    "invullen|(서류를) 작성하다|to fill in (a form)|vul in|vult in|vulde in|vulden in|h|ingevuld|a|Ik *vul* het formulier *in*.|Ik *heb* het formulier *ingevuld*.",
    "klikken|클릭하다|to click|klik|klikt|klikte|klikten|h|geklikt|a|Ze *klikt* op de link.|Ze *heeft* op de link *geklikt*.",
    "koken|요리하다, 삶다|to cook; to boil|kook|kookt|kookte|kookten|h|gekookt|a|Ik *kook* aardappelen.|Ik *heb* aardappelen *gekookt*.",
    "leggen|(눕혀) 놓다|to lay; to put down|leg|legt|legde|legden|h|gelegd|a|De vrouw *legt* de handdoeken in de kast.|De vrouw *heeft* de handdoeken in de kast *gelegd*.",
    "lenen|빌리다|to borrow|leen|leent|leende|leenden|h|geleend|a|Tine *leent* vijf boeken bij de bibliotheek.|Tine *heeft* vijf boeken bij de bibliotheek *geleend*.",
    "uitlenen|빌려주다|to lend|leen uit|leent uit|leende uit|leenden uit|h|uitgeleend|a|Ik *leen* een ladder *uit* aan mijn buurman.|Ik *heb* een ladder *uitgeleend* aan mijn buurman.",
    "leren|배우다|to learn; to study|leer|leert|leerde|leerden|h|geleerd|a|Hij *leert* Nederlands aan het CLT.|Hij *heeft* Nederlands aan het CLT *geleerd*.",
    "luisteren|듣다, 귀 기울이다|to listen (to)|luister|luistert|luisterde|luisterden|h|geluisterd|a|Ik *luister* naar mijn lerares.|Ik *heb* naar mijn lerares *geluisterd*.",
    "maken|만들다|to make|maak|maakt|maakte|maakten|h|gemaakt|a|Wij *maken* lekkere soep.|Wij *hebben* lekkere soep *gemaakt*.",
    "missen|놓치다, 그리워하다|to miss|mis|mist|miste|misten|h|gemist|a|Ik *mis* de bus.|Ik *heb* de bus *gemist*.",
    "parkeren|주차하다|to park|parkeer|parkeert|parkeerde|parkeerden|h|geparkeerd|a|Mijn buurman *parkeert* zijn auto voor mijn huis.|Mijn buurman *heeft* zijn auto voor mijn huis *geparkeerd*.",
    "poetsen|청소하다, 닦다|to clean|poets|poetst|poetste|poetsten|h|gepoetst|a|Ik *poets* de keuken.|Ik *heb* de keuken *gepoetst*.",
    "praten|이야기하다|to talk (with/to)|praat|praat|praatte|praatten|h|gepraat|a|Ik *praat* met mijn buur.|Ik *heb* met mijn buur *gepraat*.",
    "reizen|여행하다|to travel|reis|reist|reisde|reisden|h|gereisd|a|Mijn buurvrouw *reist* veel binnen Europa.|Mijn buurvrouw *heeft* veel binnen Europa *gereisd*.",
    "reserveren|예약하다|to reserve; to book|reserveer|reserveert|reserveerde|reserveerden|h|gereserveerd|a|Mijn tante *reserveert* een tafel voor vier.|Mijn tante *heeft* een tafel voor vier *gereserveerd*.",
    "scannen|스캔하다|to scan|scan|scant|scande|scanden|h|gescand|a|Ik *scan* de QR-code.|Ik *heb* de QR-code *gescand*.",
    "skiën|스키 타다|to ski|ski|skiet|skiede|skieden|h|geskied|a|Ik *ski* in de Alpen.|Ik *heb* in de Alpen *geskied*.",
    "spelen|놀다, 경기하다|to play|speel|speelt|speelde|speelden|h|gespeeld|a|Wij *spelen* met onze kinderen.|Wij *hebben* met onze kinderen *gespeeld*.",
    "starten|시작하다|to start; to begin|start|start|startte|startten|z|gestart|a|De cursus *start* op 1 september.|De cursus *is* op 1 september *gestart*.",
    "stofzuigen|청소기를 돌리다|to vacuum|stofzuig|stofzuigt|stofzuigde|stofzuigden|h|gestofzuigd|a|De poetsvrouw *stofzuigt* het tapijt.|De poetsvrouw *heeft* het tapijt *gestofzuigd*.",
    "stoppen|멈추다|to stop|stop|stopt|stopte|stopten|z|gestopt|a|De auto *stopt* voor het rode licht.|De auto *is* voor het rode licht *gestopt*.",
    "studeren|공부하다|to study|studeer|studeert|studeerde|studeerden|h|gestudeerd|a|Ik *studeer* 1 uur Nederlands.|Ik *heb* 1 uur Nederlands *gestudeerd*.",
    "telefoneren|전화하다|to call; to phone|telefoneer|telefoneert|telefoneerde|telefoneerden|h|getelefoneerd|a|Mijn neef *telefoneert* naar zijn mama.|Mijn neef *heeft* naar zijn mama *getelefoneerd*.",
    "typen|타자 치다|to type|typ|typt|typte|typten|h|getypt|a|Ik *typ* mijn naam op het scherm.|Ik *heb* mijn naam op het scherm *getypt*.",
    "vieren|축하하다, 기념하다|to celebrate|vier|viert|vierde|vierden|h|gevierd|a|De jongens *vieren* hun verjaardag met vrienden en familie.|De jongens *hebben* hun verjaardag met vrienden en familie *gevierd*.",
    "tennissen|테니스를 치다|to play tennis|tennis|tennist|tenniste|tennisten|h|getennist|a|Ik *tennis* op zondag.|Ik *heb* op zondag *getennist*.",
    "trouwen|결혼하다|to get married|trouw|trouwt|trouwde|trouwden|z|getrouwd|a|Ik *trouw* volgend jaar.|Ik *ben* vorig jaar *getrouwd*.",
    "voetballen|축구하다|to play football|voetbal|voetbalt|voetbalde|voetbalden|h|gevoetbald|a|Hij *voetbalt* in het park.|Hij *heeft* in het park *gevoetbald*.",
    "vragen|묻다, 부탁하다|to ask|vraag|vraagt|vroeg|vroegen|h|gevraagd|a|Ik *vraag* iets aan de lerares.|Ik *heb* iets aan de lerares *gevraagd*.",
    "wachten|기다리다|to wait (for)|wacht|wacht|wachtte|wachtten|h|gewacht|a|Ze *wacht* 10 minuten op de bus.|Ze *heeft* 10 minuten op de bus *gewacht*.",
    "wandelen|산책하다, 걷다|to walk; to go for a walk|wandel|wandelt|wandelde|wandelden|hz|gewandeld|a|Ik *wandel* vandaag veel. / Ik *wandel* naar het park.|Ik *heb* gisteren veel *gewandeld*. / Ik *ben* naar het park *gewandeld*.",
    "werken|일하다|to work|werk|werkt|werkte|werkten|h|gewerkt|a|Ik *werk* 2 dagen van thuis.|Ik *heb* 2 dagen van thuis *gewerkt*.",
    "wijzigen|변경하다|to change; to modify|wijzig|wijzigt|wijzigde|wijzigden|h|gewijzigd|a|Hij *wijzigt* zijn wachtwoord.|Hij *heeft* zijn wachtwoord *gewijzigd*.",
    "winkelen|쇼핑하다|to shop; to go shopping|winkel|winkelt|winkelde|winkelden|h|gewinkeld|a|De vrouw *winkelt* in de Diestsestraat.|De vrouw *heeft* in de Diestsestraat *gewinkeld*.",
    "wonen|살다(거주하다)|to live; to reside|woon|woont|woonde|woonden|h|gewoond|a|Ik *woon* in Leuven.|Ik *heb* in Leuven *gewoond*.",
    "zeggen|말하다|to say; to tell|zeg|zegt|zei|zeiden|h|gezegd|a|Ze *zegt* \"alstublieft\".|Ze *heeft* \"alstublieft\" *gezegd*.",
    "zetten|(세워) 놓다|to put; to place (upright)|zet|zet|zette|zetten|h|gezet|a|Ik *zet* de plant naast de zetel.|Ik *heb* de plant naast de zetel *gezet*.",

    // ---- b. Onregelmatige verba (speciaal)
    "brengen|가져다주다|to bring; to take|breng|brengt|bracht|brachten|h|gebracht|b|Ik *breng* de koffie meteen.|Ik *heb* de koffie meteen *gebracht*.",
    "meebrengen|가지고 오다|to bring along|breng mee|brengt mee|bracht mee|brachten mee|h|meegebracht|b|Lisa *brengt* een taart *mee*.|Lisa *heeft* een taart *meegebracht*.",
    "terugbrengen|돌려주다, 반납하다|to bring/take back; to return|breng terug|brengt terug|bracht terug|brachten terug|h|teruggebracht|b|Ze *brengt* de boeken naar de bibliotheek *terug*.|Ze *heeft* de boeken naar de bibliotheek *teruggebracht*.",
    "hebben|가지고 있다|to have|heb|heeft|had|hadden|h|gehad|b|We *hebben* een probleem.|We *hebben* een probleem *gehad*.",
    "kopen|사다|to buy|koop|koopt|kocht|kochten|h|gekocht|b|Ik *koop* een auto.|Ik *heb* een auto *gekocht*.",
    "zijn|~이다, 있다|to be|ben|is|was|waren|z|geweest|b|Hij *is* in Amsterdam.|Hij *is* in Amsterdam *geweest*.",
    "zoeken|찾다, 구하다|to look for; to search|zoek|zoekt|zocht|zochten|h|gezocht|b|Ik *zoek* een job.|Ik *heb* een job *gezocht*.",

    // ---- c. Onregelmatige verba (ge + infinitief)
    "bakken|굽다, 부치다|to bake; to fry|bak|bakt|bakte|bakten|h|gebakken|c|Ik *bak* voor je verjaardag een taart.|Ik *heb* voor je verjaardag een taart *gebakken*.",
    "dragen|입다, 들고 가다|to wear; to carry|draag|draagt|droeg|droegen|h|gedragen|c|Hij *draagt* nooit een jeans.|Hij *heeft* nog nooit een jeans *gedragen*.",
    "inladen|(안에) 싣다, 넣다|to load (up)|laad in|laadt in|laadde in|laadden in|h|ingeladen|c|Ik *laad* de vaatwasmachine *in*.|Ik *heb* de vaatwasmachine *ingeladen*.",
    "opladen|충전하다|to charge; to recharge|laad op|laadt op|laadde op|laadden op|h|opgeladen|c|Ik *laad* mijn gsm *op*.|Ik *heb* mijn gsm *opgeladen*.",
    "eten|먹다|to eat|eet|eet|at|aten|h|gegeten|c|Ik *eet* 's morgens om halfacht.|Ik *heb* 's morgens om halfacht *gegeten*.",
    "gaan|가다|to go|ga|gaat|ging|gingen|z|gegaan|c|Ik *ga* in Brussel naar school.|Ik *ben* in Brussel naar school *gegaan*.",
    "meegaan|함께 가다|to go along; to come along|ga mee|gaat mee|ging mee|gingen mee|z|meegegaan|c|Mijn kinderen *gaan* met mij *mee*.|Mijn kinderen *zijn* met mij *meegegaan*.",
    "uitgaan|(놀러) 나가다|to go out|ga uit|gaat uit|ging uit|gingen uit|z|uitgegaan|c|Ik *ga* in het weekend graag *uit*.|Ik *ben* in het weekend *uitgegaan*.",
    "geven|주다|to give|geef|geeft|gaf|gaven|h|gegeven|c|Ze *geeft* haar dochter een cadeautje.|Ze *heeft* haar dochter gisteren een cadeautje *gegeven*.",
    "teruggeven|돌려주다|to give back; to return|geef terug|geeft terug|gaf terug|gaven terug|h|teruggegeven|c|Ik *geef* de sleutel *terug* aan de huisbaas.|Ik *heb* de sleutel *teruggegeven* aan de huisbaas.",
    "weggeven|나눠 주다|to give away|geef weg|geeft weg|gaf weg|gaven weg|h|weggegeven|c|Ze *geeft* al haar planten *weg*.|Ze *heeft* al haar planten *weggegeven*.",
    "hangen|걸다, 걸려 있다|to hang|hang|hangt|hing|hingen|h|gehangen|c|Ik *hang* mijn jas aan de kapstok.|Ik *heb* mijn jas aan de kapstok *gehangen*.",
    "komen|오다|to come|kom|komt|kwam|kwamen|z|gekomen|c|Leo *komt* op tijd naar de les.|Leo *is* op tijd naar de les *gekomen*.",
    "aankomen|도착하다|to arrive|kom aan|komt aan|kwam aan|kwamen aan|z|aangekomen|c|De trein *komt* om 9 uur *aan*.|De trein *is* om 9 uur *aangekomen*.",
    "terugkomen|돌아오다|to come back; to return|kom terug|komt terug|kwam terug|kwamen terug|z|teruggekomen|c|Mijn vrouw *komt* om 18 uur *terug* van het werk.|Mijn vrouw *is* om 18 uur *teruggekomen* van het werk.",
    "thuiskomen|집에 오다|to come home; to get home|kom thuis|komt thuis|kwam thuis|kwamen thuis|z|thuisgekomen|c|Mijn kinderen *komen* meestal om 16 uur *thuis*.|Mijn kinderen *zijn* om 16 uur *thuisgekomen*.",
    "lezen|읽다|to read|lees|leest|las|lazen|h|gelezen|c|Ik *lees* dit boek graag.|Ik *heb* dit boek graag *gelezen*.",
    "uitlezen|끝까지 읽다|to finish reading|lees uit|leest uit|las uit|lazen uit|h|uitgelezen|c|Ik *lees* detectiveboeken altijd in één keer *uit*.|Ik *heb* dit detectiveboek in één keer *uitgelezen*.",
    "lopen|걷다, 달리다|to walk; to run|loop|loopt|liep|liepen|hz|gelopen|c|Ze *lopen* vandaag 10 km. / Ze *lopen* naar huis.|Ze *hebben* gisteren 10 km *gelopen*. / Ze *zijn* naar huis *gelopen*.",
    "scheiden|이혼하다, 헤어지다|to divorce; to separate|scheid|scheidt|scheidde|scheidden|z|gescheiden|c|Wij *scheiden* officieel.|Wij *zijn* officieel *gescheiden*.",
    "slapen|자다|to sleep|slaap|slaapt|sliep|sliepen|h|geslapen|c|Ik *slaap* niet zo goed.|Ik *heb* niet zo goed *geslapen*.",
    "staan|서 있다|to stand; to be (upright)|sta|staat|stond|stonden|h|gestaan|c|De plant *staat* vijf dagen op de vensterbank.|De plant *heeft* vijf dagen op de vensterbank *gestaan*.",
    "opstaan|일어나다|to get up|sta op|staat op|stond op|stonden op|z|opgestaan|c|Hij *staat* om halfzeven *op*.|Hij *is* om halfzeven *opgestaan*.",
    "vallen|넘어지다, 떨어지다|to fall|val|valt|viel|vielen|z|gevallen|c|Ik *val* vaak over dit trapje.|Ik *ben* deze morgen over dit trapje *gevallen*.",
    "varen|배를 타고 가다|to sail; to travel by boat|vaar|vaart|voer|voeren|hz|gevaren|c|Ik *vaar* graag op de zee. / Ik *vaar* morgen naar Engeland.|Ik *heb* nog nooit op de zee *gevaren*. / Ik *ben* gisteren naar Engeland *gevaren*.",
    "wassen|씻다, 빨래하다|to wash|was|wast|waste|wasten|h|gewassen|c|Ik *was* mijn truien en hemden.|Ik *heb* mijn truien en hemden *gewassen*.",
    "afwassen|설거지하다|to wash up; to do the dishes|was af|wast af|waste af|wasten af|h|afgewassen|c|Mijn nonkel *wast* de borden *af*.|Mijn nonkel *heeft* de borden *afgewassen*.",
    "worden|~이 되다|to become; to turn (an age)|word|wordt|werd|werden|z|geworden|c|Ik *word* morgen 30 jaar.|Ik *ben* gisteren 30 jaar *geworden*.",
    "zien|보다|to see|zie|ziet|zag|zagen|h|gezien|c|Ik *zie* mijn buurman elke dag.|Ik *heb* mijn buurman gisteren *gezien*.",

    // ---- d. Onregelmatige verba (ge + infinitief met andere vocaal)
    "blijven|머무르다|to stay; to remain|blijf|blijft|bleef|bleven|z|gebleven|d|Ik *blijf* bij mijn kinderen.|Ik *ben* bij mijn kinderen *gebleven*.",
    "thuisblijven|집에 있다|to stay at home|blijf thuis|blijft thuis|bleef thuis|bleven thuis|z|thuisgebleven|d|Ze *blijft* in het weekend meestal *thuis*.|Ze *is* vorig weekend *thuisgebleven*.",
    "breken|깨다, 부러뜨리다|to break|breek|breekt|brak|braken|h|gebroken|d|Ik *breek* het koekje in twee.|Ik *heb* het koekje in twee *gebroken*.",
    "doen|하다|to do|doe|doet|deed|deden|h|gedaan|d|Mijn vader *doet* de afwas.|Mijn vader *heeft* de afwas *gedaan*.",
    "aandoen|(옷을) 입다|to put on (clothes)|doe aan|doet aan|deed aan|deden aan|h|aangedaan|d|Ik *doe* mijn kleren *aan*.|Ik *heb* mijn kleren *aangedaan*.",
    "uitdoen|(옷을) 벗다|to take off (clothes)|doe uit|doet uit|deed uit|deden uit|h|uitgedaan|d|Ik *doe* mijn kleren *uit*.|Ik *heb* mijn kleren *uitgedaan*.",
    "drinken|마시다|to drink|drink|drinkt|dronk|dronken|h|gedronken|d|Mijn neef *drinkt* een pintje.|Mijn neef *heeft* een pintje *gedronken*.",
    "helpen|돕다|to help|help|helpt|hielp|hielpen|h|geholpen|d|De juf *helpt* de kinderen.|De juf *heeft* de kinderen *geholpen*.",
    "kiezen|고르다|to choose|kies|kiest|koos|kozen|h|gekozen|d|Ik *kies* dit appartement.|Ik *heb* dit appartement *gekozen*.",
    "kijken|보다, 시청하다|to look; to watch|kijk|kijkt|keek|keken|h|gekeken|d|Ik *kijk* naar de uitzending.|Ik *heb* naar de uitzending *gekeken*.",
    "klimmen|오르다, 등반하다|to climb|klim|klimt|klom|klommen|hz|geklommen|d|Hij *klimt* elke week. / Hij *klimt* op de berg.|Hij *heeft* vorige week een uur *geklommen*. / Hij *is* op de berg *geklommen*.",
    "krijgen|받다|to get; to receive|krijg|krijgt|kreeg|kregen|h|gekregen|d|Ik *krijg* geen antwoord.|Ik *heb* geen antwoord *gekregen*.",
    "terugkrijgen|돌려받다|to get back|krijg terug|krijgt terug|kreeg terug|kregen terug|h|teruggekregen|d|De huisbaas *krijgt* de sleutels *terug*.|De huisbaas *heeft* de sleutels *teruggekregen*.",
    "nemen|타다, 가져가다|to take|neem|neemt|nam|namen|h|genomen|d|Ik *neem* een taxi naar huis.|Ik *heb* een taxi naar huis *genomen*.",
    "innemen|(약을) 먹다|to take (medicine)|neem in|neemt in|nam in|namen in|h|ingenomen|d|Mijn opa *neemt* elke dag een medicijn *in*.|Mijn opa *heeft* het medicijn *ingenomen*.",
    "meenemen|가져가다, 데려가다|to take along; to bring along|neem mee|neemt mee|nam mee|namen mee|h|meegenomen|d|We *nemen* fruit *mee* op vakantie.|We *hebben* fruit *meegenomen* op vakantie.",
    "rijden|운전하다, 타고 가다|to drive; to ride|rijd|rijdt|reed|reden|hz|gereden|d|Ik *rijd* alleen met de auto. / Ik *rijd* naar Antwerpen.|Ik *heb* alleen met de auto *gereden*. / Ik *ben* naar Antwerpen *gereden*.",
    "schrijven|쓰다|to write|schrijf|schrijft|schreef|schreven|h|geschreven|d|Ik *schrijf* een kaartje.|Ik *heb* een kaartje *geschreven*.",
    "inschrijven|등록하다|to register; to enrol|schrijf in|schrijft in|schreef in|schreven in|h|ingeschreven|d|Hij *schrijft* zijn kinderen *in* voor de Nederlandse les.|Hij *heeft* zijn kinderen *ingeschreven* voor de Nederlandse les.",
    "overschrijven|송금하다|to transfer (money)|schrijf over|schrijft over|schreef over|schreven over|h|overgeschreven|d|Ik *schrijf* het bedrag *over* op jouw rekening.|Ik *heb* het bedrag *overgeschreven* op jouw rekening.",
    "snijden|자르다|to cut; to slice|snijd|snijdt|sneed|sneden|h|gesneden|d|Ik *snijd* de pizza in 8 stukken.|Ik *heb* de pizza in 8 stukken *gesneden*.",
    "spreken|말하다|to speak|spreek|spreekt|sprak|spraken|h|gesproken|d|Ze *spreekt* Nederlands met haar kinderen.|Ze *heeft* Nederlands *gesproken* met haar kinderen.",
    "afspreken|약속을 잡다|to arrange to meet (with)|spreek af|spreekt af|sprak af|spraken af|h|afgesproken|d|Ik *spreek* met een collega *af*.|Ik *heb* met een collega *afgesproken*.",
    "sterven|죽다|to die|sterf|sterft|stierf|stierven|z|gestorven|d|Hij *sterft*.|Hij *is* *gestorven*.",
    "strijken|다림질하다|to iron|strijk|strijkt|streek|streken|h|gestreken|d|Matteo *strijkt* het hemd.|Matteo *heeft* het hemd *gestreken*.",
    "vinden|찾다, 발견하다|to find|vind|vindt|vond|vonden|h|gevonden|d|Ik *vind* geld op de grond.|Ik *heb* geld op de grond *gevonden*.",
    "terugvinden|되찾다|to find again; to recover|vind terug|vindt terug|vond terug|vonden terug|h|teruggevonden|d|Ik *vind* mijn portefeuille *terug*.|Ik *heb* mijn portefeuille *teruggevonden*.",
    "uitsteken|내밀다|to stick out; to extend|steek uit|steekt uit|stak uit|staken uit|h|uitgestoken|d|Ik *steek* mijn arm *uit*.|Ik *heb* mijn arm *uitgestoken*.",
    "vliegen|날다, 비행하다|to fly|vlieg|vliegt|vloog|vlogen|hz|gevlogen|d|Het vliegtuig *vliegt* snel. / Het vliegtuig *vliegt* naar Marokko.|Het vliegtuig *heeft* snel *gevlogen*. / Het vliegtuig *is* naar Marokko *gevlogen*.",
    "winnen|이기다|to win|win|wint|won|wonnen|h|gewonnen|d|Zij *winnen* de voetbalmatch.|Zij *hebben* de voetbalmatch *gewonnen*.",
    "zingen|노래하다|to sing|zing|zingt|zong|zongen|h|gezongen|d|Hij *zingt* een liedje.|Hij *heeft* een liedje *gezongen*.",
    "zitten|앉아 있다|to sit|zit|zit|zat|zaten|h|gezeten|d|Ik *zit* in de klas bij meester Mark.|Ik *heb* in de klas bij meester Mark *gezeten*.",
    "zwemmen|수영하다|to swim|zwem|zwemt|zwom|zwommen|hz|gezwommen|d|Ze *zwemt* goed. / Ze *zwemt* naar haar moeder.|Ze *heeft* goed *gezwommen*. / Ze *is* naar haar mama *gezwommen*.",
    "zwijgen|침묵하다|to be/stay silent|zwijg|zwijgt|zweeg|zwegen|h|gezwegen|d|Ze *zwijgt* lang.|Ze *heeft* lang *gezwegen*.",

    // ---- e. Verba met ver-/be-/ge-/ont-/her- (geen 'ge')
    "beginnen|시작하다|to begin; to start|begin|begint|begon|begonnen|z|begonnen|e|De les *begint* om 18 uur.|De les *is* om 18 uur *begonnen*.",
    "begrijpen|이해하다|to understand|begrijp|begrijpt|begreep|begrepen|h|begrepen|e|Ik *begrijp* de vraag niet.|Ik *heb* de vraag niet *begrepen*.",
    "bevallen|출산하다|to give birth|beval|bevalt|beviel|bevielen|z|bevallen|e|Ze *bevalt* bijna.|Ze *is* gisteren *bevallen*.",
    "bestellen|주문하다|to order|bestel|bestelt|bestelde|bestelden|h|besteld|e|Ik *bestel* een pintje.|Ik *heb* een pintje *besteld*.",
    "betalen|지불하다|to pay|betaal|betaalt|betaalde|betaalden|h|betaald|e|De baas *betaalt* de rekening.|De baas *heeft* de rekening *betaald*.",
    "bevestigen|확인하다, 확정하다|to confirm|bevestig|bevestigt|bevestigde|bevestigden|h|bevestigd|e|Ik *bevestig* de reservatie.|Ik *heb* de reservatie *bevestigd*.",
    "bezoeken|방문하다|to visit|bezoek|bezoekt|bezocht|bezochten|h|bezocht|e|Ik *bezoek* mijn familie.|Ik *heb* mijn familie *bezocht*.",
    "bezorgen|배달하다|to deliver|bezorg|bezorgt|bezorgde|bezorgden|h|bezorgd|e|De postbode *bezorgt* de kranten.|De postbode *heeft* de kranten *bezorgd*.",
    "geboren worden|태어나다|to be born|-|-|werd geboren|werden geboren|z|geboren|e|-|De baby *is* gisteren *geboren*.",
    "herhalen|반복하다|to repeat|herhaal|herhaalt|herhaalde|herhaalden|h|herhaald|e|Ik *herhaal* het antwoord.|Ik *heb* het antwoord *herhaald*.",
    "(zich) herinneren|기억하다, 떠올리다|to remember; to recall|herinner me|herinnert zich|herinnerde me|herinnerden ons|h|herinnerd|e|Ik *herinner me* de vakantie van vorig jaar.|Ik *heb* me de vakantie van vorig jaar *herinnerd*.",
    "ontbijten|아침을 먹다|to have breakfast|ontbijt|ontbijt|ontbeet|ontbeten|h|ontbeten|e|Ik *ontbijt* iedere dag om 7 uur.|Ik *heb* vandaag om 7 uur *ontbeten*.",
    "onthouden|기억해 두다|to remember; to retain|onthoud|onthoudt|onthield|onthielden|h|onthouden|e|Hij *onthoudt* bijna alle nieuwe woorden.|Hij *heeft* bijna alle nieuwe woorden *onthouden*.",
    "vergeten|잊다, 깜빡하다|to forget|vergeet|vergeet|vergat|vergaten|hz|vergeten|e|Ik *vergeet* de paraplu. / Ik *vergeet* jouw naam.|Ik *heb/ben* de paraplu *vergeten*. / Ik *ben* jouw naam *vergeten*.",
    "verhuizen|이사하다|to move (house)|verhuis|verhuist|verhuisde|verhuisden|z|verhuisd|e|Ik *verhuis* vandaag.|Ik *ben* vandaag *verhuisd*.",
    "verjaren|생일을 맞다|to have a birthday|verjaar|verjaart|verjaarde|verjaarden|z|verjaard|e|Ik *verjaar* vandaag.|Ik *ben* vandaag *verjaard*.",
    "verkopen|팔다|to sell|verkoop|verkoopt|verkocht|verkochten|h|verkocht|e|De marktkramer *verkoopt* lekkere mango's.|De marktkramer *heeft* lekkere mango's *verkocht*.",
    "vertrekken|떠나다, 출발하다|to leave; to depart|vertrek|vertrekt|vertrok|vertrokken|z|vertrokken|e|Ik *vertrek* om 10 uur.|Ik *ben* om 10 uur *vertrokken*.",
    "verwittigen|미리 알리다|to notify; to inform|verwittig|verwittigt|verwittigde|verwittigden|h|verwittigd|e|Ze *verwittigt* de lerares dat ze niet kan komen.|Ze *heeft* de lerares *verwittigd* dat ze niet kan komen.",
    "verzetten|(약속을) 옮기다|to reschedule (an appointment)|verzet|verzet|verzette|verzetten|h|verzet|e|Mijn vader *verzet* zijn afspraak bij de tandarts.|Mijn vader *heeft* zijn afspraak bij de tandarts *verzet*."
  ];

  var GROUPS = {
    a: { ko: "규칙 동사", nl: "Regelmatige verba (ge + stam + t/d)" },
    b: { ko: "불규칙 (특수형)", nl: "Onregelmatige verba (speciaal)" },
    c: { ko: "불규칙 (ge + 동사원형)", nl: "Onregelmatige verba (ge + infinitief)" },
    d: { ko: "불규칙 (ge + 모음 변화)", nl: "Onregelmatige verba (ge + infinitief met andere vocaal)" },
    e: { ko: "ge- 없는 동사 (be-/ver-/ont-/her-)", nl: "Verba met ver-/be-/ge-/ont- (geen 'ge')" }
  };

  var VERBS = RAW.map(function (line, i) {
    var f = line.split("|");
    var ik = f[3];
    return {
      id: i,
      inf: f[0], ko: f[1], en: f[2],
      ik: ik, hij: f[4],
      impSg: f[5], impPl: f[6],
      aux: f[7], part: f[8], group: f[9],
      presEx: f[10], perfEx: f[11],
      sep: ik.indexOf(" ") > 0 && f[0].indexOf("herinneren") < 0,
      // drillable: excludes verbs without normal present forms / reflexive
      drill: ik !== "-" && f[0].indexOf("(zich)") < 0
    };
  });

  window.VERB_GROUPS = GROUPS;
  window.VERBS = VERBS;
})();
