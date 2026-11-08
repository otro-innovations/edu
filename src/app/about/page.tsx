import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'About OTRO Education',
  description:
    'OTRO Education is led by a current international Master\'s student and published researcher in China. Authentic study-abroad guidance under OTRO INNOVATIONS LLC.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Navbar links={[{ href: '/services', label: 'Services' }, { href: '/contact', label: 'Contact' }]} ctaLabel="Free Consultation" />
      <main id="main">
        <Section
          eyebrow="About"
          title="We are the agency our younger selves needed"
          lead={`${siteConfig.brandName} Education exists because study-abroad advice in South Asia is full of brochures and short on truth. Our founder lived the entire journey — applications, scholarships, visa interviews, relocation, graduate research — and turned it into a repeatable method.`}
          tone="navy"
        />
        <Section eyebrow="The difference" title="Credentials you can verify" tone="light">
          <div className="grid gap-6 sm:grid-cols-3">
            <Card title="Practising academic">Co-authored Scopus-indexed research; currently completing a Master&apos;s in China.</Card>
            <Card title="Trilingual operations">Counselor-grade English plus Mandarin and Bangla — direct access to Chinese admissions offices.</Card>
            <Card title="Corporate accountability">A division of {siteConfig.legalEntityName} (USA) — written scopes, transparent fees, accountable delivery.</Card>
          </div>
        </Section>
        <Section eyebrow="Our promise" title="Honest scope, real support" lead="We coach, draft, verify and accompany. We never take exams for you, never fabricate documents, and never promise outcomes no ethical agency can control." tone="mist">
          <Button href="/contact">Book a free consultation</Button>
        </Section>
      </main>
      <Footer />
    </>
  );
}
