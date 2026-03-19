# KNBL Website — SEO & GEO Documentation

## Overview

This document covers the full SEO (Search Engine Optimization) and GEO (Generative Engine Optimization) implementation on the KNBL Next.js 15 website. It serves as a reference for maintaining, extending, and auditing SEO as the site evolves.

**Site domain:** `https://knbl.co`
**Framework:** Next.js 15 App Router
**Implementation date:** March 2026

---

## Problem We Solved

All pages were marked `'use client'` — Next.js App Router does **not** allow `metadata` exports from client components. This meant Google received zero structured metadata from any page. There was also no sitemap, no robots.txt, no Open Graph, no JSON-LD, and no GEO signals.

---

## Architecture: Server Wrapper + Client Component Pattern

Every page that needs `'use client'` (for animations, hooks, state) was split into two files:

```
app/agency/
  page.tsx              ← SERVER component: exports metadata, renders client component
  AgencyPageClient.tsx  ← CLIENT component: 'use client', all interactive code
```

This pattern allows Next.js to read and inject metadata at build time while keeping full client-side interactivity.

### Pages refactored

| Route | Server Wrapper | Client Component |
|---|---|---|
| `/` | `app/page.tsx` | `app/HomePageClient.tsx` |
| `/agency` | `app/agency/page.tsx` | `app/agency/AgencyPageClient.tsx` |
| `/work` | `app/work/page.tsx` | `app/work/WorkPageClient.tsx` |
| `/ai-productions` | `app/ai-productions/page.tsx` | `app/ai-productions/AiProductionsPageClient.tsx` |
| `/insights` | `app/insights/page.tsx` | `app/insights/InsightsPageClient.tsx` |
| `/contact` | `app/contact/page.tsx` | `app/contact/ContactPageClient.tsx` |
| `/work/[slug]` | `app/work/[slug]/page.tsx` | `app/work/[slug]/ProjectPageClient.tsx` |
| `/insights/[slug]` | `app/insights/[slug]/page.tsx` | `app/insights/[slug]/BlogPostPageClient.tsx` |

### Rule for new pages
Whenever you add a new page that needs `'use client'`:
1. Create `PageNameClient.tsx` with the `'use client'` directive and all interactive code
2. Create `page.tsx` as a server component that exports `metadata` and renders `<PageNameClient />`

---

## Global Metadata (`app/layout.tsx`)

Sets site-wide defaults that all pages inherit and can override.

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://knbl.co'),  // Required for absolute OG image URLs
  title: {
    default: 'KNBL — Outshine the Noise',
    template: '%s | KNBL',                   // Page titles render as "About | KNBL"
  },
  description: 'KNBL is a strategy-driven creative collective...',
  keywords: ['creative agency', 'marketing', 'brand strategy', 'AI productions', ...],
  authors: [{ name: 'KNBL' }],
  creator: 'KNBL',
  publisher: 'KNBL',
  openGraph: {
    type: 'website',
    siteName: 'KNBL',
    locale: 'en_US',
    ...
  },
  twitter: {
    card: 'summary_large_image',
    site: '@knbl',
    ...
  },
}
```

---

## Per-Page Metadata

Each page exports its own `metadata` object which overrides the global defaults.

### Homepage (`/`)
```ts
title: 'Creative Agency for Ambitious Brands'
description: "We're KNBL — a strategy-driven creative collective..."
canonical: '/'
```

### Agency (`/agency`)
```ts
title: 'About the Agency'
description: "KNBL is a strategy-driven creative collective built for what's next..."
canonical: '/agency'
```

### Work (`/work`)
```ts
title: 'Our Work — Portfolio'
description: "Explore KNBL's portfolio of brand campaigns, AI productions..."
canonical: '/work'
```

### AI Productions (`/ai-productions`)
```ts
title: 'AI Productions'
description: 'KNBL AI Productions — Generative AI video content, virtual spokespersons...'
canonical: '/ai-productions'
```

### Insights (`/insights`)
```ts
title: 'Insights — Strategy, Creativity & Tech'
description: "KNBL's blog on brand strategy, AI in marketing..."
canonical: '/insights'
```

### Contact (`/contact`)
```ts
title: 'Contact Us'
description: "Get in touch with KNBL. Based in Tel Aviv..."
canonical: '/contact'
```

---

## Dynamic Route Metadata

### `/work/[slug]` — `generateMetadata()`

Each project gets a unique title and description generated at build time. All 13 project slugs are prerendered via `generateStaticParams()`.

**Slugs:** `ho-brands`, `rafael`, `xiaomi`, `roladin`, `carters`, `safari`, `anker`, `lod`, `electra-precise`, `takeda`, `reuth-hospital`, `aion`, `trans-israel`

```ts
export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { ... }
  };
}
```

### `/insights/[slug]` — `generateMetadata()`

Each blog post gets unique metadata including `og:type: 'article'` and `publishedTime`. All 5 posts are prerendered.

**Slugs:** `how-ai-is-redefining-brand-creativity`, `the-end-of-one-size-fits-all-marketing`, `when-trends-become-strategy`, `the-rise-of-micro-communities`, `data-driven-storytelling`

```ts
openGraph: {
  type: 'article',
  publishedTime: post.date,  // Enables article rich results
  images: [{ url: post.image }],
}
```

---

## Sitemap (`/sitemap.xml`)

**File:** `app/sitemap.ts`
**URL:** `https://knbl.co/sitemap.xml`

