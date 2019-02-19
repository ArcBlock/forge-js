import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import SummaryHeader from './components/summary_header';
import TxCard from './components/tx_card/index';
import Pagination from './components/pagination';

import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';
import { parseQuery } from '../../libs/util';

class BlockDetail extends Page {
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
      block: null,
      currentPage: Number(params.page) || 1,
      pageSize: 10,
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    this.loadStatus();
  }

  render() {
    const { loading, block } = this.state;
    const txs = this.getTxs();
    return (
      <Layout title="Block" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {block && (
            <React.Fragment>
              <SummaryHeader
                type={`Block #${block.height}`}
                title={moment(block.time).format('YYYY-MM-DD HH:mm:ss')}
                badge={block.numTxs}
                badgeTip="Num Txs"
                meta={[
                  { key: 'app_hash', value: block.appHash },
                  { key: 'proposer', value: block.proposer },
                ]}
              />
              {this.renderPagination()}
              <div className="txs">
                {txs.map(x => (
                  <TxCard key={x.signature} tx={x} />
                ))}
              </div>
              {this.renderPagination()}
            </React.Fragment>
          )}
        </Container>
      </Layout>
    );
  }

  getTxs() {
    const { block, pageSize, currentPage } = this.state;
    if (block && Array.isArray(block.txs)) {
      return block.txs.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    }

    return [];
  }

  renderPagination() {
    const { block, pageSize, currentPage } = this.state;
    if (block && Array.isArray(block.txs) && block.txs.length > pageSize) {
      return (
        <Pagination
          onChange={this.onChangePage}
          pageSize={pageSize}
          current={currentPage}
          total={block.txs.length}
          className="pagination"
        />
      );
    }

    return null;
  }

  onChangePage(page) {
    if (this.state.currentPage === page) {
      return;
    }

    this.setState({ currentPage: page });
  }

  async loadStatus() {
    const { height } = this.props.match.params;
    this.setState({ loading: true });
    const { block } = await forge.getBlock({ height });
    this.setState({ loading: false, block });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 6}px ${props => props.theme.spacing.unit * 15}px;
  width: auto;
  max-width: 1280px;
`;

export default withRoot(withI18n(withRouter(BlockDetail)));
