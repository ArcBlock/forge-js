// Generate by [js2dts@0.3.2](https://github.com/whxaxes/js2dts#readme)

declare const _Lib: _Lib.T100;
declare namespace _Lib {
  export interface T100 {
    types: T107;
    toStrictHex: (hex: string, length: number) => string;
    fromAppDID: (appDID: string, seed: string, type?: any, index?: number) => any;
    fromSecretKey: (sk: string, type: any) => any;
    fromPublicKey: (pk: string, type: any) => any;
    toTypeInfo: (did: string, returnString?: boolean) => any;
    fromTypeInfo: (type: any) => string;
    isFromPublicKey: (did: string, pk: string) => boolean;
    isValid: (did: string) => boolean;
    jwtSign: (did: string, sk: string, payload?: any) => string;
    jwtVerify: (token: string, pk: string) => boolean;
    jwtDecode: (token: any, payloadOnly?: boolean) => any;
  }
}
export = _Lib;
