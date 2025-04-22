/**
 * @file Bases - markdown
 * @module eslint-config/bases/markdown
 */

import { parser } from 'eslint-mdx'
import plugin from '../utils/plugin.mjs'

/**
 * Markdown configuration.
 *
 * @see https://github.com/mdx-js/eslint-mdx
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    files: ['**/*.{md,mdx}'],
    languageOptions: {
      globals: { React: false },
      parser
    },
    plugins: {
      mdx: await plugin('eslint-plugin-mdx')
    },
    processor: 'mdx/remark',
    rules: {
      'mdx/remark': 1,
      'no-unused-expressions': 2,
      'react/react-in-jsx-scope': 0
    },
    settings: {
      'mdx/code-blocks': true
    }
  }
]
