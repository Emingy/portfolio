'use client';

import cls from 'classnames/bind';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { getSiteConfig } from '@/content/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { usePathname, useRouter } from '@/intl/navigation';
import { asLocale } from '@/intl/routing';

import styles from './index.module.scss';

import { NAV_ITEMS, SECTION_IDS } from './constants';

const BLOCK_NAME = 'Navbar';
const cn = cls.bind(styles);

type TNavKey = (typeof NAV_ITEMS)[number]['key'];

export const Navbar = () => {
    const locale = asLocale(useLocale());
    const t = useTranslations('nav');
    const tc = useTranslations('common');
    const { personal } = getSiteConfig(locale);

    const [isOpen, setIsOpen] = useState(false);
    const activeSection = useActiveSection(SECTION_IDS);
    const router = useRouter();
    const pathname = usePathname();

    const handleBurgerClick = () => setIsOpen((prev) => !prev);
    const handleLinkClick = () => setIsOpen(false);

    const switchLocale = () => {
        router.replace(pathname, { locale: locale === 'ru' ? 'en' : 'ru' });
    };

    return (
        <nav className={cn(BLOCK_NAME)}>
            <div className={cn(`${BLOCK_NAME}__container`)}>
                <a href="#hero" className={cn(`${BLOCK_NAME}__brand`)}>
                    {personal.brand}
                </a>

                <ul className={cn(`${BLOCK_NAME}__menu`, { [`${BLOCK_NAME}__menu_open`]: isOpen })}>
                    <button
                        className={cn(`${BLOCK_NAME}__close`)}
                        onClick={handleLinkClick}
                        aria-label={tc('close-menu')}
                    >
                        ✕
                    </button>

                    {NAV_ITEMS.map(({ href, key }: { href: string; key: TNavKey }) => {
                        const id = href.slice(1);

                        return (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={handleLinkClick}
                                    className={cn({
                                        [`${BLOCK_NAME}__link_active`]: activeSection === id,
                                    })}
                                >
                                    {t(key)}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className={cn(`${BLOCK_NAME}__actions`)}>
                    <button
                        className={cn(`${BLOCK_NAME}__lang`)}
                        onClick={switchLocale}
                        aria-label={tc('lang-switch')}
                    >
                        {tc('lang-switch')}
                    </button>

                    <button
                        className={cn(`${BLOCK_NAME}__burger`)}
                        onClick={handleBurgerClick}
                        aria-label={tc('open-menu')}
                        aria-expanded={isOpen}
                    >
                        ≡
                    </button>
                </div>
            </div>
        </nav>
    );
};
