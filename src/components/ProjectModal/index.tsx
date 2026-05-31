'use client';

import cls from 'classnames/bind';
import React, { useEffect } from 'react';

import styles from './index.module.scss';

import type { TProps } from './types';

const BLOCK_NAME = 'ProjectModal';
const cn = cls.bind(styles);

export const ProjectModal = ({ project, onClose }: TProps) => {
    const isOpen = project !== null;

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = 'hidden';

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKey);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div
            className={cn(BLOCK_NAME)}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            onClick={handleBackdropClick}
        >
            <div className={cn(`${BLOCK_NAME}__frame`)}>
                <div className={cn(`${BLOCK_NAME}__bar`)}>
                    <span className={cn(`${BLOCK_NAME}__dots`)} aria-hidden="true">
                        <i />
                        <i />
                        <i />
                    </span>

                    <span className={cn(`${BLOCK_NAME}__title`)}>{project.title}</span>

                    {project.url && (
                        <a
                            className={cn(`${BLOCK_NAME}__ext`)}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Открыть ↗
                        </a>
                    )}

                    <button
                        className={cn(`${BLOCK_NAME}__close`)}
                        onClick={onClose}
                        aria-label="Закрыть"
                    >
                        ×
                    </button>
                </div>

                <div className={cn(`${BLOCK_NAME}__body`)}>
                    {project.url && (
                        <iframe
                            src={project.url}
                            title={`Превью ${project.title}`}
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        />
                    )}
                </div>

                <div className={cn(`${BLOCK_NAME}__foot`)}>
                    // Если превью не загрузилось — сайт запрещает встраивание. Откройте в новой
                    вкладке.
                </div>
            </div>
        </div>
    );
};
