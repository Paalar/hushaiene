module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['src', ],
            },
        },
    },
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1, }, ],
        'linebreak-style': ['error', 'unix', ],
        quotes: ['error', 'single', ],
        semi: ['error', 'always', ],
        'default-case': 'error',
        'default-case-last': 'error',
        curly: ['error', 'multi', ],
        'no-shadow': 'error',
        'block-spacing': 'error',
        'comma-dangle': ['error', {
            arrays: 'always',
            objects: 'always',
        }, ],
        'jsx-quotes': ['error', 'prefer-single', ],
        'key-spacing': ['error', { beforeColon: false, }, ],
        'max-len': ['error', { code: 110, ignoreUrls: true, }, ],
        'comma-spacing': ['error', { before: false, after: true, }, ],
        'no-multiple-empty-lines': 'error',
        'no-trailing-spaces': 'error',
        'quote-props': ['error', 'as-needed', ],
        'react/prop-types': 'off',
    },
};
