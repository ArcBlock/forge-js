import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';

import SparkLine from '../../../components/sparkline';
// import forge from '../../../libs/forge';
import { delay } from '../../../libs/util';

async function fetchActivity(address, delayMS) {
  await delay(delayMS);
  // await forge.getForgeStatistics({ address });

  // https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
  // Some random data
  const rows = [...Array(14).keys()].map(i => ({
    time: moment()
      .subtract(i, 'days')
      .format('YYYY-MM-DD'),
    txs: 10 + Math.round(Math.random() * 50),
  }));

  return rows;
}

export default function AccountActivity({ address, delayMS }) {
  const state = useAsync(async () => fetchActivity(address, delayMS), [address, delayMS]);

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
  address: PropTypes.string.isRequired,
  delayMS: PropTypes.number,
};

AccountActivity.defaultProps = {
  delayMS: 1000,
};

const ChartContainer = styled.div`
  height: 40px;
  width: 100%;
`;
