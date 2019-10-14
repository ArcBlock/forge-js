'use strict';

const EventEmitter = require('wolfy87-eventemitter');
const GraphqlClient = require('./base');

function DummySocket() {}

class GraphqlClientLite extends GraphqlClient {
  _getSocketImplementation() {
    return DummySocket;
  }

  _getSocketOptions() {
    // eslint-disable-next-line
    return { transport: WebSocket };
  }

  _getEventImplementation() {
    return EventEmitter;
  }
}

module.exports = GraphqlClientLite;
//# sourceMappingURL=lite.js.map