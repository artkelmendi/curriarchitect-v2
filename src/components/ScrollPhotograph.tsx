"use client";
import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMotionHydrated } from "./MotionSurface";

export default function ScrollPhotograph({
  src,
  alt,
  eager = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  eager?: boolean;
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const hydrated = useMotionHydrated();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);
  return (
    <div ref={ref} className="scroll-photograph">
      <motion.div
        className="scroll-photograph-media"
        style={hydrated && !reduced ? { y, scale } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
        />
      </motion.div>
    </div>
  );
}
