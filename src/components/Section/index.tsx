import cls from 'classnames/bind';
import React from 'react';

import { Reveal } from '@/components/Reveal';

import styles from './index.module.scss';

import type { TProps } from './types';

const BLOCK_NAME = 'Section';
const cn = cls.bind(styles);

export const Section = ({ id, num, title, badge, children, className }: TProps) => {
    return (
        <section id={id} className={cn(BLOCK_NAME, className)}>
            <div className={cn(`${BLOCK_NAME}__container`)}>
                <Reveal>
                    <div className={cn(`${BLOCK_NAME}__header`)}>
                        <span className={cn(`${BLOCK_NAME}__num`)}>{num}</span>

                        <h2 className={cn(`${BLOCK_NAME}__title`)}>{title}</h2>

                        <span className={cn(`${BLOCK_NAME}__line`)} />

                        {badge && <span className={cn(`${BLOCK_NAME}__badge`)}>{badge}</span>}
                    </div>
                </Reveal>

                <div className={cn(`${BLOCK_NAME}__content`)}>{children}</div>
            </div>
        </section>
    );
};
