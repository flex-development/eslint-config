/**
 * @file node
 * @module eslint-config/node
 */

import base from './bases/global.mjs'
import jsdoc from './bases/jsdoc.mjs'
import json from './bases/json.mjs'
import markdown from './bases/markdown.mjs'
import typescript from './bases/typescript.mjs'
import yaml from './bases/yaml.mjs'

/**
 * eslint configuration for node-based environments.
 *
 * @type {import('eslint').Linter.Config[]}
 * @const node
 */
const node = [
  ...base,
  ...json,
  ...markdown,
  ...yaml,
  ...jsdoc,
  ...typescript
]

export default node
