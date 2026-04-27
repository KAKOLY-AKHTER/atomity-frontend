"use client";

import { motion } from "framer-motion";
import { tokens } from "@/tokens/colors";
import { useState } from "react";

const DashboardIcon = ({ color }: { color: string }) => (
  <svg className="w-4 h-4" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("Infrastructure");

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="dashboard-preview" className="relative py-16 lg:py-20 px-4 sm:px-6 overflow-hidden bg-grid-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-12 space-y-4">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none" 
             style={{ color: tokens.colors.textPrimary }}
           >
             The Intelligence <br className="sm:hidden" />
             <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent-primary to-accent-primary/50">
               behind the savings
             </span>
           </motion.h2>
           <p className="max-w-xl mx-auto opacity-60 text-sm md:text-base font-medium" style={{ color: tokens.colors.textSecondary }}>
             Atomity's engine analyzes millions of data points to ensure your cloud is 
             always rightsized and cost-efficient.
           </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative rounded-2xl lg:rounded-3xl border-2 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] mx-auto"
          style={{ 
            backgroundColor: tokens.colors.bgCard,
            borderColor: tokens.colors.border
          }}
        >
          {/* Dashboard Header Bar */}
          <div className="h-14 lg:h-16 border-b flex items-center px-4 lg:px-8 gap-4 lg:gap-8 overflow-x-auto no-scrollbar" style={{ borderColor: tokens.colors.border, backgroundColor: "color-mix(in srgb, var(--color-bg-primary) 40%, transparent)" }}>
            <div className="hidden sm:flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            
            <div className="flex gap-6 lg:gap-10 h-full items-center sm:ml-10 whitespace-nowrap">
               {["Infrastructure", "Workloads", "Network"].map((tab) => (
                 <button 
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className="text-[10px] lg:text-[11px] font-black uppercase tracking-widest h-full border-b-4 transition-all"
                   style={{ 
                     color: activeTab === tab ? tokens.colors.accentPrimary : tokens.colors.textSecondary,
                     borderColor: activeTab === tab ? tokens.colors.accentPrimary : "transparent",
                     opacity: activeTab === tab ? 1 : 0.6 
                   }}
                 >
                   {tab}
                 </button>
               ))}
            </div>
          </div>

          {/* Detailed Dashboard Content */}
          <div className="p-4 lg:p-12 grid grid-cols-12 gap-4 lg:gap-10 min-h-[400px] lg:min-h-[600px]">
            {/* Sidebar - Hidden on smaller screens */}
            <div className="hidden lg:block col-span-3 space-y-10 border-r pr-10" style={{ borderColor: tokens.colors.border }}>
              <div className="space-y-6">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Main Menu</div>
                <div className="space-y-4">
                  {[
                    { name: "Overview", active: true, target: "hero" },
                    { name: "Cost Analysis", active: false, target: "savings" },
                    { name: "Optimization", active: false, target: "savings" },
                    { name: "Reporting", active: false, target: "metrics" },
                    { name: "Settings", active: false, target: "hero" },
                  ].map((item) => (
                    <div 
                      key={item.name} 
                      onClick={() => handleSmoothScroll(item.target)}
                      className="flex items-center gap-3 group cursor-pointer hover:translate-x-1 transition-transform"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-accent-primary' : 'bg-white/10'} group-hover:bg-accent-primary transition-colors`} />
                      <span className={`text-[11px] font-bold uppercase tracking-widest ${item.active ? 'opacity-100' : 'opacity-40'} group-hover:opacity-100 transition-opacity`}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-12 lg:col-span-9 space-y-8 lg:space-y-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 lg:gap-6">
                <div className="space-y-1 lg:space-y-2">
                  <h3 className="text-lg lg:text-xl font-black tracking-tight">System Performance</h3>
                </div>
                <button 
                  onClick={() => handleSmoothScroll('savings')}
                  className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-3.5 bg-accent-primary rounded-xl lg:rounded-2xl font-black text-[9px] lg:text-[10px] uppercase tracking-widest text-black shadow-xl shadow-accent-primary/20 hover:scale-105 active:scale-95 transition-all"
                >
                  EXPORT ANALYSIS
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {[
                  { label: "CPU UTILIZATION", value: "64.2%", trend: "+2.4%", color: tokens.colors.accentPrimary, target: "metrics" },
                  { label: "MEMORY USAGE", value: "4.8 GB", trend: "-1.1%", color: "#3b82f6", target: "metrics" },
                  { label: "CLOUD SPEND", value: "$12,402", trend: "-14%", color: tokens.colors.accentSuccess, target: "savings" },
                ].map((stat) => (
                  <div 
                    key={stat.label}
                    onClick={() => handleSmoothScroll(stat.target)}
                    className="p-4 lg:p-6 bg-white/[0.02] rounded-xl lg:rounded-2xl border-2 flex flex-col gap-3 lg:gap-4 group cursor-pointer hover:bg-white/[0.05] transition-all" 
                    style={{ borderColor: tokens.colors.border }}
                  >
                    <div className="flex justify-between items-center">
                       <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest opacity-40">{stat.label}</span>
                       <DashboardIcon color={stat.color} />
                    </div>
                    <div className="flex items-baseline gap-2">
                       <span className="text-xl lg:text-2xl font-black tracking-tighter">{stat.value}</span>
                       <span className="text-[8px] lg:text-[9px] font-black" style={{ color: stat.trend.startsWith('+') ? tokens.colors.accentDanger : tokens.colors.accentSuccess }}>
                         {stat.trend}
                       </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full bg-white/[0.02] rounded-2xl lg:rounded-3xl border-2 relative overflow-hidden flex flex-col shadow-inner" style={{ borderColor: tokens.colors.border }}>
                <div className="p-4 lg:p-6 border-b flex justify-between items-center" style={{ borderColor: tokens.colors.border }}>
                   <div className="text-[10px] lg:text-xs font-black uppercase tracking-widest opacity-60">Optimization Trend</div>
                   <div className="flex gap-2 lg:gap-4">
                      <div className="flex items-center gap-1.5 lg:gap-2">
                         <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-accent-primary" />
                         <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest opacity-40">Optimized</span>
                      </div>
                   </div>
                </div>
                <div className="h-48 lg:h-64 relative p-4 lg:p-10">
                   <svg className="w-full h-full relative z-10" viewBox="0 0 1000 200" preserveAspectRatio="none">
                      <motion.path
                        key={activeTab}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d={activeTab === "Infrastructure" 
                           ? "M0 150 C 100 120, 200 180, 300 100 S 500 20, 600 80 S 800 150, 1000 50"
                           : activeTab === "Workloads"
                           ? "M0 100 Q 150 150, 300 100 T 600 100 T 900 50"
                           : "M0 50 L 200 150 L 400 80 L 600 180 L 800 100 L 1000 150"
                        }
                        fill="none"
                        stroke={tokens.colors.accentPrimary}
                        strokeWidth="5"
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_15px_#00ff9d]"
                      />
                   </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
