import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { withTheme } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import IconFa from '../../../../components/iconfa';

// eslint-disable-next-line
const Meta = ({ itx }) => {
  const hasAssets = !!(Array.isArray(itx.assets) && itx.assets.length);
  const hasValue = !!itx.value;
  return (
    <div className="meta">
      {hasAssets && (
        <Tooltip title={itx.assets.join(',')}>
          <IconFa name="gem" size={14} className="meta-icon" />
        </Tooltip>
      )}
      {hasAssets && hasValue && <span className="meta-separator">+</span>}
      {hasValue && (
        <span>
          <IconFa name="coins" size={14} className="meta-icon" />
          <span>{itx.value} arc</span>
        </span>
      )}
    </div>
  );
};

const ExchangeTxSummary = ({ tx, theme, ...rest }) => (
  <Container {...rest}>
    <div className="info-row info-row--full">
      <Typography component="p" className="hash" title={tx.hash}>
        <Link to={`/node/explorer/txs/${tx.hash}`}>{tx.hash}</Link>
      </Typography>
      <Typography component="p" className="time" title={tx.time}>
        {moment(tx.time).fromNow()}
      </Typography>
    </div>
    <div className="info-row">
      <div className="sender">
        <Typography component="p" title={tx.tx.from}>
          <Link to={`/node/explorer/accounts/${tx.tx.from}`}>{tx.tx.from}</Link>
        </Typography>
        <Meta itx={tx.tx.itx.sender} />
      </div>
      <IconFa
        name="exchange"
        size={14}
        rounded={true}
        color={theme.colors.blue}
        className="type-icon"
      />
      <div className="receiver">
        <Typography component="p" title={tx.tx.itx.to}>
          <Link to={`/node/explorer/accounts/${tx.tx.itx.to}`}>{tx.tx.itx.to}</Link>
        </Typography>
        <Meta itx={tx.tx.itx.receiver} />
      </div>
    </div>
  </Container>
);

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
    color: #9b9b9b;
    font-size: 12px;
  }

  .sender,
  .receiver {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
      height: 28px;
      margin-bottom: 5px;
    }

    a {
      color: #222222;
      font-size: 14px;
    }
  }

  .type-icon {
    margin: 0 16px;
  }

  .meta {
    font-size: 14px;
    .meta-icon {
      margin-right: 8px;
    }

    .meta-separator {
      margin-right: 8px;
    }
  }
`;

ExchangeTxSummary.propTypes = {
  tx: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(ExchangeTxSummary);
