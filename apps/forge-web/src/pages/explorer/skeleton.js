import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

export default function Skeleton({ title, ...rest }) {
  return (
    <Container {...rest}>
      <Typography component="h4" variant="h5" className="skeleton__title" gutterBottom>
        {title}
      </Typography>
      <ContentLoader
        height={1800}
        width={1230}
        animate={false}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb">
        <rect x="0" y="30" rx="0" ry="0" width="30" height="30" />
        <rect x="0" y="65" rx="0" ry="0" width="150" height="50" />
        <rect x="0" y="120" rx="0" ry="0" width="90" height="15" />
        <rect x="216" y="30" rx="0" ry="0" width="30" height="30" />
        <rect x="216" y="65" rx="0" ry="0" width="150" height="50" />
        <rect x="216" y="120" rx="0" ry="0" width="90" height="15" />
        <rect x="432" y="30" rx="0" ry="0" width="30" height="30" />
        <rect x="432" y="65" rx="0" ry="0" width="150" height="50" />
        <rect x="432" y="120" rx="0" ry="0" width="90" height="15" />
        <rect x="648" y="30" rx="0" ry="0" width="30" height="30" />
        <rect x="648" y="65" rx="0" ry="0" width="150" height="50" />
        <rect x="648" y="120" rx="0" ry="0" width="90" height="15" />
        <rect x="864" y="30" rx="0" ry="0" width="30" height="30" />
        <rect x="864" y="65" rx="0" ry="0" width="150" height="50" />
        <rect x="864" y="120" rx="0" ry="0" width="90" height="15" />
        <rect x="1080" y="30" rx="0" ry="0" width="30" height="30" />
        <rect x="1080" y="65" rx="0" ry="0" width="150" height="50" />
        <rect x="1080" y="120" rx="0" ry="0" width="90" height="15" />

        <rect x="0" y="230" rx="0" ry="0" width="30" height="30" />
        <rect x="35" y="230" rx="0" ry="0" width="60" height="30" />
        <rect x="125" y="230" rx="0" ry="0" width="30" height="30" />
        <rect x="160" y="230" rx="0" ry="0" width="60" height="30" />

        <rect x="0" y="280" rx="0" ry="0" width="600" height="90" />
        <rect x="0" y="390" rx="0" ry="0" width="600" height="90" />
        <rect x="0" y="500" rx="0" ry="0" width="600" height="90" />
        <rect x="0" y="610" rx="0" ry="0" width="600" height="90" />
        <rect x="0" y="720" rx="0" ry="0" width="600" height="90" />

        <circle cx="960" cy="560" r="270" />

        <rect x="0" y="900" rx="0" ry="0" width="150" height="30" />
        <rect x="0" y="950" rx="0" ry="0" width="1230" height="300" />

        <rect x="0" y="1310" rx="0" ry="0" width="150" height="30" />
        <rect x="0" y="1350" rx="0" ry="0" width="580" height="400" />

        <rect x="650" y="1310" rx="0" ry="0" width="150" height="30" />
        <rect x="650" y="1350" rx="0" ry="0" width="580" height="400" />
      </ContentLoader>
    </Container>
  );
}

Skeleton.propTypes = {
  title: PropTypes.string,
};

Skeleton.defaultProps = {
  title: 'Main',
};

const Container = styled.div`
  padding: 32px;
  width: 100%;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  background: #f7f8f8;

  .skeleton__title {
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;
