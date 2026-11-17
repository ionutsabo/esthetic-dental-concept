/** Lista de prețuri reală, preluată de pe estheticdentalcenter.ro/preturi (noiembrie 2026). */
import raw from "./prices.json";
const slug = (t: string) =>
  t
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export type PriceItem = { t: string; d: string | null; p: string };
export type PriceCat = { cat: string; label: string; id: string; items: PriceItem[] };

const LABELS: Record<string, string> = {
  "Edodonție la microscop": "Endodonție la microscop",
};

export const PRICES: PriceCat[] = (raw as { cat: string; items: PriceItem[] }[]).map((c) => {
  const label = LABELS[c.cat] ?? c.cat;
  return { ...c, label, id: slug(label), items: c.items.map((i) => ({ ...i, d: i.d?.replace(/\s*minut[e]?$/, " min") ?? null })) };
});

/** Pozițiile de preț relevante pentru o pagină de tratament. */
export function pickPrices(sel: { cat: string; match: string[] }[]) {
  const out: (PriceItem & { catId: string })[] = [];
  for (const s of sel) {
    const c = PRICES.find((x) => x.cat === s.cat);
    if (!c) continue;
    for (const m of s.match) {
      const it = c.items.find((i) => i.t.toLowerCase().includes(m.toLowerCase()));
      if (it && !out.some((o) => o.t === it.t)) out.push({ ...it, catId: c.id });
    }
  }
  return out;
}
