const fs = require('fs');
const util = require('util');
const toml = require('toml');
const camelize = require('camelize');
const camelcase = require('camelcase');
const { enums, getMessageType } = require('@arcblock/forge-proto');
const { Any } = require('google-protobuf/google/protobuf/any_pb.js');
const debug = require('debug')(`${require('../package.json').name}:util`);

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

function decodeBinary(data, experimental = false) {
  if (isUint8Array(data)) {
    return Buffer.from(data).toString();
  }

  Object.keys(data).forEach(x => {
    if (isUint8Array(data[x])) {
      data[x] = Buffer.from(data[x]);
      if (experimental) {
        data[x] = data[x].toString(
          // TODO: this code is fragile because hard-coded fields
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

/**
 * Generate type_url field for google.protobuf.Any
 *
 * @param {*} type
 * @returns String
 */
function createTypeUrl(type) {
  if (/Tx$/.test(type)) {
    return `ft/${type.replace(/Tx$/, '')}`;
  }

  if (/State$/.test(type)) {
    return `fs/${type}`;
  }

  return '';
}

function createMessage(type, params) {
  const { fn: Message, fields } = getMessageType(type);
  const message = new Message();
  Object.keys(fields).forEach(key => {
    const value = params[key];
    const { type: subType } = fields[key]; // TODO: check for repeated support
    if (value === undefined) {
      return;
    }

    const set = camelcase(`set_${key}`);
    // enum types
    if (enumTypes.includes(subType)) {
      debug('createMessage.Enum', { type, subType, key });
      message[set](value);
      return;
    }

    // FIXME: google builtin types: Timestamp
    if (subType === 'google.protobuf.Timestamp') {
      message[set](value);
      return;
    }

    if (subType === 'google.protobuf.Any') {
      const anyMessage = new Any();
      if (value.typeUrl && value.value) {
        // avoid duplicate serialization
        anyMessage.setTypeUrl(value.typeUrl);
        anyMessage.setValue(value);
      } else {
        const { value: anyValue, type: anyType } = value;
        const typeUrl = createTypeUrl(anyType);
        const anyValueBinary = createMessage(anyType, anyValue);
        debug('createMessage.Any', { type, subType, key, anyValue, anyType, typeUrl });
        anyMessage.setTypeUrl(typeUrl);
        anyMessage.setValue(anyValueBinary.serializeBinary());
      }
      message[set](anyMessage);
      return;
    }

    const { fn: SubMessage, fields: subFields } = getMessageType(subType);
    // complex types
    if (SubMessage && subFields) {
      debug(`createMessage.${subType}`, { type, subType, key });
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
  createTypeUrl,
};
