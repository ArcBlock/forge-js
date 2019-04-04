import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import styled from 'styled-components';
import useAsync from 'react-use/lib/useAsync';

import CircularProgress from '@material-ui/core/CircularProgress';

import AsyncComponent from '../../../components/async';
import { delay, createSeries } from '../../../libs/util';

const SparkLine = AsyncComponent(() => import('../../../components/sparkline'));

async function formatActivity(data, delayMS) {
  await delay(delayMS);

  const rows = [...Array(data.length).keys()].map(i => ({
    time: dayjs()
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
      <SparkLine data={state.value} series={[createSeries('txs')]} />
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
