import type { TProject } from '@/types/site';

export type TProps = {
    project: TProject | null;
    onClose: () => void;
};
