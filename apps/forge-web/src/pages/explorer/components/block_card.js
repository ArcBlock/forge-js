import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import Icon8 from '../../../components/icon8';

const BlockCard = ({ block, ...rest }) => (
  <Container {...rest}>
    <div className="left">
      <Typography component="p" className="hash" gutterBottom>
        <Link to={`/node/explorer/blocks/${block.height}`} title="View block detail">
          #{block.appHash}
        </Link>
      </Typography>
      <div className="summary">
        <Icon8 name="cancel" size={28} color="#4e6af6" className="icon" />
        <Typography component="p">
          {block.height} ({block.numTxs} txs)
        </Typography>
      </div>
      <Typography component="p" className="proposer">
        <Link to={`/node/explorer/accounts/${block.proposer}`} title="View account detail">
          <span>Proposer:</span> {block.proposer}
        </Link>
      </Typography>
    </div>
    <div className="right">
      <Typography component="p" className="time" title={block.time}>
        {moment(block.time).fromNow()}
      </Typography>
    </div>
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

BlockCard.propTypes = {
  block: PropTypes.object.isRequired,
};

export default BlockCard;
