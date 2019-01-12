const { parseConfig } = require('./lib/util/config');
const {
  createMessage,
  encodeAny,
  decodeAny,
  decodeBinary,
  encodeTimestamp,
} = require('./lib/util/message');
const { encodeVarint, decodeVarint, encodeZigzag, decodeZigzag } = require('./lib/util/varint');
const {
  encode: encodeSocketData,
  decode: decodeSocketData,
  decodePayload,
} = require('./lib/util/socket_data');

module.exports = Object.assign({
  ForgeRpc: require('./lib/rpc'),
  ForgeApp: require('./lib/app'),

  parseConfig,

  createMessage,
  encodeAny,
  decodeAny,
  decodeBinary,
  encodeTimestamp,

  encodeVarint,
  decodeVarint,
  encodeZigzag,
  decodeZigzag,

  encodeSocketData,
  decodeSocketData,
  decodePayload,
});
