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
            "Sit back, relax and enjoy Averie's signature manicure and pedicure treatment that will result in strong healthy and resilient nails, followed by an ultra moisturizing foot massage.",
        icon: 'signature',
        items: [
            {
                name: 'Manicure',
                price: '$25',
                description: 'Soak, cuticle & nail care, moisturize massage and polish.',
            },
            {
                name: 'Pedicure',
                price: '$45',
                description:
                    'Enjoy a warm lavender soak, cuticle & nail care, sole softening, sweet lavender scrub with natural sugar crystal and mineral oil. Moisturizing lotion, hot stone massage, warm towels treatment and polish.',
            },
        ],
    },
    {
        id: 'dessert',
        title: 'The Dessert',
        subtitle: 'Blissful · Sinful · Delicious',
        description:
            'Enjoy sweets without the calories! The dessert begins with a nourishing milk soak great for extra dry skin. Encouraged and recommended for individuals with sensitive skin.',
        icon: 'dessert',
        items: [
            {
                name: 'Manicure',
                price: '$35',
                description:
                    'Chocolate milk soak, cuticle & nail care, chocolate sugar soufflé scrub exfoliate, cappuccino mask, hot towel, massage and polish.',
            },
            {
                name: 'Pedicure',
                price: '$60',
                description:
                    'Chocolate milk soak, cuticle & nail care, chocolate sugar soufflé scrub exfoliation, cappuccino hydrating foot mask with shea butter and caffeine wrap in warm towels treatment, hot stone massage and polish.',
            },
        ],
    },
    {
        id: 'me-time',
        title: "It's Me Time",
        subtitle: 'Detox · Purify · Rejuvenate',
        description:
            'We start you with green tea purifying soak with botanical extracts and tea essences. Green tea scrubs with natural sugar crystal and antioxidant, followed by hydrating clay mask and rejuvenation lotion.',
        icon: 'metime',
        items: [
            {
                name: 'Manicure',
                price: '$40',
                description:
                    'Green tea purifying soak, cuticle & crystal care, green tea scrub with natural sugar crystal antioxidant, rejuvenating lotion, warm towels, massage and polyhydrating mask.',
            },
            {
                name: 'Pedicure',
                price: '$75',
                description:
                    'Green tea purifying soak cuticle & nail care, sole softening with green tea sugar scrubs rejuvenating lotion, hydrating clay mask, warm towels treatment, hot stone massage and polish.',
            },
        ],
    },
    {
        id: 'gentlemen',
        title: 'The Gentlemen',
        subtitle: 'Masculine · Distinguished · Classic',
        description:
            'We remove the dirt, cut the edges and even soften the most calloused hands and feet. Leaving your skin clean, refreshed, and smooth.',
        icon: 'gentlemen',
        items: [
            {
                name: 'Manicure',
                price: '$30',
                description:
                    'Soak, cuticle & nail care, eucalyptus & mint moisturizing lotion massage, warm towels treatment.',
            },
            {
                name: 'Manicure (Express)',
                price: '$15',
                description: 'Quick soak, nail trim, file, and clean finish.',
            },
            {
                name: 'Pedicure (Express)',
                price: '$25',
                description: 'Quick foot soak, nail trim, file, and hydrating lotion.',
            },
            {
                name: 'Pedicure',
                price: '$50',
                description:
                    'Enjoy a warm mint eucalyptus soak, cuticle & nail care, sole softening, eucalyptus mint sugar scrub with aloe vera and vitamin A&E, hot stone massage, warm towels, polish.',
            },
        ],
    },
    {
        id: 'little-diva',
        title: 'Little Diva (10 and under)',
        subtitle: 'Fun · Natural · Pretty',
        description:
            "Good things come in small packages. Averie's most gentle and basic care will make our little diva feel special as we greet, treat and sweet her hands and feet.",
        icon: 'diva',
        items: [
            {
                name: 'Manicure',
                price: '$15',
                description: 'Gentle soak, nail shaping, moisturize massage & polish.',
            },
            {
                name: 'Pedicure',
                price: '$25',
                description: 'Gentle foot soak, nail shaping, moisturize massage & polish.',
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
                name: 'Gel Polish Change — Nails',
                price: '$35',
                description: 'Removal of old polish and fresh application of gel polish on nails.',
            },
            {
                name: 'Gel Polish Change — Toes',
                price: '$40',
                description: 'Removal of old polish and fresh gel application on toes.',
            },
        ],
    },
    {
        id: 'add-ons',
        title: 'Add Ons',
        subtitle: 'Custom Enhancements',
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
                name: 'Paraffin Wax — Hands or Feet',
                price: '$15',
                description:
                    'Warm therapeutic paraffin dip for deep hydration and soothing warmth.',
            },
        ],
    },
    {
        id: 'waxing',
        title: 'Waxing',
        subtitle: 'Smooth · Comfortable · Gentle',
        description:
            'Our experienced estheticians use very gentle strip wax and hard wax to ensure smooth, hair-free results. WE NEVER DOUBLE DIP.',
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
    {
        id: 'acrylic',
        title: 'Acrylic',
        subtitle: 'Durable · Custom Shape',
        icon: 'acrylic',
        items: [
            { name: 'Traditional Acrylic — Fill', price: '$50' },
            { name: 'Traditional Acrylic — Full Set', price: '$70' },
            { name: 'Pink & White Solar — Fill', price: '$60' },
            { name: 'Pink & White Solar — Full Set', price: '$70' },
            { name: 'Gel Lacquer — Fill', price: '$50' },
            { name: 'Gel Lacquer — Full Set', price: '$60' },
        ],
    },
    {
        id: 'dip',
        title: 'Dip',
        subtitle: 'Lightweight · Strong',
        icon: 'dip',
        items: [
            { name: 'Dip Powder', price: '$50' },
            { name: 'Dip Powder with Tips', price: '$60' },
            { name: 'New Set', price: '$70' },
            { name: 'Refill', price: '$60' },
        ],
    },
    {
        id: 'builder',
        title: 'Builder — Gel X',
        subtitle: 'Apres product',
        icon: 'builder',
        items: [
            { name: 'New Set', price: '$65' },
            { name: 'Refill', price: '$60' },
        ],
        note: 'Shape change to medium-long almond, square, or stiletto: additional $5 and up.',
    },
    {
        id: 'facials',
        title: 'Dermalogica Facials',
        subtitle: 'Professional Skincare',
        description:
            'Licensed Dermalogica skin therapists analyze and treat your skin zones with professional products for targeted results.',
        icon: 'facial',
        items: [
            {
                name: 'Face Mapping',
                price: 'Free',
                description:
                    '10 mins | Professional analysis of 14 skin zones before selecting treatments.',
            },
            {
                name: 'MicroZone Treatment',
                price: '$75',
                description:
                    '30 mins | Fast, targeted skin solutions focusing on specific skin concerns.',
            },
            {
                name: 'The Core Treatment',
                price: '$115',
                description:
                    '60 mins | Full customized treatment including double cleansing, exfoliation, extraction, masque, and massage.',
            },
        ],
    },
];
