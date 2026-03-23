# Search Console & Webmaster Tools Setup

Site: **https://knbl360.co.il**

---

## Part 1 — Google Search Console

### Step 1 — Sign in
Go to **https://search.google.com/search-console** and sign in with the Google account that manages the KNBL website.

---

### Step 2 — Add the property
1. Click the property dropdown in the top-left corner → **Add property**
2. Choose **Domain** (recommended — covers http, https, www and non-www automatically)
3. Type `knbl360.co.il` → click **Continue**

**Verify ownership via DNS:**
Google will give you a TXT record to add to your domain's DNS settings.

1. Copy the TXT record Google provides (looks like: `google-site-verification=xxxxxxxxxxxxxx`)
2. Go to your domain registrar (wherever knbl360.co.il is registered — likely GoDaddy, Namecheap, or a local Israeli registrar)
3. Open DNS settings → Add a new **TXT record**:
   - Host/Name: `@`
   - Value: paste the code Google gave you
   - TTL: default (or 3600)
4. Click Save
5. Go back to Google Search Console → click **Verify**

> DNS changes can take a few minutes up to 48 hours to propagate. If verification fails immediately, wait 15 minutes and try again.

---

### Step 3 — Submit the sitemap
1. In the left sidebar, click **Sitemaps**
2. In the "Add a new sitemap" field type: `sitemap.xml`
3. Click **Submit**
4. Status should show **Success**

The sitemap URL will be: `https://knbl360.co.il/sitemap.xml`

> **Note:** Make sure the sitemap in the codebase references `knbl360.co.il` as the base URL, not `knbl.co`. Check `app/sitemap.ts` — the `baseUrl` constant should match the live domain.

---

### Step 4 — Request indexing for all articles
Use the URL Inspection tool to fast-track the 7 blog articles:

1. Paste each URL into the search bar at the top of Search Console
2. Click **Request Indexing**
3. Wait a few seconds → repeat for the next URL

**Article URLs to submit:**
```
https://knbl360.co.il/insights/marketers-guide-to-not-drowning-in-ai-tools
https://knbl360.co.il/insights/marketing-measurement-is-broken
https://knbl360.co.il/insights/ninety-seconds-authenticity-is-the-only-strategy
https://knbl360.co.il/insights/precision-is-the-new-competitive-moat
https://knbl360.co.il/insights/your-best-influencers-are-already-on-payroll
https://knbl360.co.il/insights/stop-renting-attention
https://knbl360.co.il/insights/the-cmo-as-navigator
```

Also submit the main pages:
```
https://knbl360.co.il/
https://knbl360.co.il/insights
https://knbl360.co.il/agency
https://knbl360.co.il/work
https://knbl360.co.il/ai-productions
https://knbl360.co.il/contact
```

---

### Step 5 — Check back in 3–5 days
- **Pages** → Indexed: all submitted pages should appear here
- **Core Web Vitals**: check mobile and desktop scores
- **Coverage**: look for any "Excluded" or "Error" pages and fix them

---

---

## Part 2 — Bing Webmaster Tools

Bing powers **Microsoft Copilot** — submitting here puts KNBL into Copilot's source pool.

### Step 1 — Sign in
Go to **https://www.bing.com/webmasters** and sign in with a Microsoft account.

---

### Step 2 — Add the site
1. Click **Add a site**
2. Enter `https://knbl360.co.il` → click **Add**

---

### Step 3 — Verify ownership

**Option A — Import from Google Search Console (easiest)**
If Google Search Console is already verified:
1. Click **Import from Google Search Console**
2. Sign in with the same Google account
3. Bing will import your site and verify automatically

**Option B — XML file**
1. Bing gives you an XML file (e.g. `BingSiteAuth.xml`)
2. Place that file in the `/public` folder of the project
3. Deploy the site
4. Click **Verify** in Bing Webmaster Tools

**Option C — Meta tag**
1. Bing gives you a `<meta>` tag
2. Add it to `app/layout.tsx` inside the `metadata` export:
```ts
verification: {
  bing: 'YOUR_BING_VERIFICATION_CODE',
},
```
3. Deploy → click **Verify**

---

### Step 4 — Submit the sitemap
1. In the left sidebar, click **Sitemaps**
2. Click **Submit sitemap**
3. Enter: `https://knbl360.co.il/sitemap.xml`
4. Click **Submit**

---

### Step 5 — Submit URLs for fast indexing
1. In the left sidebar, click **URL Submission**
2. Paste the article URLs one by one (same list as Google above)
3. Click **Submit**

Bing allows up to 10,000 URL submissions per day on the free plan.

---

---

## Important: Domain Consistency Check

Before submitting to either tool, verify that the following files all use `knbl360.co.il` as the base domain:

| File | What to check |
|------|--------------|
| `app/sitemap.ts` | `const baseUrl = 'https://knbl360.co.il'` |
| `app/robots.ts` | `sitemap: 'https://knbl360.co.il/sitemap.xml'` |
| `app/layout.tsx` | `metadataBase: new URL('https://knbl360.co.il')` |
| `public/llms.txt` | All URLs should reference `knbl360.co.il` |
| `app/page.tsx` | Organization schema `url` field |
| `app/agency/page.tsx` | LocalBusiness schema `url` field |
| `app/ai-productions/page.tsx` | Service schema `url` field |
| `app/insights/[slug]/page.tsx` | Article schema `url` fields |

If any of these reference `knbl.co` instead, update them before submitting to Search Console.

---

## Timeline

| Action | When |
|--------|------|
| Add DNS TXT record | Day 1 |
| Google verification | Day 1–2 (after DNS propagates) |
| Submit sitemap to Google | Day 2 |
| Request indexing for all pages | Day 2 |
| Set up Bing Webmaster Tools | Day 2 |
| Submit sitemap to Bing | Day 2 |
| Check Google indexing coverage | Day 5–7 |
| Check Bing indexing | Day 5–7 |
| Monitor Core Web Vitals | Day 14+ |
