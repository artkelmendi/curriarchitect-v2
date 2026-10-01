"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMotionHydrated } from "@/components/MotionSurface";

export default function Template({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();
  const hydrated = useMotionHydrated();
  return (
    <div>
      {hydrated && !reducedMotion && (
        <motion.div
          key={pathname}
          className="route-shutter"
          aria-hidden="true"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          animate={{ clipPath: "inset(100% 0 0 0)" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
      {children}
    </div>
  );
}
