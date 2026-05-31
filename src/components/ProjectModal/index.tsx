'use client';

import cls from 'classnames/bind';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';

import { EEmbedStatus } from './constants';
import type { TProps } from './types';

const BLOCK_NAME = 'ProjectModal';
const cn = cls.bind(styles);

export const ProjectModal = ({ project, onClose }: TProps) => {
    const t = useTranslations('project-modal');
    const isOpen = project !== null;
    const [embedStatus, setEmbedStatus] = useState<EEmbedStatus>(EEmbedStatus.Checking);

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

    useEffect(() => {
        if (!project?.url) return;

        setEmbedStatus(EEmbedStatus.Checking);

        const controller = new AbortController();

        fetch(`/api/check-embed?url=${encodeURIComponent(project.url)}`, {
            signal: controller.signal,
        })
            .then((r) => r.json())
            .then(({ embeddable }: { embeddable: boolean }) =>
                setEmbedStatus(embeddable ? EEmbedStatus.Ok : EEmbedStatus.Blocked)
            )
            .catch((err: unknown) => {
                if ((err as Error).name !== 'AbortError') setEmbedStatus(EEmbedStatus.Ok);
            });

        return () => controller.abort();
    }, [project?.url]);

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
                            {t('open')}
                        </a>
                    )}

                    <button
                        className={cn(`${BLOCK_NAME}__close`)}
                        onClick={onClose}
                        aria-label={t('close')}
                    >
                        ×
                    </button>
                </div>

                <div className={cn(`${BLOCK_NAME}__body`)}>
                    {embedStatus === 'ok' && project.url && (
                        <iframe
                            src={project.url}
                            title={t('iframe-title', { title: project.title })}
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        />
                    )}

                    {embedStatus !== 'ok' && (
                        <div className={cn(`${BLOCK_NAME}__fallback`)}>
                            {embedStatus === 'checking' ? (
                                <span className={cn(`${BLOCK_NAME}__fallback-text`)}>
                                    {t('checking')}
                                </span>
                            ) : (
                                <>
                                    <span className={cn(`${BLOCK_NAME}__fallback-text`)}>
                                        {t('blocked-hint')}
                                    </span>
                                    {project.url && (
                                        <a
                                            className={cn(`${BLOCK_NAME}__fallback-cta`)}
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {t('open')}
                                        </a>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </div>

                <div className={cn(`${BLOCK_NAME}__foot`)}>{t('footer-hint')}</div>
            </div>
        </div>
    );
};
