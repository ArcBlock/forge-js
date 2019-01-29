import React from 'react';

import Typography from '@material-ui/core/Typography';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

class Node extends Page {
  render() {
    return (
      <Layout title="Node" cookies={this.cookies}>
        <Typography component="h3">Node management tools here...</Typography>
      </Layout>
    );
  }
}

export default withRoot(withI18n(Node));
