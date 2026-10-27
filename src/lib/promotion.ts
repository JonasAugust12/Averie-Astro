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

/** True when the flag is on and the promotion has not expired. */
export function isPromotionActive(promo: PromotionConfig = promotion): boolean {
    if (!promo.enabled) return false;

    const now = new Date();

    if (promo.endDate) {
        const end = new Date(`${promo.endDate}T23:59:59`);
        if (now > end) return false;
    }

    return true;
}
