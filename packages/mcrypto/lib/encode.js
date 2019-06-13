const { toHex, toUint8Array, toBase58, toBuffer } = require('@arcblock/forge-util');

module.exports = function encode(data, encoding = 'hex') {
  if (encoding === 'hex') {
    return toHex(data);
  }

  if (encoding === 'base58') {
    return toBase58(data, true);
  }

  // TODO: support this
  // if (encoding === 'base64') {
  //   return toBase64(data);
  // }

  if (encoding === 'Uint8Array') {
    return toUint8Array(data, true);
  }

  if (encoding === 'buffer') {
    return toBuffer(data, true);
  }

  return data;
};
