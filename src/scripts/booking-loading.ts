import { BOOKING_LOADING_MS, isBookingUrl } from '@/lib/site';

const OVERLAY_ID = 'loading-overlay';
const DEFAULT_MESSAGE = 'Preparing your booking...';

let abortController: AbortController | null = null;
let redirectTimer: ReturnType<typeof setTimeout> | null = null;

function getOverlay() {
    return document.getElementById(OVERLAY_ID) as HTMLElement | null;
}

function showOverlay(message = DEFAULT_MESSAGE) {
    const overlay = getOverlay();
    if (!overlay) return;

    const messageEl = overlay.querySelector('[data-loading-message]');
    if (messageEl) messageEl.textContent = message;

    overlay.hidden = false;
    overlay.setAttribute('aria-busy', 'true');
    document.documentElement.classList.add('overflow-hidden');
    document.body.classList.add('overflow-hidden');
}

function hideOverlay() {
    const overlay = getOverlay();
    if (!overlay) return;

    overlay.hidden = true;
    overlay.setAttribute('aria-busy', 'false');
    document.documentElement.classList.remove('overflow-hidden');
    document.body.classList.remove('overflow-hidden');
}

function navigateToBooking(url: string) {
    if (redirectTimer) clearTimeout(redirectTimer);

    showOverlay();

    // Double rAF so the overlay paints before the delay timer starts
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            redirectTimer = setTimeout(() => {
                window.location.assign(url);
            }, BOOKING_LOADING_MS);
        });
    });
}

function handleBookingClick(event: MouseEvent) {
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const anchor = (event.target as Element | null)?.closest(
        'a[data-booking-link], a[href*="lldtek.org"]',
    );
    if (!(anchor instanceof HTMLAnchorElement)) return;

    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) {
        return;
    }

    if (!isBookingUrl(anchor.href)) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    navigateToBooking(anchor.href);
}

/**
 * Intercepts booking links — shows the cat loading overlay for BOOKING_LOADING_MS
 * before navigating to the external LLDTEK booking domain.
 */
export function initBookingLoading() {
    abortController?.abort();
    if (redirectTimer) {
        clearTimeout(redirectTimer);
        redirectTimer = null;
    }
    hideOverlay();

    abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener('click', handleBookingClick, { capture: true, signal });
}
