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
}

/**
 * Progressive-enhancement fade-in. Markup stays visible without JS so crawlers
 * and no-JS users still see full content.
 *
 * Above-the-fold nodes are left alone (no opacity flash / layout read).
 * Below-fold nodes animate when IntersectionObserver reports them.
 * Mobile uses a softer opacity-only keyframe (see globals.css).
 */
export function initLandingFade() {
    teardown?.();
    teardown = null;

    if (prefersReducedMotion()) return;

    const nodes = [...document.querySelectorAll<HTMLElement>(SELECTOR)];
    if (!nodes.length) return;

    const isMobile = isMobileViewport();
    const pending = new WeakSet<Element>();

    for (const el of nodes) {
        resetFadeState(el);
    }

    const observer = new IntersectionObserver(
        (entries) => {
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
        },
        { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );

    for (const el of nodes) {
        observer.observe(el);
    }

    teardown = () => {
        observer.disconnect();
        teardown = null;
    };
}
