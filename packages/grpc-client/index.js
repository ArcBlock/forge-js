require('./lib/util/patch');
const { addSource } = require('@arcblock/forge-proto');
const {
  formatMessage,
  createMessage,
  fakeMessage,
  encodeAny,
  decodeAny,
  encodeTimestamp,
  decodeTimestamp,
  encodeBigInt,
  decodeBigInt,
} = require('./lib/util/message');

module.exports = {
  RpcClient: require('./lib/client'),

  addProtobuf: addSource,

  createMessage,
  formatMessage,
  fakeMessage,
  encodeAny,
  decodeAny,
  encodeTimestamp,
  decodeTimestamp,
  encodeBigInt,
  decodeBigInt,
};
