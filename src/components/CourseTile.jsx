"use client";

import { motion } from "framer-motion";
import { BookOpen, Code2, Frame, Zap, Database, Activity, Layout, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const iconMap = {
  BookOpen, Code2, Framer: Frame, Zap, Database, Activity, Layout, Terminal
};

export default function CourseTile({ course }) {
  const Icon = iconMap[course.icon_name] || BookOpen;
  
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar from 0 to value after mount
    const timer = setTimeout(() => {
      setProgress(course.progress);
    }, 500);
    return () => clearTimeout(timer);
  }, [course.progress]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0 }
      }}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative flex flex-col p-6 lg:p-8 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl overflow-hidden group cursor-pointer shadow-lg"
    >
      {/* Background Subtle Gradient Mesh for the card itself */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Hover border glow effect */}
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-0 rounded-[2rem] shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)] pointer-events-none"
      />

      <motion.div
        variants={{
          rest: { scale: 1, y: 0 },
          hover: { scale: 1.04, y: -4 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative z-10 flex flex-col h-full"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 flex items-center justify-center border border-zinc-700/50 shadow-inner group-hover:bg-accent/20 group-hover:border-accent/40 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
            <Icon className="w-6 h-6 text-zinc-300 group-hover:text-accent transition-colors duration-300" />
          </div>
          <span className="text-xs font-mono font-medium text-zinc-400 bg-zinc-950/50 border border-zinc-800 px-3 py-1.5 rounded-full shadow-sm">
            {course.progress}%
          </span>
        </div>

        <h3 className="text-xl font-bold text-zinc-100 mb-8 flex-1 leading-snug group-hover:text-white transition-colors">
          {course.title}
        </h3>

        {/* Animated Progress Bar */}
        <div className="w-full h-2 bg-zinc-800/80 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
          >
            {/* Glossy highlight on progress bar */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/20 rounded-t-full" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
