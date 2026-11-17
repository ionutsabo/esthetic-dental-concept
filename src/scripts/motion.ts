// Mișcare comună: titluri cuvânt cu cuvânt, fade, rânduri, imagini, parallax, nav
// Cuvintele de 1–2 litere (e, o, a, și, în, la, de...) nu rămân singure la final de rând
const SHORT = /^[\p{L}]{1,2}$|^(și|în|cu|pe|nu|să|ce)$/iu;

// Text obișnuit: spațiu de nedespărțit după cuvintele scurte
const glue = (root: Element) => {
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (tw.nextNode()) nodes.push(tw.currentNode as Text);
  nodes.forEach((t) => {
    if (t.parentElement?.closest("[data-split], script, style")) return;
    t.textContent = (t.textContent ?? "").replace(
      /(^|[\s („])([\p{L}]{1,2}|și|în|cu|pe|nu|să|ce) /giu,
      (_m, a, w) => `${a}${w} `,
    );
  });
};
glue(document.body);

// Împarte titlurile în cuvinte, pentru intrarea pe rând
document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
  let i = 0;
  const walk = (node: Node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const raw = child.textContent ?? "";
        const words = raw.split(/\s+/).filter(Boolean);
        const frag = document.createDocumentFragment();
        if (/^\s/.test(raw)) frag.append(document.createTextNode(" "));
        // grupăm cuvântul scurt cu următorul, ca să rămână pe același rând
        const groups: string[][] = [];
        let cur: string[] = [];
        words.forEach((p, k) => {
          cur.push(p);
          if (!(SHORT.test(p) && k < words.length - 1)) {
            groups.push(cur);
            cur = [];
          }
        });
        if (cur.length) groups.push(cur);
        const mk = (p: string) => {
          const w = document.createElement("span");
          w.className = "w";
          const inner = document.createElement("span");
          inner.textContent = p;
          inner.style.setProperty("--i", String(i++));
          w.append(inner);
          return w;
        };
        groups.forEach((g, gi) => {
          if (gi) frag.append(document.createTextNode(" "));
          if (g.length === 1) {
            frag.append(mk(g[0]));
            return;
          }
          const box = document.createElement("span");
          box.className = "nw";
          g.forEach((p, pi) => {
            if (pi) box.append(document.createTextNode(" "));
            box.append(mk(p));
          });
          frag.append(box);
        });
        if (/\s$/.test(raw) && words.length) frag.append(document.createTextNode(" "));
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && (child as HTMLElement).tagName !== "BR") {
        walk(child);
      }
    });
  };
  walk(el);
});

// Paragrafe care se „aprind" rând cu rând
document.querySelectorAll<HTMLElement>("[data-lines] .ln").forEach((ln, i, all) => {
  const siblings = [...(ln.parentElement?.querySelectorAll(".ln") ?? [])];
  ln.style.setProperty("--i", String(siblings.indexOf(ln)));
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
);
document
  .querySelectorAll("[data-split],[data-fade],[data-lines],[data-img]")
  .forEach((el) => io.observe(el));

// Parallax discret
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const px = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
const nav = document.querySelector<HTMLElement>("[data-nav]");
let lastY = scrollY;
const tick = () => {
  const y = scrollY;
  if (!reduce) {
    px.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > innerHeight + 200) return;
      const speed = parseFloat(el.dataset.parallax || "0.1");
      const center = r.top + r.height / 2 - innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-center * speed).toFixed(1)}px, 0)`;
    });
  }
  if (nav) {
    nav.classList.toggle("is-solid", y > innerHeight * 0.6);
    nav.classList.toggle("is-hidden", y > innerHeight && y > lastY + 2);
    if (y < lastY - 2) nav.classList.remove("is-hidden");
  }
  lastY = y;
};
addEventListener("scroll", () => requestAnimationFrame(tick), { passive: true });
tick();

// FAQ: un singur răspuns deschis (și în browserele fără <details name>)
document.querySelectorAll<HTMLDetailsElement>(".faq details").forEach((d) => {
  d.addEventListener("toggle", () => {
    if (!d.open) return;
    d.closest(".faq")
      ?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((o) => {
        if (o !== d) o.open = false;
      });
  });
});
