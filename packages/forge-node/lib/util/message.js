/* eslint no-console:"off" */
const util = require('util');
const camelcase = require('camelcase');
const BN = require('bignumber.js');
const {
  enums,
  messages,
  getMessageType,
  toTypeUrl,
  fromTypeUrl,
} = require('@arcblock/forge-proto');
const { Any } = require('google-protobuf/google/protobuf/any_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

const debug = require('debug')(`${require('../../package.json').name}:util`);

const enumTypes = Object.keys(enums);
const { isUint8Array } = util.types;

function formatMessage(type, data) {
  if (!type) {
    return data;
  }

  if (typeof data !== 'object') {
    return data;
  }

  const result = {};
  const { fields } = getMessageType(type);
  Object.keys(fields).forEach(key => {
    const value = data[key];
    const { type: subType, rule } = fields[key];
    if (value === undefined) {
      return;
    }

    if (rule === 'repeated') {
      result[key] = value.map(x => formatMessage(subType, x));
      return;
    }

    if (enumTypes.includes(subType)) {
      result[key] = messages[subType][value];
      return;
    }

    if (['BigUint', 'BigSint'].includes(subType)) {
      result[key] = decodeBigInt(value);
      return;
    }

    if (isUint8Array(value)) {
      if (['appHash', 'blockHash'].includes(key)) {
        result[key] = Buffer.from(value).toString('hex');
      }
      if (['signature', 'pk', 'sk'].includes(key)) {
        result[key] = Buffer.from(value).toString('base64');
      }
      return;
    }

    if (subType === 'google.protobuf.Timestamp') {
      result[key] = decodeTimestamp(value);
      return;
    }

    if (subType === 'google.protobuf.Any') {
      result[key] = value ? value.value : {};
      return;
    }

    if (value && typeof value === 'object') {
      result[key] = formatMessage(subType, value);
      return;
    }

    result[key] = value;
  });

  return result;
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

        // if (['BigUint', 'BigSint'].includes(subType)) {
        //   message[fn](encodeBigInt(v));
        //   return;
        // }

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

function decodeTimestamp(data) {
  if (data && data.seconds) {
    const date = new Date();
    date.setTime(data.seconds * 1e3 + Math.ceil(data.nanos / 1e6));
    return date.toISOString();
  }

  return '';
}

function encodeBigInt(value) {}

function decodeBigInt(data) {
  const symbol = data.minus ? '-' : '';
  return `${symbol}${BN(Buffer.from(data.value).toString('hex'), 16).toString()}`;
}

module.exports = {
  formatMessage,
  createMessage,
  decodeAny,
  encodeAny,
  encodeTimestamp,
  decodeTimestamp,
  encodeBigInt,
  decodeBigInt,
};
