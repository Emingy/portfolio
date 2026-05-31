export const NAV_ITEMS = [
    { href: '#about', key: 'about' },
    { href: '#skills', key: 'skills' },
    { href: '#projects', key: 'projects' },
    { href: '#experience', key: 'experience' },
    { href: '#contacts', key: 'contacts' },
] as const;

export const SECTION_IDS = NAV_ITEMS.map(({ href }) => href.slice(1));
