/**
 * Medicii clinicii. Texte de pe site-ul actual + brief.
 * Citatele sunt propuneri de ton, de aprobat cu fiecare medic.
 */
export type Doctor = {
  slug: string;
  name: string;
  role: string;
  short: string;
  bio: string;
  quote?: string;
  img: string;
  /** imaginea e un portret pe fundal alb (echipa) și se îmbină cu fundalul */
  cutout?: boolean;
  founder: boolean;
  treatments: string[];
};

export const DOCTORS: Doctor[] = [
  {
    slug: "darius-tomina",
    name: "Dr. Darius Tomina",
    role: "Medic primar parodontologie · specialist în protetică dentară",
    short: "Parodontologie",
    bio: "Abordează fiecare caz cu precizie și răbdare, construind tratamente parodontale predictibile și sigure, adaptate pe termen lung.",
    quote: "Dintele e doar partea care se vede. Eu mă uit la ce îl ține pe loc.",
    img: "/img/g/dr-darius.jpg",
    founder: true,
    treatments: ["parodontologie", "implantologie", "estetica-dentara", "stomatologie-restaurativa"],
  },
  {
    slug: "bianca-tomina",
    name: "Dr. Bianca Tomina",
    role: "Medic primar chirurgie dento-alveolară",
    short: "Chirurgie dento-alveolară",
    bio: "Cu o tehnică matură și un stil calm de lucru, oferă intervenții chirurgicale realizate cu atenție, siguranță și predictibilitate.",
    quote: "Când pacientul înțelege ce urmează, frica dispare. Explic fiecare pas înainte să-l fac.",
    img: "/img/g/dr-bianca.jpg",
    founder: true,
    treatments: ["chirurgie-dento-alveolara", "implantologie"],
  },
  {
    slug: "alexandra-birta",
    name: "Dr. Alexandra Birta",
    role: "Medic stomatolog · estetică funcțională și protetică",
    short: "Estetică și protetică",
    bio: "Îmbină estetica naturală cu funcționalitatea, creând restaurări care respectă proporțiile, sănătatea și nevoile fiecărui pacient.",
    quote: "Un zâmbet frumos trebuie mai întâi să funcționeze. Abia apoi îl facem să arate bine.",
    img: "/img/g/dr-alexandra.jpg",
    founder: true,
    treatments: ["estetica-dentara", "injectari", "stomatologie-restaurativa", "endodontie-la-microscop"],
  },
  {
    slug: "roxana-cighi",
    name: "Dr. Roxana Cighi",
    role: "Medic specialist ortodonție și ortopedie dento-facială",
    short: "Ortodonție",
    bio: "Oferă planuri ortodontice personalizate, cu accent pe funcționalitate și rezultate stabile.",
    img: "/img/real/dr-roxana-cighi.png",
    cutout: true,
    founder: false,
    treatments: ["ortodontia"],
  },
  {
    slug: "ana-munteanu",
    name: "Dr. Ana Munteanu",
    role: "Medic specialist pedodonție",
    short: "Pedodonție",
    bio: "Are experiență și specializare în tratarea problemelor dentare specifice copiilor.",
    img: "/img/real/dr-ana-munteanu.png",
    cutout: true,
    founder: false,
    treatments: ["pedodontia"],
  },
  {
    slug: "arvin-khalighy",
    name: "Dr. Arvin Khalighy",
    role: "Medic specialist pedodonție",
    short: "Pedodonție",
    bio: "Lucrează cu tact și răbdare, creând un mediu sigur în care copiii se simt în largul lor.",
    img: "/img/real/dr-arvin-khalighy.png",
    cutout: true,
    founder: false,
    treatments: ["pedodontia"],
  },
];

export const doctorBySlug = (s: string) => DOCTORS.find((d) => d.slug === s)!;
