/* eslint-disable no-underscore-dangle */
const { get, set } = require('lodash');
const Runner = require('./runner');

const noop = () => {};

class HandlerManager {
  constructor() {
    this._handlers = {};
  }

  add(key, handler) {
    if (typeof handler !== 'function') {
      return;
    }

    const handlers = get(this._handlers, 'key', []);
    handlers.push(handler);
    set(this._handlers, key, handlers);
    // eslint-disable-next-line consistent-return
    return this;
  }

  // eslint-disable-next-line consistent-return
  remove(key, handler) {
    const handlers = get(this._handlers, 'key', []);
    const index = handlers.indexOf(handler);
    if (index > -1) {
      handlers.splice(index, 1);
      set(this._handlers, key, handlers);
      return true;
    }
  }

  has(key) {
    return get(this._handlers, key, []).length > 0;
  }

  run(key, req, res = {}, done = noop) {
    // console.log(this._handlers);
    const runner = new Runner(req, res);
    runner.use(get(this._handlers, key, []));
    runner.run(req, res, done);
  }
}

module.exports = HandlerManager;
