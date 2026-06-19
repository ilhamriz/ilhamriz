import { cn } from "@/lib/utils";
import { FadeUp } from "../motion";

export default function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <FadeUp className="mb-12">
      <p className={cn("text-h2", subtitle && "mb-4")}>{children}</p>
      {subtitle ? (
        <p className="text-text-dim text-sm md:text-base">{subtitle}</p>
      ) : null}
    </FadeUp>
  );
}
