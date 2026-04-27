"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tokens } from "@/tokens/colors";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

interface NavLink {
  name: string;
  id: string;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["overview", "intelligence", "metrics", "savings"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth"
      });
    }
  };

  const navLinks: NavLink[] = [
    { name: "Intelligence", id: "intelligence" },
    { name: "Metrics", id: "metrics" },
    { name: "ROI Engine", id: "savings" },
    { name: "Security", id: "footer" },
  ];

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 border-b transition-all duration-500"
      style={{ 
        backgroundColor: scrolled ? "color-mix(in srgb, var(--color-bg-primary) 85%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderColor: scrolled ? tokens.colors.border : "transparent"
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between" aria-label="Main Navigation">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="h-7 w-7 rounded bg-[#4ade80] transition-transform group-hover:rotate-90" aria-hidden="true" />
          <span className="text-xl font-black tracking-tighter" style={{ color: tokens.colors.textPrimary }}>
            ATOMITY
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => handleSmoothScroll(link.id)}
              className="text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-[#4ade80] px-2 py-1 relative"
              style={{ 
                color: activeSection === link.id ? tokens.colors.accentPrimary : tokens.colors.textSecondary 
              }}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-2 right-2 h-0.5 bg-[#4ade80]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => handleSmoothScroll('savings')}
            className="hidden sm:block px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#4ade80]/10"
            style={{ 
              backgroundColor: tokens.colors.accentPrimary,
              color: "#000" 
            }}
          >
            Access Console
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex flex-col justify-center gap-1.5"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block" 
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block" 
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block" 
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t overflow-hidden"
            style={{ backgroundColor: tokens.colors.bgPrimary, borderColor: tokens.colors.border }}
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => handleSmoothScroll(link.id)}
                  className="text-xs font-black uppercase tracking-widest text-left"
                  style={{ color: activeSection === link.id ? tokens.colors.accentPrimary : tokens.colors.textSecondary }}
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-4 pt-6 border-t" style={{ borderColor: tokens.colors.border }}>
                <button 
                  onClick={() => handleSmoothScroll('savings')}
                  className="w-full py-4 rounded-xl text-[11px] font-black uppercase tracking-widest text-center"
                  style={{ backgroundColor: tokens.colors.accentPrimary, color: "#000" }}
                >
                  Access Console
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
