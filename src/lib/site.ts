/** Production marketing site — hardcoded so deploy env cannot poison canonical/OG/sitemap. */
export const SITE_URL = 'https://www.averienails.com';

/** External LLDTEK booking page */
export const BOOKING_URL = 'https://www.lldtek.org/salon/appt/VFVGZk1USXpPVEk9';

export const SEO = {
    title: 'Averie Nails & Spa | Luxury Nail Salon in Cohasset, MA',
    description:
        'Averie Nails & Spa in Cohasset, MA — manicures, pedicures, gel polish, acrylic, dip powder, Gel X, builder gel, Dermalogica facials & waxing. Serving the South Shore. Book online or call 781-923-1955.',
    keywords:
        'nail salon Cohasset MA, nails in Cohasset, nails Cohasset Massachusetts, nail spa Cohasset, manicure pedicure Cohasset MA, gel nails Cohasset, acrylic nails Cohasset MA, dip powder nails Cohasset, Gel X Cohasset, builder gel Cohasset, nail salon South Shore MA, beauty salon Cohasset MA, Dermalogica facials Cohasset, waxing Cohasset MA, nail salon near me Cohasset',
    ogImage: '/og.jpg',
    ogImageWidth: 1086,
    ogImageHeight: 630,
    ogImageType: 'image/jpeg',
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
        facebook: 'https://www.facebook.com/averiespa',
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
