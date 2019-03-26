// Generate by [js2dts@0.3.2](https://github.com/whxaxes/js2dts#readme)

import { Buffer } from 'node/globals';
/**
 * Create new TCP Server to handle transactions from forge-core
 *
 * @param {*} config
 * @returns net.Server
 */
declare function create(config: any): Readonly<_@arcblockTcpServer.T100>;
declare function addSource(T104: T105): void;
declare function encode(data: any, type: any): Buffer;
/**
 * Decode socket data from forge-core
 * TODO: handle rest buffer that exceeds the length
 *
 * @param {*} buffer
 * @param {*} type
 * @returns
 */
declare function decode(buffer: any, type: any): any;
/**
 * Decode any fields in payload for direct use
 *
 * @param {Object} payload
 * @returns payload
 */
declare function decodePayload(payload: any): any;
declare const _@arcblockTcpServer: _@arcblockTcpServer.T102;
declare namespace _@arcblockTcpServer {
  export interface T100 {
    host: any;
    port: any;
    addHandler: any;
    removeHandler: any;
    start(done: any): void;
    close(done: any): void;
  }
  export interface T101 {
    create: typeof create;
  }
  export interface T102 {
    TcpServer: _@arcblockTcpServer.T101;
    addProtobuf: typeof addSource;
    encodeVarint: (v: any) => any;
    decodeVarint: (buffer: any) => any;
    encodeZigzag: (v: any) => any;
    decodeZigzag: (buffer: any) => any[];
    encodeSocketData: typeof encode;
    decodeSocketData: typeof decode;
    decodePayload: typeof decodePayload;
  }
}
export = _@arcblockTcpServer;
