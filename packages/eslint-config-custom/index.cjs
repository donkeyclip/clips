module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-typescript"],
    },
    parser: "@babel/eslint-parser",
  },
  extends: [
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["sonarjs", "@typescript-eslint", "turbo"],
  overrides: [
    {
      files: [
        "*.styles.ts",
        "*.styles.tsx",
        "stitches.config.ts",
        "**.spec.tsx",
      ],
      rules: {
        "sonarjs/no-duplicate-string": "off",
      },
    },
    {
      files: ["**/__tests__/**/*.ts", "**/__tests__/**/*.js"],
      rules: {
        "sonarjs/no-duplicate-string": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/ban-ts-comment": "off",
      },
    },
  ],
  rules: {
    "sonarjs/cognitive-complexity": ["error", 20],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
  },
};
