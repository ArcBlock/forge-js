import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <Main>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Your Wallet, The Digital Way
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" component="p">
          A decentralized wallet that puts you in control of everything - digital identity, profiles
          and more. Find out who wants to see your data and manage what data you are willing to
          share. Get notified anytime someone makes a request.
        </Typography>
        <img
          src="https://abt-wallet.netlify.com/static/5ab6559936f775f006a75eee19cce000/645bb/group-43.png"
          alt=""
        />
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  margin: 80px 0;
  text-align: center;

  img {
    margin-top: 80px;
  }
`;
