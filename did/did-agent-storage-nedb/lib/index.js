/* eslint-disable no-underscore-dangle */
const DataStore = require('nedb');
const StorageInterface = require('@arcblock/did-agent-storage');

const debug = require('debug')(require('../package.json').name);

module.exports = class DiskAgentStorage extends StorageInterface {
  /**
   * Creates an instance of DiskAgentStorage.
   *
   * @class
   * @param {Object} options { collection, url }
   * @param {string} options.url - mongodb connection string
   * @param {string} [options.collection='did_agent_authorizations'] - which collection to store agent authorizations
   */
  constructor(options = {}) {
    super(options);

    if (!options.dbPath) {
      throw new Error('DiskAgentStorage requires a valid dbPath option to initialize');
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
  }

  read(authorizeId) {
    return new Promise((resolve, reject) => {
      if (!authorizeId) {
        reject(new Error('authorizeId is required to read auth record'));
        return;
      }
      this.db.findOne({ authorizeId }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }

  create(authorizeId, payloads) {
    this.requiredFields.forEach(x => {
      if (!payloads[x]) {
        throw new Error(`${x} field is required to create agent authorization record`);
      }
    });
    return new Promise((resolve, reject) => {
      if (!authorizeId) {
        reject(new Error('authorizeId is required to create auth record'));
        return;
      }
      this.db.insert(Object.assign({ authorizeId }, payloads), (err, doc) => {
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

  update(authorizeId, updates) {
    return new Promise((resolve, reject) => {
      if (!authorizeId) {
        reject(new Error('authorizeId is required to update auth record'));
        return;
      }
      this.db.update(
        { authorizeId },
        { $set: updates },
        { multi: false, upsert: false, returnUpdatedDocs: true },
        (err, numAffected, doc) => {
          if (err) {
            reject(err);
          } else {
            this.emit('update', doc);
            debug('emit.update', { authorizeId, updates });
            resolve(doc);
          }
        }
      );
    });
  }

  delete(authorizeId) {
    return new Promise((resolve, reject) => {
      if (!authorizeId) {
        reject(new Error('authorizeId is required to delete auth record'));
        return;
      }
      this.db.remove({ authorizeId }, { multi: true }, (err, numRemoved) => {
        if (err) {
          reject(err);
        } else {
          this.emit('destroy', authorizeId);
          resolve(numRemoved);
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

  listByOwner(ownerDid) {
    return new Promise((resolve, reject) => {
      this.db.find({ ownerDid }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }

  listByApp(appDid) {
    return new Promise((resolve, reject) => {
      this.db.find({ appDid }, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  listByAgent(agentDid) {
    return new Promise((resolve, reject) => {
      this.db.find({ agentDid }, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }
};
