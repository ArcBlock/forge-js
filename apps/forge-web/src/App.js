import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';

import Layout from './layouts/dashboard';

import PageDashboard from './pages/dashboard';
import PageStatus from './pages/node/status';
import PageQuery from './pages/node/query';
import PageStorage from './pages/node/storage';
import PageDeveloper from './pages/developer';
import PageApplication from './pages/app';
import PageTasks from './pages/tasks';
import PageSettings from './pages/settings';
import PageBlockList from './pages/explorer/blocks';
import PageBlockDetail from './pages/explorer/block';
import PageTxList from './pages/explorer/txs';
import PageTxDetail from './pages/explorer/tx';
import PageAccountDetail from './pages/explorer/account';
import PageAssetDetail from './pages/explorer/asset';

import { localeData } from './libs/locale';
import { detectLocale } from './libs/util';

addLocaleData(localeData);

const { locale, messages } = detectLocale();

export default () => (
  <IntlProvider locale={locale} messages={messages}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/dashboard" component={PageDashboard} />
          <Route exact path="/app" component={PageApplication} />
          <Route exact path="/node/explorer/blocks" component={PageBlockList} />
          <Route exact path="/node/explorer/txs" component={PageTxList} />
          <Route exact path="/node/explorer/blocks/:height" component={PageBlockDetail} />
          <Route exact path="/node/explorer/txs/:hash" component={PageTxDetail} />
          <Route exact path="/node/explorer/accounts/:address" component={PageAccountDetail} />
          <Route exact path="/node/explorer/assets/:address" component={PageAssetDetail} />
          <Route exact path="/node/status" component={PageStatus} />
          <Route exact path="/node/storage" component={PageStorage} />
          <Route exact path="/node/query" component={PageQuery} />
          <Route exact path="/developer" component={PageDeveloper} />
          <Route exact path="/tasks" component={PageTasks} />
          <Route exact path="/settings" component={PageSettings} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Layout>
    </Router>
  </IntlProvider>
);
