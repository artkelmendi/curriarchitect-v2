"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useLang } from "@/lib/i18n";
import ProjectChapters from "@/components/ProjectChapters";
import ScrollPhotograph from "@/components/ScrollPhotograph";
import { BoardArrow, SampleNote } from "@/components/BoardElements";
import { MotionHeading, MotionSurface } from "@/components/MotionSurface";

export default function Home() {
  const { t, lang } = useLang();
  const project = projects[0];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <>
      <section className="board-hero">
        <MotionSurface className="hero-photograph" variant="image" delay={0.12}>
          <ScrollPhotograph src={project.hero} alt={project.title} eager />
          <Link className="photo-ticket" href={`/projects/${project.slug}`}>
            <span>{project.title}</span>
            <span>
              {project.location} / {project.year}
            </span>
            <BoardArrow />
          </Link>
        </MotionSurface>
        <div className="orange-field hero-signature">
          <MotionHeading
            as="h1"
            text={`${t.hero.l1} ${t.hero.l2} & ${t.hero.l3}`}
            delay={0.2}
          />
          <Link className="hero-action" href="#selected-work">
            <span>{t.hero.viewWork}</span>
            <BoardArrow />
          </Link>
        </div>
        <MotionSurface className="hero-caption" delay={0.25}>
          <p>
            {lang === "sq"
              ? "Studio e pavarur arkitekture, Prishtinë."
              : "Independent architecture practice, Prishtina."}
          </p>
          <SampleNote compact />
        </MotionSurface>
      </section>
      <ProjectChapters />
      <section className="practice-board" id="studio">
        <div className="practice-copy">
          <MotionHeading
            text={
              lang === "sq"
                ? "Një arkitekt. Vëmendje e plotë."
                : "One architect. Full attention."
            }
          />
          <MotionSurface as="p" delay={0.08}>
            {t.about.p1}
          </MotionSurface>
          <MotionSurface as="p" delay={0.16}>
            {t.about.p2}
          </MotionSurface>
          <Link className="text-action" href="/contact">
            {t.services.cta}
            <BoardArrow />
          </Link>
        </div>
        <MotionSurface as="figure" className="portrait-board" variant="image">
          <div className="portrait-image">
            <Image
              src={`${basePath}/images/curri-pic.png`}
              alt={t.about.portraitAlt}
              fill
              sizes="(min-width: 900px) 42vw, 100vw"
            />
          </div>
          <figcaption>
            Curri Architect<span>{t.footer.city}</span>
          </figcaption>
        </MotionSurface>
      </section>
      <section className="services-board">
        <div className="services-intro">
          <MotionHeading
            text={
              lang === "sq" ? "Nga skica në kantier." : "From sketch to site."
            }
          />
          <MotionSurface as="p" delay={0.1}>
            {lang === "sq"
              ? "Arkitekturë, enterier dhe vëmendje ndaj çdo detaji."
              : "Architecture, interiors and attention to every detail."}
          </MotionSurface>
        </div>
        <div className="service-list">
          {t.services.items.map((service, index) => (
            <MotionSurface key={service.name} delay={index * 0.08}>
              <details open={index === 0}>
                <summary>
                  {service.name}
                  <span className="details-symbol" aria-hidden="true" />
                </summary>
                <p>{service.desc}</p>
              </details>
            </MotionSurface>
          ))}
        </div>
      </section>
    </>
  );
}
