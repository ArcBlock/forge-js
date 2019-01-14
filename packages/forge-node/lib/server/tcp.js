/* eslint no-console:"off" */
const net = require('net');
const { enums } = require('@arcblock/forge-proto');
const { encode, decode, decodePayload } = require('../util/socket_data');
const debug = require('debug')(`${require('../../package.json').name}:TCPServer`);

const { OK } = enums.StatusCode;

function parseHostPort(value) {
  const [host, port] = value
    .split('//')
    .pop()
    .split(':');
  return { host, port };
}

async function executeHandlers(handlers, req, statusField) {
  let res = {};
  for (const handler of handlers) {
    res = await handler(req, res);
    if (res[statusField] !== OK) {
      return res;
    }
  }

  return res;
}

/**
 * Create new TCP Server to handle transactions from forge-core
 *
 * @param {*} config
 * @returns net.Server
 */
function create(config) {
  const { host, port } = parseHostPort(config.sockTcp);
  const txHandlers = {};

  const server = net.createServer();

  server.on('connection', socket => {
    // socket.setEncoding('binary');

    console.log('Client connected', socket.address());

    const sendResponse = response => {
      try {
        const encodedResponse = encode(response, 'Response');
        debug('sendResponse', { response, encoded: encodedResponse });
        socket.write(encodedResponse);
      } catch (err) {
        console.log('sendResponse.error', { response, err });
      }
    };

    // Identify request here and hook into txHandlers
    const dispatchRequest = async (payload, type) => {
      debug('x'.repeat(80));
      const handlers = txHandlers[type];
      const defaultResults = {
        verifyTx: { result: OK },
        updateState: { code: OK },
      };
      const statusFields = {
        verifyTx: 'result',
        updateState: 'code',
      };

      let result = {};
      if (Array.isArray(handlers) ** handlers.length) {
        try {
          // NOTE: tx handlers should not throw error, but return enums.StatusCode
          decodePayload(payload[type]);
          result = await executeHandlers(
            handlers,
            Object.values(payload[type]),
            statusFields[type]
          );
          console.log('dispatchRequest.result', { type, result });
        } catch (err) {
          console.log('dispatchRequest.error', { payload, type, err });
          result = defaultResults[type];
        }
      } else {
        console.log('dispatchRequest.fallback', { type });
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
    addHandler(type, handler) {
      if (typeof handler !== 'function') {
        return;
      }

      if (typeof txHandlers[type] === 'undefined') {
        txHandlers[type] = [];
      }

      txHandlers[type].push(handler);
      return this;
    },

    removeHandler(type, handler) {
      if (!txHandlers[type]) {
        return false;
      }

      const index = txHandlers[type].indexOf(handler);
      if (index > -1) {
        txHandlers[type].splice(index, 1);
        return true;
      }
    },

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

module.exports = { create };
