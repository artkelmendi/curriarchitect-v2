"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export default function ProjectCard({
  project,
  delay = 0,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  project: Project;
  index: number;
  delay?: number;
  sizes?: string;
}) {
  const { lang } = useLang();
  return (
    <Reveal delay={delay}>
      <Link href={`/projects/${project.slug}`} className="group block project-card">
        <div className="relative aspect-[4/3] overflow-hidden bg-raised">
          <Image
            src={project.hero}
            alt={project.title}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
          />
          {/* Hover arrow chip */}
          <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center bg-[#ff6600] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.2" className="h-5 w-5" aria-hidden="true">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </div>
        </div>
        <div className="mt-5 flex items-start justify-between gap-6 border-b border-line pb-5">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-bone transition-colors duration-200 group-hover:text-accent group-focus-visible:text-accent md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-bone/70">
              {project.category[lang]}
            </p>
          </div>
          <div className="pt-1 text-right text-xs leading-relaxed text-bone/70"><p>{project.location}</p><p>{project.year}</p></div>
        </div>
      </Link>
    </Reveal>
  );
}
