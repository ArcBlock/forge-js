const StorageInterface = require('@arcblock/did-auth-storage');

let storage = {};

module.exports = class MemoryAuthStorage extends StorageInterface {
  read(token) {
    return storage[token];
  }

  create(token, status = 'created') {
    storage[token] = { token, status };
    return this.read(token);
  }

  update(token, updates) {
    delete updates.token;
    storage[token] = Object.assign(storage[token], updates);
    return storage[token];
  }

  delete(token) {
    delete storage[token];
  }

  exist(token, did) {
    return storage[token] && storage[token].did === did;
  }

  clear() {
    storage = {};
  }
};
