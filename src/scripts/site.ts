// Meniul de pe mobil și consimțământul pentru cookie-uri

const menu = document.querySelector<HTMLElement>("[data-menu]");
const openBtn = document.querySelector<HTMLButtonElement>("[data-menu-open]");
const closeBtn = document.querySelector<HTMLButtonElement>("[data-menu-close]");

const setMenu = (open: boolean) => {
  if (!menu || !openBtn) return;
  menu.hidden = !open;
  document.documentElement.classList.toggle("is-locked", open);
  openBtn.setAttribute("aria-expanded", String(open));
  if (open) closeBtn?.focus();
  else openBtn.focus();
};
openBtn?.addEventListener("click", () => setMenu(true));
closeBtn?.addEventListener("click", () => setMenu(false));
menu?.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) setMenu(false);
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu && !menu.hidden) setMenu(false);
});

// Cookie-uri: alegerea se păstrează în browser. Hărțile și videourile ascultă evenimentul.
const KEY = "edc-consent";
const banner = document.querySelector<HTMLElement>("[data-cookie]");
let consent: string | null = null;
try {
  consent = localStorage.getItem(KEY);
} catch {}

const apply = (v: string) => {
  consent = v;
  try {
    localStorage.setItem(KEY, v);
  } catch {}
  if (banner) banner.hidden = true;
  document.dispatchEvent(new CustomEvent("edc-consent", { detail: v }));
};
if (banner && !consent) setTimeout(() => (banner.hidden = false), 900);
document.querySelectorAll<HTMLButtonElement>("[data-consent]").forEach((b) =>
  b.addEventListener("click", () => apply(b.dataset.consent!)),
);
document.querySelectorAll("[data-cookie-open]").forEach((b) =>
  b.addEventListener("click", () => {
    if (banner) banner.hidden = false;
  }),
);

// Hartă/video cu încărcare doar după acord
document.querySelectorAll<HTMLElement>("[data-embed]").forEach((box) => {
  const load = () => {
    if (box.dataset.loaded) return;
    box.dataset.loaded = "1";
    const f = document.createElement("iframe");
    f.src = box.dataset.embed!;
    f.title = box.dataset.title || "";
    f.loading = "lazy";
    f.allowFullscreen = true;
    f.referrerPolicy = "no-referrer-when-downgrade";
    box.replaceChildren(f);
  };
  box.querySelector("button")?.addEventListener("click", () => {
    if (consent !== "toate") apply("toate");
    load();
  });
  if (consent === "toate") load();
  document.addEventListener("edc-consent", (e) => {
    if ((e as CustomEvent).detail === "toate") load();
  });
});
