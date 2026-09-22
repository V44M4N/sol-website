"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? {} : { y: [18, 0], opacity: [0.65, 1] }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, delay }}
    >
      {children}
    </motion.div>
  );
}
