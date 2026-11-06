import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';

export const metadata = buildMetadata({ title: 'About', description: `About ${siteConfig.brandName}, a division of ${siteConfig.legalEntityName}.`, path: '/about' });

export default function AboutPage() {
  return (
    <>
      <Navbar links={[{ href: '/services', label: 'Services' }]} />
      <main id="main">
        <Section eyebrow="About" title={`The ${siteConfig.brandName} story`} lead="Founded on the Bridge Mindset: connecting China, Bangladesh and the world across language, culture, logistics and education.">
          <p className="max-w-2xl text-brand-ink/80">Placeholder — Phase 4 fills this with the founder story and division-specific narrative from CONTENT_BRIEFS.md.</p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
