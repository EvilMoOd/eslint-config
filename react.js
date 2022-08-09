const path = require("path");
module.exports = {
  extends: [
    "./shared/base",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: path.resolve(process.cwd(), "./tsconfig.json"),
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-useless-escape": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-empty-function": "off",
    "import/extensions": "off",
    // "@typescript-eslint/camelcase": "never"
  },
  overrides: [
    {
      files: ["*.tsx", "*.ts"],
      rules: {
        "react/prop-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/camelcase": ["off"],
        "@typescript-eslint/no-empty-interface": [
          "error",
          {
            allowSingleExtends: true,
          },
        ],
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
        "no-console": "off",
      },
    },
  ],
};
