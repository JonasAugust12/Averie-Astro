import closureNoticeData from '@/data/closure-notice.json';

export const CLOSURE_NOTICE_ICONS = [
    'storm',
    'holiday',
    'maintenance',
    'snow',
    'health',
    'general',
] as const;

export type ClosureNoticeIcon = (typeof CLOSURE_NOTICE_ICONS)[number];

export interface ClosureNoticeConfig {
    enabled: boolean;
    icon: ClosureNoticeIcon;
    /** Short label above the headline (e.g. Weather advisory). */
    eyebrow?: string;
    /** Main title — closure date or headline. */
    headline: string;
    /** Why we are closed (one line). */
    reason: string;
    /** Primary message — highlighted on the card. */
    announcement: string;
    /** Supporting description / apology / next steps. */
    message: string;
    startDate?: string;
    endDate?: string;
}

export const DEFAULT_CLOSURE_EYEBROWS: Record<ClosureNoticeIcon, string> = {
    storm: 'Weather advisory',
    holiday: 'Holiday closure',
    maintenance: 'Temporary closure',
    snow: 'Winter weather',
    health: 'Health & safety',
    general: 'Salon update',
};

export const closureNotice = closureNoticeData as ClosureNoticeConfig;

export function normalizeClosureIcon(icon: string | undefined): ClosureNoticeIcon {
    if (icon && (CLOSURE_NOTICE_ICONS as readonly string[]).includes(icon)) {
        return icon as ClosureNoticeIcon;
    }
    return 'general';
}

export function resolveClosureEyebrow(config: ClosureNoticeConfig): string {
    const trimmed = config.eyebrow?.trim();
    if (trimmed) return trimmed;
    const icon = normalizeClosureIcon(config.icon);
    return DEFAULT_CLOSURE_EYEBROWS[icon];
}

/** True when enabled and today falls within the optional start/end window (inclusive, local day). */
export function isClosureNoticeActive(config: ClosureNoticeConfig = closureNotice): boolean {
    if (!config.enabled) return false;

    const now = new Date();

    if (config.startDate?.trim()) {
        const start = new Date(`${config.startDate.trim()}T00:00:00`);
        if (now < start) return false;
    }

    if (config.endDate?.trim()) {
        const end = new Date(`${config.endDate.trim()}T23:59:59`);
        if (now > end) return false;
    }

    return true;
}
