"use client";
import { useLang } from "@/lib/i18n";
export function BoardArrow({ back = false }: { back?: boolean }) {
  return (
    <svg
      className={`board-arrow${back ? " arrow-back" : ""}`}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M7 24h33M25 9l15 15-15 15" />
    </svg>
  );
}
export function SampleNote({ compact = false }: { compact?: boolean }) {
  const { lang } = useLang();
  return (
    <p className="sample-note">
      {lang === "sq"
        ? compact
          ? "Fotografi ilustruese"
          : "Projektet dhe fotografitë janë materiale ilustruese nga portofoli ekzistues."
        : compact
          ? "Illustrative project photography"
          : "Projects and photography are illustrative material from the existing portfolio."}
    </p>
  );
}
