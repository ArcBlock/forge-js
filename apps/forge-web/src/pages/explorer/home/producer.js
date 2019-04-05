import React, { useState } from 'react';
import useAsync from 'react-use/lib/useAsync';
import useWindowSize from 'react-use/lib/useWindowSize';

import CircularProgress from '@material-ui/core/CircularProgress';

import AsyncComponent from '../../../components/async';
import api from '../../../libs/forge';
import { useInterval, useThemeMode, useLiveUpdate } from '../../../libs/hooks';

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
    return block.proposer;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

export default function ProducerGlobe() {
  const state = useAsync(fetchPeers);
  const { width } = useWindowSize();
  const [theme] = useThemeMode();
  const [liveUpdate] = useLiveUpdate();
  const [activeMarkerId, setActiveMarker] = useState(null);

  useInterval(
    async () => {
      if (state.value) {
        const proposer = await fetchLatestProposer();
        setActiveMarker(proposer);
      }
    },
    liveUpdate ? 5000 : null
  );

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
      activeMarkerId={liveUpdate ? activeMarkerId : null}
    />
  );
}
