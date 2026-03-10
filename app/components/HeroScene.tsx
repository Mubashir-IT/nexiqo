 "use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroSceneProps {
  onReady?: () => void;
}

// const ICONS = [
//   { label: "</>", color: "from-sky-400 to-cyan-300" },
//   { label: "React", color: "from-cyan-400 to-sky-300" },
//   { label: "<div>", color: "from-emerald-400 to-lime-300" },
//   { label: "{state}", color: "from-fuchsia-400 to-purple-400" },
//   { label: "API", color: "from-orange-400 to-amber-300" },
//   { label: "<h1>", color: "from-blue-400 to-indigo-400" },
// ];

const CODE_LINES = [
  "import express from 'express';",
  "import React from 'react';",
  "",
  "const app = express();",
  "",
  "app.get('/', (_req, res) => {",
  "  res.json({ status: 'ok', by: 'Nexiqo' });",
  "});",
  "",
  "export function Hero() {",
  "  return (",
  "    <section className=\"max-w-5xl mx-auto\">",
  "      <h1>Nexiqo Software Studio</h1>",
  "    </section>",
  "  );",
  "}",
];

const FloatingBadge = ({
  label,
  color,
  x,
  y,
  delay,
}: {
  label: string;
  color: string;
  x: string;
  y: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="absolute px-3 py-1.5 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-sm shadow-[0_0_24px_rgba(15,23,42,0.8)] text-[11px] md:text-xs text-slate-50 font-medium"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 0.9, y: [0, -10, 0], scale: [1, 1.03, 1] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <span
        className={`mr-1.5 h-1.5 w-1.5 inline-block rounded-full bg-linear-to-r ${color} shadow-[0_0_12px_rgba(56,189,248,0.8)]`}
      />
      {label}
    </motion.div>
  );
};

const Ribbon = ({
  className,
  delay = 0,
  baseRotate = 0,
}: {
  className: string;
  delay?: number;
  baseRotate?: number;
}) => {
  return (
    <motion.div
      className={`pointer-events-none absolute z-[1] rounded-full bg-linear-to-r from-cyan-400/70 via-emerald-300/60 to-transparent blur-md ${className}`}
      initial={{ opacity: 0.4, rotate: baseRotate, borderRadius: "999px" }}
      animate={{
        opacity: [0.4, 0.9, 0.6, 0.8, 0.5],
        rotate: [baseRotate - 18, baseRotate + 24, baseRotate - 8],
        borderRadius: ["999px", "48px", "999px"],
        x: [-10, 22, -18, 0],
        y: [0, -12, 8, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

export const CodePanel = () => {
  const [typedCode, setTypedCode] = useState("");

  useEffect(() => {
    const full = CODE_LINES.join("\n");
    const TYPE_SPEED = 40; // ms per character
    const PAUSE_AFTER_FULL = 2000; // ms

    let index = 0;
    let cancelled = false;

    const typeLoop = () => {
      if (cancelled) return;

      if (index <= full.length) {
        setTypedCode(full.slice(0, index));
        index += 1;
        window.setTimeout(typeLoop, TYPE_SPEED);
      } else {
        window.setTimeout(() => {
          if (cancelled) return;
          index = 0;
          setTypedCode("");
          typeLoop();
        }, PAUSE_AFTER_FULL);
      }
    };

    typeLoop();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="hidden md:block absolute right-[6%] top-[40%] -translate-y-1/2">
      <div className="relative w-64 rounded-xl border border-slate-700/80 bg-slate-950/95 shadow-[0_18px_45px_rgba(15,23,42,1)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-slate-800/80 text-[10px] text-slate-500">
          <span className="h-2 w-2 rounded-full bg-rose-500/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono text-[10px] text-slate-400">
            nexiqo.tsx
          </span>
        </div>

        <div className="py-2 px-3 text-[11px] font-mono leading-relaxed text-slate-300/90 min-h-[180px]">
          <pre className="whitespace-pre-wrap text-left">
            {typedCode}
            <span className="animate-pulse text-slate-500">▍</span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default function HeroScene({ onReady }: HeroSceneProps) {
  useEffect(() => {
    const t = setTimeout(() => onReady?.(), 700);
    return () => clearTimeout(t);
  }, [onReady]);

  return (
    <div className="absolute inset-0 w-full h-full poifnter-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1d2a3f,transparent_55%),radial-gradient(circle_at_bottom_right,#020617,#020617)]" />

      <motion.div
        className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-1/4 h-80 w-80 rounded-full bg-emerald-400/8 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 opacity-[0.22] bg-[linear-gradient(to_right,rgba(148,163,184,0.24)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.22)_1px,transparent_1px)] bg-size-[80px_80px] md:bg-size-[96px_96px]" />

      {/* Ribbon-like curves */}
      <Ribbon className="-left-10 top-1/3 h-16 w-60 md:h-20 md:w-80" delay={0.3} baseRotate={-18} />
      <Ribbon className="right-0 top-1/2 h-14 w-52 md:h-18 md:w-72" delay={1.1} baseRotate={12} />
      <Ribbon className="left-1/4 bottom-6 h-12 w-64 md:h-16 md:w-80" delay={2.0} baseRotate={4} />

      {/* <div className="absolute inset-0">
        <FloatingBadge label={ICONS[0].label} color={ICONS[0].color} x="14%" y="22%" delay={0.2} />
        <FloatingBadge label={ICONS[1].label} color={ICONS[1].color} x="68%" y="26%" delay={0.6} />
        <FloatingBadge label={ICONS[2].label} color={ICONS[2].color} x="20%" y="62%" delay={1.0} />
        <FloatingBadge label={ICONS[3].label} color={ICONS[3].color} x="58%" y="64%" delay={1.4} />
        <FloatingBadge label={ICONS[4].label} color={ICONS[4].color} x="34%" y="38%" delay={0.9} />
        <FloatingBadge label={ICONS[5].label} color={ICONS[5].color} x="78%" y="52%" delay={1.6} />
      </div> */}

      {/* <CodePanel /> */}
    </div>
  );
}

