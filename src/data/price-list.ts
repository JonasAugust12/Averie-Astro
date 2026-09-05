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
        | 'gentlemen'
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
        id: 'signature',
        title: 'The Signature',
        subtitle: 'Refreshing · Revitalizing',
        description:
            "Sit back, relax and enjoy Averie's signature manicure and pedicure treatment resulting in strong, healthy, and resilient nails, followed by an ultra-moisturizing massage and polish.",
        icon: 'signature',
        items: [
            {
                name: 'Manicure',
                price: '$25',
                description: 'Soak, cuticle & nail care, moisturizing massage, and polish.',
            },
            {
                name: 'Pedicure',
                price: '$45',
                description:
                    'Warm lavender soak, cuticle & nail care, sole softening, sweet lavender sugar scrub with natural minerals, hot stone massage, warm towels, and polish.',
            },
        ],
    },
    {
        id: 'dessert',
        title: 'The Dessert',
        subtitle: 'Blissful · Sinful · Delicious',
        description:
            'Enjoy sweets without the calories! Begins with a nourishing milk soak for extra dry skin. Sweet scents to exfoliate, entice, and stimulate your senses. Highly recommended for sensitive skin and diabetics.',
        icon: 'dessert',
        items: [
            {
                name: 'Manicure',
                price: '$35',
                description:
                    'Chocolate milk soak, cuticle & nail care, chocolate sugar soufflé scrub, cappuccino mask, hot towel, massage, and polish.',
            },
            {
                name: 'Pedicure',
                price: '$60',
                description:
                    'Chocolate milk soak, cuticle & nail care, chocolate sugar soufflé scrub, cappuccino hydrating foot mask with shea butter & caffeine, warm towels, hot stone massage, and polish.',
            },
        ],
    },
    {
        id: 'me-time',
        title: "It's Me Time",
        subtitle: 'Detox · Purify · Rejuvenate',
        description:
            'Green tea purifying soak with botanical extracts and antioxidant sugar scrub, followed by a hydrating clay foot mask with shea butter and rejuvenation lotion for complete renewal.',
        icon: 'metime',
        items: [
            {
                name: 'Manicure',
                price: '$40',
                description:
                    'Green tea purifying soak, cuticle & nail care, green tea antioxidant sugar scrub, rejuvenating lotion, warm towels, massage, and polyhydrating mask.',
            },
            {
                name: 'Pedicure',
                price: '$75',
                description:
                    'Green tea purifying soak, cuticle & nail care, sole softening, green tea sugar scrub, rejuvenating lotion, hydrating clay mask, warm towels, hot stone massage, and polish.',
            },
        ],
    },
    {
        id: 'gentlemen',
        title: 'The Gentlemen',
        subtitle: 'Masculine · Distinguished · Classic',
        description:
            'Tailored care for gentlemen. We remove dirt, trim edges, and soften tough calluses, leaving your hands and feet refreshed, clean, and smooth.',
        icon: 'gentlemen',
        items: [
            {
                name: 'Manicure',
                price: '$30',
                description:
                    'Soak, cuticle & nail care, eucalyptus & mint moisturizing lotion massage, and warm towels treatment.',
            },
            {
                name: 'Pedicure',
                price: '$50',
                description:
                    'Warm mint eucalyptus soak, cuticle & nail care, sole softening, eucalyptus mint sugar scrub with aloe vera & vitamin A/E, hot stone massage, warm towels, and polish.',
            },
        ],
    },
    {
        id: 'little-diva',
        title: 'Little Diva (10 & under)',
        subtitle: 'Fun · Natural · Pretty',
        description:
            "Good things come in small packages! Averie's most gentle pampering care to make our little diva feel extra special.",
        icon: 'diva',
        items: [
            {
                name: 'Manicure',
                price: '$15',
                description: 'Gentle soak, nail shaping, moisturizing massage, and polish.',
            },
            {
                name: 'Pedicure',
                price: '$25',
                description:
                    'Gentle foot soak, nail shaping, sole care, moisturizing massage, and polish.',
            },
        ],
    },
    {
        id: 'add-ons',
        title: 'Add Ons',
        subtitle: 'Custom Enhancements',
        description:
            'Popular add-on services and quick polish refreshes to customize your spa experience.',
        icon: 'addon',
        items: [
            {
                name: 'Dazzle Dry (Nails or Toes)',
                price: '$5',
                description: 'Quick-drying, non-toxic, long-lasting natural polish system.',
            },
            {
                name: 'French / American',
                price: '$10',
                description: 'Classic white or natural soft tip accent.',
            },
            {
                name: 'Express Manicure',
                price: '$20',
                description: 'Buff, file, and polish for a fast refresh.',
            },
            {
                name: 'Express Pedicure',
                price: '$25',
                description: 'Cut, file, and polish for on-the-go care.',
            },
            {
                name: 'Take Off (with service)',
                price: '$10',
                description:
                    'Gentle removal of existing gel or acrylic when combined with service.',
            },
            {
                name: 'Take Off (without service)',
                price: '$15',
                description: 'Standalone gentle removal of gel or acrylic extensions.',
            },
            {
                name: 'Paraffin Wax (Hands or Feet)',
                price: '$15',
                description:
                    'Warm therapeutic paraffin dip for deep hydration and soothing warmth.',
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
                name: 'Gel Polish Manicure',
                price: '$40',
                description: 'Complete manicure with premium gel polish cured under LED light.',
            },
            {
                name: 'Gel Polish Pedicure',
                price: '$60',
                description: 'Complete pedicure with long-lasting gel polish finish.',
            },
            {
                name: 'Gel Polish Change - Nails',
                price: '$35',
                description: 'Removal of old polish and fresh gel polish application on nails.',
            },
            {
                name: 'Gel Polish Change - Toes',
                price: '$40',
                description: 'Removal of old polish and fresh gel polish application on toes.',
            },
        ],
    },
    {
        id: 'acrylic',
        title: 'Acrylic',
        subtitle: 'Durable · Custom Shape',
        description:
            'Classic acrylic extensions crafted for durable strength, length, and tailored nail shape.',
        icon: 'acrylic',
        items: [
            { name: 'Traditional Acrylic Fill', price: '$50' },
            { name: 'Traditional Acrylic Fullset', price: '$70' },
            { name: 'Pink & White Solar Fill', price: '$60' },
            { name: 'Pink & White Solar Fullset', price: '$70' },
            { name: 'Gel Lacquer Fill', price: '$50' },
            { name: 'Gel Lacquer Fullset', price: '$60' },
        ],
        note: 'Shape change to medium-long almond, square, or stiletto: +$5 & up.',
    },
    {
        id: 'dip',
        title: 'Dip Powder',
        subtitle: 'Lightweight · Strong',
        description:
            'Nourishing dip powder system providing lightweight, durable protection for healthy natural nails.',
        icon: 'dip',
        items: [
            { name: 'Dip Powder', price: '$50' },
            { name: 'Dip Powder with Tips', price: '$60' },
        ],
        note: 'Shape change to medium-long almond, square, or stiletto: +$5 & up.',
    },
    {
        id: 'gel-x',
        title: 'Gel X',
        subtitle: 'Aprés Product',
        description:
            'Full-coverage soft gel nail extension system by Aprés for natural look, comfortable wear, and easy removal.',
        icon: 'gelx',
        items: [
            { name: 'New Set', price: '$70' },
            { name: 'Refill', price: '$60' },
        ],
        note: 'Shape change to medium-long almond, square, or stiletto: +$5 & up.',
    },
    {
        id: 'builder',
        title: 'Builder Gel',
        subtitle: 'Strength · Overlay',
        description:
            'High-durability builder gel layer designed to reinforce natural nails, prevent breakage, and promote healthy growth.',
        icon: 'builder',
        items: [
            { name: 'New Set', price: '$65' },
            { name: 'Refill', price: '$60' },
        ],
        note: 'Shape change to medium-long almond, square, or stiletto: +$5 & up.',
    },
    {
        id: 'facials',
        title: 'Dermalogica Facials',
        subtitle: 'Face Mapping® · Zone Analysis',
        description:
            'Face Mapping & Products + Treatments + Skin Therapist = Healthy Skin. Licensed Dermalogica therapists analyze your skin from forehead to collarbone.',
        icon: 'facial',
        items: [
            {
                name: 'Face Mapping',
                price: 'Free',
                description:
                    '10 mins | Comprehensive analysis of 14 skin zones before choosing tailored treatments.',
            },
            {
                name: 'MicroZone Treatment',
                price: '$75',
                description:
                    '30 mins | Fast 20-min targeted skin solution for instant boost when you need quick results.',
            },
            {
                name: 'The Core Treatment',
                price: '$115',
                description:
                    '60 mins | Full customized treatment including double cleansing, exfoliation, extractions, mask & massage.',
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
            { name: 'Eyebrows', price: '$20' },
            { name: 'Lips', price: '$10' },
            { name: 'Chin', price: '$20' },
            { name: 'Full Face', price: '$50' },
            { name: 'Under Arms', price: '$25' },
            { name: 'Arms (Lower)', price: '$35' },
            { name: 'Arms (Full)', price: '$45' },
            { name: 'Legs (Lower)', price: '$40' },
            { name: 'Legs (Full)', price: '$85' },
            { name: 'Bikini Lines', price: '$35' },
            { name: 'Brazilian', price: '$65+' },
            { name: 'Stomach', price: '$30' },
            { name: 'Back', price: '$60' },
            { name: 'Chest', price: '$50' },
        ],
    },
];
