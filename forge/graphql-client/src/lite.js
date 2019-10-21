const EventEmitter = require('wolfy87-eventemitter');
const GraphQLClient = require('./base');

function DummySocket() {}

class GraphqlClientLite extends GraphQLClient {
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
