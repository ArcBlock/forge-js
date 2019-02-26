import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { withTheme } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import IconFa from '../../../../components/iconfa';

const DeclareTxSummary = React.memo(({ tx, theme, ...rest }) => (
  <Container {...rest}>
    <div className="info-row">
      <Typography component="p" className="hash" title={tx.hash}>
        <Link to={`/node/explorer/txs/${tx.hash}`}>{tx.hash}</Link>
      </Typography>
      <Typography component="p" className="time" title={tx.time}>
        {moment(tx.time).fromNow()}
      </Typography>
    </div>
    <div className="info-row" style={{ justifyContent: 'flex-start' }}>
      <IconFa
        name="bullhorn"
        size={14}
        rounded={true}
        color={theme.colors.blue}
        className="type-icon"
      />
      <Typography component="p" className="value" title={tx.tx.itx.moniker}>
        Declare Account: {tx.tx.itx.moniker}
      </Typography>
    </div>
  </Container>
));

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
  .hash a,
  .type {
    color: #9b9b9b;
    font-size: 12px;
  }

  .value,
  .hash {
    width: auto;
    max-width: 49%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    font-size: 14px;
    margin-right: ${props => props.theme.spacing.unit}px;

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
  theme: PropTypes.object.isRequired,
};

export default withTheme()(DeclareTxSummary);
