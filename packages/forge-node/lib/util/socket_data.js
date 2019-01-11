const { getMessageType } = require('@arcblock/forge-proto');
const { createMessage } = require('./message');
const { encodeZigzag, decodeZigzag } = require('./varint');

const encode = (data, type) => {
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
};

const decode = (buffer, type) => {
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

  // TODO: handle rest buffer that exceeds the length
  const message = Message.deserializeBinary(rest.slice(0, length));
  return message.toObject();
};

// eslint-disable-next-line
const decodeStream = (buffer, type) => {
  // Do something
};

module.exports = {
  encode,
  decode,
  decodeStream,
};
