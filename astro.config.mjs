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
        /** Default `_astro` exposes the framework in DevTools Sources. */
        assets: 'c',
    },
    integrations: [
        sitemap({
            filter: (page) => !page.includes('/404'),
        }),
    ],
    vite: {
        build: {
            sourcemap: false,
            rollupOptions: {
                output: {
                    entryFileNames: 'c/[hash].js',
                    chunkFileNames: 'c/[hash].js',
                    assetFileNames: 'c/[hash][extname]',
                },
            },
        },
        plugins: [tailwindcss()],
    },
});
