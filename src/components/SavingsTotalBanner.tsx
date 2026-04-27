"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { tokens } from "@/tokens/colors";

export function SavingsTotalBanner({ totalSavings }: { totalSavings: number }) {
  const { ref, isInView } = useInView({ once: true, margin: "-50px" });
  const displayValue = useCountUp(totalSavings, isInView, 1.5);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl border relative overflow-hidden transition-all duration-500"
      style={{ 
        backgroundColor: "color-mix(in srgb, var(--color-accent-primary) 5%, transparent)", 
        borderColor: "color-mix(in srgb, var(--color-accent-primary) 20%, transparent)"
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-3 sm:space-y-4">
        <h3 className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-80" style={{ color: tokens.colors.accentPrimary }}>
          Estimated Monthly Savings
        </h3>
        
        <div className="flex items-start justify-center gap-1 sm:gap-2">
          <span className="text-2xl sm:text-4xl md:text-5xl font-bold mt-1 sm:mt-2" style={{ color: tokens.colors.accentPrimary }}>$</span>
          <span 
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none" 
            style={{ 
              color: tokens.colors.accentPrimary,
            }}
          >
            {displayValue.toLocaleString()}
          </span>
        </div>
      </div>
      
      <div className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 w-32 sm:w-64 h-32 sm:h-64 bg-accent-primary rounded-full blur-[60px] sm:blur-[100px] opacity-[0.1]" />
    </motion.div>
  );
}
