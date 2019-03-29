import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import Wrapper from '../../components/wrapper';
import Pagination from '../../components/pagination';
import SummaryHeader from './components/summary_header';
import TxCard from './components/tx_card/index';

import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';
import Icon from '../../components/iconfa';
import Alert from '../../components/alert';

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
      error: null,
      block: null,
      currentPage: Number(params.page) || 1,
      pageSize: 10,
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    this.loadBlock();
  }

  render() {
    const { height } = this.props.match.params;
    const { loading, error, block } = this.state;
    const txs = this.getTxs();
    return (
      <Layout title="Block" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {!!error && <Alert type="error">{error}</Alert>}
          {!error && !loading && !block && (
            <Alert type="error">
              Block <strong>#{height}</strong> not found!
            </Alert>
          )}
          {!loading && block && (
            <React.Fragment>
              <SummaryHeader
                type={
                  <React.Fragment>
                    <Icon name="boxes" size={14} />
                    {block.height}
                  </React.Fragment>
                }
                title={dayjs(block.time).format('YYYY-MM-DD HH:mm:ss')}
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
                  <TxCard key={x.hash} tx={x} time={block.time} />
                ))}
                {txs.length === 0 && (
                  <Typography component="p" className="empty-tip">
                    Oops, this is an empty block.
                  </Typography>
                )}
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

  async loadBlock() {
    try {
      const { height } = this.props.match.params;
      this.setState({ loading: true });
      const { block } = await forge().getBlock({ height });
      this.setState({ loading: false, block });
    } catch (err) {
      console.error(err.errors);
      this.setState({
        loading: false,
        error: Array.isArray(err.errors)
          ? err.errors.map(x => x.message).join(',')
          : err.message || err.toString(),
      });
    }
  }
}

const Container = styled(Wrapper)`
  .empty-tip {
    color: ${props => props.theme.colors.minor};
    font-size: 30px;
  }
`;

export default withRoot(withI18n(withRouter(BlockDetail)));
