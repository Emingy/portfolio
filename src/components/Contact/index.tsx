import cls from 'classnames/bind';
import { getLocale, getTranslations } from 'next-intl/server';
import React from 'react';

import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';
import { getSiteConfig } from '@/content/site';
import { asLocale } from '@/intl/routing';

import styles from './index.module.scss';

const BLOCK_NAME = 'Contact';
const cn = cls.bind(styles);

export const Contact = async () => {
    const locale = asLocale(await getLocale());
    const t = await getTranslations('contact');
    const { contacts } = getSiteConfig(locale);

    return (
        <Section id="contacts" num="05" title={t('section-title')}>
            <Reveal>
                <div className={cn(BLOCK_NAME)}>
                    <p className={cn(`${BLOCK_NAME}__lead`)}>{contacts.lead}</p>

                    <div className={cn(`${BLOCK_NAME}__links`)}>
                        {contacts.links.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                target={href.startsWith('mailto:') ? undefined : '_blank'}
                                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                            >
                                {label}
                            </a>
                        ))}

                        {contacts.cvUrl && (
                            <a href={contacts.cvUrl} download className={cn(`${BLOCK_NAME}__cv`)}>
                                {t('download-cv')}
                            </a>
                        )}
                    </div>
                </div>
            </Reveal>
        </Section>
    );
};
