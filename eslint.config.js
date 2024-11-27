import js from "@eslint/js";
import masterCssEslint from "@master/eslint-config-css/flat";
import astroParser from "astro-eslint-parser";
import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";
import tseslist from "typescript-eslint";

/** @type { import("eslint").Linter.Config[] } */
export default [
  js.configs.recommended,
  ...tseslist.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  masterCssEslint,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    ignores: ["dist/**", ".astro"],
  },
];
