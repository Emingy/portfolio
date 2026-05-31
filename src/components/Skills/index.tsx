import cls from 'classnames/bind';
import React from 'react';

import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';
import { siteConfig } from '@/content/site';

import styles from './index.module.scss';

const BLOCK_NAME = 'Skills';
const cn = cls.bind(styles);

export const Skills = () => {
    const grouped = siteConfig.skills.reduce<Record<string, string[]>>(
        (acc, { category, title }) => {
            (acc[category] ??= []).push(title);
            return acc;
        },
        {}
    );
    return (
        <Section id="skills" num="02" title="Стек">
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
