const BN = require('bn.js');
const {
  fromArc,
  toArc,
  hexToNumberString,
  isBN,
  numberToHex,
  toBN,
  toHex,
  hexToUtf8,
  utf8ToHex,
  stripHexPrefix,
} = require('../lib/index');

describe('#fromArc & toArc', () => {
  test('should be function', () => {
    expect(typeof fromArc).toEqual('function');
    expect(typeof toArc).toEqual('function');
  });

  test('should return same for number and string', () => {
    expect(toArc(100)).toEqual(toArc('100'));
    expect(toArc(-100)).toEqual(toArc('-100'));
    expect(toArc(10000000000)).toEqual(toArc('10000000000'));
    expect(toArc(9.87643)).toEqual(toArc('9.87643'));
  });

  [100, -100, 10000000000000].forEach(x => {
    test(`should support reverse op on integer: ${x}`, () => {
      const encoded = toArc(x);
      const decoded = fromArc(encoded);
      expect(decoded).toEqual(x.toString());
    });
  });

  [8.8888, -8.8888, 3.3333333333333, 44444444444444444.5555].forEach(x => {
    test(`should support reverse op decimal: ${x}`, () => {
      const encoded = toArc(x);
      const decoded = fromArc(encoded);
      expect(decoded).toEqual(x.toString());
    });
  });
});

