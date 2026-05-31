'use client';

import cls from 'classnames/bind';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { getSiteConfig } from '@/content/site';
import { useTyping } from '@/hooks/useTyping';
import { asLocale } from '@/intl/routing';

import styles from './index.module.scss';

const BLOCK_NAME = 'Hero';
const cn = cls.bind(styles);

export const Hero = () => {
    const locale = asLocale(useLocale());
    const t = useTranslations('hero');
    const { personal } = getSiteConfig(locale);
    const typedText = useTyping(personal.heroPhrases);

    return (
        <header id="hero" className={cn(BLOCK_NAME)}>
            <div className={cn(`${BLOCK_NAME}__wrap`)}>
                <div className={cn(`${BLOCK_NAME}__case-tag`)}>{personal.name}</div>

                <h1 className={cn(`${BLOCK_NAME}__title`)}>
                    Frontend
                    <br />
                    <em className={cn(`${BLOCK_NAME}__title-em`)}>Developer</em>
                </h1>

                <p className={cn(`${BLOCK_NAME}__role`)}>
                    {t('prefix')}{' '}
                    <span className={cn(`${BLOCK_NAME}__typed`)}>
                        {typedText}
                        <span className={cn(`${BLOCK_NAME}__cursor`)}>|</span>
                    </span>
                </p>

                <div className={cn(`${BLOCK_NAME}__cta`)}>
                    <a href="#projects" className={cn(`${BLOCK_NAME}__btn`)}>
                        {t('cta-projects')}
                    </a>

                    <a
                        href="#contacts"
                        className={cn(`${BLOCK_NAME}__btn`, `${BLOCK_NAME}__btn_alt`)}
                    >
                        {t('cta-contact')}
                    </a>
                </div>
            </div>
        </header>
    );
};

export type THeroProps = { className?: string };
