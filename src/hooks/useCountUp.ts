"use client";

import { useState, useEffect } from "react";
import { useSpring, useTransform, useMotionValue } from "framer-motion";

export function useCountUp(targetValue: number, isInView: boolean, duration: number = 1.8) {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);
  
  const springValue = useSpring(count, {
    stiffness: 30, // Adjusted for ~1.8s duration feel with easeOut
    damping: 15,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isInView) {
      count.set(targetValue);
    } else {
      count.set(0);
    }
  }, [isInView, count, targetValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return displayValue;
}
