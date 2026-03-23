# How to Add a New Article to Insights

Articles live entirely in TypeScript data files — there is no CMS or database. Every new article requires edits to **4 files** and one image drop.

---

## Quick Checklist

- [ ] Prepare the header image (WebP, ~1200×630px)
- [ ] Add image to `public/images/blog/`
- [ ] Add card data to `BlogGrid.tsx`
- [ ] Add metadata to `[slug]/page.tsx`
- [ ] Add full content to `BlogPostPageClient.tsx`
- [ ] Add to sitemap in `sitemap.ts`
- [ ] Add to `public/llms.txt`

---

## Step 0 — Decide the Slug and Date

The **slug** is the URL-safe article identifier. It must be:
- lowercase, hyphen-separated
- descriptive of the article title
- unique (not used by any existing article)

Example: `the-future-of-brand-strategy` → URL will be `knbl.co/insights/the-future-of-brand-strategy`

The **date** is the publication date in two formats:
- ISO: `2026-04-15` (used in code)
- Display: `Apr 15, 2026` (shown to readers)

---

## Step 1 — Add the Header Image

**Naming convention:**
```
{YYYY-MM-DD}_{slug}_header.webp
```

Example:
```
2026-04-15_the-future-of-brand-strategy_header.webp
```

**Place the file at:**
```
public/images/blog/2026-04-15_the-future-of-brand-strategy_header.webp
```

