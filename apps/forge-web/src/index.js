import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import ABA from '@arcblock/analytics-js';

import './libs/dayjs';
import ForgeWeb from './apps/ForgeWeb';

if (process.env.NODE_ENV === 'production') {
  ABA.initialize('forge_web');
  ReactGA.initialize('UA-121627413-1');
}

ReactDOM.render(<ForgeWeb />, document.getElementById('root'));
