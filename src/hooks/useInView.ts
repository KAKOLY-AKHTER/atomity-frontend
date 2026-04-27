"use client";

import { useInView as useFramerInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

export function useInView(options?: UseInViewOptions) {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, options || { once: true, margin: "-100px" });
  return { ref, isInView };
}
