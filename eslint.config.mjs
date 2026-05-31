import { BaseEslintConfig } from '@emingy/configs';

export default [
    ...BaseEslintConfig,
    {
        ignores: ['node_modules', '.next', '.husky'],
    },
];
