import type { ImageMetadata } from 'astro';

import hero from '@/assets/landing/hero.webp';
import salon from '@/assets/landing/salon.webp';
import manicurePedicure from '@/assets/landing/manicure_pedicure.webp';
import dermalogicaFacials from '@/assets/landing/dermalogica_facials.webp';
import enhancementsWaxing from '@/assets/landing/enhancements_waxing.webp';
import hoursMarble from '@/assets/landing/hours-marble.webp';
import logoRound from '@/assets/landing/logo_round.webp';
import heroOrnament01 from '@/assets/landing/ornaments/hero01.webp';
import heroOrnament02 from '@/assets/landing/ornaments/hero02.webp';
import heroOrnament03 from '@/assets/landing/ornaments/hero03.webp';
import logo from '@/assets/landing/ornaments/logo.webp';
import usaFlag from '@/assets/landing/ornaments/usaflag.webp';

export const landingImages = {
    hero,
    salon,
    manicurePedicure,
    dermalogicaFacials,
    enhancementsWaxing,
    hoursMarble,
    logoRound,
    heroOrnament01,
    heroOrnament02,
    heroOrnament03,
    logo,
    usaFlag,
} satisfies Record<string, ImageMetadata>;

/** Preserve source aspect ratio when generating optimized variants. */
export function scaledImageDimensions(image: ImageMetadata, targetWidth: number) {
    return {
        width: targetWidth,
        height: Math.round((image.height / image.width) * targetWidth),
    };
}

export { hero };
