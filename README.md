# OTRO Starter Template

Next.js (App Router) + TypeScript + Tailwind starter for the OTRO INNOVATIONS LLC web
ecosystem. All six sites (hub + five pillars) are spawned from this template so they share
design DNA and — critically — the **domain-portability engine**.

## Sites spawned from this template
| Repo | Live host | Division |
|------|-----------|----------|
| main | apex hub | OTRO corporate gateway |
| edu | education subdomain | OTRO Education |
| digital | digital subdomain | OTRO Digital |
| trade | trade subdomain | Trade OTRO (B2B) |
| shop | shop subdomain | Shop OTRO (B2C) |
| tours | tours subdomain | OTRO Tours |

(Live hosts are derived at runtime from `NEXT_PUBLIC_BASE_DOMAIN`; never hardcoded.)

## Domain portability (non-negotiable)
- `src/lib/siteConfig.ts` is the single source of truth for base domain, host resolution,
  canonical/OG URLs, mailto links, CORS allow-lists and cookie scoping.
- Set `NEXT_PUBLIC_BASE_DOMAIN` per Vercel project. Migrating the whole ecosystem to a new
  base domain = change that ONE env var + DNS. No code edits.
- Build-time guard: `npm run guard` (chained into `npm run build`) fails the build if the
  default domain literal appears outside `siteConfig.ts` / `.env.example`.

## Getting started
```bash
cp .env.example .env.local
npm install
npm run dev      # http://localhost:3000
npm run build    # guard + production build
```

## Deploy (Vercel)
1. Import the repo into Vercel (framework auto-detected; `vercel.json` pins build command).
2. Add env vars: `NEXT_PUBLIC_BASE_DOMAIN`, `NEXT_PUBLIC_SITE_SUBDOMAIN`, `NEXT_PUBLIC_CONTACT_EMAIL`.
3. Attach the custom domain for this pillar; add the CNAME Cloudflare instructs.

Secrets (Stripe/PayPal/SSLCommerz/Supabase/Resend keys) live ONLY in Vercel env vars.
