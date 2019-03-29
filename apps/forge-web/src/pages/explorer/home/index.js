/* eslint-disable react/jsx-no-bind */
import React from 'react';

import Page from '../../../components/page';
import Layout from '../../../layouts/page';
import withI18n from '../../../components/withI18n';
import withRoot from '../../../components/withRoot';

import Switcher from './switcher';

const networks = ['argon', 'bromine', 'titanium'];

class Explorer extends Page {
  render() {
    return (
      <Layout title="Explorer" cookies={this.cookies}>
        <Switcher networks={networks} />
      </Layout>
    );
  }
}

export default withRoot(withI18n(Explorer));
