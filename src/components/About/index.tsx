import cls from 'classnames/bind';
import React from 'react';

import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';
import { StatCounter } from '@/components/StatCounter';
import { siteConfig } from '@/content/site';
import { calcTotalExperience, calcTotalMonths } from '@/utils/formatDuration';

import styles from './index.module.scss';

const BLOCK_NAME = 'About';
const cn = cls.bind(styles);

export const About = () => {
    const { personal, experience, projects } = siteConfig;

    const totalExperience = calcTotalExperience(experience);
    const totalYears = Math.floor(calcTotalMonths(experience) / 12);

    return (
        <Section id="about" num="01" title={personal.about.title}>
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
                        <StatCounter value={totalYears} suffix=" лет" label="опыт" />
                        <StatCounter value={experience.length} label="компании" />
                        <StatCounter value={projects.length} suffix="+" label="проектов" />
                    </div>

                    <Reveal delay={160}>
                        <div className={cn(`${BLOCK_NAME}__hobbies`)}>
                            <span className={cn(`${BLOCK_NAME}__hobbies-label`)}>вне работы</span>

                            <ul className={cn(`${BLOCK_NAME}__hobbies-list`)}>
                                {personal.hobbies.map((hobby) => (
                                    <li key={hobby}>{hobby}</li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>

                <div className={cn(`${BLOCK_NAME}__side`)}>
                    <Reveal>
                        <div className={cn(`${BLOCK_NAME}__portrait`)}>
                            <div className={cn(`${BLOCK_NAME}__portrait-ph`)}>
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6Z" />
                                </svg>
                                <span>Фото</span>
                            </div>

                            <i
                                className={cn(`${BLOCK_NAME}__corner`, `${BLOCK_NAME}__corner_tl`)}
                            />
                            <i
                                className={cn(`${BLOCK_NAME}__corner`, `${BLOCK_NAME}__corner_tr`)}
                            />
                            <i
                                className={cn(`${BLOCK_NAME}__corner`, `${BLOCK_NAME}__corner_bl`)}
                            />
                            <i
                                className={cn(`${BLOCK_NAME}__corner`, `${BLOCK_NAME}__corner_br`)}
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <div className={cn(`${BLOCK_NAME}__dossier`)}>
                            <div className={cn(`${BLOCK_NAME}__dfield`)}>
                                <span className={cn(`${BLOCK_NAME}__dk`)}>ИМЯ</span>
                                <span className={cn(`${BLOCK_NAME}__dv`)}>{personal.name}</span>
                            </div>

                            <div className={cn(`${BLOCK_NAME}__dfield`)}>
                                <span className={cn(`${BLOCK_NAME}__dk`)}>РОЛЬ</span>
                                <span className={cn(`${BLOCK_NAME}__dv`)}>{personal.position}</span>
                            </div>

                            <div className={cn(`${BLOCK_NAME}__dfield`)}>
                                <span className={cn(`${BLOCK_NAME}__dk`)}>ОПЫТ</span>
                                <span className={cn(`${BLOCK_NAME}__dv`)}>{totalExperience}</span>
                            </div>

                            <div className={cn(`${BLOCK_NAME}__dfield`)}>
                                <span className={cn(`${BLOCK_NAME}__dk`)}>ГОРОД</span>
                                <span className={cn(`${BLOCK_NAME}__dv`)}>{personal.city}</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
};
