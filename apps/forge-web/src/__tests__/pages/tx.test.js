import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router, Route } from 'react-router-dom';

import I18n from '../../components/i18n';
import Page from '../../pages/explorer/tx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <I18n>
      <Router location="/node/explorer/tx/1">
        <Route path="/node/explorer/txs/:height" component={Page} />
      </Router>
    </I18n>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
