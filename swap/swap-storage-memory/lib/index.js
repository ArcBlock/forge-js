/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const StorageInterface = require('@arcblock/swap-storage');

let storage = {};

class MemorySwapStorage extends StorageInterface {
  /**
   * Create new atomic-swap order, traceId should be generated by user
   *
   * @method
   * @param {string} traceId
   * @param {object} initialAttributes
   * @returns {object}
   */
  create(traceId, initialAttributes = {}) {
    storage[traceId] = Object.assign({ traceId }, initialAttributes);
    this.emit('create', storage[traceId]);
    return storage[traceId];
  }

  /**
   * Get an atomic-swap order by traceId
   *
   * @method
   * @param {string} traceId - the uuid of the swap order
   * @returns {object} the atomic-swap-order
   */
  read(traceId) {
    return storage[traceId];
  }

  /**
   * Finalize the payload of atomic-swap
   *
   * @method
   * @param {string} traceId
   * @param {object} payload
   * @returns {object}
   */
  finalize(traceId, payload) {
    Object.keys(payload).forEach(x => {
      if (!this.payloadFields.includes(x)) {
        delete payload[x];
      }
    });

    storage[traceId] = Object.assign({ traceId }, payload);
    this.emit('finalize', storage[traceId]);
    return storage[traceId];
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
    this.payloadFields.forEach(x => {
      delete updates[x];
    });

    updates.updatedAt = new Date();

    storage[traceId] = Object.assign({ traceId }, updates);
    this.emit('update', storage[traceId]);
    return storage[traceId];
  }

  /**
   * Delete atomic swap order by traceId
   *
   * @method
   * @param {string} traceId
   * @returns void
   */
  delete(traceId) {
    delete storage[traceId];
    this.emit('destroy', traceId);
  }

  clear() {
    storage = {};
  }
}

module.exports = MemorySwapStorage;
