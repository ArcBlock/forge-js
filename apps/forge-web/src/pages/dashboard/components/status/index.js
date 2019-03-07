/* eslint no-use-before-define:"off" */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAsync } from 'react-use';

// TODO: use css transition group to make animation perfect

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CircularProgress from '@material-ui/core/CircularProgress';

import Summary from './summary';

import api from '../../../../libs/forge';

const STATUS_OK = 0;
const STATUS_WARNING = 1;
const STATUS_ERROR = 2;

const labels = {
  app: 'Application',
  forge: 'Forge Framework',
  consensus: 'Consensus Engine',
  storage: 'Storage Engine',
  network: 'Network Connections',
};

export default function StatusSection() {
  const state = useAsync(fetchStatus);
  const [selected, setSelected] = useState(null);

  if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return <p className="error">{state.error.message}</p>;
  }

  const { layers, data } = state.value;
  const names = Object.keys(layers);
  const SummaryComponent = selected ? layers[selected].component : Summary;
  console.log(state.value);

  const onSelectLayer = name => () => setSelected(name);
  const onClickAway = () => setSelected(null);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Container>
        <div className="stack">
          {names.map((x, i) => (
            <Layer
              key={x}
              error={selected ? layers[selected].status === STATUS_ERROR : false}
              warning={selected ? layers[selected].status === STATUS_WARNING : false}
              onMouseEnter={onSelectLayer(x)}
              style={getLayerStyle(names, selected, i)}
            />
          ))}
        </div>
        <div className="summary">
          <SummaryComponent layers={names} labels={labels} layer={layers[selected]} data={data} />
        </div>
      </Container>
    </ClickAwayListener>
  );
}

async function fetchStatus() {
  try {
    const [
      { info: chain },
      { state: forge },
      { netInfo: net },
      {
        validatorsInfo: { validators },
      },
    ] = await Promise.all([
      api.getChainInfo(),
      api.getForgeState(),
      api.getNetInfo(),
      api.getValidatorsInfo(),
    ]);

    // Check application
    let app = null;
    if (chain.forgeAppsVersion[0] && chain.forgeAppsVersion[0].key) {
      const { key, value } = chain.forgeAppsVersion[0];
      app = { name: key, version: value, hash: chain.appHash };
    }

    // Construct layer status
    const layers = {};
    if (app) {
      layers.app = { priority: 100, status: STATUS_OK, component: Summary };
    }
    layers.forge = { status: STATUS_OK, component: Summary };
    layers.consensus = { status: chain.synced ? STATUS_OK : STATUS_WARNING, component: Summary };
    layers.storage = { status: STATUS_OK, component: Summary };
    layers.network = { status: net.listening ? STATUS_OK : STATUS_ERROR, component: Summary };

    // Return all data for summary rendering
    const data = { app, chain, forge, net, validators };

    return { data, layers };
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch node status data');
  }
}

const getLayerStyle = (layers, selected, i) => {
  const zIndex = 100;
  const top = 100;
  const height = 40;

  const style = {
    top: `${top + height * i}px`,
    zIndex: zIndex - i,
    animation: `slideInDown 500ms ${(layers.length - i - 1) *
      200}ms cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  };

  if (selected) {
    style.opacity = layers.indexOf(selected) === i ? 0.9 : 0.3;
  } else {
    style.opacity = 0.8;
  }

  return style;
};

const getLayerBackground = ({ error, warning, theme }) => {
  if (error) {
    return `linear-gradient(9deg, ${theme.colors.red}, rgba(255, 255, 255, 0.8))`;
  }
  if (warning) {
    return `linear-gradient(9deg, ${theme.colors.yellow}, rgba(255, 255, 255, 0.8))`;
  }

  return 'linear-gradient(9deg, rgba(182, 247, 248, 0.8), rgba(255, 255, 255, 0.8))';
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .stack {
    position: relative;
    height: 400px;
    width: 400px;
    padding: 0 36px;
    flex-shrink: 0;
  }

  .summary {
    padding-top: 100px;
  }

  @keyframes slideInDown {
    from {
      -webkit-transform: translate3d(0, -200%, 0) rotateX(55deg) rotateZ(-45deg);
      transform: translate3d(0, -200%, 0) rotateX(55deg) rotateZ(-45deg);
      opacity: 0;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0) rotateX(55deg) rotateZ(-45deg);
      transform: translate3d(0, 0, 0) rotateX(55deg) rotateZ(-45deg);
      opacity: 0.9;
    }
  }
`;

const Layer = styled.div`
  box-sizing: content-box;
  width: 200px;
  height: 200px;
  border-radius: 20px 10px;
  border: 2px solid #222222;
  transition: all 200ms ease-in-out;
  transform: rotateX(55deg) rotateZ(-45deg);
  background-image: ${props => getLayerBackground(props)};
  position: absolute;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) rotateX(55deg) rotateZ(-45deg);
    opacity: 0.8;
  }

  &::after {
    width: 150px;
    height: 150px;
    content: '';
    border: 3px dotted #231916;
    border-top-width: 0;
    border-right-width: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`;
