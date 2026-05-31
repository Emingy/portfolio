'use client';

import cls from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import { smoothScrollToY } from '@/utils/smoothScroll';

import styles from './index.module.scss';

import { MIN_OFFSET_VISIBLE, SCROLL_TO } from './constants';

const BLOCK_NAME = 'BackToTop';
const cn = cls.bind(styles);

export const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > MIN_OFFSET_VISIBLE);

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => smoothScrollToY(SCROLL_TO);

    return (
        <button
            className={cn(BLOCK_NAME, { [`${BLOCK_NAME}_visible`]: visible })}
            onClick={handleClick}
            aria-label="Наверх"
        >
            ↑
        </button>
    );
};
