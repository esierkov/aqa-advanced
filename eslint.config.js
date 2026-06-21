import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: {
        console: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
      },
    },
  },

  js.configs.recommended,

  {
    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      "prettier/prettier": "error",
    },
  },

  prettierConfig,
];
