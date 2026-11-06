#!/usr/bin/env node
/**
 * HARDCODE GUARD — runs before every build (`npm run build` chains this first).
 * Fails the build if the literal production base domain appears anywhere outside
 * the allowed files (src/lib/siteConfig.ts, .env.example, this script, README docs).
 * This is what keeps otro.bd -> otro.cn migration a ONE-ENV-VAR change.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
// The guarded default domain literal. Per-site env values are NOT scanned here;
// only committed source must stay portable.
const FORBIDDEN = 'otro.bd';

// Files legitimately allowed to mention the default domain.
const ALLOWED = new Set([
  'src/lib/siteConfig.ts',   // single source of truth (env-default)
  '.env.example',            // documents the default value
  'scripts/assert-no-hardcoded-domain.mjs', // this guard itself
  'README.md',               // human documentation of the architecture
]);

const SKIP_DIRS = new Set(['node_modules', '.next', '.vercel', 'git', 'dist', 'out', 'build']);
const SCAN_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json', '.css', '.html', '.xml']);

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.') || SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) yield* walk(full);
    else if (SCAN_EXT.has(st.isFile() ? full.slice(full.lastIndexOf('.')) : '')) yield full;
  }
}

const violations = [];
for (const file of walk(ROOT)) {
  const rel = relative(ROOT, file).replaceAll('\\', '/');
  if (ALLOWED.has(rel)) continue;
  const text = readFileSync(file, 'utf8');
  if (text.includes(FORBIDDEN)) {
    const lines = text.split('\n');
    lines.forEach((l, i) => {
      if (l.includes(FORBIDDEN)) violations.push(`${rel}:${i + 1}: ${l.trim().slice(0, 120)}`);
    });
  }
}

if (violations.length) {
  console.error('\n\u2716 BUILD BLOCKED — hardcoded base domain found outside siteConfig:');
  violations.forEach((v) => console.error('   ' + v));
  console.error('\n  Fix: import { absoluteUrl, getHost } from "@/lib/siteConfig" instead.\n');
  process.exit(1);
}
console.log('\u2714 Domain-portability guard passed: no hardcoded base domain outside siteConfig.');