describe('#web-util-test-case', () => {
  it('calls numberToHex and returns the expected results', () => {
    const tests = [
      { value: 1, expected: '0x1' },
      {
        value: '21345678976543214567869765432145647586',
        expected: '0x100f073a3d694d13d1615dc9bc3097e2',
      },
      { value: '1', expected: '0x1' },
      { value: '0x1', expected: '0x1' },
      { value: '0x01', expected: '0x1' },
      { value: 15, expected: '0xf' },
      { value: '15', expected: '0xf' },
      { value: '0xf', expected: '0xf' },
      { value: '0x0f', expected: '0xf' },
      { value: -1, expected: '-0x1' },
      { value: '-1', expected: '-0x1' },
      { value: '-0x1', expected: '-0x1' },
      { value: '-0x01', expected: '-0x1' },
      { value: -15, expected: '-0xf' },
      { value: '-15', expected: '-0xf' },
      { value: '-0xf', expected: '-0xf' },
      { value: '-0x0f', expected: '-0xf' },
      {
        value: '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        expected: '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      },
      {
        value: '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd',
        expected: '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd',
      },
      {
        value: '-0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        expected: '-0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      },
      {
        value: '-0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd',
        expected: '-0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd',
      },
      { value: 0, expected: '0x0' },
      { value: '0', expected: '0x0' },
      { value: '0x0', expected: '0x0' },
      { value: -0, expected: '0x0' },
      { value: '-0', expected: '0x0' },
      { value: '-0x0', expected: '0x0' },
    ];

    tests.forEach(test => {
      expect(numberToHex(test.value)).toEqual(test.expected);
    });
  });

  it('calls isBN and returns the expected results', () => {
    const tests = [
      {
        value: () => {},
        is: false,
      },
      /* eslint-disable no-new-func */
      { value: new Function(), is: false },
      /* eslint-enable no-new-func */
      { value: 'function', is: false },
      { value: {}, is: false },
      { value: String('hello'), is: false },
      { value: new BN(0), is: true },
      { value: 132, is: false },
      { value: '0x12', is: false },
    ];

    tests.forEach(test => {
      expect(isBN(test.value)).toEqual(test.is);
    });
  });

  it('calls toBN and returns the expected results', () => {
    const tests = [
      { value: 1, expected: '1' },
      { value: '1', expected: '1' },
      { value: '0x1', expected: '1' },
      { value: '0x01', expected: '1' },
      { value: 15, expected: '15' },
      { value: '15', expected: '15' },
      { value: '0xf', expected: '15' },
      { value: '0x0f', expected: '15' },
      { value: new BN('f', 16), expected: '15' },
      { value: -1, expected: '-1' },
      { value: '-1', expected: '-1' },
      { value: '-0x1', expected: '-1' },
      { value: '-0x01', expected: '-1' },
      { value: -15, expected: '-15' },
      { value: '-15', expected: '-15' },
      { value: '-0xf', expected: '-15' },
      { value: '-0x0f', expected: '-15' },
      {
        value: '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        expected: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
      },
      {
        value: '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd',
        expected: '115792089237316195423570985008687907853269984665640564039457584007913129639933',
      },
      {
        value: '-0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        expected: '-115792089237316195423570985008687907853269984665640564039457584007913129639935',
      },
      {
        value: '-0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd',
        expected: '-115792089237316195423570985008687907853269984665640564039457584007913129639933',
      },
      { value: 0, expected: '0' },
      { value: '0', expected: '0' },
      { value: '0x0', expected: '0' },
      { value: -0, expected: '0' },
      { value: '-0', expected: '0' },
      { value: '-0x0', expected: '0' },
      { value: new BN(0), expected: '0' },
    ];

    tests.forEach(test => {
      expect(toBN(test.value).toString(10)).toEqual(test.expected);
    });
  });

  it('calls toHex and returns the expected results', () => {
    const tests = [
      { value: 1, expected: '0x1' },
      { value: '1', expected: '0x1' },
      { value: '0x1', expected: '0x1' },
      { value: '15', expected: '0xf' },
      { value: '0xf', expected: '0xf' },
      { value: -1, expected: '-0x1' },
      { value: '-1', expected: '-0x1' },
      { value: '-0x1', expected: '-0x1' },
      { value: '-15', expected: '-0xf' },
      { value: '-0xf', expected: '-0xf' },
      { value: '0x657468657265756d', expected: '0x657468657265756d' },
      {
        value: '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd',
        expected: '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd',
      },
      {
        value: '-0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        expected: '-0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      },
      {
        value: '-0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd',
        expected: '-0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd',
      },
      { value: 0, expected: '0x0' },
      { value: '0', expected: '0x0' },
      { value: '0x0', expected: '0x0' },
      { value: -0, expected: '0x0' },
      { value: '-0', expected: '0x0' },
      { value: '-0x0', expected: '0x0' },
      {
        value: [1, 2, 3, { test: 'data' }],
        expected: '0x5b312c322c332c7b2274657374223a2264617461227d5d',
      },
      { value: { test: 'test' }, expected: '0x7b2274657374223a2274657374227d' },
      { value: '{"test": "test"}', expected: '0x7b2274657374223a202274657374227d' },
      { value: 'myString', expected: '0x6d79537472696e67' },
      { value: 'myString 34534!', expected: '0x6d79537472696e6720333435333421' },
      { value: new BN(15), expected: '0xf' },
      {
        value: 'Heeäööä👅D34ɝɣ24Єͽ-.,äü+#/',
        expected: '0x486565c3a4c3b6c3b6c3a4f09f9185443334c99dc9a33234d084cdbd2d2e2cc3a4c3bc2b232f',
      },
      { value: true, expected: '0x01' },
      { value: false, expected: '0x00' },
      {
        value:
          'ff\u0003\u0000\u0000\u00005èÆÕL]\u0012|Î¾\u001a7«\u00052\u0011(ÐY\n<\u0010\u0000\u0000\u0000\u0000\u0000\u0000e!ßd/ñõì\f:z¦Î¦±ç·÷Í¢Ëß\u00076*\bñùC1ÉUÀé2\u001aÓB',
        expected:
          '0x66660300000035c3a8c386c3954c5d127cc29dc38ec2bec29e1a37c2abc29b05321128c390c297590a3c100000000000006521c39f642fc3b1c3b5c3ac0c3a7ac2a6c38ec2a6c2b1c3a7c2b7c3b7c38dc2a2c38bc39f07362ac28508c28ec297c3b1c29ec3b94331c38955c380c3a9321ac393c28642c28c',
      },
      {
        value:
          '\u0003\u0000\u0000\u00005èÆÕL]\u0012|Î¾\u001a7«\u00052\u0011(ÐY\n<\u0010\u0000\u0000\u0000\u0000\u0000\u0000e!ßd/ñõì\f:z¦Î¦±ç·÷Í¢Ëß\u00076*\bñùC1ÉUÀé2\u001aÓB',
        expected:
          '0x0300000035c3a8c386c3954c5d127cc29dc38ec2bec29e1a37c2abc29b05321128c390c297590a3c100000000000006521c39f642fc3b1c3b5c3ac0c3a7ac2a6c38ec2a6c2b1c3a7c2b7c3b7c38dc2a2c38bc39f07362ac28508c28ec297c3b1c29ec3b94331c38955c380c3a9321ac393c28642c28c',
      },
      {
        value: '내가 제일 잘 나가',
        expected: '0xeb82b4eab08020eca09cec9dbc20ec9e9820eb8298eab080',
      },
    ];

    tests.forEach(test => {
      expect(toHex(test.value)).toEqual(test.expected);
    });
  });

  it('calls hexToNumberString and returns the expected results', () => {
    expect(hexToNumberString('0x3e8')).toEqual('1000');

    expect(hexToNumberString('0x1f0fe294a36')).toEqual('2134567897654');

    // allow compatiblity
    expect(hexToNumberString(100000)).toEqual('100000');

    expect(hexToNumberString('100000')).toEqual('100000');
  });

  it('calls hexToUtf8 and returns the expected results', () => {
    const tests = [
      {
        value: '0x486565c3a4c3b6c3b6c3a4f09f9185443334c99dc9a33234d084cdbd2d2e2cc3a4c3bc2b232f',
        expected: 'Heeäööä👅D34ɝɣ24Єͽ-.,äü+#/',
      },
      { value: '0x6d79537472696e67', expected: 'myString' },
      { value: '0x6d79537472696e6700', expected: 'myString' },
      {
        value: '0x65787065637465642076616c7565000000000000000000000000000000000000',
        expected: 'expected value',
      },
      {
        value: '0x000000000000000000000000000000000000657870656374000065642076616c7565',
        expected: 'expect\u0000\u0000ed value',
      },
    ];

    tests.forEach(test => {
      expect(hexToUtf8(test.value)).toEqual(test.expected);
    });
  });

  it('calls utf8ToHex and returns the expected results', () => {
    const tests = [
      {
        value: 'Heeäööä👅D34ɝɣ24Єͽ-.,äü+#/',
        expected: '0x486565c3a4c3b6c3b6c3a4f09f9185443334c99dc9a33234d084cdbd2d2e2cc3a4c3bc2b232f',
      },
      { value: 'myString', expected: '0x6d79537472696e67' },
      { value: 'myString\u0000', expected: '0x6d79537472696e67' },
      { value: 'expected value\u0000\u0000\u0000', expected: '0x65787065637465642076616c7565' },
      {
        value: 'expect\u0000\u0000ed value\u0000\u0000\u0000',
        expected: '0x657870656374000065642076616c7565',
      },
      {
        value: '我能吞下玻璃而不伤身体。',
        expected: '0xe68891e883bde5909ee4b88be78ebbe79283e8808ce4b88de4bca4e8baabe4bd93e38082',
      },
      {
        value: '나는 유리를 먹을 수 있어요. 그래도 아프지 않아요',
        expected:
          '0xeb8298eb8a9420ec9ca0eba6aceba5bc20eba8b9ec9d8420ec889820ec9e88ec96b4ec9a942e20eab7b8eb9e98eb8f8420ec9584ed9484eca78020ec958aec9584ec9a94',
      },
    ];

    tests.forEach(test => {
      expect(utf8ToHex(test.value)).toEqual(test.expected);
    });
  });
});

