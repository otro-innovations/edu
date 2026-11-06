import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({ title: 'Services', path: '/services' });

export default function ServicesPage() {
  return (
    <>
      <Navbar links={[{ href: '/about', label: 'About' }]} />
      <main id="main">
        <Section eyebrow="Services" title="What we do">
          <p className="text-brand-ink/80">Per-site service blocks are implemented in Phase 4 from CONTENT_BRIEFS.md.</p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
