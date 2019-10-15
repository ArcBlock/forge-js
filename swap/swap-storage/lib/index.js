/* eslint-disable no-unused-vars */
const { EventEmitter } = require('events');

module.exports = class SwapStorage extends EventEmitter {
  create(params) {
    throw new Error('SwapStorage.create must be implemented in child class');
  }

  read(traceId) {
    throw new Error('SwapStorage.read must be implemented in child class');
  }

  update(traceId, updates) {
    throw new Error('SwapStorage.update must be implemented in child class');
  }

  delete(traceId) {
    throw new Error('SwapStorage.delete must be implemented in child class');
  }

  exist(traceId) {
    throw new Error('SwapStorage.exist must be implemented in child class');
  }
};
