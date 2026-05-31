import type { TProject } from '@/types/site';

export type TProps = {
    project: TProject;
    index: number;
    onOpen: (project: TProject) => void;
};
