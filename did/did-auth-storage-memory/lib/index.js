const StorageInterface = require('@arcblock/did-connect-storage');

let storage = {};

module.exports = class MemoryAuthStorage extends StorageInterface {
  read(token) {
    return storage[token];
  }

  create(token, status = 'created') {
    storage[token] = { token, status };
    this.emit('create', storage[token]);
    return this.read(token);
  }

  update(token, updates) {
    delete updates.token;
    storage[token] = Object.assign(storage[token], updates);
    this.emit('update', storage[token]);
    return storage[token];
  }

  delete(token) {
    this.emit('destroy', storage[token]);
    delete storage[token];
  }

  exist(token, did) {
    return storage[token] && storage[token].did === did;
  }

  clear() {
    storage = {};
  }
};
