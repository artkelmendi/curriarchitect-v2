"use client";

import {
  createElement,
  useEffect,
  useRef,
  useSyncExternalStore,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

type Arrival = "rise" | "panel" | "image" | "words";
type SurfaceTag =
  "div" | "section" | "figure" | "h1" | "h2" | "h3" | "p" | "dl";
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const subscribe = () => () => {};

export function useMotionHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

function useArrival(kind: Arrival, delay: number, identity?: string) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !element ||
      preference.matches ||
      !element.animate ||
      !window.IntersectionObserver
    )
      return;
    const targets =
      kind === "words"
        ? Array.from(element.querySelectorAll<HTMLElement>(".motion-word-ink"))
        : [element];
    const start =
      kind === "image"
        ? { opacity: 0.6, clipPath: "inset(12% 0 0 0)" }
        : kind === "panel"
          ? { opacity: 0.12, transform: "translateX(-24px)" }
          : kind === "words"
            ? { opacity: 0.2, transform: "translateY(105%)" }
            : { opacity: 0.12, transform: "translateY(24px)" };
    const end =
      kind === "image"
        ? { opacity: 1, clipPath: "inset(0% 0 0 0)" }
        : { opacity: 1, transform: "translate(0, 0)" };
    const animations = targets.map((target, index) => {
      const animation = target.animate([start, end], {
        duration: kind === "image" ? 850 : kind === "words" ? 760 : 680,
        delay:
          Math.min(delay, 0.35) * 1000 +
          (kind === "words" ? Math.min(index * 45, 280) : 0),
        easing: EASE,
        fill: "both",
      });
      animation.pause();
      animation.finished.then(() => animation.cancel()).catch(() => {});
      return animation;
    });
    let started = false;
    const reveal = () => {
      if (started) return;
      started = true;
      if (document.querySelector(".startup-identity")) {
        animations.forEach((animation) => {
          const delay = animation.effect?.getTiming().delay ?? 0;
          animation.effect?.updateTiming({ delay: delay + 1350 });
        });
      }
      animations.forEach((animation) => animation.play());
      observer.disconnect();
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) reveal();
      },
      { threshold: 0.06 },
    );
    observer.observe(element);
    const showImmediately = () => {
      started = true;
      animations.forEach((animation) => animation.cancel());
      observer.disconnect();
    };
    element.addEventListener("focusin", showImmediately);
    preference.addEventListener("change", showImmediately);
    // Do not leave a paused entrance hiding content if a visitor returns to a backgrounded tab.
    const onVisibility = () => {
      if (document.visibilityState === "hidden" && started) showImmediately();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      element.removeEventListener("focusin", showImmediately);
      preference.removeEventListener("change", showImmediately);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [pathname, kind, delay, identity]);
  return ref;
}

export function MotionSurface({
  as = "div",
  variant = "rise",
  delay = 0,
  children,
  ...props
}: HTMLAttributes<HTMLElement> & {
  as?: SurfaceTag;
  variant?: Exclude<Arrival, "words">;
  delay?: number;
  children: ReactNode;
}) {
  const ref = useArrival(variant, delay);
  return createElement(as, { ...props, ref, "data-motion": variant }, children);
}

export function MotionHeading({
  as = "h2",
  text,
  delay = 0,
  className,
}: {
  as?: "h1" | "h2" | "h3";
  text: string;
  delay?: number;
  className?: string;
}) {
  const ref = useArrival("words", delay, text);
  return createElement(
    as,
    { ref, className, "aria-label": text, "data-motion": "words" },
    text.split(/\s+/).map((word, index) => (
      <span className="motion-word" aria-hidden="true" key={`${word}-${index}`}>
        <span className="motion-word-ink">{word}</span>{" "}
      </span>
    )),
  );
}
