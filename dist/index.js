const overridableDefaults = {
  endOfLine: "lf",
  tabWidth: 2,
  useTabs: !1
}, json5 = {
  files: ["*.json5"],
  options: {
    quoteProps: "preserve",
    singleQuote: !1
  }
}, yaml = {
  files: ["*.yml"],
  options: {
    singleQuote: !1
  }
}, config = {
  ...overridableDefaults,
  printWidth: 100,
  semi: !1,
  singleQuote: !0,
  quoteProps: "consistent",
  bracketSpacing: !1,
  plugins: ["prettier-plugin-packagejson"],
  overrides: [json5, yaml]
};
export {
  config as default
};
//# sourceMappingURL=index.js.map
