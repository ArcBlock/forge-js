/* eslint no-nested-ternary:"off" */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';

import forge from '../../../../libs/forge';

async function fetchAccountTxs(address) {
  const { assets } = await forge.getAssets({ ownerAddress: address });
  return assets;
}

function AssetList({ address }) {
  const state = useAsync(async () => fetchAccountTxs(address), [address]);
  return (
    <TxList>
      {state.loading ? (
        <CircularProgress />
      ) : state.error ? (
        <p>{state.error.message}</p>
      ) : (
        <React.Fragment>
          {state.value.map(x => (
            <pre>{JSON.stringify(x)}</pre>
          ))}
        </React.Fragment>
      )}
    </TxList>
  );
}

AssetList.propTypes = {
  address: PropTypes.string.isRequired,
};

const TxList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default AssetList;
