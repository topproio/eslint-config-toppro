# eslint-config-toppro

[![npm](https://img.shields.io/badge/license-MIT-yellowgreen.svg)]()
[![npm](https://img.shields.io/badge/node-%3E%3D8-blue.svg)]()
[![npm](https://img.shields.io/badge/npm-v6.4.1-yellow.svg)]()

It is a tool for standardizing javascript writing.

## Usage

Current eslint configurations contains rules about best-practices, ES6 and Node.
First install to your project root directory.

```
npm i -D eslint-config-toppro
```

Then add it in the .eslintrc file.

```
module.exports = {
    ...
    extends: ['toppro']
}
```

If you want to apply it to webpack compilation process, it is an example below.(Learn from vue-cli)

First we have installed the dependencies.

```
npm i -D babel-eslint eslint eslint-config-toppro eslint-friendly-formatter eslint-loader
```

And modify the webpack configuration.

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

Or you want to use it for Gulp task.

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

