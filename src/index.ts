import type {Config} from 'prettier'

/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file. We
 * define those here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */
const overridableDefaults = {
  endOfLine: 'lf',
  tabWidth: 2 as const,
  useTabs: false,
} satisfies Config

const json5 = {
  files: ['*.json5'] as const,
  options: {
    quoteProps: 'preserve',
    singleQuote: false,
  },
} satisfies NonNullable<Config['overrides']>[number]

const yaml = {
  files: ['*.yml'] as const,
  options: {
    singleQuote: false,
  },
} satisfies NonNullable<Config['overrides']>[number]

const config = {
  ...overridableDefaults,
  printWidth: 100 as const,
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  bracketSpacing: false,
  plugins: ['prettier-plugin-packagejson'] as const,
  overrides: [json5, yaml] as [typeof json5, typeof yaml],
} satisfies Config

export default config
