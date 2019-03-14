import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import ABA from '@arcblock/analytics-js';
// import whyDidYouUpdate from 'why-did-you-update';

import App from './App';

if (process.env.NODE_ENV === 'production') {
  ABA.initialize('forge_web');
  ReactGA.initialize('UA-121627413-1');
} else {
  // whyDidYouUpdate(React);
}

ReactDOM.render(<App />, document.getElementById('root'));
