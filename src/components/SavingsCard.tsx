"use client";

import { tokens } from "@/tokens/colors";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

interface SavingsCardProps {
  title: string;
  description: string;
  savings: number;
  index: number;
}

export function SavingsCard({ title, description, savings, index }: SavingsCardProps) {
  const { ref, isInView } = useInView({ once: true, margin: "-50px" });
  const displayValue = useCountUp(savings, isInView, 1.8);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      aria-label={`${title}: $${savings.toLocaleString()} per month`}
      className="dashboard-card group relative overflow-hidden h-full flex flex-col justify-between"
    >
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
             <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#4ade80]">
               Optimization
             </h3>
             <h4 className="text-lg font-bold tracking-tight" style={{ color: tokens.colors.textPrimary }}>
               {title}
             </h4>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-[#4ade80]/20 transition-colors">
             <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:text-[#4ade80] transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
             </svg>
          </div>
        </div>
        
        <p className="text-sm leading-relaxed opacity-60" style={{ color: tokens.colors.textSecondary }}>
          {description}
        </p>
        
        <div className="pt-6 border-t" style={{ borderColor: tokens.colors.border }}>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black tracking-tighter" style={{ color: tokens.colors.textPrimary }}>
              ${displayValue.toLocaleString()}
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest opacity-30">
              Monthly Potential
            </span>
          </div>
        </div>
      </div>
      
      {/* Subtle Hover Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#4ade80] rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity" />
    </motion.article>
  );
}
