// Generate by [js2dts@0.3.2](https://github.com/whxaxes/js2dts#readme)

/**
 * Format an message from RPC to UI friendly
 *
 * @param {*} type
 * @param {*} data
 * @returns object [almost same structure as input]
 */
declare function formatMessage(type: any, data: any): any;
/**
 * Create an protobuf encoded Typed message with specified data, ready to send to rpc server
 *
 * @param {*} type
 * @param {*} params
 * @returns Message
 */
declare function createMessage(type: any, params: any): any;
/**
 * Generated a fake message for a type, the message can be RPC request/response
 *
 * @param {String} type
 */
declare function fakeMessage(type: string): any;
/**
 * Decode an google.protobuf.Any%{ typeUrl, value } => { type, value }
 *
 * @param {*} data encoded data object
 * @returns Object%{type, value}
 */
declare function decodeAny(data: any): any;
/**
 * Encode { type, value } => google.protobuf.Any%{ typeUrl, value }
 * Does nothing on already encoded message
 *
 * @param {*} data
 * @returns google.protobuf.Any
 */
declare function encodeAny(data: any): any;
/**
 * Convert an { seconds, nanos } | date-string to google.protobuf.Timestamp object
 *
 * @param {String|Object} value
 * @returns google.protobuf.Timestamp
 */
declare function encodeTimestamp(value: any): any;
/**
 * Decode google.protobuf.Timestamp message to ISO Date String
 *
 * FIXME: node strictly equal because we rounded the `nanos` field
 *
 * @param {*} data
 * @returns String
 */
declare function decodeTimestamp(data: any): string;
/**
 * Encode BigUint and BigSint types defined in forge-sdk, double encoding is avoided
 *
 * @param {*} value
 * @param {*} type
 * @returns Message
 */
declare function encodeBigInt(value: any, type: any): any;
/**
 * Convert BigUint and BigSint to string representation of numbers
 *
 * @link https://stackoverflow.com/questions/23948278/how-to-convert-byte-array-into-a-signed-big-integer-in-javascript
 * @param {*} data
 * @returns String
 */
declare function decodeBigInt(data: any): string;
/**
 * Attach an $format method to rpc response
 *
 * @param {Object} data
 * @param {String} type
 * @memberof Client
 */
declare function attachFormatFn(type: string, data: any, key?: string): void;
/**
 * Attach an example method to
 *
 * @param {Object} data
 * @param {String} type
 * @memberof Client
 */
declare function attachExampleFn(type: string, host: any, key: any): void;
declare const ForgeMessage: ForgeMessage.T100;
declare namespace ForgeMessage {
  export interface T100 {
    formatMessage: typeof formatMessage;
    createMessage: typeof createMessage;
    fakeMessage: typeof fakeMessage;
    decodeAny: typeof decodeAny;
    encodeAny: typeof encodeAny;
    encodeTimestamp: typeof encodeTimestamp;
    decodeTimestamp: typeof decodeTimestamp;
    encodeBigInt: typeof encodeBigInt;
    decodeBigInt: typeof decodeBigInt;
    attachFormatFn: typeof attachFormatFn;
    attachExampleFn: typeof attachExampleFn;
  }
}
export = ForgeMessage;
