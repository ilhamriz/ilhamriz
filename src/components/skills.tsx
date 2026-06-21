"use client";

import { SectionLabel } from "./shared/section-label";
import { FadeUp } from "./motion";
import { TechPill } from "./tech-pill";

const groups = [
  {
    title: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Angular"],
  },
  { title: "Styling", items: ["Tailwind CSS", "SCSS", "Framer Motion"] },
  {
    title: "Tools",
    items: ["Github", "Figma", "REST API", "Vite.js", "Redux"],
  },
  { title: "Mobile", items: ["Flutter"] },
  {
    title: "Other",
    items: ["PWA", "SEO", "Web Performance", "Scalable Component Architecture"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="max-w-container mx-auto px-6 pt-30 pb-15">
      <SectionLabel number="02" title="Expertise" />

      <div className="flex flex-col gap-10">
        {groups.map((group, i) => (
          <FadeUp key={group.title} delay={i}>
            <div className="grid gap-4 md:grid-cols-[220px_1fr] items-center">
              <span className="font-mono text-xs uppercase tracking-widest text-text-dim">
                {group.title}
              </span>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <TechPill key={item} label={item} />
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
