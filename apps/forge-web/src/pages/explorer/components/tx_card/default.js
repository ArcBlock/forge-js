import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { getExplorerUrl } from '../../../../libs/util';
import dayjs from '../../../../libs/dayjs';

const DefaultTxSummary = React.memo(({ tx, ...rest }) => (
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
      <pre>
        <code>{JSON.stringify(tx, true, '  ')}</code>
      </pre>
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
`;

DefaultTxSummary.propTypes = {
  tx: PropTypes.object.isRequired,
};

export default DefaultTxSummary;
