import React, { useState } from 'react';
import { useAsync, useWindowSize } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';

import AsyncComponent from '../../../components/async';
import api from '../../../libs/forge';
import { useInterval, useThemeMode } from '../../../libs/hooks';

const AsyncGlobe = AsyncComponent(() => import('../../../components/globe'));

async function fetchPeers() {
  const { validatorsInfo } = await api().getValidatorsInfo();
  return (validatorsInfo.validators || []).map(x => ({
    id: x.address,
    latitude: x.geoInfo.latitude,
    longitude: x.geoInfo.longitude,
    title: x.address,
    country: x.geoInfo.country,
    description: `Location: ${x.geoInfo.city},${x.geoInfo.country}`,
  }));
}

async function fetchLatestProposer() {
  try {
    const { info } = await api().getChainInfo();
    const { block } = await api().getBlock(
      { height: info.blockHeight },
      { ignoreFields: ['block.txs'] }
    );
    return block.proposer.toLowerCase();
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

export default function ProducerGlobe() {
  const state = useAsync(fetchPeers);
  const { width } = useWindowSize();
  const [theme] = useThemeMode();
  const [activeMarkerId, setActiveMarker] = useState(null);

  useInterval(async () => {
    if (state.value) {
      const proposer = await fetchLatestProposer();
      const ids = state.value.map(x => x.id);
      const index = Math.floor(Math.random() * ids.length);
      setActiveMarker(ids[index] || proposer);
    }
  }, 5000);

  if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return <p>{state.error.message}</p>;
  }

  return (
    <AsyncGlobe
      width={width > 540 ? 540 : width - 20}
      height={width > 540 ? 732 : width - 20}
      theme={theme}
      markers={state.value}
      activeMarkerId={activeMarkerId}
    />
  );
}
