import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';

export const metadata = buildMetadata({ title: 'Terms of Service', path: '/terms' });

export default function TermsPage() {
  return (
    <>
      <Navbar links={[]} />
      <main id="main">
        <Section eyebrow="Legal" title="Terms of Service">
          <div className="prose max-w-3xl space-y-4 text-sm leading-relaxed text-brand-ink/80">
            <p>These Terms govern your use of this {siteConfig.brandName} website, operated by {siteConfig.legalEntityName}. By accessing the site you agree to these terms.</p>
            <p><strong>Draft — legal review pending.</strong> Phase 6 will add service-specific clauses (education integrity policy, trade commission terms, shop returns, tours facilitation disclaimers, SMM panel refill policy).</p>
            <p>Contact: {siteConfig.contactEmail}</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
