import { FiGithub, FiLinkedin, FiArrowUpRight, FiMessageSquare } from 'react-icons/fi';
import SectionHeader from '../../common/SectionHeader';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col gap-12 border-t border-line px-6 py-16 md:px-10 lg:px-22 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
        {/* Colonne gauche : Titre, Pitch, Statut & Réseaux */}
        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="flex flex-col gap-6">
            <SectionHeader
              number="05"
              label="Contact"
              title="Et si on en parlait ?"
            />

            <p className="font-sans text-base leading-[1.75] text-muted">
              Une première opportunité, un projet React ou simplement une
              question ? Je serais ravi d’échanger avec vous.
            </p>
          </div>

          {/* Statut d'écoute */}
          <div className="flex items-center gap-3">
            <FiMessageSquare className="size-4 shrink-0 text-accent" />
            <span className="font-mono text-sm font-medium text-accent">
              À l’écoute d’opportunités junior
            </span>
          </div>

          {/* Liens réseaux sociaux */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/Adam93000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-brand underline underline-offset-4 transition-colors hover:text-ink"
            >
              <FiGithub className="size-4" />
              GitHub
              <FiArrowUpRight className="size-3.5" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-brand underline underline-offset-4 transition-colors hover:text-ink"
            >
              <FiLinkedin className="size-4" />
              LinkedIn
              <FiArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Colonne droite : Formulaire de contact */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
