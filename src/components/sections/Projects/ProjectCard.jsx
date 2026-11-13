import { FiGithub, FiArrowUpRight } from "react-icons/fi";

const linkClass =
  "flex h-11 items-center gap-2 font-sans text-sm font-semibold text-brand underline underline-offset-4 transition-colors hover:text-ink";

export default function ProjectCard({ project }) {
  const { title, coverImage, imageAlt, tags, content, links } = project;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface">
      {/* Mockup d'interface */}
      <div className="flex h-[254px] flex-col justify-center bg-[#203a57] p-4 lg:p-[26px]">
        <div className="flex flex-col overflow-hidden rounded-md bg-[#fafaf9] shadow-[0_12px_24px_rgba(0,0,0,0.2)]">
          <div className="flex h-[26px] items-center justify-between bg-[#e6e9ed] px-3 font-mono text-[8px] text-[#4c5762]">
            <span aria-hidden="true">● ● ●</span>
            <span>APERÇU DU PROJET</span>
          </div>
          <img
            src={coverImage}
            alt={imageAlt || `Aperçu du projet ${title}`}
            loading="lazy"
            className="h-[160px] w-full object-cover"
          />
        </div>
      </div>

      {/* Présentation du projet */}
      <div className="flex flex-1 flex-col gap-5 p-5 xl:p-7">
        <p className="font-mono text-[11px] tracking-[0.0455em] text-accent">
          PROJET PÉDAGOGIQUE · FORMATION
        </p>

        <h3 className="font-mono text-[22px] leading-[1.35] xl:text-[25px] font-bold tracking-[-0.036em] text-ink">
          {title}
        </h3>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-chip px-2.5 py-[7px] font-mono text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="font-sans text-[15px] leading-[1.75] text-muted">
          {content.context}
        </p>

        <p className="font-sans text-[15px] leading-[1.75] text-muted">
          <strong className="font-semibold text-ink">Axes de travail : </strong>
          {content.objectives}
        </p>

        <div className="mt-auto flex flex-wrap gap-x-6 border-t border-line pt-2">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <FiGithub aria-hidden="true" className="size-[18px]" />
            GitHub
          </a>
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Live Demo
              <FiArrowUpRight aria-hidden="true" className="size-[18px]" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
