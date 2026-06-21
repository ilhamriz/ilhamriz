"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "./icons";
import Image from "next/image";
import { TechIcon, TechPill } from "./tech-pill";
import { Button } from "./ui/button";
import { navigateToSection } from "@/lib/scroll-to-section";
import { usePathname, useRouter } from "next/navigation";

const marqueeIcons = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Tailwind CSS",
  "Framer Motion",
  "Github",
  "Figma",
  "Vite.js",
  "Redux",
  "Flutter",
];

export function Hero() {
  const pathname = usePathname();
  const router = useRouter();

  const goToSection = (id: string) => {
    navigateToSection(id, pathname, router);
  };

  return (
    <section id="top" className="pt-[150px] pb-15 bg-bg-2/40">
      <div className="relative px-6 max-w-container mx-auto grid lg:grid-cols-[1fr_400px] justify-center items-center gap-10 overflow-hidden">
        {/* <TopoBackground /> */}

        <div className="relative mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-2 px-4 py-1.5"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
            <span className="text-[10px] text-text-dim uppercase font-mono">
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
            <Button
              onClick={() => goToSection("projects")}
              className="cursor-pointer"
            >
              <span>See my work</span>
              <ArrowUpRight size={20} className="fill-bg" />
            </Button>
            <Button
              href="https://github.com/ilhamriz"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TechIcon label={"Github"} size={18} />
              <span>github.com/ilhamriz</span>
            </Button>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <div className="relative max-w-[320px] lg:max-w-none rounded-xl overflow-hidden border border-border">
            <Image
              src="/assets/ilhamriz.jpg"
              alt="Ilhamriz smiling"
              width={796}
              height={1064}
              loading="eager"
            />
          </div>
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
