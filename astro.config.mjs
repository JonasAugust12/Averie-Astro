// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL ?? 'https://averie.com';

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
