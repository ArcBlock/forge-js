import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import ChainInfo from './components/chain_info';
import BlockCard from './components/block_card';
import Pagination from './components/pagination';
import SearchBox from './components/search_box';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';
import { parseQuery } from '../../libs/util';

class BlockList extends Page {
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
      loadingBlocks: false,
      blocks: null,
      chainInfo: null,
      currentPage: Number(params.page) || 1,
      pageSize: 10,
    };

    this.loadBlocks = this.loadBlocks.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    this.loadChainInfo(this.loadBlocks);
  }

  // TODO: add search feature
  // TODO: add filter feature
  // TODO: compact blocks
  render() {
    const { loading, chainInfo, blocks, currentPage, pageSize } = this.state;
    return (
      <Layout title="Blocks" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {chainInfo && <ChainInfo {...chainInfo} />}
          {chainInfo && <SearchBox />}
          {blocks && (
            <div className="blocks">
              {blocks.map(x => (
                <BlockCard key={x.appHash} block={x} />
              ))}
            </div>
          )}
          {chainInfo && chainInfo.blockHeight > pageSize && (
            <Pagination
              onChange={this.onChangePage}
              pageSize={pageSize}
              current={currentPage}
              total={chainInfo.blockHeight}
              className="pagination"
            />
          )}
        </Container>
      </Layout>
    );
  }

  onChangePage(page) {
    if (this.state.currentPage === page) {
      return;
    }

    window.location.href = `/node/explorer/blocks?page=${page}`;
  }

  async loadChainInfo(done) {
    this.setState({ loading: true });
    const { info: chainInfo } = await forge.getChainInfo();
    this.setState({ loading: false, chainInfo }, done);
  }

  async loadBlocks() {
    // TODO: optimize this
    this.setState({ blocks: [] });
    const {
      pageSize,
      currentPage,
      chainInfo: { blockHeight },
    } = this.state;

    const { blocks } = await forge.getBlocks(
      {
        maxHeight: blockHeight - (currentPage - 1) * pageSize,
        minHeight: blockHeight - currentPage * pageSize,
      },
      {
        ignoreFields: ['blocks.txs'],
      }
    );

    this.setState({ blocks });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 6}px ${props => props.theme.spacing.unit * 15}px;
  max-width: 1280px;

  .pagination {
    margin-top: 60px;
  }
`;

export default withRoot(withI18n(withRouter(BlockList)));
