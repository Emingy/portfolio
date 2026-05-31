import { EProjectType } from '@/constants';
import type { TSiteConfig } from '@/types/site';

export const siteConfig: TSiteConfig = {
    personal: {
        name: 'Александр Потапов',
        brand: 'A.POTAPOV',
        position: 'Frontend Developer',
        city: 'Москва',
        avatar: undefined,
        heroPhrases: [
            'масштабируемые интерфейсы на React.',
            'микрофронтенды с Module Federation.',
            'UI-библиотеки с покрытием до e2e.',
            'продукты от B2B-платформ до маркетплейсов.',
        ],
        hobbies: [
            'Микроконтроллеры / DIY',
            '3D-печать',
            '3D-моделирование',
            'AI-агенты',
            'Хоумлаб / серверы',
            'Сноубординг',
        ],
        about: {
            paragraphs: [
                'Разрабатываю продуктовый фронтенд — от корпоративных B2B-платформ до высоконагруженных маркетплейсов. Строю интерфейсы на <cyan>React и TypeScript</cyan> с акцентом на архитектуру и качество кода.',
                'Работаю с микрофронтенд-архитектурой, дизайн-системами и <cyan>e2e-тестированием</cyan>. Люблю задачи на стыке сложной логики и хорошего UX.',
                'Открыт к новым проектам.',
            ],
        },
    },

    contacts: {
        lead: 'Открыт к новым проектам',
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
            role: 'Senior frontend developer',
            startDate: '2023-08',
            location: 'Москва',
            description:
                'Разрабатываю платформу поставщиков на микрофронтенд-архитектуре (Module Federation). Создал инструмент автогенерации testid-манифеста для e2e-тестов, веду технические инициативы по качеству кодовой базы.',
        },
        {
            id: 'ott',
            company: 'OneTwoTrip',
            companyUrl: 'https://www.onetwotrip.com/',
            role: 'Ведущий frontend-разработчик',
            startDate: '2023-08',
            endDate: '2025-10',
            location: 'Москва',
            description:
                'Вёл разработку B2B-платформы для корпоративных поездок: бронирование, документооборот, система ролей и согласования. Поднял тестовое покрытие до 95%, ускорил загрузку на 30% и автоматизировал деплой white-label версий через CI/CD.',
        },
        {
            id: 'ingo-bank',
            company: 'ИнгоБанк (Ингосстрах банк)',
            companyUrl: 'https://ingobank.ru/',
            role: 'Frontend Developer',
            startDate: '2022-04',
            endDate: '2023-05',
            location: 'Москва',
            description:
                'Разрабатывал frontend платформы для сбора и анализа логов. Реализовал виртуальный DOM для рендеринга миллиона строк, Canvas-график с масштабированием и конструктор pipeline на бесконечной гексагональной карте с алгоритмом поиска путей.',
        },
        {
            id: 'iptp',
            company: 'IPTP Networks',
            companyUrl: 'https://www.iptp.net',
            role: 'JS Developer',
            startDate: '2021-06',
            endDate: '2022-08',
            location: 'Москва',
            description:
                'Разрабатывал корпоративный мессенджер с интеграцией в CRM. Внедрил self-hosted сервис аудио/видео-звонков, сократил время загрузки на 20% и настроил CI/CD-пайплайны в GitLab.',
        },
    ],

    projects: [
        {
            id: 'wb',
            title: 'WB Partners',
            type: EProjectType.Commercial,
            description:
                'Личный кабинет поставщика на маркетплейсе Wildberries: управление товарами, заказами и аналитикой продаж.',
            tags: ['B2B', 'Marketplace', 'Dashboard'],
            url: 'https://seller.wildberries.ru/about-portal/ru/ru',
        },
        {
            id: 'ott-b2b',
            title: 'OneTwoTrip B2B',
            type: EProjectType.Commercial,
            description:
                'Бронирование проживания и билетов, аналитика отчётов и планирование поездок в едином личном кабинете для корпоративных клиентов.',
            tags: ['B2B', 'Travel', 'Dashboard'],
            url: 'https://b2b.onetwotrip.com/',
        },
        {
            id: 'ott-bus',
            title: 'OneTwoTrip Bus',
            type: EProjectType.Commercial,
            description: 'Сервис поиска и покупки билетов на междугородние автобусы.',
            tags: ['B2C', 'Travel', 'Marketplace'],
            url: 'https://www.onetwotrip.com/ru/bus/',
        },
        {
            id: 'log-viewer',
            title: 'Log Viewer',
            type: EProjectType.Commercial,
            description:
                'Внутренний инструмент для сбора и анализа логов. Таблица с рендерингом миллиона строк, Canvas-график с масштабированием и конструктор pipeline на гексагональной карте.',
            tags: ['Internal Tool', 'Security', 'Data Viz'],
        },
        {
            id: 'xm-messenger',
            title: 'Cross Messenger (XM)',
            type: EProjectType.Commercial,
            description:
                'Кроссплатформенный мессенджер с интеграцией CRM от компании IPTP Networks.',
            tags: ['Cross-platform', 'B2B', 'CRM'],
            url: 'https://www.iptp.net/office-solutions/cross-messenger/',
        },
        {
            id: 'emingy-core',
            title: '@emingy/core',
            type: EProjectType.Pet,
            description:
                'React UI-библиотека с TypeScript, Storybook-документацией и комплексным покрытием тестами: unit, snapshot и визуальная регрессия через Playwright.',
            tags: ['Open Source', 'npm', 'UI Library'],
            url: 'https://emingy.github.io/core/',
        },
        {
            id: 'emingy-configs',
            title: '@emingy/configs',
            type: EProjectType.Pet,
            description:
                'Пакет общих конфигураций для единого code style и форматирования. Готовые пресеты для ESLint, Prettier, Stylelint и Commitlint.',
            tags: ['Open Source', 'npm', 'DX'],
            url: 'https://github.com/Emingy/configs',
        },
        {
            id: 'portfolio',
            title: 'Portfolio',
            type: EProjectType.Pet,
            description:
                'Сайт, который вы сейчас смотрите. Next.js 16 + React 19 + TypeScript, SCSS-модули, next-intl (ru/en), кастомные хуки и анимации.',
            tags: ['Open Source', 'Next.js', 'Intl'],
            url: 'https://github.com/Emingy/portfolio',
        },
    ],
};
