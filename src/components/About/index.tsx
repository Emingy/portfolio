import cls from 'classnames/bind';
import { getLocale, getTranslations } from 'next-intl/server';
import React from 'react';

import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';
import { StatCounter } from '@/components/StatCounter';
import { getSiteConfig } from '@/content/site';
import { asLocale } from '@/intl/routing';
import { calcTotalMonths } from '@/utils/formatDuration';

import styles from './index.module.scss';

const BLOCK_NAME = 'About';
const cn = cls.bind(styles);

export const About = async () => {
    const locale = asLocale(await getLocale());
    const t = await getTranslations('about');
    const { personal, experience, projects } = getSiteConfig(locale);

    const totalYears = Math.floor(calcTotalMonths(experience) / 12);

    return (
        <Section id="about" num="01" title={t('section-title')}>
            <div className={cn(`${BLOCK_NAME}__grid`)}>
                <div className={cn(`${BLOCK_NAME}__left`)}>
                    <Reveal className={cn(`${BLOCK_NAME}__text`)}>
                        {personal.about.paragraphs.map((paragraph) => (
                            <p
                                key={paragraph}
                                className={cn(`${BLOCK_NAME}__paragraph`)}
                                dangerouslySetInnerHTML={{
                                    __html: paragraph
                                        .replace(/<cyan>(.*?)<\/cyan>/g, '<span>$1</span>')
                                        .replace(/<magenta>(.*?)<\/magenta>/g, '<em>$1</em>'),
                                }}
                            />
                        ))}
                    </Reveal>

                    <div className={cn(`${BLOCK_NAME}__stats`)}>
                        <StatCounter
                            value={totalYears}
                            suffix={t('stat-years-suffix')}
                            label={t('stat-exp')}
                        />
                        <StatCounter value={experience.length} label={t('stat-companies')} />
                        <StatCounter
                            value={projects.length}
                            suffix="+"
                            label={t('stat-projects')}
                        />
                    </div>

                    <Reveal delay={160}>
                        <div className={cn(`${BLOCK_NAME}__hobbies`)}>
                            <span className={cn(`${BLOCK_NAME}__hobbies-label`)}>
                                {t('hobbies-label')}
                            </span>

                            <ul className={cn(`${BLOCK_NAME}__hobbies-list`)}>
                                {personal.hobbies.map((hobby) => (
                                    <li key={hobby}>{hobby}</li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>

                <div className={cn(`${BLOCK_NAME}__side`)}>
                    {personal.avatar && (
                        <Reveal>
                            <div className={cn(`${BLOCK_NAME}__portrait`)}>
                                <img
                                    src={personal.avatar}
                                    alt={personal.name}
                                    className={cn(`${BLOCK_NAME}__portrait-img`)}
                                />

                                <i
                                    className={cn(
                                        `${BLOCK_NAME}__corner`,
                                        `${BLOCK_NAME}__corner_tl`
                                    )}
                                />
                                <i
                                    className={cn(
                                        `${BLOCK_NAME}__corner`,
                                        `${BLOCK_NAME}__corner_tr`
                                    )}
                                />
                                <i
                                    className={cn(
                                        `${BLOCK_NAME}__corner`,
                                        `${BLOCK_NAME}__corner_bl`
                                    )}
                                />
                                <i
                                    className={cn(
                                        `${BLOCK_NAME}__corner`,
                                        `${BLOCK_NAME}__corner_br`
                                    )}
                                />
                            </div>
                        </Reveal>
                    )}

                    <Reveal delay={100}>
                        <div className={cn(`${BLOCK_NAME}__dossier`)}>
                            <div className={cn(`${BLOCK_NAME}__dfield`)}>
                                <span className={cn(`${BLOCK_NAME}__dk`)}>{t('dossier-name')}</span>
                                <span className={cn(`${BLOCK_NAME}__dv`)}>{personal.name}</span>
                            </div>

                            <div className={cn(`${BLOCK_NAME}__dfield`)}>
                                <span className={cn(`${BLOCK_NAME}__dk`)}>{t('dossier-role')}</span>
                                <span className={cn(`${BLOCK_NAME}__dv`)}>{personal.position}</span>
                            </div>

                            <div className={cn(`${BLOCK_NAME}__dfield`)}>
                                <span className={cn(`${BLOCK_NAME}__dk`)}>{t('dossier-exp')}</span>
                                <span className={cn(`${BLOCK_NAME}__dv`)}>
                                    {totalYears}
                                    {t('stat-years-suffix')}
                                </span>
                            </div>

                            <div className={cn(`${BLOCK_NAME}__dfield`)}>
                                <span className={cn(`${BLOCK_NAME}__dk`)}>{t('dossier-city')}</span>
                                <span className={cn(`${BLOCK_NAME}__dv`)}>{personal.city}</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
};
