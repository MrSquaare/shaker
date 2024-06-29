module.exports = {
  extends: [
    "../../.eslintrc.js",
    "plugin:astro/recommended",
    "plugin:tailwindcss/recommended",
  ],
  root: true,
  env: {
    browser: true,
  },
  rules: {
    "tailwindcss/no-custom-classname": ["off"],
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: ["src/angular/**/*.{ts,html}"],
      extends: ["plugin:@angular-eslint/recommended"],
    },
    {
      files: ["src/react/**/*.{js,jsx,ts,tsx}"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        "react/jsx-curly-brace-presence": ["warn", { props: "always" }],
        "react/jsx-sort-props": ["warn"],
        "react/prop-types": ["off"],
      },
    },
    {
      files: ["src/**/*.svelte"],
      extends: ["plugin:svelte/recommended"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
      },
    },
    {
      files: ["src/vue/**/*.{js,ts,vue}"],
      extends: [
        "plugin:vue/vue3-recommended",
        "plugin:prettier-vue/recommended",
      ],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
      },
    },
  ],
};
