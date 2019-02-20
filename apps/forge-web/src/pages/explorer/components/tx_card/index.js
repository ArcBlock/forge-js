import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

import TxTransfer from './transfer';
import TxExchange from './exchange';
import TxStake from './stake';
import TxCreateAsset from './create_asset';
import TxDeclare from './declare';
import TxDeclareFile from './declare_file';
import TxAccountMigrate from './account_migrate';
import TxDefault from './default';

const components = {
  CreateAsset: TxCreateAsset,
  UpdateAsset: TxCreateAsset,
  Transfer: TxTransfer,
  Stake: TxStake,
  Exchange: TxExchange,
  DeclareFile: TxDeclareFile,
  Declare: TxDeclare,
  AccountMigrate: TxAccountMigrate,
};

const TxCard = ({ tx, ...rest }) => {
  const type = upperFirst(camelCase(tx.type)) || tx.tx.itx.__typename.replace(/Tx$/, ''); // eslint-disable-line
  const TxComponent = components[type] || TxDefault;
  if (type === 'Exchange') {
    console.log(tx);
  }
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
  max-width: 800px;
`;

TxCard.propTypes = {
  tx: PropTypes.object.isRequired,
};

export default TxCard;
