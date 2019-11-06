/* eslint-disable no-unused-vars */
const { EventEmitter } = require('events');

/**
 * Defines the interface of atomic-swap storage
 * Which should be implemented to use in dapps that uses atomic-swap capability
 *
 * @class SwapStorage
 * @extends {EventEmitter}
 */
class SwapStorage extends EventEmitter {
  /**
   * Creates an instance of SwapStorage.
   *
   * @class
   * @param {object} options
   */
  constructor(options) {
    super(options);
    this.payloadFields = [
      'offerAssets',
      'offerToken',
      'offerUserAddress',
      'demandAssets',
      'demandToken',
      'demandUserAddress',
      'demandLocktime',
    ];
  }

  /**
   * Create new atomic-swap order, traceId should be generated by user
   *
   * @method
   * @param {string} traceId
   * @param {object} initialAttributes
   * @returns {Promise<object>}
   */
  create(traceId, initialAttributes = {}) {
    throw new Error('SwapStorage.create must be implemented in child class');
  }

  /**
   * Get an atomic-swap order by traceId
   *
   * @method
   * @param {string} traceId - the uuid of the swap order
   * @returns {Promise<object>} the atomic-swap-order
   */
  read(traceId) {
    throw new Error('SwapStorage.read must be implemented in child class');
  }

  /**
   * Update the status of an atomic-swap order, will not allow payload fields to be updated
   *
   * @method
   * @param {string} traceId
   * @param {object} updates
   * @returns {Promise<object>}
   */
  update(traceId, updates) {
    throw new Error('SwapStorage.update must be implemented in child class');
  }

  /**
   * Finalize the payload of atomic-swap
   *
   * @method
   * @param {string} traceId
   * @param {object} payload
   * @returns {Promise<object>}
   */
  finalize(traceId, payload) {
    throw new Error('SwapStorage.finalize must be implemented in child class');
  }

  /**
   * Find atomic swap records by status
   *
   * @method
   * @param {string} status - check out list of supported status here
   * @returns {Promise<Array>}
   * TODO: add pagination for this
   */
  listByStatus(status) {
    throw new Error('SwapStorage.listByStatus must be implemented in child class');
  }

  /**
   * Find atomic swap records by offer address and status
   *
   * @method
   * @param {string} address
   * @param {string} [status='']
   * @returns {Promise<Array>}
   * TODO: add pagination for this
   */
  listByOfferAddress(address, status) {
    throw new Error('SwapStorage.listByOfferAddress must be implemented in child class');
  }

  /**
   * Find atomic swap records by demand address and status
   *
   * @method
   * @param {string} address
   * @param {string} [status='']
   * @returns {Promise<Array>}
   * TODO: add pagination for this
   */
  listByDemandAddress(address, status) {
    throw new Error('SwapStorage.listByDemandAddress must be implemented in child class');
  }

  /**
   * Delete atomic swap order by traceId
   *
   * @method
   * @param {string} traceId
   * @returns void
   */
  delete(traceId) {
    throw new Error('SwapStorage.delete must be implemented in child class');
  }
}

module.exports = SwapStorage;
