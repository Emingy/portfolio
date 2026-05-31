import cls from 'classnames/bind';
import { getLocale, getTranslations } from 'next-intl/server';
import React from 'react';

import { ExperienceCard } from '@/components/ExperienceCard';
import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';
import { getSiteConfig } from '@/content/site';
import { asLocale } from '@/intl/routing';
import { calcTotalExperience } from '@/utils/formatDuration';

import styles from './index.module.scss';

const BLOCK_NAME = 'Experience';
const cn = cls.bind(styles);

export const Experience = async () => {
    const locale = asLocale(await getLocale());
    const t = await getTranslations('experience');
    const { experience } = getSiteConfig(locale);

    const totalExperience = calcTotalExperience(experience, locale);

    return (
        <Section id="experience" num="04" title={t('section-title')} badge={totalExperience}>
            <div className={cn(BLOCK_NAME)}>
                {experience.map((item, i) => (
                    <Reveal key={item.id} delay={i * 80}>
                        <ExperienceCard experience={item} locale={locale} />
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};
