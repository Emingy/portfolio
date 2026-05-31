import cls from 'classnames/bind';
import React from 'react';

import { EProjectType } from '@/constants';

import styles from './index.module.scss';

import { BADGE_LABEL } from './constants';
import type { TProps } from './types';

const BLOCK_NAME = 'ProjectCard';
const cn = cls.bind(styles);

export const ProjectCard = ({ project, index, onOpen }: TProps) => {
    const num = String(index + 1).padStart(2, '0');
    const hasPreview = Boolean(project.url);

    const handleClick = () => {
        if (hasPreview) onOpen(project);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!hasPreview) return;
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen(project);
        }
    };

    return (
        <article
            className={cn(BLOCK_NAME, { [`${BLOCK_NAME}_locked`]: !hasPreview })}
            role={hasPreview ? 'button' : undefined}
            tabIndex={hasPreview ? 0 : undefined}
            aria-label={hasPreview ? `Открыть превью ${project.title}` : undefined}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
        >
            <span className={cn(`${BLOCK_NAME}__num`)}>{num}</span>

            <div className={cn(`${BLOCK_NAME}__body`)}>
                <div className={cn(`${BLOCK_NAME}__head`)}>
                    <h3 className={cn(`${BLOCK_NAME}__title`)} data-text={project.title}>
                        {project.title}
                    </h3>

                    <span
                        className={cn(`${BLOCK_NAME}__badge`, {
                            [`${BLOCK_NAME}__badge_pet`]: project.type === EProjectType.Pet,
                        })}
                    >
                        {BADGE_LABEL[project.type]}
                    </span>
                </div>

                <p className={cn(`${BLOCK_NAME}__description`)}>{project.description}</p>

                <ul className={cn(`${BLOCK_NAME}__tags`)}>
                    {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>

            {hasPreview ? (
                <span className={cn(`${BLOCK_NAME}__arrow`)} aria-hidden="true">
                    ⤢
                </span>
            ) : (
                <span className={cn(`${BLOCK_NAME}__nda`)} aria-hidden="true">
                    NDA
                </span>
            )}
        </article>
    );
};
