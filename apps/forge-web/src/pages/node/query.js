import React from 'react';
import styled from 'styled-components';
import GraphiQL from 'graphiql';
import axios from 'axios';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import { getGraphQLEndpoint } from '../../libs/util';

import 'graphiql/graphiql.css';

function graphqlFetcher(params) {
  const endpoint = getGraphQLEndpoint();
  return axios({
    url: endpoint,
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.data);
}

class Query extends Page {
  render() {
    return (
      <Layout title="Query" cookies={this.cookies}>
        <Container>
          <GraphiQL fetcher={graphqlFetcher} />
        </Container>
      </Layout>
    );
  }
}

const Container = styled.div`
  padding-left: 10px;
  display: flex;
  flex: 1;

  .graphiql-container {
    .topBar {
      background-image: none;
      height: 50px;
      border-bottom-width: 0;
    }

    .docExplorerWrap,
    .historyPaneWrap {
      position: absolute !important;
      height: 100%;
      top: 80px;
      right: 0;
      background-color: transparent;
      box-shadow: -2px 16px 10px 0 rgba(0, 0, 0, 0.05);
      position: relative;
      z-index: 3;
    }

    .historyPaneWrap {
      left: 0;
      right: auto;
    }

    .docExplorerWrap {
      .doc-explorer-contents {
        background-color: transparent;
        padding: 32px;
      }
    }

    .CodeMirror-gutters {
      border-right-width: 0;
    }
  }
`;

export default withRoot(withI18n(Query));
