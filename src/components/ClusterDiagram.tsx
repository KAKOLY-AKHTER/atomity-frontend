"use client";

import { motion, useReducedMotion } from "framer-motion";
import { tokens } from "@/tokens/colors";

export function ClusterDiagram() {
  const shouldReduceMotion = useReducedMotion();

  const nodes = [
    { x: 100, y: 100, size: 40, delay: 0 },
    { x: 300, y: 80, size: 30, delay: 0.2 },
    { x: 200, y: 250, size: 50, delay: 0.4 },
    { x: 400, y: 220, size: 35, delay: 0.6 },
    { x: 150, y: 380, size: 45, delay: 0.8 },
    { x: 350, y: 350, size: 25, delay: 1.0 },
  ];

  const connections = [
    [0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5]
  ];

  return (
    <div className="relative h-full w-full opacity-60">
      <svg viewBox="0 0 500 500" className="h-full w-full">
        <defs>
          <linearGradient id="gradient-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor={tokens.colors.accentPrimary} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {connections.map(([startIdx, endIdx], i) => {
          const start = nodes[startIdx];
          const end = nodes[endIdx];
          return (
            <motion.line
              key={`conn-${i}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={tokens.colors.border}
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: "easeInOut" }}
            />
          );
        })}

        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={tokens.colors.bgSecondary}
              stroke={tokens.colors.border}
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              animate={shouldReduceMotion ? {} : { 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: node.delay },
                default: { type: "spring", stiffness: 100, delay: node.delay }
              }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size + 10}
              fill="none"
              stroke={tokens.colors.accentPrimary}
              strokeWidth="1"
              style={{ opacity: 0.1 }}
              animate={shouldReduceMotion ? { opacity: 0.1 } : { scale: [1, 1.2, 1], opacity: [0.05, 0.2, 0.05] }}
              transition={{ duration: 4, repeat: Infinity, delay: node.delay }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size / 4}
              fill={tokens.colors.accentPrimary}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
              className="filter blur-sm"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
