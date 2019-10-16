/* eslint-disable no-unused-vars */
const { EventEmitter } = require('events');

/**
 * Fields possible to exist in a swap record
 *
 *  - traceId,
 *  - status: 'not_started',
 *
 *  - offerAddress: '',
 *  - offerAssets: [],
 *  - offerToken: 0,
 *  - offerLocktime: 28800,
 *  - offerChain: '', // 卖家要卖货的链
 *  - offerSetupHash: '', // 卖家 setup_swap 的 hash
 *  - offerSwapAddress: '', // 卖家 setup_swap 的地址
 *  - offerRetrieveHash: '', // 卖家 retrieve_swap 的 hash
 *  - offerRevokeHash: '', // 卖家 revoke_swap 的 hash
 *
 *  - demandAddress: '', // TODO: this should be auto generated
 *  - demandAssets: [],
 *  - demandToken: 0,
 *  - demandLocktime: 57600,
 *  - demandChain: '',  // 买家要付款的链
 *  - demandSetupHash: '', // 买家 setup_swap 的 hash
 *  - demandSwapAddress: '', // 买家 setup_swap 的地址
 *  - demandRetrieveHash: '', // 买家 retrieve_swap 的 hash
 *  - demandRevokeHash: '', // 买家 revoke_swap 的 hash
 *
 *  - createdAt: new Date(), // 创建时间
 *  - updatedAt: new Date(), // 更新时间
 *
 *
 * Events that will be emitted
 *
 *  - user_setup
 *  - both_setup
 *  - user_retrieve
 *  - both_retrieve
 *  - user_revoke
 *  - both_revoke
 * */
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

  finalizePayload(traceId, payload) {
    throw new Error('SwapStorage.finalizePayload must be implemented in child class');
  }

  listByStatus(status) {
    throw new Error('SwapStorage.listByStatus must be implemented in child class');
  }

  delete(traceId) {
    throw new Error('SwapStorage.delete must be implemented in child class');
  }

  exist(traceId) {
    throw new Error('SwapStorage.exist must be implemented in child class');
  }
};
