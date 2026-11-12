export default function SectionHeader({ number, label, title, intro, icon }) {
  return (
    <header className="flex flex-col gap-5">
      <p className="flex items-center gap-3 font-mono text-[13px]">
        <span className="text-brand">{number}</span>
        <span aria-hidden="true" className="h-px w-7 bg-line" />
        <span className="text-muted">{label}</span>
      </p>

      <h2 className="font-mono text-[30px] leading-[1.2] font-bold tracking-[-0.047em] text-ink lg:text-[42px] lg:tracking-[-0.033em]">
        {title}
      </h2>

      {intro && (
        <div className="flex gap-3">
          {icon && <span className="mt-1 shrink-0 text-brand">{icon}</span>}
          <p className="font-sans text-base leading-[1.7] text-muted">
            {intro}
          </p>
        </div>
      )}
    </header>
  );
}
