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
    return this.read(authorizeId);
  }

  update(authorizeId, updates) {
    delete updates.authorizeId;
    storage[authorizeId] = Object.assign(storage[authorizeId], updates);
    return storage[authorizeId];
  }

  delete(authorizeId) {
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
