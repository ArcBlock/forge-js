const EventEmitter = require('events');
const OCAPClient = require('../src/node');
const OCAPBrowserClient = require('../src/browser');
// const httpEndpoint = ds => `http://localhost:8080/api/${ds}`;
const httpEndpoint = ds => `https://ocap.arcblock.io/api/${ds}`;

[OCAPClient, OCAPBrowserClient].forEach(Client => {
  describe(Client.name, () => {
    test('should be a constructor', () => {
      expect(typeof Client).toEqual('function');
    });

    test('should throw error if no dataSource option', () => {
      try {
        new Client();
      } catch (err) {
        expect(err).toBeTruthy();
      }
    });

    test('should throw error if invalid dataSource option', () => {
      try {
        new Client({ dataSource: 'xxx' });
      } catch (err) {
        expect(err).toBeTruthy();
      }
    });

    test('should list api as array', () => {
      const client = new Client({
        httpEndpoint,
        dataSource: 'eth',
      });

      const queries = client.getQueries();
      expect(Array.isArray(queries)).toEqual(true);
      expect(queries.includes('accountByAddress')).toEqual(true);

      const subscriptions = client.getSubscriptions();
      expect(Array.isArray(subscriptions)).toEqual(true);
      expect(subscriptions.includes('newBlockMined')).toEqual(true);

      expect(Array.isArray(client.getMutations())).toEqual(true);
    });

    test('should sanitize args', () => {
      const client = new Client({
        httpEndpoint,
        dataSource: 'eth',
      });

      const blockHash = '0x8c9e6c9d3066f88b46bfffb6b5922b34a97a51cb244464a6891402f8d3c856c3';
      const args = client._sanitizeArgs({ hash: blockHash });
      expect(args.hash).toEqual(blockHash.slice(2));
    });
  });

  describe('#query', () => {
    test('should have basic query methods for btc', () => {
      const client = new Client({
        httpEndpoint,
        dataSource: 'btc',
      });

      expect(typeof client.accountByAddress).toEqual('function');
      expect(typeof client.blockByHash).toEqual('function');
      expect(typeof client.blockByHeight).toEqual('function');
      expect(typeof client.blocksByHeight).toEqual('function');
      expect(typeof client.transactionByHash).toEqual('function');
    });

    test('should have basic query methods for eth', () => {
      const client = new Client({
        httpEndpoint,
        dataSource: 'eth',
      });

      expect(typeof client.accountByAddress).toEqual('function');
      expect(typeof client.blockByHash).toEqual('function');
      expect(typeof client.blockByHeight).toEqual('function');
      expect(typeof client.blocksByHeight).toEqual('function');
      expect(typeof client.transactionByHash).toEqual('function');
    });

    test(
      'should query method {accountByAddress} work as expected',
      async () => {
        const client = new Client({
          httpEndpoint,
          dataSource: 'btc',
        });

        const result = await client.accountByAddress({
          address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        });
        expect(result).toBeTruthy();
        expect(result.accountByAddress).toBeTruthy();
        expect(result.accountByAddress.address).toBeTruthy();
      },
      5000
    );

    test(
      'should query method {blockByHash} work as expected',
      async () => {
        const client = new Client({
          httpEndpoint,
          dataSource: 'eth',
        });

        const [result1, result2] = await Promise.all([
          client.blockByHash({
            hash: '0x8c9e6c9d3066f88b46bfffb6b5922b34a97a51cb244464a6891402f8d3c856c3',
          }),
          client.blockByHash({
            hash: '8c9e6c9d3066f88b46bfffb6b5922b34a97a51cb244464a6891402f8d3c856c3',
          }),
        ]);
        expect(result1).toBeTruthy();
        expect(result1.blockByHash).toBeTruthy();
        expect(result1.blockByHash.height).toBeTruthy();
        expect(result2).toBeTruthy();
        expect(result2.blockByHash).toBeTruthy();
        expect(result2.blockByHash.height).toBeTruthy();
        expect(result1.blockByHash.height).toEqual(result2.blockByHash.height);
      },
      5000
    );

    test(
      'should query method {transactionByHash} work as expected',
      async () => {
        const client = new Client({
          httpEndpoint,
          dataSource: 'eth',
        });

        const [result1, result2] = await Promise.all([
          client.transactionByHash({
            hash: '0x009a7044ee159451e117b4aed9927e6b20008f14fff98063d77a2dd0e2c7f99e',
          }),
          client.transactionByHash({
            hash: '009a7044ee159451e117b4aed9927e6b20008f14fff98063d77a2dd0e2c7f99e',
          }),
        ]);
        expect(result1).toBeTruthy();
        expect(result1.transactionByHash).toBeTruthy();
        expect(result1.transactionByHash.hash).toBeTruthy();
        expect(result2).toBeTruthy();
        expect(result2.transactionByHash).toBeTruthy();
        expect(result2.transactionByHash.hash).toBeTruthy();
        expect(result2.transactionByHash.hash).toEqual(result1.transactionByHash.hash);
      },
      5000
    );

    test(
      'should query method {blocksByHeight} work as expected',
      async () => {
        const client = new Client({
          httpEndpoint,
          dataSource: 'eth',
        });

        const { blocksByHeight: blocks } = await client.blocksByHeight(
          {
            fromHeight: 1000000,
            toHeight: 1000019,
          },
          { paging: { size: 1 } }
        );
        expect(blocks).toBeTruthy();
        expect(blocks.data).toBeTruthy();
        expect(typeof blocks.next === 'function').toBeTruthy();

        const { blocksByHeight: blocks2 } = await blocks.next();
        expect(blocks).toBeTruthy();
        expect(blocks.data).toBeTruthy();
        expect(typeof blocks2.next === 'function').toBeFalsy();
        expect(blocks.data[0].hash).not.toEqual(blocks2.data[0].hash);
      },
      8000
    );

    test(
      'should query method {blockByHeight} work as expected',
      async () => {
        const client = new Client({
          httpEndpoint,
          dataSource: 'eth',
        });

        const { blockByHeight: block } = await client.blockByHeight({ height: 5000000 });
        expect(block).toBeTruthy();
        expect(block.transactions).toBeTruthy();
        expect(typeof block.transactions.next === 'function').toBeTruthy();

        const { blockByHeight: block2 } = await block.transactions.next();
        expect(block2).toBeTruthy();
        expect(block2.transactions).toBeTruthy();
        expect(typeof block2.transactions.next === 'function').toBeTruthy();
        expect(block.transactions.data[0].hash).not.toEqual(block2.transactions.data[0].hash);
      },
      5000
    );

    test(
      'should query method {transactionsByAddress} work as expected',
      async () => {
        const client = new Client({
          httpEndpoint,
          dataSource: 'eth',
        });

        // we have a custom ignore on each call
        const { transactionsByAddress: transactions } = await client.transactionsByAddress(
          { sender: '0x60dfe511ef939e25843471e34e856e5b2e07c92a' },
          {
            ignoreFields: ['data.parent', 'data.to', 'data.from'],
          }
        );

        expect(transactions).toBeTruthy();
        expect(transactions.data.length).toBeTruthy();
        expect(transactions.data[0].parent).toBeFalsy();
        expect(transactions.data[0].to).toBeFalsy();
        expect(transactions.data[0].from).toBeFalsy();
      },
      5000
    );
  });

  describe('#subscription', () => {
    const client = new Client({
      httpEndpoint,
      dataSource: 'eth',
    });

    test('should have basic subscription methods for eth', () => {
      expect(typeof client.newBlockMined).toEqual('function');
      expect(typeof client.bigTransactionExecuted).toEqual('function');
    });

    if (Client.name !== 'OCAPBrowserClient') {
      test(
        'should subscribe to newBlockMined event',
        async () => {
          // TODO: setup mock socket server for testing env
          const subscription = await client.newBlockMined();
          expect(subscription instanceof EventEmitter).toEqual(true);
          expect(subscription.subscriptionId).toBeTruthy();
          expect(Object.keys(client.subscriptions).length).toEqual(1);
        },
        5000
      );
    }
  });
});
