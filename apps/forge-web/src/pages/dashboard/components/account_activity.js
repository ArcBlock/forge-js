import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';

import SparkLine from '../../../components/sparkline';
import forge from '../../../libs/forge';
import { delay } from '../../../libs/util';

export default class AccountActivity extends React.Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    delayMS: PropTypes.number,
  };

  static defaultProps = {
    delayMS: 1000,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { loading, data } = this.state;

    if (loading || !data) {
      return <CircularProgress color="primary" size={24} />;
    }

    return (
      <ChartContainer>
        <SparkLine data={data} series={[SparkLine.createSeries('txs')]} />
      </ChartContainer>
    );
  }

  async loadData() {
    this.setState({ loading: true });

    const { delayMS, address } = this.props;

    await delay(delayMS);
    await forge.getForgeStatistics({ address });

    // https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
    // Some random data
    const rows = [...Array(14).keys()].map(i => ({
      time: moment()
        .subtract(i, 'days')
        .format('YYYY-MM-DD'),
      txs: 10 + Math.round(Math.random() * 50),
    }));

    this.setState({ loading: false, data: rows });
  }
}

const ChartContainer = styled.div`
  height: 60px;
  width: 100%;
`;
