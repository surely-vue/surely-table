module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['markdown', 'import'],
  overrides: [
    {
      files: ['*.md', '*.markdown'],
      processor: 'markdown/markdown',
      rules: {
        'no-console': 'off',
      },
    },
  ],
  rules: {
    // 要求使用分号代替 ASI (semi)
    semi: ['error', 'always'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'vue/require-prop-types': 0,
    'vue/no-v-html': 0,
    'import/no-unresolved': [2, { ignore: ['^@surely-vue/table'] }],
    'vue/require-default-prop': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/consistent-type-imports': 'error',
  },
};
