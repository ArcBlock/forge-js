// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

import { EventEmitter } from 'events';
declare class BaseAuthenticator {}
declare class WalletAuthenticator extends BaseAuthenticator {
  wallet: any;
  appInfo: any;
  chainInfo: any;
  baseUrl: any;
  tokenKey: any;
  appPk: string;
  /**
   * @typedef ApplicationInfo
   * @prop {string} name - application name
   * @prop {string} description - application description
   * @prop {string} icon - application icon/logo url
   * @prop {string} path - application icon/logo url
   * @prop {string} publisher - application did with `did:abt:` prefix
   */

  /**
   * @typedef ChainInfo
   * @prop {string} id - application chain id
   * @prop {string} host - graphql endpoint of the application chain
   */

  /**
   * Creates an instance of DID Authenticator.
   *
   * @class
   * @param {object} config
   * @param {Wallet} config.wallet - wallet instance {@see @arcblock/forge-wallet}
   * @param {ApplicationInfo} config.appInfo - application basic info
   * @param {ChainInfo} config.chainInfo - application chain info
   * @param {object} config.baseUrl - url to assemble wallet request uri
   * @param {string} [config.tokenKey='_t_'] - query param key for `token`
   * @example
   * const ForgeSDK = require('@arcblock/forge-sdk');
   *
   * const wallet = ForgeSDK.Wallet.fromRandom().toJSON();
   * const chainHost = 'https://zinc.abtnetwork.io/api';
   * const chainId = 'zinc-2019-05-17';
   * const auth = new Authenticator({
   *   wallet,
   *   baseUrl: 'http://zinc.abtnetwork.io/webapp',
   *   appInfo: {
   *     name: 'ABT Wallet Demo',
   *     description: 'Demo application to show the potential of ABT Wallet',
   *     icon: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/wallet-round.png',
   *   },
   *   chainInfo: {
   *     host: chainHost,
   *     id: chainId,
   *   },
   * });
   */
  constructor(T100: _Lib.T101);
  /**
   * Generate a deep link url that can be displayed as QRCode for ABT Wallet to consume
   *
   * @method
   * @param {object} params
   * @param {string} params.token - action token
   * @param {string} params.pathname - wallet callback pathname
   * @param {object} params.query - params that should be persisted in wallet callback url
   * @returns {string}
   */
  uri(T102?: _Lib.T103): string;
  /**
   * Compute public url to return to wallet
   *
   * @method
   * @param {string} pathname
   * @param {object} params
   * @returns {string}
   */
  getPublicUrl(pathname: string, params?: any): string;
  /**
   * Sign a plain response, usually on auth success or error
   *
   * @method
   * @param {object} params
   * @param {object} params.response - response
   * @param {string} params.error - error message
   * @returns {object} { appPk, authInfo }
   */
  signResponse(T104: _Lib.T105): any;
  /**
   * Sign a auth response that returned to wallet: tell the wallet the appInfo/chainInfo
   *
   * @method
   * @param {object} params
   * @param {object} params.claims - info required by application to complete the auth
   * @param {object} params.extraParams - extra query params and locale
   * @param {string} params.context.token - action token
   * @param {string} params.context.userDid - decoded from req.query, base58
   * @param {string} params.context.userPk - decoded from req.query, base58
   * @param {string} params.context.walletOS - wallet os from user-agent
   * @param {string} params.context.walletVersion - wallet version from user-agent
   * @param {string} params.context.sessionDid - did of logged-in user
   * @returns {object} { appPk, authInfo }
   */
  sign(T106: _Lib.T107): any;
  /**
   * Verify a DID auth response sent from ABT Wallet
   *
   * @method
   * @param {object} data
   * @param {string} [locale=en]
   * @param {boolean} [enforceTimestamp=true]
   * @returns Promise<boolean>
   */
  verify(data: any, locale?: string, enforceTimestamp?: boolean): Promise<any>;
  genRequestedClaims(T108: _Lib.T109): Promise<any[]>;
  getClaimInfo(T110: _Lib.T111): Promise<any>;
  agreement(T112: _Lib.T111): Promise<_Lib.T113>;
  profile(T114: _Lib.T111): Promise<_Lib.T115>;
  signature(T116: _Lib.T111): Promise<_Lib.T117>;
  holdingOfAsset(T118: _Lib.T111): Promise<_Lib.T119>;
  authPrincipal(T120: _Lib.T111): Promise<_Lib.T121>;
  swap(T122: _Lib.T111): Promise<_Lib.T123>;
}
declare class AppAuthenticator extends BaseAuthenticator {
  wallet: any;
  fieldPk: string;
  fieldInfo: string;
  /**
   * Creates an instance of DID Authenticator.
   *
   * @class
   * @param {Wallet} wallet - wallet instance {@see @arcblock/forge-wallet}
   */
  constructor(wallet: any);
  /**
   * Generate and sign a jwt token, used to inter-application-communication
   *
   * @method
   * @param {object} payload - data to be included before signing
   * @returns {object} { appPk, appInfo }
   */
  sign(payload: any): any;
  /**
   * Verify a jwt token signed by another application, used for inter-application communication
   *
   * @method
   * @param {object} data
   * @param {string} [locale=en]
   * @param {boolean} [enforceTimestamp=true]
   * @returns Promise<boolean>
   */
  verify(data: any, locale?: string, enforceTimestamp?: boolean): Promise<any>;
}
declare class BaseHandler extends EventEmitter {
  authenticator: any;
  tokenStorage: any;
  tokenGenerator(...args: any[]): any;
  onPreAuth(...args: any[]): any;
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
  constructor(T124: _Lib.T125);
}
/**
 * Events that are emitted during an did-auth process
 *
 *  - scanned: when the qrcode is scanned by wallet
 *  - succeed: when authentication complete
 *  - error: when something goes wrong
 *
 * @class WalletHandlers
 * @extends {EventEmitter}
 */
