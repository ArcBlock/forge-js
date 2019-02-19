import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const ChainInfo = ({ appHash, blockHeight, blockHash, id, moniker, ...rest }) => (
  <Container {...rest}>
    <Typography component="h3" className="moniker">
      {moniker}
    </Typography>
    <Grid container spacing={40}>
      <Grid item xs={12} sm={9}>
        <Typography component="p" className="id" gutterBottom>
          abt:did:{id}
        </Typography>
        <Typography component="p" className="meta" gutterBottom>
          <span>app_hash:</span> {appHash}
        </Typography>
        <Typography component="p" className="meta" gutterBottom>
          <span>block_hash:</span> {blockHash}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography component="p" className="height">
          {blockHeight}
        </Typography>
        <Typography component="p" className="height-tip">
          Block Height
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

/* padding: ${props => props.theme.spacing.unit * 3}px; */
const Container = styled.div`
  line-height: 2;
  text-transform: uppercase;
  margin-bottom: 60px;

  .moniker {
    font-size: 14px;
    letter-spacing: 2px;
    color: #9b9b9b;
  }

  .id {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 2px;
  }

  .meta {
    font-size: 14px;
    color: #9b9b9b;

    span {
      color: #222222;
    }
  }

  .height {
    font-size: 40px;
    font-weight: 900;
    text-align: right;
  }

  .height-tip {
    font-size: 14px;
    letter-spacing: 2px;
    text-align: right;
  }
`;

ChainInfo.propTypes = {
  // address: PropTypes.string.isRequired,
  appHash: PropTypes.string.isRequired,
  blockHeight: PropTypes.number.isRequired,
  blockHash: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  moniker: PropTypes.string.isRequired,
};

export default ChainInfo;
