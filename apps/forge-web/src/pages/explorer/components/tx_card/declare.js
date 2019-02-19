import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Typography from '@material-ui/core/Typography';
import DeclareIcon from '@material-ui/icons/RecordVoiceOver';

const DeclareTxSummary = ({ tx, ...rest }) => (
  <Container {...rest}>
    <div className="info-row">
      <Typography component="p" className="action">
        Declare Account
      </Typography>
      <Typography component="p" className="time" title={tx.time}>
        {moment(tx.time).fromNow()}
      </Typography>
    </div>
    <div className="info-row" style={{ justifyContent: 'flex-start' }}>
      <div className="type-icon">
        <DeclareIcon size={25} color="inherit" />
      </div>
      <Typography component="p" className="value" title={tx.receiver}>
        {tx.tx.itx.moniker}
      </Typography>
      <Typography component="p" className="hash" title={tx.hash}>
        <Link to={`/node/explorer/txs/${tx.hash}`}>{tx.hash}</Link>
      </Typography>
    </div>
    <div className="info-row">
      <Typography component="p" className="type" title={tx.receiver}>
        {JSON.stringify(tx.tx.itx.type)}
      </Typography>
    </div>
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
  .action,
  .type {
    color: #9b9b9b;
    font-size: 14px;
  }

  .value,
  .hash {
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

  .type-icon {
    margin-right: 16px;
  }
`;

DeclareTxSummary.propTypes = {
  tx: PropTypes.object.isRequired,
};

export default DeclareTxSummary;
