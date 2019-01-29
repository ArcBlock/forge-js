import React from 'react';

import Typography from '@material-ui/core/Typography';

import Page from '../../components/page';
import Layout from '../../layouts/dashboard';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

class NodeStatus extends Page {
  render() {
    return (
      <Layout title="Explorer" cookies={this.cookies}>
        <Typography component="h3" variant="h3">
          NodeStatus here...
        </Typography>
      </Layout>
    );
  }
}

export default withRoot(withI18n(NodeStatus));
