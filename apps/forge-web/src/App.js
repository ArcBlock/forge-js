import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { addLocaleData } from 'react-intl';

import PageDashboard from './pages/dashboard';
import withTracker from './components/withTracker';
import withI18n from './components/withI18n';
import { localeData } from './libs/locale';
import { detectLocale } from './libs/util';

addLocaleData(localeData);

// TODO: Layout component with sidebar/login
export const App = () => (
  <div className="wrapper">
    <div className="main">
      <div className="content">
        <Switch>
          <Route exact path="/" component={PageDashboard} />
        </Switch>
      </div>
    </div>
  </div>
);

const WrappedApp = withI18n(withRouter(withTracker(App)));
const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;
const { locale, messages } = detectLocale();
console.log({ locale, messages });

export default () => (
  <Router>
    <IntlProvider locale={locale} messages={messages}>
      <WrappedApp />
    </IntlProvider>
  </Router>
);
