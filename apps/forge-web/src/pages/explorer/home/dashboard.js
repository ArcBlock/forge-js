import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import SearchBox from '../../../components/search_box';
import NetworkCard from '../../../components/network_card/normal';
import withI18n from '../../../components/withI18n';

import Metrics from '../../dashboard/components/metrics';
import Transactions from '../../dashboard/components/transactions';
import TopAccounts from '../../dashboard/components/top_accounts';
import TopValidators from '../../dashboard/components/top_validators';

import Latest from './latest';
import Producer from './producer';

import { networks } from '../../../libs/constant';
import { useSwitcher } from '../../../libs/hooks';

function Dashboard({ intl, ...rest }) {
  const { current } = useSwitcher();

  const t = (id, variables = {}) => intl.formatMessage({ id }, variables);

  return (
    <Container key={current} {...rest}>
      <Grid container spacing={40}>
        <Grid item xs={12} sm={6} md={6}>
          <NetworkCard data={networks[current]} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className="search-box">
          <SearchBox />
        </Grid>
      </Grid>
      <Grid container spacing={40}>
        <Grid item xs={12} sm={12} md={12} className="section section--metrics">
          <Typography component="h3" className="section__header">
            {t('dashboard.metrics')}
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
            {t('dashboard.transactions')}
          </Typography>
          <div className="section__content">
            <Transactions />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className="section section--top-accounts">
          <Typography component="h3" className="section__header">
            {t('dashboard.topAccounts')}
          </Typography>
          <div className="section__content">
            <TopAccounts sparkline={false} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className="section section--top-validators">
          <Typography component="h3" className="section__header">
            {t('dashboard.topValidators')}
          </Typography>
          <div className="section__content">
            <TopValidators sparkline={false} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

Dashboard.propTypes = {
  intl: PropTypes.object.isRequired,
};

const Container = styled.div`
  background: ${props => props.theme.palette.background.default};
  width: 100%;
  max-width: ${props => props.theme.pageWidth}px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 24px;

  .search-box {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

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
    margin-top: 0px;
    margin-bottom: 50px;
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
      height: auto;
      min-height: 772px;
      margin-bottom: 50px;
      overflow: hidden;
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

export default withI18n(Dashboard);
