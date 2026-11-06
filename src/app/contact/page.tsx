import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({ title: 'Contact', description: `Contact ${siteConfig.brandName}.`, path: '/contact' });

/**
 * Consultation form posts to /api/contact (server route). Fields follow the
 * global brief: name, email/phone, service interest, message.
 */
export default function ContactPage() {
  return (
    <>
      <Navbar links={[{ href: '/about', label: 'About' }]} />
      <main id="main">
        <Section eyebrow="Contact" title="Start the conversation" lead={`Email us at ${siteConfig.contactEmail} or send a message below.`}>
          <form action="/api/contact" method="POST" className="grid max-w-xl gap-4">
            <label className="block text-sm font-medium">Name
              <input required name="name" autoComplete="name" className="mt-1 w-full rounded-md border border-brand-mist px-3 py-2" />
            </label>
            <label className="block text-sm font-medium">Email or phone
              <input required name="contact" autoComplete="email" className="mt-1 w-full rounded-md border border-brand-mist px-3 py-2" />
            </label>
            <label className="block text-sm font-medium">Service interest
              <select name="service" className="mt-1 w-full rounded-md border border-brand-mist px-3 py-2">
                <option value="">Select…</option>
                <option>Education</option><option>Digital Marketing</option><option>Trade & Sourcing</option>
                <option>Shopping</option><option>Tours & Travel</option><option>Other</option>
              </select>
            </label>
            <label className="block text-sm font-medium">Message
              <textarea required name="message" rows={5} className="mt-1 w-full rounded-md border border-brand-mist px-3 py-2" />
            </label>
            {/* honeypot anti-spam field — hidden from users */}
            <input type="text" name="company" tabIndex={-1} aria-hidden="true" className="hidden" />
            <button type="submit" className="w-fit rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue">Send message</button>
            <p className="text-xs text-brand-ink/60">Prefer email? <a className="underline" href={mailtoLink('Website enquiry')}>{siteConfig.contactEmail}</a></p>
          </form>
        </Section>
      </main>
      <Footer />
    </>
  );
}
