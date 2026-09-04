const SELECTOR = '[data-fade-in]';
const ANIMATION_CLASS = 'animate-landing-fade-in-up';

let teardown: (() => void) | null = null;

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function reveal(el: HTMLElement) {
    if (el.classList.contains(ANIMATION_CLASS)) return;

    const delay = Number(el.dataset.fadeDelay ?? 0);
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
 * Below-fold nodes animate when IntersectionObserver reports them — no
 * getBoundingClientRect, so we avoid forced reflow.
 */
export function initLandingFade() {
    teardown?.();
    teardown = null;

    if (prefersReducedMotion()) return;

    const nodes = [...document.querySelectorAll<HTMLElement>(SELECTOR)];
    if (!nodes.length) return;

    const pending = new WeakSet<Element>();

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
                reveal(el);
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
