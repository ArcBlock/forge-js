const { addSource } = require('@arcblock/forge-proto');
const { encodeVarint, decodeVarint, encodeZigzag, decodeZigzag } = require('./lib/util/varint');
const {
  encode: encodeSocketData,
  decode: decodeSocketData,
  decodePayload,
} = require('./lib/util/socket_data');

module.exports = {
  TcpServer: require('./lib/server/tcp'),

  addProtobuf: addSource,

  encodeVarint,
  decodeVarint,
  encodeZigzag,
  decodeZigzag,

  encodeSocketData,
  decodeSocketData,
  decodePayload,
};
