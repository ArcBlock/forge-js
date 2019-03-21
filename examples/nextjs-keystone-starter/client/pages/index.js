import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <Main>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography>
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  margin: 50px 0;
`;
