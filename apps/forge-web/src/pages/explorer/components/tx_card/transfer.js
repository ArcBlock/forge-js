import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Typography from '@material-ui/core/Typography';
import TransferIcon from '@material-ui/icons/ArrowForwardRounded';

const TransferTxSummary = ({ tx, ...rest }) => (
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
      <Typography component="p" className="sender" title={tx.sender}>
        <Link to={`/node/explorer/accounts/${tx.sender}`}>{tx.sender}</Link>
      </Typography>
      <div className="type-icon">
        <TransferIcon className="transfer-icon" size={25} color="inherit" />
      </div>
      <Typography component="p" className="receiver" title={tx.receiver}>
        <Link to={`/node/explorer/accounts/${tx.receiver}`}>{tx.receiver}</Link>
      </Typography>
    </div>
    <div className="info-row">Assets + Token</div>
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
};

export default TransferTxSummary;
