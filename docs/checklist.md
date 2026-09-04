# Averie Landing — SEO Checklist

Landing page Astro tại `F:\Averie-Astro`. Static HTML, English-only.

---

## Đã xong (trong code)

- [x] Meta: `title`, `description`, `canonical`, `robots`
- [x] Open Graph + Twitter Card
- [x] JSON-LD: `BeautySalon`, `WebSite`, `areaServed` (Cohasset + South Shore)
- [x] JSON-LD: `telephone` E.164 (`+17819231955`), `hasMap`, `logo` → `/icons/logo.png`
- [x] Google Search Console: meta verify + `public/google990ff0b977e8aa15.html`
- [x] `robots.txt` gắn cứng `https://www.averienails.com` (`src/pages/robots.txt.ts`)
- [x] Sitemap tự sinh (`/sitemap-index.xml` via `@astrojs/sitemap`)
- [x] Semantic HTML: `main`, `h1`, `address`, `dl`, `blockquote`, `aria-labelledby`
- [x] Alt text ảnh nội dung; ảnh trang trí `aria-hidden`
- [x] Skip link, `theme-color`, `apple-touch-icon`
- [x] Preload hero LCP (webp via Astro assets)
- [x] Self-host Montserrat (`@fontsource/montserrat`)
- [x] `public/icons/logo.png` cho JSON-LD logo

---

## Cần bạn làm — ưu tiên cao

Ảnh hưởng ranking / index trực tiếp; không fix được trong code.

### 1. Domain production

Canonical, OG, sitemap, JSON-LD, `robots.txt` đã gắn cứng `https://www.averienails.com` trong code (`src/lib/site.ts`, `astro.config.mjs`). Không dùng `PUBLIC_SITE_URL`.

- [ ] Redeploy để bản live hết canonical/sitemap trỏ `lldtek.org`
- [ ] Xóa `PUBLIC_SITE_URL` trên Vercel nếu còn (tránh nhầm khi đọc env)

### 2. Ảnh Open Graph — **cần thay file**

| File            | Kích thước yêu cầu | Trạng thái hiện tại                       |
| --------------- | ------------------ | ----------------------------------------- |
| `public/og.jpg` | **1200 × 630 px**  | Ảnh nội thất salon (crop từ `salon.webp`) |

Meta OG/Twitter khớp 1200×630.

- [x] `public/og.jpg` **1200×630**
- [ ] Test share link sau deploy ([Facebook Debugger](https://developers.facebook.com/tools/debug/) / Zalo)

### 3. Google Business Profile

Quan trọng nhất cho salon local — meta website **không thay thế** được.

- [ ] Claim salon trên [Google Business Profile](https://business.google.com)
- [ ] Verify địa chỉ: 132 Chief Justice Cushing Hwy, Cohasset, MA 02025
- [ ] Khớp tên, giờ mở cửa, SĐT (`781-923-1955`) với website + JSON-LD
- [ ] Thêm link website sau khi deploy

### 4. Google Search Console

- [ ] Add property (domain hoặc URL prefix)
- [ ] Verify ownership (meta + HTML file đã sẵn trong code)
- [ ] Submit sitemap: `https://www.averienails.com/sitemap-index.xml`
- [ ] Kiểm tra URL Inspection cho `/`

### 5. Deploy & tránh duplicate với Next.js

- [ ] `pnpm build` thành công trên CI/hosting
- [ ] HTTPS bật (bắt buộc cho Search Console)
- [ ] Kiểm tra live: `/`, `/robots.txt`, `/sitemap-index.xml`, `/icons/logo.png`
- [ ] Chọn **một domain chính** — Astro marketing **hoặc** Next.js landing; site còn lại redirect/canonical

---

## Nên làm — polish on-page

### 6. Favicon

| File                    | Ghi chú                            |
| ----------------------- | ---------------------------------- |
| `public/icons/icon.png` | 500×500 — dùng được; 512×512 ideal |

- [ ] (Tuỳ chọn) Thay favicon chất lượng cao hơn

### 7. Kiểm tra kỹ thuật sau deploy

- [ ] [Rich Results Test](https://search.google.com/test/rich-results) — JSON-LD `BeautySalon`
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) — LCP, CLS, INP
- [ ] View page source — copy nằm trong HTML (không phải JS render)

---

## Tuỳ chọn

- [ ] [Bing Webmaster Tools](https://www.bing.com/webmasters) — submit cùng sitemap
- [ ] GA4 — thêm `PUBLIC_GA_ID` (placeholder trong `.env.example`; chưa wire vào `<head>`)
- [ ] Backlinks: Instagram bio, Yelp, thư mục local MA
- [ ] JSON-LD `aggregateRating` — **chỉ khi** review khớp Google Business (tránh spam)

---

## Không cần (scope hiện tại)

- hreflang / đa ngôn ngữ
- Trang `/privacy`, `/terms`
- Thêm trang duplicate content

---

## Tham chiếu nhanh

| Biến môi trường | Mục đích                    |
| --------------- | --------------------------- |
| `PUBLIC_GA_ID`  | (Tuỳ chọn) Google Analytics |

| Lệnh           |                        |
| -------------- | ---------------------- |
| `pnpm dev`     | Local preview          |
| `pnpm build`   | Build static → `dist/` |
| `pnpm preview` | Preview bản build      |
