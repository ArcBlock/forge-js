import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import moment from 'moment';
// import Typography from '@material-ui/core/Typography';

const DefaultTxSummary = React.memo(({ tx, ...rest }) => (
  <Container {...rest}>
    <h3>Default Summary</h3>
    <pre>
      <code>{JSON.stringify(tx.tx, true, '  ')}</code>
    </pre>
  </Container>
));

const Container = styled.div``;

DefaultTxSummary.propTypes = {
  tx: PropTypes.object.isRequired,
};

export default DefaultTxSummary;
