"use client";

import { motion, useReducedMotion } from "framer-motion";
import { tokens } from "@/tokens/colors";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

interface SavingsTotalBannerProps {
  totalSavings: number;
}

export function SavingsTotalBanner({ totalSavings }: SavingsTotalBannerProps) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, isInView } = useInView({ once: true, margin: "-100px" });
  const displayValue = useCountUp(totalSavings, isInView, 1.8);

  return (
    <div 
      ref={ref} 
      className="flex flex-col items-center lg:items-end text-center lg:text-right"
      aria-label={`$${totalSavings.toLocaleString()} estimated monthly savings`}
    >
      <span 
        className="text-caption font-bold uppercase tracking-[0.3em] mb-4 block"
        style={{ color: tokens.colors.accentPrimary }}
      >
        Estimated Monthly Savings
      </span>
      <div className="flex items-baseline gap-2 relative">
        <span 
          className="text-4xl md:text-5xl font-bold opacity-30 select-none"
          aria-hidden="true"
          style={{ color: tokens.colors.textPrimary }}
        >
          $
        </span>
        <motion.span 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold tracking-tighter"
          style={{ color: tokens.colors.textPrimary }}
        >
          {displayValue.toLocaleString()}
        </motion.span>
      </div>
    </div>
  );
}
