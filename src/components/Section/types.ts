import type { ReactNode } from 'react';

export type TProps = {
    id?: string;
    num: string;
    title: string;
    children: ReactNode;
    badge?: string;
    className?: string;
};
