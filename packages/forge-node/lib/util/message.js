/* eslint no-console:"off" */
const util = require('util');
const camelcase = require('camelcase');
const { enums, getMessageType, toTypeUrl, fromTypeUrl } = require('@arcblock/forge-proto');
const { Any } = require('google-protobuf/google/protobuf/any_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
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
        data[x] = data[x].toString(['signature', 'pk'].includes(x) ? 'hex' : 'utf8');
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
 * Create an encoded Typed message with specified data
 *
 * @param {*} type
 * @param {*} params
 * @returns Message
 */
function createMessage(type, params) {
  if (!type && !params) {
    console.log({ type, params });
    return;
  }

  const { fn: Message, fields } = getMessageType(type);
  if (!Message || !fields) {
    console.error({ type, params, fields, Message }); // eslint-disable-line
    throw new Error(`Unsupported messageType: ${type}`);
  }

  const message = new Message();

  // Fast return on empty data
  if (!params) {
    return message;
  }

  // Attach each field to message
  Object.keys(fields).forEach(key => {
    const value = params[key];
    const { type: subType, rule } = fields[key];
    if (value === undefined) {
      return;
    }

    const fn = camelcase(rule === 'repeated' ? `add_${key}` : `set_${key}`);
    if (typeof message[fn] !== 'function') {
      throw new Error(`Unexpected field names ${JSON.stringify({ type, key, subType, fn, rule })}`);
    }

    const values = rule === 'repeated' ? value : [value];
    try {
      values.forEach(v => {
        // enum types
        if (enumTypes.includes(subType)) {
          // debug('createMessage.Enum', { type, subType, key });
          message[fn](v);
          return;
        }

        if (subType === 'google.protobuf.Timestamp') {
          debug(`createMessage.${subType}`, { v });
          message[fn](encodeTimestamp(v));
          return;
        }

        if (subType === 'google.protobuf.Any') {
          message[fn](encodeAny(v));
          return;
        }

        const { fn: SubMessage, fields: subFields } = getMessageType(subType);
        // complex types
        if (SubMessage && subFields) {
          debug(`createMessage.${subType}`, { type, subType, key });
          const subMessage = createMessage(subType, v);
          message[fn](subMessage);
          return;
        }

        // primitive types
        message[fn](v);
      });
    } catch (err) {
      debug('createMessage.processField.error', { type, key, subType, fn, rule, values, err });
      throw err;
    }
  });

  return message;
}

/**
 * Decode an google.protobuf.Any%{ typeUrl, value } => { type, value }
 *
 * @param {*} data encoded data object
 * @returns Object%{type, value}
 */
function decodeAny(data) {
  if (!data) {
    return { type: 'Unknown', value: '' };
  }

  const { typeUrl, value } = data;
  const type = fromTypeUrl(typeUrl);
  const { fn: Message } = getMessageType(type);
  const buffer = Buffer.isBuffer(value) ? value : Buffer.from(value, 'base64');
  const decoded = Message.deserializeBinary(buffer);
  return { type, value: decoded.toObject() };
}

/**
 * Encode { type, value } => google.protobuf.Any%{ typeUrl, value }
 * Does nothing on already encoded message
 *
 * @param {*} data
 * @returns Object
 */
function encodeAny(data) {
  if (!data) {
    return;
  }

  const anyMessage = new Any();
  if (data.typeUrl && data.value && !data.type) {
    // avoid duplicate serialization
    anyMessage.setTypeUrl(data.typeUrl);
    anyMessage.setValue(Buffer.from(data.value, 'base64'));
  } else {
    const { value: anyValue, type: anyType } = data;
    const typeUrl = toTypeUrl(anyType);
    const anyValueBinary = createMessage(anyType, anyValue);
    anyMessage.setTypeUrl(typeUrl);
    anyMessage.setValue(anyValueBinary.serializeBinary());
  }

  return anyMessage;
}

function encodeTimestamp(value) {
  if (!value) {
    return;
  }

  const timestamp = new Timestamp();
  const { seconds, nanos } = value;
  timestamp.setSeconds(seconds);
  timestamp.setNanos(nanos);

  return timestamp;
}

module.exports = {
  decodeBinary,
  createMessage,
  decodeAny,
  encodeAny,
  encodeTimestamp,
};
