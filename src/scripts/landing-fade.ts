const SELECTOR = '[data-fade-in]';
const ANIMATION_CLASS = 'animate-landing-fade-in-up';
const LEGACY_CLASSES = ['fade-prepare', 'is-revealed'] as const;

const MOBILE_MQ = '(max-width: 767px)';

let teardown: (() => void) | null = null;

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isMobileViewport() {
    return window.matchMedia(MOBILE_MQ).matches;
}

function resetFadeState(el: HTMLElement) {
    for (const legacyClass of LEGACY_CLASSES) {
        el.classList.remove(legacyClass);
    }
    el.classList.remove(ANIMATION_CLASS);
    el.style.animationDelay = '';
}

function reveal(el: HTMLElement, isMobile: boolean) {
    if (el.classList.contains(ANIMATION_CLASS)) return;

    const delay = isMobile ? 0 : Number(el.dataset.fadeDelay ?? 0);
    if (delay > 0) {
        el.style.animationDelay = `${delay}s`;
    }

    el.classList.add(ANIMATION_CLASS);

    // Free GPU hint after animation completes (mobile luxeReveal uses filter/transform)
    if (isMobile) {
        el.addEventListener(
            'animationend',
            () => {
                el.style.willChange = 'auto';
            },
            { once: true },
        );
    }
}

function isInInitialViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

/**
 * Progressive-enhancement fade-in. Markup stays visible without JS so crawlers
 * and no-JS users still see full content.
 *
 * Above-the-fold nodes are left alone (no opacity flash / layout read).
 * Below-fold nodes animate when IntersectionObserver reports them.
 * Mobile uses a luxury scale+blur keyframe (see globals.css `luxeReveal`).
 */
export function initLandingFade() {
    teardown?.();
    teardown = null;

    if (prefersReducedMotion()) return;

    const nodes = [...document.querySelectorAll<HTMLElement>(SELECTOR)];
    if (!nodes.length) return;

    const isMobile = isMobileViewport();
    const pending = new WeakSet<Element>();

    // Mobile: trigger earlier so the animation plays fully inside the viewport.
    // Desktop: keep the subtle bottom-clip for a staggered "rising" feel.
    const observerOptions: IntersectionObserverInit = isMobile
        ? { threshold: 0.04, rootMargin: '0px 0px 0px 0px' }
        : { threshold: 0.08, rootMargin: '0px 0px -8% 0px' };

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            const el = entry.target as HTMLElement;

            if (!pending.has(el)) {
                pending.add(el);
                if (entry.isIntersecting) {
                    observer.unobserve(el);
                    continue;
                }
            }

            if (!entry.isIntersecting) continue;
            reveal(el, isMobile);
            observer.unobserve(el);
        }
    }, observerOptions);

    // Batch layout reads before DOM writes to avoid forced reflow (PageSpeed).
    const inInitialViewport = new Map(nodes.map((el) => [el, isInInitialViewport(el)]));

    for (const el of nodes) {
        resetFadeState(el);
    }

    for (const el of nodes) {
        // Above-the-fold: keep visible for LCP crawlers (Lighthouse, Googlebot).
        if (inInitialViewport.get(el)) continue;

        observer.observe(el);
    }

    teardown = () => {
        observer.disconnect();
        teardown = null;
    };
}
