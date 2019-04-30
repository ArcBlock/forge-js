import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import humanize from 'humanize-string';

import TxTransfer from './transfer';
import TxExchange from './exchange';
import TxStake from './stake';
import TxCreateAsset from './create_asset';
import TxConsumeAsset from './consume_asset';
import TxDeclare from './declare';
import TxPoke from './poke';
import TxDeclareFile from './declare_file';
import TxAccountMigrate from './account_migrate';
import TxUpgradeNode from './upgrade_node';
import TxDeployProtocol from './deploy_protocol';
import TxDefault from './default';

import { getTxType } from '../../../../libs/util';

const components = {
  CreateAsset: TxCreateAsset,
  UpdateAsset: TxCreateAsset,
  ConsumeAsset: TxConsumeAsset,
  Transfer: TxTransfer,
  Stake: TxStake,
  Exchange: TxExchange,
  DeclareFile: TxDeclareFile,
  UpgradeNode: TxUpgradeNode,
  DeployProtocol: TxDeployProtocol,
  Declare: TxDeclare,
  Poke: TxPoke,
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
      <TxComponent tx={tx} type={humanize(type)} {...rest} />
    </Container>
  );
});

/* padding: ${props => props.theme.spacing.unit * 3}px; */
const Container = styled.div`
  margin-bottom: ${props => props.theme.spacing.unit * 5}px;
  padding-left: ${props => props.theme.spacing.unit * 2}px;
  border-left: 1px solid ${props => props.theme.typography.color.gray};
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;

  .info-row {
    .hash {
      width: 75%;
      display: flex;
      a {
        word-break: break-all;
      }
    }
  }
`;

TxCard.propTypes = {
  tx: PropTypes.object.isRequired,
  time: PropTypes.string,
};

TxCard.defaultProps = {
  time: '',
};

export default TxCard;
