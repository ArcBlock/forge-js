import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import ABA from '@arcblock/analytics-js';
import isElectron from 'is-electron';

import './libs/dayjs';
import ForgeWeb from './apps/ChainNode';
import { gaAccounts } from './libs/constant';

if (process.env.NODE_ENV === 'production') {
  const appName = isElectron ? 'chain_node_desktop' : 'chain_node_web';
  ABA.initialize(appName);
  ReactGA.initialize(gaAccounts[appName]);
}

ReactDOM.render(<ForgeWeb />, document.getElementById('root'));
