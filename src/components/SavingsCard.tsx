"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { tokens } from "@/tokens/colors";

interface SavingsCardProps {
  title: string;
  description: string;
  savings: number;
  index: number;
}

// Minimal modern line icon
const GlowIcon = () => (
  <div className="relative flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-lg lg:rounded-xl bg-accent-primary/10 border border-accent-primary/20">
    <svg className="w-4 h-4 lg:w-5 h-5" style={{ color: tokens.colors.accentPrimary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
    <div className="absolute inset-0 bg-accent-primary rounded-lg lg:rounded-xl blur-md opacity-20 pointer-events-none" />
  </div>
);

export function SavingsCard({ title, description, savings, index }: SavingsCardProps) {
  const { ref, isInView } = useInView({ once: true, margin: "-50px" });
  const displayValue = useCountUp(savings, isInView, 1.8);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className="group relative flex flex-col justify-between p-5 lg:p-8 h-full rounded-xl lg:rounded-2xl border transition-all duration-300"
      style={{ 
        backgroundColor: tokens.colors.bgCard,
        borderColor: tokens.colors.border,
        backdropFilter: "blur(12px)"
      }}
    >
      <div className="space-y-4 lg:space-y-5">
        <div className="flex items-start gap-3 lg:gap-4">
          <GlowIcon />
          <div className="space-y-1">
             <h4 className="text-base lg:text-lg font-bold tracking-tight leading-tight" style={{ color: tokens.colors.textPrimary }}>
               {title}
             </h4>
             <p className="text-[11px] lg:text-sm opacity-60 leading-relaxed font-medium" style={{ color: tokens.colors.textSecondary }}>
               {description}
             </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t flex items-center justify-between" style={{ borderColor: tokens.colors.border }}>
         <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest opacity-40" style={{ color: tokens.colors.textSecondary }}>Potential</span>
         <div className="flex items-baseline gap-0.5 lg:gap-1">
           <span className="text-sm lg:text-lg font-bold" style={{ color: tokens.colors.accentPrimary }}>$</span>
           <span className="text-xl lg:text-2xl font-black tracking-tighter" style={{ color: tokens.colors.accentPrimary }}>
             {displayValue.toLocaleString()}
           </span>
         </div>
      </div>

      {/* Hover effects - Hidden/simplified on small touch devices */}
      <div className="hidden lg:block absolute inset-0 rounded-2xl ring-1 ring-accent-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
      <div className="hidden lg:block absolute -inset-0.5 bg-gradient-to-br from-accent-primary/0 via-accent-primary/0 to-accent-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />
    </motion.article>
  );
}
