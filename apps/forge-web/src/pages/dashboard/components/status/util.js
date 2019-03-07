import Summary from './summary';
import ForgeSummary from './forge';
import ConsensusSummary from './consensus';
import StorageSummary from './storage';
import NetworkSummary from './network';

import api from '../../../../libs/forge';

const STATUS_OK = 0;
const STATUS_WARNING = 1;
const STATUS_ERROR = 2;

export const getLayerColor = (status, theme) => {
  if (status === STATUS_WARNING) {
    return theme.colors.yellow;
  }

  if (status === STATUS_ERROR) {
    return theme.colors.red;
  }

  return theme.colors.green;
};

export async function fetchStatus() {
  try {
    const [
      { info: chain },
      { state: forge },
      { netInfo: net },
      {
        validatorsInfo: { validators },
      },
    ] = await Promise.all([
      api.getNodeInfo(),
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
      layers.app = { status: STATUS_OK, label: 'Application', component: Summary };
    }
    layers.forge = { status: STATUS_OK, label: 'Forge Framework', component: ForgeSummary };
    layers.consensus = {
      status: chain.synced ? STATUS_OK : STATUS_WARNING,
      label: 'Consensus Engine',
      component: ConsensusSummary,
    };
    layers.storage = { status: STATUS_OK, label: 'Storage Engine', component: StorageSummary };
    layers.network = {
      status: net.listening ? STATUS_OK : STATUS_ERROR,
      label: 'Network Connections',
      component: NetworkSummary,
    };

    // Return all data for summary rendering
    const data = { app, chain, forge, net, validators };

    return { data, layers };
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch node status data');
  }
}

export const getLayerStyle = (layers, selected, i) => {
  const zIndex = 100;
  const top = 20;
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

export const getLayerBackground = ({ error, warning, theme }) => {
  if (error) {
    return `linear-gradient(9deg, ${theme.colors.red}, rgba(255, 255, 255, 0.8))`;
  }
  if (warning) {
    return `linear-gradient(9deg, ${theme.colors.yellow}, rgba(255, 255, 255, 0.8))`;
  }

  return 'linear-gradient(9deg, rgba(182, 247, 248, 0.8), rgba(255, 255, 255, 0.8))';
};

export function getGreeting() {
  const hour = new Date().getHours();
  let greeting = '';
  if (hour < 12) {
    greeting = 'morning';
  } else if (hour < 17) {
    greeting = 'afternoon';
  } else if (hour < 21) {
    greeting = 'evening';
  } else {
    greeting = 'night';
  }

  return greeting;
}
