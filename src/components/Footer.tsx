import Link from 'next/link';
import { siteConfig, mailtoLink, absoluteUrl } from '@/lib/siteConfig';

const PILLARS = [
  { sub: 'edu', label: 'OTRO Education' },
  { sub: 'digital', label: 'OTRO Digital' },
  { sub: 'trade', label: 'Trade OTRO' },
  { sub: 'shop', label: 'Shop OTRO' },
  { sub: 'tours', label: 'OTRO Tours' },
] as const;

/** Cross-site link helper — derives sibling hosts from baseDomain at runtime. */
export function siblingHref(sub: string, path = ''): string {
  const host = sub === 'main' ? siteConfig.baseDomain : `${sub}.${siteConfig.baseDomain}`;
  return `https://${host}${path}`;
}

export default function Footer({ quickLinks = [] }: { quickLinks?: { href: string; label: string }[] }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold">OTRO</p>
          <p className="mt-2 text-sm text-white/70">
            {siteConfig.brandName} — {siteConfig.tagline}
          </p>
          <p className="mt-1 text-xs text-white/50">A division of {siteConfig.legalEntityName} (USA)</p>
        </div>
        <nav aria-label="OTRO divisions">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-amber">Divisions</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {PILLARS.map((p) => (
              <li key={p.sub}><a className="text-white/80 hover:text-white" href={siblingHref(p.sub)}>{p.label}</a></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Quick links">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-amber">Company</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="text-white/80 hover:text-white" href="/about">About</Link></li>
            <li><Link className="text-white/80 hover:text-white" href="/contact">Contact</Link></li>
            <li><Link className="text-white/80 hover:text-white" href="/terms">Terms</Link></li>
            <li><Link className="text-white/80 hover:text-white" href="/privacy">Privacy</Link></li>
            {quickLinks.map((l) => <li key={l.href}><Link className="text-white/80 hover:text-white" href={l.href}>{l.label}</Link></li>)}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-amber">Get in touch</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-white/80 hover:text-white" href={mailtoLink('Hello OTRO')}>{siteConfig.contactEmail}</a></li>
            <li><a className="text-white/80 hover:text-white" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></li>
            <li><a className="text-white/80 hover:text-white" href={absoluteUrl('/sitemap.xml')}>Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {year} {siteConfig.legalEntityName}. All rights reserved. · EN ↔ 中文 ↔ বাংলা
      </div>
    </footer>
  );
}
