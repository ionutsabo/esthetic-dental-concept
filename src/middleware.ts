import { defineMiddleware } from "astro:middleware";
import { BASE, isArc } from "@/utils/path.ts";

/**
 * 1. Versiunea „Arcada” refolosește paginile site-ului sub /arcada.
 *    Linkurile interne din paginile /arcada primesc prefixul, ca navigarea să rămână în aceeași versiune.
 * 2. Când site-ul e publicat sub o subcale (GitHub Pages), toate adresele de la rădăcină
 *    (linkuri, imagini, video, url() din stiluri) primesc subcalea. Local, BASE e gol și pasul nu face nimic.
 */
const ARC = "/arcada";
const ARC_SKIP = /^\/(arcada(\/|$)|concepte|varianta-|pagina-care-nu-exista|img\/|_astro\/|fonts\/|favicon)|\.[a-z0-9]{2,5}($|[?#])/i;

const withBase = (url: string) => (url === BASE || url.startsWith(BASE + "/") ? url : BASE + url);

export const onRequest = defineMiddleware(async (ctx, next) => {
  const res = await next();
  const arc = isArc(ctx.url);
  if (!arc && !BASE) return res;
  const type = res.headers.get("content-type") ?? "";
  if (type && !type.includes("text/html")) return res;

  let html = await res.text();

  if (arc) {
    html = html.replace(/(\shref=")(\/[^"]*)"/g, (m, attr: string, url: string) => {
      if (url.startsWith("//") || ARC_SKIP.test(url)) return m;
      return `${attr}${url === "/" ? ARC : ARC + url}"`;
    });
  }

  if (BASE) {
    html = html
      .replace(/(\s(?:href|src|poster|action|data-src)=")(\/(?!\/)[^"]*)"/g, (_, attr: string, url: string) => `${attr}${withBase(url)}"`)
      .replace(/(\ssrcset=")([^"]*)"/g, (_, attr: string, set: string) =>
        `${attr}${set.replace(/(^|,\s*)(\/(?!\/)\S+)/g, (_m: string, sep: string, url: string) => sep + withBase(url))}"`,
      )
      .replace(/url\((['"]?)(\/(?!\/)[^'")]+)\1\)/g, (_, q: string, url: string) => `url(${q}${withBase(url)}${q})`);
  }

  return new Response(html, { status: res.status, statusText: res.statusText, headers: res.headers });
});
