"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export function FreeTrialModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            aria-label="Close modal"
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Start free trial"
            className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-background shadow-[var(--shadow-modal)]"
            initial={
              reduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
            }
          >
            <div className="absolute inset-0 bg-aurora opacity-40" />
            <div className="relative border-b border-white/10 px-6 py-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Start your free trial
                  </div>
                  <div className="mt-1 text-sm text-foreground/70">
                    Get a working sandbox in under a minute.
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 transition hover:bg-white/10 hover:text-foreground"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="relative px-6 py-6">
              <form
                className="grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  onClose();
                }}
              >
                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-foreground/80">Work email</span>
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-white/20 focus:bg-white/7"
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-foreground/80">Company</span>
                  <input
                    required
                    type="text"
                    placeholder="Company name"
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-white/20 focus:bg-white/7"
                  />
                </label>

                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-foreground/80 transition hover:bg-white/10 hover:text-foreground"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400/90 via-cyan-300/80 to-violet-400/90 px-5 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.22)] transition hover:brightness-110"
                  >
                    Create sandbox
                  </button>
                </div>
              </form>

              <p className="mt-5 text-xs text-foreground/55">
                By continuing, you agree to receive onboarding emails. No spam —
                unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

