/**
 * @file all
 * @module eslint-config
 */

import node from '@flex-development/eslint-config/node'

/**
 * @typedef {'node'} ConfigName
 * @typedef {Record<ConfigName, import('eslint').Linter.Config[]>} Configs
 */

/**
 * All configs.
 *
 * @type {{ configs: Configs }}
 * @const all
 */
const all = { configs: { node } }

export default all
