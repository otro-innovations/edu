import Link from 'next/link';
import { siteConfig, getHost } from '@/lib/siteConfig';

interface NavLink { href: string; label: string }

/**
 * Shared navbar. `links` are RELATIVE paths only (portability rule §4);
 * cross-site links use siblingHost() to stay config-derived.
 */
export default function Navbar({ links, ctaLabel = 'Contact Us' }: { links: NavLink[]; ctaLabel?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-mist bg-white/95 backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-content items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2" aria-label={`${siteConfig.brandName} home`}>
          <span className="font-display text-2xl font-bold tracking-tight text-brand-navy">OTRO</span>
          <span className="hidden text-xs font-semibold uppercase tracking-widest text-brand-blue sm:inline">
            {siteConfig.subdomain}
          </span>
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm font-medium text-brand-ink hover:text-brand-blue">{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={`tel:${siteConfig.phone}`} className="hidden text-sm font-medium text-brand-ink hover:text-brand-blue lg:inline" aria-label="Call us">
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="rounded-md bg-brand-navy px-4 py-2 text-sm font-semibold text-white hover:bg-brand-blue">
            {ctaLabel}
          </Link>
        </div>
      </nav>
      <span className="sr-only">{getHost()}</span>
    </header>
  );
}
