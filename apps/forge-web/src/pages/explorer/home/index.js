import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Page from '../../../components/page';
import Layout from '../../../layouts/page';
import Wrapper from '../../../components/wrapper';
import withI18n from '../../../components/withI18n';
import withRoot from '../../../components/withRoot';

import Metrics from '../../dashboard/components/metrics';
import Transactions from '../../dashboard/components/transactions';
import TopAccounts from '../../dashboard/components/top_accounts';
import TopValidators from '../../dashboard/components/top_validators';

import Latest from './latest';

class Dashboard extends Page {
  render() {
    return (
      <Layout title="Dashboard" cookies={this.cookies}>
        <Container>
          <Grid container spacing={40}>
            <Grid item xs={12} sm={12} md={12} className="section section--metrics">
              <Typography component="h3" className="section__header">
                {this.t('dashboard.metrics')}
              </Typography>
              <div className="section__content">
                <Metrics sparkline={false} itemSize={{ xs: 6, sm: 4, md: 2 }} size="small" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className="section section--latest">
              <div className="section__content">
                <Latest />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className="section section--network">
              <div className="section__content">
                <p>TODO: add network map here</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className="section section--transactions">
              <Typography component="h3" className="section__header">
                {this.t('dashboard.transactions')}
              </Typography>
              <div className="section__content">
                <Transactions />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className="section section--top-accounts">
              <Typography component="h3" className="section__header">
                {this.t('dashboard.topAccounts')}
              </Typography>
              <div className="section__content">
                <TopAccounts sparkline={false} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className="section section--top-validators">
              <Typography component="h3" className="section__header">
                {this.t('dashboard.topValidators')}
              </Typography>
              <div className="section__content">
                <TopValidators sparkline={false} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

const Container = styled(Wrapper)`
  .section {
    margin-bottom: 60px;
    .section__header {
      margin-bottom: 30px;
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;
      line-height: 1.33;
      letter-spacing: 2.6px;
      color: ${props => props.theme.typography.color.main};
    }

    .section__content {
    }
  }

  .section--metrics {
    .section__header {
      visibility: hidden;
    }
  }
`;

export default withRoot(withI18n(Dashboard));
