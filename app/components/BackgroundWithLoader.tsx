"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BackgroundWithLoader({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white pointer-events-none"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-baseline gap-0.5">
                <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">nexiq</span>
                <motion.span
                  className="inline-block text-4xl md:text-5xl font-bold text-primary"
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
              <div className="w-full h-[3px] bg-foreground/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "100%"] }}
                  transition={{
                    duration: 1.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: isReady ? 0.15 : 0 }}
        className="relative z-10 min-h-screen bg-white"
      >
        {children}
      </motion.div>
    </>
  );
}
