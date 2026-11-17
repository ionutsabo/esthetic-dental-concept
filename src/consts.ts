/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Esthetic Dental Center";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "Clinică stomatologică în centrul Clujului, la 2 minute de Piața Unirii. Parodontologie, estetică dentară și implantologie, într-un singur loc.";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://estheticdentalcenter.ro";
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "ro-RO";
/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = ["/404"];

/** Date reale, preluate de pe estheticdentalcenter.ro (noiembrie 2026). */
export const CLINIC = {
  phone: "0770 521 804",
  phoneHref: "tel:+40770521804",
  whatsapp: "https://wa.me/40770521804",
  email: "contact@estheticdentalcenter.ro",
  address: "Cluj-Napoca, lângă intrarea în Piața Muzeului",
  addressShort: "La 2 minute de Piața Unirii",
  hours: [
    ["Luni", "08:30 – 16:00"],
    ["Marți – Joi", "12:00 – 20:00"],
    ["Vineri", "08:30 – 16:00"],
    ["Sâmbătă – Duminică", "închis"],
  ],
  social: {
    instagram: "https://www.instagram.com/estheticdentalcenter.ro/",
    facebook: "https://www.facebook.com/estheticdentalcenter.ro",
    tiktok: "https://www.tiktok.com/@estheticdentalcenter.ro",
    youtube: "https://www.youtube.com/@estheticdentalcenter.ro-1",
  },
};

export const DOCTORS = [
  {
    name: "Dr. Darius Tomina",
    role: "Medic primar, parodontologie",
    short: "Parodontologie",
    text: "Abordează fiecare caz cu precizie și răbdare, construind tratamente parodontale predictibile și sigure, adaptate pe termen lung.",
    img: "/img/g/dr-darius.jpg",
  },
  {
    name: "Dr. Bianca Tomina",
    role: "Medic primar, chirurgie dento-alveolară",
    short: "Chirurgie dento-alveolară",
    text: "Cu o tehnică matură și un stil calm de lucru, oferă intervenții chirurgicale realizate cu atenție, siguranță și predictibilitate.",
    img: "/img/g/dr-bianca.jpg",
  },
  {
    name: "Dr. Alexandra Birta",
    role: "Estetică funcțională și protetică",
    short: "Estetică și protetică",
    text: "Îmbină estetica naturală cu funcționalitatea, creând restaurări care respectă proporțiile, sănătatea și nevoile fiecărui pacient.",
    img: "/img/g/dr-alexandra.jpg",
  },
];

export const TEAM = [
  { name: "Dr. Ana Munteanu", role: "Medic specialist pedodonție", img: "/img/real/dr-ana-munteanu.png" },
  { name: "Dr. Roxana Cighi", role: "Medic specialist ortodonție", img: "/img/real/dr-roxana-cighi.png" },
  { name: "Dr. Arvin Khalighy", role: "Medic specialist pedodonție", img: "/img/real/dr-arvin-khalighy.png" },
];

/** Recenzii reale, preluate de pe site-ul actual (Google). */
export const REVIEWS = [
  {
    q: "O clinică în care te simți bine din primul moment. Merg la ei de ani buni și m-au câștigat prin profesionalism, răbdare și grija pe care o au față de fiecare pacient.",
    who: "Mădălina Maria",
  },
  {
    q: "Copiii mei nu au frică de dentist datorită doamnei doctor Bianca Tomina. Medici profesioniști, care te tratează cu multă atenție și îți dau încredere că totul va fi bine.",
    who: "Alexandru Crețu",
  },
  {
    q: "O echipă de medici, dar în primul rând oameni buni. Profesionalism, atenție, considerație și respect.",
    who: "Diana B.",
  },
  {
    q: "Medici profesioniști, dar și foarte empatici. De aceea venim cu încredere și, cel mai important, fără frică de dentist.",
    who: "Codruța Luca",
  },
  {
    q: "Încă din prima clipă simți că ești pe mâini bune. Atmosfera este primitoare.",
    who: "Ștefana Moroti",
  },
];

export const FAQS = [
  [
    "Ce se întâmplă la prima vizită?",
    "Discutăm ce te deranjează, facem o evaluare completă și radiografiile necesare, direct în clinică. Pleci cu un plan de tratament explicat pe înțeles, cu etape și costuri estimate.",
  ],
  [
    "Pot plăti tratamentul în rate?",
    "Da. Lucrăm cu Star BT și TBI Bank, așa că tratamentele mai ample se pot împărți în rate lunare.",
  ],
  [
    "Am o urgență. Mă puteți primi repede?",
    "Sună-ne direct la 0770 521 804. Îți spunem la telefon cât de repede te putem primi.",
  ],
  [
    "Am nevoie de radiografie înainte de consultație?",
    "Nu. Avem radiologie internă, așa că facem în clinică tot ce e nevoie pentru diagnostic.",
  ],
  [
    "Unde pot parca?",
    "În parcarea din Piața Unirii. Clinica e la 2 minute de mers pe jos, lângă intrarea în Piața Muzeului. Toate liniile de transport în comun cu stație în Piața Unirii te aduc aproape.",
  ],
];
