"use client";

import { motion, AnimatePresence } from "framer-motion";
import { tokens } from "@/tokens/colors";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrialModal({ isOpen, onClose }: ModalProps) {
  const [email, setEmail] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md p-10 rounded-2xl border overflow-hidden shadow-2xl"
            style={{ 
              backgroundColor: tokens.colors.bgCard,
              borderColor: tokens.colors.border
            }}
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20" style={{ backgroundColor: tokens.colors.accentPrimary }} />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 opacity-50 hover:opacity-100 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4ade80]"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10 space-y-6 text-center">
              <div className="inline-block p-4 rounded-2xl bg-[#4ade80]/10 mb-2">
                <svg className="w-8 h-8 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="h3" style={{ color: tokens.colors.textPrimary }}>
                Start your 14-day free trial
              </h3>
              <p className="text-caption opacity-60" style={{ color: tokens.colors.textSecondary }}>
                No credit card required. Get instant access to all premium cloud optimization features.
              </p>

              <div className="space-y-4 pt-4">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border bg-white/5 outline-none transition-all focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80]"
                  style={{ borderColor: tokens.colors.border, color: tokens.colors.textPrimary }}
                />
                <button
                  onClick={() => {
                    if (email) {
                      alert(`Starting trial for: ${email}`);
                      onClose();
                    }
                  }}
                  className="w-full py-4 font-bold uppercase tracking-widest rounded-xl transition-all hover:opacity-90 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4ade80] focus-visible:outline-offset-2"
                  style={{ backgroundColor: tokens.colors.accentPrimary, color: "#000" }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
