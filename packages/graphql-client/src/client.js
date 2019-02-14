const BaseClient = require('@arcblock/sdk-util');
const md5 = require('blueimp-md5');
const schema = require('./schema.json');

class GraphqlClient extends BaseClient {
  constructor(httpEndpoint = 'http://localhost:8210/api') {
    super({
      dataSource: 'forge',
      httpEndpoint,
      enableQuery: true,
      enableSubscription: true,
      enableMutation: true,
    });
  }

  _getSchema() {
    return schema;
  }

  _getIgnoreFields() {
    return [];
  }

  _getQueryId(query) {
    return md5(query);
  }
}

module.exports = GraphqlClient;
