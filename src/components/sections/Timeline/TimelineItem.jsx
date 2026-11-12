export default function TimelineItem({
  phase,
  title,
  description,
  meta,
  isCurrent = false,
  isLast = false,
}) {
  return (
    <div className="relative flex gap-6 pb-12 last:pb-0">
      {/* Ligne verticale continue */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-4 -bottom-2 w-px bg-line"
        />
      )}

      {/* Point indicateur (bullet) */}
      <span
        aria-hidden="true"
        className={`relative mt-1.5 size-3.5 shrink-0 rounded-full ${
          isCurrent
            ? "bg-accent shadow-[0_0_10px_rgba(186,247,141,0.5)]"
            : "bg-brand"
        }`}
      />

      {/* Contenu de l'étape */}
      <div className="flex flex-col gap-2">
        <span
          className={`font-mono text-xs uppercase tracking-wider ${
            isCurrent ? "text-accent" : "text-brand"
          }`}
        >
          {phase}
        </span>

        <h3 className="font-mono text-xl font-bold tracking-tight text-ink md:text-2xl">
          {title}
        </h3>

        <p className="font-sans text-sm leading-[1.7] text-muted md:text-base">
          {description}
        </p>

        <span className="font-sans text-xs text-muted/70 md:text-sm">
          {meta}
        </span>
      </div>
    </div>
  );
}
