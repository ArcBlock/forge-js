const WalletAuthenticator = require('./authenticator/wallet');
const AgentAuthenticator = require('./authenticator/agent');
const AppAuthenticator = require('./authenticator/app');
const WalletHandlers = require('./handlers/wallet');
const SwapHandlers = require('./handlers/swap');
const AgentWalletHandlers = require('./handlers/agent/wallet');
// const AgentSwapHandlers = require('./handlers/agent/swap');
const AppHandlers = require('./handlers/app');
const JWT = require('./jwt');

module.exports = {
  WalletAuthenticator,
  AppAuthenticator,
  WalletHandlers,
  SwapHandlers,
  AppHandlers,
  AgentAuthenticator,
  AgentWalletHandlers,
  // AgentSwapHandlers,
  JWT,
};