Generated automatically by Next.js. Includes all 24 routes:

| Routes | Count | Priority | Change Frequency |
|---|---|---|---|
| Static pages (home, agency, work, ai-productions, insights, contact) | 6 | 0.7–1.0 | weekly/monthly |
| Work case studies | 13 | 0.7 | monthly |
| Insights blog posts | 5 | 0.6 | monthly |

---

## Robots (`/robots.txt`)

**File:** `app/robots.ts`
**URL:** `https://knbl.co/robots.txt`

```
User-agent: *
Allow: /
Disallow: /submission/
Disallow: /api/
Sitemap: https://knbl.co/sitemap.xml
```

---

## JSON-LD Structured Data

**Component:** `app/components/JsonLd.tsx`

A reusable server component that injects `<script type="application/ld+json">` tags. Used in server page wrappers — never in client components.

```tsx
import { JsonLd } from '../components/JsonLd';
// In a server component:
<JsonLd data={schemaObject} />
```

### Schemas implemented

#### Homepage (`/`)
- **`Organization`** — name, URL, logo, address, contact point
- **`WebSite`** — with `SearchAction` (sitelinks search box eligibility)
- **`FAQPage`** — 4 common questions about KNBL services, AI productions, location, contact

#### Agency (`/agency`)
- **`AboutPage`** — page description and URL
- **`LocalBusiness`** — Tel Aviv address, phone, email, service types, price range

#### Work (`/work`)
- **`CollectionPage`** — portfolio collection

#### Work/[slug] (`/work/[slug]`)
- **`CreativeWork`** — per-project title, description, creator (KNBL Organization)

#### AI Productions (`/ai-productions`)
- **`Service`** — with `OfferCatalog` listing 3 sub-services: Generative AI Video, AI Virtual Spokesperson, AI Agents & Automation

#### Contact (`/contact`)
- **`ContactPage`** — links to Organization with address and contact details

#### Insights/[slug] (`/insights/[slug]`)
- **`Article`** — headline, description, publishedDate, author, publisher with logo, image
- **`BreadcrumbList`** — Home → Insights → Post title (enables breadcrumb rich results in Google)

---

## GEO — Generative Engine Optimization (`/llms.txt`)

**File:** `public/llms.txt`
**URL:** `https://knbl.co/llms.txt`

An emerging standard (similar to `robots.txt`) designed for LLM crawlers used by ChatGPT, Perplexity, Claude, Gemini. It tells AI systems who KNBL is, what we do, and where to find more information.

**Contents:**
- Company description and positioning
- Full services list
- Notable clients (13 brands)
- AI capabilities and expertise
- E-E-A-T signals (experience, expertise, authoritativeness, trustworthiness)
- Contact details
- Resource URLs

---

## Skills Installed

Two Claude Code skills installed globally for ongoing SEO auditing:

```bash
npx skills add coreyhaines31/marketingskills@seo-audit -g
npx skills add coreyhaines31/marketingskills@ai-seo -g
```

| Command | Purpose |
|---|---|
| `/seo-audit` | Audits pages for crawlability issues, weak metadata, missing canonicals |
| `/ai-seo` | Reviews GEO signals — how well the site will be cited by AI search engines |

---

## Adding New Content

### New static page
1. Create `app/new-page/NewPageClient.tsx` with `'use client'`
2. Create `app/new-page/page.tsx` as a server component:
```ts
import type { Metadata } from 'next';
import NewPageClient from './NewPageClient';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description (150–160 chars).',
  alternates: { canonical: '/new-page' },
  openGraph: { title: '...', description: '...', url: '/new-page' },
};

export default function NewPage() {
  return <NewPageClient />;
}
```
3. Add the route to `app/sitemap.ts`

### New work case study
1. Add the slug and metadata to `projectsMeta` in `app/work/[slug]/page.tsx`
2. Add the full project data to `projects` in `app/work/[slug]/ProjectPageClient.tsx`
3. Add the slug to `workSlugs` in `app/sitemap.ts`

### New blog post
1. Add the post metadata to `blogPostsMeta` in `app/insights/[slug]/page.tsx`
2. Add the full post data to `blogPosts` in `app/insights/[slug]/BlogPostPageClient.tsx`
3. Add the slug to `insightSlugs` in `app/sitemap.ts`

---

## Verification Checklist

- [ ] `https://knbl.co/sitemap.xml` — all routes listed
- [ ] `https://knbl.co/robots.txt` — correct rules and sitemap URL
- [ ] `https://knbl.co/llms.txt` — accessible to crawlers
- [ ] Google Rich Results Test — validate JSON-LD on homepage, agency, insights posts
- [ ] Lighthouse SEO audit — target score: 100
- [ ] Google Search Console — submit sitemap after deploy
- [ ] Run `/seo-audit` skill after major content changes
- [ ] Run `/ai-seo` skill quarterly to check GEO visibility
