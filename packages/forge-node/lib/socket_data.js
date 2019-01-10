const { getMessageType } = require('@arcblock/forge-proto');
const { createMessage } = require('./util');
const { encodeZigzag, decodeZigzag } = require('./varint');
const inspect = data => require('util').inspect(data, { depth: 5 });

const encode = (data, type) => {
  const message = createMessage(type, data);
  const messageBuffer = Buffer.from(message.serializeBinary());
  const length = messageBuffer.byteLength;
  const lengthBuffer = Buffer.from([length]);
  const encoded = encodeZigzag(lengthBuffer);
  console.log({ data, type, message, messageBuffer, length, lengthBuffer, encoded });
  const varintBuffer = Buffer.from(encoded);
  return Buffer.concat(varintBuffer, messageBuffer);
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

  // TODO: handle rest
  const decoded = Message.deserializeBinary(rest.slice(0, length));
  return decoded;
};

const decodeStream = (buffer, type) => {
  // Do something
};

module.exports = {
  encode,
  decode,
  decodeStream,
};

// const encoded =
//   'lgcKyAMKkQEKKWZkNWY1NTZiOTA0MzI3MjM2NjUzNjNmZmI1MGRkZmJmNWM3ZmQ5MjY4EAIaRjBEAiBKFpCXqzA4hqXxpe4CeWKuWNUN5nqYqFagwpTeiNZotAIgD3qLWb5iQyxRXzTrP6SUctROTeIwaq0bKrOn7KpDV7wgAToYCgVLVi9rdhIPEgZyYW5kb20aBXZhbHVlErECCgoKCA3gtrOnZAAAEAIYASIpZmQ1ZjU1NmI5MDQzMjcyMzY2NTM2M2ZmYjUwZGRmYmY1YzdmZDkyNjgqQQRwfqJbwpk4OipEaGYBQeLbBGMY6QlTt1iIeLSrv+dxFQ4B+SgHODpE8ImRZ1eO6AzYTI9+A61a7j6fsSwUQNoPMgIIAToKd2FuZ3NoaWp1bkpAQjkwQkVDMjgzQTEwOUFBQjY2RjBCMjE0ODQ4ODVERkY0NzRDNUQ1N0VFRTlBQUY1OEEyNjYzOENDN0M4MURGRVJAQjkwQkVDMjgzQTEwOUFBQjY2RjBCMjE0ODQ4ODVERkY0NzRDNUQ1N0VFRTlBQUY1OEEyNjYzOENDN0M4MURGRVoMCIHb3OEFEJOv6bYBYgwIgdvc4QUQk6/ptgF4gAE=';
// const decoded = decode(Buffer.from(encoded, 'base64'), 'Request');
// inspect(decoded);

const encoded = encode(
  {
    value: {
      verifyTx: {
        status: 0,
      },
    },
  },
  'Response'
);
inspect(encoded);
