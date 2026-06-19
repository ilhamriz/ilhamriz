"use client";
import { motion } from "framer-motion";
import { TopoBackground } from "./topo-background";
import { ArrowRight } from "./icons";
import Image from "next/image";
import { TechPill } from "./tech-pill";

const marqueeIcons = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Figma",
  "Vite.js",
  "Redux",
  "Flutter",
];

export function Hero() {
  return (
    <section id="top" className="pt-[150px] pb-15">
      <div className="relative px-6 max-w-container mx-auto flex flex-col lg:flex-row items-center gap-10 overflow-hidden">
        {/* <TopoBackground /> */}

        <div className="relative mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-2 px-4 py-1.5"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs text-muted uppercase font-mono">
              Open to new opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-balance text-5xl font-medium leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            Building interfaces that{" "}
            <span className="font-serif-italic text-accent">perform.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-dim"
          >
            I&apos;m <b className="text-text">Ilham</b> — a Frontend Developer
            with 4+ years building production web experiences. From large-scale
            event platforms like Soundrenaline and Resonine to brand campaigns
            and independent client work, I focus on clean code, real
            performance, and UI that actually converts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-accent-hover"
            >
              See my work
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-accent-hover"
            >
              <ArrowRight />
              github.com/ilhamriz
            </a>
            {/* <a
              href="/cv-muhammad-ilham-rizky.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-muted transition-colors hover:border-accent"
            >
              <FileDownload />
              Download CV
            </a> */}
          </motion.div>
        </div>

        <div className="relative max-w-100">
          <Image
            src="/assets/ilhamriz.jpg"
            alt="Ilhamriz smiling"
            width={796}
            height={1064}
            loading="eager"
          />
        </div>
      </div>

      <div className="relative mt-20 flex overflow-hidden border-y border-border py-6">
        <div className="flex shrink-0 animate-marquee items-center gap-11 pr-16">
          {[...marqueeIcons, ...marqueeIcons].map((label, i) => (
            <TechPill key={`${label}-${i}`} label={label} />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-marquee items-center gap-11 pr-16"
        >
          {[...marqueeIcons, ...marqueeIcons].map((label, i) => (
            <TechPill key={`dup-${label}-${i}`} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
