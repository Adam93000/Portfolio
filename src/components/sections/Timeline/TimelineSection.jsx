import SectionHeader from '../../common/SectionHeader';
import TimelineItem from './TimelineItem';

const timelineSteps = [
  {
    id: 'step-1',
    phase: 'Avant le développement',
    title: 'Expériences professionnelles antérieures',
    description:
      'Un parcours exigeant rigueur, gestion des priorités et sens du service client, des compétences transversales aujourd\'hui essentielles pour le développement web.',
    meta: 'Préparateur de commandes (Intermarché Lattes) & Réceptionniste (Split) • Jusqu\'en août 2026.',
    isCurrent: false,
  },
  {
    id: 'step-2',
    phase: 'Apprendre par la pratique',
    title: 'Formation d’intégrateur web',
    description:
      'Intégration responsive, JavaScript, React, accessibilité et SEO : des apprentissages mis en pratique dans des projets pédagogiques.',
    meta: 'OpenClassrooms • Titre RNCP de niveau 5 (Bac+2) • Nov. 2025 à Nov. 2026.',
    isCurrent: false,
  },
  {
    id: 'step-3',
    phase: 'Aujourd’hui',
    title: 'Construire la suite en Front-End',
    description:
      'Consolider mes bases, enrichir mes projets React et rejoindre une équipe pour continuer à apprendre au contact de développeurs expérimentés.',
    meta: 'Objectif : Poste de Développeur Front-End Junior (Split / Full-remote).',
    isCurrent: true,
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="flex flex-col gap-12 border-t border-line px-6 py-16 md:px-10 lg:px-22 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
        {/* Colonne gauche : En-tête numéroté + Titre + Description */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <SectionHeader
            number="04"
            label="Parcours"
            title={
              <>
                Apprendre.
                <br />
                Pratiquer.
                <br />
                Progresser.
              </>
            }
          />

          <p className="max-w-md font-sans text-base leading-[1.75] text-muted">
            Un parcours en construction, avec une direction claire : créer des
            interfaces utiles et évoluer au sein d’une équipe.
          </p>
        </div>

        {/* Colonne droite : Frise chronologique (Timeline) */}
        <div className="flex flex-col lg:col-span-7">
          {timelineSteps.map((step, index) => (
            <TimelineItem
              key={step.id}
              phase={step.phase}
              title={step.title}
              description={step.description}
              meta={step.meta}
              isCurrent={step.isCurrent}
              isLast={index === timelineSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
