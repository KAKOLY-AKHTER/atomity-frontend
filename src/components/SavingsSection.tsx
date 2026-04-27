"use client";

import { useSavingsData } from "@/hooks/useSavingsData";
import { SavingsTotalBanner } from "./SavingsTotalBanner";
import { SavingsCard } from "./SavingsCard";
import { SkeletonCard } from "./SkeletonCard";
import { motion } from "framer-motion";
import { tokens } from "@/tokens/colors";

// Abstract cloud particle / network nodes effect (Theme aware)
const NetworkBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-accent-primary/10 rounded-full blur-[150px] opacity-[0.05]" />
    
    <svg className="absolute inset-0 w-full h-full opacity-[0.03] sm:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="network-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          <path d="M 2 2 L 102 102 M 102 2 L 2 102" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#network-pattern)" className="text-accent-primary" />
    </svg>
  </div>
);

export function SavingsSection() {
  const { data, isLoading, isError } = useSavingsData();

  return (
    <section 
      id="savings" 
      aria-labelledby="savings-heading"
      className="relative py-16 lg:py-20 px-6 border-t overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: tokens.colors.bgPrimary, borderColor: tokens.colors.border }}
    >
      <NetworkBackground />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Standardized Title Size */}
        <div className="text-center mb-10 lg:mb-12 space-y-4">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             id="savings-heading"
             className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mx-auto max-w-4xl"
             style={{ color: tokens.colors.textPrimary }}
           >
             Maximize your <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent-primary to-accent-primary/50">
               Cloud Efficiency
             </span>
           </motion.h2>
           <p className="max-w-xl mx-auto opacity-60 text-sm md:text-base font-medium" style={{ color: tokens.colors.textSecondary }}>
             Professional FinOps recommendations to reduce your cloud waste instantly.
           </p>
        </div>

        {/* Highlight Banner */}
        <div className="w-full max-w-3xl mb-16">
          {data ? <SavingsTotalBanner totalSavings={data.totalMonthlySavings} /> : null}
        </div>

        {/* 2x2 Grid */}
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            ) : isError ? (
              <div className="col-span-full py-12 text-center border border-white/10 rounded-2xl">
                <p className="text-sm font-bold" style={{ color: tokens.colors.accentDanger }}>Error connecting to data source.</p>
              </div>
            ) : (
              data?.recommendations.map((rec, index) => (
                <SavingsCard
                  key={rec.id}
                  title={rec.title}
                  description={rec.description}
                  savings={rec.savings}
                  index={index}
                />
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
