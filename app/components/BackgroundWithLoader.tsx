"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalBackground } from "@/components/GlobalBackground";

export function BackgroundWithLoader({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  const handleReady = () => setIsReady(true);

  // Fallback: show content after 5s if WebGL never signals ready
  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <GlobalBackground onReady={handleReady} />

     

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
