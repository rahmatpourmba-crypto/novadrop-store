import { db } from "./db";

export interface Settings {
  [key: string]: string;
}

export function getSettings(): Settings {
  const rows = db.prepare("SELECT key, value FROM settings").all() as Array<{
    key: string;
    value: string;
  }>;
  const s: Settings = {};
  for (const r of rows) s[r.key] = r.value;
  return s;
}

export function setSetting(key: string, value: string) {
  db.prepare(
    `INSERT INTO settings (key, value) VALUES (?, ?)
     ON CONFLICT(key) DO UPDATE SET value = excluded.value`
  ).run(key, value);
}

export function setSettings(values: Record<string, string>) {
  const tx = db.transaction(() => {
    for (const [k, v] of Object.entries(values)) {
      setSetting(k, v);
    }
  });
  tx();
}

export function numSetting(s: Settings, key: string, fallback = 0): number {
  const v = parseFloat(s[key] ?? "");
  return Number.isFinite(v) ? v : fallback;
}
