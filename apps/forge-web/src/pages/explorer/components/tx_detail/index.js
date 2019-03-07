import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TxTransfer from './transfer';
import TxExchange from './exchange';
import TxStake from './stake';
import TxCreateAsset from './create_asset';
import TxUpdateAsset from './update_asset';
import TxDeclare from './declare';
import TxAccountMigrate from './account_migrate';
import TxDefault from './default';

import { getTxType } from '../../../../libs/util';

const components = {
  CreateAsset: TxCreateAsset,
  UpdateAsset: TxUpdateAsset,
  Transfer: TxTransfer,
  Stake: TxStake,
  Exchange: TxExchange,
  // DeclareFile: TxDeclareFile,
  Declare: TxDeclare,
  AccountMigrate: TxAccountMigrate,
};

const TxCard = ({ tx, ...rest }) => {
  const type = getTxType(tx);
  const TxComponent = components[type] || TxDefault;
  return (
    <Container>
      <TxComponent tx={tx} {...rest} />
    </Container>
  );
};

/* padding: ${props => props.theme.spacing.unit * 3}px; */
const Container = styled.div`
  margin-bottom: ${props => props.theme.spacing.unit * 5}px;
  max-width: 800px;

  .meta-icon {
    margin-right: 8px;
  }
`;

TxCard.propTypes = {
  tx: PropTypes.object.isRequired,
};

export default TxCard;
