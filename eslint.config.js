// @ts-check

import typescript from '@surely-vue/eslint-config/typescript'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...typescript,
  {
    ignores: ['apps/**', 'packages/**', 'packages-*/**'],
  },
]
