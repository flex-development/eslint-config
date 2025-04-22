/**
 * @file Bases - global
 * @module eslint-config/bases/global
 */

import eslint from '@eslint/js'

/**
 * Global base config.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    ignores: [
      '**/.yarn/',
      '**/CHANGELOG.md',
      '**/LICENSE.md',
      '**/RELEASE_NOTES.md',
      '**/__tests__/reports/',
      '**/coverage/',
      '**/dist/'
    ]
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: { ecmaFeatures: { impliedStrict: true } },
      sourceType: 'module'
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
      reportUnusedInlineConfigs: 'error'
    }
  },
  eslint.configs.recommended
]
