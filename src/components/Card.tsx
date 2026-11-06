/** Reusable content card (pillar cards, service blocks, pricing tiers). */
export default function Card({ title, children, href, badge }: { title: string; children: React.ReactNode; href?: string; badge?: string }) {
  const inner = (
    <>
      {badge && <span className="mb-3 inline-block w-fit rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">{badge}</span>}
      <h3 className="font-display text-xl font-bold text-brand-navy">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-brand-ink/80">{children}</div>
    </>
  );
  const cls = 'block rounded-xl border border-brand-mist bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md';
  return href ? <a href={href} className={cls}>{inner}</a> : <div className={cls}>{inner}</div>;
}
