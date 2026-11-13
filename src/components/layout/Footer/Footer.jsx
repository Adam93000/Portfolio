export default function Footer({ onOpenLegal }) {
  return (
    <footer role="contentinfo" className="border-t border-line px-6 py-12 md:px-10 lg:px-22 lg:py-16">
      <div className="flex flex-col gap-8">
        {/* Ligne principale : Signature à gauche, Localisation & Mentions à droite */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Signature : Logo A.M. + Nom & Métier */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-2xl font-bold text-brand">
              A.M.
            </span>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-semibold text-ink">
                Adam Moskatelo
              </span>
              <span className="font-sans text-xs text-muted">
                Développeur Front-End React
              </span>
            </div>
          </div>

          {/* Localisation & Bouton Mentions légales */}
          <div className="flex items-center gap-6 font-mono text-xs text-muted">
            <span>Depuis la Croatie</span>
            <button
              type="button"
              onClick={onOpenLegal}
              className="cursor-pointer underline underline-offset-4 transition-colors hover:text-ink"
            >
              Mentions légales
            </button>
          </div>
        </div>

        {/* Mot de fin */}
        <p className="font-mono text-xs text-muted/70">
          Conçu avec soin. Pensé pour tous les écrans.
        </p>
      </div>
    </footer>
  );
}
