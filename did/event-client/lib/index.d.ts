// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class EventClient {
  endpoint: any;
  socket: any;
  subscriptions: _Lib.T100;
  channels: _Lib.T100;
  constructor(endpoint: any);
  subscribe(topic: any, token: any): Promise<any>;
  unsubscribe(topic: any, token: any): Promise<any>;
}
declare const _Lib: typeof EventClient;
declare namespace _Lib {
  export interface T100 {
    [key: string]: any;
  }
}
export = _Lib;
