const FADE_SELECTOR = '.fade-in-section:not(.is-revealed)';

let initialized = false;

function isInView(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function reveal(el: HTMLElement) {
    if (el.classList.contains('is-revealed')) return;

    el.classList.add('is-revealed');

    if (prefersReducedMotion()) return;

    const delay = parseFloat(el.dataset.delay ?? '0');
    if (delay > 0) {
        el.style.animationDelay = `${delay}s`;
    }

    // Match Next.js FadeIn: add the keyframe class after the visible HTML has painted.
    requestAnimationFrame(() => {
        el.classList.add('animate-landing-fade-in-up');
    });
}

export function initFadeIn() {
    const sections = document.querySelectorAll<HTMLElement>(FADE_SELECTOR);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    reveal(entry.target as HTMLElement);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px 5% 0px' },
    );

    const checkVisibility = () => {
        document.querySelectorAll<HTMLElement>(FADE_SELECTOR).forEach((el) => {
            if (isInView(el)) {
                reveal(el);
                observer.unobserve(el);
            } else {
                observer.observe(el);
            }
        });
    };

    if (!initialized) {
        window.addEventListener('scroll', checkVisibility, { passive: true });
        window.addEventListener('resize', checkVisibility);
        initialized = true;
    }

    checkVisibility();
    requestAnimationFrame(checkVisibility);
}
