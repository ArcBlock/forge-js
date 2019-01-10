const encodeVarint = v => {
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
  const int = varint & (1 === 1) ? -((varint + 1) >> 1) : varint >> 1;
  return [int, rest];
};

module.exports = {
  encodeVarint,
  decodeVarint,
  encodeZigzag,
  decodeZigzag,
};

// TODO: move these code to unit tests
// console.log(encodeVarint(127));
// console.log(encodeVarint(128));
// console.log(encodeVarint(1000));
// console.log(encodeVarint(Math.pow(2,15)));

// console.log(encodeZigzag(1));
// console.log(encodeZigzag(-1));
// console.log(encodeZigzag(128));
// console.log(encodeZigzag(-128));

// console.log(decodeVarint([127]));
// console.log(decodeVarint([128, 1]));
// console.log(decodeVarint([232, 7]));

// console.log(decodeZigzag([2]));
// console.log(decodeZigzag([1]));
// console.log(decodeZigzag([128,2]));
// console.log(decodeZigzag([255,1]));
