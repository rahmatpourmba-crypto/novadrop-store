import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { setSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

const ALLOWED_KEYS = [
  "store_name",
  "store_tagline",
  "store_email",
  "support_email",
  "currency",
  "shipping_fee",
  "free_shipping_threshold",
  "nowpayments_api_key",
  "nowpayments_ipn_secret",
  "supplier_email",
  "auto_approve_manual",
  "address_btc",
  "address_eth",
  "address_usdt_trc20",
  "address_ltc",
  "exchange_btc",
  "exchange_eth",
  "exchange_usdt",
  "exchange_ltc",
  "cj_api_key",
  "cj_from_country",
  "cj_logistic_name",
  "cj_pay_type",
  "welcome_note",
  "order_email_subject",
  "order_email_body",
];

export async function POST(req: Request) {
  const uid = await getSessionUserId();
  if (!uid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const updates: Record<string, string> = {};
    for (const key of ALLOWED_KEYS) {
      if (typeof body[key] === "string" || typeof body[key] === "number") {
        updates[key] = String(body[key]);
      }
    }
    await setSettings(updates);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not save settings." }, { status: 500 });
  }
}
