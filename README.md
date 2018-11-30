# eslint-config-toppro

It is a tool for standardizing javascript writing.

## Usage

Current eslint configurations contains rules about best-practices, es6 and some node.
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


