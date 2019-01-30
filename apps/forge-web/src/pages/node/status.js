import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';
import forge from '../../libs/forge';

class Status extends Page {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
    };
  }

  componentDidMount() {
    this.loadStatus();
  }

  render() {
    const { loading, data } = this.state;
    return (
      <Layout title="Status" cookies={this.cookies}>
        <Container>
          <Typography component="h3">Node Status here...</Typography>
          {loading && <CircularProgress />}
          {data && (
            <pre>
              <code>{JSON.stringify(data, true, '  ')}</code>
            </pre>
          )}
        </Container>
      </Layout>
    );
  }

  async loadStatus() {
    this.setState({ loading: true });
    const {
      getChainInfo: { info: chain },
    } = await forge.getChainInfo();
    // const {
    //   getForgeState: { state: core },
    // } = await forge.getForgeState();
    const {
      getNetInfo: { netInfo: net },
    } = await forge.getNetInfo();
    const {
      getValidatorsInfo: { validatorsInfo: validators },
    } = await forge.getValidatorsInfo();
    this.setState({ loading: false, data: { chain, net, validators } });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 3}px;
`;

export default withRoot(withI18n(Status));
