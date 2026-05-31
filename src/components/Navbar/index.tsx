'use client';

import cls from 'classnames/bind';
import React, { useState } from 'react';

import { siteConfig } from '@/content/site';
import { useActiveSection } from '@/hooks/useActiveSection';

import styles from './index.module.scss';

import { NAV_LINKS, SECTION_IDS } from './constants';

const BLOCK_NAME = 'Navbar';
const cn = cls.bind(styles);

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeSection = useActiveSection(SECTION_IDS);

    const handleBurgerClick = () => setIsOpen((prev) => !prev);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav className={cn(BLOCK_NAME)}>
            <div className={cn(`${BLOCK_NAME}__container`)}>
                <a href="#hero" className={cn(`${BLOCK_NAME}__brand`)}>
                    {siteConfig.personal.brand}
                </a>

                <ul className={cn(`${BLOCK_NAME}__menu`, { [`${BLOCK_NAME}__menu_open`]: isOpen })}>
                    <button
                        className={cn(`${BLOCK_NAME}__close`)}
                        onClick={handleLinkClick}
                        aria-label="Закрыть меню"
                    >
                        ✕
                    </button>

                    {NAV_LINKS.map(({ href, label }) => {
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
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <button
                    className={cn(`${BLOCK_NAME}__burger`)}
                    onClick={handleBurgerClick}
                    aria-label="Открыть меню"
                    aria-expanded={isOpen}
                >
                    ≡
                </button>
            </div>
        </nav>
    );
};
