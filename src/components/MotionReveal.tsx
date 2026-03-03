"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type MotionRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
}>;

export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 26,
}: MotionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function MotionFade({
  children,
  className,
  delay = 0,
}: Omit<MotionRevealProps, "y">) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
