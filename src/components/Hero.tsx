"use client";

import { motion, useReducedMotion } from "framer-motion";
import { tokens } from "@/tokens/colors";
import { useState } from "react";
import { TrialModal } from "./TrialModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth"
      });
    }
  };

  const fadeUp = {
    hidden: { y: shouldReduceMotion ? 0 : 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section 
      className="relative pt-40 pb-20 px-6 text-center bg-grid-subtle overflow-hidden"
    >
      <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <motion.div 
          animate={shouldReduceMotion ? {} : { 
            scale: [1, 1.1, 1], 
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] bg-[#4ade80]"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border bg-white/5 backdrop-blur-md"
          style={{ borderColor: tokens.colors.border }}
        >
          <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4ade80]">
            v2.4 Engine Now Live
          </span>
        </motion.div>

        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="text-balance"
          style={{ color: tokens.colors.textPrimary }}
        >
          Automate your <br />
          <span className="relative inline-block text-[#4ade80] mt-4 italic">
            Cloud Savings
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               transition={{ delay: 1, duration: 1 }}
               className="absolute -bottom-2 left-0 h-1.5 bg-[#4ade80]/30 rounded-full"
            />
          </span>
        </motion.h1>

        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto opacity-70 leading-relaxed font-medium"
          style={{ color: tokens.colors.textSecondary }}
        >
          Atomity provides real-time workload routing and automated rightsizing for 
          mission-critical infrastructure. Eliminate waste without affecting performance 
          or reliability.
        </motion.p>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-10 py-5 bg-[#4ade80] text-black font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl shadow-[#4ade80]/20 hover:scale-105 active:scale-95 transition-all"
          >
            Get Started Free
          </button>
          <button 
            onClick={() => handleSmoothScroll('dashboard-preview')}
            className="w-full sm:w-auto px-10 py-5 border-2 border-white/10 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-all"
            style={{ color: tokens.colors.textPrimary }}
          >
            Explore Platform
          </button>
        </motion.div>
      </div>
    </section>
  );
}
