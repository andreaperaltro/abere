import { useEffect } from "react";

const SITE_NAME = "Abere Selezione";
const TITLE = "Abere Selezione | Importazione e Distribuzione Vini";
const DESCRIPTION =
  "Abere nasce dalla voglia di rimettere al centro la piacevolezza del vino. Selezione, importazione e distribuzione di vini artigianali da produttori che rispettano la natura e il territorio.";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(
    `meta[${attr}="${key}"]`
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  let el = document.querySelector(
    `link[rel="${rel}"]`
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  if (extra) {
    Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
  }
}

export function useSEO() {
  useEffect(() => {
    const origin = window.location.origin;
    const ogImage = `${origin}/og-image.svg`;
    const ogLogo = `${origin}/favicon.svg`;
    const ogUrl = origin + "/";

    // Language
    document.documentElement.setAttribute("lang", "it");

    // Title — override whatever Figma pre-set
    document.title = TITLE;

    // Standard meta
    upsertMeta("name", "description", DESCRIPTION);
    upsertMeta("name", "keywords", "vini, selezione vini, importazione vini, distribuzione vini, vini artigianali, vigneron, Abere, Thomas Piras, Marco Tinessa");
    upsertMeta("name", "author", SITE_NAME);
    upsertMeta("name", "robots", "index, follow");
    upsertMeta("name", "theme-color", "#D3C175");

    // Open Graph — override Figma's pre-set defaults
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", TITLE);
    upsertMeta("property", "og:description", DESCRIPTION);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", ogUrl);
    upsertMeta("property", "og:locale", "it_IT");
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:image:alt", "Abere Selezione — Importazione e distribuzione vini artigianali");
    upsertMeta("property", "og:logo", ogLogo);

    // Twitter Card
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", TITLE);
    upsertMeta("name", "twitter:description", DESCRIPTION);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "twitter:image:alt", "Abere Selezione");

    // Favicon — remove any existing icon links first, then add ours
    document
      .querySelectorAll("link[rel*='icon']")
      .forEach((el) => el.remove());
    upsertLink("icon", ogLogo, { type: "image/svg+xml" });
    upsertLink("shortcut icon", ogLogo, { type: "image/svg+xml" });
    upsertLink("apple-touch-icon", ogLogo);
  }, []);
}
