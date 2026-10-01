"use client";
import { useLang } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";
import LogoMark from "@/components/LogoMark";
import { MotionHeading, MotionSurface } from "@/components/MotionSurface";
export default function ContactView() {
  const { t, lang } = useLang();
  return (
    <section className="contact-board">
      <div className="contact-intro">
        <MotionHeading
          as="h1"
          text={
            lang === "sq"
              ? "Të ndërtojmë diçka së bashku."
              : "Let’s make something together."
          }
        />
        <MotionSurface as="p" delay={0.12}>
          {t.contactPage.intro}
        </MotionSurface>
        <MotionSurface className="contact-address" delay={0.2}>
          <a href="mailto:hello@curriarchitect.com">hello@curriarchitect.com</a>
          <span>{t.contactPage.city}</span>
        </MotionSurface>
        <LogoMark className="contact-mark" />
      </div>
      <MotionSurface
        className="contact-form-panel"
        variant="panel"
        delay={0.15}
      >
        <MotionHeading
          text={
            lang === "sq"
              ? "Na tregoni për projektin tuaj."
              : "Tell us about your project."
          }
          delay={0.2}
        />
        <ContactForm />
      </MotionSurface>
    </section>
  );
}
