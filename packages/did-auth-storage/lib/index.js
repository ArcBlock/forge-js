/* eslint-disable no-unused-vars */
module.exports = class AuthStorage {
  create(token, status = 'created') {
    throw new Error('AuthStorage.create must be implemented in child class');
  }

  read(token) {
    throw new Error('AuthStorage.read must be implemented in child class');
  }

  update(token, updates) {
    throw new Error('AuthStorage.update must be implemented in child class');
  }

  delete(token) {
    throw new Error('AuthStorage.delete must be implemented in child class');
  }

  exist(token, did) {
    throw new Error('AuthStorage.exist must be implemented in child class');
  }
};
