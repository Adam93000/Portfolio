import { FiArrowDown, FiDownload } from 'react-icons/fi';

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
          <FiArrowDown className="size-5" />
        </a>
        <a
          href="/CV_AdamMoskatelo.pdf"
          download
          className={`${buttonBase} border-line bg-surface text-ink`}
        >
          Télécharger mon CV
          <FiDownload className="size-5" />
        </a>
      </div>

      <p className="font-mono text-xs text-muted/70">
        Du code lisible. Des interfaces utiles.
      </p>
    </section>
  );
}
