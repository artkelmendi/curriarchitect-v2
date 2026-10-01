"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import LogoMark, { LogoWordmark } from "./LogoMark";
import LangSwitch from "./LangSwitch";
import ThemeToggle from "./ThemeToggle";
import { useLang } from "@/lib/i18n";

export default function Navbar() {
  const pathname = usePathname();
  const { t, lang } = useLang();
  const [menuOpenAt, setMenuOpenAt] = useState<string | null>(null);
  const open = menuOpenAt === pathname;
  const reduced = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const links = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact", label: t.nav.contact },
  ];
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const background = Array.from(
      document.querySelectorAll<HTMLElement>("main, footer"),
    );
    background.forEach((element) => {
      element.inert = true;
    });
    document.documentElement.classList.add("overflow-hidden");
    const frame = requestAnimationFrame(() =>
      menuRef.current?.querySelector<HTMLElement>("a")?.focus(),
    );
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpenAt(null);
      }
      if (event.key !== "Tab") return;
      const targets = [
        triggerRef.current,
        ...Array.from(
          menuRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? [],
        ),
      ].filter((element): element is HTMLElement => element !== null);
      const first = targets[0],
        last = targets[targets.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("overflow-hidden");
      background.forEach((element) => {
        element.inert = false;
      });
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);
  return (
    <>
      <header className="site-header">
        <nav
          className="site-navigation"
          aria-label={lang === "sq" ? "Navigimi kryesor" : "Main navigation"}
        >
          <Link
            href="/"
            className="brand-lockup"
            aria-label="Curri Architect — home"
            onClick={() => setMenuOpenAt(null)}
          >
            <LogoMark className="brand-icon" />
            <LogoWordmark className="brand-wordmark" />
          </Link>
          <div className="desktop-navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                className="navigation-link"
                href={link.href}
                aria-current={active(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link className="navigation-contact" href="/contact">
              {t.nav.letsTalk}
            </Link>
            <LangSwitch />
            <ThemeToggle />
          </div>
          <div className="mobile-navigation-tools">
            <LangSwitch />
            <ThemeToggle className="mobile-theme-switch" />
            <button
              ref={triggerRef}
              type="button"
              className="menu-toggle"
              aria-label={
                open
                  ? lang === "sq"
                    ? "Mbyll menynë"
                    : "Close menu"
                  : lang === "sq"
                    ? "Hap menynë"
                    : "Open menu"
              }
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpenAt(open ? null : pathname)}
            >
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label={lang === "sq" ? "Navigimi" : "Navigation"}
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: reduced ? 0 : 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <nav>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active(link.href) ? "page" : undefined}
                  onClick={() => setMenuOpenAt(null)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mobile-menu-bottom">
              <a href="mailto:hello@curriarchitect.com">
                hello@curriarchitect.com
              </a>
              <span>{t.footer.city}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
