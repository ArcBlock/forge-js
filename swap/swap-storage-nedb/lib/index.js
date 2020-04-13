/* eslint-disable no-bitwise */
/* eslint-disable no-underscore-dangle */
const DataStore = require('nedb');
const StorageInterface = require('@arcblock/swap-storage');

const debug = require('debug')(require('../package.json').name);

class DiskSwapStorage extends StorageInterface {
  /**
   * Creates an instance of DiskSwapStorage.
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

    // TODO: we may need a ready state if the database file is too large
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
    return new Promise((resolve, reject) => {
      if (!traceId) {
        reject(new Error('traceId is required to create auth record'));
        return;
      }
      this.db.insert(Object.assign({ traceId }, initialAttributes), (err, doc) => {
        if (err) {
          reject(err);
        } else {
          this.emit('create', doc);
          debug('emit.create', doc);
          resolve(doc);
        }
      });
    });
  }

  /**
   * Get an atomic-swap order by traceId
   *
   * @method
   * @param {string} traceId - the uuid of the swap order
   * @returns {Promise<object>} the atomic-swap-order
   */
  read(traceId) {
    return new Promise((resolve, reject) => {
      if (!traceId) {
        reject(new Error('traceId is required to read auth record'));
        return;
      }
      this.db.findOne({ traceId }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
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
    Object.keys(payload).forEach(x => {
      if (!this.payloadFields.includes(x)) {
        delete payload[x];
      }
    });

    return new Promise((resolve, reject) => {
      if (!traceId) {
        reject(new Error('traceId is required to update auth record'));
        return;
      }
      this.db.update(
        { traceId },
        { $set: payload },
        { multi: false, upsert: false, returnUpdatedDocs: true },
        (err, numAffected, doc) => {
          if (err) {
            reject(err);
          } else {
            this.emit('finalize', doc);
            debug('emit.finalize', doc);
            resolve(doc);
          }
        }
      );
    });
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

    return new Promise((resolve, reject) => {
      if (!traceId) {
        reject(new Error('traceId is required to update auth record'));
        return;
      }
      this.db.update(
        { traceId },
        { $set: updates },
        { multi: false, upsert: false, returnUpdatedDocs: true },
        (err, numAffected, doc) => {
          if (err) {
            reject(err);
          } else {
            this.emit('update', doc);
            debug('emit.update', { traceId, updates });
            resolve(doc);
          }
        }
      );
    });
  }

  /**
   * Delete atomic swap order by traceId
   *
   * @method
   * @param {string} traceId
   * @returns void
   */
  delete(traceId) {
    return new Promise((resolve, reject) => {
      if (!traceId) {
        reject(new Error('traceId is required to delete auth record'));
        return;
      }
      this.db.remove({ traceId }, { multi: true }, (err, numRemoved) => {
        if (err) {
          reject(err);
        } else {
          this.emit('destroy', traceId);
          resolve(numRemoved);
        }
      });
    });
  }

  /**
   * Find atomic swap records by status
   *
   * @method
   * @param {string} status - check out list of supported status here
   * @returns {Promise<Array>}
   */
  listByStatus(status) {
    return new Promise((resolve, reject) => {
      this.db.find({ status }, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  /**
   * Find atomic swap records by offer address and status
   *
   * @method
   * @param {string} address
   * @param {string} [status='']
   * @returns {Promise<Array>}
   */
  listByOfferAddress(address, status = '') {
    const conditions = { offerUserAddress: address };
    if (status) {
      conditions.status = status;
    }
    return new Promise((resolve, reject) => {
      this.db.find(conditions, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  /**
   * Find atomic swap records by demand address and status
   *
   * @method
   * @param {string} address
   * @param {string} [status='']
   * @returns {Promise<Array>}
   */
  listByDemandAddress(address, status = '') {
    const conditions = { demandUserAddress: address };
    if (status) {
      conditions.status = status;
    }
    return new Promise((resolve, reject) => {
      this.db.find(conditions, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }
}

module.exports = DiskSwapStorage;
