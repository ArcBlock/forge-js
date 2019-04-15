import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import ABA from '@arcblock/analytics-js';
import * as Sentry from '@sentry/browser';

import './libs/dayjs';
import App from './apps/Explorer';
import ErrorBoundary from './components/ErrorBoundary';
import { gaAccounts, sentryAccounts } from './libs/constant';

if (process.env.NODE_ENV === 'production') {
  ABA.initialize('abt_explorer');
  ReactGA.initialize(gaAccounts.abt_explorer);
  Sentry.init({ dsn: sentryAccounts.abt_explorer });
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
