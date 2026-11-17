/**
 * Site-ul poate fi publicat sub o subcale (GitHub Pages: /esthetic-dental-concept).
 * Local, BASE e gol. Paginile își scriu linkurile de la rădăcină („/preturi”),
 * iar middleware-ul adaugă subcalea la build.
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Calea paginii, fără subcalea de publicare. */
export const localPath = (pathname: string) =>
  BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || "/" : pathname;

/** Pagina face parte din versiunea Arcada. */
export const isArc = (url: URL) => localPath(url.pathname).startsWith("/arcada");