declare class WalletHandlers extends BaseHandler {
  options: _Lib.T129 & _Lib.T127;
  /**
   * Creates an instance of DID Auth Handlers.
   *
   * @class
   * @param {object} config
   * @param {function} config.tokenGenerator - function to generate action token
   * @param {object} config.tokenStorage - function to generate action token
   * @param {object} config.authenticator - Authenticator instance that can to jwt sign/verify
   * @param {function} [config.onPreAuth=noop] - function called before each auth request send back to app, used to check for permission, throw error to halt the auth process
   * @param {object} [config.options={}] - custom options to define all handlers attached
   * @param {string} [config.options.prefix='/api/did'] - url prefix for this group endpoints
   * @param {string} [config.options.sessionDidKey='user.did'] - key path to extract session user did from request object
   * @param {string} [config.options.tokenKey='_t_'] - query param key for `token`
   */
  constructor(T126: _Lib.T128);
  /**
   * Attach routes and handlers for authenticator
   * Now express app have route handlers attached to the following url
   * - `GET /api/did/{action}/token` create new token
   * - `GET /api/did/{action}/status` check for token status
   * - `GET /api/did/{action}/timeout` expire a token
   * - `GET /api/did/{action}/auth` create auth response
   * - `POST /api/did/{action}/auth` process payment request
   *
   * @method
   * @param {object} config
   * @param {object} config.app - express instance to attach routes to
   * @param {object} config.claims - claims for this request
   * @param {string} config.action - action of this group of routes
   * @param {function} config.onAuth - callback when user completed auth in abt wallet, and data posted back
   * @param {function} [config.onComplete=noop] - callback when the whole auth process is done, action token is removed
   * @param {function} [config.onExpire=noop] - callback when the action token expired
   * @param {function} [config.onError=console.error] - callback when there are some errors
   * @param {boolean|string|did} [config.authPrincipal=true] - whether should we do auth principal claim first
   * @return void
   */
  attach(T130: _Lib.T131): void;
}
declare class AtomicSwapHandlers extends BaseHandler {
  swapStorage: any;
  offerChainHost: string;
  offerChainId: string;
  demandChainHost: string;
  demandChainId: string;
  offerLocktime: number;
  demandLocktime: number;
  options: any;
  /**
   * Creates an instance of atomic swap handlers.
   *
   * @class
   * @param {object} config
   * @param {object} config.authenticator - Authenticator instance that can to jwt sign/verify
   * @param {function} config.tokenGenerator - function to generate action token
   * @param {object} config.swapStorage - storage that contains swap information
   * @param {object} config.tokenStorage - storage that contains action token information
   * @param {string} config.offerChainHost - offer chain endpoint
   * @param {string} config.demandChainHost - demand chain endpoint
   * @param {string} config.offerChainId - offer chain endpoint
   * @param {string} config.demandChainId - demand chain endpoint
   * @param {number} config.offerLocktime - num of blocks that will be locked before app chain swap can be revoked
   * @param {number} config.demandLocktime - num of blocks that will be locked before asset chain swap can be revoked
   * @param {function} [config.onPreAuth=noop] - function called before each auth request send back to app, used to check for permission, throw error to halt the auth process
   * @param {string} [config.options.prefix='/api/swap'] - url prefix for this group endpoints
   * @param {string} [config.options.sessionDidKey='user.did'] - key path to extract session user did from request object
   * @param {string} [config.options.tokenKey='_t_'] - query param key for `token`
   * @param {boolean} [config.options.signedResponse=false] - whether should we return signed response
   */
  constructor(T132: _Lib.T133);
  /**
   * Create an swap placeholder, which must be finalized before actually doing the swap
   *
   * @method
   * @param {object} payload
   * @returns {Promise<object>}
   */
  start(payload?: any): Promise<any>;
  /**
   * Attach routes and handlers for authenticator
   * Now express app have route handlers attached to the following url
   * Browser
   *  - `GET /api/did/{action}/token` create new token
   *  - `GET /api/did/{action}/status` check for token status
   *  - `GET /api/did/{action}/timeout` expire a token
   * Wallet
   *  - `GET /api/did/{action}/auth` create auth response
   *  - `POST /api/did/{action}/auth` process payment request
   *  - `GET /api/did/{action}/retrieve` check payment
   *  - `POST /api/did/{action}/retrieve` submit
   *
   * @method
   * @param {object} config - attach config { app, action, claims, prefix = '/api' }
   * @param {object} config.app - express instance to attach routes to
   * @param {object} config.claims - claims for this request
   * @param {string} config.action - action of this group of routes
   * @param {function} config.onAuth - callback when user completed auth in abt wallet, and data posted back
   * @param {function} [config.onComplete=noop] - callback when the whole auth process is done, action token is removed
   * @param {function} [config.onExpire=noop] - callback when the action token expired
   * @param {function} [config.onError=console.error] - callback when there are some errors
   * @param {boolean|string|did} [config.authPrincipal=true] - whether should we do auth principal claim first
   * @returns void
   */
  attach(T134: _Lib.T131): void;
}
declare class AppHandlers {
  authenticator: any;
  /**
   * Creates an instance of Application DID Auth handler
   *
   * @class
   * @param {AppAuthenticator} authenticator - wallet instance {@see @arcblock/forge-wallet}
   */
  constructor(authenticator: any);
  attach(): (req: any, res: any, next: any) => void[];
  getSecureResponseHandler(): (req: any, res: any, next: any) => void;
  getRequestValidateHandler(): (req: any, res: any, next: any) => Promise<void>;
}
/**
 * Authenticator that can be used to sign did-auth payment on-behalf of another application
 * Can be used to build centralized platform services that aims to ease the life of developers
 *
 * @class AgentAuthenticator
 * @extends {WalletAuthenticator}
 */
