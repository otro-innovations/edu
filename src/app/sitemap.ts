import type { MetadataRoute } from 'next';
import { siteConfig, absoluteUrl } from '@/lib/siteConfig';

/** Sitemap URLs derived from siteConfig — survives domain migration untouched. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/contact', '/terms', '/privacy'];
  const now = new Date();
  const entries = routes.map((r) => ({ url: absoluteUrl(r), lastModified: now, changeFrequency: 'monthly' as const, priority: r === '' ? 1 : 0.6 }));
  // Cross-pillar entries so search engines map the whole OTRO ecosystem.
  for (const sub of ['edu', 'digital', 'trade', 'shop', 'tours']) {
    if (sub !== siteConfig.subdomain) {
      entries.push({ url: `https://${sub}.${siteConfig.baseDomain}`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 });
    }
  }
  return entries;
}
