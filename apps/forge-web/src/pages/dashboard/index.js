import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
      summary: null,
    };
  }

  componentDidMount() {
    this.loadSummary();
  }

  render() {
    const { loading, summary } = this.state;
    return (
      <Layout title="Dashboard" cookies={this.cookies}>
        <Container>
          {loading && (
            <React.Fragment>
              <Typography component="h3">Loading data...</Typography>
              <CircularProgress />
            </React.Fragment>
          )}
          {!loading && summary && this.renderSummary(summary)}
        </Container>
      </Layout>
    );
  }

  renderSummary(summary) {
    const metrics = {
      blocks: summary.numBlocks[0],
      txs: summary.numTxs[0],
      accounts: summary.numDeclareTxs[0],
      assets: summary.numCreateAssetTxs[0],
      stakes: summary.numStakeTxs[0],
      validators: summary.numValidators[0],
    };

    const images = {
      blocks: 'front-view',
      txs: 'activity-history',
      accounts: 'user-folder',
      assets: 'money-bag-bitcoin',
      stakes: 'coin-in-hand',
      validators: 'edit-property',
    };

    return (
      <Grid container spacing={16}>
        {Object.keys(metrics).map(x => (
          <Grid key={x} item xs={12} sm={4}>
            <Metric>
              <div className="metric__image">
                <img alt={x} src={`https://img.icons8.com/dotty/36/000000/${images[x]}.png`} />
              </div>
              <div className="metric__number">{metrics[x]}</div>
              <div className="metric__name">{x}</div>
            </Metric>
          </Grid>
        ))}
      </Grid>
    );
  }

  async loadSummary() {
    this.setState({ loading: true });
    const {
      getForgeStatistics: { forgeStatistics: summary },
    } = await forge.getForgeStatistics();
    console.log(summary);
    this.setState({ loading: false, summary });
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 3}px;
`;

const Metric = styled.div`
  padding: 20px 20px 0;

  .metric__image {
    margin-bottom: 10px;
  }

  .metric__number {
    margin-bottom: 3px;
    font-family: Avenir;
    font-size: 40px;
    font-weight: 900;
    line-height: 54px;
    color: #222222;
  }

  .metric__name {
    font-family: Avenir-Roman;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 1.71;
    letter-spacing: 2px;
    color: #222222;
  }
`;

export default withRoot(withI18n(Dashboard));
