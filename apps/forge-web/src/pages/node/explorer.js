import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

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
      <Layout title="BlockList" cookies={this.cookies}>
        <Container>
          <Typography component="h3">BlockList here...</Typography>
          {loading && <CircularProgress />}
          {chainInfo && (
            <div>
              <Typography component="h3">Chain Info</Typography>
              <pre>
                <code>{JSON.stringify(chainInfo, true, '  ')}</code>
              </pre>
            </div>
          )}
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
    const {
      getChainInfo: { info: chainInfo },
    } = await forge.getChainInfo();
    console.log(chainInfo);
    const { blockHeight } = chainInfo;
    const {
      getBlock: { block },
    } = await forge.getBlock({ height: blockHeight });
    console.log(block);

    this.setState({ loading: false, chainInfo, blocks: [block] });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 3}px;
`;

export default withRoot(withI18n(BlockList));
