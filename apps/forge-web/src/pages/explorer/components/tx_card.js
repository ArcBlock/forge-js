import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import moment from 'moment';
// import { Link } from 'react-router-dom';

// import Typography from '@material-ui/core/Typography';

// import Icon8 from '../../../components/icon8';

const TxCard = ({ tx, ...rest }) => (
  <Container {...rest}>
    <pre>
      <code>{JSON.stringify(tx, true, '  ')}</code>
    </pre>
  </Container>
);

/* padding: ${props => props.theme.spacing.unit * 3}px; */
const Container = styled.div`
  margin-bottom: ${props => props.theme.spacing.unit * 4}px;
  padding-left: ${props => props.theme.spacing.unit * 2}px;
  border-left: 1px solid #222222;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 1.5;

  .left {
    width: 75%;
  }

  .summary {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;

    p {
      font-size: 16px;
      margin-left: 8px;
    }
  }

  .time,
  .proposer a,
  .hash a {
    color: #9b9b9b;
    font-size: 14px;
    cursor: pointer;
  }
`;

TxCard.propTypes = {
  tx: PropTypes.object.isRequired,
};

export default TxCard;
