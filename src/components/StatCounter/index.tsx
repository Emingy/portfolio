'use client';

import cls from 'classnames/bind';
import React from 'react';

import { useCountUp } from '@/hooks/useCountUp';
import { useReveal } from '@/hooks/useReveal';

import styles from './index.module.scss';

import type { TProps } from './types';

const BLOCK_NAME = 'StatCounter';
const cn = cls.bind(styles);

export const StatCounter = ({ value, suffix = '', label }: TProps) => {
    const { ref, isVisible } = useReveal<HTMLDivElement>();
    const count = useCountUp(value, 1200, isVisible);

    return (
        <div ref={ref} className={cn(BLOCK_NAME)}>
            <span className={cn(`${BLOCK_NAME}__value`)}>
                {count}
                {suffix}
            </span>

            <span className={cn(`${BLOCK_NAME}__label`)}>{label}</span>
        </div>
    );
};
