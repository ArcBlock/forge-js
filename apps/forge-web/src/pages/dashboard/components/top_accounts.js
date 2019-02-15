import React from 'react';
// import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

// import Icon8 from '../../../components/icon8';
import forge from '../../../libs/forge';

export default class TopAccountsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
    };
  }

  componentDidMount() {
    this.loadSummary();
  }

  render() {
    const { loading, data } = this.state;
    return (
      <React.Fragment>
        {loading && (
          <React.Fragment>
            <Typography component="h3">Loading data...</Typography>
            <CircularProgress />
          </React.Fragment>
        )}
        {!loading && data && this.renderSummary(data)}
      </React.Fragment>
    );
  }

  renderSummary(data) {
    return (
      <pre>
        <code>{JSON.stringify(data, true, '  ')}</code>
      </pre>
    );
  }

  async loadSummary() {
    this.setState({ loading: true });
    const {
      getForgeStatistics: { forgeStatistics: data },
    } = await forge.getForgeStatistics();
    this.setState({ loading: false, data });
  }
}
