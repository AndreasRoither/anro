import { ui, defaultLang, type Lang } from "./ui";

export type { Lang };
export { defaultLang, languages } from "./ui";

export function getLocalePaths() {
  return [{ params: { locale: undefined } }, { params: { locale: "de" } }];
}

export function getLang(locale: string | undefined): Lang {
  return locale === "de" ? "de" : "en";
}

export function t(lang: Lang, key: keyof (typeof ui)[typeof defaultLang]): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key];
}

export function localePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
