const { getMessageType } = require('@arcblock/forge-proto');
const { createMessage, decodeAny } = require('@arcblock/forge-message');
const { encodeZigzag, decodeZigzag } = require('./varint');

function encode(data, type) {
  const message = createMessage(type, data);
  const messageBuffer = Buffer.from(message.serializeBinary());
  const length = messageBuffer.byteLength;
  const encoded = encodeZigzag(length);
  const encodedBuffer = Buffer.from(encoded);
  return Buffer.concat([encodedBuffer, messageBuffer]);
}

/**
 * Decode socket data from forge-core
 * TODO: handle rest buffer that exceeds the length
 *
 * @param {*} buffer
 * @param {*} type
 * @returns
 */
function decode(buffer, type) {
  if (!type) {
    throw new Error('Socket data decoding require valid `type`');
  }

  const result = decodeZigzag(buffer);
  if (!result) {
    return null;
  }

  const [length, rest] = result;
  if (!rest.length) {
    return null;
  }
  const { fn: Message } = getMessageType(type);
  if (!type) {
    throw new Error(`Socket data decoding invalid type: ${type}`);
  }

  const message = Message.deserializeBinary(rest.slice(0, length));
  return message.toObject();
}

/**
 * Decode any fields in payload for direct use
 *
 * @param {Object} payload
 * @returns payload
 */
function decodePayload(payload) {
  if (payload.tx && payload.tx.itx && payload.tx.itx.typeUrl && payload.tx.itx.value) {
    payload.tx.itx = decodeAny(payload.tx.itx);
  }

  if (payload.sender && payload.sender.data) {
    payload.sender.data = decodeAny(payload.sender.data);
  }

  return payload;
}

// eslint-disable-next-line
function decodeStream(buffer, type) {
  // Do something
}

module.exports = {
  encode,
  decode,
  decodeStream,
  decodePayload,
};
