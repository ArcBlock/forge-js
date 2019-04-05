import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import IconFa from '../../../../components/iconfa';
import { getExplorerUrl } from '../../../../libs/util';
import dayjs from '../../../../libs/dayjs';
import Payload from './payload';

const StakeTxSummary = React.memo(({ tx, theme, ...rest }) => (
  <Container {...rest}>
    <div className="info-row info-row--full">
      <Typography component="p" className="hash" title={tx.hash}>
        <Link to={getExplorerUrl(`/txs/${tx.hash}`)}># {tx.hash}</Link>
      </Typography>
      <Typography component="p" className="time" title={tx.time}>
        {dayjs(tx.time).fromNow()}
      </Typography>
    </div>
    <div className="info-row">
      <div className="sender">
        <Typography component="p" title={tx.tx.from}>
          <Link to={getExplorerUrl(`/accounts/${tx.tx.from}`)}>{tx.tx.from}</Link>
        </Typography>
        <Payload itx={tx.tx.itx} />
      </div>
      <Tooltip title="Stake Transaction" placement="top">
        <IconFa
          name="hands-usd"
          size={14}
          rounded={true}
          color={theme.colors.blue}
          className="type-icon"
        />
      </Tooltip>
      <div className="receiver">
        <Typography component="p" title={tx.tx.itx.to}>
          <Link to={getExplorerUrl(`/accounts/${tx.tx.itx.to}`)}>{tx.tx.itx.to}</Link>
        </Typography>
      </div>
    </div>
  </Container>
));

const Container = styled.div`
  .info-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;

    &:nth-last-of-type() {
      margin-bottom: 0;
    }

    a {
      padding-bottom: 2px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .info-row--full {
    justify-content: space-between;
    align-items: center;
  }

  .time,
  .hash a {
    color: ${props => props.theme.typography.color.gray};
    font-size: 12px;
  }

  .sender,
  .receiver {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    white-space: no-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: ${props => props.theme.typography.color.gray};

    p {
      text-align: left;
      height: 28px;
      margin-bottom: 5px;
    }

    a {
      color: ${props => props.theme.typography.color.main};
      font-size: 14px;
    }
  }

  .type-icon {
    margin: 0 16px;
  }

  .meta {
    font-size: 14px;
    font-weight: 600;
    .meta-icon,
    .meta-separator {
      margin-right: 8px;
    }
  }
`;

StakeTxSummary.propTypes = {
  tx: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(StakeTxSummary);
