export const NAV_LINKS = [
    { href: '#about', label: 'Обо мне' },
    { href: '#skills', label: 'Стек' },
    { href: '#projects', label: 'Проекты' },
    { href: '#experience', label: 'Опыт' },
    { href: '#contacts', label: 'Контакты' },
] as const;

export const SECTION_IDS = NAV_LINKS.map(({ href }) => href.slice(1));
