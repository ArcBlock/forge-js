import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import SparkLine from '../../../components/sparkline';
import forge from '../../../libs/forge';

export default class TransactionsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
      startDate: moment()
        .subtract(7, 'days')
        .format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
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

  renderSummary(trend) {
    const mapping = {
      DeclareAccount: 'numDeclareTxs',
      // DeclareFile: 'numDeclareFileTxs',
      CreateAsset: 'numCreateAssetTxs',
      // Stake: 'numStakeTxs',
      Transfer: 'numTransferTxs',
      Exchange: 'numExchangeTxs',
    };

    const { startDate } = this.state;
    const data = trend.numTransferTxs.map((v, i) => {
      const date = moment(startDate).add(i, 'days');
      const row = { time: date.format('YYYY-MM-DD') };
      Object.keys(mapping).forEach(key => {
        const value = Number(trend[mapping[key]][i]);
        row[key] = value || Math.round(Math.random() * 80);
      });
      return row;
    });

    const series = Object.keys(mapping).map(x => SparkLine.createSeries({ dataKey: x }));
    console.log({ series, data });

    return (
      <ChartContainer>
        <SparkLine data={data} series={series} legend={true} />
      </ChartContainer>
    );
  }

  // TODO: add dropdown to determine date range
  async loadSummary() {
    this.setState({ loading: true });
    const { startDate, endDate } = this.state;
    const { forgeStatistics: data } = await forge.getForgeStatisticsByDay({
      startDate,
      endDate,
    });
    this.setState({ loading: false, data });
  }
}

const ChartContainer = styled.div`
  height: 320px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 3px;
  padding-right: 3px;
`;
