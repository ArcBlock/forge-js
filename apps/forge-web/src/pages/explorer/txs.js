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
      chainInfo: null,
      pageSize: 20,
      selectedTxs: selected,
    };
  }

  componentDidMount() {
    this.loadChainInfo();
  }

  render() {
    const { loading, pageSize, chainInfo, selectedTxs } = this.state;
    const args = this.getFetchArgs();

    return (
      <Layout title="Transactions" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {chainInfo && (
            <SummaryHeader
              type={chainInfo.moniker}
              title={`abt:did:${chainInfo.address}`}
              badge={chainInfo.totalTxs}
              badgeTip="TOTAL TXS"
              meta={[
                { key: 'app_hash', value: chainInfo.appHash },
                { key: 'block_hash', value: chainInfo.blockHash },
              ]}
            />
          )}
          {chainInfo && (
            <FilterStrip
              showFilter={true}
              supportedTxs={chainInfo.supportedTxs.sort()}
              selectedTxs={selectedTxs}
              onApplyFilter={this.onApplyFilter}
            />
          )}
          {chainInfo && <TxList args={args} pageSize={pageSize} dataLoaderFn={fetchTransactions} />}
        </Container>
      </Layout>
    );
  }

  onApplyFilter = selectedTxs => {
    this.setState({ selectedTxs });
  };

  async loadChainInfo() {
    this.setState({ loading: true });
    const { info: chainInfo } = await forge.getChainInfo();
    const { selectedTxs } = this.state;
    this.setState({
      loading: false,
      chainInfo,
      selectedTxs: selectedTxs.length ? selectedTxs : chainInfo.supportedTxs,
    });
  }

  getFetchArgs() {
    const { selectedTxs, chainInfo } = this.state;
    if (!chainInfo) {
      return {};
    }

    const params = {
      typeFilter: { types: selectedTxs.map(x => fromTypeUrl(x, false)) },
    };

    const { supportedTxs } = chainInfo;
    if (selectedTxs.length === supportedTxs.length) {
      delete params.typeFilter;
    }

    return params;
  }
}

// TODO: make this responsive
const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 6}px 8%;
  width: auto;
  max-width: 1280px;
  box-sizing: border-box;

  .pagination {
    margin-top: 60px;
  }
`;

export default withRoot(withI18n(withRouter(TransactionList)));
