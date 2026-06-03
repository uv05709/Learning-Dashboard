import { Settings } from "lucide-react";

export const metadata = {
  title: "Settings | Next-Gen Learning",
};

export default function SettingsPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[500px] p-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="w-20 h-20 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(249,115,22,0.3)] border border-orange-500/20">
        <Settings className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-bold text-white mb-4">Account Settings</h1>
      <p className="text-zinc-400 max-w-md text-lg">
        This is a placeholder page for your dashboard preferences and account management.
      </p>
    </div>
  );
}
