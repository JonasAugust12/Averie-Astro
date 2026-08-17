import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
    const origin = (
        site?.origin ?? 'https://averie-astro-b8u0xzu0x-jonasaugust12.vercel.app'
    ).replace(/\/$/, '');
    const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${origin}/sitemap-index.xml`].join(
        '\n',
    );

    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
};
