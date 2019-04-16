import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import ABA from '@arcblock/analytics-js';
import * as Sentry from '@sentry/browser';
import isElectron from 'is-electron';

import './libs/dayjs';
import App from './apps/ChainNode';
import ErrorBoundary from './components/ErrorBoundary';
import { gaAccounts, sentryAccounts } from './libs/constant';

if (process.env.NODE_ENV === 'production') {
  const appName = isElectron() ? 'chain_node_desktop' : 'chain_node_web';
  ABA.initialize(appName);
  ReactGA.initialize(gaAccounts[appName]);
  Sentry.init({
    dsn: sentryAccounts[appName],
    release: process.env.REACT_APP_VERSION,
    environment: process.env.NODE_ENV,
  });
}

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}