**Image specs:**
- Format: WebP (compress with [Squoosh](https://squoosh.app) or similar)
- Dimensions: 1200 × 630px minimum (16:9 ratio works well)
- Target file size: under 700 KB

---

## Step 2 — Add the Card to BlogGrid

**File:** `app/insights/components/BlogGrid.tsx`

Add a new object to the top of the `blogs` array (newest articles go first):

```ts
const blogs = [
  // ADD NEW ARTICLE HERE (newest first)
  {
    title: 'The Future of Brand Strategy',
    excerpt: 'One or two sentences that appear on the card. Should be compelling and match the article opening.',
    date: 'Apr 15, 2026',
    category: 'Strategy',        // must match one of the filter categories (see below)
    image: '/images/blog/2026-04-15_the-future-of-brand-strategy_header.webp',
    slug: 'the-future-of-brand-strategy',
  },
  // ... existing articles
];
```

**Available categories** (must match exactly — these power the filter):
- `AI & Tech`
- `Data`
- `Brand Strategy`
- `Strategy`
- `Content`

---

## Step 3 — Add Metadata to the Article Page

**File:** `app/insights/[slug]/page.tsx`

Add to the `blogPostsMeta` record:

```ts
const blogPostsMeta: Record<...> = {
  // ADD NEW ARTICLE HERE
  'the-future-of-brand-strategy': {
    title: 'The Future of Brand Strategy',
    description: 'A 150–160 character summary for Google search results. Include the primary keyword. Make it click-worthy.',
    category: 'Strategy',
    date: '2026-04-15',           // ISO format
    image: '/images/blog/2026-04-15_the-future-of-brand-strategy_header.webp',
  },
  // ... existing articles
};
```

**Tips for the `description` field:**
- Keep it under 160 characters
- Include the article's primary keyword
- Summarize the value, not just the topic

---

## Step 4 — Add Full Content to the Article Client

**File:** `app/insights/[slug]/BlogPostPageClient.tsx`

Add to the `blogPosts` record. Content is an array of paragraph and heading objects:

```ts
const blogPosts: Record<...> = {
  // ADD NEW ARTICLE HERE
  'the-future-of-brand-strategy': {
    title: 'The Future of Brand Strategy',
    category: 'Strategy',
    date: 'Apr 15, 2026',           // display format
    isoDate: '2026-04-15',          // ISO format — used for <time> element
    readTime: '4 min read',
    excerpt: 'Same one or two sentences as the card excerpt.',
    image: '/images/blog/2026-04-15_the-future-of-brand-strategy_header.webp',
    content: [
      { type: 'paragraph', text: 'Opening paragraph text...' },
      { type: 'heading', text: 'First Section Heading' },
      { type: 'paragraph', text: 'Body paragraph...' },
      { type: 'paragraph', text: 'Another paragraph...' },
      { type: 'heading', text: 'Second Section Heading' },
      { type: 'paragraph', text: 'More body text...' },
      // continue for all sections
    ],
  },
  // ... existing articles
};
```

**Content structure rules:**
- Use `type: 'heading'` for section titles (renders as H2)
- Use `type: 'paragraph'` for body text
- Do not include the article title as a heading — it renders separately above the content
- The first element is typically a paragraph (the article lede)

**Read time estimate:** ~200 words per minute. Count words, divide by 200, round to nearest minute.

---

## Step 5 — Add to the Sitemap

**File:** `app/sitemap.ts`

Add to the `insightArticles` array:

```ts
const insightArticles = [
  // ADD NEW ARTICLE HERE (newest first)
  { slug: 'the-future-of-brand-strategy', date: '2026-04-15' },
  // ... existing articles
];
```

---

## Step 6 — Add to llms.txt

**File:** `public/llms.txt`

Add to the `## Insights Articles` section (newest first):

```md
- [The Future of Brand Strategy](https://knbl.co/insights/the-future-of-brand-strategy) — Strategy, April 15, 2026. One or two sentence summary of what the article covers and why it matters.
```

---

## Complete Example

Here is how a complete new entry looks across all four files, using the same fictional article:

### `BlogGrid.tsx`
```ts
{
  title: 'The Future of Brand Strategy',
  excerpt: 'Generic positioning no longer protects brands. The next decade will reward specificity, cultural intelligence, and the willingness to take a clear stance.',
  date: 'Apr 15, 2026',
  category: 'Strategy',
  image: '/images/blog/2026-04-15_the-future-of-brand-strategy_header.webp',
  slug: 'the-future-of-brand-strategy',
},
```

### `[slug]/page.tsx` — `blogPostsMeta`
```ts
'the-future-of-brand-strategy': {
  title: 'The Future of Brand Strategy',
  description: 'Generic positioning is losing its protective power. The brands that survive the next decade will win through specificity, not broad appeal.',
  category: 'Strategy',
  date: '2026-04-15',
  image: '/images/blog/2026-04-15_the-future-of-brand-strategy_header.webp',
},
```

### `BlogPostPageClient.tsx` — `blogPosts`
```ts
'the-future-of-brand-strategy': {
  title: 'The Future of Brand Strategy',
  category: 'Strategy',
  date: 'Apr 15, 2026',
  isoDate: '2026-04-15',
  readTime: '5 min read',
  excerpt: 'Generic positioning no longer protects brands. The next decade will reward specificity, cultural intelligence, and the willingness to take a clear stance.',
  image: '/images/blog/2026-04-15_the-future-of-brand-strategy_header.webp',
  content: [
    { type: 'paragraph', text: 'Opening paragraph...' },
    { type: 'heading', text: 'Why Generic Is Dying' },
    { type: 'paragraph', text: '...' },
  ],
},
```

### `sitemap.ts`
```ts
{ slug: 'the-future-of-brand-strategy', date: '2026-04-15' },
```

### `llms.txt`
```md
- [The Future of Brand Strategy](https://knbl.co/insights/the-future-of-brand-strategy) — Strategy, April 15, 2026. Generic positioning is losing its protective power. The brands that survive will win through specificity, cultural intelligence, and a clear stance.
```

---

## Common Mistakes

| Mistake | Result | Fix |
|--------|--------|-----|
| Category in `BlogGrid.tsx` doesn't match filter list | Article is visible but can't be filtered | Use one of the 5 exact category strings listed in Step 2 |
| Slug mismatch between files | Article 404s or shows wrong content | Make sure the slug string is identical across all 4 files |
| Image path has a typo | Broken image | Double-check the filename in `public/images/blog/` |
| Missing from `sitemap.ts` | Google can't discover the article | Always add to sitemap |
| Missing from `llms.txt` | AI search engines won't cite the article | Always update llms.txt for GEO |
| OG description over 160 chars | Google truncates in search results | Keep `description` in `blogPostsMeta` under 160 characters |
