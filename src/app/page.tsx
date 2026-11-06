import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/siteConfig';
import { siblingHref } from '@/components/Footer';

/**
 * Starter homepage — each site repo replaces the pillar cards with its own
 * service blocks per CONTENT_BRIEFS.md (Phase 4). Kept intentionally minimal.
 */
export default function HomePage() {
  return (
    <>
      <Navbar links={[{ href: '/about', label: 'About' }, { href: '/services', label: 'Services' }]} />
      <main id="main">
        <Section
          eyebrow={siteConfig.tagline}
          title={`${siteConfig.brandName} — Business Beyond Borders`}
          lead={siteConfig.description}
          tone="navy"
        >
          <Button href="/contact">Talk to us</Button>
        </Section>
        <Section eyebrow="Our divisions" title="Five pillars, one bridge" tone="mist">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card href={siblingHref('edu')} title="OTRO Education" badge="Study abroad">Admissions, visas, academic support & career services.</Card>
            <Card href={siblingHref('digital')} title="OTRO Digital" badge="Growth">Managed ads plus an automated SMM panel.</Card>
            <Card href={siblingHref('trade')} title="Trade OTRO" badge="B2B sourcing">Your trusted buying representative in China.</Card>
            <Card href={siblingHref('shop')} title="Shop OTRO" badge="B2C">Curated products, COD & local delivery in Bangladesh.</Card>
            <Card href={siblingHref('tours')} title="OTRO Tours" badge="China travel">Business, medical & leisure travel facilitation.</Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
