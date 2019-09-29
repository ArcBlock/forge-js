const { toHex, toUint8Array, toBase58, toBase64, toBuffer } = require('@arcblock/forge-util');

module.exports = function encode(data, encoding = 'hex') {
  if (['hex', 'base16'].includes(encoding)) {
    return toHex(data);
  }

  if (encoding === 'base58') {
    return toBase58(data);
  }

  if (encoding === 'base64') {
    return toBase64(data);
  }

  if (encoding === 'Uint8Array') {
    return toUint8Array(data);
  }

  if (encoding === 'buffer') {
    return toBuffer(data);
  }

  return data;
};
