export function SectionLabel({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-10 pt-6 flex items-baseline gap-3">
      <span className="font-mono text-xs uppercase tracking-wider text-gold">
        {number} /
      </span>
      <h2 className="text-xs font-medium uppercase tracking-wider text-text-muted">
        {title}
      </h2>
    </div>
  );
}
