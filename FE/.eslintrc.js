module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
    jest: true,
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", "d.ts"],
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:import/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react-hooks", "react", "@typescript-eslint", "import", "jest", "prettier"],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["off"],
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-var-requires": 0,
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/jsx-filename-extension": ["error", { extensions: [".ts", ".tsx"] }],
    "linebreak-style": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        json: "never",
        "d.ts": "never",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"], "index", "object", "type"],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        warnOnUnassignedImports: true,
        pathGroupsExcludedImportTypes: [],
      },
    ],
  },
};
