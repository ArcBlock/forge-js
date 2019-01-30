const path = require('path');
const net = require('net');
const { TcpServer, parseConfig } = require('../../');
const { decode } = require('../../lib/util/socket_data');
const config = parseConfig(path.resolve(__dirname, '../../../../examples/simple/forge.toml'));

/* eslint-disable */
const infoBuffer = 'FBoICgYwLjExLjA=';
const verifyBuffer =
  'hhIKgAkKmwEKKWZmNWNhNzQzODg1YjJkYmNlMjBkM2MyYjlkYmYyYzg4OWU4ZGNkMDBjEBwaRzBFAiEA5BvMlfIRQl7klaMo2PXZZd7fIluquA6/sV5mGv5wx8QCICm8AgnUafpnyX5bhEk4tu54RGaq/pc0S4werE+kv93MIAE6IQoFS1Yva3YSGBIIa2V5XzIxNTUaDHZhbHVlXzQ3MTMzNhLfBwoKCggN4Lazp2QAABAcGBsiKWZmNWNhNzQzODg1YjJkYmNlMjBkM2MyYjlkYmYyYzg4OWU4ZGNkMDBjKkEEoAg5pSfLQyALZorB9jpDWNoaQ/lvc3DhMVlDS7GzmX3YGAvYGet0b3Qrv7sRhaRbHCOD3LbQKdqpXn6bCluwvDICCAE6CndhbmdzaGlqdW5KQDlDQTIzQTE1QkQ2MjE5ODBBODdCQ0E0N0U4QzAyMEU0NjcyOTlCRkM3Q0EwRkQzNEQ1OUUyOTk0RTJDMjNEM0NSQDRCNDExMDEzMzA1MUVENUREOUU2NjdDM0QyNjk5ODYxNzMyNzgwODRCNUM4QzI1RkNCMDdBMzNBOTkwN0VEQThaDAi4xu/hBRCx7MXMAmIMCLma9eEFELHsxcwCeIABkgOqBQoLS1Yva3Zfc3RhdGUSmgUKGAoIa2V5Xzk0NzUSDHZhbHVlXzg3NDQwMwoWCgZrZXlfODASDHZhbHVlXzkxMzQyMwoYCghrZXlfMTg1NxIMdmFsdWVfNjI0ODAwChcKCGtleV8zMTc2Egt2YWx1ZV81MjMyMQoYCghrZXlfNjg3NRIMdmFsdWVfNTQwNTgwChgKCGtleV83MzUxEgx2YWx1ZV80Mjk5MzUKFgoHa2V5XzUyORILdmFsdWVfODc1ODIKGAoIa2V5XzQ2MTkSDHZhbHVlXzM4OTIyOAoYCghrZXlfOTE5MhIMdmFsdWVfMjg2NTQxChgKCGtleV84ODMyEgx2YWx1ZV80MDgxMzQKGAoIa2V5XzY1NTUSDHZhbHVlXzY3ODAyMgoYCghrZXlfMjE2MxIMdmFsdWVfMzk0OTYyChgKCGtleV8yMTI3Egx2YWx1ZV80NjU0OTQKGAoIa2V5XzgzNzASDHZhbHVlXzc4MDQyOAoYCghrZXlfNzIzMxIMdmFsdWVfMTk2NTA3ChgKCGtleV82NzgwEgx2YWx1ZV8xMDgxNjUKGAoIa2V5Xzc1MDESDHZhbHVlXzQ3MjM4OQoXCgdrZXlfNTM2Egx2YWx1ZV80NTQwODUKGAoIa2V5XzU4NTcSDHZhbHVlXzQ4MTM0NwoYCghrZXlfMTA0NRIMdmFsdWVfODM4MDI3ChYKBmtleV82NBIMdmFsdWVfOTc3Njg1ChgKCGtleV81Mzc3Egx2YWx1ZV8zMzg0NzQKGAoIa2V5XzkyNzkSDHZhbHVlXzUwODA0MAoXCghrZXlfNDQyOBILdmFsdWVfNTIzNzcKGAoIa2V5XzUzODASDHZhbHVlXzk1NTUzMAoXCghrZXlfNzgxNRILdmFsdWVfMzU0ODk=';
