export const SITE_URL = (
    import.meta.env.SITE || 'https://averie-astro-b8u0xzu0x-jonasaugust12.vercel.app'
).replace(/\/$/, '');

/** Next.js app URL for booking flows */
export const BOOKING_URL = import.meta.env.PUBLIC_BOOKING_URL ?? '/book';

export const SEO = {
    title: 'Averie | Nail Salon & Facials in Cohasset, MA',
    description:
        'Top-rated nail salon & beauty spa in Cohasset, MA. Premium manicures, pedicures, gel nails, Dermalogica facials & waxing. Book your Averie appointment online.',
    keywords:
        'nail salon Cohasset MA, nails Cohasset Massachusetts, nail spa Cohasset, manicure pedicure Cohasset MA, Dermalogica facials Cohasset, beauty salon Cohasset MA, South Shore nail salon',
    ogImage: '/og.jpg',
    logo: '/icons/logo.png',
    googleSiteVerification: 'google990ff0b977e8aa15',
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
