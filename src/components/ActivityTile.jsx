"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { useMemo } from "react";

export default function ActivityTile() {
  // Generate mock contribution data (14 columns x 5 rows)
  const cols = 14;
  const rows = 5;
  const grid = useMemo(() => {
    return Array.from({ length: cols * rows }).map((_, i) => {
      // Create some cluster patterns
      const isActive = Math.random() > 0.6;
      let intensity = 0;
      if (isActive) {
        intensity = Math.floor(Math.random() * 4) + 1; // 1 to 4
      }
      return { id: i, intensity };
    });
  }, []);

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 1: return "bg-accent/30";
      case 2: return "bg-accent/60";
      case 3: return "bg-accent/80";
      case 4: return "bg-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]";
      default: return "bg-zinc-800/50";
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="relative col-span-1 md:col-span-2 lg:col-span-1 row-span-1 p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between min-h-[200px] overflow-hidden group"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex items-center justify-between mb-4">
        <h3 className="font-semibold text-zinc-100 flex items-center gap-2">
          <Activity className="w-4 h-4 text-accent-secondary" />
          Activity
        </h3>
        <span className="text-xs text-zinc-500 font-medium">Last 70 days</span>
      </div>
      
      <div className="relative z-10 flex items-end justify-center w-full mt-auto">
        <div 
          className="grid gap-1 sm:gap-1.5" 
          style={{ 
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
          }}
        >
          {grid.map((cell, i) => (
            <motion.div
              key={cell.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20, 
                delay: (i % cols) * 0.02 + Math.floor(i / cols) * 0.02 
              }}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-sm ${getIntensityColor(cell.intensity)} hover:ring-2 hover:ring-white/50 transition-all cursor-pointer`}
              title={`${cell.intensity * 2} contributions on this day`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
