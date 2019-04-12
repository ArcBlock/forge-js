import React from 'react';
import styled from 'styled-components';
import GraphiQL from 'graphiql';
import axios from 'axios';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import { getGraphQLEndpoint } from '../../libs/util';

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

const defaultQuery = `{
  listTopAccounts {
    code
    accounts {
      address
      balance
      genesisTime
      migratedFrom
      migratedTo
      moniker
      nonce
      numAssets
      numTxs
      recentNumTxs
      renaissanceTime
      totalReceivedStakes
      totalStakes
      totalUnstakes
    }
    page {
      cursor
      next
      total
    }
  }
}`;

class Query extends Page {
  render() {
    return (
      <Layout title="Query" cookies={this.cookies}>
        <Container>
          <GraphiQL fetcher={graphqlFetcher} defaultQuery={defaultQuery}>
            <GraphiQL.Logo>Query</GraphiQL.Logo>
          </GraphiQL>
        </Container>
      </Layout>
    );
  }
}

const Container = styled.div`
  padding-left: 10px;
  display: flex;
  flex: 1;
  overflow: hidden;

  .graphiql-container {
    .title {
      color: ${props => props.theme.typography.color.main};
    }

    .topBar {
      background-image: none;
      height: 64px;
      border-bottom-width: 0;
    }

    .docExplorerShow {
      background: ${props => props.theme.palette.background.default};
      border: none;
      font-size: 14px;
      color: ${props => props.theme.typography.color.main};
      text-transform: uppercase;

      &::before {
        border-color: ${props => props.theme.typography.color.gray};
      }
    }

    .docExplorerWrap {
      position: absolute !important;
      height: 100%;
      top: 74px;
      right: 0;
      background-color: ${props => props.theme.palette.background.default};
      box-shadow: -5px 16px 10px 0
        rgba(0, 0, 0, ${props => (props.theme.mode === 'light' ? 0.05 : 0.5)});
      z-index: 3;
    }

    .doc-explorer-title-bar,
    .history-title-bar {
      height: 64px;
      line-height: 50px;
      padding: 0px 32px;
      align-items: center;
    }

    .doc-explorer-title,
    .history-title {
      padding: 0;
      font-size: 14px;
      font-weight: 900;
      letter-spacing: 2px;
      color: ${props => props.theme.typography.color.gray};
      text-transform: uppercase;
      text-align: left;
    }

    .doc-explorer-contents,
    .history-contents {
      border-top-width: 0;
      top: 80px;
      background-color: ${props => props.theme.palette.background.default};
    }

    .history-contents {
      color: ${props => props.theme.typography.color.main};
      p {
        border-bottom: 1px solid ${props => props.theme.typography.color.gray};
      }
    }

    .historyPaneWrap {
      background-color: ${props => props.theme.palette.background.default};
      box-shadow: 5px 16px 10px 0
        rgba(0, 0, 0, ${props => (props.theme.mode === 'light' ? 0.05 : 0.5)});
    }

    .docExplorerWrap {
      .doc-explorer {
        background-color: ${props => props.theme.palette.background.default};
      }
      .doc-explorer-contents {
        padding: 32px;
      }
    }

    .docExplorerHide {
      color: ${props => props.theme.typography.color.main};
      padding: 0;
    }

    .search-box {
      margin-bottom: 20px;
      border-bottom: none;

      input {
        height: 30px;
        border-radius: 15px;
        border: solid 1px ${props => props.theme.typography.color.main};
        padding: 6px 24px 8px 30px;
      }

      .search-box-clear {
        right: 10px;
      }

      &::before {
        left: 10px;
      }
    }

    .variable-editor-title {
      background: ${props => props.theme.palette.background.default};
      border: none;
      height: 40px;
      padding-left: 20px;

      &::before {
        border-left: 2px solid ${props => props.theme.typography.color.gray};
        border-top: 2px solid ${props => props.theme.typography.color.gray};
        content: '';
        display: inline-block;
        height: 9px;
        margin: 0 5px 1px 0;
        position: relative;
        -webkit-transform: rotate(-135deg);
        transform: rotate(-135deg);
        width: 9px;
      }
    }

    .resultWrap {
      border-left: none;

      .CodeMirror-gutters {
        opacity: 0.5;
      }
    }

    .CodeMirror,
    .CodeMirror-gutters,
    .CodeMirror-linenumber,
    .CodeMirror-foldgutter {
      background: ${props => props.theme.palette.background.default};
    }

    .variable-editor {
      .CodeMirror {
        background: white;
      }
    }

    .CodeMirror-gutters {
      border-right-width: 0;
    }
  }
`;

export default withRoot(withI18n(Query));
