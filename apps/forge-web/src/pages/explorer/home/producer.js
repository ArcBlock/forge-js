import React, { useState } from 'react';
import { useAsync, useWindowSize } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';

import AsyncComponent from '../../../components/async';
import api from '../../../libs/forge';
import { useInterval, useThemeMode } from '../../../libs/hooks';

const AsyncGlobe = AsyncComponent(() => import('../../../components/globe'));

async function fetchPeers() {
  const { netInfo } = await api().getNetInfo();
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

// TODO: remove this if we have accurate validator list
const markers = [
  {
    id: '3566236d63a94898a7aa65a4771176944f87dbc2',
    latitude: 37.34170150756836,
    longitude: -121.97530364990234,
    title: 'forge-sf',
    country: 'United States',
    description: 'Location: Santa Clara,United States',
  },
  {
    id: '84e8dad03c4a0b03a3b4782b2e70b6d145f0dbe5',
    latitude: 39.965301513671875,
    longitude: -83.02349853515625,
    title: 'forge-ohio',
    country: 'United States',
    description: 'Location: Columbus,United States',
  },
  {
    id: 'fe859a56a399aa1ea291849399263317bb83f33a',
    latitude: 1.2928999662399292,
    longitude: 103.85469818115234,
    title: 'forge-singapore',
    country: 'Singapore',
    description: 'Location: Singapore,Singapore',
  },
  {
    id: '3323fae45b01e298ff189d49f80db306bb6eb691',
    latitude: 50.115501403808594,
    longitude: 8.684200286865234,
    title: 'forge-frankfurt',
    country: 'Germany',
    description: 'Location: Frankfurt am Main,Germany',
  },
  {
    id: '372e93c22d13f522f0d26c395d12e1c63a4a991f',
    latitude: 40.83639907836914,
    longitude: -74.14029693603516,
    title: 'forge-ny',
    country: 'United States',
    description: 'Location: Clifton,United States',
  },
];

export default function ProducerGlobe() {
  const state = useAsync(fetchPeers);
  const { width } = useWindowSize();
  const [theme] = useThemeMode();
  const [activeMarkerId, setActiveMarker] = useState(null);

  useInterval(async () => {
    const proposer = await fetchLatestProposer();
    // TODO: remove this if we have accurate current block producer
    const ids = markers.map(x => x.id);
    const index = Math.floor(Math.random() * ids.length);
    setActiveMarker(ids[index] || proposer);
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
      markers={markers || state.value}
      activeMarkerId={activeMarkerId}
    />
  );
}
