const WalletAuthenticator = require('./authenticator/wallet');
const AppAuthenticator = require('./authenticator/app');
const WalletHandlers = require('./handlers/wallet');
const AppHandlers = require('./handlers/app');
const JWT = require('./jwt');

module.exports = {
  Authenticator: WalletAuthenticator,
  WalletAuthenticator,
  AppAuthenticator,
  Handlers: WalletHandlers,
  WalletHandlers,
  AppHandlers,
  JWT,
};
