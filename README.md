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

Copy `.env.example` to `.env` and set your production values:

| Variable             | Description                                          | Default              |
| -------------------- | ---------------------------------------------------- | -------------------- |
| `PUBLIC_SITE_URL`    | Production site URL (canonical, OG, sitemap, robots) | `https://averie.com` |
| `PUBLIC_BOOKING_URL` | Next.js booking app URL                              | `/book`              |

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
- Dynamic `robots.txt` (follows `PUBLIC_SITE_URL`)
- Auto sitemap (`/sitemap-index.xml`)
- Self-hosted Montserrat (`@fontsource/montserrat`)
- Hero LCP preload
- Semantic HTML (`main`, `h1`, `address`, `dl`, `blockquote`)
- Skip link, theme-color, apple-touch-icon

### You need to do (off-site / assets)

1. Set `PUBLIC_SITE_URL` in `.env` to your real domain before deploy
2. Add `public/og.jpg` at 1200×630 (salon photo + logo/text)
3. [Google Business Profile](https://business.google.com) — claim & verify Averie on Maps
4. [Google Search Console](https://search.google.com/search-console) — submit `https://your-domain.com/sitemap-index.xml`
5. Optional: Bing Webmaster Tools, GA4 (`PUBLIC_GA_ID` in `.env.example`)

## Stack

- Astro 7 (static output)
- Tailwind CSS v4
- English-only copy (inline in components)
