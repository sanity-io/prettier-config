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

When using `pnpm` you should add this to your `.npmrc` file:

```properties
public-hoist-pattern[]=*prettier*
```

If you need to add more plugins, or extend the configuration, you'll need to create a `prettier.config.mjs`, file instead of using the `prettier` field in `package.json`:

```js
// prettier.config.mjs

import preset from '@sanity/prettier-config'

export default {
  ...preset,
  plugins: [...preset.plugins, 'prettier-plugin-tailwindcss'],
  experimentalTernaries: true,
}
```

## [Format in-browser with our settings](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEBLAtgBwgJxgAhgE9M59gBhaAM1QHMBffanCdfAckxzhhlTg4OAHSiiA9ACpJo-JPwBlNmQjV8ABR58BQgM74AJnGoBDAK4AbGPrAmo+AEYqAboJyoDR+w6L47+AFEDVBhcKihaOmZUCzgAOnwAdThZeSNaKDIYAAsIXTJswSyIfARdMx5CbJMCAwg4XSgOAmrMUig41NTFODgkfGy+TF0kcXE6EOyzBzjIdHFuXn5BBa1lnHEHCwgHcXQTVChxOrBdcUgI+gqa1Gg49AMAYjhg0JwLyNTxUQvdAghXDh3AYTFs4AARYzmKz6AC85FkpSgBgA8tQADKHPqcCzUDgAGkRMFBiQ8OX6ACY-DZoH9CfZ8GZ8gAVUEjZgmCz5elMXQ3XS0Br4cKfMRQX4ED70fDw4CIuIKgFuDyg2KQ0yWaz0-D4biHGCkgzk-AARgADGbqfgJdr8Pl0Kh+qYuXBbbpDnRYgBFMwQeD9GA4MyuxEAR198E0EGG-Q4v1QfwQMAJiIcOBMYAA1rwFJgMx6nZzuYjMBYzBMoOyANpcNY6AC0pfLh0bGczJjocAAVrpoBwALpWm2IpVAjwNfpVxE6uUMnU62ixascSRxHvQACsA6HtJgtvn+Gj-Fp-VnB4P4b9cCjMc4i3yOFcKbn5-dUE9cB9V8LLv384Yf4AdOCIvguMQTvgNarkQ6AWNuJg0pWe7ATqR63JWp4ofOb4fl+-ocr+WFAS+xE6v2PJ2vygr6CK9CiKIcAAB7YHghhQpq1o0PQID4iAaG0sgoAmECEAAO7qMJZTICAnKiSYRC6DxIBpm2OYmOgcCYpkyDOtyynplmOZ5mAHo6UWrogPaqBmb+IBMaQ7gabAnLMoIUDCQIilILpFk4d6EZwMggbBrxPaMQoHr+VeNl6ZekasMM0nxomiC8YGBwWB6VDoPs0mchYSl+XAACCfDuA4ZiRoIWmBd55m8YMsGJNkIQNMZcAKGUISoM4IREEluiKbxzjBgAksiSYKGA7iYDAxXIgoxCxDFFncHkcCJOmmDSfegiuEphwPjAmgdrldW2XmOAPtJxCkLo02oLNSl6rAho5Mg5pmrxPDhqgPAnXQZ0+WlJJktkyAUrxTJwKyDhecDdnoE4ngvOidh0GYHZwAAYrg+zaO+eWVRAIAMAwQA)
