import { GA_ID } from '@/lib/site';

declare global {
    interface Window {
        __gaLoaded?: boolean;
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

function loadGoogleAnalytics() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.onload = () => {
        window.gtag?.('js', new Date());
        window.gtag?.('config', GA_ID);
    };
    document.head.appendChild(script);
}

/**
 * Load GA4 after idle or first user interaction so gtag.js (~167 KiB) stays off
 * the critical path for LCP/FCP.
 */
export function initDeferredAnalytics() {
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
    };

    const schedule =
        window.requestIdleCallback ??
        ((cb: IdleRequestCallback) =>
            window.setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 0 }), 1));

    schedule(() => loadGoogleAnalytics(), { timeout: 4000 });

    for (const type of ['scroll', 'click', 'keydown', 'touchstart', 'pointerdown'] as const) {
        window.addEventListener(type, loadGoogleAnalytics, { once: true, passive: true });
    }
}
