import { en, type Dictionary } from "./dictionaries/en";

export type { Dictionary } from "./dictionaries/en";
import { fa } from "./dictionaries/fa";
import { ar } from "./dictionaries/ar";
import { ckb } from "./dictionaries/ckb";
import { es } from "./dictionaries/es";
import { fr } from "./dictionaries/fr";
import { de } from "./dictionaries/de";
import { ru } from "./dictionaries/ru";
import { tr } from "./dictionaries/tr";
import { zh } from "./dictionaries/zh";

export const languages = [
  { code: "en", name: "English", dir: "ltr" },
  { code: "fa", name: "فارسی", dir: "rtl" },
  { code: "ar", name: "العربية", dir: "rtl" },
  { code: "ckb", name: "کوردی سۆرانی", dir: "rtl" },
  { code: "es", name: "Español", dir: "ltr" },
  { code: "fr", name: "Français", dir: "ltr" },
  { code: "de", name: "Deutsch", dir: "ltr" },
  { code: "ru", name: "Русский", dir: "ltr" },
  { code: "tr", name: "Türkçe", dir: "ltr" },
  { code: "zh", name: "中文", dir: "ltr" },
] as const;

export type Lang = (typeof languages)[number]["code"];
export type Direction = "ltr" | "rtl";

export const DEFAULT_LANG: Lang = "en";

export function isLang(code: string): code is Lang {
  return languages.some((l) => l.code === code);
}

export function getDir(lang: Lang): Direction {
  return languages.find((l) => l.code === lang)?.dir ?? "ltr";
}

export const dictionaries: Record<Lang, Dictionary> = {
  en,
  fa,
  ar,
  ckb,
  es,
  fr,
  de,
  ru,
  tr,
  zh,
};

export type T = (key: string, vars?: Record<string, string | number>) => string;

export function translate(
  dict: Dictionary,
  key: string,
  vars?: Record<string, string | number>
): string {
  const parts = key.split(".");
  let node: unknown = dict;
  for (const part of parts) {
    if (node && typeof node === "object" && part in node) {
      node = (node as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }
  if (typeof node !== "string") return key;
  if (!vars) return node;
  return node.replace(/\{(\w+)\}/g, (match, name: string) =>
    vars[name] != null ? String(vars[name]) : match
  );
}

export function makeT(dict: Dictionary): T {
  return (key, vars) => translate(dict, key, vars);
}
