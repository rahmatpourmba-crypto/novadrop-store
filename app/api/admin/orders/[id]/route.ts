import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/session";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const uid = await getSessionUserId();
  if (!uid) return unauthorized();

  const { id } = await params;
  const existing = await db.get<{ id: string }>("SELECT id FROM orders WHERE id = ?", [id]);
  if (!existing) return NextResponse.json({ error: "Order not found." }, { status: 404 });

  const body = await req.json();
  const status = String(body.status || "");
  const tracking = String(body.tracking ?? "");

  if (status) {
    await db.run("UPDATE orders SET status = ?, updated_at = datetime('now') WHERE id = ?", [
      status,
      id,
    ]);
  }
  if (body.tracking !== undefined) {
    await db.run("UPDATE orders SET tracking = ?, updated_at = datetime('now') WHERE id = ?", [
      tracking,
      id,
    ]);
  }

  return NextResponse.json({ ok: true });
}
