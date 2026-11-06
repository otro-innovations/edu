import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'ghost';
const styles: Record<Variant, string> = {
  primary: 'bg-brand-navy text-white hover:bg-brand-blue',
  secondary: 'bg-brand-amber text-brand-navy hover:brightness-110',
  ghost: 'border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
};

interface Props { href: string; variant?: Variant; children: React.ReactNode; external?: boolean }

/** Accessible CTA button rendered as <a>; supports full URLs from siteConfig helpers. */
export default function Button({ href, variant = 'primary', children, external }: Props) {
  const cls = `inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors ${styles[variant]}`;
  if (external || href.startsWith('http')) {
    return <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{children}</a>;
  }
  return <Link href={href} className={cls}>{children}</Link>;
}
