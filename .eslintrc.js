module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: ["@typescript-eslint"],
  globals: {
    $nuxt: true
  },
  // add your custom rules here
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never"
      }
    ],
    semi: "off",
    quotes: [2, "single", { avoidEscape: false }],
    "@typescript-eslint/semi": ["error"],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "linebreak-style": 0,
  }
};
