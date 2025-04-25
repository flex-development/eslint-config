/**
 * @file jsdoc
 * @module eslint-config/jsdoc
 */

import plugin from '../utils/plugin.mjs'

/**
 * JSDoc configuration.
 *
 * @see https://github.com/gajus/eslint-plugin-jsdoc
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    files: ['**/*.+(cjs|cts|js|jsx|mjs|mts|ts|tsx)'],
    plugins: {
      jsdoc: await plugin('eslint-plugin-jsdoc')
    },
    rules: {
      'jsdoc/check-access': 1,
      'jsdoc/check-alignment': 1,
      'jsdoc/check-examples': 0,
      // https://github.com/gajus/eslint-plugin-jsdoc/issues/541
      'jsdoc/check-indentation': 0,
      'jsdoc/check-line-alignment': [
        1,
        'never',
        {
          customSpacings: {
            postDelimiter: 1,
            postHyphen: 1,
            postName: 1,
            postTag: 1,
            postType: 1
          },
          tags: [
            'param',
            'property',
            'return',
            'template',
            'throws',
            'typeParam'
          ],
          wrapIndent: ' '
        }
      ],
      'jsdoc/check-param-names': [
        1,
        {
          allowExtraTrailingParamDocs: false,
          checkDestructured: true,
          checkRestProperty: true,
          disableExtraPropertyReporting: true,
          enableFixer: true
        }
      ],
      'jsdoc/check-property-names': [1, { enableFixer: true }],
      'jsdoc/check-syntax': 1,
      'jsdoc/check-tag-names': [
        1,
        {
          definedTags: [
            'decorator',
            'experimental',
            'maximum',
            'minimum',
            'next',
            'packageManager'
          ],
          jsxTags: false
        }
      ],
      'jsdoc/check-types': [1, { unifyParentAndChildTypeChecks: true }],
      'jsdoc/check-values': 1,
      'jsdoc/empty-tags': 1,
      'jsdoc/implements-on-classes': 1,
      'jsdoc/match-description': 0,
      'jsdoc/match-name': 0,
      'jsdoc/multiline-blocks': 1,
      'jsdoc/no-bad-blocks': [1, { preventAllMultiAsteriskBlocks: true }],
      'jsdoc/no-defaults': 0,
      'jsdoc/no-missing-syntax': 0,
      'jsdoc/no-multi-asterisks': [
        1,
        {
          allowWhitespace: true,
          preventAtEnd: true,
          preventAtMiddleLines: true
        }
      ],
      'jsdoc/no-restricted-syntax': 0,
      'jsdoc/no-types': 0,
      'jsdoc/no-undefined-types': [1, {
        definedTypes: ['never', 'unknown'],
        // https://github.com/gajus/eslint-plugin-jsdoc/issues/1119
        // this rule would be nice to use to check property name changes, but
        // it does not work properly. reporting is disabled for now, but in
        // the future, some eslint-plugin-jsdoc usage may need to be replaced
        // with a docast-based plugin.
        disableReporting: true,
        markVariablesAsUsed: true
      }],
      'jsdoc/require-asterisk-prefix': [1, 'always'],
      'jsdoc/require-description': [
        1,
        {
          checkConstructors: true,
          checkGetters: true,
          checkSetters: true,
          contexts: [
            'ClassDeclaration',
            'MethodDefinition',
            'PropertyDefinition',
            'TSInterfaceDeclaration',
            'TSMethodSignature',
            'VariableDeclaration'
          ],
          descriptionStyle: 'body'
        }
      ],
      'jsdoc/require-description-complete-sentence': 0,
      'jsdoc/require-example': 0,
      'jsdoc/require-file-overview': [
        1,
        {
          tags: {
            file: {
              initialCommentsOnly: true,
              mustExist: true,
              preventDuplicates: true
            },
            module: {
              initialCommentsOnly: true,
              mustExist: true,
              preventDuplicates: true
            }
          }
        }
      ],
      'jsdoc/require-hyphen-before-param-description': 0,
      'jsdoc/require-jsdoc': [
        1,
        {
          checkConstructors: true,
          checkGetters: true,
          checkSetters: true,
          contexts: [
            'PropertyDefinition',
            'TSDeclareFunction:not(TSDeclareFunction + TSDeclareFunction)',
            'TSMethodSignature',
            'FunctionDeclaration:not(TSDeclareFunction + FunctionDeclaration)'
          ],
          enableFixer: true,
          exemptEmptyConstructors: false,
          exemptEmptyFunctions: false,
          require: {
            ArrowFunctionExpression: false,
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true
          }
        }
      ],
      'jsdoc/require-param': [
        1,
        {
          autoIncrementBase: 0,
          checkConstructors: true,
          checkDestructured: true,
          checkDestructuredRoots: true,
          checkGetters: true,
          checkRestProperty: true,
          checkSetters: true,
          enableFixer: true,
          enableRestElementFixer: true,
          enableRootFixer: true,
          exemptedBy: ['inheritdoc', 'this'],
          unnamedRootBase: ['param'],
          useDefaultObjectProperties: true
        }
      ],
      'jsdoc/require-param-description': 1,
      'jsdoc/require-param-name': 1,
      'jsdoc/require-param-type': 1,
      'jsdoc/require-property': 1,
      'jsdoc/require-property-description': 1,
      'jsdoc/require-property-name': 1,
      'jsdoc/require-property-type': 1,
      'jsdoc/require-returns': [
        1,
        {
          checkConstructors: false,
          checkGetters: true,
          forceRequireReturn: true,
          forceReturnsWithAsync: true
        }
      ],
      'jsdoc/require-returns-check': [
        1,
        {
          exemptAsync: false,
          exemptGenerators: true,
          reportMissingReturnForUndefinedTypes: true
        }
      ],
      'jsdoc/require-returns-description': 1,
      'jsdoc/require-returns-type': 1,
      'jsdoc/require-throws': 1,
      'jsdoc/require-yields': [
        1,
        {
          forceRequireNext: true,
          forceRequireYields: true,
          next: true,
          nextWithGeneratorTag: true,
          withGeneratorTag: true
        }
      ],
      'jsdoc/require-yields-check': [
        1,
        {
          checkGeneratorsOnly: true,
          next: true
        }
      ],
      'jsdoc/sort-tags': 0,
      'jsdoc/tag-lines': [
        1,
        'any',
        {
          applyToEndTag: true,
          count: 1,
          endLines: 0,
          startLines: 1,
          tags: {}
        }
      ],
      'jsdoc/valid-types': [1, { allowEmptyNamepaths: true }]
    },
    settings: {
      jsdoc: {
        augmentsExtendsReplacesDocs: true,
        ignoreInternal: false,
        ignorePrivate: false,
        implementsReplacesDocs: true,
        mode: 'typescript',
        overrideReplacesDocs: true,
        preferredTypes: {
          '*': false,
          '.<>': false,
          'Array<>': { replacement: '[]' },
          Object: { replacement: 'object' },
          'Object<>': { replacement: 'Record<>' },
          object: 'object'
        },
        structuredTags: {
          category: {
            name: 'namepath-referencing',
            required: ['name'],
            type: false
          },
          const: {
            name: 'namepath-defining',
            required: ['name']
          },
          decorator: {
            name: 'none'
          },
          enum: {
            name: 'namepath-defining',
            required: ['name', 'type']
          },
          experimental: {
            name: false,
            type: false
          },
          extends: {
            name: 'namepath-defining',
            required: ['type']
          },
          fires: {
            required: ['name']
          },
          implements: {
            name: 'namepath-defining',
            required: ['type']
          },
          maximum: {
            name: 'text',
            required: ['name']
          },
          member: {
            name: 'namepath-defining',
            required: ['name', 'type']
          },
          minimum: {
            name: 'text',
            required: ['name']
          },
          next: {
            name: 'namepath-defining',
            required: ['type']
          },
          packageManager: {
            name: 'text',
            required: ['name']
          },
          param: {
            name: 'namepath-defining',
            required: ['name', 'type']
          },
          return: {
            name: 'namepath-defining',
            required: ['type']
          },
          throws: {
            name: 'namepath-defining',
            required: ['type']
          },
          type: {
            name: 'namepath-defining',
            required: ['type']
          },
          var: {
            name: 'namepath-defining',
            required: ['name']
          },
          visibleName: {
            required: ['name']
          },
          yield: {
            name: 'namepath-defining',
            required: ['type']
          }
        },
        tagNamePreference: {
          augments: 'extends',
          constant: 'const',
          fileoverview: 'file',
          member: 'member',
          returns: 'return',
          var: 'var',
          yields: 'yield'
        }
      }
    }
  },
  {
    files: [
      '**/*.{md,mdx}/*.+(cjs|cts|js|jsx|mdx|mjs|mts|ts|tsx)',
      '**/*.d.+(cts|mts|ts)'
    ],
    rules: {
      'jsdoc/require-file-overview': 0
    }
  },
  {
    files: [
      '**/__mocks__/**/*.+(mts|ts|tsx)',
      '**/__tests__/*.spec.+(mts|ts|tsx)',
      '**/__tests__/*.spec-d.+(mts|ts)',
      '**/__tests__/setup/*.+(mts|ts|tsx)',
      '**/__tests__/utils/*.+(mts|ts|tsx)'
    ],
    rules: {
      'jsdoc/require-jsdoc': 0
    }
  }
]
