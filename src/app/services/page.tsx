import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Services — Admissions, Scholarships, Visa, Academic & Career Support',
  description:
    'Full catalogue of OTRO Education services: study-abroad consultancy, application packages, scholarship matching, visa and interview prep, academic writing support, career services and technical deliverables.',
  path: '/services',
});

/** SITE 1 service catalogue (CONTENT_BRIEFS). Anchors match homepage cards. */
export default function ServicesPage() {
  return (
    <>
      <Navbar links={[{ href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }]} ctaLabel="Free Consultation" />
      <main id="main">
        <Section eyebrow="Services" title="Everything between you and your offer letter" tone="navy" />

        <Section id="study-abroad" eyebrow="01 · Study abroad" title="Consultancy & university matching" tone="light">
          <p className="max-w-3xl text-brand-ink/80">
            Destination strategy across China, the UK, USA, Canada, Germany, Australia and wider Europe. We shortlist
            universities matched to your grades, budget and career goals — reach, target and safe picks — with intake
            calendars and total-cost breakdowns so nothing surprises you later.
          </p>
        </Section>

        <Section id="applications" eyebrow="02 · Applications" title="The complete document package" tone="mist">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="SOP / Personal / Motivation Letters">Narrative drafting built on your real profile — multiple revisions included.</Card>
            <Card title="Academic CVs">Structure, impact verbs, publication/project sections sized for admissions committees.</Card>
            <Card title="LOR drafting">Drafts your referees can sign confidently, tailored per university.</Card>
            <Card title="Application submission">Portal handling, deadline tracking and status reporting until decisions arrive.</Card>
            <Card title="IELTS / TOEFL / GRE guidance">Resource plans, booking guidance and score-target strategy for your intake.</Card>
            <Card title="Post-study work visas">PSW / PR-track mapping so your degree leads somewhere.</Card>
          </div>
        </Section>

        <Section id="scholarships" eyebrow="03 · Scholarships" title="Funding you actually qualify for" tone="light">
          <p className="max-w-3xl text-brand-ink/80">
            Manual research into CSC, university, government and departmental funding matched to your field and
            profile — then a scholarship-winning CV and supporting narrative engineered for reviewers, not guesswork.
          </p>
        </Section>

        <Section id="visa" eyebrow="04 · Visa" title="Documentation & interview preparation" tone="mist">
          <div className="grid gap-6 sm:grid-cols-3">
            <Card title="File assembly">Complete checklists, financial-document guidance, admission/visa coordination.</Card>
            <Card title="Mock interviews">Examiner-style drills with recorded feedback and answer scripts you can adapt.</Card>
            <Card title="Pre-departure">Medical, insurance, flight and settlement briefings for your destination city.</Card>
          </div>
        </Section>

        <Section id="academic" eyebrow="05 · Academic support" title="Writing, data & formatting — coaching model" tone="light">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Assignments & essays">Essays, case studies, annotated bibliographies, abstracts, reflections, lab reports.</Card>
            <Card title="Thesis & research">Dissertation chapters, research proposals, literature reviews, supervision support.</Card>
            <Card title="Journal formatting">APA / MLA / Harvard / Chicago conversion and reference management.</Card>
            <Card title="Editing & originality">Proofreading, humanising/AI-detection pass, plagiarism &amp; Turnitin report.</Card>
            <Card title="Data & visuals">SPSS / Excel / R analysis, survey design, infographics, PowerPoint/Canva redesign.</Card>
            <Card title="Language services">Transcription, বাংলা↔English translation, PDF↔Word cleanup, book reviews.</Card>
          </div>
          <aside className="mt-8 rounded-lg border border-brand-amber/40 bg-brand-amber/10 p-4 text-sm text-brand-ink/80">
            <strong>Academic integrity:</strong> we provide model/reference work, coaching and editing to build your
            capability — never exam-taking or misrepresentation of authorship. You remain responsible for institutional rules.
          </aside>
        </Section>

        <Section id="career" eyebrow="06 · Career services" title="Get hired, freelance or negotiated" tone="mist">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="CVs that pass filters">One-page, Europass and ATS-rated variants tuned per role.</Card>
            <Card title="Profile optimisation">LinkedIn rewrite, GitHub profile, Upwork/Fiverr positioning.</Card>
            <Card title="Outreach kits">Cover letters, cold-email &amp; networking templates that get replies.</Card>
            <Card title="Interview coaching">Behavioural + technical drills, salary-negotiation scripts.</Card>
            <Card title="Career roadmaps">Session-based planning for industry switches and graduate trajectories.</Card>
            <Card title="Mentorship retainer">Monthly academic mentorship &amp; research supervision support.</Card>
          </div>
        </Section>

        <Section eyebrow="Pricing" title="Tiers & bundles" lead="All prices are starting anchors; final quotes follow your free consultation." tone="light">
          <div className="grid gap-6 sm:grid-cols-3">
            <Card title="Basic — from $49">Single deliverable: one SOP, CV, edit or formatting task.</Card>
            <Card title="Standard — from $199">Application pack for up to 3 universities incl. shortlist.</Card>
            <Card title="Premium — from $499">Study-Abroad Pack: end-to-end applications → visa mocks.</Card>
          </div>
          <p className="mt-6 text-sm text-brand-ink/70">Bundles: Student Success Pack · Study-Abroad Pack · Thesis Complete Pack.</p>
          <div className="mt-8"><Button href="/contact">Start with a free consultation</Button></div>
        </Section>

        {/* FAQ */}
        <Section eyebrow="FAQ" title="Straight answers" tone="mist">
          <div className="max-w-3xl space-y-6">
            {[
              ['Do you guarantee visas or admissions?', 'No honest agency can. We guarantee process quality: realistic shortlists, polished documents, tracked deadlines and interview readiness. Our own journey is the proof of method.'],
              ['How long does the full cycle take?', 'Typically 3–9 months depending on intake and country. Start 8–10 months before your target semester.'],
              ['Is the academic support plagiarism-safe?', 'Every deliverable passes originality checks and includes a report. Work is reference/coaching material under our integrity policy.'],
              ['Can Bangladeshi students pay locally?', 'Yes — bKash/Nagad/SSLCommerz for BD clients; Stripe/PayPal USD globally.'],
            ].map(([q, a]) => (
              <details key={q} className="rounded-lg border border-brand-mist bg-white p-4">
                <summary className="cursor-pointer font-semibold text-brand-navy">{q}</summary>
                <p className="mt-2 text-sm text-brand-ink/80">{a}</p>
              </details>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
