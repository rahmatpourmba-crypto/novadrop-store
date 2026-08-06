import { cookies } from "next/headers";
import {
  DEFAULT_LANG,
  dictionaries,
  isLang,
  makeT,
  type Lang,
} from "./core";

export const LANG_COOKIE = "nova_lang";

export async function getLang(): Promise<Lang> {
  const cookie = (await cookies()).get(LANG_COOKIE)?.value;
  return cookie && isLang(cookie) ? cookie : DEFAULT_LANG;
}

export async function getT() {
  const lang = await getLang();
  return makeT(dictionaries[lang]);
}
