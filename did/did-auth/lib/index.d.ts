// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class WalletAuthenticator {
  wallet: any;
  appInfo: any;
  chainInfo: any;
  crossChainInfo: any;
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
   * @prop {string} chainId - application chain id
   * @prop {string} chainHost - graphql endpoint of the application chain
   */

  /**
   * Creates an instance of DID Authenticator.
   *
   * @class
   * @param {object} config
   * @param {Wallet} config.wallet - wallet instance {@see @arcblock/forge-wallet}
   * @param {ApplicationInfo} config.appInfo - application basic info
   * @param {ChainInfo} config.chainInfo - application chain info
   * @param {ChainInfo} [config.crossChainInfo={}] - asset chain info
   * @param {object} config.baseUrl - url to assemble wallet request uri
   * @param {string} [config.tokenKey='_t_'] - query param key for `token`
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
  uri(T102: _Lib.T103): string;
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
   * Sign a auth response that returned to wallet: tell the wallet the appInfo/chainInfo/crossChainInfo
   *
   * @method
   * @param {object} params
   * @param {string} params.token - action token
   * @param {string} params.userDid - decoded from req.query, base58
   * @param {string} params.userPk - decoded from req.query, base58
   * @param {object} params.claims - info required by application to complete the auth
   * @param {object} params.extraParams - extra query params and locale
   * @returns {object} { appPk, authInfo }
   */
  sign(T104: _Lib.T105): any;
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
  genRequestedClaims(T106: _Lib.T107): Promise<any[]>;
  getClaimInfo(T108: _Lib.T109): Promise<any>;
  agreement(T110: _Lib.T109): Promise<_Lib.T112>;
  profile(T113: _Lib.T109): Promise<_Lib.T114>;
  signature(T115: _Lib.T109): Promise<_Lib.T116>;
  holdingOfAsset(T117: _Lib.T109): Promise<_Lib.T118>;
  holdingOfToken(T119: _Lib.T109): Promise<_Lib.T120>;
  authPrincipal(T121: _Lib.T109): Promise<_Lib.T122>;
  swap(T123: _Lib.T109): Promise<_Lib.T124>;
}
declare class AppAuthenticator {
  wallet: any;
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
   * @param {string} locale
   * @returns Promise<boolean>
   */
  verify(data: any, locale?: string): Promise<any>;
}
declare class WalletHandlers {
  authenticator: any;
  tokenGenerator(...args: any[]): any;
  tokenStorage: any;
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
  constructor(T125: _Lib.T126);
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
   * @param {object} config - attach config { app, action, claims, prefix = '/api' }
   * @param {object} config.app - express instance to attach routes to
   * @param {object} config.claims - claims for this request
   * @param {string} config.action - action of this group of routes
   * @param {function} config.onAuth - callback when user completed auth in abt wallet, and data posted back
   * @param {function} [config.onComplete=noop] - callback when the whole auth process is done, action token is removed
   * @param {function} [config.onExpire=noop] - callback when the action token expired
   * @param {function} [config.onError=console.error] - callback when there are some errors
   * @param {string} [config.prefix='/api/did'] - url prefix for this group endpoints
   * @param {string} [config.sessionDidKey='user.did'] - key path to extract session user did from request object
   * @param {string} [config.tokenKey='_t_'] - query param key for `token`
   * @param {string} [config.checksumKey='_cs_'] - query param key for `checksum`
   * @return void
   */
  attach(T127: _Lib.T128): void;
}
declare class AtomicSwapHandlers {
  authenticator: any;
  swapStorage: any;
  tokenStorage: any;
  offerChainHost: string;
  offerChainId: string;
  demandChainHost: string;
  demandChainId: string;
  offerLocktime: number;
  demandLocktime: number;
  tokenGenerator(...args: any[]): any;
  onPreAuth(...args: any[]): any;
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
   */
  constructor(T129: _Lib.T130);
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
   * @param {string} [config.prefix='/api/swap'] - url prefix for this group endpoints
   * @param {string} [config.sessionDidKey='user.did'] - key path to extract session user did from request object
   * @param {string} [config.tokenKey='_t_'] - query param key for `token`
   * @param {string} [config.checksumKey='_cs_'] - query param key for `checksum`
   * @returns void
   */
  attach(T131: _Lib.T128): void;
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
declare const _Lib: _Lib.T133;
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
    token: string;
    userDid: string;
    userPk: string;
    claims: any;
    extraParams: any;
  }
  export interface T107 {
    claims: any;
    userDid: any;
    userPk: any;
    extraParams: any;
  }
  export interface T109 {
    claim: any;
    userDid: any;
    userPk: any;
    extraParams: any;
  }
  export interface T111 {
    description: any;
  }
  export interface T112 {
    type: string;
    meta: _Lib.T111;
    uri: any;
    hash: any;
  }
  export interface T114 {
    type: string;
    items: any;
    meta: _Lib.T111;
  }
  export interface T116 {
    type: string;
    data: string;
    meta: any;
    method: string;
    origin: string;
    sig: string;
    chainInfo: any;
  }
  export interface T118 {
    type: string;
    did_type: string;
    target: any;
    did: string;
    meta: _Lib.T111;
  }
  export interface T120 {
    type: string;
    did_type: string;
    target: number;
    did: string;
    meta: _Lib.T111;
  }
  export interface T122 {
    type: string;
    description: any;
    meta: any;
    target: any;
  }
  export interface T124 {
    type: string;
    meta: any;
    swapId: any;
    offerAssets: any;
    offerToken: any;
    demandAssets: any;
    demandToken: any;
    demandLocktime: any;
    receiver: any;
    demandChain: any;
  }
  export interface T126 {
    tokenGenerator: (...args: any[]) => any;
    tokenStorage: any;
    authenticator: any;
    onPreAuth?: (...args: any[]) => any;
  }
  export interface T128 {
    app: any;
    claims: any;
    action: string;
    onAuth: (...args: any[]) => any;
    onComplete?: (...args: any[]) => any;
    onExpire?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
    prefix?: string;
    sessionDidKey?: string;
    tokenKey?: string;
    checksumKey?: string;
  }
  export interface T130 {
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
  export interface T132 {
    sign: (did: string, sk: string, payload?: any) => string;
    verify: (token: string, pk: string, tolerance?: number, verifyTimestamp?: boolean) => boolean;
    decode: (token: string, payloadOnly?: boolean) => any;
  }
  export interface T133 {
    Authenticator: typeof WalletAuthenticator;
    WalletAuthenticator: typeof WalletAuthenticator;
    AppAuthenticator: typeof AppAuthenticator;
    Handlers: typeof WalletHandlers;
    WalletHandlers: typeof WalletHandlers;
    SwapHandlers: typeof AtomicSwapHandlers;
    AppHandlers: typeof AppHandlers;
    JWT: _Lib.T132;
  }
}
export = _Lib;
