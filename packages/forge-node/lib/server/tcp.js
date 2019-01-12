/* eslint no-console:"off" */
const net = require('net');
const { encode, decode, decodePayload } = require('../util/socket_data');
const debug = require('debug')(`${require('../../package.json').name}:TCPServer`);

function parseHostPort(value) {
  const [host, port] = value
    .split('//')
    .pop()
    .split(':');
  return { host, port };
}

/**
 * Create new TCP Server to handle transactions from forge-core
 *
 * TODO: make txHandlers to accept more handlers on each request type
 *
 * @param {*} config
 * @returns net.Server
 */
function createServer(config, txHandlers = {}) {
  const { host, port } = parseHostPort(config.sockTcp);

  const server = net.createServer();

  server.on('connection', socket => {
    // TODO: do we need to set encoding for this connection
    // socket.setEncoding('binary');

    console.log('Client connected', socket.address());

    const sendResponse = response => {
      try {
        const encodedResponse = encode(response, 'Response');
        debug('sendResponse', { response, encoded: encodedResponse });
        socket.write(encodedResponse);
      } catch (err) {
        debug('sendResponse.error', { response, err });
      }
    };

    // Identify request here and hook into txHandlers
    const dispatchRequest = async (payload, type) => {
      debug('x'.repeat(80));
      const handler = txHandlers[type];
      const defaultResults = {
        verifyTx: { result: 0 },
        updateState: { code: 0 },
      };

      let result = {};
      if (typeof handler === 'function') {
        try {
          // NOTE: tx handlers should not throw error, but return enums.StatusCode
          decodePayload(payload[type]);
          result = await handler(...Object.values(payload[type]));
          debug('dispatchRequest.result', { type, result });
        } catch (err) {
          debug('dispatchRequest.error', { payload, type, err });
          result = defaultResults[type];
        }
      } else {
        debug('dispatchRequest.fallback', { type });
        result = defaultResults[type];
      }

      // NOTE: Handler returned data will be attached to response here
      sendResponse({ [type]: result });
    };

    socket.on('data', buffer => {
      try {
        debug('='.repeat(80));
        const payload = decode(buffer, 'Request');
        debug('request', { buffer, bufferB64: buffer.toString('base64'), payload });
        Object.keys(payload)
          .filter(x => !!payload[x])
          .forEach(x => dispatchRequest(payload, x));
      } catch (err) {
        debug('TCPServer.onData.error', { buffer: buffer.toString('base64'), err });
      }
    });

    socket.on('end', () => {
      debug('Client disconnected', socket.address());
    });
  });

  server.on('error', err => {
    if (err.syscall !== 'listen') {
      throw err;
    }

    const bind = typeof port === 'string' ? `pipe ${port}` : `port ${port}`;

    // handle specific listen errors with friendly messages
    /* eslint-disable indent */
    switch (err.code) {
      case 'EACCES':
        console.err(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.err(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw err;
    }
    /* eslint-enable indent */
  });

  return {
    start(done) {
      server.listen(port, host, () => {
        const addr = server.address();
        const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
        console.log(`${config.name}@${config.version} ready on ${bind}`);
        if (typeof done === 'function') {
          done();
        }
      });
    },
  };
}

module.exports = { createServer };
