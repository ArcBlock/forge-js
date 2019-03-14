import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { withTheme } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import IconFa from '../../../components/iconfa';
import { getExplorerUrl } from '../../../libs/util';

const BlockCard = React.memo(({ block, theme, ...rest }) => (
  <Container {...rest}>
    <div className="left">
      <Typography component="p" className="hash" gutterBottom>
        <Link to={getExplorerUrl(`/blocks/${block.height}`)} title="View block detail">
          # {block.appHash}
        </Link>
      </Typography>
      <div className="summary">
        <IconFa name="boxes" size={14} rounded={true} color={theme.colors.blue} className="icon" />
        <Typography component="p">
          #{block.height} ({block.numTxs} txs)
        </Typography>
      </div>
      <Typography component="p" className="proposer">
        <span>Proposer:</span>
        <Link to={getExplorerUrl(`/accounts/${block.proposer}`)} title="View account detail">
          {block.proposer}
        </Link>
      </Typography>
    </div>
    <div className="right">
      <Typography component="p" className="time" title={block.time}>
        {moment(block.time).fromNow()}
      </Typography>
    </div>
  </Container>
));

/* padding: ${props => props.theme.spacing.unit * 3}px; */
const Container = styled.div`
  margin-bottom: ${props => props.theme.spacing.unit * 4}px;
  padding-left: ${props => props.theme.spacing.unit * 2}px;
  border-left: 1px solid ${props => props.theme.colors.gray};
  width: 100%;
  max-width: 800px;
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
  .proposer span,
  .hash a {
    color: ${props => props.theme.typography.color.gray};
    font-size: 12px;
    cursor: pointer;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      text-decoration: underline;
    }
  }

  .time {
    margin-top: 5px;
  }
`;

BlockCard.propTypes = {
  block: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(BlockCard);
