import { EProjectType } from '@/constants';

export const BADGE_LABEL: Record<EProjectType, string> = {
    [EProjectType.Commercial]: 'Коммерческий',
    [EProjectType.Pet]: 'Пет-проект',
};
