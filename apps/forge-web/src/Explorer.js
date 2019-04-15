import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import ABA from '@arcblock/analytics-js';

import './libs/dayjs';
import Explorer from './apps/Explorer';
import { gaAccounts } from './libs/constant';

if (process.env.NODE_ENV === 'production') {
  ABA.initialize('abt_explorer');
  ReactGA.initialize(gaAccounts.abt_explorer);
}

ReactDOM.render(<Explorer />, document.getElementById('root'));
