/**
 * @file Bases - yaml
 * @module eslint-config/bases/yaml
 */

import plugin from '../utils/plugin.mjs'

/**
 * YAML configuration.
 *
 * @type {import('eslint').Linter.Config[]}
 * @const yaml
 */
export default [
  {
    files: ['**/*.+(yaml|yml)'],
    languageOptions: {
      parser: await import('yaml-eslint-parser')
    },
    plugins: {
      yml: await plugin('eslint-plugin-yml')
    },
    rules: {
      'spaced-comment': 0,
      'yml/block-mapping': 2,
      'yml/block-mapping-question-indicator-newline': [2, 'never'],
      'yml/block-sequence': 2,
      'yml/block-sequence-hyphen-indicator-newline': [2, 'never'],
      'yml/flow-mapping-curly-newline': 2,
      'yml/flow-mapping-curly-spacing': [
        2,
        'always',
        {
          arraysInObjects: false,
          objectsInObjects: false
        }
      ],
      'yml/flow-sequence-bracket-newline': 2,
      'yml/flow-sequence-bracket-spacing': 2,
      'yml/indent': [2, 2],
      'yml/key-name-casing': [
        2,
        {
          SCREAMING_SNAKE_CASE: true,
          camelCase: false,
          'kebab-case': true,
          snake_case: true
        }
      ],
      'yml/key-spacing': 2,
      'yml/no-empty-document': 0,
      'yml/no-empty-key': 2,
      'yml/no-empty-mapping-value': 0,
      'yml/no-empty-sequence-entry': 2,
      'yml/no-irregular-whitespace': 2,
      'yml/no-multiple-empty-lines': [2, { max: 2, maxBOF: 0, maxEOF: 1 }],
      'yml/no-tab-indent': 2,
      'yml/plain-scalar': [2, 'always'],
      'yml/quotes': [2, { avoidEscape: true, prefer: 'single' }],
      'yml/require-string-key': 2,
      'yml/sort-keys': [
        2,
        {
          order: { caseSensitive: true, type: 'asc' },
          pathPattern: '^$'
        }
      ],
      'yml/sort-sequence-values': [
        2,
        {
          order: { caseSensitive: true, type: 'asc' },
          pathPattern: '^$'
        }
      ],
      'yml/spaced-comment': 2
    }
  },
  {
    files: ['.github/ISSUE_TEMPLATE/*.yml'],
    rules: {
      'yml/sort-keys': [
        2,
        {
          order: [
            'name',
            'description',
            'title',
            'assignees',
            'labels',
            'body'
          ],
          pathPattern: '^$'
        }
      ]
    }
  },
  {
    files: ['.github/ISSUE_TEMPLATE/config.yml'],
    rules: {
      'yml/sort-keys': [
        2,
        {
          order: { caseSensitive: true, type: 'asc' },
          pathPattern: '^$'
        }
      ]
    }
  },
  {
    files: ['.github/dependabot.yml'],
    rules: {
      'yml/sort-keys': [
        2,
        {
          order: ['version', 'registries', 'updates'],
          pathPattern: '^$'
        }
      ]
    }
  },
  {
    files: ['.github/workflows/*.yml'],
    rules: {
      'yml/sort-keys': [
        2,
        {
          order: ['name', 'on', 'permissions', 'env', 'concurrency', 'jobs'],
          pathPattern: '^$'
        }
      ]
    }
  },
  {
    files: ['.github/workflows/*.yml', '.yarnrc.yml', 'docker*.yml'],
    rules: {
      'yml/key-name-casing': 0
    }
  },
  {
    files: ['action.yml'],
    rules: {
      'yml/sort-keys': [
        2,
        {
          order: [
            'name',
            'author',
            'description',
            'inputs',
            'outputs',
            'runs',
            'branding'
          ],
          pathPattern: '^$'
        }
      ]
    }
  },
  {
    files: ['docker*.yml', '**/*.md/*.+(yaml|yml)'],
    rules: {
      'yml/sort-keys': 0
    }
  }
]
