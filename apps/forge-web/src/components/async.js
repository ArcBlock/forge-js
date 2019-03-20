import React from 'react';

export default function LoadAsyncComponent(importComponent, key = 'default') {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        Component: null,
      };
    }

    async componentDidMount() {
      const { [key]: Component } = await importComponent();

      this.setState({ Component });
    }

    render() {
      const { Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
