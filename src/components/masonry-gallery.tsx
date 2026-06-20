import type { ProjectImage } from "@/lib/projects";
import { LightboxTrigger } from "@/components/shared/lightbox";

export function MasonryGallery({ designs }: { designs: ProjectImage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {designs.map((d, i) => (
        <LightboxTrigger
          key={d.alt}
          image={d}
          images={designs}
          index={i}
          width={1200}
          height={1200}
          className="group block overflow-hidden border border-border bg-surface transition-colors hover:border-accent"
          imgClassName="h-full w-full object-cover"
        />
      ))}
    </div>
  );
}
