export type TSiteConfig = {
    personal: {
        name: string;
        brand: string;
        position: string;
        city: string;
        avatar?: string;
        heroPhrases: string[];
        hobbies: string[];
        about: {
            title: string;
            paragraphs: string[];
        };
    };

    contacts: {
        lead: string;
        cvUrl?: string;
        links: { label: string; href: string }[];
    };

    skills: {
        category: string;
        title: string;
    }[];

    experience: TExperience[];

    projects: TProject[];
};

import { EProjectType } from '@/constants';

export type TProject = {
    id: string;
    title: string;
    type: EProjectType;
    description: string;
    tags: string[];
    image?: string;
    url?: string;
};

export type TExperience = {
    id: string;
    company: string;
    companyUrl?: string;
    role: string;
    startDate: string;
    endDate?: string;
    location: string;
    description: string;
};
