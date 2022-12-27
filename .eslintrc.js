module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
      settings: {
        "import/resolver": {
          node: {
            paths: ["."],
          },
        },
      },

      extends: [
        "plugin:@angular-eslint/recommended",
        "airbnb-typescript/base",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
      ],
      rules: {
        "import/no-extraneous-dependencies": 0,
        "no-empty-function": ["error", { allow: ["constructors"] }],
        "@angular-eslint/no-empty-lifecycle-method": "error",
        "import/named": "off",
        "no-unused-expressions": "off",
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
            printWidth: 140,
          },
        ],
      },
    },

    {
      files: ["*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {},
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"],
    },
  ],
};
