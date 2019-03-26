const keystone = require('keystone');

module.exports = class KeystoneStorage {
  constructor() {
    this.model = keystone.list('LoginToken').model;
  }

  create(token, status = 'created') {
    const LoginToken = this.model;
    const item = new LoginToken({ token, status });
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
