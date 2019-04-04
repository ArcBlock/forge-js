import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dayjs from 'dayjs';
import numeral from 'numeral';
import useAsync from 'react-use/lib/useAsync';
import useBoolean from 'react-use/lib/useBoolean';
import { fromUnitToToken } from '@arcblock/forge-util';
import { withTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';

import Icon8 from '../../../components/icon8';
import AsyncComponent from '../../../components/async';
import BlinkingDot from '../../../components/blinking_dot';
import forge from '../../../libs/forge';
import { createSeries } from '../../../libs/util';
import { useInterval, useTokenInfo, useLiveUpdate } from '../../../libs/hooks';

const SparkLine = AsyncComponent(() => import('../../../components/sparkline'));

async function fetchBoth() {
  const date = dayjs.utc().format('YYYY-MM-DD');
  const [{ forgeStatistics: summary }, { forgeStatistics: trend }] = await Promise.all([
    forge().getForgeStatistics(),
    forge().getForgeStatisticsByHour({ date }),
  ]);

  return { summary, trend };
}

async function fetchLatest() {
  const [{ forgeStatistics: summary }] = await Promise.all([forge().getForgeStatistics()]);

  return { summary };
}

function Metrics({ theme, sparkline, itemSize, size }) {
  const state = useAsync(sparkline ? fetchBoth : fetchLatest);
  const [updates, setUpdates] = useState(null);
  const [liveUpdate, setLiveUpdate] = useLiveUpdate();
  const [animation, setAnimation] = useBoolean(false);
  const [token] = useTokenInfo();

  // Pull
  useInterval(
    async () => {
      try {
        let res = null;
        if (sparkline) {
          res = await fetchBoth();
        } else {
          res = await fetchLatest();
        }
        setUpdates(res);
        setAnimation(true);

        setTimeout(() => {
          setAnimation(false);
        }, 700);
      } catch (err) {
        console.error(err);
      }
    },
    liveUpdate ? 5000 : null
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
      acc[x] = numeral(fromUnitToToken(acc[x], token.decimal)).format('0,0.00');
    } else {
      acc[x] = numeral(acc[x]).format('0,0');
    }
    return acc;
  }, {});

  let trends = {};
  if (sparkline) {
    trends = Object.keys(mapping).reduce((acc, x) => {
      const hour = new Date().getHours();
      const dataPoints = trend[mapping[x]];
      acc[x] = dataPoints.map((d, i) => {
        const date = new Date();
        // because dataPoints have no bounded timestamp, we have to calculate offset
        date.setHours(hour - (dataPoints.length - i));
        date.setMinutes(0);
        date.setSeconds(0);
        return {
          time: dayjs(date).format('YYYY-MM-DD HH:mm'),
          [x]: x === 'stakes' ? Number(fromUnitToToken(d)) : Number(d),
        };
      });
      return acc;
    }, {});
  }

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
      <Tooltip
        title={
          liveUpdate
            ? 'Live updates enabled, click to disable'
            : 'Live updates disabled, click to enable'
        }>
        <span className="refresh-toggler" onClick={() => setLiveUpdate(!liveUpdate)}>
          <BlinkingDot
            theme={liveUpdate ? 'green' : 'red'}
            size={14}
            duration={liveUpdate ? '5s' : '0'}
            style={{ marginRight: '8px' }}
          />
          {liveUpdate ? 'Live Updates On' : 'Live Updates Off'}
        </span>
      </Tooltip>
      <Grid container spacing={40}>
        {Object.keys(metrics).map(x => (
          <Grid key={x} item {...itemSize}>
            <Metric size={size}>
              <div className="metric__image">
                <Icon8
                  name={images[x]}
                  alt={x}
                  size={size === 'small' ? 26 : 36}
                  color={theme.typography.color.main}
                />
              </div>
              <div className={`metric__number ${animation ? 'animated' : ''}`}>{metrics[x]}</div>
              <div className="metric__name">{x}</div>
              {sparkline && (
                <div className="metric__trend">
                  <SparkLine data={trends[x]} series={[createSeries({ dataKey: x })]} />
                </div>
              )}
            </Metric>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Metrics.propTypes = {
  theme: PropTypes.object.isRequired,
  itemSize: PropTypes.object,
  sparkline: PropTypes.bool,
  size: PropTypes.string,
};

Metrics.defaultProps = {
  sparkline: true,
  itemSize: {
    xs: 12,
    sm: 6,
    md: 4,
  },
  size: 'normal',
};

const Container = styled.div`
  position: relative;

  .refresh-toggler {
    position: absolute;
    top: -40px;
    right: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
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
    font-size: ${props => (props.size === 'small' ? 32 : 40)}px;
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

export default withTheme()(Metrics);
