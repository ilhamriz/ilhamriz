import Link from "next/link";
import { SectionNavLink } from "@/components/section-nav-link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { colsMap, getProject, projects } from "@/lib/projects";
import { TechPill } from "@/components/tech-pill";
import { MasonryGallery } from "@/components/masonry-gallery";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";
import {
  LightboxProvider,
  LightboxTrigger,
} from "@/components/shared/lightbox";
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

// Static class strings only — Tailwind purges anything built with template
// interpolation, so every variant used below is written out in full.
const FEATURED_SPAN = "sm:col-span-2";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const builtWithImages = project.built?.filter((b) => b.images?.length) ?? [];
  const builtTextOnly = project.built?.filter((b) => !b.images?.length) ?? [];

  // Tinthumb has no overviewImage by design — it leads with the gallery
  // instead, so we don't show a "missing" placeholder for it.
  const showOverviewPlaceholder =
    !project.overviewImage?.length && !project.gallery?.length;

  return (
    <LightboxProvider>
      <Navbar />
      <main className="px-6 pb-32 pt-32">
        <div className="mx-auto max-w-container">
          <SectionNavLink
            sectionId="projects"
            className="inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-sm text-text-muted transition-colors hover:text-text"
          >
            ← All projects
          </SectionNavLink>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
            {/* ── RAIL ───────────────────────────────────────────── */}
            <FadeUp>
              <aside className="lg:sticky lg:top-32 lg:self-start">
                <span
                  aria-hidden
                  className="block font-serif text-[96px] italic leading-none text-border-2/60"
                >
                  {project.number}
                </span>

                <div className="-mt-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-border bg-bg-2 px-3 py-1 text-xs text-text-dim">
                    {project.type}
                  </span>
                  <span className="font-mono text-xs text-gold">
                    {project.year}
                  </span>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <h2 className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                    Role
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-dim">
                    {project.team}
                  </p>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <h2 className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                    Stack
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </div>
                </div>
              </aside>
            </FadeUp>

            {/* ── CONTENT ────────────────────────────────────────── */}
            <div className="min-w-0">
              <FadeUp>
                <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-text sm:text-6xl lg:text-7xl">
                  {project.name}
                </h1>
                <p className="font-serif-italic mt-6 max-w-2xl text-pretty text-2xl leading-snug text-text-dim sm:text-3xl">
                  {project.overview}
                </p>
              </FadeUp>

              {/* Hero image(s) */}
              {project.overviewImage?.length ? (
                <FadeUp>
                  <div className="mt-14 flex flex-col gap-6">
                    {project.overviewImage.map((item, i) => (
                      <LightboxTrigger
                        key={item.alt}
                        image={item}
                        images={project.overviewImage!}
                        index={i}
                        priority={i === 0}
                      />
                    ))}
                  </div>
                </FadeUp>
              ) : showOverviewPlaceholder ? (
                <FadeUp>
                  <div
                    className="mt-14 flex items-center justify-center rounded-md border border-dashed border-border-2 text-xs text-text-muted"
                    style={{ aspectRatio: "1440/1024" }}
                  >
                    Screenshot placeholder — overview image not provided
                  </div>
                </FadeUp>
              ) : null}

              {/* Build narrative — alternating image+text blocks, in original order */}
              {builtWithImages.length > 0 && (
                <section className="mt-20 border-t border-border pt-12">
                  <FadeUp>
                    <h2 className="mb-10 font-mono text-xs uppercase tracking-widest text-text-muted">
                      {project.gallery?.length ? "Approach" : "What I Built"}
                    </h2>
                  </FadeUp>

                  <div className="flex flex-col gap-16">
                    {builtWithImages.map((item, i) => {
                      // const imageOnRight = i % 2 === 0;
                      return (
                        <FadeUp key={item.text}>
                          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
                            <div
                              className={cn(
                                "lg:col-span-5",
                                // imageOnRight ? "lg:order-1" : "lg:order-2",
                              )}
                            >
                              <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-accent" />
                              <p className="max-w-md text-lg leading-relaxed text-text-dim">
                                {item.text}
                              </p>
                            </div>
                            <div
                              className={cn(
                                "flex flex-col gap-4 lg:col-span-7",
                                // imageOnRight ? "lg:order-2" : "lg:order-1",
                              )}
                            >
                              {item.images?.map((image, i2) => (
                                <LightboxTrigger
                                  key={image.alt}
                                  image={image}
                                  images={item.images!}
                                  index={i2}
                                />
                              ))}
                            </div>
                          </div>
                        </FadeUp>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Supporting, image-less details */}
              {builtTextOnly.length > 0 && (
                <section
                  className={cn(
                    // "border-t border-border pt-10",
                    "pt-10",
                    builtWithImages.length > 0 ? "mt-16" : "mt-20",
                  )}
                >
                  <FadeUp>
                    {builtWithImages.length === 0 && (
                      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-muted">
                        {project.gallery?.length ? "Approach" : "What I Built"}
                      </h2>
                    )}
                    <ul className="flex max-w-2xl flex-col gap-4">
                      {builtTextOnly.map((item) => (
                        <li key={item.text} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span className="text-lg leading-relaxed text-text-dim">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </FadeUp>
                </section>
              )}

              {/* Curated extra image group */}
              {project.builtImage?.images?.length ? (
                <FadeUp>
                  <div
                    className={cn(
                      "mt-16 grid auto-rows-fr gap-6",
                      colsMap[project.builtImage.cols ?? 1],
                    )}
                  >
                    {project.builtImage.images.map((item, i) => (
                      <LightboxTrigger
                        key={item.alt}
                        image={item}
                        images={project.builtImage!.images}
                        index={i}
                        width={1416}
                        height={1416}
                        imgClassName="h-full w-full object-cover"
                        className={cn(
                          "block h-full overflow-hidden rounded-md border border-border transition-opacity hover:opacity-90",
                          i === 0 &&
                            project.builtImage!.images.length > 2 &&
                            FEATURED_SPAN,
                        )}
                      />
                    ))}
                  </div>
                </FadeUp>
              ) : null}

              {/* Gallery-type case studies (Tinthumb) */}
              {project.gallery?.length ? (
                <section className="mt-20 border-t border-border pt-12">
                  <FadeUp>
                    <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-text-muted">
                      Selected Work
                    </h2>
                    <MasonryGallery designs={project.gallery} />
                  </FadeUp>
                </section>
              ) : null}
            </div>
          </div>

          {/* Next project */}
          <FadeUp>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group mt-28 flex items-center justify-between border-t border-border pt-10"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                Next case
              </span>
              <span className="text-2xl font-semibold text-text transition-colors group-hover:text-accent sm:text-3xl">
                {nextProject.name} →
              </span>
            </Link>
          </FadeUp>
        </div>
      </main>
      <Footer />
    </LightboxProvider>
  );
}
