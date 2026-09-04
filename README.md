# Averie Landing (Astro)

Static marketing landing page for Averie salon — optimized for SEO.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Environment

Canonical, OG, sitemap, and JSON-LD use the hardcoded site URL `https://www.averienails.com` (see `src/lib/site.ts`). Copy `.env.example` to `.env` only if you need optional analytics:

| Variable       | Description               |
| -------------- | ------------------------- |
| `PUBLIC_GA_ID` | Optional Google Analytics |

## Assets you need to add

| File                    | Size                       | Purpose                                       |
| ----------------------- | -------------------------- | --------------------------------------------- |
| `public/og.jpg`         | **1200 × 630 px**          | Facebook/Zalo/iMessage link preview + JSON-LD |
| `public/icons/icon.png` | 512 × 512 px (recommended) | Favicon + Apple Touch Icon                    |

Existing salon photos in `public/salon/` are already used on the page.

## SEO checklist

### Done in code

- Meta title, description, canonical, robots
- Open Graph + Twitter Card
- JSON-LD `BeautySalon` + `WebSite` + `areaServed`
- Dynamic `robots.txt` (hardcoded `https://www.averienails.com`)
- Auto sitemap (`/sitemap-index.xml`)
- Self-hosted Montserrat (`@fontsource/montserrat`)
- Hero LCP preload
- Semantic HTML (`main`, `h1`, `address`, `dl`, `blockquote`)
- Skip link, theme-color, apple-touch-icon

### You need to do (off-site / assets)

1. Add `public/og.jpg` at 1200×630 (salon photo + logo/text)
2. [Google Business Profile](https://business.google.com) — claim & verify Averie on Maps
3. [Google Search Console](https://search.google.com/search-console) — submit `https://www.averienails.com/sitemap-index.xml`
4. Optional: Bing Webmaster Tools, GA4 (`PUBLIC_GA_ID` in `.env.example`)

## Stack

- Astro 7 (static output)
- Tailwind CSS v4
- English-only copy (inline in components)
