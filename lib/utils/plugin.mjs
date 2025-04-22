/**
 * @file Utilities - plugin
 * @module eslint-config/utils/plugin
 */

/**
 * @import {ESLint} from 'eslint'
 * @typedef {ESLint.Plugin} Plugin
 */

/**
 * Load a plugin.
 *
 * @async
 *
 * @param {string} name
 *  Plugin module name
 * @return {Promise<ESLint.Plugin>}
 *  Eslint plugin
 */
async function plugin(name) {
  /**
   * The plugin module.
   *
   * @type {{ default: ESLint.Plugin } | ESLint.Plugin}
   * @const m
   */
  const m = await import(name)

  return 'default' in m ? m.default : m
}

export default plugin
