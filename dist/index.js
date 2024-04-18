const overridableDefaults = {
  endOfLine: "lf",
  tabWidth: 2,
  useTabs: !1
}, config = {
  ...overridableDefaults,
  printWidth: 100,
  semi: !1,
  singleQuote: !0,
  quoteProps: "consistent",
  bracketSpacing: !1,
  plugins: ["prettier-plugin-packagejson"],
  overrides: [
    {
      files: ["*.json5"],
      options: {
        quoteProps: "preserve",
        singleQuote: !1
      }
    },
    {
      files: ["*.yml"],
      options: {
        singleQuote: !1
      }
    }
  ]
};
export {
  config as default
};
//# sourceMappingURL=index.js.map
