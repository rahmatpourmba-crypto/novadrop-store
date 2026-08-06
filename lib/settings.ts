import { db } from "./db";

export interface Settings {
  [key: string]: string;
}

export async function getSettings(): Promise<Settings> {
  const rows = await db.all<{ key: string; value: string }>(
    'SELECT "key", value FROM settings'
  );
  const s: Settings = {};
  for (const r of rows) s[r.key] = r.value;
  return s;
}

export async function setSetting(key: string, value: string) {
  await db.run(
    `INSERT INTO settings ("key", value) VALUES (?, ?)
     ON CONFLICT("key") DO UPDATE SET value = excluded.value`,
    [key, value]
  );
}

export async function setSettings(values: Record<string, string>) {
  for (const [k, v] of Object.entries(values)) {
    await setSetting(k, v);
  }
}

export function numSetting(s: Settings, key: string, fallback = 0): number {
  const v = parseFloat(s[key] ?? "");
  return Number.isFinite(v) ? v : fallback;
}
