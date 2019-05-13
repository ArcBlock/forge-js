// Generate by [js2dts@0.3.2](https://github.com/whxaxes/js2dts#readme)

declare class Authenticator {
  client: any;
  wallet: any;
  appInfo: any;
  baseUrl: any;
  appPk: any;
  constructor(T100: _Lib.T101);
  uri(T102: _Lib.T104): string;
  sign(T105: _Lib.T106): Promise<_Lib.T107>;
  /**
   * Verify a DID auth response sent from ABT Wallet
   *
   * @param {*} data
   * @returns Promise<>
   */
  verify(data: any): Promise<any>;
  genRequestedClaims(claims: any, did: any, userPk: any, extraParams: any): Promise<any[]>;
  agreement(claim: any, did: any, userPk: any, extraParams: any): Promise<_Lib.T109>;
  profile(claim: any, did: any, userPk: any, extraParams: any): Promise<_Lib.T110>;
  signature(claim: any, did: any, userPk: any, extraParams: any): Promise<_Lib.T112>;
}
declare class Handlers {
  authenticator: any;
  generator: any;
  storage: any;
  constructor(T113: _Lib.T114);
  /**
   * Attach routes and handlers for authenticator
   *
   * @param {object} { app, action, claims, prefix = '/api' }
   */
  attach(T115: any): void;
}
declare const _Lib: _Lib.T116;
declare namespace _Lib {
  export interface T101 {
    wallet: any;
    appInfo: any;
    baseUrl: any;
    client: any;
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
    did: any;
    userPk: any;
    claims: any;
    pathname: any;
    extraParams: any;
  }
  export interface T107 {
    appPk: any;
    authInfo: string;
  }
  export interface T108 {
    description: any;
  }
  export interface T109 {
    type: string;
    meta: _Lib.T108;
    uri: any;
    hash: any;
  }
  export interface T110 {
    type: string;
    items: any;
    meta: _Lib.T108;
  }
  export interface T111 {
    description: any;
    typeUrl: string;
  }
  export interface T112 {
    type: string;
    data: any;
    meta: _Lib.T111;
    method: string;
    origin: any;
    sig: string;
  }
  export interface T114 {
    tokenGenerator: any;
    tokenStorage: any;
    authenticator: any;
  }
  export interface T116 {
    Authenticator: typeof Authenticator;
    Handlers: typeof Handlers;
  }
}
export = _Lib;
