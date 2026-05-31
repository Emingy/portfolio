const monthFmt = new Intl.DateTimeFormat('ru', { month: 'long' });

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const formatMonthYear = (dateStr: string): string => {
    const [year, month] = dateStr.split('-').map(Number);
    const monthName = capitalize(monthFmt.format(new Date(year, month - 1)));
    return `${monthName} ${year}`;
};

export const formatPeriod = (startDate: string, endDate?: string): string => {
    const end = endDate ? formatMonthYear(endDate) : 'настоящее время';
    return `${formatMonthYear(startDate)} — ${end}`;
};

const pluralYear = (n: number) => {
    if (n % 10 === 1 && n % 100 !== 11) return 'год';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'года';
    return 'лет';
};

const pluralMonth = (n: number) => {
    if (n % 10 === 1 && n % 100 !== 11) return 'месяц';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'месяца';
    return 'месяцев';
};

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

export const calcTotalExperience = (ranges: TDateRange[]): string => {
    if (!ranges.length) return '';

    const earliest = ranges.reduce(
        (min, r) => (r.startDate < min ? r.startDate : min),
        ranges[0].startDate
    );
    return formatDuration(earliest);
};

export const formatDuration = (startDate: string, endDate?: string): string => {
    const start = new Date(`${startDate}-01`);
    const end = endDate ? new Date(`${endDate}-01`) : new Date();

    const totalMonths =
        (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts: string[] = [];

    if (years > 0) parts.push(`${years} ${pluralYear(years)}`);
    if (months > 0) parts.push(`${months} ${pluralMonth(months)}`);

    return parts.join(' ');
};
