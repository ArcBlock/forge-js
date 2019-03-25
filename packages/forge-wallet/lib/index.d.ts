// Generate by [js2dts@0.3.2](https://github.com/whxaxes/js2dts#readme)

declare function fromSecretKey(sk: any, _type: any): _Lib.T102;
declare function fromPublicKey(pk: any, _type: any): _Lib.T102;
declare function fromRandom(_type: any): _Lib.T102;
declare function fromAddress(address: any): _Lib.T102;
declare function fromJSON(json: any): _Lib.T102;
declare function Wallet(keyPair: any, type: any): _Lib.T102;
declare function WalletType(type: any): _Lib.T103;
declare const _Lib: _Lib.T104;
declare namespace _Lib {
  export interface T100 {
    [key: string]: any;
  }
  export interface T101 {
    type: _Lib.T100;
    sk: any;
    pk: any;
    address: any;
  }
  export interface T102 {
    type: any;
    secretKey: any;
    publicKey: any;
    sign(data: any): any;
    verify(data: any, signature: any): any;
    toAddress(): any;
    toJSON(): _Lib.T101;
  }
  export interface T103 {
    role: any;
    pk: any;
    hash: any;
    address: number;
  }
  export interface T104 {
    fromSecretKey: typeof fromSecretKey;
    fromPublicKey: typeof fromPublicKey;
    fromRandom: typeof fromRandom;
    fromAddress: typeof fromAddress;
    fromDID: typeof fromAddress;
    fromJSON: typeof fromJSON;
    Wallet: typeof Wallet;
    WalletType: typeof WalletType;
  }
}
export = _Lib;
