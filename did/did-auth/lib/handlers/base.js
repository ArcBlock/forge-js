const { EventEmitter } = require('events');

class BaseHandler extends EventEmitter {
  /**
   * Creates an instance of DID Auth Handlers.
   *
   * @class
   * @param {object} config
   * @param {function} config.tokenGenerator - function to generate action token
   * @param {object} config.tokenStorage - function to generate action token
   * @param {object} config.authenticator - Authenticator instance that can to jwt sign/verify
   * @param {function} [config.onPreAuth=noop] - function called before each auth request send back to app, used to check for permission, throw error to halt the auth process
   */
  constructor({ tokenGenerator, tokenStorage, authenticator, onPreAuth }) {
    super();

    this.authenticator = authenticator;
    this.tokenStorage = tokenStorage;

    // Handle events from Auth Token Storage
    this.tokenStorage.on('create', data => this.emit('created', data));
    this.tokenStorage.on('destroy', token => this.emit('deleted', { token }));
    this.tokenStorage.on('update', async data => {
      const events = {
        scanned: 'scanned',
        succeed: 'succeed',
        forbidden: 'failed',
        error: 'failed',
      };

      if (events[data.status]) {
        const payload = await this.tokenStorage.read(data.token);
        this.emit(events[data.status], payload);
      }
    });

    if (typeof tokenGenerator === 'function') {
      this.tokenGenerator = tokenGenerator;
    } else {
      this.tokenGenerator = () => Date.now().toString();
    }

    if (typeof onPreAuth === 'function') {
      this.onPreAuth = onPreAuth;
    } else {
      this.onPreAuth = () => {};
    }
  }
}

module.exports = BaseHandler;
