import { techIconUrl } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

export function TechIcon({
  label,
  className,
  color = "#f4f1ec",
  size = 20,
}: {
  label: string;
  className?: string;
  color?: string;
  size?: number;
}) {
  const url = techIconUrl(label);
  if (!url) return null;
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

export function TechPill({
  label,
  className,
  iconProps = {},
}: {
  label: string;
  className?: string;
  iconProps?: object;
  color?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        "h-10 px-4 py-2 inline-flex items-center gap-2 rounded-lg border border-border bg-bg-2 text-sm text-text-dim transition-colors hover:border-accent",
        className,
      )}
    >
      <TechIcon label={label} {...iconProps} />
      {label}
    </span>
  );
}
