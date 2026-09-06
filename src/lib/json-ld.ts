import { SEO, absoluteUrl, bookingUrl } from '@/lib/site';

const { address, geo, phone, social, description, maps } = SEO;

const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': `${absoluteUrl('/')}#business`,
    name: 'Averie Nails & Spa',
    description,
    url: absoluteUrl('/'),
    telephone: phone,
    image: absoluteUrl(SEO.ogImage),
    logo: absoluteUrl(SEO.logo),
    hasMap: maps,
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.zip,
        addressCountry: address.country,
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude,
    },
    areaServed: [
        {
            '@type': 'City',
            name: 'Cohasset',
            containedInPlace: { '@type': 'State', name: 'Massachusetts' },
        },
        {
            '@type': 'City',
            name: 'Scituate',
            containedInPlace: { '@type': 'State', name: 'Massachusetts' },
        },
        {
            '@type': 'City',
            name: 'Hingham',
            containedInPlace: { '@type': 'State', name: 'Massachusetts' },
        },
        {
            '@type': 'City',
            name: 'Norwell',
            containedInPlace: { '@type': 'State', name: 'Massachusetts' },
        },
        { '@type': 'Place', name: 'South Shore, Massachusetts' },
    ],
    keywords: SEO.keywords,
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '19:00',
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '18:00',
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '10:00',
            closes: '17:00',
        },
    ],
    sameAs: [social.instagram, social.facebook],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Nail Salon & Spa Services',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manicure' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pedicure' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gel Polish Manicure' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gel Polish Pedicure' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Acrylic Nails' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dip Powder Nails' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gel X Nails' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Builder Gel Nails' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Waxing' } },
            {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'Dermalogica Facials' },
            },
        ],
    },
    potentialAction: {
        '@type': 'ReserveAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: bookingUrl(),
            actionPlatform: [
                'http://schema.org/DesktopWebPlatform',
                'http://schema.org/MobileWebPlatform',
            ],
        },
        result: {
            '@type': 'Reservation',
            name: 'Book an appointment at Averie',
        },
    },
};

const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`,
    url: absoluteUrl('/'),
    name: 'Averie Nails & Spa',
    description,
    publisher: { '@id': `${absoluteUrl('/')}#business` },
    inLanguage: 'en-US',
};

export const landingJsonLd = [localBusiness, webSite];
