import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ActivityIndicator from '../components/activity_indicator';
import AsyncComponent from '../components/async';
import Alert from '../components/alert';
import I18n from '../components/i18n';

import { useStartupInfo, useThemeMode } from '../libs/hooks';

const Layout = AsyncComponent(() => import('../layouts/dashboard'));
const PageDashboard = AsyncComponent(() => import('../pages/dashboard'));
const PageStatus = AsyncComponent(() => import('../pages/node/status'));
const PageStorage = AsyncComponent(() => import('../pages/node/storage'));
const PageQuery = AsyncComponent(() => import('../pages/developer/query'));
const PageSimulator = AsyncComponent(() => import('../pages/developer/simulator'));
const PageApplication = AsyncComponent(() => import('../pages/app'));
const PageTasks = AsyncComponent(() => import('../pages/tasks'));
const PageSettings = AsyncComponent(() => import('../pages/settings'));
const PageBlockList = AsyncComponent(() => import('../pages/explorer/blocks'));
const PageBlockDetail = AsyncComponent(() => import('../pages/explorer/block'));
const PageTxList = AsyncComponent(() => import('../pages/explorer/txs'));
const PageTxDetail = AsyncComponent(() => import('../pages/explorer/tx'));
const PageAccountDetail = AsyncComponent(() => import('../pages/explorer/account'));
const PageAssetDetail = AsyncComponent(() => import('../pages/explorer/asset'));

const App = () => {
  const state = useStartupInfo();
  const [mode] = useThemeMode();

  if (state.loading) {
    return (
      <Wrapper mode={mode}>
        <ActivityIndicator
          messages={['Fetch chain info...', 'Fetching forge state...']}
          interval={800}
        />
      </Wrapper>
    );
  }

  if (state.error) {
    let { message } = state.error;
    if (message.includes('Network Error')) {
      message = 'Cannot connect to graphql endpoint, ensure you have started a node!';
    }
    return (
      <Wrapper mode={mode}>
        <Alert type="error">
          <p className="error">{message}</p>
        </Alert>
      </Wrapper>
    );
  }

  return (
    <I18n>
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
            <Route exact path="/developer/query" component={PageQuery} />
            <Route exact path="/developer/simulator" component={PageSimulator} />
            <Route exact path="/tasks" component={PageTasks} />
            <Route exact path="/settings" component={PageSettings} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Layout>
      </Router>
    </I18n>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.mode === 'light' ? '#f7f8f8' : '#222')};
`;

export default App;
