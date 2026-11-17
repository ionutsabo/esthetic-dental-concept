/**
 * Specializările clinicii.
 * Textele pornesc de la conținutul real de pe estheticdentalcenter.ro,
 * rescrise pe tonul din brief: pe înțelesul pacientului, fără grabă, fără promisiuni mari.
 * Estetică dentară și Injectări sunt pagini noi (direcțiile de creștere din brief).
 */
export type Treatment = {
  slug: string;
  name: string;
  /** titlul mare: partea dreaptă e în italic */
  titleA: string;
  titleB: string;
  group: "prioritar" | "complet";
  badge: string;
  short: string;
  lead: string;
  what: string;
  signs: string[];
  calm: string;
  how: string;
  steps: [string, string][];
  procedures: [string, string][];
  faqs: [string, string][];
  doctors: string[];
  img?: string;
  imgPos?: string;
  /** imaginea e portret (2:3) */
  imgTall?: boolean;
  prices: { cat: string; match: string[] }[];
  /** pagina are design propriu (Parodontologie) */
  bespoke?: boolean;
};

const evaluare: [string, string] = [
  "Evaluare",
  "Discutăm ce te deranjează, examinăm și facem radiografiile necesare, direct în clinică.",
];

export const TREATMENTS: Treatment[] = [
  /* ------------------------------------------------------------ PRIORITARE */
  {
    slug: "parodontologie",
    name: "Parodontologie",
    titleA: "Paro",
    titleB: "dontologie",
    group: "prioritar",
    badge: "Specialitatea noastră de bază",
    short: "Gingii sănătoase înainte de orice altceva. Sângerări, retracții, boală parodontală.",
    lead: "Gingii sănătoase, înainte de orice zâmbet.",
    what: "Parodontologia se ocupă de gingii și de structurile care țin dintele în os.",
    signs: [],
    calm: "",
    how: "",
    steps: [],
    procedures: [],
    faqs: [],
    doctors: ["darius-tomina"],
    img: "/img/g/exam.jpg",
    prices: [{ cat: "Parodontologie", match: ["Consultație", "Igienizare profesională", "Parodontometrie", "DSR", "Grefă gingivală"] }],
    bespoke: true,
  },
  {
    slug: "estetica-dentara",
    name: "Estetică dentară",
    titleA: "Estetică",
    titleB: "dentară",
    group: "prioritar",
    badge: "Fațete, coroane, albire",
    short: "Fațete, coroane ceramice, albire. Un zâmbet care arată natural, pentru că pornește de la funcție.",
    lead: "Un zâmbet care arată natural, pentru că pornește de la funcție. Îl planificăm digital și îl vezi în gură înainte să atingem un dinte.",
    what: "Estetica dentară schimbă forma, culoarea și proporțiile dinților, ca zâmbetul să se potrivească feței tale. La noi începe întotdeauna după ce gingiile și dinții sunt sănătoși: o fațetă pusă pe o gingie inflamată nu rezistă și nu arată bine.",
    signs: [
      "Nu-ți place forma sau culoarea dinților",
      "Ai spații între dinți, dinți ciobiți sau uzați",
      "Ai coroane sau plombe vechi care se văd",
      "Vrei un zâmbet mai luminos, dar care să pară al tău",
    ],
    calm: "Nu pornim de la o poză de pe internet, ci de la fața, gingiile și mușcătura ta. Rezultatul trebuie să arate ca și cum așa ai fi zâmbit mereu.",
    how: "Începem cu fotografii, scanare intraorală și o analiză a zâmbetului. Pe baza lor facem un proiect digital și un mock-up: o machetă pe care o porți în gură câteva minute, ca să vezi rezultatul înainte să începem. Abia apoi pregătim dinții, cât mai puțin invaziv, și realizăm lucrarea finală.",
    steps: [
      ["Analiza zâmbetului", "Fotografii, video și scanare intraorală. Vorbim despre ce îți dorești."],
      ["Mock-up", "Vezi și simți noul zâmbet în gură, înainte de orice intervenție."],
      ["Pregătire minimă", "Păstrăm cât mai mult din dintele natural."],
      ["Lucrarea finală", "Fațete sau coroane realizate cu laboratorul, apoi controale periodice."],
    ],
    procedures: [
      ["Fațete dentare ceramice", "Foițe subțiri de ceramică aplicate pe partea vizibilă a dinților. Corectează forma, culoarea și spațiile, cu un aspect foarte natural și o durabilitate mare."],
      ["Coroane integral ceramice și din zirconiu", "Pentru dinții cu distrucții mari sau lucrări vechi. Refac forma și rezistența dintelui și se integrează în zâmbet."],
      ["Albire dentară", "În cabinet, cu lampă, într-o singură ședință, sau acasă, cu gutiere personalizate. Sub control medical, ca să nu apară sensibilitate inutilă."],
      ["Alungire coronară estetică", "Când gingia acoperă prea mult din dinte, îi refacem conturul. Uneori asta schimbă zâmbetul fără nicio fațetă."],
      ["Mock-up și design digital al zâmbetului", "Macheta care îți arată rezultatul înainte să începem. Decizi după ce l-ai văzut."],
      ["Inlay și onlay CEREC, în aceeași zi", "Restaurări ceramice realizate în clinică, pentru dinții cu distrucții mai mari decât o plombă."],
    ],
    faqs: [
      ["Fațetele arată natural?", "Da, dacă sunt planificate corect. De aceea pornim de la proporțiile feței tale și îți arătăm rezultatul prin mock-up, înainte să începem."],
      ["Trebuie șlefuiți dinții pentru fațete?", "De cele mai multe ori, foarte puțin. Planificarea digitală ne arată exact cât e nevoie, ca să păstrăm cât mai mult din dintele natural."],
      ["Cât rezistă fațetele ceramice?", "Mulți ani, dacă gingiile sunt sănătoase, iar tu vii la controale și îți faci igienizările. Dacă scrâșnești din dinți, îți recomandăm și o gutieră de protecție pentru noapte."],
      ["Albirea strică smalțul?", "Făcută corect, sub control medical, nu. Poate apărea o sensibilitate temporară, care trece în câteva zile."],
      ["Pot vedea rezultatul înainte?", "Da. Mock-up-ul îți arată noul zâmbet direct în gură. Abia după ce îl vezi și ți-l dorești, trecem mai departe."],
    ],
    doctors: ["alexandra-birta", "darius-tomina"],
    img: "/img/g/lips.jpg",
    imgPos: "70% 50%",
    prices: [
      { cat: "Protetică estetică pe dinte", match: ["Mock-up motivațional", "Fațetă dentară ceramică presată", "Fațetă dentară ceramică feldspatică", "Coroană integral ceramică", "Albire dentară lampă"] },
    ],
  },
  {
    slug: "injectari",
    name: "Injectări",
    titleA: "Injectări",
    titleB: "de compozit",
    group: "prioritar",
    badge: "Cu șlefuire minimă",
    short: "Restaurări estetice din compozit injectat, cu șlefuire minimă și în mai puține ședințe.",
    lead: "Forma dorită a dinților, refăcută din compozit injectat. Cu șlefuire minimă, în puține ședințe și cu rezultatul proiectat digital dinainte.",
    what: "Injectarea de compozit (injection moulding) e o tehnică prin care forma ideală a dinților, proiectată digital, e transferată în gură cu ajutorul unei chei transparente. Compozitul se injectează dinte cu dinte, iar rezultatul e exact cel planificat. De cele mai multe ori, dinții nu trebuie șlefuiți deloc.",
    signs: [
      "Dinți uzați, mici sau cu margini ciobite",
      "Spații mici între dinții din față",
      "Vrei o schimbare de formă, dar nu ești pregătit pentru fațete ceramice",
      "Vrei să testezi un nou zâmbet înaintea unei soluții definitive",
    ],
    calm: "E o soluție conservatoare: păstrăm dintele natural și, dacă vei dori pe viitor fațete ceramice, drumul rămâne deschis.",
    how: "Scanăm dinții și proiectăm digital forma finală. Din acest proiect se realizează o cheie transparentă din silicon, care se așază pe dinți. Prin ea injectăm compozitul, dinte cu dinte, apoi finisăm și lustruim. Totul durează de obicei una sau două ședințe.",
    steps: [
      ["Scanare și proiect digital", "Stabilim împreună forma și lungimea dinților."],
      ["Cheia transparentă", "Proiectul devine un tipar precis, făcut special pentru tine."],
      ["Injectarea", "Compozitul ia forma planificată, dinte cu dinte."],
      ["Finisare și lustruire", "Iar la controale păstrăm luciul cu o lustruire rapidă."],
    ],
    procedures: [
      ["Injectări de compozit pe dinții frontali", "Refac forma și proporțiile zâmbetului, fără șlefuire sau cu șlefuire minimă."],
      ["Refacerea dinților uzați", "Pentru uzura cauzată de scrâșnit sau de vârstă. Recâștigăm înălțimea și forma dinților."],
      ["Închiderea spațiilor mici", "Diastemele mici se pot închide în aceeași ședință."],
      ["Test estetic înaintea fațetelor", "Poți purta noul zâmbet o perioadă, înainte să decizi o soluție ceramică."],
    ],
    faqs: [
      ["Ce diferență e între injectări și fațete ceramice?", "Injectările sunt din compozit, se fac mai repede și de obicei fără șlefuire. Fațetele ceramice sunt mai rezistente la culoare și uzură pe termen lung. Îți explicăm la evaluare ce se potrivește în cazul tău."],
      ["Trebuie șlefuiți dinții?", "De cele mai multe ori, nu. Compozitul se adaugă peste dintele natural."],
      ["Cât rezistă?", "Depinde de mușcătură și de obiceiuri. La controalele periodice le lustruim, ca să-și păstreze luciul, iar micile retușuri sunt simple."],
      ["Câte ședințe sunt necesare?", "După planificare, de obicei una sau două."],
      ["Doare?", "Nu. În cele mai multe cazuri nici nu e nevoie de anestezie, pentru că dintele nu e șlefuit."],
    ],
    doctors: ["alexandra-birta"],
    img: "/img/g/portrait-warm.jpg",
    imgPos: "50% 30%",
    imgTall: true,
    prices: [
      { cat: "Stomatologie generală", match: ["Injectări compozit"] },
      { cat: "Protetică estetică pe dinte", match: ["Scanare intraorală", "Mock-up motivațional", "Fotografii + video"] },
    ],
  },
  {
    slug: "implantologie",
    name: "Implantologie",
    titleA: "Implanto",
    titleB: "logie",
    group: "prioritar",
    badge: "Cu radiologie internă",
    short: "De la planificarea digitală la coroana finală, cu aceeași echipă.",
    lead: "Dinții lipsă, înlocuiți cu implanturi stabile și naturale. Planificate digital, realizate etapizat, explicate la fiecare pas.",
    what: "Implantul dentar e o rădăcină artificială din titan sau zirconiu, care se integrează în os și susține o coroană, o punte sau o lucrare fixă. Înlocuiește doar dintele lipsă, fără să afecteze dinții vecini.",
    signs: [
      "Îți lipsesc unul sau mai mulți dinți",
      "Ai un dinte care nu mai poate fi salvat",
      "Porți o proteză mobilă și ți-ai dori una fixă",
      "Ai amânat de mult înlocuirea unui dinte",
    ],
    calm: "Chiar dacă nu mai ai suficient os, de cele mai multe ori există o soluție. Medicul ți-o explică după evaluarea radiologică, făcută direct în clinică.",
    how: "Tratamentul se desfășoară etapizat. După consultație și CBCT, medicul stabilește dacă osul permite inserarea implantului și ce tip de implant se potrivește. Urmează etapa chirurgicală, apoi o perioadă de integrare, cu sau fără lucrare provizorie. La final se realizează coroana definitivă. Fiecare etapă îți este explicată dinainte.",
    steps: [
      evaluare,
      ["Planificare digitală", "CBCT și, unde e cazul, ghid chirurgical pentru poziția ideală a implantului."],
      ["Inserarea implantului", "Sub anestezie locală, controlat și precis."],
      ["Coroana finală", "După integrare, lucrarea definitivă: arată și funcționează ca un dinte natural."],
    ],
    procedures: [
      ["Implant dentar", "Înlocuiește rădăcina dintelui lipsă și susține o coroană, o punte sau o lucrare fixă. Folosim implanturi MegaGen și, la cerere, implanturi din zirconiu."],
      ["Reconstrucție osoasă", "Reface volumul de os atunci când nu e suficient. Se poate face odată cu implantul sau separat."],
      ["Sinus lift", "Adiție osoasă în zona laterală a maxilarului, pentru implanturile din partea de sus."],
      ["All-on-X", "O lucrare fixă pe implanturi, pentru pacienții fără dinți sau cu dinți care nu mai pot fi păstrați. Înlocuiește proteza mobilă."],
      ["Implantologie digitală", "Ghiduri chirurgicale care stabilesc poziția exactă a implantului. Uneori permit lucrarea provizorie în aceeași ședință."],
    ],
    faqs: [
      ["Cine poate primi un implant dentar?", "Majoritatea adulților cu o sănătate orală stabilă. Medicul evaluează osul, gingiile și igiena, ca să decidă dacă implantul e soluția potrivită."],
      ["Cât durează tot tratamentul?", "Depinde de caz. Uneori lucrarea provizorie se poate face în aceeași etapă cu implantul. Alteori e nevoie de câteva luni de vindecare înainte de coroana finală. Primești un calendar clar după evaluare."],
      ["Ce se întâmplă dacă nu am suficient os?", "Există proceduri de reconstrucție sau adiție osoasă. Medicul îți spune dacă se pot face în aceeași ședință cu implantul sau separat."],
      ["Implantul se simte ca un dinte natural?", "Da. Coroana e realizată să se potrivească formei și culorii dinților tăi, iar la mestecat se comportă foarte asemănător cu un dinte natural."],
      ["Poate fi pus implantul imediat după extracție?", "În anumite situații, da, dacă osul și țesuturile permit. Medicul decide după evaluarea clinică și radiologică."],
      ["Ce se întâmplă dacă amân?", "În timp, osul se retrage, dinții vecini se înclină, iar mușcătura se schimbă. Tratamentul poate deveni mai complex. O evaluare timpurie te ajută să alegi momentul potrivit."],
    ],
    doctors: ["bianca-tomina", "darius-tomina"],
    img: "/img/g/xray.jpg",
    prices: [
      { cat: "Implantologie", match: ["Implant dentar MegaGen", "Implant dentar Pure zirconiu", "Elevare sinusală", "Ghid chirurgical"] },
      { cat: "Protetică estetică pe implant", match: ["Coroană zirconiu înșurubată"] },
    ],
  },

  /* ------------------------------------------------------------ COMPLETE */
  {
    slug: "chirurgie-dento-alveolara",
    name: "Chirurgie dento-alveolară",
    titleA: "Chirurgie",
    titleB: "dento-alveolară",
    group: "complet",
    badge: "Medic primar în chirurgie",
    short: "Extracții, molari de minte, chisturi. Minim invaziv, cu vindecare rapidă.",
    lead: "Extracții, molari de minte și intervenții chirurgicale făcute cu calm, minim invaziv și cu grijă pentru vindecarea ta.",
    what: "Chirurgia dento-alveolară cuprinde intervențiile la nivelul dinților și al oaselor maxilare, atunci când tratamentele obișnuite nu mai sunt suficiente: extracții, molari de minte incluși, infecții, chisturi. Scopul e să refacem sănătatea zonei și să o pregătim corect pentru ce urmează.",
    signs: [
      "Un dinte care nu mai poate fi salvat",
      "Măseaua de minte doare, se inflamează sau nu are loc",
      "O infecție care revine la vârful rădăcinii",
      "Un fren care trage de gingie sau încurcă vorbirea",
    ],
    calm: "Extracția e întotdeauna ultima opțiune. Medicul o decide doar după ce a evaluat toate variantele de a salva dintele.",
    how: "Medicul analizează zona clinic și radiologic și alege cea mai sigură metodă. Intervenția se face sub anestezie locală, cu protocoale precise, iar unde e nevoie folosim biomateriale care accelerează vindecarea și păstrează osul pentru un viitor implant.",
    steps: [
      evaluare,
      ["Plan chirurgical", "Îți explicăm intervenția, durata și ce urmează după."],
      ["Intervenția", "Sub anestezie locală, minim invaziv."],
      ["Vindecare", "Primești instrucțiunile de după tratament și revii la control."],
    ],
    procedures: [
      ["Extracția dentară", "Minim invazivă, cu grijă pentru osul din jur. Unde e nevoie, adăugăm biomateriale care pregătesc zona pentru un implant."],
      ["Odontectomia", "Extracția dinților incluși, de obicei molarii de minte care nu au loc să erupă."],
      ["Frenectomia", "Îndepărtarea frenului care limitează buza sau limba. Clasic sau cu laser, în aproximativ 20 de minute, potrivită la orice vârstă."],
      ["Rezecția apicală", "Îndepărtează infecția din jurul vârfului rădăcinii, ca dintele să poată fi păstrat."],
      ["Chistectomia", "Îndepărtarea chisturilor din os, urmată la nevoie de reconstrucție osoasă."],
    ],
    faqs: [
      ["Când e necesară o extracție?", "Când dintele nu mai poate fi salvat prin alte tratamente: infecții severe, fracturi profunde sau mobilitate avansată."],
      ["Trebuie scoasă orice măsea de minte?", "Nu. Dacă e sănătoasă, bine poziționată și poate fi curățată, poate rămâne. O scoatem când produce infecții, durere, presiune sau risc de chist."],
      ["Ce este frenectomia?", "Îndepărtarea frenului buzei sau al limbii, când acesta limitează vorbirea, alimentația sau poziția dinților, ori produce retracții gingivale."],
      ["Rezecția apicală poate salva un dinte?", "Da. Elimină infecția de la vârful rădăcinii atunci când tratamentul de canal nu a fost suficient."],
      ["Cât durează recuperarea?", "Pentru o extracție simplă, câteva zile. Primești instrucțiuni clare pentru acasă, pe care le găsești și online, pe pagina dedicată."],
    ],
    doctors: ["bianca-tomina"],
    prices: [{ cat: "Chirurgie", match: ["Consultație primară", "Extracție dinte monoradicular", "Extracție molar de minte", "Odontectomie", "Rezecție apicală"] }],
  },
  {
    slug: "endodontie-la-microscop",
    name: "Endodonție la microscop",
    titleA: "Endodonție",
    titleB: "la microscop",
    group: "complet",
    badge: "Cu microscop endodontic",
    short: "Tratamente de canal cu vizibilitate mărită, ca să salvăm dintele natural.",
    lead: "Tratamente de canal făcute cu microscop, ca să salvăm dinți care altfel ar trebui extrași.",
    what: "Endodonția tratează interiorul dintelui: nervul și canalele rădăcinii. Microscopul ne arată canale foarte fine, fisuri și complicații pe care ochiul liber nu le vede, așa că tratamentul e mai precis, iar dintele are șanse mai mari să rămână pe termen lung.",
    signs: [
      "Durere puternică, spontană sau noaptea",
      "Sensibilitate la cald care nu trece",
      "Un abces sau o umflătură lângă un dinte",
      "Un tratament de canal vechi care s-a reinfectat",
    ],
    calm: "Un tratament de canal nu doare, se face sub anestezie. De cele mai multe ori, durerea dispare chiar după prima ședință.",
    how: "Sub anestezie locală și cu izolare cu digă, medicul îndepărtează țesutul afectat, curăță și dezinfectează canalele, apoi le sigilează ermetic. Microscopul crește precizia la fiecare pas.",
    steps: [
      evaluare,
      ["Anestezie și izolare", "Digă pentru un câmp de lucru curat și sigur."],
      ["Tratamentul la microscop", "Curățare, dezinfectare și sigilarea canalelor."],
      ["Reconstrucția", "Pivot din fibră de sticlă și, des, o coroană care protejează dintele."],
    ],
    procedures: [
      ["Tratamentul de canal", "Îndepărtarea țesutului afectat, dezinfectarea și sigilarea canalelor, sub microscop."],
      ["Retratamentul", "Pentru tratamentele vechi care nu s-au vindecat sau s-au reinfectat."],
      ["Îndepărtarea pivoților și a corpurilor străine", "Fragmente sau pivoți vechi care blochează accesul în canal, scoși în siguranță la microscop."],
      ["Închiderea perforațiilor", "Cu materiale biocompatibile, ca dintele să poată fi păstrat."],
      ["Reconstrucția cu pivot din fibră de sticlă", "Redă rezistența dintelui și pregătește o viitoare coroană."],
    ],
    faqs: [
      ["De ce e important tratamentul de canal?", "Elimină infecția și îți păstrează dintele natural. Netratată, infecția avansează și poate duce la extracție."],
      ["Doare tratamentul de canal?", "Nu. Se face sub anestezie locală, iar microscopul face intervenția mai precisă și mai confortabilă."],
      ["Când e nevoie de retratament?", "Când un tratament anterior nu a fost complet sau când apare o infecție la vârful rădăcinii."],
      ["Am nevoie de coroană după?", "Deseori, da. Dinții tratați endodontic pot deveni fragili și au nevoie de protecție pe termen lung."],
    ],
    doctors: ["alexandra-birta"],
    img: "/img/g/microscop-medic.jpg",
    imgPos: "50% 30%",
    imgTall: true,
    prices: [{ cat: "Edodonție la microscop", match: ["Tratament dinți frontali", "Tratament molari", "Retratament molari", "Îndepărtare pivot", "Aplicare pivot"] }],
  },
  {
    slug: "stomatologie-restaurativa",
    name: "Stomatologie restaurativă",
    titleA: "Stomatologie",
    titleB: "restaurativă",
    group: "complet",
    badge: "Poarta de intrare",
    short: "Plombe, coroane, punți și proteze. Dinți refăcuți corect și durabil.",
    lead: "Dinți refăcuți corect, durabil și natural. De la o plombă bine făcută până la reconstrucția completă a unei arcade.",
    what: "Stomatologia restaurativă reface dinții afectați de carii, uzură sau fracturi, ca să-și recapete funcția, forma și rezistența. Folosim materiale moderne și tehnici minim invazive, ca să păstrăm cât mai mult din dintele natural.",
    signs: [
      "Carii, fisuri sau dinți ciobiți",
      "Plombe vechi care s-au închis la culoare sau s-au fisurat",
      "Un dinte tratat de canal care trebuie protejat",
      "Dinți lipsă, când implantul nu e o opțiune",
    ],
    calm: "Multe probleme mari încep mici. Un control la 6 luni și o plombă făcută la timp te scutesc de tratamente complicate.",
    how: "Pornim de la evaluarea clinică și radiologică și alegem tipul de restaurare potrivit: obturație, inlay, onlay, coroană, punte sau proteză. Lucrăm cu izolare cu digă și tehnici adezive, pentru restaurări stabile și naturale.",
    steps: [
      evaluare,
      ["Alegerea soluției", "Îți explicăm opțiunile, cu avantaje și costuri."],
      ["Restaurarea", "Minim invaziv, cu materiale durabile și estetice."],
      ["Controale", "Ca lucrarea să rămână stabilă în timp."],
    ],
    procedures: [
      ["Obturații („plombe”)", "Din rășini compozite moderne, cu izolare cu digă, discrete și durabile."],
      ["Inlay și onlay", "Pentru distrucții prea mari pentru o plombă. Realizate în clinică, prin CAD/CAM, sau în laborator."],
      ["Coroane dentare", "Din metalo-ceramică, ceramică integrală sau zirconiu, pentru dinții cu distrucții mari sau după tratament de canal."],
      ["Punți dentare", "Înlocuiesc unul sau mai mulți dinți lipsă, când implantul nu e indicat."],
      ["Proteze și proteze pe implanturi", "Refac arcada când dinții au fost pierduți parțial sau total. Pe implanturi, proteza e mult mai stabilă."],
    ],
    faqs: [
      ["Ce tratament se recomandă pentru o carie?", "Pentru carii mici și medii, obturații din compozit. Pentru distrucții mari, inlay, onlay sau coroană."],
      ["Coroanele sunt durabile?", "Da. Coroanele din ceramică sau zirconiu sunt rezistente și pot dura mulți ani, cu igienă corectă și controale."],
      ["Pot înlocui un dinte lipsă fără implant?", "Da, printr-o punte dentară, care se sprijină pe dinții vecini."],
      ["Cât de des ar trebui să vin la control?", "La 6 luni. Așa prindem problemele când sunt mici și ușor de rezolvat."],
    ],
    doctors: ["alexandra-birta", "darius-tomina"],
    img: "/img/real/cabinet-2.jpg",
    prices: [
      { cat: "Stomatologie generală", match: ["Consultație", "Control", "Obturație", "Igienizare"] },
      { cat: "Protetică estetică pe dinte", match: ["Coroană zirconiu pe dinte", "Inlay/Onlay CEREC ceramic"] },
    ],
  },
  {
    slug: "ortodontia",
    name: "Ortodonție",
    titleA: "Orto",
    titleB: "donție",
    group: "complet",
    badge: "Pentru copii și adulți",
    short: "Aparate fixe, alignere transparente și aparate funcționale pentru copii.",
    lead: "Dinți aliniați și o mușcătură care funcționează corect, la orice vârstă. Cu aparate fixe, alignere transparente sau aparate funcționale pentru copii.",
    what: "Ortodonția îndreaptă dinții, corectează mușcătura și ghidează dezvoltarea maxilarelor. Un tratament ortodontic nu ține doar de estetică: o mușcătură corectă previne uzura dinților, problemele de gingie și disconfortul din articulație.",
    signs: [
      "Dinți înghesuiți, rotiți sau cu spații între ei",
      "Mușcătura nu se închide corect",
      "Copilul respiră pe gură sau își suge degetul",
      "Ai nevoie de spațiu corect înainte de un implant",
    ],
    calm: "Nu e niciodată prea târziu pentru un tratament ortodontic. Adulții au astăzi soluții discrete, cum sunt alignerele transparente.",
    how: "Totul începe cu o consultație, fotografii, radiografii și scanare intraorală. Pe baza lor, medicul stabilește diagnosticul și alege aparatul potrivit. Apoi urmărește periodic evoluția și ajustează tratamentul, ca rezultatul să rămână stabil.",
    steps: [
      ["Consultație ortodontică", "Discutăm ce vrei să schimbi și examinăm dinții."],
      ["Înregistrări", "Fotografii, radiografie și scanare pentru diagnostic."],
      ["Plan de tratament", "Aparatul potrivit, durata și costurile, explicate clar."],
      ["Tratament și contenție", "Controale regulate, apoi contenția care păstrează rezultatul."],
    ],
    procedures: [
      ["Aparate funcționale", "Pentru copii, în perioada de creștere: ghidează dezvoltarea maxilarelor și corectează obiceiurile vicioase."],
      ["Aparate dentare fixe", "Metalice sau fizionomice, eficiente atât la copii, cât și la adulți."],
      ["Alignere transparente", "Gutiere transparente, personalizate digital: discrete, confortabile și detașabile."],
      ["Contenție", "Fixă sau mobilizabilă, ca dinții să rămână în noua poziție."],
    ],
    faqs: [
      ["La ce vârstă ar trebui dus copilul la ortodont?", "În jurul vârstei de 6–7 ani, când apar primii dinți permanenți și se pot observa primele abateri."],
      ["Alignere sau aparat fix?", "Alignerele sunt mai discrete și mai confortabile, dar nu se potrivesc tuturor cazurilor. Aparatul fix rămâne soluția pentru situațiile complexe."],
      ["Cât durează tratamentul?", "De la câteva luni la 1–2 ani, în funcție de complexitatea cazului și de cât de consecvent porți aparatul."],
      ["Aparatul doare?", "La activări poate apărea o sensibilitate temporară, dar tratamentul nu e dureros."],
    ],
    doctors: ["roxana-cighi"],
    prices: [{ cat: "Ortodonție", match: ["Consultație inițială", "Aparat ortodontic fix metalic", "Aparat ortodontic fix fizionomic", "ANGEL ALIGNEE", "Aplicare Aparat mobilizabil"] }],
  },
  {
    slug: "pedodontia",
    name: "Pedodonție",
    titleA: "Pedo",
    titleB: "donție",
    group: "complet",
    badge: "Pentru cei mici",
    short: "Îngrijire dentară pentru copii, cu răbdare. Prevenție, sigilări, fluorizări.",
    lead: "Dinți sănătoși pentru copii și o relație bună cu dentistul, pentru toată viața. Cu răbdare, cu joc și fără grabă.",
    what: "Pedodonția se ocupă de dinții copiilor, de la primul dinte de lapte până la dentiția definitivă. Dinții de lapte contează: păstrează spațiul pentru dinții permanenți și ajută maxilarele să se dezvolte corect.",
    signs: [
      "Copilului i-a apărut primul dinte",
      "Pete albe sau maronii pe dinți",
      "Copilul se plânge de durere sau de sensibilitate",
      "Obiceiuri precum suptul degetului sau respirația pe gură",
    ],
    calm: "Părinții ne spun des că, după prima vizită, copiii nu se mai tem de dentist. Pentru noi, asta e cea mai importantă parte a tratamentului.",
    how: "Prima vizită e o cunoaștere. Copilul se familiarizează cu cabinetul și cu medicul, într-un ritm care i se potrivește. Urmează evaluarea igienei și a dinților, apoi prevenția și, unde e nevoie, tratamentul, cât mai blând posibil.",
    steps: [
      ["Prima vizită", "Copilul cunoaște cabinetul și medicul, fără nicio grabă."],
      ["Evaluare", "Dinții de lapte, dinții care erup și igiena."],
      ["Prevenție", "Igienizare, fluorizare și sigilări, unde e cazul."],
      ["Controale la 3 luni", "La copii, lucrurile se schimbă repede."],
    ],
    procedures: [
      ["Profilaxia dentară pediatrică", "Igienizări, fluorizări, sigilări și instruirea copilului și a părintelui pentru periajul corect."],
      ["Fluorizări", "Lacuri cu fluor care întăresc smalțul și ajută la remineralizarea leziunilor incipiente. Rapid și sigur."],
      ["Sigilări", "Acoperă șanțurile adânci ale dinților, unde se strânge placa, și reduc mult riscul de carii."],
      ["Tratamente pentru dinții de lapte", "Obturații, tratamente de canal și menținătoare de spațiu, adaptate vârstei."],
      ["Radiografii la copii", "Pentru cariile ascunse și poziția dinților permanenți, cu doze reduse."],
    ],
    faqs: [
      ["De la ce vârstă vin copiii la dentist?", "De la apariția primului dinte, apoi la fiecare 3 luni."],
      ["Dinții de lapte chiar contează?", "Da. Păstrează spațiul pentru dinții permanenți și influențează dezvoltarea maxilarelor."],
      ["Fluorizarea este sigură?", "Da. Fluorizarea făcută în cabinet e controlată și ajută la prevenirea cariilor."],
      ["Ce fac dacă copilul se teme?", "Spune-ne dinainte. Prima vizită poate fi doar o cunoaștere, iar ritmul îl stabilește copilul."],
    ],
    doctors: ["ana-munteanu", "arvin-khalighy"],
    prices: [{ cat: "Pedodonție", match: ["Consultație", "Profilaxia cariei", "Fluorizare", "Sigilare dinte temporar", "Obturație dinte temporar"] }],
  },
  {
    slug: "proceduri-realizate-in-scop-diagnostic",
    name: "Diagnostic și radiologie",
    titleA: "Diagnostic",
    titleB: "digital",
    group: "complet",
    badge: "Radiologie internă",
    short: "CBCT, radiografii, scanare intraorală. Tot diagnosticul, făcut în clinică.",
    lead: "Un diagnostic corect e începutul oricărui tratament bun. Îl facem complet, în clinică, cu radiologie internă și flux digital.",
    what: "Procedurile de diagnostic ne arată cu precizie dinții, gingiile, osul și felul în care funcționează împreună mușcătura. Folosim scanare intraorală, fotografii, radiografii, tomografie CBCT și înregistrarea mișcărilor mandibulei.",
    signs: [
      "Înaintea oricărui tratament: plombă, implant, fațete, aparat",
      "Dureri dentare sau în articulația maxilarului",
      "Pentru planificarea unei intervenții chirurgicale",
      "La controalele periodice",
    ],
    calm: "Nu trebuie să mergi nicăieri altundeva pentru radiografii. Le facem pe loc și ți le explicăm pe ecran.",
    how: "Medicul stabilește ce investigații sunt necesare în cazul tău. Toate sunt rapide, neinvazive și cu doze reduse de radiație, iar rezultatele sunt interpretate pe loc, ca planul de tratament să fie clar.",
    steps: [
      ["Discuție", "Ce te deranjează și ce îți dorești."],
      ["Investigații", "Doar cele necesare, cu doze reduse."],
      ["Interpretare", "Îți arătăm imaginile și îți explicăm ce vedem."],
      ["Plan de tratament", "Scris, cu etape și costuri estimate."],
    ],
    procedures: [
      ["Scanare intraorală", "Amprenta digitală 3D a dinților, fără materialele de amprentă clasice."],
      ["CBCT", "Tomografie 3D, esențială pentru implanturi, chirurgie și cazurile complexe."],
      ["Radiografii", "Ortopantomografie (OPT), teleradiografie de profil și radiografii retroalveolare."],
      ["Fotografii intra- și extraorale", "Documentează starea inițială și evoluția tratamentului."],
      ["Înregistrarea mișcărilor mandibulei", "Analiza funcțională a mușcăturii și a articulației, cu senzori digitali."],
    ],
    faqs: [
      ["Am nevoie de radiografie înainte de consultație?", "Nu. Avem radiologie internă și facem în clinică tot ce e nevoie."],
      ["CBCT are radiații mari?", "Nu. E o investigație cu doză redusă, adaptată individual, care iradiază doar zona necesară."],
      ["De ce scanare intraorală?", "E mai confortabilă decât amprenta clasică și mult mai precisă pentru planificare."],
    ],
    doctors: ["darius-tomina", "bianca-tomina", "alexandra-birta"],
    img: "/img/real/cabinet.jpg",
    prices: [{ cat: "Radiologie", match: ["Ortopantomografie", "CBCT segmentar", "CBCT bimaxilar", "TELE profil"] }],
  },
];

export const treatmentBySlug = (s: string) => TREATMENTS.find((t) => t.slug === s)!;
export const PRIORITY = TREATMENTS.filter((t) => t.group === "prioritar");
export const COMPLETE = TREATMENTS.filter((t) => t.group === "complet");
