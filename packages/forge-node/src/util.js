const fs = require('fs');
const util = require('util');
const toml = require('toml');
const camelize = require('camelize');
const camelcase = require('camelcase');
const { get } = require('lodash');
const { enums, types, vendorTypes, spec } = require('@arcblock/forge-proto');

const enumTypes = Object.keys(enums);
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

function getMessageType(type) {
  return get(types, type) || get(vendorTypes, type);
}

function getMessageFields(type) {
  return (get(spec, type) || {}).fields;
}

function createMessage(type, params) {
  const Message = getMessageType(type);
  const message = new Message();

  const fields = getMessageFields(type);
  Object.keys(fields).forEach(key => {
    const value = params[key];
    const { type: subType } = fields[key]; // FIXME: support repeated
    if (value === undefined) {
      return;
    }

    const set = camelcase(`set_${key}`);
    // enum types
    if (enumTypes.includes(type)) {
      message[set](value);
      return;
    }

    // FIXME: google builtin types
    if (type === 'google.protobuf.Timestamp') {
      return;
    }
    if (type === 'google.protobuf.Any') {
      return;
    }

    const SubMessage = getMessageType(subType);
    const subFields = getMessageFields(subType);
    // complex types
    if (SubMessage && subFields) {
      const subMessage = createMessage(subType, value);
      message[set](subMessage);
      return;
    }

    // primitive types
    message[set](value);
  });

  return message;
}

module.exports = {
  decodeBinary,
  parseConfig,
  createMessage,
};
