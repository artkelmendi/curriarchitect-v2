"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { useLang } from "@/lib/i18n";
import { BoardArrow } from "./BoardElements";
import ScrollPhotograph from "./ScrollPhotograph";
import {
  MotionHeading,
  MotionSurface,
  useMotionHydrated,
} from "./MotionSurface";
function Chapter({
  project,
  previous,
}: {
  project: Project;
  previous?: Project;
}) {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const reduced = useReducedMotion();
  const hydrated = useMotionHydrated();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const aperture = useTransform(
    scrollYProgress,
    [0.25, 0.85],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"],
  );
  return (
    <article ref={ref} className="project-chapter">
      <MotionSurface className="chapter-visual" variant="image">
        {previous && (
          <Image
            className="chapter-underlay"
            src={previous.hero}
            alt=""
            fill
            sizes="68vw"
          />
        )}
        <motion.div
          className="chapter-aperture"
          style={
            previous && hydrated && !reduced
              ? { clipPath: aperture }
              : undefined
          }
        >
          <ScrollPhotograph
            src={project.hero}
            alt={project.title}
            sizes="(min-width: 900px) 68vw, 100vw"
          />
        </motion.div>
      </MotionSurface>
      <MotionSurface className="chapter-copy" variant="panel">
        <div className="chapter-location">
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>
        <MotionHeading as="h3" text={project.title} delay={0.1} />
        <p>{project.excerpt[lang]}</p>
        <dl className="chapter-spec">
          <div>
            <dt>{lang === "sq" ? "Lloji" : "Type"}</dt>
            <dd>{project.category[lang]}</dd>
          </div>
          <div>
            <dt>{lang === "sq" ? "Sipërfaqja" : "Area"}</dt>
            <dd>{project.area}</dd>
          </div>
        </dl>
        <Link href={`/projects/${project.slug}`} className="text-action">
          {lang === "sq" ? "Shiko projektin" : "Explore project"}
          <BoardArrow />
        </Link>
      </MotionSurface>
    </article>
  );
}
export default function ProjectChapters() {
  const { t, lang } = useLang();
  const featured = [projects[0], projects[2], projects[3]];
  return (
    <section id="selected-work" className="selected-boards">
      <div className="section-rail">
        <MotionHeading
          text={lang === "sq" ? "Punë të zgjedhura" : "Selected work"}
        />
        <Link className="text-action" href="/projects">
          {t.works.allProjects}
          <BoardArrow />
        </Link>
      </div>
      <div className="chapter-stack">
        {featured.map((project, i) => (
          <Chapter
            key={project.slug}
            project={project}
            previous={featured[i - 1]}
          />
        ))}
      </div>
    </section>
  );
}
