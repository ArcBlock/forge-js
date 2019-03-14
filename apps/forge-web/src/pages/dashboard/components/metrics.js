import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { fromArc } from '@arcblock/forge-util';
import { useAsync, useBoolean, useLocalStorage } from 'react-use';
import { withTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';

import Icon8 from '../../../components/icon8';
import SparkLine from '../../../components/sparkline';
import forge from '../../../libs/forge';
import { useInterval } from '../../../libs/hooks';

async function fetchSummary() {
  const date = moment().format('YYYY-MM-DD');
  const [{ forgeStatistics: summary }, { forgeStatistics: trend }] = await Promise.all([
    forge.getForgeStatistics(),
    forge.getForgeStatisticsByHour({ date }),
  ]);

  return { summary, trend };
}

function MetricsSection({ theme }) {
  const state = useAsync(fetchSummary);
  const [updates, setUpdates] = useState(null);
  const [autoRefresh, setAutoRefresh] = useBoolean(true);
  const [animation, setAnimation] = useBoolean(false);
  const [token] = useLocalStorage('token');

  // Pull
  useInterval(
    async () => {
      try {
        const res = await fetchSummary();
        setUpdates(res);
        setAnimation(true);

        setTimeout(() => {
          setAnimation(false);
        }, 700);
      } catch (err) {
        console.error(err);
      }
    },
    autoRefresh ? 4000 : null
  );

  if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return <p className="error">{state.error.message}</p>;
  }

  const { summary, trend } = updates || state.value;
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
      acc[x] = `${fromArc(acc[x], token.decimal)}`;
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
        [x]: x === 'stakes' ? Number(fromArc(d)) : Number(d),
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
    <Container>
      <div className="refresh-toggler">
        <Tooltip
          title={
            autoRefresh
              ? 'Realtime updates enabled, click to disable'
              : 'Realtime updates disabled, click to enable'
          }>
          <FormControlLabel
            control={
              <Switch
                checked={autoRefresh}
                onChange={e => setAutoRefresh(e.target.checked)}
                value="autoRefresh"
                color="primary"
              />
            }
            label={autoRefresh ? 'Refresh On' : 'Refresh Off'}
          />
        </Tooltip>
      </div>
      <Grid container spacing={40}>
        {Object.keys(metrics).map(x => (
          <Grid key={x} item xs={12} sm={6} md={4}>
            <Metric>
              <div className="metric__image">
                <Icon8 name={images[x]} alt={x} size={36} color={theme.typography.color.main} />
              </div>
              <div className={`metric__number ${animation ? 'animated' : ''}`}>{metrics[x]}</div>
              <div className="metric__name">{x}</div>
              <div className="metric__trend">
                <SparkLine data={trends[x]} series={[SparkLine.createSeries({ dataKey: x })]} />
              </div>
            </Metric>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

MetricsSection.propTypes = {
  theme: PropTypes.object.isRequired,
};

const Container = styled.div`
  position: relative;

  .refresh-toggler {
    position: absolute;
    top: -40px;
    right: 0;

    .toggler {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icon {
      margin-left: 5px;
    }
  }
`;

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
    color: ${props => props.theme.typography.color.main};
  }

  .animated {
    animation: blink 250ms reverse both;
  }

  .metric__name {
    margin-left: 3px;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 1.71;
    letter-spacing: 2px;
    color: ${props => props.theme.typography.color.main};
  }

  .metric__trend {
    margin-top: 10px;
    height: 80px;
    width: 100%;
    max-width: 320px;
  }

  /* http://animista.net/play/attention/blink/blink-2 */
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default withTheme()(MetricsSection);
