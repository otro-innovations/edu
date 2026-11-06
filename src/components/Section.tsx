/** Page section wrapper with consistent rhythm + accessible heading anchor. */
export default function Section({ id, eyebrow, title, lead, children, tone = 'light' }: {
  id?: string; eyebrow?: string; title?: string; lead?: string; children?: React.ReactNode; tone?: 'light' | 'mist' | 'navy';
}) {
  const tones = { light: 'bg-white', mist: 'bg-brand-mist/60', navy: 'bg-brand-navy text-white' };
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20`}>
      <div className="mx-auto max-w-content px-4 sm:px-6">
        {(eyebrow || title) && (
          <header className="max-w-3xl">
            {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-brand-amber">{eyebrow}</p>}
            {title && <h2 className={`mt-2 font-display text-3xl font-bold sm:text-4xl ${tone === 'navy' ? 'text-white' : 'text-brand-navy'}`}>{title}</h2>}
            {lead && <p className={`mt-4 text-lg ${tone === 'navy' ? 'text-white/80' : 'text-brand-ink/70'}`}>{lead}</p>}
          </header>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
