'use strict';

module.exports = {
    extends: [
        './rules/best-practices',
        './rules/node',
        './rules/es6',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'script',
    },
    rules: {},
};
