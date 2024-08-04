// @ts-check

const { defineConfig } = require("eslint-define-config");

const config = defineConfig({
  // ==============================================
  // | Global: TypeScript + JavaScript + Jest     |
  // ==============================================
  plugins: ["unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },

  root: true,
  env: {
    es2023: true,
    browser: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: ["./tsconfig.json"],
      },
    },
    tailwindcss: {
      callees: ["classNames", "clsx", "cls", "cva", "cn"],
      config: "./tailwind.config.ts",
    },
  },
  extends: [
    "plugin:tailwindcss/recommended",
    "plugin:i18n-json/recommended",
    "next/core-web-vitals",
    "eslint:recommended",
    "prettier",
  ],

  overrides: [
    // ============================================
    // | Override: TypeScript                     |
    // ============================================

    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts", "*.d.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        ecmaVersion: "latest",
        sourceType: "module",
      },
      plugins: ["@tanstack/query"],
      extends: [
        "plugin:@tanstack/eslint-plugin-query/recommended",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:@typescript-eslint/strict-type-checked",
      ],
      rules: {
        // !! We are incrementally moving towards full and strict type safety.
        // !! Accordingly, disabled rules will be eliminated in the future.
        /**
         * @see https://github.com/godaddy/eslint-plugin-i18n-json#readme
         */
        "i18n-json/valid-message-syntax": [
          2,
          {
            syntax: "icu",
          },
        ],
        "i18n-json/valid-json": 2,
        "i18n-json/sorted-keys": [
          2,
          {
            order: "asc",
            indentSpaces: 2,
          },
        ],
        "i18n-json/identical-keys": 0,
        /**
         * @see https://typescript-eslint.io
         */
        "@typescript-eslint/consistent-type-imports": [
          "off",
          // "warn",
          // {
          //   prefer: "type-imports",
          //   fixStyle: "inline-type-imports" // "separate-type-imports"
          // }
        ],
        "@typescript-eslint/no-unused-vars": [
          //"off",
          "warn",
          /* {
            argsIgnorePattern: "^_",
            caughtErrors: "none",
            varsIgnorePattern: "^_",
          }, */
        ],
        "@typescript-eslint/consistent-type-definitions": [
          /* "error", "type" */
          "off",
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unsafe-enum-comparison": "off",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/non-nullable-type-assertion-style": "off",
        "@tanstack/query/exhaustive-deps": "error",
        "@typescript-eslint/restrict-template-expressions": "off",
        "no-case-declarations": "off",
        "@typescript-eslint/no-unnecessary-type-arguments": "off",
        "@typescript-eslint/consistent-indexed-object-style": "off",
        "no-constant-condition": "off",
        "@next/next/no-html-link-for-pages": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/no-meaningless-void-operator": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/prefer-optional-chain": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@tanstack/query/prefer-query-object-syntax": "error",
        "@typescript-eslint/no-redundant-type-constituents": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/require-await": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/display-name": "off",
        "react/no-unescaped-entities": "off",
        "tailwindcss/classnames-order": "off",
        "tailwindcss/enforces-shorthand": "off",
        "tailwindcss/migration-from-tailwind-2": "off",
        "tailwindcss/no-custom-classname": "off",
        "import/order": [
          "off",
          // "error",
          // {
          //   "newlines-between": "always",
          //   groups: [
          //     ["builtin", "external"],
          //     "internal",
          //     ["sibling", "parent"],
          //     "index",
          //     "object",
          //     "type"
          //   ],
          //   alphabetize: {
          //     order: "asc"
          //   }
          // }
        ],
        "sort-imports": [
          "off",
          // "error",
          // {
          //   ignoreDeclarationSort: true
          // }
        ],
      },
    },

    // ============================================
    // | Override: JavaScript                     |
    // ============================================

    {
      files: ["*.js", "*.jsx", "*.mjs", "*.cjs"],
    },

    // ============================================
    // | Override: Jest (JavaScript)              |
    // ============================================

    {
      files: ["**/__tests__/**/*.{ts,tsx}", "**/*.test.{ts,tsx}"],
      env: { "jest/globals": true },
      plugins: ["jest"],
      extends: [
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:jest-extended/all",
        "plugin:jest/style",
        "plugin:jest/all",
      ],
      rules: {
        // !! We are incrementally moving towards full and strict type safety.
        // !! Accordingly, disabled rules will be eliminated in the future.
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "jest/prefer-expect-assertions": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "jest/require-top-level-describe": "off",
      },
    },
  ],
});

module.exports = config;
