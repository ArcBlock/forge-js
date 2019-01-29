import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';

import withTracker from './components/withTracker';
import withI18n from './components/withI18n';

import PageDashboard from './pages/dashboard';
import PageExplorer from './pages/node/explorer';
import PageStatus from './pages/node/status';
import PageDeveloper from './pages/developer';
import PageApplication from './pages/app';
import PageTasks from './pages/tasks';
import PageSettings from './pages/settings';

import { localeData } from './libs/locale';
import { detectLocale } from './libs/util';

addLocaleData(localeData);

export const App = () => (
  <div className="wrapper">
    <div className="main">
      <div className="content">
        <Switch>
          <Route exact path="/" component={PageDashboard} />
          <Route exact path="/app" component={PageApplication} />
          <Route exact path="/node/explorer" component={PageExplorer} />
          <Route exact path="/node/status" component={PageStatus} />
          <Route exact path="/developer" component={PageDeveloper} />
          <Route exact path="/tasks" component={PageTasks} />
          <Route exact path="/settings" component={PageSettings} />
        </Switch>
      </div>
    </div>
  </div>
);

const WrappedApp = withI18n(withRouter(withTracker(App)));
const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;
const { locale, messages } = detectLocale();

export default () => (
  <Router>
    <IntlProvider locale={locale} messages={messages}>
      <WrappedApp />
    </IntlProvider>
  </Router>
);
