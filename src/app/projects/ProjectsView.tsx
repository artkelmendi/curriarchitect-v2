"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";
import { useLang } from "@/lib/i18n";
import { BoardArrow, SampleNote } from "@/components/BoardElements";
import { MotionHeading, MotionSurface } from "@/components/MotionSurface";
export default function ProjectsView() {
  const { t, lang } = useLang();
  const [category, setCategory] = useState("all");
  const categories = [
    ...new Map(
      projects.map((project) => [project.category.en, project.category[lang]]),
    ).entries(),
  ];
  const visible =
    category === "all"
      ? projects
      : projects.filter((project) => project.category.en === category);
  return (
    <>
      <section className="archive-title orange-field">
        <MotionHeading as="h1" text={t.projectsPage.title} />
        <MotionSurface as="p" delay={0.12}>
          {lang === "sq"
            ? "Hapësira për të jetuar, punuar dhe për t'u takuar."
            : "Spaces to live, work and come together."}
        </MotionSurface>
      </section>
      <section className="project-archive">
        <MotionSurface className="archive-controls" delay={0.18}>
          <div
            role="group"
            aria-label={
              lang === "sq" ? "Lloji i projektit" : "Project category"
            }
          >
            {[
              ["all", lang === "sq" ? "Të gjitha" : "All projects"],
              ...categories,
            ].map(([value, label]) => (
              <button
                type="button"
                key={value}
                aria-pressed={category === value}
                onClick={() => setCategory(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <span aria-live="polite">
            {visible.length} {lang === "sq" ? "projekte" : "projects"}
          </span>
        </MotionSurface>
        {visible.map((project, i) => (
          <Link
            className="archive-project"
            key={`${category}-${project.slug}`}
            href={`/projects/${project.slug}`}
          >
            <MotionSurface className="archive-photo" variant="image">
              <Image
                src={project.hero}
                alt={project.title}
                fill
                sizes="(min-width: 900px) 65vw, 100vw"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </MotionSurface>
            <MotionSurface
              className="archive-project-copy"
              variant="panel"
              delay={0.08}
            >
              <div className="chapter-location">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
              <MotionHeading text={project.title} delay={0.14} />
              <p>{project.excerpt[lang]}</p>
              <div className="archive-project-bottom">
                <span>{project.category[lang]}</span>
                <BoardArrow />
              </div>
            </MotionSurface>
          </Link>
        ))}
        <SampleNote />
      </section>
    </>
  );
}
