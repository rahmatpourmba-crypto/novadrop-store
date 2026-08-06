import { NextResponse } from "next/server";
import { DEFAULT_LANG, isLang } from "@/lib/i18n/core";
import { LANG_COOKIE } from "@/lib/i18n/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const lang =
    body && typeof body.lang === "string" && isLang(body.lang)
      ? body.lang
      : DEFAULT_LANG;

  const res = NextResponse.json({ ok: true, lang });
  res.cookies.set(LANG_COOKIE, lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}
