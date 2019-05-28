const { encodeVarint, decodeVarint, encodeZigzag, decodeZigzag } = require('./lib/util/varint');
const {
  encode: encodeSocketData,
  decode: decodeSocketData,
  decodePayload,
} = require('./lib/util/socket_data');

module.exports = {
  // eslint-disable-next-line global-require
  TcpServer: require('./lib/server/tcp'),

  encodeVarint,
  decodeVarint,
  encodeZigzag,
  decodeZigzag,

  encodeSocketData,
  decodeSocketData,
  decodePayload,
};
