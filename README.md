# @sanity/prettier-config

[![npm stat](https://img.shields.io/npm/dm/@sanity/prettier-config.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@sanity/prettier-config)
[![npm version](https://img.shields.io/npm/v/@sanity/prettier-config.svg?style=flat-square)](https://www.npmjs.com/package/@sanity/prettier-config)

```sh
npm install --save-dev @sanity/prettier-config prettier
```

Then add it to your `package.json` to install it:

```diff
   },
+  "prettier": "@sanity/prettier-config",
   "dependencies": {
```

If you need to add more plugins, or extend the configuration, you'll need to create a `.prettierrc.cjs`, or `prettier.config.cjs`, file instead of using the `prettier` field in `package.json`:

```js
// .prettierrc.cjs or prettier.config.cjs

const preset = require('@sanity/prettier-config')

module.exports = {
  ...preset,
  plugins: [...preset.plugins, 'prettier-plugin-tailwindcss'],
  experimentalTernaries: true,
}
```
