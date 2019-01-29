import React from 'react';

import Typography from '@material-ui/core/Typography';

import Page from '../../components/page';
import Layout from '../../layouts/dashboard';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

class Tasks extends Page {
  render() {
    return (
      <Layout title="Tasks" cookies={this.cookies}>
        <Typography component="h3" variant="h3">
          Tasks features here...
        </Typography>
      </Layout>
    );
  }
}

export default withRoot(withI18n(Tasks));
