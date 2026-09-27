import closureNoticeData from '@/data/closure-notice.json';

export interface ClosureNoticeConfig {
    enabled: boolean;
    headline: string;
    reason: string;
    announcement: string;
    message: string;
    startDate?: string;
    endDate?: string;
}

export const closureNotice = closureNoticeData as ClosureNoticeConfig;

/** True when enabled and today falls within the optional start/end window (inclusive, local day). */
export function isClosureNoticeActive(config: ClosureNoticeConfig = closureNotice): boolean {
    if (!config.enabled) return false;

    const now = new Date();

    if (config.startDate) {
        const start = new Date(`${config.startDate}T00:00:00`);
        if (now < start) return false;
    }

    if (config.endDate) {
        const end = new Date(`${config.endDate}T23:59:59`);
        if (now > end) return false;
    }

    return true;
}
