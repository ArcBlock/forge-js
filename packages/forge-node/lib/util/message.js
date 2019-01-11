const util = require('util');
const camelcase = require('camelcase');
const { enums, getMessageType, toTypeUrl } = require('@arcblock/forge-proto');
const { Any } = require('google-protobuf/google/protobuf/any_pb.js');
const debug = require('debug')(`${require('../../package.json').name}:util`);

const enumTypes = Object.keys(enums);
const { isUint8Array } = util.types;

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

function createMessage(type, params) {
  const { fn: Message, fields } = getMessageType(type);
  if (!Message || !fields) {
    console.error({ type, params, fields, Message }); // eslint-disable-line
    throw new Error(`Unsupported messageType: ${type}`);
  }

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
      // debug('createMessage.Enum', { type, subType, key });
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
      if (value.typeUrl && value.value && !value.type) {
        // avoid duplicate serialization
        anyMessage.setTypeUrl(value.typeUrl);
        anyMessage.setValue(Buffer.from(value.value, 'base64'));
      } else {
        const { value: anyValue, type: anyType } = value;
        const typeUrl = toTypeUrl(anyType);
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
  createMessage,
};
