import type { Config } from 'prettier'

/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file. We
 * define those here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */
const overridableDefaults = {
  endOfLine: 'lf',
  tabWidth: 2,
  useTabs: false,
} satisfies Config

const config = {
  ...overridableDefaults,
  printWidth: 100,
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  bracketSpacing: false,
  plugins: ['prettier-plugin-packagejson' as const],
  overrides: [
    {
      files: ['*.json5'],
      options: {
        quoteProps: 'preserve',
        singleQuote: false,
      },
    },
    {
      files: ['*.yml'],
      options: {
        singleQuote: false,
      },
    },
  ],
} satisfies Config

export default config
