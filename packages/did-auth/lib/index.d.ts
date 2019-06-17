// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class WalletAuthenticator {
  wallet: any;
  appInfo: any;
  chainInfo: any;
  crossChainInfo: any;
  baseUrl: any;
  tokenKey: any;
  appPk: any;
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
   * @prop {string} chainToken - token symbol
   * @prop {string} decimals - token decimals
   */

  /**
   * Creates an instance of DID Authenticator.
   *
   * @public
   * @param {object} config
   * @param {Wallet} config.wallet - wallet instance {@see @arcblock/forge-wallet}
   * @param {ApplicationInfo} config.appInfo - application basic info
   * @param {ChainInfo} config.chainInfo - application chain info
   * @param {ChainInfo} [config.crossChainInfo={}] - asset chain info
   * @param {object} config.baseUrl - url to assemble wallet request uri
   * @param {string} [config.tokenKey='_t_'] - query param key for `token`
   */
  constructor(T100: _Lib.T101);
  uri(T102: _Lib.T104): string;
  sign(T105: _Lib.T106): Promise<_Lib.T107>;
  /**
   * Verify a DID auth response sent from ABT Wallet
   *
   * @param {object} data
   * @param {string} locale
   * @returns Promise<>
   */
  verify(data: any, locale?: string): Promise<any>;
  genRequestedClaims(T108: _Lib.T109): Promise<any[]>;
  getClaimInfo(T110: _Lib.T111): Promise<any>;
  agreement(T112: _Lib.T111): Promise<_Lib.T114>;
  profile(T115: _Lib.T111): Promise<_Lib.T116>;
  signature(T117: _Lib.T111): Promise<_Lib.T119>;
  holdingOfAsset(T120: _Lib.T111): Promise<_Lib.T121>;
  holdingOfToken(T122: _Lib.T111): Promise<_Lib.T123>;
}
declare class AppAuthenticator {
  wallet: any;
  /**
   * Creates an instance of DID Authenticator.
   *
   * @public
   * @param {Wallet} wallet - wallet instance {@see @arcblock/forge-wallet}
   */
  constructor(wallet: any);
  /**
   * Generate and sign a jwt token, used to inter-application-communication
   *
   * @public
   * @param {object} payload - data to be included before signing
   * @returns {object} { appPk, appInfo }
   */
  sign(payload: any): any;
  /**
   * Verify a jwt token signed by another application, used for inter-application communication
   *
   * @param {object} data
   * @param {string} locale
   * @returns Promise<>
   */
  verify(data: any, locale?: string): Promise<any>;
}
declare class WalletHandlers {
  authenticator: any;
  generator(...args: any[]): any;
  storage: any;
  onPreAuth(...args: any[]): any;
  /**
   * Creates an instance of DID Auth Handlers.
   *
   * @param {object} config
   * @param {function} config.tokenGenerator - function to generate action token
   * @param {object} config.tokenStorage - function to generate action token
   * @param {object} config.authenticator - Authenticator instance that can to jwt sign/verify
   * @param {function} [config.onPreAuth=noop] - function called before each auth request send back to app, used to check for permission, throw error to halt the auth process
   */
  constructor(T124: _Lib.T125);
  /**
   * Attach routes and handlers for authenticator
   *
   * @param {object} config - attach config { app, action, claims, prefix = '/api' }
   * @param {object} config.app - express instance to attach routes to
   * @param {object} config.claims - claims for this request
   * @param {string} config.action - action of this group of routes
   * @param {function} config.onAuth - callback when user completed auth in abt wallet, and data posted back
   * @param {function} [config.onComplete=noop] - callback when the whole auth process is done, action token is removed
   * @param {function} [config.onExpire=noop] - callback when the action token expired
   * @param {function} [config.onError=console.error] - callback when there are some errors
   * @param {string} [config.action='/api/did'] - url prefix for this group endpoints
   * @param {string} [config.sessionDidKey='user.did'] - key path to extract session user did from request object
   * @param {string} [config.tokenKey='_t_'] - query param key for `token`
   * @param {string} [config.checksumKey='_cs_'] - query param key for `checksum`
   * @return void
   */
  attach(T126: _Lib.T127): void;
}
declare class AppHandlers {
  authenticator: any;
  /**
   * Creates an instance of Application DID Auth handler
   *
   * @public
   * @param {AppAuthenticator} authenticator - wallet instance {@see @arcblock/forge-wallet}
   */
  constructor(authenticator: any);
  attach(): (req: any, res: any, next: any) => void[];
  getSecureResponseHandler(): (req: any, res: any, next: any) => void;
  getRequestValidateHandler(): (req: any, res: any, next: any) => Promise<void>;
}
declare const _Lib: _Lib.T129;
declare namespace _Lib {
  export interface T101 {
    wallet: any;
  }
  export interface T103 {
    [key: string]: any;
  }
  export interface T104 {
    token: any;
    pathname: any;
    query?: _Lib.T103;
  }
  export interface T106 {
    token: any;
    userDid: any;
    userPk: any;
    claims: any;
    pathname: any;
    extraParams: any;
  }
  export interface T107 {
    appPk: any;
    authInfo: string;
  }
  export interface T109 {
    claims: any;
    userDid: any;
    userPk: any;
    extraParams: any;
  }
  export interface T111 {
    claim: any;
    userDid: any;
    userPk: any;
    extraParams: any;
  }
  export interface T113 {
    description: any;
  }
  export interface T114 {
    type: string;
    meta: _Lib.T113;
    uri: any;
    hash: any;
  }
  export interface T116 {
    type: string;
    items: any;
    meta: _Lib.T113;
  }
  export interface T118 {
    description: any;
    typeUrl: string;
  }
  export interface T119 {
    type: string;
    data: any;
    meta: _Lib.T118;
    method: string;
    origin: any;
    sig: string;
  }
  export interface T121 {
    type: string;
    did_type: string;
    target: any;
    did: string;
    meta: _Lib.T113;
  }
  export interface T123 {
    type: string;
    did_type: string;
    target: number;
    did: string;
    meta: _Lib.T113;
  }
  export interface T125 {
    tokenGenerator: (...args: any[]) => any;
    tokenStorage: any;
    authenticator: any;
    onPreAuth?: (...args: any[]) => any;
  }
  export interface T127 {
    app: any;
    claims: any;
    action?: string;
    onAuth: (...args: any[]) => any;
    onComplete?: (...args: any[]) => any;
    onExpire?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
    sessionDidKey?: string;
    tokenKey?: string;
    checksumKey?: string;
  }
  export interface T128 {
    sign: (did: string, sk: string, payload?: any) => string;
    verify: (token: string, pk: string, tolerance?: number, verifyTimestamp?: boolean) => boolean;
    decode: (token: string, payloadOnly?: boolean) => any;
  }
  export interface T129 {
    Authenticator: typeof WalletAuthenticator;
    WalletAuthenticator: typeof WalletAuthenticator;
    AppAuthenticator: typeof AppAuthenticator;
    Handlers: typeof WalletHandlers;
    WalletHandlers: typeof WalletHandlers;
    AppHandlers: typeof AppHandlers;
    JWT: _Lib.T128;
  }
}
export = _Lib;
