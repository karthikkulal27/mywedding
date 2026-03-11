"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function EnvelopeLoader() {
  const [isOpened, setIsOpened] = useState(false);

  const handleSealClick = () => {
    setIsOpened(true);
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          key="envelope-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#F8F4EC] via-[#FBF7F0] to-[#FFF9F2]"
        >
          <div className="flex flex-col items-center gap-12">
            {/* Main Sealed Envelope Container */}
            <motion.div
              className="relative w-96 h-72 cursor-pointer"
              onClick={handleSealClick}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Envelope Shadow */}
              <motion.div
                className="absolute inset-0 bg-black/5 rounded-3xl blur-3xl"
                animate={{ y: isOpened ? 30 : 0 }}
                transition={{ duration: 0.8 }}
              />

              {/* Envelope Main Body - White Base */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#D4A8AD]/30">
                {/* Inner envelope edges */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B76E79]/20 via-[#B76E79]/10 to-[#B76E79]/20" />
              </div>

              {/* Top Triangle Flap - Initially Closed */}
              <motion.div
                className="absolute top-0 left-0 right-0 origin-top perspective"
                style={{
                  width: "100%",
                  height: "50%",
                  background: "linear-gradient(135deg, #B76E79 0%, #9B6B71 100%)",
                  transformStyle: "preserve-3d",
                  borderRadius: "24px 24px 0 0",
                }}
                animate={{
                  rotateX: isOpened ? 150 : 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
              >
                {/* Decorative Pattern on Flap */}
                <div className="absolute inset-0 flex items-center justify-center opacity-15">
                  <svg
                    className="w-48 h-48 text-white"
                    viewBox="0 0 100 100"
                  >
                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M 30 50 L 50 30 L 70 50" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  </svg>
                </div>
              </motion.div>

              {/* Seal - Click Target in Center */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-40"
                onClick={handleSealClick}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Outer Seal Circle */}
                <motion.div
                  className="relative w-28 h-28 rounded-full shadow-xl"
                  animate={{
                    boxShadow: isOpened
                      ? "0 0 0 0px #B76E79, 0 10px 30px rgba(183, 110, 121, 0.2)"
                      : "0 0 30px rgba(183, 110, 121, 0.4), 0 8px 20px rgba(183, 110, 121, 0.3)",
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: "radial-gradient(circle at 30% 30%, #D4A8AD, #B76E79, #9B6B71)",
                  }}
                >
                  {/* Seal Inner Circle */}
                  <div className="absolute inset-2 rounded-full border-2 border-white/40" />

                  {/* Seal Wax Effect Ring */}
                  <motion.div
                    className="absolute inset-4 rounded-full border border-white/60"
                    animate={{
                      opacity: isOpened ? 0.3 : 0.8,
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Center Icon/Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: isOpened ? 0 : 0,
                      }}
                      transition={{ duration: 1 }}
                    >
                      <svg
                        className="w-12 h-12 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/30 blur-sm"
                    animate={{
                      opacity: isOpened ? 0 : 0.4,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>

                {/* Seal Breaking Particles (appear on click) */}
                {isOpened && (
                  <>
                    <motion.div
                      className="absolute w-2 h-2 bg-[#B76E79] rounded-full"
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{ x: 40, y: -40, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                    <motion.div
                      className="absolute w-1.5 h-1.5 bg-[#9B6B71] rounded-full"
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{ x: -40, y: -40, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                    <motion.div
                      className="absolute w-1 h-1 bg-[#D4A8AD] rounded-full"
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{ x: 40, y: 40, opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    />
                  </>
                )}
              </motion.div>

              {/* Instruction Text - Only Show When Not Opened */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 flex justify-center"
                animate={{
                  opacity: isOpened ? 0 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center py-6">
                  <motion.p
                    className="font-[family-name:var(--font-poppins)] text-[#6C4E54] text-xs tracking-widest uppercase"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Click Seal to Open
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div
              className="absolute top-1/4 left-16 w-1.5 h-1.5 bg-[#B76E79] rounded-full"
              animate={{
                y: [0, -15, 0],
                x: [0, 5, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-20 w-1 h-1 bg-[#9B6B71] rounded-full"
              animate={{
                y: [0, 15, 0],
                x: [0, -5, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#B76E79] rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
