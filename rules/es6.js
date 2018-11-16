'use strict';

module.exports = {
    env: {
        es6: true,
    },

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },

    rules: {
        'arrow-body-style': [0, 'always', {
            requireReturnForObjectLiteral: false,
        }],
        'arrow-parens': [0, 'as-needed', {
            requireForBlockBody: true,
        }],
        'arrow-spacing': [2, {before: true, after: true}],
        'constructor-super': 2,
        'generator-star-spacing': [2, {before: false, after: true}],
        'no-class-assign': 2,
        'no-confusing-arrow': [2, {
            allowParens: true,
        }],
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 0,
        'no-new-symbol': 2,
        'no-restricted-imports': 0,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': [2, {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],
        'no-var': 2,
        'object-shorthand': [0, 'always', {
            ignoreConstructors: false,
            avoidQuotes: true,
        }],
        'prefer-arrow-callback': [0, {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],
        'prefer-const': [2, {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        }],
        'prefer-destructuring': [1, {
            array: true,
            object: true,
        }, {
            enforceForRenamedProperties: false,
        }],
        'prefer-numeric-literals': 2,
        'prefer-reflect': 0,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 0,
        'require-yield': 0,
        'rest-spread-spacing': [2, 'never'],
        'sort-imports': [0, {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],
        'symbol-description': 2,
        'template-curly-spacing': 2,
        'yield-star-spacing': [2, 'after'],
    }
};
