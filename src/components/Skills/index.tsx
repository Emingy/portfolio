import cls from 'classnames/bind';
import { getLocale, getTranslations } from 'next-intl/server';
import React from 'react';

import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';
import { getSiteConfig } from '@/content/site';
import { asLocale } from '@/intl/routing';

import styles from './index.module.scss';

const BLOCK_NAME = 'Skills';
const cn = cls.bind(styles);

export const Skills = async () => {
    const locale = asLocale(await getLocale());
    const t = await getTranslations('skills');
    const { skills } = getSiteConfig(locale);

    const grouped = skills.reduce<Record<string, string[]>>((acc, { category, title }) => {
        (acc[category] ??= []).push(title);
        return acc;
    }, {});

    return (
        <Section id="skills" num="02" title={t('section-title')}>
            <div className={cn(BLOCK_NAME)}>
                {Object.entries(grouped).map(([category, titles], i) => (
                    <Reveal key={category} delay={i * 60}>
                        <div className={cn(`${BLOCK_NAME}__group`)}>
                            <span className={cn(`${BLOCK_NAME}__label`)}>{category}</span>

                            <div className={cn(`${BLOCK_NAME}__chips`)}>
                                {titles.map((title) => (
                                    <span key={title} className={cn(`${BLOCK_NAME}__chip`)}>
                                        {title}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};
