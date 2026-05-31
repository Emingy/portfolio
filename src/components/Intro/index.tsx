'use client';

import cls from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import { siteConfig } from '@/content/site';

import styles from './index.module.scss';

import { EStates, HIDE_DELAY, REMOVE_DELAY } from './constants';

const BLOCK_NAME = 'Intro';
const cn = cls.bind(styles);

export const Intro = () => {
    const [phase, setPhase] = useState<EStates>(EStates.Visible);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const hideTimeout = setTimeout(() => setPhase(EStates.Hiding), HIDE_DELAY);
        const goneTimeout = setTimeout(() => {
            setPhase(EStates.Gone);
            document.body.style.overflow = '';
        }, REMOVE_DELAY);

        return () => {
            clearTimeout(hideTimeout);
            clearTimeout(goneTimeout);
            document.body.style.overflow = '';
        };
    }, []);

    if (phase === EStates.Gone) return null;

    return (
        <div className={cn(BLOCK_NAME, { [`${BLOCK_NAME}_hiding`]: phase === EStates.Hiding })}>
            <div className={cn(`${BLOCK_NAME}__scanlines`)} aria-hidden="true" />

            <div className={cn(`${BLOCK_NAME}__content`)}>
                <span className={cn(`${BLOCK_NAME}__brand`)}>{siteConfig.personal.brand}</span>

                <span className={cn(`${BLOCK_NAME}__role`)}>{siteConfig.personal.position}</span>
            </div>

            <div className={cn(`${BLOCK_NAME}__bar`)} aria-hidden="true" />
        </div>
    );
};
