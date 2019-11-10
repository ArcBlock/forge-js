const Storage = require('../lib');

describe('#Storage', () => {
  test('should be a function', () => {
    expect(typeof Storage).toEqual('function');
  });

  test('should extends event emitter', () => {
    const storage = new Storage();
    expect(typeof storage.on).toEqual('function');
    expect(typeof storage.emit).toEqual('function');
  });

  const methods = ['create', 'update', 'delete', 'read', 'exist'];
  methods.forEach(x => {
    test(`should have ${x} method`, () => {
      const storage = new Storage();
      expect(typeof storage[x]).toEqual('function');
      try {
        storage.create();
      } catch (err) {
        expect(err).toBeTruthy();
      }
    });
  });
});
