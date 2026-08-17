import type { APIRoute } from 'astro';

const site = (import.meta.env.PUBLIC_SITE_URL ?? 'https://averie.com').replace(/\/$/, '');

export const GET: APIRoute = () => {
    const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${site}/sitemap-index.xml`].join('\n');

    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
};
