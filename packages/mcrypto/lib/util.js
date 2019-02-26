exports.hexToBytes = hex => {
  hex = hex.toString(16);

  hex = hex.replace(/^0x/i, '');
  hex = hex.length % 2 ? '0' + hex : hex;

  let bytes = [];
  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }

  return bytes;
};

exports.bytesToHex = bytes => {
  let hex = [];

  for (let i = 0; i < bytes.length; i++) {
    hex.push((bytes[i] >>> 4).toString(16));
    hex.push((bytes[i] & 0xf).toString(16));
  }

  return `${hex.join('').replace(/^0+/, '')}`;
};
