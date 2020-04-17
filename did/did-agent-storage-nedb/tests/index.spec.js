const os = require('os');
const fs = require('fs');
const path = require('path');
const Storage = require('../lib');

describe('#Storage', () => {
  test('should be a function', () => {
    expect(typeof Storage).toEqual('function');
  });

  const dbPath = path.join(os.tmpdir(), `${Date.now()}.db`);
  const storage = new Storage({ dbPath });

  test('should extends event emitter', () => {
    expect(typeof storage.on).toEqual('function');
    expect(typeof storage.emit).toEqual('function');
  });

  const methods = ['create', 'update', 'delete', 'read'];
  methods.forEach(x => {
    test(`should have ${x} method`, () => {
      expect(typeof storage[x]).toEqual('function');
    });
  });

  test('should have complete workflow', async () => {
    const authorizeId = 'abcd';
    await storage.create(authorizeId, {
      status: 'created',
      ownerDid: 'abcd',
      agentDid: 'abcd',
      appDid: 'abcd',
      appPk: 'abcd',
      appName: 'abcd',
      appDescription: 'abcd',
      appIcon: 'abcd',
      chainHost: 'abcd',
      certificateContent: 'abcd',
    });

    let record = await storage.read(authorizeId);
    expect(record.authorizeId).toEqual(authorizeId);
    expect(record.status).toEqual('created');
    expect(record.createdAt).toBeTruthy();
    expect(record.updatedAt).toBeTruthy();

    record = await storage.update(authorizeId, { status: 'complete', key: 'value' });
    expect(record.authorizeId).toEqual(authorizeId);
    expect(record.status).toEqual('complete');
    expect(record.key).toEqual('value');
    expect(record.createdAt).toBeTruthy();
    expect(record.updatedAt).toBeTruthy();

    const numRemoved = await storage.delete(authorizeId);
    expect(numRemoved).toEqual(1);
  });

  afterAll(() => {
    fs.unlinkSync(dbPath);
  });
});
