# Averie Landing — SEO Checklist

Landing page Astro tại `F:\Averie-Astro`. Static HTML, English-only.

---

## Đã xong (trong code)

- [x] Meta: `title`, `description`, `canonical`, `robots`
- [x] Open Graph + Twitter Card
- [x] JSON-LD: `BeautySalon`, `WebSite`, `areaServed` (Cohasset + South Shore)
- [x] JSON-LD: `telephone` E.164 (`+17819231955`), `hasMap`, `logo` → `/icons/logo.png`
- [x] Google Search Console: meta verify + `public/google990ff0b977e8aa15.html`
- [x] `robots.txt` động theo `PUBLIC_SITE_URL` (`src/pages/robots.txt.ts`)
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

Tạo file `.env` (copy từ `.env.example`):

```env
PUBLIC_SITE_URL=https://www.averienails.com
```

Dùng cho: canonical, OG URL, sitemap, JSON-LD, `robots.txt`.

- [ ] Set `PUBLIC_SITE_URL=https://www.averienails.com` trên Vercel (không dùng preview URL)

### 2. Ảnh Open Graph — **cần thay file**

| File            | Kích thước yêu cầu | Trạng thái hiện tại                                  |
| --------------- | ------------------ | ---------------------------------------------------- |
| `public/og.jpg` | **1200 × 630 px**  | ⚠️ Có file nhưng **157×50** (logo banner, sai tỷ lệ) |

Meta OG/Twitter đang khai 1200×630 — cần file thật khớp kích thước.

Gợi ý nội dung: ảnh salon đẹp + logo Averie + tagline; text nằm vùng an toàn giữa ảnh.

- [ ] Thay `public/og.jpg` bằng bản **1200×630**
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

| Biến môi trường      | Mục đích                                |
| -------------------- | --------------------------------------- |
| `PUBLIC_SITE_URL` | Canonical, OG, sitemap, robots, JSON-LD |
| `PUBLIC_GA_ID`    | (Tuỳ chọn) Google Analytics             |

| Lệnh           |                        |
| -------------- | ---------------------- |
| `pnpm dev`     | Local preview          |
| `pnpm build`   | Build static → `dist/` |
| `pnpm preview` | Preview bản build      |
