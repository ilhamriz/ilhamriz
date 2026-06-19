"use client";

import { SectionLabel } from "./shared/section-label";
import { FadeUp } from "./motion";
import SectionTitle from "./shared/section-title";
import DOMPurify from "isomorphic-dompurify";

const subEntries = [
  {
    label: "Soundrenaline and Resonine",
    period: "Nov 2025-Present",
    description:
      "<p class='mb-1'>Built core pages and lineup/rundown systems for Indonesia's largest music festival platform and its parent multi-brand creative platform.</p><p>Implemented JSON-LD structured data for SEO and continued development of existing PWA infrastructure.</p>",
  },
  {
    label: "One UX",
    period: "Jun 2024",
    description:
      "<p class='mb-1'>Joined an in-progress project building multi-brand web interfaces for Amild, Marlboro, Djisamsoe, Magnum, and Sampoerna.</p><p>Contributed new features, pages, and bug fixes — including independently building and shipping a music upload feature that lets users upload audio files and play them back instantly.</p>",
  },
  {
    label: "AYO Principal",
    period: "2021",
    description:
      "<p>Built dashboard features for managing Sampoerna-partnered retail outlets (SRC-branded stalls) — including forms, new feature development, and bug fixes for the Principal and Mitra platforms.</p>",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="max-w-container mx-auto px-6 pt-30 pb-15"
    >
      <SectionLabel number="04" title="Experience" />
      <SectionTitle>
        Where I&apos;ve <span className="font-serif-italic">worked.</span>
      </SectionTitle>

      <FadeUp>
        <div className="relative pl-5 sm:pl-8">
          <div className="absolute left-[5px] top-2 h-full w-px bg-border" />
          <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-accent" />

          <div className="px-5 py-5 flex flex-col gap-2">
            <p className="font-mono text-xs text-text-muted leading-relaxed">
              May 2021 - Present · Jakarta HQ, Remote
            </p>
            <p className="text-2xl font-bold text-text">
              Frontend Web Developer
            </p>
            <p className="font-serif text-lg text-muted">@ Weekend Inc.</p>
            <p className="max-w-4xl text-sm text-text-dim">
              As a Frontend Developer at Weekend Inc., delivered production
              websites and platforms across event campaigns, multi-brand
              interfaces, and partner dashboards.
            </p>

            <div className="mt-4 flex flex-col gap-6">
              {subEntries.map((entry, i) => (
                <FadeUp key={entry.label} delay={i}>
                  <div className="relative pl-5">
                    <div className="mb-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <div className="relative flex items-center">
                        <span className="absolute left-[-14px] text-accent text-[11px]">
                          +
                        </span>
                        <span className="text-sm font-medium text-text-dim">
                          {entry.label}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-text-muted">
                        ({entry.period})
                      </span>
                    </div>
                    <div
                      className="max-w-[900px] text-sm leading-relaxed text-text-muted"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(entry.description),
                      }}
                    />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
