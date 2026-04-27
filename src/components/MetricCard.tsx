"use client";

import { motion } from "framer-motion";
import { tokens } from "@/tokens/colors";

interface MetricCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendType?: "positive" | "negative";
}

export function MetricCard({ label, value, trend, trendType = "positive" }: MetricCardProps) {
  return (
    <div 
      className="p-4 rounded-xl border backdrop-blur-md"
      style={{ 
        backgroundColor: `${tokens.colors.bgCard}cc`,
        borderColor: tokens.colors.border
      }}
    >
      <div className="text-xs mb-1" style={{ color: tokens.colors.textSecondary }}>{label}</div>
      <div className="flex items-end justify-between gap-4">
        <div className="text-xl font-bold" style={{ color: tokens.colors.textPrimary }}>{value}</div>
        {trend && (
          <div 
            className="text-xs font-medium" 
            style={{ color: trendType === "positive" ? tokens.colors.accentSuccess : tokens.colors.accentDanger }}
          >
            {trend}
          </div>
        )}
      </div>
    </div>
  );
}
