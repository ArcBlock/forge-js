declare const _Lib: _Lib.T100;
declare namespace _Lib {
  export interface T100 {
    isBN: (object: any) => boolean;
    isBigNumber: (object: any) => boolean;
    utf8ToHex: (str: string) => string;
    hexToUtf8: (hex: string) => string;
    numberToHex: (value: any) => string;
    hexToNumber: (value: any) => number;
    hexToNumberString: (value: any) => string;
    numberToBN: any;
    isHex: (hex: string) => boolean;
    isHexStrict: (hex: string) => boolean;
    hexToBytes: (hex: string) => any[];
    bytesToHex: (bytes: any[]) => string;
    toHex: (value: any, returnType: boolean) => string;
    numberToString: (arg: any) => any;
    fromArc: (input: any, decimal?: number, optionsInput: any) => string;
    toArc: (input: any, decimal?: number) => any;
    toBN: (number: any) => any;
  }
}
export = _Lib;
