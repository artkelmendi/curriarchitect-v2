"use client";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLang } from "@/lib/i18n";
import { BoardArrow, SampleNote } from "@/components/BoardElements";
import { MotionHeading, MotionSurface } from "@/components/MotionSurface";
import ScrollPhotograph from "@/components/ScrollPhotograph";
export default function ProjectView({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const { lang, t } = useLang();
  const meta = [
    { label: t.project.meta.location, value: project.location },
    { label: t.project.meta.year, value: project.year },
    { label: t.project.meta.category, value: project.category[lang] },
    { label: t.project.meta.area, value: project.area },
    { label: t.project.meta.scope, value: project.scope[lang] },
  ];
  return (
    <article>
      <div className="project-heading orange-field">
        <Link className="text-action" href="/projects">
          <BoardArrow back />
          {t.project.back}
        </Link>
        <MotionHeading as="h1" text={project.title} delay={0.12} />
      </div>
      <MotionSurface className="project-cover" variant="image" delay={0.2}>
        <ScrollPhotograph
          src={project.hero}
          alt={project.title}
          sizes="100vw"
          eager
        />
      </MotionSurface>
      <section className="project-story">
        <MotionSurface as="dl" variant="panel">
          {meta.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </MotionSurface>
        <div>
          <MotionHeading text={t.project.aboutProject} />
          {project.description[lang].map((paragraph, index) => (
            <MotionSurface as="p" key={paragraph} delay={index * 0.08}>
              {paragraph}
            </MotionSurface>
          ))}
          <SampleNote />
        </div>
      </section>
      <section
        className="project-gallery"
        aria-label={
          lang === "sq" ? "Fotografitë e projektit" : "Project photographs"
        }
      >
        {project.gallery.map((src, i) => (
          <MotionSurface as="figure" key={src} variant="image">
            <div>
              <Image
                src={src}
                alt={`${project.title}, ${t.project.view(i + 1)}`}
                fill
                sizes={i === 0 ? "100vw" : "(min-width: 900px) 50vw, 100vw"}
              />
            </div>
            <figcaption>
              {project.title}
              <span>{t.project.view(i + 1)}</span>
            </figcaption>
          </MotionSurface>
        ))}
      </section>
      <Link className="next-board" href={`/projects/${next.slug}`}>
        <div>
          <span>{t.project.next}</span>
          <MotionHeading text={next.title} />
        </div>
        <BoardArrow />
      </Link>
    </article>
  );
}
