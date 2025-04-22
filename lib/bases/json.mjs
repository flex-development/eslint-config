/**
 * @file Bases - json
 * @module eslint-config/bases/json
 */

import parser from 'jsonc-eslint-parser'
import plugin from '../utils/plugin.mjs'

/**
 * JSON configuration.
 *
 * @see https://github.com/ota-meshi/eslint-plugin-jsonc
 * @see https://github.com/ota-meshi/jsonc-eslint-parser
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    files: ['**/*.+(json|json5|jsonc)'],
    ignores: ['**/tsconfig*temp.json'],
    languageOptions: { parser },
    plugins: {
      jsonc: await plugin('eslint-plugin-jsonc')
    },
    rules: {
      'jsonc/no-bigint-literals': 2,
      'jsonc/no-binary-expression': 2,
      'jsonc/no-binary-numeric-literals': 2,
      'jsonc/no-escape-sequence-in-identifier': 2,
      'jsonc/no-hexadecimal-numeric-literals': 2,
      'jsonc/no-infinity': 2,
      'jsonc/no-multi-str': 2,
      'jsonc/no-nan': 2,
      'jsonc/no-number-props': 2,
      'jsonc/no-numeric-separators': 2,
      'jsonc/no-octal': 0,
      'jsonc/no-octal-escape': 2,
      'jsonc/no-octal-numeric-literals': 2,
      'jsonc/no-parenthesized': 2,
      'jsonc/no-plus-sign': 2,
      'jsonc/no-regexp-literals': 2,
      'jsonc/no-sparse-arrays': 2,
      'jsonc/no-template-literals': 2,
      'jsonc/no-undefined-value': 2,
      'jsonc/no-unicode-codepoint-escapes': 2,
      'jsonc/no-useless-escape': 2,
      'jsonc/sort-array-values': [
        2,
        {
          order: { caseSensitive: true, type: 'asc' },
          pathPattern: '^$'
        }
      ],
      'jsonc/sort-keys': [
        2,
        {
          order: { caseSensitive: true, type: 'asc' },
          pathPattern: '^$'
        }
      ],
      'jsonc/valid-json-number': 2,
      'jsonc/vue-custom-block/no-parsing-error': 2
    }
  },
  {
    files: ['**/*.+(json5|jsonc)', 'tsconfig*.json'],
    rules: {
      'jsonc/no-comments': 0
    }
  },
  {
    files: ['**/package.json'],
    rules: {
      'jsonc/sort-keys': [
        2,
        {
          order: [
            'name',
            'description',
            'version',
            'keywords',
            'license',
            'homepage',
            'repository',
            'bugs',
            'author',
            'contributors',
            'publishConfig',
            'type',
            'files',
            'exports',
            'main',
            'module',
            'types',
            'scripts',
            'dependencies',
            'devDependencies',
            'optionalDependencies',
            'peerDependencies',
            'resolutions',
            'engines',
            'packageManager',
            'readme'
          ],
          pathPattern: '^$'
        }
      ]
    }
  },
  {
    files: ['.vscode/launch.json'],
    rules: {
      'jsonc/sort-keys': 0
    }
  }
]
