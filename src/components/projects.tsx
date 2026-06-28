"use client";

import Link from "next/link";
import { SectionLabel } from "./shared/section-label";
import { FadeUp } from "./motion";
import { projects } from "@/lib/projects";
import { TechPill } from "./tech-pill";
import { ArrowUpRight } from "./icons";
import SectionTitle from "./shared/section-title";

export function Projects() {
  return (
    <section id="projects" className="max-w-container mx-auto px-6 pt-30 pb-15">
      <SectionLabel number="03" title="Selected Work" />

      <SectionTitle subtitle="A mix of large-scale platforms, brand campaigns, and independent client work — each focused on performance and design.">
        Built for <span className="font-serif-italic">real users</span>, shipped
        to production.
      </SectionTitle>

      <div className="flex flex-col border-t border-border">
        {projects.map((project, i) => (
          <FadeUp key={project.slug} delay={i} as="div">
            <Link
              href={`/projects/${project.slug}`}
              className="group px-2 py-8 flex flex-col gap-4 border-b border-l-2 border-l-transparent border-border transition-colors hover:border-l-accent hover:bg-bg-2/70 md:grid md:grid-cols-[auto_1fr] md:gap-8 md:px-6"
            >
              <span className="font-mono text-[10px] text-text-muted">
                [{project.number}]
              </span>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-text text-2xl sm:text-3xl leading-none">
                  {project.name}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted">
                  <span>{project.type}</span>
                  <span className="hidden sm:block">·</span>
                  <span className="hidden sm:block font-mono text-xs">
                    {project.year}
                  </span>
                </div>
                <p className="max-w-[750px] text-text-dim text-sm leading-relaxed">
                  {project?.overview}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {project?.bullets?.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs">
                      <span className="text-accent">→</span>
                      <p className="text-text-dim">{item}</p>
                    </li>
                  ))}
                </ul>

                {/* TECH */}
                <div className="mt-4 flex gap-6 justify-between items-end sm:items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((t) => (
                      <TechPill
                        key={t}
                        label={t}
                        className="h-auto py-1 px-2 text-[11px] gap-1.5 rounded-md hover:border-border-2 hover:text-text"
                        iconProps={{ size: 13 }}
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-mono text-accent transition-colors group-hover:text-accent-hover">
                    View
                    <ArrowUpRight size={16} className="fill-accent" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
