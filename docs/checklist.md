# Averie Landing — SEO Checklist

Landing page Astro tại `F:\Averie-Astro`. Static HTML, English-only.

---

## Đã xong (trong code)

- [x] Meta: `title`, `description`, `canonical`, `robots`
- [x] Open Graph + Twitter Card
- [x] JSON-LD: `BeautySalon`, `WebSite`, `areaServed` (Cohasset + South Shore)
- [x] `robots.txt` động theo `PUBLIC_SITE_URL` (`src/pages/robots.txt.ts`)
- [x] Sitemap tự sinh (`/sitemap-index.xml` via `@astrojs/sitemap`)
- [x] Semantic HTML: `main`, `h1`, `address`, `dl`, `blockquote`, `aria-labelledby`
- [x] Alt text ảnh nội dung; ảnh trang trí `aria-hidden`
- [x] Skip link, `theme-color`, `apple-touch-icon`
- [x] Preload hero LCP (`/salon/figma/hero.png`)
- [x] Self-host Montserrat (`@fontsource/montserrat`)
- [x] Xóa section Find Appointment
- [x] Xóa link Privacy / Terms ở footer

---

## Cần làm — ưu tiên cao

Ảnh hưởng ranking / index trực tiếp.

### 1. Domain production

Tạo file `.env` (copy từ `.env.example`):

```env
PUBLIC_SITE_URL=https://domain-thật-của-bạn.com
PUBLIC_BOOKING_URL=https://app.domain.com/book
```

Dùng cho: canonical, OG URL, sitemap, JSON-LD, `robots.txt`.

**Default hiện tại:** `https://averie.com` — phải đổi trước khi deploy.

- [ ] Set `PUBLIC_SITE_URL` đúng domain live
- [ ] Set `PUBLIC_BOOKING_URL` trỏ app Next.js (booking)

### 2. Ảnh Open Graph

| File            | Kích thước        | Trạng thái |
| --------------- | ----------------- | ---------- |
| `public/og.jpg` | **1200 × 630 px** | ❌ Chưa có |

Dùng cho: Facebook, Zalo, iMessage preview + JSON-LD `image`.

Gợi ý nội dung: ảnh salon đẹp + logo Averie + tagline; text nằm vùng an toàn giữa ảnh.

- [ ] Tạo và đặt `public/og.jpg` (1200×630)
- [ ] Test share link sau deploy (Facebook Debugger / Zalo)

### 3. Google Business Profile

Quan trọng nhất cho salon local — meta website **không thay thế** được.

- [ ] Claim salon trên [Google Business Profile](https://business.google.com)
- [ ] Verify địa chỉ: 132 Chief Justice Cushing Hwy, Cohasset, MA 02025
- [ ] Khớp tên, giờ mở cửa, SĐT (`781-923-1955`) với website
- [ ] Thêm link website sau khi deploy

### 4. Google Search Console

- [ ] Add property (domain hoặc URL prefix)
- [ ] Verify ownership
- [ ] Submit sitemap: `https://<domain-của-bạn>/sitemap-index.xml`
- [ ] Kiểm tra URL Inspection cho `/`

### 5. Deploy

- [ ] `pnpm build` thành công trên CI/hosting
- [ ] HTTPS bật (bắt buộc cho Search Console)
- [ ] Kiểm tra live: `/`, `/robots.txt`, `/sitemap-index.xml`

---

## Nên làm — polish on-page

### 6. Favicon

| File                    | Ghi chú                                          |
| ----------------------- | ------------------------------------------------ |
| `public/icons/icon.png` | ~512×512 khuyến nghị; file hiện có vẫn dùng được |

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
- Meta keywords
- Thêm trang duplicate content

---

## Tham chiếu nhanh

| Biến môi trường      | Mục đích                                |
| -------------------- | --------------------------------------- |
| `PUBLIC_SITE_URL`    | Canonical, OG, sitemap, robots, JSON-LD |
| `PUBLIC_BOOKING_URL` | Nút Book Now → app Next.js              |
| `PUBLIC_GA_ID`       | (Tuỳ chọn) Google Analytics             |

| Lệnh           |                        |
| -------------- | ---------------------- |
| `pnpm dev`     | Local preview          |
| `pnpm build`   | Build static → `dist/` |
| `pnpm preview` | Preview bản build      |
