"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function ParallaxImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
}: {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["-4%", "4%"]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ y }} className="parallax-media absolute -inset-y-[6%] inset-x-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
