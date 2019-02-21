import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import TxCard from './components/tx_card/index';
import Pagination from './components/pagination';
import FilterStrip from './components/filter_strip';
import SummaryHeader from './components/summary_header';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';
import { parseQuery } from '../../libs/util';

class TransactionList extends Page {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const params = parseQuery(window.location.search);

    this.state = {
      loading: false,
      loadingTxs: false,
      txs: null,
      chainInfo: null,
      currentPage: Number(params.page) || 1,
      pageSize: 50,
      pageParam: { next: false, cursor: null },
      selectedTxs: [],
    };

    this.loadTransactions = this.loadTransactions.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    this.loadChainInfo(this.loadTransactions);
  }

  render() {
    const { loading, loadingTxs, chainInfo, txs, currentPage, pageSize, selectedTxs } = this.state;
    return (
      <Layout title="Transactions" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {chainInfo && (
            <SummaryHeader
              type={chainInfo.moniker}
              title={`abt:did:${chainInfo.id}`}
              badge={chainInfo.blockHeight}
              badgeTip="Block Height"
              meta={[
                { key: 'app_hash', value: chainInfo.appHash },
                { key: 'block_hash', value: chainInfo.blockHash },
              ]}
            />
          )}
          {chainInfo && (
            <FilterStrip
              showFilter={true}
              supportedTxs={chainInfo.supportedTxs}
              selectedTxs={selectedTxs}
              onApplyFilter={this.onApplyFilter}
            />
          )}
          {loadingTxs && <CircularProgress />}
          {!loadingTxs && txs && (
            <div className="txs">
              {txs.map(x => (
                <TxCard key={x.hash} tx={x} />
              ))}
            </div>
          )}
          {chainInfo && chainInfo.totalTxs > pageSize && (
            <Pagination
              onChange={this.onChangePage}
              pageSize={pageSize}
              current={currentPage}
              total={chainInfo.totalTxs}
              className="pagination"
            />
          )}
        </Container>
      </Layout>
    );
  }

  onApplyFilter = selectedTxs => {
    console.log('onApplyFilter', { selectedTxs });
  };

  onChangePage(page) {
    if (this.state.currentPage === page) {
      return;
    }

    window.location.href = `/node/explorer/txs?page=${page}`;
  }

  async loadChainInfo(done) {
    this.setState({ loading: true });
    const { info: chainInfo } = await forge.getChainInfo();
    this.setState({ loading: false, chainInfo }, done);
  }

  async loadTransactions() {
    this.setState({ txs: null, loadingTxs: true });
    const { pageSize, pageParam } = this.state;

    const params = { paging: { size: pageSize } };
    if (pageParam && pageParam.next && pageParam.cursor) {
      params.paging.cursor = pageParam.cursor;
    }
    const { transactions: txs, page } = await forge.listTransactions(params);

    this.setState({ txs, page, loadingTxs: false });
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
