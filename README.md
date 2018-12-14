# eslint-config-toppro

[![npm](https://img.shields.io/badge/license-MIT-yellowgreen.svg)]()
[![npm](https://img.shields.io/badge/node-%3E%3D8-blue.svg)]()
[![npm](https://img.shields.io/badge/npm-v6.4.1-yellow.svg)]()

[The pluggable linting utility for JavaScript.](https://eslint.org/)

## Installation

```
npm i -D eslint-config-toppro
```

To use it:

```
module.exports = {
    ...
    extends: ['toppro']
}
```

## Webpack usage

Install webpack loader:

```
npm i -D babel-eslint eslint eslint-config-toppro eslint-friendly-formatter eslint-loader
```

To use it:

```
const createLintingRule = () => ({
    test: /\.js$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: true,
    }
})

module.exports = {
    module: {
        rules: [
            createLintingRule(),
        ]
    },
    mode: 'development',
}
```

## Gulp usage

To use it:

```
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
    gulp.src('*.js')
        .pipe(eslint({
            configFile: './.eslintrc.js'
        }))
        .pipe(eslint.format());
});
```

## Wechat Miniprogram Usage

Wechat miniprogram has some global variables, which have been configured.

```
globals: {
    wx: true,
    App: true,
    Page: true,
    getApp: true,
    Component: true
}
```

To use it:

```
module.exports = {
    ...
    extends: ['toppro/weapp']
}
```

## Configuring ESLint

[User-guide/configuring](https://eslint.org/docs/user-guide/configuring)

[Disabling Rules with Inline Comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)

[Specifying Globals](https://eslint.org/docs/user-guide/configuring#specifying-globals)

## Todo

- [X] Base rules: ES6, Node, Style and Variables
- [X] Wechat miniprogram adapter: toppro/weapp
- [ ] Vue adapter
- [ ] React adapter
