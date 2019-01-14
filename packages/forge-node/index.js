const { addSource } = require('@arcblock/forge-proto');
const { parseConfig } = require('./lib/util/config');
const {
  formatMessage,
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
  RpcClient: require('./lib/client/rpc'),
  TcpServer: require('./lib/server/tcp'),

  addProtobuf: addSource,

  parseConfig,

  createMessage,
  formatMessage,
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