declare class AgentAuthenticator extends WalletAuthenticator {
  /**
   * Sign a auth response that returned to wallet: tell the wallet the appInfo/chainInfo
   *
   * @method
   * @param {object} params
   * @param {string} params.context.token - action token
   * @param {string} params.context.userDid - decoded from req.query, base58
   * @param {string} params.context.userPk - decoded from req.query, base58
   * @param {string} params.context.walletOS - wallet os from user-agent
   * @param {string} params.context.walletVersion - wallet version from user-agent
   * @param {string} params.context.sessionDid - did of logged-in user
   * @param {object} params.claims - info required by application to complete the auth
   * @param {object} params.appInfo - which application authorized me to sign
   * @param {object} params.authorizer - application pk and did
   * @param {object} params.verifiableClaims - what did the application authorized me to request from user
   * @param {object} params.extraParams - extra query params and locale
   * @returns {object} { appPk, authInfo }
   */
  sign(T135: any): any;
}
declare class AgentWalletHandlers extends WalletHandlers {
  agentStorage: any;
  /**
   * Creates an instance of DID Auth Handlers.
   *
   * @class
   * @param {object} config
   * @param {function} config.tokenGenerator - function to generate action token
   * @param {object} config.tokenStorage - did auth token storage
   * @param {object} config.agentStorage - agent auth storage
   * @param {object} config.authenticator - Authenticator instance that can to jwt sign/verify
   * @param {function} [config.onPreAuth=noop] - function called before each auth request send back to app, used to check for permission, throw error to halt the auth process
   * @param {object} [config.options={}] - custom options to define all handlers attached
   * @param {string} [config.options.prefix='/api/agent/:authorizeId'] - url prefix for this group endpoints
   * @param {string} [config.options.sessionDidKey='user.did'] - key path to extract session user did from request object
   * @param {string} [config.options.tokenKey='_t_'] - query param key for `token`
   */
  constructor(T136: _Lib.T137);
  /**
   * Attach routes and handlers for authenticator
   * Now express app have route handlers attached to the following url
   * - `GET /api/agent/:authorizeId/{action}/token` create new token
   * - `GET /api/agent/:authorizeId/{action}/status` check for token status
   * - `GET /api/agent/:authorizeId/{action}/timeout` expire a token
   * - `GET /api/agent/:authorizeId/{action}/auth` create auth response
   * - `POST /api/agent/:authorizeId/{action}/auth` process payment request
   *
   * @method
   * @param {object} config
   * @param {object} config.app - express instance to attach routes to
   * @param {object} config.claims - claims for this request
   * @param {string} config.action - action of this group of routes
   * @param {function} config.onAuth - callback when user completed auth in abt wallet, and data posted back
   * @param {function} [config.onComplete=noop] - callback when the whole auth process is done, action token is removed
   * @param {function} [config.onExpire=noop] - callback when the action token expired
   * @param {function} [config.onError=console.error] - callback when there are some errors
   * @param {boolean|string|did} [config.authPrincipal=true] - whether should we do auth principal claim first
   * @return void
   */
  attach(T138: _Lib.T131): void;
}
declare const _Lib: _Lib.T142;
declare namespace _Lib {
  export interface T101 {
    wallet: any;
  }
  export interface T103 {
    token: string;
    pathname: string;
    query: any;
  }
  export interface T105 {
    response: any;
    error: string;
  }
  export interface T107 {
    claims: any;
    extraParams: any;
  }
  export interface T109 {
    claims: any;
    context: any;
    extraParams: any;
  }
  export interface T111 {
    claim: any;
    context: any;
    extraParams: any;
  }
  export interface T113 {
    type: string;
    description: any;
    uri: any;
    hash: any;
    chainInfo: any;
    meta: any;
  }
  export interface T115 {
    type: string;
    items: any;
    description: any;
    chainInfo: any;
    meta: any;
  }
  export interface T117 {
    type: string;
    description: any;
    origin: string;
    typeUrl: any;
    method: string;
    digest: any;
    sig: string;
    chainInfo: any;
    meta: any;
  }
  export interface T119 {
    type: string;
    description: any;
    chainInfo: any;
    target: any;
    meta: any;
  }
  export interface T121 {
    type: string;
    description: any;
    meta: any;
    target: any;
    targetType: any;
    declareParams: any;
    chainInfo: any;
  }
  export interface T123 {
    type: string;
    description: any;
    swapId: any;
    offerAssets: any;
    offerToken: any;
    demandAssets: any;
    demandToken: any;
    demandLocktime: any;
    receiver: any;
    demandChain: any;
    offerChain: any;
    meta: any;
  }
  export interface T125 {
    tokenGenerator: (...args: any[]) => any;
    tokenStorage: any;
    authenticator: any;
    onPreAuth?: (...args: any[]) => any;
  }
  export interface T127 {
    prefix?: string;
    sessionDidKey?: string;
    tokenKey?: string;
  }
  export interface T128 {
    tokenGenerator: (...args: any[]) => any;
    tokenStorage: any;
    authenticator: any;
    onPreAuth?: (...args: any[]) => any;
    options?: _Lib.T127;
  }
  export interface T129 {
    prefix: string;
    sessionDidKey: string;
    tokenKey: string;
  }
  export interface T131 {
    app: any;
    claims: any;
    action: string;
    onAuth: (...args: any[]) => any;
    onComplete?: (...args: any[]) => any;
    onExpire?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
    authPrincipal?: any;
  }
  export interface T133 {
    authenticator: any;
    tokenGenerator: (...args: any[]) => any;
    swapStorage: any;
    tokenStorage: any;
    offerChainHost: string;
    demandChainHost: string;
    offerChainId: string;
    demandChainId: string;
    offerLocktime: number;
    demandLocktime: number;
    onPreAuth?: (...args: any[]) => any;
  }
  export interface T137 {
    tokenGenerator: (...args: any[]) => any;
    tokenStorage: any;
    agentStorage: any;
    authenticator: any;
    onPreAuth?: (...args: any[]) => any;
    options?: _Lib.T127;
  }
  export interface T140 {
    tolerance?: number;
    enforceTimestamp?: boolean;
    signerKey?: string;
  }
  export interface T141 {
    sign: (signer: string, sk: string, payload?: any, doSign?: boolean) => string;
    verify: (token: string, signerPk: string, T139?: _Lib.T140) => boolean;
    decode: (token: string, payloadOnly?: boolean) => any;
  }
  export interface T142 {
    WalletAuthenticator: typeof WalletAuthenticator;
    AppAuthenticator: typeof AppAuthenticator;
    WalletHandlers: typeof WalletHandlers;
    SwapHandlers: typeof AtomicSwapHandlers;
    AppHandlers: typeof AppHandlers;
    AgentAuthenticator: typeof AgentAuthenticator;
    AgentWalletHandlers: typeof AgentWalletHandlers;
    JWT: _Lib.T141;
  }
}
export = _Lib;
