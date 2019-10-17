/* eslint-disable no-unused-vars */
const { EventEmitter } = require('events');

module.exports = class SwapStorage extends EventEmitter {
  constructor(options) {
    super(options);
    this.payloadFields = [
      'offerAssets',
      'offerToken',
      'offerAddress',
      'demandAssets',
      'demandToken',
      'demandAddress',
      'demandLocktime',
    ];
  }

  create(params) {
    throw new Error('SwapStorage.create must be implemented in child class');
  }

  read(traceId) {
    throw new Error('SwapStorage.read must be implemented in child class');
  }

  update(traceId, updates) {
    throw new Error('SwapStorage.update must be implemented in child class');
  }

  finalize(traceId, payload) {
    throw new Error('SwapStorage.finalize must be implemented in child class');
  }

  listByStatus(status) {
    throw new Error('SwapStorage.listByStatus must be implemented in child class');
  }

  listByOfferAddress(address, status) {
    throw new Error('SwapStorage.listByOfferAddress must be implemented in child class');
  }

  listByDemandAddress(address, status) {
    throw new Error('SwapStorage.listByDemandAddress must be implemented in child class');
  }

  delete(traceId) {
    throw new Error('SwapStorage.delete must be implemented in child class');
  }

  exist(traceId) {
    throw new Error('SwapStorage.exist must be implemented in child class');
  }
};
