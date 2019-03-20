import React, { useState } from 'react';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';

import AsyncComponent from '../../../components/async';
import api from '../../../libs/forge';
import { useInterval } from '../../../libs/hooks';

const AsyncGlobe = AsyncComponent(() => import('../../../components/globe'));

async function fetchPeers() {
  const { netInfo } = await api.getNetInfo();
  return netInfo.peers.map(x => ({
    id: x.id,
    latitude: x.geoInfo.latitude,
    longitude: x.geoInfo.longitude,
    title: x.moniker,
    country: x.geoInfo.country,
    description: `Location: ${x.geoInfo.city},${x.geoInfo.country}`,
  }));
}

async function fetchLatestProposer() {
  try {
    const { info } = await api.getChainInfo();
    const { block } = await api.getBlock(
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
  const [activeMarkerId, setActiveMarker] = useState(null);

  useInterval(async () => {
    const proposer = await fetchLatestProposer();
    setActiveMarker(proposer);
  }, 4000);

  if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return <p>{state.error.message}</p>;
  }

  return (
    <AsyncGlobe width={540} height={540} markers={state.value} activeMarkerId={activeMarkerId} />
  );
}
