import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/siteConfig';

/**
 * OTRO Education homepage (CONTENT_BRIEFS SITE 1 — "Study Beyond Borders").
 * Hub-and-spoke: this page summarises; /services/* pages carry the depth.
 */
export default function HomePage() {
  return (
    <>
      <Navbar
        links={[
          { href: '/services', label: 'Services' },
          { href: '/about', label: 'About' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaLabel="Free Consultation"
      />
      <main id="main">
        {/* Hero */}
        <Section
          eyebrow={siteConfig.tagline}
          title="From study-abroad dreams to admission, visa and settlement."
          lead="OTRO Education turns applications into offers: university shortlisting, scholarship matching, document packages, visa preparation and post-arrival guidance — led by a founder who has done it themselves, in China."
          tone="navy"
        >
          <div className="flex flex-wrap gap-4">
            <Button href="/contact">Free Consultation</Button>
            <Button href="/services" variant="ghost">Explore services</Button>
          </div>
        </Section>

        {/* Service blocks */}
        <Section eyebrow="What we do" title="One journey, every stage covered" tone="light">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card href="/services#study-abroad" title="Study-Abroad Consultancy" badge="China · UK · USA · Canada · Germany · Australia · Europe">
              Target-country strategy, university shortlisting &amp; matching to your grades, budget and goals.
            </Card>
            <Card href="/services#applications" title="Application Packages" badge="SOP · CV · LOR">
              Drafting and polishing statements of purpose, motivation letters, academic CVs and recommendation letters.
            </Card>
            <Card href="/services#scholarships" title="Scholarship Matching" badge="CSC · University · Govt">
              Research into funded seats you actually qualify for — plus a scholarship-winning CV built for reviewers.
            </Card>
            <Card href="/services#visa" title="Visa & Interview Prep" badge="Documentation · Mocks">
              Complete document checklists, file review, and mock interviews with scripts and examiner-style questions.
            </Card>
            <Card href="/services#academic" title="Academic Support" badge="Writing · Data · Formatting">
              Thesis chapters, research proposals, literature reviews, APA/MLA/Harvard/Chicago formatting, SPSS/R analysis.
            </Card>
            <Card href="/services#career" title="Career Services" badge="CV · LinkedIn · Interviews">
              ATS-rated one-page CVs, Europass, LinkedIn optimisation, cover letters, negotiation scripts, career roadmaps.
            </Card>
          </div>
        </Section>

        {/* Differentiator */}
        <Section
          eyebrow="Why OTRO Education"
          title="Guidance from someone living the journey"
          lead="Your consultant is a current international Master&apos;s student in China and a co-authored, Scopus-indexed researcher — not a call-centre agent recycling brochures. We have filled these forms, sat these interviews, and crossed these borders ourselves."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <Card title="Authentic experience">First-hand admissions, visa and settlement knowledge across BD → CN → global routes.</Card>
            <Card title="Language advantage">EN ↔ 中文 ↔ বাংলা support reaches counselors, coordinators and consulates.</Card>
            <Card title="Honest scope">Coaching, drafting and reference work with an academic-integrity disclaimer — never exam-taking.</Card>
          </div>
        </Section>

        {/* How it works */}
        <Section eyebrow="How it works" title="Three steps, zero confusion" tone="light">
          <ol className="space-y-6">
            {[
              ['Step 1 — Free consultation', 'Share your grades, budget and destination goals. We map realistic options within 48 hours.'],
              ['Step 2 — Package & apply', 'We build your document package, shortlist universities/scholarships, and submit with tracked deadlines.'],
              ['Step 3 — Offer, visa, fly', 'Admission accepted? We move to visa documentation, interview mocks and pre-departure settlement guidance.'],
            ].map(([t, d]) => (
              <li key={t} className="rounded-xl border border-brand-mist bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-brand-navy">{t}</h3>
                <p className="mt-1 text-sm text-brand-ink/80">{d}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Pricing anchors */}
        <Section
          eyebrow="Pricing"
          title="Transparent tiers, published anchors"
          lead="Final quotes depend on destination and scope. Every engagement starts with a free consultation."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <Card title="Basic — from $49" badge="Single deliverable">One SOP/CV/LOR draft, formatting or profile task, delivered in 3–5 days.</Card>
            <Card title="Standard — from $199" badge="Application pack">Full shortlist + complete application package for up to 3 universities.</Card>
            <Card title="Premium — from $499" badge="End-to-end">Study-abroad pack: applications, scholarships, visa file review and interview mocks.</Card>
          </div>
          <p className="mt-6 text-sm text-brand-ink/70">
            Bundles: Student Success Pack · Study-Abroad Pack · Thesis Complete Pack — see <a className="underline" href="/services">services</a>.
          </p>
        </Section>

        {/* FAQ teaser + CTA */}
        <Section
          eyebrow="FAQ"
          title="Answers before you ask"
          lead="Timelines, guarantees, refund logic and our academic-integrity policy are answered in full on the contact and services pages."
          tone="navy"
        >
          <Button href="/contact">Book your free consultation</Button>
        </Section>
      </main>
      <Footer />
    </>
  );
}
