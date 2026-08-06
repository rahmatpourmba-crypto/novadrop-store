import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { destroySession } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function POST() {
  const store = await cookies();
  const token = store.get("admin_token")?.value;
  if (token) await destroySession(token);
  store.delete("admin_token");
  return NextResponse.json({ ok: true });
}
