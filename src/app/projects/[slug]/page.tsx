import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { colsMap, getProject, projects } from "@/lib/projects";
import { TechPill } from "@/components/tech-pill";
import { MasonryGallery } from "@/components/masonry-gallery";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — Muhammad Ilham Rizky`,
    description: project.overview,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-container">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
          >
            {/* <ArrowLeft className="h-4 w-4" /> */}
            All projects
          </Link>

          <FadeUp>
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <span className="rounded-md border border-border bg-surface px-3 py-1 text-xs text-muted">
                  {project.type}
                </span>
                <span className="font-mono text-xs text-gold">
                  {project.year}
                </span>
              </div>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-text sm:text-6xl">
                {project.name}
              </h1>
            </div>
          </FadeUp>

          {project?.overviewImage?.map((item) => (
            <div key={item?.alt} className="flex flex-col gap-6">
              <Image
                src={item?.file}
                alt={item?.alt}
                loading="eager"
                fetchPriority="high"
                width={1440}
                height={1024}
              />
            </div>
          ))}

          {/* Overview */}
          <section className="mt-16 border-t border-border pt-10">
            <FadeUp>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                Overview
              </h2>

              <p className="max-w-2xl text-pretty text-xl leading-relaxed text-text">
                {project.overview}
              </p>
            </FadeUp>
          </section>

          {project?.built?.length ? (
            <section className="mt-16 border-t border-border pt-10">
              <FadeUp>
                <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
                  {project?.isGallery ? "Apprroach" : "What I Built"}
                </h2>

                {project?.builtImage?.images?.length ? (
                  <div
                    className={cn(
                      "grid gap-6",
                      colsMap[project?.builtImage?.cols ?? 1],
                    )}
                  >
                    {project?.builtImage?.images?.map((item) => (
                      <Image
                        key={item?.alt}
                        src={item?.file}
                        alt={item?.alt}
                        width={1416}
                        height={1416}
                      />
                    ))}
                  </div>
                ) : null}

                <ul className="flex flex-col gap-4">
                  {project.built.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <div className="flex flex-col gap-6">
                        <span className="max-w-2xl text-lg leading-relaxed text-text">
                          {item?.text}
                        </span>
                        {item?.images?.map((image, index) => (
                          <div key={index} className="">
                            <Image
                              key={image?.alt}
                              src={image?.file}
                              alt={image?.alt}
                              width={1440}
                              height={1024}
                            />
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* TODO: after #1 SCREENSHOT beberapa page */}
                {/* TODO: after #2 SCREENSHOT GOOGLE RICH RESULT TEST */}
                {/* TODO: SCREENSHOT GOOGLE RICH RESULT TEST */}
              </FadeUp>
            </section>
          ) : null}

          {project.isGallery && (
            <section className="mt-16 border-t border-border pt-10">
              <FadeUp>
                <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
                  Gallery
                </h2>
                <MasonryGallery />
              </FadeUp>
            </section>
          )}

          {/* Tech Stack */}
          <section className="mt-16 border-t border-border pt-10">
            <FadeUp>
              <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </FadeUp>
          </section>

          {/* Team Context */}
          <section className="mt-16 border-t border-border pt-10">
            <FadeUp>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                Team Context
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-text">
                {project.team}
              </p>
            </FadeUp>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
