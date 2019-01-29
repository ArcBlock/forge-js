import React from 'react';

import Typography from '@material-ui/core/Typography';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

class Dashboard extends Page {
  render() {
    return (
      <Layout title="Dashboard" cookies={this.cookies}>
        <Typography component="h3">Dashboard charts and ranks here...</Typography>
      </Layout>
    );
  }
}

export default withRoot(withI18n(Dashboard));
