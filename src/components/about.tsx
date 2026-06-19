"use client";

import { SectionLabel } from "./shared/section-label";
import { FadeUp } from "./motion";
import SectionTitle from "./shared/section-title";

const metadata = [
  { label: "Based", value: "Pekanbaru, Riau, ID" },
  { label: "Focus", value: "Frontend Engineering · UI Performance" },
  { label: "Stack", value: "React · Next.js · Tailwind CSS" },
  {
    label: "Education",
    value: "S.Kom, Information Technology, Universitas Sumatera Utara",
  },
  { label: "Company", value: "Weekend Inc." },
];

export function About() {
  return (
    <section id="about" className="max-w-container mx-auto px-6 pt-30 pb-15">
      <SectionLabel number="01" title="About" />

      <SectionTitle>
        A frontend dev who <span className="font-serif-italic">cares</span> —
        about design, performance, and real impact.
      </SectionTitle>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 md:gap-20">
        <FadeUp className="flex flex-col gap-6">
          <p className="text-pretty text-2xl text-text font-serif">
            Frontend Developer with 4+ years building production web experiences
            across event platforms, brand campaigns, and independent client
            work.
          </p>
          <p className="text-pretty text-lg text-text-dim leading-relaxed">
            Drawn to frontend because of a genuine love for visual craft — the
            kind that makes someone stop and notice a website. That same
            instinct drives a focus on performance: a beautiful interface that
            loads slowly is a broken promise.
          </p>
          <p className="text-pretty text-lg text-text-dim leading-relaxed">
            At Weekend Inc., shipped platforms for large-scale events including
            Soundrenaline and Resonine — handling everything from homepage to
            lineup pages, news systems, and SEO implementation with JSON-LD
            structured data.
          </p>
          {/* <p className="text-pretty text-2xl leading-relaxed text-text sm:text-3xl">
              I&apos;m Ilham — a frontend developer who turns complex designs
              into fast, accessible, and scalable web experiences. I&apos;ve
              spent 4+ years building production platforms for music festivals,
              brand activations, and mobile health tools. I care about clean
              architecture, performance, and the craft of UI.
            </p> */}
        </FadeUp>

        <FadeUp delay={1}>
          {/* <dl className="flex flex-col"> */}
          <dl className="grid sm:grid-cols-2 gap-6 md:gap-x-8">
            {metadata.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 border-l border-border pl-4"
              >
                <dt className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
                  {item.label}
                </dt>
                <dd className="text-text text-sm">{item.value}</dd>
              </div>
            ))}
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}
