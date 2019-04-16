import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import I18n from '../../components/i18n';
import Page from '../../pages/explorer/home';

it('renders without crashing', async () => {
  const wrapper = await mount(
    <I18n>
      <Router>
        <Page />
      </Router>
    </I18n>
  );

  await wrapper.unmount();
});
