import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import moment from 'moment';
// import Typography from '@material-ui/core/Typography';

const ExchangeTxSummary = ({ tx, ...rest }) => (
  <Container {...rest}>
    <pre>
      <code>{JSON.stringify(tx.tx, true, '  ')}</code>
    </pre>
  </Container>
);

const Container = styled.div``;

ExchangeTxSummary.propTypes = {
  tx: PropTypes.object.isRequired,
};

export default ExchangeTxSummary;
