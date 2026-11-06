import { NextResponse } from 'next/server';
import { allowedOrigins } from '@/lib/siteConfig';

/**
 * Contact form handler. Wire Resend/Nodemailer here once RESEND_API_KEY is set
 * in Vercel env vars (user-managed secret). Origin checked against config-driven
 * allow-list so CORS stays correct after any domain migration.
 */
export async function POST(req: Request) {
  const origin = req.headers.get('origin');
  if (origin && !allowedOrigins().includes(origin) && !origin.includes('vercel.app')) {
    return NextResponse.json({ error: 'Origin not allowed' }, { status: 403 });
  }
  const form = await req.formData().catch(() => null);
  const name = form?.get('name');
  const message = form?.get('message');
  const honeypot = form?.get('company');
  if (honeypot) return NextResponse.redirect(new URL('/contact?ok=1', req.url)); // silently drop bots
  if (!name || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  // TODO(Phase 4): persist to Supabase + send email via Resend.
  return NextResponse.redirect(new URL('/contact?ok=1', req.url));
}
