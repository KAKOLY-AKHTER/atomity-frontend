"use client";

import { useSavingsData } from "@/hooks/useSavingsData";
import { SavingsTotalBanner } from "./SavingsTotalBanner";
import { SavingsCard } from "./SavingsCard";
import { ClusterDiagram } from "./ClusterDiagram";
import { SkeletonCard } from "./SkeletonCard";
import { motion, AnimatePresence } from "framer-motion";
import { tokens } from "@/tokens/colors";
import { useState } from "react";

export function SavingsSection() {
  const { data, isLoading, isError, refetch } = useSavingsData();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const multiplier = billingCycle === "yearly" ? 12 : 1;

  return (
    <section 
      id="savings" 
      aria-labelledby="savings-heading"
      className="relative py-32 px-6 bg-grid-subtle border-t overflow-hidden"
      style={{ backgroundColor: tokens.colors.bgPrimary, borderColor: tokens.colors.border }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Balanced Header */}
        <div className="text-center mb-24 space-y-8">
           <div className="flex flex-col items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 rounded-md border text-[10px] font-black uppercase tracking-widest"
                style={{ 
                  backgroundColor: "rgba(74, 222, 128, 0.05)",
                  borderColor: "rgba(74, 222, 128, 0.15)",
                  color: tokens.colors.accentPrimary
                }}
              >
                ROI ENGINE
              </motion.div>
              
              <h2
                id="savings-heading"
                className="text-4xl md:text-6xl font-black tracking-tighter leading-none mx-auto max-w-3xl"
                style={{ color: tokens.colors.textPrimary }}
              >
                Maximize your <span style={{ color: tokens.colors.accentPrimary }}>Cloud Efficiency</span>
              </h2>
           </div>

           {/* Billing Cycle Toggle - Centered */}
           <div className="flex bg-white/5 p-1 rounded-xl border mx-auto w-fit" style={{ borderColor: tokens.colors.border }}>
              <button 
                onClick={() => setBillingCycle("monthly")}
                className="px-8 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all"
                style={{ 
                   backgroundColor: billingCycle === "monthly" ? tokens.colors.accentPrimary : "transparent",
                   color: billingCycle === "monthly" ? "#000" : tokens.colors.textSecondary
                }}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingCycle("yearly")}
                className="px-8 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all"
                style={{ 
                   backgroundColor: billingCycle === "yearly" ? tokens.colors.accentPrimary : "transparent",
                   color: billingCycle === "yearly" ? "#000" : tokens.colors.textSecondary
                }}
              >
                Yearly
              </button>
           </div>
        </div>

        {/* Balanced Grid: 6/6 split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Integrated Diagram - Perfectly Balanced */}
          <div className="relative order-2 lg:order-1">
             <div className="absolute inset-0 rounded-full blur-[120px] pointer-events-none opacity-10" style={{ backgroundColor: tokens.colors.accentPrimary }} />
             <div className="max-w-md mx-auto">
                <ClusterDiagram />
             </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            {data ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={billingCycle}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex justify-center lg:justify-start"
                >
                  <SavingsTotalBanner totalSavings={data.totalMonthlySavings * multiplier} />
                </motion.div>
              </AnimatePresence>
            ) : null}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {isLoading ? (
                <div role="status" aria-live="polite" aria-label="Loading savings data" className="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
                </div>
              ) : isError ? (
                <div className="col-span-full py-12 text-center border-2 rounded-2xl" style={{ borderColor: tokens.colors.border }}>
                  <p className="mb-4 text-sm font-bold" style={{ color: tokens.colors.accentDanger }}>Error connecting to data source.</p>
                  <button onClick={() => refetch()} className="min-h-[44px] px-8 py-3 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">Retry Connection</button>
                </div>
              ) : (
                data?.recommendations.map((rec, index) => (
                  <motion.div key={rec.id + billingCycle}>
                    <SavingsCard
                      title={rec.title}
                      description={rec.description}
                      savings={rec.savings * multiplier}
                      index={index}
                    />
                  </motion.div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
