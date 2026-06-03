"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function HeroTile() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0 }
      }}
      whileHover="hover"
      className="relative col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 p-8 lg:p-10 rounded-[2rem] bg-gradient-to-br from-zinc-800/90 to-zinc-950 border border-zinc-800 overflow-hidden group shadow-2xl"
    >
      {/* Dynamic Background Glows */}
      <motion.div 
        variants={{
          hover: { opacity: 0.4, scale: 1.1 }
        }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 p-8 opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none"
      >
        <div className="w-[300px] h-[300px] bg-accent rounded-full blur-[120px]" />
      </motion.div>

      <motion.div 
        variants={{
          hover: { opacity: 0.3, scale: 1.2 }
        }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 p-8 opacity-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"
      >
        <div className="w-[250px] h-[250px] bg-accent-secondary rounded-full blur-[100px]" />
      </motion.div>

      <div className="relative z-10 flex flex-col justify-center h-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Welcome back, <br className="hidden md:block lg:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary drop-shadow-sm">Alex</span>!
          </h1>
          <p className="text-zinc-400 text-lg mb-8 max-w-lg leading-relaxed">
            You're making incredible progress. Keep up the momentum on your <strong className="text-zinc-200">Advanced React Patterns</strong> course.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-4 bg-zinc-900/60 backdrop-blur-xl px-5 py-3 rounded-2xl border border-zinc-700/50 w-max shadow-lg group-hover:border-zinc-600 transition-colors"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/20 text-orange-500">
            {/* Animated pulsing ring */}
            <div className="absolute inset-0 bg-orange-500/30 rounded-full animate-ping opacity-75" />
            <Flame className="w-5 h-5 relative z-10" />
          </div>
          <div>
            <div className="text-base font-bold text-zinc-100 flex items-center gap-2">
              12 Day Streak
              <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            </div>
            <div className="text-sm text-zinc-400">Consistent learning</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
