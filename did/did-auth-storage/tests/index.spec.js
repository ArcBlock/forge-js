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

  test('should have create method', () => {
    const storage = new Storage();
    expect(typeof storage.create).toEqual('function');
    try {
      storage.create();
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should have update method', () => {
    const storage = new Storage();
    expect(typeof storage.update).toEqual('function');
    try {
      storage.update();
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should have delete method', () => {
    const storage = new Storage();
    expect(typeof storage.delete).toEqual('function');
    try {
      storage.delete();
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should have read method', () => {
    const storage = new Storage();
    expect(typeof storage.read).toEqual('function');
    try {
      storage.read();
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should have exist method', () => {
    const storage = new Storage();
    expect(typeof storage.exist).toEqual('function');
    try {
      storage.exist();
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });
});
