"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export default function SealedEnvelope() {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    // Fade to website after video ends (instant)
    setTimeout(() => {
      setVideoEnded(true);
    }, 50);
  };

  return (
    <AnimatePresence mode="wait">
      {!videoEnded && (
        <motion.div
          key="video-envelope"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.40 }}
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Video Player Container - Full Screen */}
          <motion.div
            className="w-screen h-screen flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <video
              ref={videoRef}
              src="/invitation.mp4"
              onEnded={handleVideoEnd}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
              onLoadedMetadata={(e) => {
                e.currentTarget.playbackRate = 1.5;
              }}
              onPause={(e) => {
                e.currentTarget.play();
              }}
              style={{ cursor: "none" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