const updateBuffer =
  'hhISgAkKmwEKKWZmNWNhNzQzODg1YjJkYmNlMjBkM2MyYjlkYmYyYzg4OWU4ZGNkMDBjEBwaRzBFAiEA5BvMlfIRQl7klaMo2PXZZd7fIluquA6/sV5mGv5wx8QCICm8AgnUafpnyX5bhEk4tu54RGaq/pc0S4werE+kv93MIAE6IQoFS1Yva3YSGBIIa2V5XzIxNTUaDHZhbHVlXzQ3MTMzNhLfBwoKCggN4Lazp2QAABAcGBsiKWZmNWNhNzQzODg1YjJkYmNlMjBkM2MyYjlkYmYyYzg4OWU4ZGNkMDBjKkEEoAg5pSfLQyALZorB9jpDWNoaQ/lvc3DhMVlDS7GzmX3YGAvYGet0b3Qrv7sRhaRbHCOD3LbQKdqpXn6bCluwvDICCAE6CndhbmdzaGlqdW5KQDlDQTIzQTE1QkQ2MjE5ODBBODdCQ0E0N0U4QzAyMEU0NjcyOTlCRkM3Q0EwRkQzNEQ1OUUyOTk0RTJDMjNEM0NSQDRCNDExMDEzMzA1MUVENUREOUU2NjdDM0QyNjk5ODYxNzMyNzgwODRCNUM4QzI1RkNCMDdBMzNBOTkwN0VEQThaDAi4xu/hBRCx7MXMAmIMCLma9eEFELHsxcwCeIABkgOqBQoLS1Yva3Zfc3RhdGUSmgUKGAoIa2V5Xzk0NzUSDHZhbHVlXzg3NDQwMwoWCgZrZXlfODASDHZhbHVlXzkxMzQyMwoYCghrZXlfMTg1NxIMdmFsdWVfNjI0ODAwChcKCGtleV8zMTc2Egt2YWx1ZV81MjMyMQoYCghrZXlfNjg3NRIMdmFsdWVfNTQwNTgwChgKCGtleV83MzUxEgx2YWx1ZV80Mjk5MzUKFgoHa2V5XzUyORILdmFsdWVfODc1ODIKGAoIa2V5XzQ2MTkSDHZhbHVlXzM4OTIyOAoYCghrZXlfOTE5MhIMdmFsdWVfMjg2NTQxChgKCGtleV84ODMyEgx2YWx1ZV80MDgxMzQKGAoIa2V5XzY1NTUSDHZhbHVlXzY3ODAyMgoYCghrZXlfMjE2MxIMdmFsdWVfMzk0OTYyChgKCGtleV8yMTI3Egx2YWx1ZV80NjU0OTQKGAoIa2V5XzgzNzASDHZhbHVlXzc4MDQyOAoYCghrZXlfNzIzMxIMdmFsdWVfMTk2NTA3ChgKCGtleV82NzgwEgx2YWx1ZV8xMDgxNjUKGAoIa2V5Xzc1MDESDHZhbHVlXzQ3MjM4OQoXCgdrZXlfNTM2Egx2YWx1ZV80NTQwODUKGAoIa2V5XzU4NTcSDHZhbHVlXzQ4MTM0NwoYCghrZXlfMTA0NRIMdmFsdWVfODM4MDI3ChYKBmtleV82NBIMdmFsdWVfOTc3Njg1ChgKCGtleV81Mzc3Egx2YWx1ZV8zMzg0NzQKGAoIa2V5XzkyNzkSDHZhbHVlXzUwODA0MAoXCghrZXlfNDQyOBILdmFsdWVfNTIzNzcKGAoIa2V5XzUzODASDHZhbHVlXzk1NTUzMAoXCghrZXlfNzgxNRILdmFsdWVfMzU0ODk=';
/* eslint-enable */

describe.skip('TcpServer', () => {
  let server;
  const dummyHandler = (req, res, next) => {
    res.code = 1;
    next();
  };

  beforeAll(done => {
    server = TcpServer.create(config.app);
    server.start(done);
  });

  test('should have standard methods', () => {
    expect(typeof server.addHandler).toEqual('function');
    expect(typeof server.removeHandler).toEqual('function');
  });

  test('should fallback to default verify tx handler', done => {
    const { host, port } = server;
    const socket = net.createConnection(port, host);
    socket.on('connect', () => {
      socket.write(Buffer.from(verifyBuffer, 'base64'));
    });

    socket.on('data', data => {
      const decoded = decode(data, 'Response');
      expect(decoded.verifyTx.code).toEqual(0);
      socket.end();
    });

    socket.on('end', () => {
      done();
    });
  });

  test('should respect user verify tx handler', done => {
    const { host, port } = server;
    server.addHandler('KvTx.verifyTx', dummyHandler);
    const socket = net.createConnection(port, host);
    socket.on('connect', () => {
      socket.write(Buffer.from(verifyBuffer, 'base64'));
    });

    socket.on('data', data => {
      const decoded = decode(data, 'Response');
      expect(decoded.verifyTx.code).toEqual(1);
      socket.end();
    });

    socket.on('end', () => {
      done();
    });
  });

  test('should respect user info handler', done => {
    const { host, port } = server;
    server.addHandler('info', (req, res, next) => {
      Object.assign(res, {
        code: 0,
        typeUrls: Object.values({
          KvTx: 'KV/kv',
          AccountKvState: 'KV/kv_state',
        }),
      });
      next();
    });

    const socket = net.createConnection(port, host);
    socket.on('connect', () => {
      socket.write(Buffer.from(infoBuffer, 'base64'));
    });

    socket.on('data', data => {
      const decoded = decode(data, 'Response');
      expect(decoded.info.typeUrlsList[0]).toEqual('KV/kv');
      socket.end();
    });

    socket.on('end', () => {
      done();
    });
  });

  afterAll(done => {
    server.close(done);
  });
});
