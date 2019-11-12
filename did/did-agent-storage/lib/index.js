/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
const { EventEmitter } = require('events');

/**
 * Defines the interface of authorized did auth storage
 * Which is used when building an centralized service that do did-auth on behalf of many applications
 *
 * @class DidAgentStorage
 * @see @arcblock/did-agent-storage-memory
 * @see @arcblock/did-agent-storage-mongo
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

    this.requiredFields = [
      'ownerDid',
      'agentDid',
      'appDid',
      'appPk',
      'appName',
      'appDescription',
      'appIcon',
      'chainHost',
      'certificateContent',
    ];
  }

  create(authorizeId, payload) {
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

  listByAgent(agentDid) {
    throw new Error('DidAgentStorage.listByAgent must be implemented in child class');
  }
}

module.exports = DidAgentStorage;
