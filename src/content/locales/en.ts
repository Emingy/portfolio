import { EProjectType } from '@/constants';
import type { TSiteConfig } from '@/types/site';

export const siteConfig: TSiteConfig = {
    personal: {
        name: 'Alexander Potapov',
        brand: 'A.POTAPOV',
        position: 'Frontend Developer',
        city: 'Moscow',
        avatar: undefined,
        heroPhrases: [
            'scalable interfaces with React.',
            'micro-frontends with Module Federation.',
            'UI libraries with full e2e coverage.',
            'products from B2B platforms to marketplaces.',
        ],
        hobbies: [
            'MCU / DIY',
            '3D Printing',
            '3D Modeling',
            'AI Agents',
            'Homelab / Servers',
            'Snowboarding',
        ],
        about: {
            paragraphs: [
                'I build product frontends — from enterprise B2B platforms to high-load marketplaces. I craft interfaces with <cyan>React and TypeScript</cyan>, focusing on architecture and code quality.',
                'I work with micro-frontend architecture, design systems, and <cyan>e2e testing</cyan>. I enjoy challenges at the intersection of complex logic and great UX.',
                'Open to new projects.',
            ],
        },
    },

    contacts: {
        lead: 'Open to new projects',
        cvUrl: '/cv.pdf',
        links: [
            { label: 'Email', href: 'mailto:shuraken.yeah@gmail.com' },
            { label: 'Telegram', href: 'https://t.me/Emingy' },
            { label: 'GitHub', href: 'https://github.com/Emingy' },
            {
                label: 'Headhunter',
                href: 'https://hh.ru/resume/2788c2a0ff081ecd5f0039ed1f524e59674b75',
            },
        ],
    },

    skills: [
        { category: 'CORE', title: 'JavaScript' },
        { category: 'CORE', title: 'TypeScript' },
        { category: 'CORE', title: 'Rust' },
        { category: 'CORE', title: 'SCSS' },
        { category: 'FRAMEWORK', title: 'React' },
        { category: 'FRAMEWORK', title: 'Next.js' },
        { category: 'STATE', title: 'TanStack Query' },
        { category: 'STATE', title: 'Zustand' },
        { category: 'STATE', title: 'Redux / RTK' },
        { category: 'TOOLS', title: 'Webpack / Rsbuild' },
        { category: 'TOOLS', title: 'CI/CD' },
        { category: 'TOOLS', title: 'Canvas API' },
        { category: 'TOOLS', title: 'Storybook' },
        { category: 'PLATFORM', title: 'PWA' },
        { category: 'PLATFORM', title: 'Webview' },
        { category: 'SOFTWARE', title: 'Docker' },
        { category: 'SOFTWARE', title: 'Nginx' },
        { category: 'SOFTWARE', title: 'Figma' },
        { category: 'TESTING', title: 'Jest / Rstest' },
        { category: 'TESTING', title: 'Playwright' },
        { category: 'PRACTICE', title: 'a11y' },
        { category: 'PRACTICE', title: 'Intl' },
        { category: 'PRACTICE', title: 'RTL' },
        { category: 'PRACTICE', title: 'Module Federation' },
    ],

    experience: [
        {
            id: 'wb',
            company: 'Wildberries',
            companyUrl: 'https://rwb.ru/',
            role: 'Senior Frontend Developer',
            startDate: '2023-08',
            location: 'Moscow',
            description:
                'Building a vendor platform on micro-frontend architecture (Module Federation). Created an auto-generation tool for testid manifests used in e2e tests, driving technical quality initiatives.',
        },
        {
            id: 'ott',
            company: 'OneTwoTrip',
            companyUrl: 'https://www.onetwotrip.com/',
            role: 'Lead Frontend Developer',
            startDate: '2023-08',
            endDate: '2025-10',
            location: 'Moscow',
            description:
                'Led development of a B2B platform for corporate travel: booking, document management, roles and approval workflows. Raised test coverage to 95%, improved load time by 30%, and automated white-label deployments via CI/CD.',
        },
        {
            id: 'ingo-bank',
            company: 'IngoBank (Ingosstrakh Bank)',
            companyUrl: 'https://ingobank.ru/',
            role: 'Frontend Developer',
            startDate: '2022-04',
            endDate: '2023-05',
            location: 'Moscow',
            description:
                'Developed the frontend for a log collection and analysis platform. Implemented a virtual DOM for rendering one million rows, a Canvas chart with zoom, and a pipeline builder on an infinite hexagonal map with a pathfinding algorithm.',
        },
        {
            id: 'iptp',
            company: 'IPTP Networks',
            companyUrl: 'https://www.iptp.net',
            role: 'JS Developer',
            startDate: '2021-06',
            endDate: '2022-08',
            location: 'Moscow',
            description:
                'Built a corporate messenger with CRM integration. Deployed a self-hosted audio/video call service, reduced load time by 20%, and set up CI/CD pipelines in GitLab.',
        },
    ],

    projects: [
        {
            id: 'wb',
            title: 'WB Partners',
            type: EProjectType.Commercial,
            description:
                'Wildberries vendor dashboard: manage products, orders, and sales analytics.',
            tags: ['B2B', 'Marketplace', 'Dashboard'],
            url: 'https://seller.wildberries.ru/about-portal/ru/ru',
        },
        {
            id: 'ott-b2b',
            title: 'OneTwoTrip B2B',
            type: EProjectType.Commercial,
            description:
                'Hotel and ticket booking, expense analytics, and trip planning in a unified corporate account.',
            tags: ['B2B', 'Travel', 'Dashboard'],
            url: 'https://b2b.onetwotrip.com/',
        },
        {
            id: 'ott-bus',
            title: 'OneTwoTrip Bus',
            type: EProjectType.Commercial,
            description: 'Service for searching and purchasing intercity bus tickets.',
            tags: ['Travel', 'B2C', 'Marketplace'],
            url: 'https://www.onetwotrip.com/ru/bus/',
        },
        {
            id: 'log-viewer',
            title: 'Log Viewer',
            type: EProjectType.Commercial,
            description:
                'Internal tool for log collection and analysis. Table with one million row rendering, Canvas chart with zoom, and a pipeline builder on a hexagonal grid.',
            tags: ['Internal Tool', 'Security', 'Data Viz'],
        },
        {
            id: 'xm-messenger',
            title: 'Cross Messenger (XM)',
            type: EProjectType.Commercial,
            description: 'Cross-platform messenger with CRM integration by IPTP Networks.',
            tags: ['Cross-platform', 'B2B', 'CRM'],
            url: 'https://www.iptp.net/office-solutions/cross-messenger/',
        },
        {
            id: 'emingy-core',
            title: '@emingy/core',
            type: EProjectType.Pet,
            description:
                'React UI library with TypeScript, Storybook documentation, and comprehensive test coverage: unit, snapshot, and visual regression via Playwright.',
            tags: ['Open Source', 'npm', 'UI Library'],
            url: 'https://emingy.github.io/core/',
        },
        {
            id: 'emingy-configs',
            title: '@emingy/configs',
            type: EProjectType.Pet,
            description:
                'Shared configuration package for unified code style and formatting. Ready-made presets for ESLint, Prettier, Stylelint, and Commitlint.',
            tags: ['Open Source', 'npm', 'DX'],
            url: 'https://github.com/Emingy/configs',
        },
        {
            id: 'portfolio',
            title: 'Portfolio',
            type: EProjectType.Pet,
            description:
                'The site you are looking at right now. Next.js 16 + React 19 + TypeScript, SCSS modules, next-intl (ru/en), custom hooks and animations.',
            tags: ['Next.js', 'Pet project', 'Open Source'],
            url: 'https://github.com/Emingy/portfolio',
        },
    ],
};
