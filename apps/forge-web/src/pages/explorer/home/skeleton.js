import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { getBoxShadow } from '../../../libs/constant';

const renderMetrics = (width, count) => {
  const metricWidth = width / count;
  const metricBarWidth = metricWidth * 0.85;
  const metricNameWidth = metricWidth * 0.45;

  const elements = [];
  for (let i = 0; i < count; i++) {
    const metricLeft = i * metricWidth;
    elements.push(
      <rect key={`icon-${i}`} x={metricLeft} y="30" rx="0" ry="0" width="30" height="30" />
    );
    elements.push(
      <rect
        key={`bar-${i}`}
        x={metricLeft}
        y="65"
        rx="0"
        ry="0"
        width={metricBarWidth}
        height="50"
      />
    );
    elements.push(
      <rect
        key={`name-${i}`}
        x={metricLeft}
        y="120"
        rx="0"
        ry="0"
        width={metricNameWidth}
        height="15"
      />
    );
  }

  return elements;
};

export default function Skeleton({ title, width, animate, theme, metricCount, ...rest }) {
  const halfWidth = width * 0.47;
  return (
    <Container {...rest}>
      <Typography component="h4" variant="h5" className="skeleton__title" gutterBottom>
        {title}
      </Typography>
      <ContentLoader
        height={1800}
        width={width}
        animate={animate}
        primaryColor={theme === 'light' ? '#f3f3f3' : '#555555'}
        secondaryColor={theme === 'light' ? '#ecebeb' : '#444444'}>
        {renderMetrics(width, metricCount)}

        <rect x="0" y="230" rx="0" ry="0" width="30" height="30" />
        <rect x="35" y="230" rx="0" ry="0" width="60" height="30" />
        <rect x="125" y="230" rx="0" ry="0" width="30" height="30" />
        <rect x="160" y="230" rx="0" ry="0" width="60" height="30" />

        <rect x="0" y="280" rx="0" ry="0" width={halfWidth} height="90" />
        <rect x="0" y="390" rx="0" ry="0" width={halfWidth} height="90" />
        <rect x="0" y="500" rx="0" ry="0" width={halfWidth} height="90" />
        <rect x="0" y="610" rx="0" ry="0" width={halfWidth} height="90" />
        <rect x="0" y="720" rx="0" ry="0" width={halfWidth} height="90" />

        <circle cx={width * 0.75} cy="560" r={width * 0.2} />

        <rect x="0" y="900" rx="0" ry="0" width="150" height="30" />
        <rect x="0" y="950" rx="0" ry="0" width={width} height="300" />

        <rect x="0" y="1310" rx="0" ry="0" width="150" height="30" />
        <rect x="0" y="1350" rx="0" ry="0" width={halfWidth} height="400" />

        <rect x={width * 0.5} y="1310" rx="0" ry="0" width="150" height="30" />
        <rect x={width * 0.5} y="1350" rx="0" ry="0" width={halfWidth} height="400" />
      </ContentLoader>
    </Container>
  );
}

Skeleton.propTypes = {
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.string,
  animate: PropTypes.bool,
  metricCount: PropTypes.number,
};

Skeleton.defaultProps = {
  animate: false,
  theme: 'light',
  metricCount: 6,
};

const Container = styled.div`
  padding: 32px;
  width: 100%;
  ${props => getBoxShadow(props)}
  background: ${props => props.theme.palette.background.default};
  box-sizing: border-box;

  .skeleton__title {
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;
