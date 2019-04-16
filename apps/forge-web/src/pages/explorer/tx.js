import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import TxDetail from './components/tx_detail/index';
import Page from '../../components/page';
import Layout from '../../layouts/page';
import Wrapper from '../../components/wrapper';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';
import Alert from '../../components/alert';

import forge from '../../libs/forge';

class TransactionDetail extends Page {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',
      tx: null,
    };
  }

  componentDidMount() {
    this.loadStatus();
  }

  render() {
    const { hash } = this.props.match.params;
    const { loading, error, tx } = this.state;
    return (
      <Layout title="Transaction" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {!!error && <Alert type="error">{error}</Alert>}
          {!error && !loading && !tx && (
            <Alert type="error">
              Transaction <strong>{hash}</strong> not found!
            </Alert>
          )}
          {!loading && tx && <TxDetail tx={tx} />}
        </Container>
      </Layout>
    );
  }

  async loadStatus() {
    try {
      this.setState({ loading: true });
      const { hash } = this.props.match.params;
      const { info: tx } = await forge().getTx({ hash });
      this.setState({ loading: false, tx });
    } catch (err) {
      console.error(err);
      this.setState({
        loading: false,
        error: Array.isArray(err.errors)
          ? err.errors.map(x => x.message).join(',')
          : err.message || err.toString(),
      });
    }
  }
}

const Container = styled(Wrapper)``;

export default withRoot(withI18n(withRouter(TransactionDetail)));
