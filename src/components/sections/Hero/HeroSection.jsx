const ArrowDownIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

const DownloadIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);

const buttonBase =
  "flex h-13 items-center justify-center gap-3 rounded-md border px-5 font-sans text-[15px] font-semibold transition-opacity hover:opacity-90";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col items-start gap-8 px-6 py-16 md:px-10 md:py-20 lg:px-22 lg:py-24"
    >
      <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.0455em] text-accent uppercase">
        <span aria-hidden="true" className="size-2 bg-accent" />
        Front-end junior · Basé en Croatie
      </p>

      <h1 className="font-mono text-4xl leading-[1.2] font-bold tracking-[-0.03em] text-ink md:text-5xl lg:text-[56px]">
        Adam Moskatelo -{' '}
        <span className="text-brand">Développeur Front-End React</span>
      </h1>

      <p className="max-w-2xl font-sans text-base leading-[1.7] text-muted lg:text-lg">
        Création d'interfaces web performantes, accessibles et optimisées SEO
        depuis la Croatie
      </p>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <a
          href="#projects"
          className={`${buttonBase} border-accent bg-accent text-accent-ink`}
        >
          Voir mes projets
          <ArrowDownIcon />
        </a>
        <a
          href="/cv.pdf"
          download
          className={`${buttonBase} border-line bg-surface text-ink`}
        >
          Télécharger mon CV
          <DownloadIcon />
        </a>
      </div>

      <p className="font-mono text-xs text-muted/70">
        Du code lisible. Des interfaces utiles.
      </p>
    </section>
  );
}
