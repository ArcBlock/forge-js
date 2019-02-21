import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class SummaryHeader extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    meta: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      })
    ).isRequired,
    badge: PropTypes.any,
    badgeTip: PropTypes.string,
  };

  static defaultProps = {
    badge: '',
    badgeTip: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  render() {
    const { type, title, meta, badge, badgeTip, ...rest } = this.props;
    const leftWidth = !badge && !badgeTip ? 12 : 9;
    return (
      <Container {...rest}>
        <Typography component="h3" className="type">
          {type}
        </Typography>
        <Grid container spacing={40}>
          <Grid item xs={12} sm={leftWidth}>
            <Typography component="p" className="title" gutterBottom>
              {title}
            </Typography>
            {meta.map(x => (
              <Typography key={x.key} component="p" className="meta" gutterBottom>
                <span>
                  {x.key}
                  {typeof x.key === 'string' ? ':' : ''}
                </span>{' '}
                {x.value}
              </Typography>
            ))}
          </Grid>
          {(!!badge || !!badgeTip) && (
            <Grid item xs={12} sm={3}>
              {!!badge && (
                <Typography component="p" className="badge">
                  {badge}
                </Typography>
              )}
              {!!badgeTip && (
                <Typography component="p" className="badge-tip">
                  {badgeTip}
                </Typography>
              )}
            </Grid>
          )}
        </Grid>
      </Container>
    );
  }
}

/* padding: ${props => props.theme.spacing.unit * 3}px; */
const Container = styled.div`
  line-height: 2;
  text-transform: uppercase;
  margin-bottom: 60px;

  .type {
    font-size: 14px;
    letter-spacing: 2px;
    color: #9b9b9b;
    margin-bottom: 10px;
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
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

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
