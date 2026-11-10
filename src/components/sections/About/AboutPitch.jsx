import SectionHeader from '../../common/SectionHeader';

const RefreshCwIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5 text-brand"
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);

const CheckListIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5 text-brand"
  >
    <path d="m3 16 2 2 4-4" />
    <path d="m3 9 2 2 4-4" />
    <path d="M13 6h8" />
    <path d="M13 12h8" />
    <path d="M13 18h8" />
  </svg>
);

export default function AboutPitch() {
  return (
    <section
      id="about"
      className="flex flex-col gap-10 border-t border-line px-6 py-16 md:px-10 lg:px-22 lg:py-24"
    >
      <SectionHeader
        number="01"
        label="À propos"
        title="Comprendre avant de coder."
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
        {/* Colonne gauche : Présentation & parcours */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          <p className="font-sans text-xl leading-[1.5] text-ink sm:text-2xl">
            Je suis Adam, développeur Front-End React junior. J’aime transformer un
            besoin concret en une interface simple à utiliser.
          </p>

          <p className="font-sans text-base leading-[1.75] text-muted">
            Mon parcours de formation en intégration web m’a amené du HTML et du
            CSS à la création d’applications React. Les projets pédagogiques sont
            mon terrain pour pratiquer, me tromper et progresser.
          </p>

          <p className="font-sans text-base leading-[1.75] text-muted">
            Mon approche est pragmatique : des composants réutilisables, une
            structure sémantique et une attention à l’accessibilité comme au
            référencement, dès la conception.
          </p>
        </div>

        {/* Colonne droite : Cartes méthode & rigueur */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <RefreshCwIcon />
              <h3 className="font-mono text-base font-bold text-ink">
                Agile dans la méthode
              </h3>
            </div>
            <p className="font-sans text-sm leading-[1.7] text-muted">
              Avancer par étapes, accueillir les retours et ajuster la solution
              au besoin réel.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <CheckListIcon />
              <h3 className="font-mono text-base font-bold text-ink">
                Rigoureux dans le détail
              </h3>
            </div>
            <p className="font-sans text-sm leading-[1.7] text-muted">
              Décomposer un bug, vérifier les états et garder un code clair à
              reprendre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
