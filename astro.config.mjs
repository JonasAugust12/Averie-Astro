// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * Astro `site` must be an absolute http(s) URL. Empty or placeholder env values
 * (common on first Vercel deploys) would otherwise fail the build with "Invalid URL".
 *
 * @param {string | undefined} value
 * @returns {string | undefined}
 */
function toAbsoluteSiteUrl(value) {
    const trimmed = value?.trim();
    if (!trimmed) return undefined;

    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

    try {
        const url = new URL(withProtocol);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') return undefined;
        return url.origin;
    } catch {
        return undefined;
    }
}

const site =
    toAbsoluteSiteUrl(process.env.PUBLIC_SITE_URL) ??
    toAbsoluteSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    toAbsoluteSiteUrl(process.env.VERCEL_URL) ??
    'https://averie-astro-b8u0xzu0x-jonasaugust12.vercel.app';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
    site,
    output: 'static',
    compressHTML: true,
    build: {
        inlineStylesheets: 'auto',
    },
    integrations: [
        sitemap({
            filter: (page) => !page.includes('/404'),
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
