import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Icon8 from '../../../components/icon8';
import forge from '../../../libs/forge';

export default class SummarySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
    };
  }

  componentDidMount() {
    this.loadSummary();
  }

  render() {
    const { loading, data } = this.state;
    return (
      <React.Fragment>
        {loading && (
          <React.Fragment>
            <Typography component="h3">Loading data...</Typography>
            <CircularProgress />
          </React.Fragment>
        )}
        {!loading && data && this.renderSummary(data)}
      </React.Fragment>
    );
  }

  renderSummary(data) {
    const metrics = {
      blocks: data.numBlocks[0],
      txs: data.numTxs[0],
      accounts: data.numDeclareTxs[0],
      assets: data.numCreateAssetTxs[0],
      stakes: data.numStakeTxs[0],
      validators: data.numValidators[0],
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
          <Grid key={x} item xs={12} sm={6} md={4}>
            <Metric>
              <div className="metric__image">
                <Icon8 name={images[x]} alt={x} size={36} />
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
      getForgeStatistics: { forgeStatistics: data },
    } = await forge.getForgeStatistics();
    this.setState({ loading: false, data });
  }
}

const Metric = styled.div`
  padding: 20px 0 0;

  .metric__image {
    margin-bottom: 10px;
  }

  .metric__number {
    margin-bottom: 3px;
    font-size: 40px;
    font-weight: 900;
    line-height: 54px;
    color: #222222;
  }

  .metric__name {
    font-size: 14px;
    text-transform: uppercase;
    line-height: 1.71;
    letter-spacing: 2px;
    color: #222222;
  }
`;
