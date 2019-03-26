/* eslint no-console:"off" */
const net = require('net');
const { enums } = require('@arcblock/forge-proto');
const { encode, decode, decodePayload } = require('../util/socket_data');
const HandlerManager = require('../util/handler/manager');

const debug = require('debug')(`${require('../../package.json').name}:TCPServer`);

const { OK } = enums.StatusCode;

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
 * @param {*} config
 * @returns net.Server
 */
function create(config) {
  const { host, port } = parseHostPort(config.sockTcp);
  const manager = new HandlerManager();

  const server = net.createServer();

  server.on('connection', socket => {
    // socket.setEncoding('binary');
    debug('Client connected', socket.address());

    const sendResponse = response => {
      try {
        const encodedResponse = encode(response, 'Response');
        debug('sendResponse', { response, encoded: encodedResponse });
        socket.write(encodedResponse);
      } catch (err) {
        console.error('sendResponse.error', { response, err });
      }
    };

    // Identify request here and hook into txHandlers
    const dispatchRequest = async (payload, type) => {
      const defaultResults = {
        verifyTx: { code: OK },
        updateState: { code: OK },
      };

      try {
        decodePayload(payload[type]);
        const result = {};
        const request = payload[type];
        request.serverConfig = config;

        if (payload[type].tx && payload[type].tx.itx) {
          request.itx = payload[type].tx.itx;
        }
        debug('dispatchRequest.itx', request.itx);

        // Use Tx type as namespace for handlers, eg: KvTx.verifyTx, KvTx.updateState
        const handlerKey = request.itx ? `${request.itx.type}.${type}` : type;
        if (manager.has(handlerKey)) {
          manager.run(handlerKey, request, result, () => {
            debug('dispatchRequest.result', { type: handlerKey, result });
            sendResponse({ [type]: result });
          });
        } else {
          debug('dispatchRequest.fallback', { type });
          sendResponse({ [type]: defaultResults[type] });
        }
      } catch (err) {
        debug('dispatchRequest.error', { payload, type, err });
        sendResponse({ [type]: defaultResults[type] });
      }
    };

    socket.on('data', buffer => {
      try {
        debug('-'.repeat(80));
        const payload = decode(buffer, 'Request');
        debug('request', { buffer, bufferB64: buffer.toString('base64'), payload });
        Object.keys(payload)
          .filter(x => !!payload[x])
          .forEach(x => dispatchRequest(payload, x));
      } catch (err) {
        console.error('TCPServer.onData.error', { buffer: buffer.toString('base64'), err });
      }
    });

    socket.on('end', () => {
      console.log('Client disconnected', socket.address());
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
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw err;
    }
    /* eslint-enable indent */
  });

  return Object.freeze({
    host,
    port,

    addHandler: manager.add.bind(manager),
    removeHandler: manager.remove.bind(manager),

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

    close(done) {
      server.close(done);
    },
  });
}

module.exports = { create };
