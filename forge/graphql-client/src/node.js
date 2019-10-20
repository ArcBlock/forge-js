const EventEmitter = require('events');
const { Socket } = require('phoenix-channels');

const GraphQLClient = require('./client');

class NativeGraphqlClient extends GraphQLClient {
  _getSocketImplementation() {
    return Socket;
  }

  _getSocketOptions() {
    return {};
  }

  _getEventImplementation() {
    return EventEmitter;
  }
}

module.exports = NativeGraphqlClient;
