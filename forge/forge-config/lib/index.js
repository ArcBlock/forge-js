/**
 * @fileOverview Contains helper methods to parse forge config file
 * @module @arcblock/forge-config
 */

const fs = require('fs');
const toml = require('@iarna/toml');
const camelize = require('camelize');

/**
 * Parse config from a file
 *
 * @public
 * @static
 * @param {string} configPath
 * @returns {object}
 * @throws Error when file not found
 * @example
const { parseConfig } = require('@arcblock/forge-config');
const config = parseConfig('./forge.toml');
 */
function parse(configPath) {
  if (!fs.existsSync(configPath)) {
    throw new Error(`config file not found: ${configPath}`);
  }
  try {
    return camelize(toml.parse(fs.readFileSync(configPath)));
  } catch (err) {
    throw new Error(`config file parse failed: ${configPath}`);
  }
}

module.exports = {
  parse,
};
