import promotionData from '@/data/promotion.json';

export interface PromotionConfig {
    enabled: boolean;
    title: string;
    description: string;
    imageUrl: string;
    imageWidth?: number;
    imageHeight?: number;
    color: string;
    startDate?: string;
    endDate?: string;
    ctaText?: string;
    ctaLink?: string;
}

export const promotion = promotionData as PromotionConfig;

/** True when the flag is on and today is inside the optional start/end window. */
export function isPromotionActive(promo: PromotionConfig = promotion): boolean {
    if (!promo.enabled) return false;

    const now = new Date();

    if (promo.startDate) {
        const start = new Date(`${promo.startDate}T00:00:00`);
        if (now < start) return false;
    }

    if (promo.endDate) {
        const end = new Date(`${promo.endDate}T23:59:59`);
        if (now > end) return false;
    }

    return true;
}
