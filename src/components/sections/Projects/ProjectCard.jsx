const GithubIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const ExternalIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
    </svg>
);

const linkClass =
    "flex h-11 items-center gap-2 font-sans text-sm font-semibold text-brand underline underline-offset-4 transition-colors hover:text-ink";

export default function ProjectCard({ project }) {
    const { title, coverImage, tags, content, links } = project;

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
                        alt={`Aperçu du projet ${title}`}
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
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        <GithubIcon />
                        GitHub
                    </a>
                    {links.demo && (
                        <a href={links.demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            Live Demo
                            <ExternalIcon />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
