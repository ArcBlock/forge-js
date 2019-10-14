/* eslint-disable no-unused-vars */
const { EventEmitter } = require('events');

module.exports = class AuthStorage extends EventEmitter {
  constructor(config) {
    super(config);
  }

  create(token, status = 'created') {
    throw new Error('AuthStorage.create must be implemented in child class');
  }

  read(token) {
    throw new Error('AuthStorage.read must be implemented in child class');
  }

  update(token, updates) {
    throw new Error('AuthStorage.update must be implemented in child class');
  }

  delete(token) {
    throw new Error('AuthStorage.delete must be implemented in child class');
  }

  exist(token, did) {
    throw new Error('AuthStorage.exist must be implemented in child class');
  }
};
