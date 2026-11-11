import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

export default function LegalModal({ isOpen, onClose }) {
  // Fermer la modale avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-surface p-6 shadow-2xl sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer les mentions légales"
          className="absolute right-5 top-5 rounded-lg border border-line p-2 text-muted transition-colors hover:border-brand hover:text-ink"
        >
          <FiX className="size-5" />
        </button>

        {/* Titre */}
        <h2
          id="legal-title"
          className="mb-8 font-mono text-2xl font-bold tracking-tight text-ink sm:text-3xl"
        >
          MENTIONS LÉGALES
        </h2>

        {/* Contenu */}
        <div className="flex flex-col gap-6 font-sans text-sm leading-[1.75] text-muted sm:text-base">
          {/* 1. Éditeur */}
          <section className="flex flex-col gap-2">
            <h3 className="font-mono text-base font-bold text-ink">
              1. Éditeur du site
            </h3>
            <ul className="flex flex-col gap-1 pl-4">
              <li>
                <strong className="text-ink">Éditeur :</strong> Adam Moskatelo
              </li>
              <li>
                <strong className="text-ink">Contact :</strong>{' '}
                <a
                  href="mailto:moskateloadam@gmail.com"
                  className="text-brand underline underline-offset-4 hover:text-ink"
                >
                  moskateloadam@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-ink">Localisation :</strong> Dol, Croatie
              </li>
            </ul>
          </section>

          {/* 2. Hébergement */}
          <section className="flex flex-col gap-2">
            <h3 className="font-mono text-base font-bold text-ink">
              2. Hébergement
            </h3>
            <ul className="flex flex-col gap-1 pl-4">
              <li>
                <strong className="text-ink">Hébergeur :</strong> Netlify, Inc.
              </li>
              <li>
                <strong className="text-ink">Site web :</strong>{' '}
                <a
                  href="https://www.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline underline-offset-4 hover:text-ink"
                >
                  https://www.netlify.com
                </a>
              </li>
              <li>
                <strong className="text-ink">Adresse postale :</strong> 44
                Montgomery Street, Suite 300, San Francisco, California 94104,
                USA
              </li>
            </ul>
          </section>

          {/* 3. Propriété intellectuelle */}
          <section className="flex flex-col gap-2">
            <h3 className="font-mono text-base font-bold text-ink">
              3. Propriété intellectuelle
            </h3>
            <p>
              L'ensemble de ce site (structure, textes, code source, images) est
              la propriété exclusive d'Adam Moskatelo. Toute reproduction,
              représentation ou diffusion, en tout ou partie, est interdite sans
              autorisation préalable.
            </p>
          </section>

          {/* 4. Données personnelles & Cookies */}
          <section className="flex flex-col gap-2">
            <h3 className="font-mono text-base font-bold text-ink">
              4. Données personnelles & Cookies
            </h3>
            <p>
              Ce site vitrine ne collecte aucune donnée personnelle et n'utilise
              aucun cookie de traçage.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

