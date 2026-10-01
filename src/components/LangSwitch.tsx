"use client";

import { useLang, type Lang } from "@/lib/i18n";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "sq", label: "SQ" },
];

export default function LangSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`flex items-center gap-1 ${className ?? ""}`}
      role="group"
      aria-label="Language"
    >
      {OPTIONS.map((opt, i) => (
        <span key={opt.code} className="flex items-center">
          {i > 0 && <span className="px-1 text-bone/25">/</span>}
          <button
            type="button"
            onClick={() => setLang(opt.code)}
            aria-pressed={lang === opt.code}
            className={`min-h-11 min-w-5 cursor-pointer text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-200 md:min-w-7 ${
              lang === opt.code
                ? "text-bone underline decoration-accent decoration-2 underline-offset-4"
                : "text-bone/70 hover:text-bone"
            }`}
          >
            {opt.label}
          </button>
        </span>
      ))}
    </div>
  );
}
