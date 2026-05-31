import cls from 'classnames/bind';
import { getLocale, getTranslations } from 'next-intl/server';
import React from 'react';

import { getSiteConfig } from '@/content/site';
import { asLocale } from '@/intl/routing';

import styles from './index.module.scss';

const BLOCK_NAME = 'Footer';
const cn = cls.bind(styles);

export const Footer = async () => {
    const locale = asLocale(await getLocale());
    const t = await getTranslations('footer');
    const { personal } = getSiteConfig(locale);

    return (
        <footer className={cn(BLOCK_NAME)}>
            <div className={cn(`${BLOCK_NAME}__container`)}>
                <p className={cn(`${BLOCK_NAME}__copy`)}>
                    © {new Date().getFullYear()} {personal.name} — {t('role')}
                </p>
            </div>
        </footer>
    );
};
