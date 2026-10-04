type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-slate-600">{description}</p> : null}
    </div>
  );
}
