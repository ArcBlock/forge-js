import React from 'react';
import styled from 'styled-components';
import Pagination from 'rc-pagination';

import CircularProgress from '@material-ui/core/CircularProgress';

import ChainInfo from './components/chain_info';
import BlockCard from './components/block_card';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';

class BlockList extends Page {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loadingBlocks: false,
      blocks: null,
      chainInfo: null,
      currentPage: 1,
      pageSize: 10,
    };

    this.loadBlocks = this.loadBlocks.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    this.loadChainInfo(this.loadBlocks);
  }

  // TODO: add links for txs and blocks
  // TODO: add search feature
  // TODO: add filter feature
  // TODO: compact blocks
  // TODO: block paginations
  render() {
    const { loading, chainInfo, blocks, currentPage, pageSize } = this.state;
    return (
      <Layout title="Blocks" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {chainInfo && <ChainInfo {...chainInfo} />}
          {blocks && blocks.map(x => <BlockCard block={x} />)}
          {blocks && (
            <Pagination
              onChange={this.onChangePage}
              pageSize={pageSize}
              current={currentPage}
              total={chainInfo.blockHeight}
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

    this.setState({ currentPage: page }, this.loadBlocks);
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
`;

export default withRoot(withI18n(BlockList));
