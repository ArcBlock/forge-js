/* eslint-disable max-len */
/* eslint-disable compat/compat */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const Db = require('tingodb')().Db;
const StorageInterface = require('@arcblock/did-auth-storage');

const debug = require('debug')(require('../package.json').name);

const promiseUpdateOrInsert = (collection, token, updates, upsert = false) =>
  new Promise((resolve, reject) => {
    collection.update({ token }, { $set: updates }, { upsert }, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

const promiseFindOne = (collection, condition) =>
  new Promise((resolve, reject) => {
    collection.findOne(condition, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

const promiseDelete = (collection, condition) =>
  new Promise((resolve, reject) => {
    collection.remove(condition, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

module.exports = class TingoAuthStorage extends StorageInterface {
  /**
   * Creates an instance of MongoAuthStorage.
   *
   * @class
   * @param {Object} options { collection, url }
   * @param {string} options.dbPath - tingodb connection string
   * @param {string} [options.collection='did_auth_tokens'] - which collection to store did auth tokens
   */
  constructor(options) {
    options = options || {};

    super(options);

    this.collectionName = options.collection || 'did_auth_tokens';
    this.options = options;

    if (options.dbPath) {
      this.db = new Db(options.dbPath, {});
      this.setCollection(this.db.collection(this.collectionName));
    } else {
      throw new Error('Connection strategy not found');
    }
  }

  connectionFailed(err) {
    throw err;
  }

  setCollection(collection) {
    this.collectionReadyPromise = undefined;
    this.collection = collection;
  }

  collectionReady() {
    let promise = this.collectionReadyPromise;
    if (!promise) {
      // eslint-disable-next-line no-unused-vars
      promise = new Promise((resolve, reject) => resolve(this.collection));
      this.collectionReadyPromise = promise;
    }
    return promise;
  }

  read(token) {
    return this.collectionReady().then(collection => promiseFindOne(collection, { token }));
  }

  create(token, status = 'created') {
    return this.update(token, { status }, true);
  }

  update(token, updates, upsert = false) {
    if (!updates.updatedAt) {
      updates.updatedAt = new Date();
    }
    debug('update', { token, updates });
    return this.collectionReady()
      .then(collection => promiseUpdateOrInsert(collection, token, updates, upsert))
      .then(rawResponse => {
        if (rawResponse.result) {
          rawResponse = rawResponse.result;
        }
        const data = Object.assign({ token }, updates);

        if (rawResponse && rawResponse.upserted) {
          this.emit('create', data);
          debug('emit.create', { token, updates });
        } else {
          this.emit('update', data);
          debug('emit.update', { token, updates });
        }

        return data;
      });
  }

  delete(token) {
    return this.collectionReady()
      .then(collection => promiseDelete(collection, { token }))
      .then(() => this.emit('destroy', token));
  }

  exist(token, did) {
    return this.collectionReady().then(collection => promiseFindOne(collection, { token, did }));
  }

  clear() {
    return this.collectionReady().then(collection => collection.drop());
  }

  close() {
    if (this.db) {
      this.db.close();
    }
  }
};
