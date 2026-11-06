import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';

export const metadata = buildMetadata({ title: 'Privacy Policy', path: '/privacy' });

export default function PrivacyPage() {
  return (
    <>
      <Navbar links={[]} />
      <main id="main">
        <Section eyebrow="Legal" title="Privacy Policy">
          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-brand-ink/80">
            <p>{siteConfig.legalEntityName} collects only the data you submit through contact forms and purchase flows. We never sell personal data.</p>
            <p>Cookies are scoped to our base domain (configured centrally) and used only for session integrity and analytics.</p>
            <p><strong>Draft — legal review pending.</strong> Phase 6 adds GDPR/DPA handling, retention windows, and payment-processor data notes.</p>
            <p>Contact: {siteConfig.contactEmail}</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
