const { fromArc, toArc } = require('../lib/arc');

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
