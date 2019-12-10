const StorageInterface = require('@arcblock/did-agent-storage');

let storage = {};

module.exports = class MemoryAgentStorage extends StorageInterface {
  read(authorizeId) {
    return storage[authorizeId];
  }

  create(authorizeId, payload = {}) {
    this.requiredFields.forEach(x => {
      if (!payload[x]) {
        throw new Error(`${x} field is required to create agent authorization record`);
      }
    });
    storage[authorizeId] = Object.assign({ authorizeId }, payload);
    this.emit('create', storage[authorizeId]);
    return this.read(authorizeId);
  }

  update(authorizeId, updates) {
    delete updates.authorizeId;
    storage[authorizeId] = Object.assign(storage[authorizeId], updates);
    this.emit('update', storage[authorizeId]);
    return storage[authorizeId];
  }

  delete(authorizeId) {
    this.emit('destroy', storage[authorizeId]);
    delete storage[authorizeId];
  }

  listByOwner(ownerDid) {
    Object.keys(storage)
      .filter(x => storage[x].ownerDid === ownerDid)
      .map(x => storage[x]);
  }

  listByApp(appDid) {
    Object.keys(storage)
      .filter(x => storage[x].appDid === appDid)
      .map(x => storage[x]);
  }

  clear() {
    storage = {};
  }
};
