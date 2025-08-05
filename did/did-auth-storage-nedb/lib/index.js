/* eslint-disable no-underscore-dangle */
const { DataStore: SimpleDataStore } = require('@nedb/core');
const { createDataStore } = require('@nedb/multi');
const StorageInterface = require('@arcblock/did-connect-storage');

const debug = require('debug')(require('../package.json').name);

module.exports = class DiskAuthStorage extends StorageInterface {
  /**
   * Creates an instance of DiskAuthStorage.
   *
   * @class
   * @param {Object} options { dbPath }
   * @param {string} options.dbPath - where to store the database on disk
   */
  constructor(options = {}) {
    super(options);

    if (!options.dbPath) {
      throw new Error('DiskAuthStorage requires a valid dbPath option to initialize');
    }

    this.options = options;

    const DataStore = options.dbPort ? createDataStore(options.dbPort) : SimpleDataStore;

    this.db = new DataStore(
      Object.assign(
        {
          filename: options.dbPath,
          autoload: true,
          timestampData: true,
        },
        options
      )
    );

    this.db.loadDatabase((err) => {
      if (err) {
        debug(`failed to load disk database ${options.dbPath}`, { error: err });
      }
    });

    // TODO: we may need a ready state if the database file is too large
  }

  read(token) {
    return new Promise((resolve, reject) => {
      if (!token) {
        reject(new Error('token is required to read auth record'));
        return;
      }
      this.db.findOne({ token }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }

  create(token, status = 'created') {
    return new Promise((resolve, reject) => {
      if (!token) {
        reject(new Error('token is required to create auth record'));
        return;
      }
      this.db.insert({ token, status }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          this.emit('create', doc);
          debug('emit.create', { token, status });
          resolve(doc);
        }
      });
    });
  }

  update(token, updates = {}) {
    return new Promise((resolve, reject) => {
      if (!token) {
        reject(new Error('token is required to update auth record'));
        return;
      }
      this.db.update(
        { token },
        { $set: updates },
        { multi: false, upsert: false, returnUpdatedDocs: true },
        (err, [, doc]) => {
          if (err) {
            reject(err);
          } else {
            this.emit('update', doc);
            debug('emit.update', { token, updates });
            resolve(doc);
          }
        }
      );
    });
  }

  delete(token) {
    return new Promise((resolve, reject) => {
      if (!token) {
        reject(new Error('token is required to delete auth record'));
        return;
      }
      this.db.remove({ token }, { multi: true }, (err, numRemoved) => {
        if (err) {
          reject(err);
        } else {
          this.emit('destroy', token);
          resolve(numRemoved);
        }
      });
    });
  }

  exist(token, did) {
    return new Promise((resolve, reject) => {
      if (!token) {
        reject(new Error('token is required to check auth record'));
        return;
      }
      this.db.findOne({ token, did }, (err, doc) => {
        if (err) {
          resolve(false);
        } else {
          resolve(!!doc);
        }
      });
    });
  }

  clear() {
    return new Promise((resolve, reject) => {
      this.db.remove({}, { multi: true }, (err, numRemoved) => {
        if (err) {
          reject(err);
        } else {
          resolve(numRemoved);
        }
      });
    });
  }
};
