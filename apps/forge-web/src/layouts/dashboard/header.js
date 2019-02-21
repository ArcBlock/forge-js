import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

// eslint-disable-next-line
export default React.memo(({ children, style = {}, onClick = () => {} }) => (
  <Header
    component="h2"
    variant="headline"
    onClick={onClick}
    style={Object.assign({ fontWeight: 'normal', marginBottom: '15px' }, style)}>
    {children}
  </Header>
));

const Header = styled(Typography)`
  && {
    font-weight: normal;
    margin-top: 15px;
  }

  small {
    font-size: 0.7em;
    margin-left: 30px;
  }

  strong {
    font-weight: 500;
  }

  a,
  a:hover,
  a:active {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
