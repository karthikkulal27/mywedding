"use client";

import { motion } from "framer-motion";

interface EnvelopeFlapProps {
  isOpened: boolean;
}

export default function EnvelopeFlap({ isOpened }: EnvelopeFlapProps) {
  return (
    <motion.div
      className="absolute top-0 left-0 right-0 origin-top"
      style={{
        width: "100%",
        height: "50%",
        background: "linear-gradient(to bottom, #FFFBF5 0%, #FFFAF0 100%)",
        transformStyle: "preserve-3d",
        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        boxShadow: "0 8px 24px rgba(180, 140, 80, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
      }}
      animate={{
        rotateX: isOpened ? 170 : 0,
      }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay: 0.15,
      }}
    >
      {/* Ornate Gold Decorative Pattern - Elegant Flourishes */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-72 h-20 flex items-center justify-center">
        <svg
          className="w-full h-full"
          viewBox="0 0 360 100"
          fill="none"
          stroke="#C9A961"
          strokeWidth="1"
        >
          {/* Left ornate flourish */}
          <path d="M 20 50 Q 35 35 50 40 Q 65 45 75 55" opacity="0.7" strokeLinecap="round" />
          <path d="M 25 55 Q 40 40 55 45 Q 70 50 80 60" opacity="0.6" />
          <path d="M 30 48 Q 45 38 58 42 Q 70 46 78 52" opacity="0.5" />
          
          {/* Left decorative elements */}
          <circle cx="55" cy="50" r="2" fill="#C9A961" opacity="0.6" />
          <circle cx="40" cy="45" r="1.5" fill="#C9A961" opacity="0.5" />
          
          {/* Center ornate design */}
          <circle cx="180" cy="50" r="30" opacity="0.4" stroke="#C9A961" strokeWidth="0.8" />
          <circle cx="180" cy="50" r="24" opacity="0.3" stroke="#C9A961" strokeWidth="0.8" />
          
          {/* Center ornament - flourish pattern */}
          <path d="M 180 20 Q 170 35 165 50" opacity="0.6" />
          <path d="M 180 80 Q 170 65 165 50" opacity="0.6" />
          <path d="M 150 50 Q 165 45 180 50" opacity="0.6" />
          <path d="M 210 50 Q 195 45 180 50" opacity="0.6" />
          
          {/* Center small ornament */}
          <circle cx="180" cy="50" r="8" opacity="0.4" />
          <circle cx="180" cy="50" r="4" fill="#C9A961" opacity="0.6" />
          
          {/* Right ornate flourish */}
          <path d="M 285 55 Q 295 45 310 40 Q 325 35 340 50" opacity="0.7" strokeLinecap="round" />
          <path d="M 280 60 Q 290 50 305 45 Q 320 40 340 55" opacity="0.6" />
          <path d="M 282 52 Q 295 46 310 42 Q 322 38 340 48" opacity="0.5" />
          
          {/* Right decorative elements */}
          <circle cx="305" cy="50" r="2" fill="#C9A961" opacity="0.6" />
          <circle cx="320" cy="45" r="1.5" fill="#C9A961" opacity="0.5" />
          
          {/* Decorative baseline */}
          <path d="M 50 65 Q 180 68 310 65" opacity="0.3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Flap bottom edge accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#C9A961]/20 to-transparent" />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-black via-transparent to-white rounded-full" />
    </motion.div>
  );
}
