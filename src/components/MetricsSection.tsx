"use client";

import { motion } from "framer-motion";
import { tokens } from "@/tokens/colors";

const metrics = [
  { label: "Active Clusters", value: "24", sub: "+2 this month", color: "#4ade80" },
  { label: "Cloud Efficiency", value: "94%", sub: "High Performance", color: "#3b82f6" },
  { label: "Total Managed spend", value: "$4.2M", sub: "Annualized", color: "#a855f7" },
  { label: "Optimization Events", value: "1.2k", sub: "Automated", color: "#f59e0b" },
];

export function MetricsSection() {
  return (
    <section id="metrics" className="py-20 px-6 border-t" style={{ backgroundColor: tokens.colors.bgSecondary, borderColor: tokens.colors.border }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border-2 flex flex-col gap-2 relative overflow-hidden group"
              style={{ backgroundColor: tokens.colors.bgCard, borderColor: tokens.colors.border }}
            >
              <div 
                className="absolute top-0 left-0 w-1 h-full opacity-40 group-hover:h-full transition-all"
                style={{ backgroundColor: metric.color }}
              />
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40" style={{ color: tokens.colors.textSecondary }}>
                {metric.label}
              </span>
              <span className="text-4xl font-black tracking-tighter" style={{ color: tokens.colors.textPrimary }}>
                {metric.value}
              </span>
              <span className="text-[10px] font-bold opacity-60" style={{ color: metric.color }}>
                {metric.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
