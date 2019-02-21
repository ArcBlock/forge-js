import GraphqlClient from '@arcblock/forge-graphql-client';
import { getGraphQLEndpoint } from './util';

const client = new GraphqlClient(getGraphQLEndpoint());

export default client;
