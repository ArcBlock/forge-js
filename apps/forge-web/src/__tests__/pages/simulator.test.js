import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';

import I18n from '../../components/i18n';
import Page from '../../pages/developer/simulator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <I18n>
      <Router>
        <Page />
      </Router>
    </I18n>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
