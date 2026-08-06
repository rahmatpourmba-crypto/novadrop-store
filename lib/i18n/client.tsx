"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { getDir, makeT, type Dictionary, type Direction, type Lang, type T } from "./core";

interface I18nContextValue {
  lang: Lang;
  dir: Direction;
  t: T;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  lang,
  dict,
  children,
}: {
  lang: Lang;
  dict: Dictionary;
  children: ReactNode;
}) {
  const value = useMemo<I18nContextValue>(
    () => ({ lang, dir: getDir(lang), t: makeT(dict) }),
    [lang, dict]
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT(): T {
  return useI18n().t;
}
