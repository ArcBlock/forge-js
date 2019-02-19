import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const SummaryHeader = ({ type, title, meta, badge, badgeTip, ...rest }) => (
  <Container {...rest}>
    <Typography component="h3" className="type">
      {type}
    </Typography>
    <Grid container spacing={40}>
      <Grid item xs={12} sm={9}>
        <Typography component="p" className="title" gutterBottom>
          {title}
        </Typography>
        {meta.map(x => (
          <Typography key={x.key} component="p" className="meta" gutterBottom>
            <span>{x.key}:</span> {x.value}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography component="p" className="badge">
          {badge}
        </Typography>
        <Typography component="p" className="badge-tip">
          {badgeTip}
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

SummaryHeader.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  badge: PropTypes.any.isRequired,
  badgeTip: PropTypes.string.isRequired,
};

/* padding: ${props => props.theme.spacing.unit * 3}px; */
const Container = styled.div`
  line-height: 2;
  text-transform: uppercase;
  margin-bottom: 60px;

  .type {
    font-size: 14px;
    letter-spacing: 2px;
    color: #9b9b9b;
  }

  .title {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: lowercase;
  }

  .meta {
    font-size: 14px;
    color: #9b9b9b;

    span {
      color: #222222;
    }
  }

  .badge {
    font-size: 40px;
    font-weight: 900;
    text-align: right;
  }

  .badge-tip {
    font-size: 14px;
    letter-spacing: 2px;
    text-align: right;
  }
`;

export default SummaryHeader;
