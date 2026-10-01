"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoWordmark } from "./LogoMark";
import { BoardArrow } from "./BoardElements";
import { useLang } from "@/lib/i18n";
import { MotionHeading, MotionSurface } from "./MotionSurface";
export default function Footer() {
  const { t, lang } = useLang();
  const pathname = usePathname();
  return (
    <footer className="studio-footer">
      {!pathname.startsWith("/contact") && (
        <Link className="footer-invitation" href="/contact">
          <MotionHeading
            text={
              lang === "sq"
                ? "Keni një projekt në mendje?"
                : "Have a project in mind?"
            }
          />
          <span>
            {t.footerCta.button}
            <BoardArrow />
          </span>
        </Link>
      )}
      <MotionSurface className="footer-body" delay={0.08}>
        <LogoWordmark className="footer-wordmark" />
        <div>
          <p>{t.footer.city}</p>
          <a href="mailto:hello@curriarchitect.com">hello@curriarchitect.com</a>
        </div>
        <nav aria-label="Footer">
          <Link href="/projects">{t.nav.projects}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
        </nav>
      </MotionSurface>
      <div className="footer-bottom">
        <span>{t.footer.rights}</span>
        <span>{t.footer.blurb}</span>
      </div>
    </footer>
  );
}
