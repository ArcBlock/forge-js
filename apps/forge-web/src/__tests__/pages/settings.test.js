import React from 'react';
import ReactDOM from 'react-dom';

import I18n from '../../components/i18n';
import Page from '../../pages/settings';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <I18n>
      <Page />
    </I18n>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
