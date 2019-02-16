import React from 'react';
import styled from 'styled-components';
import dateFns from 'date-fns';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

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
      stakes: 'numStakeTxs',
      validators: 'numValidators',
    };

    const metrics = Object.keys(mapping).reduce((acc, x) => {
      [acc[x]] = summary[mapping[x]];
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
          time: dateFns.format(date, 'YYYY-MM-DD HH:mm'),
          value: d,
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
              <div className="metric__trend">{this.renderTrend(trends[x])}</div>
            </Metric>
          </Grid>
        ))}
      </Grid>
    );
  }

  renderTrend(data) {
    return (
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 10 }}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ECE8E8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f8f8f8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            cursor={false}
            content={this.renderTooltip}
            wrapperStyle={{
              width: 'auto',
              minWidth: '150px',
              padding: '3px 5px',
              fontSize: '14px',
              color: '#ffffff',
              backgroundColor: '#4a4a4a',
              borderRadius: '2px',
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#868787"
            fillOpacity={1}
            fill="url(#gradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  renderTooltip(tip) {
    if (tip.payload[0] && tip.payload[0].payload) {
      const d = tip.payload[0].payload;
      return `${d.time} ${d.value}`;
    }

    return null;
  }

  async loadSummary() {
    this.setState({ loading: true });
    const date = dateFns.format(new Date(), 'YYYY-MM-DD');
    const [res1, res2] = await Promise.all([
      forge.getForgeStatistics(),
      forge.getForgeStatisticsByHour({ date }),
    ]);

    const {
      getForgeStatistics: { forgeStatistics: summary },
    } = res1;
    const {
      getForgeStatisticsByHour: { forgeStatistics: trend },
    } = res2;

    this.setState({ loading: false, summary, trend });
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

  .metric__trend {
    margin-top: 10px;
    height: 80px;
    width: 100%;
  }
`;
