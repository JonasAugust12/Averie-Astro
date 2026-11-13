export type PriceItem = {
    name: string;
    price: string;
    description?: string;
};

export type PriceCategory = {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    icon:
        | 'signature'
        | 'dessert'
        | 'metime'
        | 'diva'
        | 'gel'
        | 'addon'
        | 'waxing'
        | 'acrylic'
        | 'dip'
        | 'gelx'
        | 'builder'
        | 'facial';
    items: PriceItem[];
    note?: string;
};

export const priceCategories: PriceCategory[] = [
    {
        id: 'manicure-pedicure',
        title: 'Manicure and Pedicure',
        subtitle: 'Refresh · Ritual · Little Guests',
        description:
            'Sit back and relax with nail care, a moisturizing massage, and polish. Choose a signature ritual, a dessert-inspired dazzle soak, a gentler treatment, an express refresh, a little-guest service, or a lux pedicure.',
        icon: 'signature',
        items: [
            {
                name: 'Signature Manicure',
                price: '$25.00',
                description: 'Soak, cuticle & nail care, moisturizing massage, and polish.',
            },
            {
                name: 'Signature Pedicure',
                price: '$45.00',
                description:
                    'Warm lavender soak, cuticle & nail care, sole softening, sweet lavender sugar scrub with natural minerals, hot stone massage, warm towels, and polish.',
            },
            {
                name: 'Dazzel Manicure',
                price: '$35.00',
                description:
                    'Chocolate milk soak, cuticle & nail care, chocolate sugar soufflé scrub, cappuccino mask, hot towel, massage, and polish. A sweet, soothing choice for sensitive skin.',
            },
            {
                name: 'Dazzel Pedicure',
                price: '$50.00',
                description:
                    'Chocolate milk soak, cuticle & nail care, chocolate sugar soufflé scrub, cappuccino hydrating foot mask with shea butter & caffeine, warm towels, hot stone massage, and polish.',
            },
            {
                name: 'Express Manicure',
                price: '$20.00',
                description: 'Buff, file, and polish for a fast refresh.',
            },
            {
                name: 'Express Pedicure',
                price: '$25.00',
                description: 'Cut, file, and polish for on-the-go care.',
            },
            {
                name: 'Gentle Manicure',
                price: '$25.00',
                description:
                    'A softer manicure with a mild soak, careful nail shaping, light massage, and polish.',
            },
            {
                name: 'Gentle Pedicure',
                price: '$45.00',
                description:
                    'A softer pedicure with a mild soak, careful nail care, light sole softening, massage, and polish.',
            },
            {
                name: 'Little Star Manicure Under 10',
                price: '$15.00',
                description:
                    'For guests under 10. Gentle soak, nail shaping, moisturizing massage, and polish.',
            },
            {
                name: 'Little Star Pedicure Under 10',
                price: '$25.00',
                description:
                    'For guests under 10. Gentle foot soak, nail shaping, sole care, moisturizing massage, and polish.',
            },
            {
                name: 'Lux Pedicure',
                price: '$75.00',
                description:
                    'Green tea purifying soak, cuticle & nail care, sole softening, green tea sugar scrub, rejuvenating lotion, hydrating clay mask, warm towels, hot stone massage, and polish.',
            },
        ],
    },
    {
        id: 'gel-polish',
        title: 'Gel Polish',
        subtitle: 'Long-Lasting · High-Shine',
        description:
            'Durable, chip-resistant gel formula cured under LED light for weeks of flawless color and shine.',
        icon: 'gel',
        items: [
            {
                name: 'Gel Color Change Nails',
                price: '$35.00',
                description: 'Removal of old polish and a fresh gel color on the nails.',
            },
            {
                name: 'Gel Color Change Toes',
                price: '$40.00',
                description: 'Removal of old polish and a fresh gel color on the toes.',
            },
            {
                name: 'Gel Manicure',
                price: '$40.00',
                description: 'Complete manicure with premium gel polish cured under LED light.',
            },
            {
                name: 'Gel Pedicure',
                price: '$60.00',
                description: 'Complete pedicure with a long-lasting gel polish finish.',
            },
        ],
    },
    {
        id: 'builder',
        title: 'Builder',
        subtitle: 'Strength · Overlay',
        description:
            'High-durability builder gel layer designed to reinforce natural nails, prevent breakage, and promote healthy growth.',
        icon: 'builder',
        items: [
            {
                name: 'Builder New Set',
                price: '$70.00',
                description:
                    'A new builder gel overlay shaped and finished for strength and healthy growth.',
            },
            {
                name: 'Builder Refill',
                price: '$60.00',
                description: 'Maintenance refill of an existing builder gel overlay.',
            },
        ],
        note: 'Shape change to medium-long almond, square, or stiletto: +$5 & up.',
    },
    {
        id: 'dip',
        title: 'Dip',
        subtitle: 'Lightweight · Strong',
        description:
            'Nourishing dip powder system providing lightweight, durable protection for healthy natural nails.',
        icon: 'dip',
        items: [
            {
                name: 'Dip Powder',
                price: '$50.00',
                description:
                    'Lightweight dip powder for durable color and protection on natural nails.',
            },
            {
                name: 'Dip Powder with Tips',
                price: '$60.00',
                description: 'Dip powder applied over tips for added length, strength, and color.',
            },
        ],
        note: 'Shape change to medium-long almond, square, or stiletto: +$5 & up.',
    },
    {
        id: 'gel-x',
        title: 'Gel X',
        subtitle: 'Aprés Product',
        description:
            'Full-coverage soft gel nail extension system by Aprés for a natural look, comfortable wear, and easy removal.',
        icon: 'gelx',
        items: [
            {
                name: 'Gel X New Set',
                price: '$70.00',
                description:
                    'A new full-coverage soft gel set for a natural look and comfortable wear.',
            },
            {
                name: 'Gel X Refill',
                price: '$60.00',
                description: 'Maintenance refill of an existing Gel X set.',
            },
        ],
        note: 'Shape change to medium-long almond, square, or stiletto: +$5 & up.',
    },
    {
        id: 'acrylic',
        title: 'Acrylic',
        subtitle: 'Durable · Custom Shape',
        description:
            'Classic acrylic extensions crafted for durable strength, length, and a tailored nail shape.',
        icon: 'acrylic',
        items: [
            {
                name: 'Traditional Acrylic Fill',
                price: '$60.00',
                description: 'Fill and reshape an existing traditional acrylic set.',
            },
            {
                name: 'Traditional Acrylic Full Set',
                price: '$70.00',
                description: 'A new traditional acrylic set with custom length and shape.',
            },
        ],
        note: 'Shape change to medium-long almond, square, or stiletto: +$5 & up.',
    },
    {
        id: 'add-ons',
        title: 'Add Ons',
        subtitle: 'Custom Enhancements',
        description: 'Finishes and extras to customize your manicure, pedicure, or nail set.',
        icon: 'addon',
        items: [
            {
                name: 'Cat Eye',
                price: '$20.00',
                description: 'Magnetic gel finish with a soft, shifting light streak.',
            },
            {
                name: 'Chrome',
                price: '$15.00',
                description: 'Mirror-like metallic finish over gel or extensions.',
            },
            {
                name: 'French/ American',
                price: '$10.00',
                description: 'Classic white or natural soft tip accent.',
            },
            {
                name: 'Paraffin',
                price: '$15.00',
                description:
                    'Warm paraffin dip for the hands or feet, for deep hydration and soothing warmth.',
            },
            {
                name: 'Take Off without any services',
                price: '$15.00',
                description:
                    'Standalone gentle removal of gel or acrylic, booked without another service.',
            },
        ],
    },
    {
        id: 'waxing',
        title: 'Waxing',
        subtitle: 'Smooth · Gentle · Sanitary',
        description:
            'Our experienced estheticians use gentle strip wax and hard wax for clean, smooth results. WE NEVER DOUBLE DIP.',
        icon: 'waxing',
        items: [
            { name: 'Arms Full', price: '$45.00' },
            { name: 'Arms Lower', price: '$35.00' },
            { name: 'Back', price: '$60.00' },
            { name: 'Bikini Lines', price: '$35.00' },
            { name: 'Brazilian', price: '$65.00+' },
            { name: 'Chest', price: '$50.00' },
            { name: 'Chin', price: '$20.00' },
            { name: 'Eyebrows', price: '$20.00' },
            { name: 'Full Face', price: '$50.00' },
            { name: 'Legs Full', price: '$85.00' },
            { name: 'Legs Lower', price: '$40.00' },
            { name: 'Lips', price: '$10.00' },
            { name: 'Stomach', price: '$30.00' },
            { name: 'Under Arms', price: '$25.00' },
        ],
    },
    {
        id: 'facials',
        title: 'Dermalogical Facials',
        subtitle: 'Face Mapping® · Zone Analysis',
        description:
            'Face Mapping and products, plus treatments and a skin therapist, for healthy skin. Licensed Dermalogica therapists analyze your skin from forehead to collarbone.',
        icon: 'facial',
        items: [
            {
                name: 'Face Mapping',
                price: '$0.00+',
                description:
                    '10 mins | Comprehensive analysis of 14 skin zones before choosing tailored treatments.',
            },
            {
                name: 'MicroZone Treatments',
                price: '$75.00',
                description:
                    '30 mins | Targeted skin solution for a quick boost when you need fast results.',
            },
            {
                name: 'The Core Treatment',
                price: '$115.00',
                description:
                    '60 mins | Full customized treatment including double cleansing, exfoliation, extractions, mask, and massage.',
            },
        ],
    },
];