describe('#stripHexPrefix', () => {
  test('should stripHexPrefix strip prefix of valid strings', () => {
    expect(stripHexPrefix('0xkdsfksfdkj')).toEqual('kdsfksfdkj');
    expect(stripHexPrefix('0xksfdkj')).toEqual('ksfdkj');
    expect(stripHexPrefix('0xkdsfdkj')).toEqual('kdsfdkj');
    expect(stripHexPrefix('0x23442sfdkj')).toEqual('23442sfdkj');
    expect(stripHexPrefix('0xkdssdfssfdkj')).toEqual('kdssdfssfdkj');
    expect(stripHexPrefix('0xaaaasfdkj')).toEqual('aaaasfdkj');
    expect(stripHexPrefix('0xkdsdfsfsdfsdfsdfdkj')).toEqual('kdsdfsfsdfsdfsdfdkj');
    expect(stripHexPrefix('0x111dssdddj')).toEqual('111dssdddj');
    expect(stripHexPrefix('0x')).toEqual('');
    expect(stripHexPrefix('')).toEqual('');
    expect(stripHexPrefix('-0xsdfsfd')).toEqual('-0xsdfsfd');
    expect(stripHexPrefix('-0x')).toEqual('-0x');
  });

  test('should stripHexPrefix strip prefix of mix hexed strings', () => {
    expect(stripHexPrefix('0xkdsfksfdkj')).toEqual('kdsfksfdkj');
    expect(stripHexPrefix('ksfdkj')).toEqual('ksfdkj');
    expect(stripHexPrefix('kdsfdkj')).toEqual('kdsfdkj');
    expect(stripHexPrefix('23442sfdkj')).toEqual('23442sfdkj');
    expect(stripHexPrefix('0xkdssdfssfdkj')).toEqual('kdssdfssfdkj');
    expect(stripHexPrefix('aaaasfdkj')).toEqual('aaaasfdkj');
    expect(stripHexPrefix('kdsdfsfsdfsdfsdfdkj')).toEqual('kdsdfsfsdfsdfsdfdkj');
    expect(stripHexPrefix('111dssdddj')).toEqual('111dssdddj');
  });

  test('should stripHexPrefix bypass if not string', () => {
    expect(stripHexPrefix(null)).toEqual(null);
    expect(stripHexPrefix(undefined)).toEqual(undefined);
    expect(stripHexPrefix(242423)).toEqual(242423);
    expect(stripHexPrefix(true)).toEqual(true);
  });
});
