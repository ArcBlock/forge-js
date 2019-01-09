const fs = require('fs');
const util = require('util');
const toml = require('toml');
const camelize = require('camelize');

const { isUint8Array } = util.types;

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

// TODO: this code is fragile because hard-coded fields
function decodeBinary(data, experimental = false) {
  if (isUint8Array(data)) {
    return Buffer.from(data).toString();
  }

  Object.keys(data).forEach(x => {
    if (isUint8Array(data[x])) {
      data[x] = Buffer.from(data[x]);
      if (experimental) {
        data[x] = data[x].toString(
          ['appHash', 'blockHash', 'signature', 'pk', 'token'].includes(x) ? 'hex' : 'utf8'
        );
      }
      return;
    }
    if (data[x] && typeof data[x] === 'object') {
      data[x] = decodeBinary(data[x], experimental);
      return;
    }
  });

  return data;
}

module.exports = {
  decodeBinary,
  parseConfig,
};
