export const SITE_URL = import.meta.env.PUBLIC_SITE_URL ?? 'https://averie.com';

/** Next.js app URL for booking flows */
export const BOOKING_URL = import.meta.env.PUBLIC_BOOKING_URL ?? '/book';

export const SEO = {
    title: 'Averie — Nails • Facials • Beauty',
    description:
        'Refined nail care, gel, enhancements, and facials in Cohasset, MA. Book your Averie appointment online.',
    ogImage: '/og.jpg',
    phone: '+17819231955',
    phoneDisplay: '781-923-1955',
    address: {
        street: '132 Chief Justice Cushing Hwy',
        city: 'Cohasset',
        state: 'MA',
        zip: '02025',
        country: 'US',
    },
    geo: {
        latitude: 42.2417,
        longitude: -70.8034,
    },
    social: {
        instagram: 'https://www.instagram.com/averienailspa',
        facebook: 'https://www.facebook.com/minh.vinh.14',
    },
    maps: 'https://maps.app.goo.gl/YCtZW533i3x6BB5QA',
} as const;

export function absoluteUrl(path: string) {
    return new URL(path, SITE_URL).href;
}

export function bookingUrl(path = '') {
    const base = BOOKING_URL.replace(/\/$/, '');
    return path ? `${base}${path.startsWith('/') ? path : `/${path}`}` : base;
}
