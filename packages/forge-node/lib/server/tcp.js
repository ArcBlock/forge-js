/* eslint no-console:"off" */
const net = require('net');
const debug = require('debug')(`${require('../../package.json').name}:AppServer`);
const { encode, decode } = require('../util/socket_data');

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
function createServer(config, txHandlers) {
  const { host, port } = parseHostPort(config.sockTcp);

  const server = net.createServer();

  server.on('connection', socket => {
    // socket.setEncoding('binary');
    console.log('Client connected', socket.address());

    socket.on('data', data => {
      try {
        const bytes = decode(data, 'Request');
        console.log('data.buffer', data);
        console.log('data.base64', data.toString('base64'));
        console.log('data.decoded', bytes);

        const response = encode(
          {
            verifyTx: {
              status: 0,
            },
          },
          'Response'
        );
        socket.write(response);
      } catch (err) {
        console.log('error', { data, err });
      }

      // socket.write(encode({ }))
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
