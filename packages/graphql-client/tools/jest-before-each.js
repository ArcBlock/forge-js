const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);
const url = 'http://localhost:8210/api';

const data = {
  getBlock: {
    code: 'OK',
    block: {
      height: 2,
      numTxs: 0,
      time: '2019-01-28T07:29:17.000Z',
      appHash: '7F2CF44D5C0C5E489BFD81F1E41D9C3F43B33CE8CCC979C2E39900322691AD0B',
      proposer: '57D5B0CB4A74D87E696EB0DB5F5B55B0FCA237FC',
      totalTxs: 14998,
    },
  },
};

console.log('setup before each scripts');
mock.onPost(url).reply(200, { data });
mock.onGet(url).reply(200, { data });
