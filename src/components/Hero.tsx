"use client";

import { motion } from "framer-motion";
import { tokens } from "@/tokens/colors";
import { useState } from "react";
import { TrialModal } from "./TrialModal";

const trustedCompanies = ["Amazon", "Google Cloud", "Microsoft", "DigitalOcean", "Kubernetes"];

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section 
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 px-6 text-center overflow-hidden"
      style={{ backgroundColor: tokens.colors.bgPrimary }}
    >
      <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 bg-grid-subtle opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />
      </div>

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        {/* Modern Glass Badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border bg-white/[0.03] backdrop-blur-md"
          style={{ borderColor: tokens.colors.border }}
        >
          <span className="flex h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80" style={{ color: tokens.colors.textPrimary }}>
            Engine V2.4 Now Live
          </span>
          <div className="h-4 w-[1px] bg-white/10 mx-1" />
          <span className="text-[10px] font-bold opacity-40" style={{ color: tokens.colors.textSecondary }}>
            View Changelog →
          </span>
        </motion.div>

        {/* Standardized Title Size */}
        <div className="space-y-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white"
          >
            The Operating System <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent-primary to-accent-primary/50">
              for Cloud Efficiency
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-base lg:text-lg opacity-60 leading-relaxed font-medium"
            style={{ color: tokens.colors.textSecondary }}
          >
            Atomity automates cloud rightsizing and workload routing to eliminate 
            waste and reduce your AWS bill by up to 60% instantly.
          </motion.p>
        </div>

        {/* Premium CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative px-8 py-4 bg-accent-primary rounded-xl font-black text-xs uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            Get Started Free
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-black text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-all">
            Book a Demo
          </button>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="pt-20 space-y-8"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
            Trusted by the world's most innovative teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:opacity-50 transition-opacity">
            {trustedCompanies.map((company) => (
              <span key={company} className="text-lg md:text-xl font-bold tracking-tighter italic">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
