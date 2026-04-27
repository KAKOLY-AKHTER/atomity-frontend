"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tokens } from "@/tokens/colors";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Intelligence", href: "#dashboard-preview" },
  { name: "Metrics", href: "#metrics" },
  { name: "ROI Engine", href: "#savings" },
  { name: "Security", href: "#metrics" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4 backdrop-blur-xl border-b" : "py-6"
      }`}
      style={{ 
        backgroundColor: isScrolled ? "color-mix(in srgb, var(--color-bg-primary) 80%, transparent)" : "transparent",
        borderColor: isScrolled ? tokens.colors.border : "transparent"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="h-8 w-8 rounded-lg bg-accent-primary shadow-lg shadow-accent-primary/20 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-black tracking-tighter" style={{ color: tokens.colors.textPrimary }}>
            ATOMITY
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-[11px] font-black uppercase tracking-widest transition-all hover:text-accent-primary"
              style={{ color: tokens.colors.textPrimary, opacity: 0.6 }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            style={{ color: tokens.colors.textPrimary }} // Fixed icon visibility
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button className="hidden sm:block px-6 py-2.5 bg-accent-primary rounded-xl font-black text-[10px] uppercase tracking-widest text-black shadow-lg shadow-accent-primary/20 hover:scale-105 active:scale-95 transition-all">
            Access Console
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: tokens.colors.textPrimary }} // Fixed icon visibility
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t"
            style={{ backgroundColor: tokens.colors.bgCard, borderColor: tokens.colors.border }}
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-[12px] font-black uppercase tracking-widest"
                  style={{ color: tokens.colors.textPrimary }}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-4 bg-accent-primary rounded-xl font-black text-xs uppercase tracking-widest text-black">
                Access Console
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
