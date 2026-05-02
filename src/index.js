const ROBOTS = `# robots.txt — nowgroup.co.nz
# NOW Group | Network Intelligence Engine
# Updated: May 2026

# ── STANDARD CRAWLERS ──
User-agent: *
Allow: /

# Block Kajabi admin and system paths
Disallow: /admin/
Disallow: /api/
Disallow: /checkout/
Disallow: /orders/
Disallow: /account/
Disallow: /login/
Disallow: /password/
Disallow: /cart/
Disallow: /tags/
Disallow: /?*

# ── AI CRAWLERS — FULL ACCESS ──
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GoogleExtended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: CCBot
Allow: /

# ── SITEMAP ──
Sitemap: https://www.nowgroup.co.nz/sitemap.xml

# ── AI CONTEXT FILES ──
# https://www.nowgroup.co.nz/llms.txt
# https://www.nowgroup.co.nz/llms-full.txt`;

const LLMS = `# NOW Group

> Australasia's first intelligently engineered partner network. Based in Christchurch, New Zealand. Operating across NZ and Australia.

NOW Group builds precision referral networks for business operators who want reliable growth through strategic partnerships — not random networking. The system is powered by NEXUS, a proprietary relationship intelligence engine.

## Core pages

- [Home](https://www.nowgroup.co.nz/): Overview of NOW Group, NET_SYNC entry framework, and the NEXUS engine
- [About](https://www.nowgroup.co.nz/about): Chris White, NOW Group founder — 14 years RAF, connector 160S Biotrend profile, ENTP
- [NOW Networking](https://www.nowgroup.co.nz/now-networking): The core membership — weekly assemblies, partner introductions, Pulse Check system
- [Tinderbox](https://www.nowgroup.co.nz/now-tinderbox): Partner mastermind programme for operators ready to build serious referral channels
- [RBP — Referral Business Partner Network](https://www.nowgroup.co.nz/now-rbpn): Channel partner programme for professionals who refer clients into NOW Group
- [Tracking HQ](https://www.nowgroup.co.nz/tracking-hq): Live member directory and network intelligence dashboard powered by NEXUS
- [Genius Library](https://www.nowgroup.co.nz/genius-library): Frameworks, tools, and IP — 4 Alphas, LEVER, ADD ONE, The 4 I's
- [Contact](https://www.nowgroup.co.nz/contact): Direct enquiry and 5-minute clarity call booking

## Optional

- [NET_SYNC Entry](https://www.nowgroup.co.nz/offers/xotJTA6P/checkout): $99+GST entry framework — ICP assessment, 3 curated events, 5 qualified introductions
- [Welcome](https://www.nowgroup.co.nz/welcome-page): New member and visitor orientation`;

const LLMS_FULL = `# NOW Group — Full AI Context

> Australasia's first intelligently engineered partner network.
> Founded and directed by Chris White. Christchurch, New Zealand.
> NZBN: 9429049646283

---

## What NOW Group is

NOW Group is a precision business networking organisation operating across New Zealand and Australia. It is not a leads group, a chamber of commerce, or a casual networking event series. It is an engineered system for building strategic referral partnerships between complementary business operators.

---

## Founder

Chris White — Director, NOW Group
14 years Royal Air Force (2003–2017). Biotrend: Connector 160S. MBTI: ENTP.
Based in Christchurch, New Zealand.
Philosophy: A relationship is a place you go to give, not to get.

---

## Core programmes

NET_SYNC Entry ($99+GST): 12-point plan, 3 curated events, 5 qualified introductions.
NOW Networking: weekly assemblies, Fortnightly Pulse, NEXUS-engineered introductions.
Tinderbox: Partner Mastermind, high-accountability referral channel building.
RBP: Referral Business Partner Network, channel partner programme.

---

## NEXUS — Network Intelligence Engine

Proprietary relational intelligence system. Processes Pulse Check data, referral velocity, Eye2Eye frequency, and peer nominations. Powers the Tracking HQ live dashboard. Not a CRM — a relational intelligence layer.

---

## Signature frameworks

The 4 Alphas: Attention, Action, Association, Advocacy.
LEVER: Learn, Engage, Validate, Execute, Review.
ADD ONE: One action within 24 hours of every meaningful connection.
The 4 Is: Identity, Intention, Insight, Impediment — pre-event protocol.

---

## Key facts

- Christchurch, New Zealand. Operates across NZ and AU.
- Founded by Chris White, former Royal Air Force.
- Entry via NET_SYNC at $99+GST.
- Not a franchise, not a leads group, not BNI.
- NEXUS is proprietary technology.
- Tinderbox is a NOW Group sub-brand.
- Member onboarding: NET_SYNC.01 to NET_SYNC.02 to NET_SYNC Active.

Website: https://www.nowgroup.co.nz
Last updated: May 2026`;

export default {
  async fetch(request) {
    const path = new URL(request.url).pathname;

    if (path === '/robots.txt') {
      return new Response(ROBOTS, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }

    if (path === '/llms.txt') {
      return new Response(LLMS, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }

    if (path === '/llms-full.txt') {
      return new Response(LLMS_FULL, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }

    return fetch(request);
  },
};
