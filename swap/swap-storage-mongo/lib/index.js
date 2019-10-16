/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const MongoClient = require('mongodb');
const StorageInterface = require('@arcblock/swap-storage');

module.exports = class MongoStorage extends StorageInterface {
  /**
   * Creates an instance of MongoStorage.
   *
   * @param {Object} options { collection, url }
   * @param {string} options.collection - which collection to store the swap records
   * @param {string} options.url - mongodb connection string
   */
  constructor(options) {
    options = options || {};

    super(options);

    this.collectionName = options.collection || 'abt_forge_swaps';
    this.options = options;

    this.changeState('init');

    const newConnectionCallback = (err, client) => {
      if (err) {
        this.connectionFailed(err);
      } else {
        this.handleNewConnectionAsync(client);
      }
    };

    if (options.url) {
      // New native connection using url + mongoOptions
      const _options = options.mongoOptions || {};
      if (typeof _options.useNewUrlParser !== 'boolean') {
        _options.useNewUrlParser = true;
      }
      MongoClient.connect(options.url, _options, newConnectionCallback);
    } else if (options.mongooseConnection) {
      // Re-use existing or upcoming mongoose connection
      if (options.mongooseConnection.readyState === 1) {
        this.handleNewConnectionAsync(options.mongooseConnection);
      } else {
        options.mongooseConnection.once(
          'open',
          () => this.handleNewConnectionAsync(options.mongooseConnection)
          // eslint-disable-next-line function-paren-newline
        );
      }
    } else if (options.client) {
      this.handleNewConnectionAsync(options.client);
    } else if (options.clientPromise) {
      options.clientPromise
        .then(client => this.handleNewConnectionAsync(client))
        .catch(err => this.connectionFailed(err));
    } else {
      throw new Error('Connection strategy not found');
    }

    this.changeState('connecting');
  }

  connectionFailed(err) {
    this.changeState('disconnected');
    throw err;
  }

  handleNewConnectionAsync(client) {
    this.client = client;
    this.db = typeof client.db !== 'function' ? client.db : client.db();
    this.setCollection(this.db.collection(this.collectionName));
    this.changeState('connected');
  }

  changeState(newState) {
    if (newState !== this.state) {
      this.state = newState;
      this.emit(newState);
    }
  }

  setCollection(collection) {
    this.collectionReadyPromise = undefined;
    this.collection = collection;

    return this;
  }

  collectionReady() {
    let promise = this.collectionReadyPromise;
    if (!promise) {
      promise = new Promise((resolve, reject) => {
        if (this.state === 'connected') {
          return resolve(this.collection);
        }
        if (this.state === 'connecting') {
          return this.once('connected', () => resolve(this.collection));
        }
        return reject(new Error('Not connected'));
      });
      this.collectionReadyPromise = promise;
    }
    return promise;
  }

  read(traceId) {
    return this.collectionReady().then(collection => collection.findOne({ traceId }));
  }

  create(traceId, attributes) {
    return this.update(traceId, attributes);
  }

  update(traceId, updates) {
    this.payloadFields.forEach(x => {
      delete updates[x];
    });

    updates.updatedAt = new Date();

    return this.collectionReady()
      .then(collection => collection.updateOne({ traceId }, { $set: updates }, { upsert: true }))
      .then(rawResponse => {
        if (rawResponse.result) {
          rawResponse = rawResponse.result;
        }
        if (rawResponse && rawResponse.upserted) {
          this.emit('create', traceId);
        } else {
          this.emit('update', traceId);
        }

        this.emit('set', traceId);

        const payload = Object.assign({ traceId }, updates);

        // Allow external code to hook into events
        if (updates.status) {
          this.emit(updates.status, payload);
        }

        return payload;
      });
  }

  finalizePayload(traceId, payload) {
    return this.collectionReady()
      .then(collection => collection.updateOne({ traceId }, { $set: payload }))
      .then(rawResponse => {
        if (rawResponse.result) {
          rawResponse = rawResponse.result;
        }

        this.emit('finalize', Object.assign({ traceId }, payload));

        return rawResponse;
      });
  }

  delete(traceId) {
    return this.collectionReady()
      .then(collection => collection.deleteOne({ traceId }))
      .then(() => this.emit('destroy', traceId));
  }

  exist(traceId, did) {
    return this.collectionReady().then(collection => collection.findOne({ traceId, did }));
  }

  clear() {
    return this.collectionReady().then(collection => collection.drop());
  }

  close() {
    if (this.client) {
      this.client.close();
    }
  }
};
