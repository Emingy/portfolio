import cls from 'classnames/bind';
import React from 'react';

import { formatDuration, formatPeriod } from '@/utils/formatDuration';

import styles from './index.module.scss';

import type { TProps } from './types';

const BLOCK_NAME = 'ExperienceCard';
const cn = cls.bind(styles);

export const ExperienceCard = ({ experience, locale }: TProps) => {
    return (
        <div className={cn(BLOCK_NAME)}>
            <div className={cn(`${BLOCK_NAME}__period`)}>
                {formatPeriod(experience.startDate, experience.endDate, locale)}

                <span className={cn(`${BLOCK_NAME}__duration`)}>
                    {formatDuration(experience.startDate, experience.endDate, locale)}
                </span>
            </div>

            <div className={cn(`${BLOCK_NAME}__role`)}>{experience.role}</div>

            <div className={cn(`${BLOCK_NAME}__company`)}>
                {experience.companyUrl ? (
                    <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(`${BLOCK_NAME}__company-link`)}
                    >
                        {experience.company}
                    </a>
                ) : (
                    experience.company
                )}{' '}
                · {experience.location}
            </div>

            <p className={cn(`${BLOCK_NAME}__description`)}>{experience.description}</p>
        </div>
    );
};
