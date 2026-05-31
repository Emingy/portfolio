'use client';

import cls from 'classnames/bind';
import React, { useState } from 'react';

import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';
import { siteConfig } from '@/content/site';
import type { TProject } from '@/types/site';

import styles from './index.module.scss';

const BLOCK_NAME = 'Projects';
const cn = cls.bind(styles);

export const Projects = () => {
    const [activeProject, setActiveProject] = useState<TProject | null>(null);

    const handleClose = () => setActiveProject(null);

    return (
        <>
            <Section id="projects" num="03" title="Проекты">
                <div className={cn(BLOCK_NAME)}>
                    {siteConfig.projects.map((project, i) => (
                        <Reveal key={project.id} delay={i * 60}>
                            <ProjectCard project={project} index={i} onOpen={setActiveProject} />
                        </Reveal>
                    ))}
                </div>
            </Section>

            <ProjectModal project={activeProject} onClose={handleClose} />
        </>
    );
};
