import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';

import SparkLine from '../../../components/sparkline';
import { delay } from '../../../libs/util';

async function formatActivity(data, delayMS) {
  await delay(delayMS);

  const rows = [...Array(data.length).keys()].map(i => ({
    time: moment()
      .subtract(data.length - i, 'days')
      .format('YYYY-MM-DD'),
    txs: data[i],
  }));

  return rows;
}

export default function AccountActivity({ data, delayMS }) {
  const state = useAsync(async () => formatActivity(data, delayMS), [data, delayMS]);

  if (state.loading) {
    return <CircularProgress color="primary" size={32} />;
  }

  if (state.error) {
    return <p className="error">{state.error.message}</p>;
  }

  return (
    <ChartContainer>
      <SparkLine data={state.value} series={[SparkLine.createSeries('txs')]} />
    </ChartContainer>
  );
}

AccountActivity.propTypes = {
  data: PropTypes.array.isRequired,
  delayMS: PropTypes.number,
};

AccountActivity.defaultProps = {
  delayMS: 1000,
};

const ChartContainer = styled.div`
  height: 40px;
  width: 100%;
`;
