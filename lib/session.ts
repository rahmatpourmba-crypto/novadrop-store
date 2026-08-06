import crypto from "node:crypto";
import { cookies } from "next/headers";
import { db } from "./db";

const SESSION_COOKIE = "admin_token";
const SESSION_DAYS = 7;

export async function createSession(adminUserId: number): Promise<string> {
  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + SESSION_DAYS * 86400_000)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  await db.run("INSERT INTO sessions (token, admin_user_id, expires_at) VALUES (?, ?, ?)", [
    token,
    adminUserId,
    expires,
  ]);
  return token;
}

export async function getSessionUserId(): Promise<number | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const row = await db.get<{ admin_user_id: number }>(
    `SELECT admin_user_id FROM sessions
     WHERE token = ? AND expires_at > datetime('now')`,
    [token]
  );
  return row ? row.admin_user_id : null;
}

export async function isAdmin(): Promise<boolean> {
  return (await getSessionUserId()) !== null;
}

export async function destroySession(token: string) {
  await db.run("DELETE FROM sessions WHERE token = ?", [token]);
}

export async function destroyAllSessionsForUser(userId: number) {
  await db.run("DELETE FROM sessions WHERE admin_user_id = ?", [userId]);
}
