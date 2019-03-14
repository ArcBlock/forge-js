import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import ABA from '@arcblock/analytics-js';

import Explorer from './apps/Explorer';

if (process.env.NODE_ENV === 'production') {
  ABA.initialize('forge_web');
  ReactGA.initialize('UA-121627413-1');
}

ReactDOM.render(<Explorer />, document.getElementById('root'));
