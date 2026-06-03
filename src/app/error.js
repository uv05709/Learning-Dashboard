"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Dashboard Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px] p-6 text-zinc-300">
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 max-w-md w-full flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-xl font-bold text-zinc-100 mb-3">Something went wrong</h2>
        <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
          {error.message || "An unexpected error occurred while loading your dashboard."}
        </p>
        <button
          onClick={() => reset()}
          className="flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-full font-semibold hover:bg-white transition-colors duration-200"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    </div>
  );
}
