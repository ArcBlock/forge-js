import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { getTxType } from '../../../../libs/util';
import TxCard from '../tx_card/index';

const Timeline = ({ txs }) => (
  <Container>
    {txs.map(tx => {
      const type = getTxType(tx);
      return (
        <React.Fragment>
          <div className="timeline__item timeline__item--quarter">
            <Typography component="div" variant="h6" className="quarter-mark">
              {type}
            </Typography>
          </div>
          <div className="timeline__items">
            <Paper key={tx.hash} className="timeline__item">
              <TxCard tx={tx} type={type} />
            </Paper>
          </div>
        </React.Fragment>
      );
    })}
  </Container>
);

Timeline.propTypes = {
  txs: PropTypes.array.isRequired,
};

export default Timeline;

const Container = styled.div`
  position: relative;
  overflow: auto;

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background: ${props => props.theme.typography.color.border};
    left: 50px;
  }

  .quarter-mark {
    margin-bottom: 40px;
    text-align: center;
    font-weight: bold;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.typography.color.border};
    z-index: ${props => props.theme.zIndex.appBar};
    background: #fff;
    position: relative;
    clear: both;
    width: 60px;
    height: 60px;
    line-height: 60px;
    color: ${props => props.theme.typography.color.blue};
  }

  .timeline__items {
    list-style: none;
    padding-left: 90px;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .timeline__item {
    box-sizing: border-box;
    padding: 25px 30px;
    margin: 20px 2px;
    width: 95%;
    position: relative;
    box-shadow: 0 0 4px 0 ${props => props.theme.typography.color.border};
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 4px 0 ${props => props.theme.typography.color.gray};
    }

    &:before {
      content: '';
      height: 1px;
      background: ${props => props.theme.typography.color.border};
      position: absolute;
      width: 40px;
      top: 50%;
      left: -42px;
    }
  }

  .timeline__item--quarter {
    padding-left: 90px;
    position: relative;
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }

    &:before {
      top: 50%;
      left: 40px;
    }

    .quarter-mark {
      position: absolute;
      top: calc(50% - 30px);
      left: 16px;
      margin: 0;
    }
  }
`;
