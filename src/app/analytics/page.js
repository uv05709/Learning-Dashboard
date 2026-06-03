import { BarChart2 } from "lucide-react";

export const metadata = {
  title: "Analytics | Next-Gen Learning",
};

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[500px] p-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="w-20 h-20 bg-accent-secondary/10 text-accent-secondary rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-accent-secondary/20">
        <BarChart2 className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-bold text-white mb-4">Detailed Analytics</h1>
      <p className="text-zinc-400 max-w-md text-lg">
        This is a placeholder page for your learning analytics. Your progress graphs will appear here.
      </p>
    </div>
  );
}
