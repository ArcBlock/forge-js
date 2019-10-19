/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:handlers:app`);

class AppHandlers {
  /**
   * Creates an instance of Application DID Auth handler
   *
   * @class
   * @param {AppAuthenticator} authenticator - wallet instance {@see @arcblock/forge-wallet}
   */
  constructor(authenticator) {
    this.authenticator = authenticator;
  }

  attach() {
    return [this.getSecureResponseHandler(), this.getRequestValidateHandler()];
  }

  getSecureResponseHandler() {
    return (req, res, next) => {
      if (!res.__decorated__) {
        res.jsonSecure = data => {
          res.json(this.authenticator.sign(data));
        };
        res.__decorated__ = true;
      }

      next();
    };
  }

  getRequestValidateHandler() {
    return async (req, res, next) => {
      const params = Object.assign({}, req.body, req.query, req.params);
      const { appPk, appInfo } = params;
      debug('deposits.validate.start', params);

      if (!appPk) {
        res.jsonSecure({ error: 'appPk not exist in request payload' });
        return;
      }

      if (!appInfo) {
        res.jsonSecure({ error: 'appInfo not exist in request payload' });
        return;
      }

      try {
        const payload = await this.authenticator.verify(params);
        req.payload = payload;
        req.appPk = appPk;

        next();
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('payload jwt verify error', err);
        res.jsonSecure({ error: 'request payload not correctly signed' });
      }
    };
  }
}

module.exports = AppHandlers;
