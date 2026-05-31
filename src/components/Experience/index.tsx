import cls from 'classnames/bind';
import React from 'react';

import { ExperienceCard } from '@/components/ExperienceCard';
import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';
import { siteConfig } from '@/content/site';
import { calcTotalExperience } from '@/utils/formatDuration';

import styles from './index.module.scss';

const BLOCK_NAME = 'Experience';
const cn = cls.bind(styles);

export const Experience = () => {
    const totalExperience = calcTotalExperience(siteConfig.experience);

    return (
        <Section id="experience" num="04" title="Опыт работы" badge={totalExperience}>
            <div className={cn(BLOCK_NAME)}>
                {siteConfig.experience.map((item, i) => (
                    <Reveal key={item.id} delay={i * 80}>
                        <ExperienceCard experience={item} />
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};
