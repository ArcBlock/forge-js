/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const MongoClient = require('mongodb');
const StorageInterface = require('../../did-agent-storage/lib');

module.exports = class MongoAgentStorage extends StorageInterface {
  /**
   * Creates an instance of MongoAgentStorage.
   *
   * @class
   * @param {Object} options { collection, url }
   * @param {string} options.url - mongodb connection string
   * @param {string} [options.collection='app-agent-authorizations'] - which collection to store agent authorizations
   */
  constructor(options) {
    options = options || {};

    super(options);

    this.collectionName = options.collection || 'app-agent-authorizations';
    this.options = options;
    this.requiredFields = [
      'ownerDid',
      'agentDid',
      'appDid',
      'appPk',
      'appName',
      'appDescription',
      'appIcon',
      'certificateContent',
      'certificateSignature',
    ];

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

  read(authorizeId) {
    return this.collectionReady().then(collection => collection.findOne({ authorizeId }));
  }

  create(authorizeId, payloads) {
    this.requiredFields.forEach(x => {
      if (!payloads[x]) {
        throw new Error(`${x} field is required to create agent authorization record`);
      }
    });
    return this.update(authorizeId, Object.assign({ createdAt: new Date() }, payloads));
  }

  update(authorizeId, updates) {
    return this.collectionReady()
      .then(
        collection =>
          collection.updateOne(
            { authorizeId },
            { $set: Object.assign({ updatedAt: new Date() }, updates) },
            { upsert: true }
          )
        // eslint-disable-next-line function-paren-newline
      )
      .then(rawResponse => {
        if (rawResponse.result) {
          rawResponse = rawResponse.result;
        }
        if (rawResponse && rawResponse.upserted) {
          this.emit('create', authorizeId);
        } else {
          this.emit('update', authorizeId);
        }

        this.emit('set', authorizeId);

        return Object.assign({ authorizeId }, updates);
      });
  }

  delete(authorizeId) {
    return this.collectionReady()
      .then(collection => collection.deleteOne({ authorizeId }))
      .then(() => this.emit('destroy', authorizeId));
  }

  clear() {
    return this.collectionReady().then(collection => collection.drop());
  }

  // TODO: add pagination for this
  listByOwner(ownerDid) {
    return this.collectionReady().then(collection => collection.find({ ownerDid }).toArray());
  }

  // TODO: add pagination for this
  listByApp(appDid) {
    return this.collectionReady().then(collection => collection.find({ appDid }).toArray());
  }

  // TODO: add pagination for this
  listByAgent(agentDid) {
    return this.collectionReady().then(collection => collection.find({ agentDid }).toArray());
  }

  close() {
    if (this.client) {
      this.client.close();
    }
  }
};
