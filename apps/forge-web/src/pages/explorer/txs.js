import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import FilterStrip from './components/filter/strip';
import TxList from './components/tx_list';
import SummaryHeader from './components/summary_header';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import Wrapper from '../../components/wrapper';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';
import { parseQuery, fromTypeUrl, toTypeUrl } from '../../libs/util';

async function fetchTransactions({ typeFilter, paging }) {
  const params = { paging };
  if (typeFilter) {
    params.typeFilter = typeFilter;
  }
  return forge.listTransactions(params);
}

class TransactionList extends Page {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const params = parseQuery(window.location.search);
    const selected = params.filter ? params.filter.split(',').map(x => toTypeUrl(x)) : [];

    this.state = {
      loading: false,
      nodeInfo: null,
      pageSize: 20,
      selectedTxs: selected,
    };
  }

  componentDidMount() {
    this.loadChainInfo();
  }

  render() {
    const { loading, pageSize, nodeInfo, selectedTxs } = this.state;
    const args = this.getFetchArgs();

    return (
      <Layout title="Transactions" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {nodeInfo && (
            <SummaryHeader
              type={nodeInfo.moniker}
              title={`abt:did:${nodeInfo.address}`}
              badge={nodeInfo.totalTxs}
              badgeTip="TOTAL TXS"
              meta={[
                { key: 'app_hash', value: nodeInfo.appHash },
                { key: 'block_hash', value: nodeInfo.blockHash },
              ]}
            />
          )}
          {nodeInfo && (
            <FilterStrip
              showFilter={true}
              supportedTxs={nodeInfo.supportedTxs.sort()}
              selectedTxs={selectedTxs}
              onApplyFilter={this.onApplyFilter}
            />
          )}
          {nodeInfo && <TxList args={args} pageSize={pageSize} dataLoaderFn={fetchTransactions} />}
        </Container>
      </Layout>
    );
  }

  onApplyFilter = selectedTxs => {
    this.setState({ selectedTxs });
  };

  async loadChainInfo() {
    this.setState({ loading: true });
    const { info: nodeInfo } = await forge.getChainInfo();
    const { selectedTxs } = this.state;
    this.setState({
      loading: false,
      nodeInfo,
      selectedTxs: selectedTxs.length ? selectedTxs : nodeInfo.supportedTxs,
    });
  }

  getFetchArgs() {
    const { selectedTxs, nodeInfo } = this.state;
    if (!nodeInfo) {
      return {};
    }

    const params = {
      typeFilter: { types: selectedTxs.map(x => fromTypeUrl(x, false)) },
    };

    const { supportedTxs } = nodeInfo;
    if (selectedTxs.length === supportedTxs.length) {
      delete params.typeFilter;
    }

    return params;
  }
}

const Container = styled(Wrapper)`
  .pagination {
    margin-top: 60px;
  }
`;

export default withRoot(withI18n(withRouter(TransactionList)));
