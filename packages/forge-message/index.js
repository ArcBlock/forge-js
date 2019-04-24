require('./lib/util/patch');
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
