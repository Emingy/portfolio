import { BaseStylelintConfig } from '@emingy/configs';

export default {
    ...BaseStylelintConfig,
    rules: {
        ...BaseStylelintConfig.rules,
        // BEM with single-underscore modifier: Block__element_modifier
        'selector-class-pattern': [
            '^[A-Z][A-Za-z0-9]*(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*)?(?:_[a-z][a-z0-9]*(?:-[a-z0-9]+)*)?$',
            {},
        ],
        'declaration-block-single-line-max-declarations': null,
        // false positive: & inside @mixin is valid, it expands at @include call site
        'nesting-selector-no-missing-scoping-root': null,
    },
};
