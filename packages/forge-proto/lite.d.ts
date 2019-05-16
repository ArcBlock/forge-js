// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare const _ArcblockForgeProto: _ArcblockForgeProto.T101;
declare namespace _ArcblockForgeProto {
  export interface T100 {
    [key: string]: any;
  }
  export interface T101 {
    /**
     * All enum types and its values (number format), can be accessed from width: enums.KEY_TYPE.ED25519
     *
     * @member
     * @public
     * @static
     * @readonly
     */
    enums: _ArcblockForgeProto.T100;
    /**
     * All enum types and its values (human readable string format), can be accessed from width: messages.KEY_TYPE.ED25519
     *
     * @member
     * @public
     * @static
     * @readonly
     */
    messages: _ArcblockForgeProto.T100;
    transactions: any;
    stakes: any;
    rpcs: _ArcblockForgeProto.T100;
    compactSpec: (object: any) => any;
    getMessageType: (type: string) => any;
    typeUrls: _ArcblockForgeProto.T100;
    toTypeUrl: (type: string) => string;
    fromTypeUrl: (url: string) => string;
  }
}
export = _ArcblockForgeProto;
