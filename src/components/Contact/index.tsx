import cls from 'classnames/bind';
import React from 'react';

import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';
import { siteConfig } from '@/content/site';

import styles from './index.module.scss';

const BLOCK_NAME = 'Contact';
const cn = cls.bind(styles);

export const Contact = () => {
    const { contacts } = siteConfig;

    return (
        <Section id="contacts" num="05" title="Контакты">
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
                                Скачать резюме ↓
                            </a>
                        )}
                    </div>
                </div>
            </Reveal>
        </Section>
    );
};
