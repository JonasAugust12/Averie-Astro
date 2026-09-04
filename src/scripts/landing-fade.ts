const SELECTOR = '[data-fade-in]';
const PREPARE_CLASS = 'fade-prepare';
const REVEALED_CLASS = 'is-revealed';

const MOBILE_MQ = '(max-width: 767px)';

let teardown: (() => void) | null = null;

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isMobileViewport() {
    return window.matchMedia(MOBILE_MQ).matches;
}

function reveal(el: HTMLElement, isMobile: boolean) {
    if (el.classList.contains(REVEALED_CLASS)) return;

    el.classList.add(PREPARE_CLASS);

    const delayMs = isMobile ? 0 : Number(el.dataset.fadeDelay ?? 0) * 1000;

    const run = () => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.classList.add(REVEALED_CLASS);
            });
        });
    };

    if (delayMs > 0) {
        setTimeout(run, delayMs);
    } else {
        run();
    }
}

/**
 * Progressive-enhancement fade-in. Markup stays visible without JS so crawlers
 * and no-JS users still see full content.
 *
 * Above-the-fold nodes are left alone (no opacity flash / layout read).
 * Below-fold nodes reveal via CSS transitions — opacity-only on mobile for
 * a softer, luxury feel without scroll jank.
 */
export function initLandingFade() {
    teardown?.();
    teardown = null;

    if (prefersReducedMotion()) return;

    const nodes = [...document.querySelectorAll<HTMLElement>(SELECTOR)];
    if (!nodes.length) return;

    const isMobile = isMobileViewport();
    const pending = new WeakSet<Element>();

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                const el = entry.target as HTMLElement;

                if (isMobile) {
                    if (!entry.isIntersecting) {
                        // Pre-hide while still off-screen so reveal never flashes
                        if (
                            !el.classList.contains(REVEALED_CLASS) &&
                            entry.boundingClientRect.top > window.innerHeight
                        ) {
                            el.classList.add(PREPARE_CLASS);
                        }
                        continue;
                    }

                    // Skip hero / above-fold blocks visible on first paint
                    if (!pending.has(el)) {
                        pending.add(el);
                        if (entry.boundingClientRect.top < window.innerHeight * 0.8) {
                            observer.unobserve(el);
                            continue;
                        }
                    }

                    reveal(el, true);
                    observer.unobserve(el);
                    continue;
                }

                // Desktop: original above-fold guard
                if (!pending.has(el)) {
                    pending.add(el);
                    if (entry.isIntersecting) {
                        observer.unobserve(el);
                        continue;
                    }
                }

                if (!entry.isIntersecting) continue;
                reveal(el, false);
                observer.unobserve(el);
            }
        },
        isMobile
            ? { threshold: 0, rootMargin: '0px 0px 60px 0px' }
            : { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );

    for (const el of nodes) {
        observer.observe(el);
    }

    teardown = () => {
        observer.disconnect();
        teardown = null;
    };
}
