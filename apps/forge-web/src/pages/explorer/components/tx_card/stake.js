import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import moment from 'moment';
// import Typography from '@material-ui/core/Typography';

const StakeTxSummary = React.memo(({ tx, ...rest }) => (
  <Container {...rest}>
    <pre>
      <code>{JSON.stringify(tx.tx, true, '  ')}</code>
    </pre>
  </Container>
));

const Container = styled.div``;

StakeTxSummary.propTypes = {
  tx: PropTypes.object.isRequired,
};

export default StakeTxSummary;
