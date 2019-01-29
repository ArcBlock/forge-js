import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

class Explorer extends Page {
  render() {
    return (
      <Layout title="Explorer" cookies={this.cookies}>
        <Container>
          <Typography component="h3">Node Explorer here...</Typography>
        </Container>
      </Layout>
    );
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 3}px;
`;

export default withRoot(withI18n(Explorer));
