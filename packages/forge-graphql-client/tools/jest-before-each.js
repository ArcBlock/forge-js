const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);
const url = 'https://api.arcblock.io/analytics/playground';

mock.onPost(url).reply(200, { data: { createEvent: 'xxx' } });
mock.onGet(url).reply(200, { data: { createEvent: 'xxx' } });
