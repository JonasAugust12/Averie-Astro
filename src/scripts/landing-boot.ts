import { initBookingLoading } from '@/scripts/booking-loading';
import { initDeferredAnalytics } from '@/scripts/deferred-analytics';
import { initLandingFade } from '@/scripts/landing-fade';
import { initLandingNav } from '@/scripts/landing-nav';
import { initPriceList } from '@/scripts/price-list';

initDeferredAnalytics();
initLandingNav();
initLandingFade();
initBookingLoading();
initPriceList();
