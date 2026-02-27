"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false, loading: () => null });

interface GlobalBackgroundProps {
  onReady?: () => void;
}

export function GlobalBackground({ onReady }: GlobalBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <HeroScene onReady={onReady} />
    </div>
  );
}
