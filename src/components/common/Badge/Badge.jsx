/**
 * Composant Badge pour afficher des étiquettes technologiques ou des statuts.
 */
export default function Badge({ children, variant = "chip", className = "" }) {
  const variants = {
    chip: "rounded-md bg-chip px-2.5 py-[7px] font-mono text-xs text-muted",
    accent: "rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent",
    outline:
      "rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted",
  };

  return (
    <span className={`${variants[variant] || variants.chip} ${className}`}>
      {children}
    </span>
  );
}
