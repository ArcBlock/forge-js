const { encodeVarint, decodeVarint, encodeZigzag, decodeZigzag } = require('../../lib/util/varint');

describe('#encodeVarint', () => {
  test('should be a function', () => {
    expect(typeof encodeVarint).toEqual('function');
  });

  test('should throw error if invalid value', () => {
    try {
      encodeVarint('./tmp/file');
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should encode as expected', () => {
    expect(encodeVarint(127)).toEqual([127]);
    expect(encodeVarint(128)).toEqual([128, 1]);
    expect(encodeVarint(1000)).toEqual([232, 7]);
    expect(encodeVarint(Math.pow(2, 15))).toEqual([128, 128, 2]);
    expect(encodeVarint(2)).toEqual([2]);
  });
});

describe('#encodeZigzag', () => {
  test('should be a function', () => {
    expect(typeof encodeZigzag).toEqual('function');
  });

  test('should throw error if invalid value', () => {
    try {
      encodeZigzag('./tmp/file');
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should encode as expected', () => {
    expect(encodeZigzag(1)).toEqual([2]);
    expect(encodeZigzag(-1)).toEqual([1]);
    expect(encodeZigzag(128)).toEqual([128, 2]);
    expect(encodeZigzag(-128)).toEqual([255, 1]);
    expect(encodeZigzag(2)).toEqual([4]);
  });
});

describe('#decodeVarint', () => {
  test('should be a function', () => {
    expect(typeof decodeVarint).toEqual('function');
  });

  test('should decode as expected', () => {
    expect(decodeVarint([127])).toEqual([127, []]);
    expect(decodeVarint([128, 1])).toEqual([128, []]);
    expect(decodeVarint([232, 7])).toEqual([1000, []]);
  });
});

describe('#decodeZigzag', () => {
  test('should be a function', () => {
    expect(typeof decodeZigzag).toEqual('function');
  });

  test('should decode as expected', () => {
    expect(decodeVarint([127])).toEqual([127, []]);
    expect(decodeVarint([128, 1])).toEqual([128, []]);
    expect(decodeVarint([232, 7])).toEqual([1000, []]);
  });
});

describe('#decodeVarint', () => {
  test('should be a function', () => {
    expect(typeof decodeVarint).toEqual('function');
  });

  test('should decode as expected', () => {
    expect(decodeVarint([127])).toEqual([127, []]);
    expect(decodeVarint([128, 1])).toEqual([128, []]);
    expect(decodeVarint([232, 7])).toEqual([1000, []]);
  });
});

describe('#decodeZigzag', () => {
  test('should be a function', () => {
    expect(typeof decodeZigzag).toEqual('function');
  });

  test('should decode as expected', () => {
    expect(decodeZigzag([2])).toEqual([1, []]);
    expect(decodeZigzag([1])).toEqual([-1, []]);
    expect(decodeZigzag([128, 2])).toEqual([128, []]);
    expect(decodeZigzag([255, 1])).toEqual([-128, []]);
  });
});
