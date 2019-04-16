import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import storage from '../../libs/storage';
import I18n from '../../components/i18n';
import Layout from '../../layouts/dashboard';

it.skip('renders without crashing', async () => {
  storage.setItem('node', JSON.stringify({}));

  const wrapper = await mount(
    <I18n>
      <Router>
        <Layout>
          <p>Content</p>
        </Layout>
      </Router>
    </I18n>
  );

  await wrapper.unmount();
});
