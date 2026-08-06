import crypto from "node:crypto";
import { cookies } from "next/headers";
import { db } from "./db";

const SESSION_COOKIE = "admin_token";
const SESSION_DAYS = 7;

export function createSession(adminUserId: number): string {
  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + SESSION_DAYS * 86400_000)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  db.prepare("INSERT INTO sessions (token, admin_user_id, expires_at) VALUES (?, ?, ?)").run(
    token,
    adminUserId,
    expires
  );
  return token;
}

export async function getSessionUserId(): Promise<number | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const row = db
    .prepare(
      `SELECT admin_user_id FROM sessions
       WHERE token = ? AND expires_at > datetime('now')`
    )
    .get(token) as { admin_user_id: number } | undefined;
  return row ? row.admin_user_id : null;
}

export async function isAdmin(): Promise<boolean> {
  return (await getSessionUserId()) !== null;
}

export function destroySession(token: string) {
  db.prepare("DELETE FROM sessions WHERE token = ?").run(token);
}

export function destroyAllSessionsForUser(userId: number) {
  db.prepare("DELETE FROM sessions WHERE admin_user_id = ?").run(userId);
}
