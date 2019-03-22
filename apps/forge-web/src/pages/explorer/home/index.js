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
import Producer from './producer';

class Home extends Page {
  render() {
    return (
      <Layout title="Explorer" cookies={this.cookies}>
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
          </Grid>
          <Grid container spacing={40} className="should-reverse">
            <Grid item xs={12} sm={12} md={6} className="section section--latest">
              <div className="section__content">
                <Latest />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="section section--network">
              <div
                className="section__content"
                style={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Producer />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={40}>
            <Grid item xs={12} sm={12} md={12} className="section section--transactions">
              <Typography component="h3" className="section__header">
                {this.t('dashboard.transactions')}
              </Typography>
              <div className="section__content">
                <Transactions />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="section section--top-accounts">
              <Typography component="h3" className="section__header">
                {this.t('dashboard.topAccounts')}
              </Typography>
              <div className="section__content">
                <TopAccounts sparkline={false} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="section section--top-validators">
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
  }

  .section--metrics {
    margin-top: 30px;
    margin-bottom: 120px;
    .section__header {
      visibility: hidden;
    }
    .refresh-toggler {
      top: -20px;
    }
  }

  .section--latest,
  .section--network {
    @media (min-width: ${props => props.theme.breakpoints.values.md}px) {
      height: 772px;
    }
  }

  .section--top-accounts,
  .section--top-validators {
    .section__content {
      width: 100%;
      overflow-x: auto;

      @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
        tr {
          height: 40px !important;
        }

        th {
          padding: 0 !important;
          overflow-x: auto;
          white-space: nowrap;
          text-align: center !important;
        }

        td {
          height: 40px !important;
          padding: 5px !important;
          text-align: center !important;
        }
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
    .should-reverse {
      flex-direction: column-reverse;
    }

    .section--network,
    .section--metrics {
      margin-bottom: 30px;
    }
  }
`;

export default withRoot(withI18n(Home));
