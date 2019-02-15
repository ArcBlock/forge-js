import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

import forge from '../../libs/forge';

class Dashboard extends Page {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      stats: null,
    };
  }

  componentDidMount() {
    this.loadStats();
  }

  render() {
    const { loading, stats } = this.state;
    return (
      <Layout title="Dashboard" cookies={this.cookies}>
        <Container>
          <Typography component="h3">Dashboard here...</Typography>
          {loading && <CircularProgress />}
          {stats && (
            <div>
              <Typography component="h3">Chain Info</Typography>
              <pre>
                <code>{JSON.stringify(stats, true, '  ')}</code>
              </pre>
            </div>
          )}
        </Container>
      </Layout>
    );
  }

  async loadStats() {
    this.setState({ loading: true });
    const {
      getForgeStatistics: { forgeStatistics: stats },
    } = await forge.getForgeStatistics();
    console.log(stats);
    this.setState({ loading: false, stats });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 3}px;
`;

export default withRoot(withI18n(Dashboard));
