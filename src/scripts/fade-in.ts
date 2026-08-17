const FADE_SELECTOR = '.fade-in-section:not(.is-revealed)';

function prefersReducedMotion() {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isInView(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

export function initFadeIn() {
    if (typeof document === 'undefined') return;

    const sections = document.querySelectorAll<HTMLElement>(FADE_SELECTOR);
    if (sections.length === 0) return;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
        sections.forEach((el) => el.classList.add('is-revealed'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    target.classList.add('is-revealed');
                    observer.unobserve(target);
                }
            });
        },
        {
            threshold: 0.08,
            rootMargin: '0px 0px 50px 0px',
        },
    );

    sections.forEach((el) => {
        if (isInView(el)) {
            // Reveal above-the-fold elements smoothly
            requestAnimationFrame(() => {
                el.classList.add('is-revealed');
            });
        } else {
            observer.observe(el);
        }
    });
}
