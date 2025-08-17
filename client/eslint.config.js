// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Ignore build artifacts
  { ignores: ["dist", "node_modules"] },

  // Base JS rules
  js.configs.recommended,

  /// App source (JS + JSX)
{
  files: ["**/*.{js,jsx}"],
  languageOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
    globals: {
      // Browser globals only here
      ...globals.browser,
    },
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

    // ↓ Make unused variables/imports a warning (not an error)
    "no-unused-vars": ["warn", { args: "after-used", argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    "no-unused-expressions": "warn",
  },
},


  // Node-based config files (so ESLint knows about Node globals like __dirname when needed)
  {
    files: [
      "*.config.js",
      "*.config.cjs",
      "vite.config.js",
      "postcss.config.js",
      "eslint.config.js",
    ],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
];
// End of ESLint configuration