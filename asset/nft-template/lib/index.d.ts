// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare function createCertSvg(T100: _Lib.T101): string;
declare function createTicketSvg(T102: _Lib.T101): string;
declare const _Lib: _Lib.T105;
declare namespace _Lib {
  export interface T101 {
    data: any;
  }
  export interface T104 {
    x: any;
    y: any;
    size: any;
    anchor: string;
    color: string;
    text: string;
  }
  export interface T105 {
    createCertSvg: typeof createCertSvg;
    createTicketSvg: typeof createTicketSvg;
    createZippedSvgDisplay: (svg: any) => string;
    insertText: (T103: _Lib.T104) => string;
    createSvgDisplay: (svg: any, text: any) => string;
  }
}
export = _Lib;
