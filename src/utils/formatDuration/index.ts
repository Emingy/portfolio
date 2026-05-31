import type { Locale } from '@/intl/routing';

const monthFmtRu = new Intl.DateTimeFormat('ru', { month: 'long' });
const monthFmtEn = new Intl.DateTimeFormat('en', { month: 'long' });

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const formatMonthYear = (dateStr: string, locale: Locale): string => {
    const [year, month] = dateStr.split('-').map(Number);
    const fmt = locale === 'en' ? monthFmtEn : monthFmtRu;
    const monthName = capitalize(fmt.format(new Date(year, month - 1)));
    return `${monthName} ${year}`;
};

export const formatPeriod = (
    startDate: string,
    endDate?: string,
    locale: Locale = 'ru'
): string => {
    const present = locale === 'en' ? 'present' : 'настоящее время';
    const end = endDate ? formatMonthYear(endDate, locale) : present;
    return `${formatMonthYear(startDate, locale)} — ${end}`;
};

const pluralYearRu = (n: number) => {
    if (n % 10 === 1 && n % 100 !== 11) return 'год';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'года';
    return 'лет';
};

const pluralMonthRu = (n: number) => {
    if (n % 10 === 1 && n % 100 !== 11) return 'месяц';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'месяца';
    return 'месяцев';
};

const pluralYearEn = (n: number) => (n === 1 ? 'year' : 'years');
const pluralMonthEn = (n: number) => (n === 1 ? 'month' : 'months');

export type TDateRange = { startDate: string; endDate?: string };

export const calcTotalMonths = (ranges: TDateRange[]): number => {
    if (!ranges.length) return 0;

    const earliest = ranges.reduce(
        (min, r) => (r.startDate < min ? r.startDate : min),
        ranges[0].startDate
    );
    const start = new Date(`${earliest}-01`);
    const end = new Date();

    return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
};

export const calcTotalExperience = (ranges: TDateRange[], locale: Locale = 'ru'): string => {
    if (!ranges.length) return '';

    const earliest = ranges.reduce(
        (min, r) => (r.startDate < min ? r.startDate : min),
        ranges[0].startDate
    );
    return formatDuration(earliest, undefined, locale);
};

export const formatDuration = (
    startDate: string,
    endDate?: string,
    locale: Locale = 'ru'
): string => {
    const start = new Date(`${startDate}-01`);
    const end = endDate ? new Date(`${endDate}-01`) : new Date();

    const totalMonths =
        (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts: string[] = [];

    if (locale === 'en') {
        if (years > 0) parts.push(`${years} ${pluralYearEn(years)}`);
        if (months > 0) parts.push(`${months} ${pluralMonthEn(months)}`);
    } else {
        if (years > 0) parts.push(`${years} ${pluralYearRu(years)}`);
        if (months > 0) parts.push(`${months} ${pluralMonthRu(months)}`);
    }

    return parts.join(' ');
};
