/* eslint-disable no-bitwise */
const encodeVarint = v => {
  if (typeof v !== 'number') {
    throw new Error('encodeZigzag require v to be a valid number');
  }

  if (v < 128) {
    return [v];
  }

  const binary = v.toString(2).padStart(8, '0');
  return [parseInt(`1${binary.substr(-7)}`, 2)].concat(encodeVarint(v >> 7));
};

const decodeVarint = buffer => {
  const firstByte = buffer[0];
  const firstBinary = firstByte.toString(2).padStart(8, '0');
  const leading = firstBinary.slice(0, 1);
  const int = parseInt(firstBinary.slice(-7), 2);
  const rest = buffer.slice(1);
  // console.log({ firstByte, firstBinary, leading, int, rest });
  if (leading === '0') {
    return [int, rest];
  }

  if (!rest.length) {
    return [];
  }

  const [int1, rest1] = decodeVarint(rest);
  if (!int1) {
    return null;
  }

  return [int + (int1 << 7), rest1];
};

const encodeZigzag = v => {
  if (typeof v !== 'number') {
    throw new Error('encodeZigzag require v to be a valid number');
  }

  if (v >= 0) {
    return encodeVarint(v << 1);
  }

  return encodeVarint(-((v << 1) + 1));
};

const decodeZigzag = buffer => {
  const result = decodeVarint(buffer);
  if (!result) {
    return null;
  }

  const [varint, rest] = result;
  // eslint-disable-next-line no-self-compare
  const int = varint & (1 === 1) ? -((varint + 1) >> 1) : varint >> 1;
  return [int, rest];
};

module.exports = {
  encodeVarint,
  decodeVarint,
  encodeZigzag,
  decodeZigzag,
};
