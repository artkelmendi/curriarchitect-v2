"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Animate the supplied original vector paths, never substitute their letterforms. */
export function useLogoDraw() {
  const ref = useRef<SVGSVGElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const svg = ref.current;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !svg ||
      preference.matches ||
      !svg.animate ||
      !window.IntersectionObserver
    )
      return;
    const animations = Array.from(
      svg.querySelectorAll<SVGPathElement>("[data-logo-piece]"),
    ).map((path, i) => {
      const mark = path.dataset.logoPiece === "mark";
      const animation = path.animate(
        [
          { strokeDashoffset: 1, strokeOpacity: 1, fillOpacity: 0 },
          {
            strokeDashoffset: 0,
            strokeOpacity: 1,
            fillOpacity: 0,
            offset: 0.62,
          },
          { strokeDashoffset: 0, strokeOpacity: 0, fillOpacity: 1 },
        ],
        {
          duration: mark ? 900 : 800,
          delay: mark ? i * 100 : Math.min(i * 30, 220),
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "both",
        },
      );
      animation.pause();
      animation.finished
        .then(() => {
          if (!svg.closest(".startup-identity")) animation.cancel();
        })
        .catch(() => {});
      return animation;
    });
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        if (
          !svg.closest(".startup-identity") &&
          document.querySelector(".startup-identity")
        ) {
          animations.forEach((animation) => {
            const delay = animation.effect?.getTiming().delay ?? 0;
            animation.effect?.updateTiming({ delay: delay + 1350 });
          });
        }
        animations.forEach((animation) => animation.play());
        observer.disconnect();
      },
      { threshold: 0.1 },
    );
    observer.observe(svg);
    const finish = () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
    preference.addEventListener("change", finish);
    return () => {
      finish();
      preference.removeEventListener("change", finish);
    };
  }, [pathname]);
  return ref;
}

export const logoDrawProps = {
  pathLength: 1,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinejoin: "round" as const,
  strokeDasharray: 1,
  strokeDashoffset: 0,
  strokeOpacity: 0,
};
