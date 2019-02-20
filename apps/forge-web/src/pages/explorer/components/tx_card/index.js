import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TxTransfer from './transfer';
import TxExchange from './exchange';
import TxStake from './stake';
import TxCreateAsset from './create_asset';
import TxDeclare from './declare';
import TxDeclareFile from './declare_file';
import TxAccountMigrate from './account_migrate';
import TxDefault from './default';

const components = {
  create_asset: TxCreateAsset,
  update_asset: TxCreateAsset,
  transfer: TxTransfer,
  stake: TxStake,
  exchange: TxExchange,
  declare_file: TxDeclareFile,
  declare: TxDeclare,
  account_migrate: TxAccountMigrate,
};

const TxCard = ({ tx, ...rest }) => {
  // const type = tx.type || tx.tx.itx.__typename.replace(/Tx$/, ''); // eslint-disable-line
  const TxComponent = components[tx.type] || TxDefault;
  return (
    <Container>
      <TxComponent tx={tx} {...rest} />
    </Container>
  );
};

/* padding: ${props => props.theme.spacing.unit * 3}px; */
const Container = styled.div`
  margin-bottom: ${props => props.theme.spacing.unit * 5}px;
  padding-left: ${props => props.theme.spacing.unit * 2}px;
  border-left: 1px solid ${props => props.theme.colors.gray};
`;

TxCard.propTypes = {
  tx: PropTypes.object.isRequired,
};

export default TxCard;
