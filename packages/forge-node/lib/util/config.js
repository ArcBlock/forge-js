const fs = require('fs');
const toml = require('toml');
const camelize = require('camelize');

function parseConfig(configPath) {
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
  parseConfig,
};
