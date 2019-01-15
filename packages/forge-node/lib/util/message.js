/* eslint no-console:"off" */
const util = require('util');
const camelcase = require('camelcase');
const faker = require('faker');
const range = require('lodash/range');
const random = require('lodash/random');
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

// Utility map to generate random data when compose fake message
const scalarTypes = {
  sint32: faker.random.number,
  uint32: faker.random.number,
  sfixed32: faker.random.number,

  sint64: faker.random.number,
  uint64: faker.random.number,
  sfixed64: faker.random.number,

  BigUint: () => faker.random.number().toString(),
  BigSint: () => faker.random.number().toString(),

  float: faker.random.float,
  double: faker.random.float,

  string: faker.random.words,
  bytes: length => Uint8Array.from(range(1, length).map(() => Math.ceil(faker.random.number()))),
  enums: type => {
    const values = Object.values(enums[type]);
    return values[random(0, values.length - 1)];
  },
};

/**
 * Generated a fake message for a type, the message can be RPC request/response
 *
 * @param {String} type
 */
function fakeMessage(type) {
  if (!type) {
    return;
  }

  if (scalarTypes[type]) {
    return scalarTypes[type]();
  }

  const { fields, oneofs } = getMessageType(type);
  if (!fields) {
    return;
  }

  let selectedFields = fields;
  if (oneofs && oneofs.value && Array.isArray(oneofs.value.oneof)) {
    const selectedField = oneofs.value.oneof[0];
    selectedFields = { [selectedField]: fields[selectedField] };
  }

  const result = {};
  Object.keys(selectedFields).forEach(key => {
    const { type: subType, rule } = selectedFields[key];
    if (rule === 'repeated') {
      result[key] = [1, 2].map(() => fakeMessage(subType));
      return;
    }

    if (enumTypes.includes(subType)) {
      result[key] = scalarTypes.enums(subType);
      return;
    }

    if (['hash', 'appHash', 'txHash', 'address', 'from', 'to', 'proposer'].includes(key)) {
      result[key] = faker.git.commitSha();
      return;
    }

    if (scalarTypes[subType]) {
      result[key] = scalarTypes[subType];
    }

    if (subType === 'google.protobuf.Timestamp') {
      result[key] = new Date().toISOString();
      return;
    }

    if (subType === 'google.protobuf.Any') {
      result[key] = {
        type: 'WalletType',
        value: fakeMessage('WalletType'),
      };
      return;
    }

    // Other complex types
    result[key] = fakeMessage(subType);
  });

  return result;
}

/**
 * Format an message from RPC to UI friendly
 *
 * @param {*} type
 * @param {*} data
 * @returns object [almost same structure as input]
 */
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
 * Create an protobuf encoded Typed message with specified data, ready to send to rpc server
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

        if (['BigUint', 'BigSint'].includes(subType)) {
          message[fn](encodeBigInt(v, subType));
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
 * @returns google.protobuf.Any
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

/**
 * Convert an { seconds, nanos } | date-string to google.protobuf.Timestamp object
 *
 * @param {String|Object} value
 * @returns google.protobuf.Timestamp
 */
function encodeTimestamp(value) {
  if (!value) {
    return;
  }

  const timestamp = new Timestamp();
  if (typeof value === 'string') {
    const millionSeconds = Date.parse(value);
    if (isNaN(millionSeconds) === false) {
      timestamp.setSeconds(Math.floor(millionSeconds / 1e3));
      timestamp.setNanos(Math.floor((millionSeconds % 1e3) * 1e6));
    }
  } else {
    const { seconds, nanos = 0 } = value;
    timestamp.setSeconds(seconds);
    timestamp.setNanos(nanos);
  }

  return timestamp;
}

/**
 * Decode google.protobuf.Timestamp message to ISO Date String
 *
 * FIXME: node strictly equal because we rounded the `nanos` field
 *
 * @param {*} data
 * @returns String
 */
function decodeTimestamp(data) {
  if (data && data.seconds) {
    const date = new Date();
    date.setTime(data.seconds * 1e3 + Math.ceil(data.nanos / 1e6));
    return date.toISOString();
  }

  return '';
}

/**
 * Encode BigUint and BigSint types defined in forge-sdk, double encoding is avoided
 *
 * @param {*} value
 * @param {*} type
 * @returns Message
 */
function encodeBigInt(value, type) {
  const { fn: BigInt } = getMessageType(type);
  const message = new BigInt();
  if (value && value.value && isUint8Array(value.value)) {
    message.setValue(value.value);
    if (type === 'BigSint') {
      message.setMinus(value.minus);
    }
    return message;
  }

  const number = BN(typeof value === 'number' ? Math.abs(value) : value.replace(/^(-|\+)/, ''));
  message.setValue(Uint8Array.from(Buffer.from(number.toString(16), 'hex')));
  if (type === 'BigSint') {
    message.setMinus(typeof value === 'number' ? value < 0 : /^-/.test(value));
  }

  return message;
}

/**
 * Convert BigUint and BigSint to string representation of numbers
 *
 * @link https://stackoverflow.com/questions/23948278/how-to-convert-byte-array-into-a-signed-big-integer-in-javascript
 * @param {*} data
 * @returns String
 */
function decodeBigInt(data) {
  const symbol = data.minus ? '-' : '';
  return `${symbol}${BN(Buffer.from(data.value).toString('hex'), 16).toString(10)}`;
}

/**
 * Attach an $format method to rpc response
 *
 * @param {Object} data
 * @param {String} type
 * @memberof Client
 */
function attachFormatFn(type, data, key = '$format') {
  Object.defineProperty(data, key, {
    writable: false,
    enumerable: false,
    configurable: false,
    value: () => formatMessage(type, data),
  });
}

/**
 * Attach an example method to
 *
 * @param {Object} data
 * @param {String} type
 * @memberof Client
 */
function attachExampleFn(type, host, key) {
  Object.defineProperty(host, key, {
    writable: false,
    enumerable: false,
    configurable: false,
    value: () => fakeMessage(type),
  });
}

module.exports = {
  formatMessage,
  createMessage,
  fakeMessage,
  decodeAny,
  encodeAny,
  encodeTimestamp,
  decodeTimestamp,
  encodeBigInt,
  decodeBigInt,
  attachFormatFn,
  attachExampleFn,
};
