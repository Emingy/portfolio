import cls from 'classnames/bind';
import React from 'react';

import styles from './index.module.scss';

import type { TProps } from './types';

const BLOCK_NAME = 'Card';
const cn = cls.bind(styles);

export const Card = ({ children, className }: TProps) => {
    return <article className={cn(BLOCK_NAME, className)}>{children}</article>;
};
