import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import ChainInfo from './components/chain_info';

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
      blocks: null,
      chainInfo: null,
    };
  }

  componentDidMount() {
    this.loadStatus();
  }

  render() {
    const { loading, chainInfo, blocks } = this.state;
    return (
      <Layout title="Blocks" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {chainInfo && <ChainInfo {...chainInfo} />}
          {blocks && (
            <div>
              <Typography component="h3">Block List</Typography>
              <pre>
                <code>{JSON.stringify(blocks, true, '  ')}</code>
              </pre>
            </div>
          )}
        </Container>
      </Layout>
    );
  }

  async loadStatus() {
    this.setState({ loading: true });
    const { info: chainInfo } = await forge.getChainInfo();
    const { blockHeight } = chainInfo;
    const { blocks } = await forge.getBlocks(
      {
        maxHeight: blockHeight,
        minHeight: blockHeight - 10,
      },
      {
        ignoreFields: ['blocks.txs'],
      }
    );
    console.log(blocks);

    this.setState({ loading: false, chainInfo, blocks });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 9}px ${props => props.theme.spacing.unit * 15}px;
  width: 100%;
  box-sizing: border-box;
`;

export default withRoot(withI18n(BlockList));
