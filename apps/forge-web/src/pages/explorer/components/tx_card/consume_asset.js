import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import get from 'lodash/get';
import { withTheme } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import IconFa from '../../../../components/iconfa';

const ConsumeAssetTx = React.memo(({ tx, type, theme, ...rest }) => {
  const address = get(tx, 'tx.from', '');
  const issuer = get(tx, 'tx.itx.issuer', '');
  return (
    <Container {...rest}>
      <div className="info-row">
        <Typography component="p" className="hash" title={tx.hash}>
          <Link to={`/node/explorer/txs/${tx.hash}`}># {tx.hash}</Link>
        </Typography>
        <Typography component="p" className="time" title={tx.time}>
          {moment(tx.time).fromNow()}
        </Typography>
      </div>
      <div className="info-row" style={{ justifyContent: 'flex-start' }}>
        <Tooltip title={type} placement="top">
          <IconFa
            name="trash"
            size={14}
            rounded={true}
            color={theme.colors.red}
            className="type-icon"
          />
        </Tooltip>
        <Typography component="p" className="value">
          <span className="type">{type}</span>
          {!!issuer && <Link to={`/node/explorer/accounts/${issuer}`}>Issuer: {issuer}</Link>}
        </Typography>
        {address && (
          <Typography component="p" className="address" title={address}>
            <Link to={`/node/explorer/accounts/${address}`}>By: {address}</Link>
          </Typography>
        )}
      </div>
    </Container>
  );
});

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
    color: ${props => props.theme.typography.color.gray};
    font-size: 12px;
  }

  .value,
  .address {
    width: 40%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    font-size: 14px;

    a {
      color: ${props => props.theme.typography.color.main};
    }

    .type {
      text-transform: capitalize;
      margin-right: 8px;
    }
  }

  .type-icon {
    margin-right: 16px;
  }
`;

ConsumeAssetTx.propTypes = {
  tx: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(ConsumeAssetTx);
