const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Parcours', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  return (
    <nav
      aria-label="Navigation principale"
      className="flex flex-wrap gap-x-6 lg:order-2 lg:gap-x-8"
    >
      {links.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className="flex h-11 items-center font-sans text-sm text-muted transition-colors hover:text-ink"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
