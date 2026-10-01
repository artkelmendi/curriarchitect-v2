"use client";
import { useState } from "react";
import { dictionaries, useLang } from "@/lib/i18n";
import { BoardArrow } from "./BoardElements";
import { MotionHeading, MotionSurface } from "./MotionSurface";
export default function ContactForm() {
  const { t, lang } = useLang();
  const [typeIndex, setTypeIndex] = useState(0);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setError(t.form.error);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(
        lang === "sq"
          ? "Vendosni një adresë të vlefshme email-i."
          : "Enter a valid email address so we can reply.",
      );
      return;
    }
    setError("");
    const type = dictionaries.en.form.types[typeIndex];
    const subject = encodeURIComponent(`New ${type} project enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${type}\n\n${message}`,
    );
    window.location.href = `mailto:hello@curriarchitect.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  if (sent)
    return (
      <MotionSurface className="form-success" role="status">
        <MotionHeading as="h3" text={t.form.successTitle} />
        <p>
          {lang === "sq"
            ? "Hapni aplikacionin tuaj të email-it dhe dërgoni mesazhin e përgatitur. Nëse nuk hapet, na shkruani direkt në hello@curriarchitect.com."
            : "Send the prepared message in your email app. If it doesn’t open, email hello@curriarchitect.com directly."}
        </p>
        <button
          type="button"
          className="text-action"
          onClick={() => setSent(false)}
        >
          {t.form.again}
          <BoardArrow />
        </button>
      </MotionSurface>
    );
  return (
    <form onSubmit={onSubmit} noValidate className="enquiry-form">
      <MotionSurface className="form-pair" delay={0.08}>
        <label>
          {t.form.name}
          <input
            name="name"
            autoComplete="name"
            placeholder={t.form.namePlaceholder}
            required
          />
        </label>
        <label>
          {t.form.email}
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t.form.emailPlaceholder}
            required
          />
        </label>
      </MotionSurface>
      <fieldset>
        <legend>{t.form.projectType}</legend>
        <MotionSurface className="project-types" delay={0.14}>
          {t.form.types.map((label, i) => (
            <button
              type="button"
              key={label}
              aria-pressed={typeIndex === i}
              onClick={() => setTypeIndex(i)}
            >
              {label}
            </button>
          ))}
        </MotionSurface>
      </fieldset>
      <label>
        {t.form.message}
        <textarea
          name="message"
          rows={5}
          placeholder={t.form.messagePlaceholder}
          required
        />
      </label>
      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}
      <button type="submit" className="send-button">
        {lang === "sq" ? "Përgatit email-in" : "Prepare email"}
        <BoardArrow />
      </button>
      <p className="form-note">
        {lang === "sq"
          ? "Mesazhi hapet në aplikacionin tuaj të email-it; asgjë nuk dërgohet automatikisht."
          : "Opens your email app. Nothing is sent automatically."}
      </p>
    </form>
  );
}
