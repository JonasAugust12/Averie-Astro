// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
    site: 'https://www.averienails.com',
    output: 'static',
    compressHTML: true,
    image: {
        domains: ['res.cloudinary.com'],
        remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }],
    },
    build: {
        inlineStylesheets: 'always',
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
