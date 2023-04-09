module.exports = {
    root: true,
    env : {
        browser: true,
        node   : true,
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'react-app',
        'react-app/jest',
        'plugin:react-hooks/recommended',
        'plugin:json/recommended',
    ],
    rules: {
        indent                                 : ['error', 4],
        quotes                                 : ['error', 'single'],
        semi                                   : 'error',
        'eol-last'                             : ['error', 'always'],
        'no-console'                           : process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
        'no-debugger'                          : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'padded-blocks'                        : ['error', 'never'],
        'linebreak-style'                      : ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'lines-between-class-members'          : ['error', 'always', { exceptAfterSingleLine: true }],
        'class-methods-use-this'               : 'off',
        'arrow-parens'                         : 'off',
        'no-underscore-dangle'                 : 'off',
        'space-in-parens'                      : 'off',
        'no-prototype-builtins'                : 'off',
        'import/no-unresolved'                 : 'off',
        'import/extensions'                    : 'off',
        'no-multiple-empty-lines'              : 'off',
        'require-jsdoc'                        : 'off',
        'import/no-named-as-default'           : 'off',
        'import/no-extraneous-dependencies'    : 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/jsx-max-props-per-line'         : ['error', { 'maximum': 1, 'when': 'always' }],
        'react/jsx-closing-bracket-location'   : 'error',

        'max-len': [
            'error',
            {
                code: 256,
            },
        ],

        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: true,
                ignoreComments: true,
            },
        ],

        'key-spacing': [
            'error',
            {
                align: 'colon',
            },
        ],

    },
};
