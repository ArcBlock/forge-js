const StorageInterface = require('@arcblock/did-auth-storage');
const keystone = require('keystone');

module.exports = class KeystoneStorage extends StorageInterface {
  /**
   * Creates an instance of AuthStorage.
   *
   * @class
   * @param {object} options
   */
  static init() {
    const types = keystone.Field.Types;
    const DidAuthToken = new keystone.List('DidAuthToken', {
      label: '登录状态',
      plural: '登录状态',
      track: true,
      noedit: true,
      nodelete: true,
      map: { name: 'token' },
      searchFields: 'did token',
      schema: { collection: 'did_auth_tokens' },
    });

    DidAuthToken.add({
      token: {
        type: types.Text,
        label: 'TOKEN',
        unique: true,
        index: true,
      },
      did: {
        type: types.Text,
        label: 'DID',
        index: true,
      },
      uid: {
        type: types.Text,
        label: 'UID',
        index: true,
      },
      status: {
        type: types.Select,
        options: 'created, scanned, succeed, failed, completed',
        label: '状态',
        default: 'created',
      },
    });

    DidAuthToken.defaultColumns = 'token, did, uid, status, createdAt';
    DidAuthToken.register();
  }

  constructor() {
    super();
    this.model = keystone.list('DidAuthToken').model;
  }

  create(token, status = 'created') {
    const DidAuthToken = this.model;
    const item = new DidAuthToken({ token, status });
    return item.save();
  }

  read(token) {
    return this.model.findOne({ token });
  }

  update(token, updates) {
    return this.model.findOneAndUpdate({ token }, updates);
  }

  delete(token) {
    return this.model.remove({ token });
  }

  exist(token, did) {
    return this.model.findOne({ token, did });
  }
};
