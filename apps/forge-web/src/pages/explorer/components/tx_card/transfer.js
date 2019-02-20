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
    <div className="info-row">
      <Typography component="p" className="hash" title={tx.hash}>
        <Link to={`/node/explorer/txs/${tx.hash}`}>{tx.hash}</Link>
      </Typography>
      <Typography component="p" className="time" title={tx.time}>
        {moment(tx.time).fromNow()}
      </Typography>
    </div>
    <div className="info-row">
      <Typography component="p" className="sender" title={tx.tx.from}>
        <Link to={`/node/explorer/accounts/${tx.tx.from}`}>{tx.tx.from}</Link>
      </Typography>
      <IconFa
        name="arrow-right"
        size={14}
        rounded={true}
        color={theme.colors.blue}
        className="type-icon"
      />
      <Typography component="p" className="receiver" title={tx.tx.itx.to}>
        <Link to={`/node/explorer/accounts/${tx.tx.itx.to}`}>{tx.tx.itx.to}</Link>
      </Typography>
    </div>
    <div className="info-row">Transfer: Assets + Token</div>
  </Container>
);

const Container = styled.div`
  .info-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

  .time,
  .hash a {
    color: #9b9b9b;
    font-size: 14px;
  }

  .sender,
  .receiver {
    width: 40%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    font-size: 14px;

    a {
      color: #222222;
    }
  }

  .receiver {
    text-align: right;
  }

  .type-icon {
    margin: auto 5px;
  }
`;

TransferTxSummary.propTypes = {
  tx: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(TransferTxSummary);
