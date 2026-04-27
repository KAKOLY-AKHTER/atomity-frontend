"use client";

import { tokens } from "@/tokens/colors";

export function SkeletonCard() {
  return (
    <div 
      className="animate-pulse border"
      style={{ 
        backgroundColor: tokens.colors.bgCard,
        borderColor: tokens.colors.border,
        padding: "2rem",
        borderRadius: "20px",
        height: "200px"
      }}
    >
      <div className="h-6 w-2/3 bg-white/10 rounded mb-4" />
      <div className="h-4 w-full bg-white/5 rounded mb-2" />
      <div className="h-4 w-5/6 bg-white/5 rounded mb-8" />
      <div className="h-8 w-1/3 bg-white/10 rounded" />
    </div>
  );
}
