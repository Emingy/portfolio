import cls from 'classnames/bind';
import React from 'react';

import { siteConfig } from '@/content/site';

import styles from './index.module.scss';

const BLOCK_NAME = 'Footer';
const cn = cls.bind(styles);

export const Footer = () => {
    return (
        <footer className={cn(BLOCK_NAME)}>
            <div className={cn(`${BLOCK_NAME}__container`)}>
                <p className={cn(`${BLOCK_NAME}__copy`)}>
                    © {new Date().getFullYear()} {siteConfig.personal.name} — Frontend Developer
                </p>
            </div>
        </footer>
    );
};
