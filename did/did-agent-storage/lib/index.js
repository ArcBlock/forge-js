/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
const { EventEmitter } = require('events');

/**
 * Defines the interface of DID-Auth Token Storage
 * Which is used during the DID-Auth process in an typical application
 *
 * @class DidAgentStorage
 * @see @arcblock/did-auth-storage-firebase
 * @see @arcblock/did-auth-storage-mongo
 * @see @arcblock/did-auth-storage-keystone
 * @extends {EventEmitter}
 */
class DidAgentStorage extends EventEmitter {
  /**
   * Creates an instance of DidAgentStorage.
   *
   * @class
   * @param {object} options
   */
  constructor(options) {
    super(options);
  }

  create(authorizeId) {
    throw new Error('DidAgentStorage.create must be implemented in child class');
  }

  update(authorizeId, updates) {
    throw new Error('DidAgentStorage.update must be implemented in child class');
  }

  read(authorizeId) {
    throw new Error('DidAgentStorage.read must be implemented in child class');
  }

  delete(authorizeId) {
    throw new Error('DidAgentStorage.delete must be implemented in child class');
  }

  listByOwner(ownerDid) {
    throw new Error('DidAgentStorage.listByOwner must be implemented in child class');
  }

  listByApp(appDid) {
    throw new Error('DidAgentStorage.listByApp must be implemented in child class');
  }
}

module.exports = DidAgentStorage;
