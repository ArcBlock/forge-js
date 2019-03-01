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

import { getTxType } from '../../../../libs/util';

const components = {
  CreateAsset: TxCreateAsset,
  UpdateAsset: TxCreateAsset,
  ActivateAsset: TxCreateAsset,
  Transfer: TxTransfer,
  Stake: TxStake,
  Exchange: TxExchange,
  DeclareFile: TxDeclareFile,
  Declare: TxDeclare,
  AccountMigrate: TxAccountMigrate,
};

const TxCard = React.memo(({ tx, time, ...rest }) => {
  const type = getTxType(tx);
  if (!tx.time) {
    tx.time = time;
  }
  const TxComponent = components[type] || TxDefault;
  return (
    <Container>
      <TxComponent tx={tx} type={type} {...rest} />
    </Container>
  );
});

/* padding: ${props => props.theme.spacing.unit * 3}px; */
const Container = styled.div`
  margin-bottom: ${props => props.theme.spacing.unit * 5}px;
  padding-left: ${props => props.theme.spacing.unit * 2}px;
  border-left: 1px solid ${props => props.theme.colors.gray};
  width: 100%;
  max-width: 800px;
`;

TxCard.propTypes = {
  tx: PropTypes.object.isRequired,
  time: PropTypes.string,
};

TxCard.defaultProps = {
  time: '',
};

export default TxCard;
