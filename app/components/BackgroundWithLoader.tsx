"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalBackground } from "@/components/GlobalBackground";

export function BackgroundWithLoader({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  const handleReady = () => setIsReady(true);

  // Fallback: show content after 5s if WebGL never signals ready
  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <GlobalBackground onReady={handleReady} />

      {/* Loader overlay - fades out when background is ready */}
      <AnimatePresence>
        {!isReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[5] flex items-center justify-center bg-[#0f1729] pointer-events-none"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-baseline gap-0.5">
                <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">nexiq</span>
                <motion.span
                  className="inline-block text-4xl md:text-5xl font-bold text-primary-soft drop-shadow-[0_0_20px_rgba(218,249,160,0.6)]"
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 0.55,
                    repeat: Infinity,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  o
                </motion.span>
              </div>
              {/* Animated line - same width as nexiqo, fills 0 to 100 */}
              <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary-soft rounded-full shadow-[0_0_8px_rgba(218,249,160,0.5)]"
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "100%"] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: [0.4, 0, 0.2, 1],
                    repeatDelay: 0.4,
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content - fades in when ready */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: isReady ? 0.2 : 0 }}
        className="relative z-10 min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
}
