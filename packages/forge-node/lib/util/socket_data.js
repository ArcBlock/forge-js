const { getMessageType, fromTypeUrl } = require('@arcblock/forge-proto');
const { createMessage } = require('./message');
const { encodeZigzag, decodeZigzag } = require('./varint');

function encode(data, type) {
  const message = createMessage(type, data);
  const messageBuffer = Buffer.from(message.serializeBinary());
  const length = messageBuffer.byteLength;
  const encoded = encodeZigzag(length);
  const encodedBuffer = Buffer.from(encoded);
  // console.log({
  //   message,
  //   messageBuffer: Uint8Array.from(messageBuffer),
  //   length,
  //   encoded,
  //   encodedBuffer: Uint8Array.from(encodedBuffer),
  // });
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
 * Decode tx.itx for direct use
 *
 * @param {Object} payload
 * @returns payload
 */
function decodeItx(payload) {
  if (!payload.tx || !payload.tx.itx || !payload.tx.itx.typeUrl || !payload.tx.itx.value) {
    return payload;
  }

  const { typeUrl, value } = payload.tx.itx;
  const type = fromTypeUrl(typeUrl);
  const { fn: Message } = getMessageType(type);
  const decoded = Message.deserializeBinary(Buffer.from(value, 'base64'));
  payload.tx.itx = {
    type,
    value: decoded.toObject(),
  };

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
  decodeItx,
};
