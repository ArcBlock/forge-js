import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import Status from '../dashboard/components/status';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import Wrapper from '../../components/wrapper';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

class Application extends Page {
  render() {
    return (
      <Layout title="Application" cookies={this.cookies}>
        <Container>
          <Typography component="h3">Application here...</Typography>
          <Status />
        </Container>
      </Layout>
    );
  }
}

const Container = styled(Wrapper)``;

export default withRoot(withI18n(Application));
