"use client";

import { tokens } from "@/tokens/colors";

export function Footer() {
  return (
    <footer 
      className="py-20 px-6 border-t"
      style={{ backgroundColor: tokens.colors.bgPrimary, borderColor: tokens.colors.border }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-[#4ade80]" />
            <span className="text-lg font-bold tracking-tighter" style={{ color: tokens.colors.textPrimary }}>
              ATOMITY
            </span>
          </div>
          <p className="text-sm opacity-50 leading-relaxed" style={{ color: tokens.colors.textSecondary }}>
            Next-generation FinOps for modern cloud infrastructures. Optimize, automate, and save.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: tokens.colors.textPrimary }}>Platform</h4>
          <ul className="space-y-4 text-sm opacity-60">
            <li><a href="#" className="hover:text-[#4ade80] transition-colors">Intelligence</a></li>
            <li><a href="#" className="hover:text-[#4ade80] transition-colors">ROI Engine</a></li>
            <li><a href="#" className="hover:text-[#4ade80] transition-colors">Security</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: tokens.colors.textPrimary }}>Company</h4>
          <ul className="space-y-4 text-sm opacity-60">
            <li><a href="#" className="hover:text-[#4ade80] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#4ade80] transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-[#4ade80] transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: tokens.colors.textPrimary }}>Legal</h4>
          <ul className="space-y-4 text-sm opacity-60">
            <li><a href="#" className="hover:text-[#4ade80] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#4ade80] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#4ade80] transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t mt-20" style={{ borderColor: tokens.colors.border }}>
        <p className="text-xs opacity-40">© 2024 Atomity Inc. All rights reserved.</p>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
          <a href="#" className="hover:text-[#4ade80]">Twitter</a>
          <a href="#" className="hover:text-[#4ade80]">GitHub</a>
          <a href="#" className="hover:text-[#4ade80]">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
