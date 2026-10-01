"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LogoFull } from "./LogoMark";
import { useMotionHydrated } from "./MotionSurface";

export default function StartupIdentity() {
  const hydrated = useMotionHydrated();
  const reduced = useReducedMotion();
  const [finished, setFinished] = useState(false);
  if ((hydrated && reduced) || finished) return null;
  return (
    <motion.div
      className="startup-identity"
      aria-hidden="true"
      initial={{ clipPath: "inset(0 0 0 0)" }}
      animate={hydrated ? { clipPath: "inset(100% 0 0 0)" } : undefined}
      transition={{ delay: 1.05, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setFinished(true)}
    >
      <LogoFull className="startup-wordmark" />
    </motion.div>
  );
}
