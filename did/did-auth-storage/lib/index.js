/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
const { EventEmitter } = require('events');

/**
 * Defines the interface of DID-Auth Token Storage
 * Which is used during the DID-Auth process in an typical application
 *
 * @class AuthStorage
 * @extends {EventEmitter}
 */
class AuthStorage extends EventEmitter {
  /**
   * Creates an instance of AuthStorage.
   *
   * @class
   * @param {object} options
   */
  constructor(options) {
    super(options);
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
}

module.exports = AuthStorage;
