/**
 * Composant Bouton réutilisable supportant les variantes primaires, secondaires et outlined.
 * Peut être rendu sous forme de balise `<button>` ou de lien `<a>` si la prop `href` est fournie.
 */
export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  icon,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex h-13 items-center justify-center gap-3 rounded-md px-5 font-sans text-[15px] font-semibold transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "border border-accent bg-accent text-accent-ink",
    secondary: "border border-line bg-surface text-ink",
    ghost: "text-muted hover:text-ink",
  };

  const combinedClass = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} {...props}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} {...props}>
      {children}
      {icon}
    </button>
  );
}
