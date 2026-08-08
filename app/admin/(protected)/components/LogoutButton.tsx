"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={logout}
      className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-200 transition hover:bg-gray-700"
    >
      Log out
    </button>
  );
}
