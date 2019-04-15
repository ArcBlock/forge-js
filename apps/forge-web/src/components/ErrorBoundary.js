import React from 'react';
import * as Sentry from '@sentry/browser';

import Alert from './alert';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, info) {
    this.setState({ error });

    Sentry.withScope(scope => {
      scope.setExtras(info);
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.error) {
      return (
        <Alert type="error">
          Oops! We encountered an error, please try reload this application.
        </Alert>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}
