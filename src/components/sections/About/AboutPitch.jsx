import { TbRefresh, TbChecklist } from "react-icons/tb";
import SectionHeader from "../../common/SectionHeader";

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
            Je suis Adam Moskatelo, développeur Front-End React. Fort d'une
            expérience exigeante en logistique et en relation client
            internationale, j'ai développé une grande rigueur et un sens de la
            résolution de problèmes que j'applique aujourd'hui au code.
          </p>

          <p className="font-sans text-base leading-[1.75] text-muted">
            Ma spécialité ? Créer des interfaces modernes et performantes avec
            React et Tailwind CSS. À travers 12 projets concrets, dont le
            développement complet du Front-End de l'application de location
            Kasa, j'ai appris à concevoir des architectures scalables tout en
            garantissant des scores Lighthouse parfaits en accessibilité et SEO.
          </p>

          <p className="font-sans text-base leading-[1.75] text-muted">
            Mon approche est pragmatique : je conçois des composants
            réutilisables et maintiens une structure sémantique stricte. Mon
            objectif aujourd'hui est d'intégrer une équipe tech, en présentiel
            dans la région de Split ou en full-remote, pour consolider mes bases
            et continuer à apprendre au contact de développeurs expérimentés.
          </p>
        </div>

        {/* Colonne droite : Cartes méthode & rigueur */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <TbRefresh aria-hidden="true" className="size-5 text-brand" />
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
              <TbChecklist aria-hidden="true" className="size-5 text-brand" />
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
