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
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';

function fetchBlocks({ paging }) {
  return forge.getBlocks(
    {
      // emptyExcluded: true,
      paging,
    },
    {
      ignoreFields: ['blocks.txs'],
    }
  );
}

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
      chainInfo: null,
    };
  }

  componentDidMount() {
    this.loadChainInfo();
  }

  render() {
    const { loading, chainInfo } = this.state;
    return (
      <Layout title="Blocks" cookies={this.cookies}>
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
          {chainInfo && <FilterStrip />}
          {chainInfo && <PaginatedBlocks dataLoaderFn={fetchBlocks} />}
        </Container>
      </Layout>
    );
  }

  async loadChainInfo() {
    this.setState({ loading: true });
    const { info: chainInfo } = await forge.getChainInfo();
    this.setState({ loading: false, chainInfo });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 6}px 8%;
  width: auto;
  max-width: 1280px;
`;

export default withRoot(withI18n(withRouter(Blocks)));
