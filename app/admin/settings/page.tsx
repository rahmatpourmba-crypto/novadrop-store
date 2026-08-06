import { getSettings } from "@/lib/settings";
import SettingsForm from "../components/SettingsForm";

export const dynamic = "force-dynamic";

export default function AdminSettingsPage() {
  const settings = getSettings();
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mt-1 text-sm text-gray-500">
        Configure your store, shipping, and crypto payment wallets
      </p>
      <SettingsForm settings={settings} />
    </div>
  );
}
