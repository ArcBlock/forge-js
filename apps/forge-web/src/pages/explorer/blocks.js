import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import SummaryHeader from './components/summary_header';
import FilterStrip from './components/filter/strip';
import PaginatedBlocks from './components/block_list';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import Wrapper from '../../components/wrapper';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';

class Blocks extends Page {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      nodeInfo: null,
    };

    this.fetchBlocks = this.fetchBlocks.bind(this);
  }

  componentDidMount() {
    this.loadChainInfo();
  }

  render() {
    const { loading, nodeInfo } = this.state;
    return (
      <Layout title="Blocks" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {nodeInfo && (
            <SummaryHeader
              type={nodeInfo.moniker}
              title={`abt:did:${nodeInfo.address}`}
              badge={nodeInfo.blockHeight}
              badgeTip="BLOCK HEIGHT"
              meta={[
                { key: 'app_hash', value: nodeInfo.appHash },
                { key: 'block_hash', value: nodeInfo.blockHash },
              ]}
            />
          )}
          {nodeInfo && <FilterStrip />}
          {nodeInfo && <PaginatedBlocks dataLoaderFn={this.fetchBlocks} />}
        </Container>
      </Layout>
    );
  }

  async loadChainInfo() {
    this.setState({ loading: true });
    const { info: nodeInfo } = await forge.getNodeInfo();
    this.setState({ loading: false, nodeInfo });
  }

  async fetchBlocks({ paging }) {
    const { nodeInfo } = this.state;
    return forge.getBlocks(
      {
        emptyExcluded: true,
        maxHeight: nodeInfo.blockHeight,
        minHeight: 0,
        paging,
      },
      {
        ignoreFields: ['blocks.txs'],
      }
    );
  }
}

const Container = styled(Wrapper)``;

export default withRoot(withI18n(withRouter(Blocks)));
