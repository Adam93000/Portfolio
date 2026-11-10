import { FiArrowUpRight } from 'react-icons/fi';
import Navigation from '../Navigation';

export default function Header() {
  return (
    <header className="flex flex-col gap-5 border-b border-line px-6 pt-6 pb-4 md:px-10 lg:h-26 lg:flex-row lg:items-center lg:justify-between lg:px-22 lg:py-0">
      {/* Mobile : logo + bouton sur une ligne ; desktop : éléments aplatis dans le header */}
      <div className="flex items-center justify-between lg:contents">
        <a
          href="#hero"
          className="font-mono text-[26px] font-bold text-brand lg:order-1 lg:text-[30px]"
        >
          A.M.
        </a>

        <a
          href="#contact"
          className="flex h-13 items-center justify-center gap-3 rounded-md border border-accent bg-accent px-5 font-sans text-[15px] font-semibold text-accent-ink transition-opacity hover:opacity-90 lg:order-3"
        >
          Me contacter
          <FiArrowUpRight className="size-5" />
        </a>
      </div>

      <Navigation />
    </header>
  );
}
