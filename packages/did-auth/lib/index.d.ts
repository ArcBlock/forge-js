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
  genRequestedClaims(T108: _Lib.T109): Promise<any[]>;
  getClaimInfo(T110: _Lib.T111): Promise<any>;
  agreement(T112: _Lib.T111): Promise<_Lib.T114>;
  profile(T115: _Lib.T111): Promise<_Lib.T116>;
  signature(T117: _Lib.T111): Promise<_Lib.T119>;
  holdingOfAsset(T120: _Lib.T111): Promise<_Lib.T121>;
  holdingOfToken(T122: _Lib.T111): Promise<_Lib.T123>;
}
declare class Handlers {
  authenticator: any;
  generator: any;
  storage: any;
  constructor(T124: _Lib.T125);
  /**
   * Attach routes and handlers for authenticator
   *
   * @param {object} { app, action, claims, prefix = '/api' }
   */
  attach(T126: any): void;
}
declare const _Lib: _Lib.T127;
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
  export interface T109 {
    claims: any;
    did: any;
    userPk: any;
    extraParams: any;
  }
  export interface T111 {
    claim: any;
    did: any;
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
    tokenGenerator: any;
    tokenStorage: any;
    authenticator: any;
  }
  export interface T127 {
    Authenticator: typeof Authenticator;
    Handlers: typeof Handlers;
  }
}
export = _Lib;
