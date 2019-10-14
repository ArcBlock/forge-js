const StorageInterface = require('@arcblock/did-auth-storage');

module.exports = class FirebaseStorage extends StorageInterface {
  constructor(config) {
    super(config);

    const { database = null, tokens = 'did_auth_tokens' } = config;

    if (database && typeof database === 'object') {
      if (database.ref) {
        this.database = database;
      } else if (database.database) {
        this.database = database.database();
      } else {
        throw new Error('Invalid Firebase reference');
      }
    } else {
      throw new Error('Invalid Firebase database argument');
    }

    this.tokens = this.cleanRef(tokens);
  }

  /**
   * Replace disallowed characters in a Firebase reference key.
   *
   * @param  {String} str A child reference key
   * @return {String}     A valid child reference key
   */
  cleanRef(str) {
    const key = str.replace(/\.|\$|#|\[|\]|\//g, '_');
    return this.database.ref(this.tokens).child(key);
  }

  create(token, status = 'created') {
    return new Promise((resolve, reject) => {
      this.cleanRef(token)
        .set({ token, status })
        .then(() => {
          resolve({ token, status });
        })
        .catch(reject);
    });
  }

  read(token) {
    return new Promise((resolve, reject) => {
      this.cleanRef(token)
        .once('value')
        .then(snapshot => {
          if (!snapshot.exists()) {
            return resolve(null);
          }

          return resolve(snapshot.val());
        })
        .catch(reject);
    });
  }

  update(token, updates) {
    return new Promise((resolve, reject) => {
      this.cleanRef(token)
        .update(updates)
        .then(() => {
          resolve(Object.assign({ token }, updates));
        })
        .catch(reject);
    });
  }

  delete(token) {
    return new Promise((resolve, reject) => {
      this.cleanRef(token)
        .remove()
        .then(() => {
          resolve(true);
        })
        .catch(reject);
    });
  }

  exist(token, did) {
    return new Promise((resolve, reject) => {
      this.cleanRef(token)
        .once('value')
        .then(snapshot => {
          if (!snapshot.exists()) {
            return resolve(false);
          }

          const value = snapshot.val();
          if (value && value.did === did) {
            return resolve(true);
          }

          return resolve(false);
        })
        .catch(reject);
    });
  }
};
