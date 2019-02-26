import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Icon8 from '../../../components/icon8';
import SparkLine from '../../../components/sparkline';
import forge from '../../../libs/forge';
import { fromArcToReadable } from '../../../libs/util';

export default class SummarySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      summary: null,
      trend: null,
    };
  }

  componentDidMount() {
    this.loadSummary();
  }

  render() {
    const { loading, summary, trend } = this.state;
    return (
      <React.Fragment>
        {loading && (
          <React.Fragment>
            <Typography component="h3">Loading summary...</Typography>
            <CircularProgress />
          </React.Fragment>
        )}
        {!loading && summary && this.renderSummary(summary, trend)}
      </React.Fragment>
    );
  }

  renderSummary(summary, trend) {
    const mapping = {
      blocks: 'numBlocks',
      txs: 'numTxs',
      accounts: 'numDeclareTxs',
      assets: 'numCreateAssetTxs',
      stakes: 'numStakes',
      validators: 'numValidators',
    };

    const metrics = Object.keys(mapping).reduce((acc, x) => {
      [acc[x]] = summary[mapping[x]];
      if (x === 'stakes') {
        acc[x] = Number(fromArcToReadable(acc[x]));
      }
      return acc;
    }, {});

    const trends = Object.keys(mapping).reduce((acc, x) => {
      acc[x] = trend[mapping[x]].map((d, i) => {
        // FIXME: use same date as `this.loadSummary`
        const date = new Date();
        date.setHours(i + 1);
        date.setMinutes(0);
        date.setSeconds(0);
        return {
          time: moment(date).format('YYYY-MM-DD HH:mm'),
          [x]: x === 'stakes' ? Number(fromArcToReadable(d)) : Number(d),
        };
      });
      return acc;
    }, {});

    const images = {
      blocks: 'front-view',
      txs: 'activity-history',
      accounts: 'user-folder',
      assets: 'money-bag-bitcoin',
      stakes: 'coin-in-hand',
      validators: 'edit-property',
    };

    return (
      <Grid container spacing={40}>
        {Object.keys(metrics).map(x => (
          <Grid key={x} item xs={12} sm={6} md={4}>
            <Metric>
              <div className="metric__image">
                <Icon8 name={images[x]} alt={x} size={36} />
              </div>
              <div className="metric__number">{metrics[x]}</div>
              <div className="metric__name">{x}</div>
              <div className="metric__trend">
                <SparkLine data={trends[x]} series={[SparkLine.createSeries({ dataKey: x })]} />
              </div>
            </Metric>
          </Grid>
        ))}
      </Grid>
    );
  }

  async loadSummary() {
    this.setState({ loading: true });
    const date = moment().format('YYYY-MM-DD');
    const [{ forgeStatistics: summary }, { forgeStatistics: trend }] = await Promise.all([
      forge.getForgeStatistics(),
      forge.getForgeStatisticsByHour({ date }),
    ]);

    this.setState({ loading: false, summary, trend });
  }
}

const Metric = styled.div`
  padding: 20px 0 0;

  .metric__image {
    margin-bottom: 10px;
    margin-left: 3px;
  }

  .metric__number {
    margin-bottom: 3px;
    margin-left: 3px;
    font-size: 40px;
    font-weight: 900;
    line-height: 54px;
    color: #222222;
  }

  .metric__name {
    margin-left: 3px;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 1.71;
    letter-spacing: 2px;
    color: #222222;
  }

  .metric__trend {
    margin-top: 10px;
    height: 80px;
    width: 100%;
    max-width: 320px;
  }
`;
