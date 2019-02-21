import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import TxDetail from './components/tx_detail/index';
import Page from '../../components/page';
import Layout from '../../layouts/page';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';

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
    const { loading, error, tx } = this.state;
    return (
      <Layout title="Transaction" cookies={this.cookies}>
        <Container>
          {loading && <CircularProgress />}
          {!!error && <p>{error}</p>}
          {tx && <TxDetail tx={tx} />}
        </Container>
      </Layout>
    );
  }

  async loadStatus() {
    try {
      this.setState({ loading: true });
      const { hash } = this.props.match.params;
      const { info: tx } = await forge.getTx({ hash });
      this.setState({ loading: false, tx });
    } catch (err) {
      console.log(err.errors);
      this.setState({
        loading: false,
        error: Array.isArray(err.errors)
          ? err.errors.map(x => x.message).join(',')
          : err.message || err.toString(),
      });
    }
  }
}

const Container = styled.div`
  padding: ${props => props.theme.spacing.unit * 6}px ${props => props.theme.spacing.unit * 15}px;
  width: auto;
  max-width: 1280px;
`;

export default withRoot(withI18n(withRouter(TransactionDetail)));
