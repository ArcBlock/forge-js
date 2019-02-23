/* eslint no-nested-ternary:"off" */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';

import forge from '../../../../libs/forge';

async function fetchAccountTxs(address) {
  const { transactions } = await forge.getAssets({ addressFilter: { sender: address } });
  return transactions;
}

function AccountTxs({ address }) {
  const state = useAsync(async () => fetchAccountTxs(address), [address]);
  return (
    <TxList>
      {state.loading ? (
        <CircularProgress />
      ) : state.error ? (
        <p>{state.error.message}</p>
      ) : (
        <div className="list">
          {state.value.map(x => (
            <pre>{JSON.stringify(x)}</pre>
          ))}
        </div>
      )}
    </TxList>
  );
}

AccountTxs.propTypes = {
  address: PropTypes.string.isRequired,
};

const TxList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default AccountTxs;
