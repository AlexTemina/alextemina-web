module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', '@vue/airbnb'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    indent: ['error', 2],
    'max-len': ['error', { code: 100 }],
    'arrow-body-style': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
      env: { browser: true, es6: true, node: true },
      extends: [
        'plugin:vue/essential',
        'plugin:prettier/recommended',
        '@vue/airbnb',
        '@vue/typescript/recommended',
      ],
      parserOptions: {
        ecmaVersion: 2020,
      },
      rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        indent: ['error', 2],
        '@typescript-eslint/explicit-function-return-type': ['error'],
        'max-len': ['error', { code: 100 }],
        'arrow-body-style': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
