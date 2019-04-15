import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../apps/ChainNode';

it('renders without crashing', done => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div);
    done();
  }, 2000);
});
