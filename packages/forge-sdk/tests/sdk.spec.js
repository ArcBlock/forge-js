const { connect } = require('..');

describe('#connect', () => {
  test('should be function', () => {
    expect(typeof connect).toEqual('function');
  });
});
