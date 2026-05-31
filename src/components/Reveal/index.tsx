'use client';

import cls from 'classnames/bind';
import React from 'react';

import { useReveal } from '@/hooks/useReveal';

import styles from './index.module.scss';

import type { TProps } from './types';

const BLOCK_NAME = 'Reveal';
const cn = cls.bind(styles);

export const Reveal = ({ children, className, delay = 0 }: TProps) => {
    const { ref, isVisible } = useReveal<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className={cn(BLOCK_NAME, className, { [`${BLOCK_NAME}__visible`]: isVisible })}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
};
