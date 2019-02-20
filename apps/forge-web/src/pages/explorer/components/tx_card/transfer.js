import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { withTheme } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import IconFa from '../../../../components/iconfa';

const TransferTxSummary = ({ tx, theme, ...rest }) => (
  <Container {...rest}>
    <div className="info-row info-row--full">
      <Typography component="p" className="hash" title={tx.hash}>
        <Link to={`/node/explorer/txs/${tx.hash}`}># {tx.hash}</Link>
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
        <div className="meta">
          {!!(Array.isArray(tx.tx.itx.assets) && tx.tx.itx.assets.length) && (
            <React.Fragment>
              <IconFa name="gem" size={14} className="meta-icon" />
              <span>+</span>
            </React.Fragment>
          )}
          <span>
            <IconFa name="coins" size={14} className="meta-icon" />
            <span>{tx.tx.itx.value} arc</span>
          </span>
        </div>
      </div>
      <IconFa
        name="arrow-right"
        size={14}
        rounded={true}
        color={theme.colors.blue}
        className="type-icon"
      />
      <div className="receiver">
        <Typography component="p" title={tx.tx.itx.to}>
          <Link to={`/node/explorer/accounts/${tx.tx.itx.to}`}>{tx.tx.itx.to}</Link>
        </Typography>
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
  }
`;

TransferTxSummary.propTypes = {
  tx: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(TransferTxSummary);
