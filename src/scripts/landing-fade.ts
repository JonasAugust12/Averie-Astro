const SELECTOR = '[data-fade-in]';
const ANIMATION_CLASS = 'animate-landing-fade-in-up';

let teardown: (() => void) | null = null;

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isInView(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
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
 * and no-JS users still see full content. Animation is applied only after paint.
 */
export function initLandingFade() {
    teardown?.();
    teardown = null;

    if (prefersReducedMotion()) return;

    const nodes = [...document.querySelectorAll<HTMLElement>(SELECTOR)];
    if (!nodes.length) return;

    const pending = () => nodes.filter((el) => !el.classList.contains(ANIMATION_CLASS));

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                reveal(entry.target as HTMLElement);
                observer.unobserve(entry.target);
            }
            if (pending().length === 0) teardown?.();
        },
        { threshold: 0.08, rootMargin: '0px 0px 5% 0px' },
    );

    const checkVisibility = () => {
        for (const el of pending()) {
            if (!isInView(el)) continue;
            reveal(el);
            observer.unobserve(el);
        }
        if (pending().length === 0) teardown?.();
    };

    for (const el of nodes) {
        observer.observe(el);
    }

    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
    const frame = window.requestAnimationFrame(checkVisibility);

    teardown = () => {
        observer.disconnect();
        window.removeEventListener('scroll', checkVisibility);
        window.removeEventListener('resize', checkVisibility);
        window.cancelAnimationFrame(frame);
        teardown = null;
    };
}
