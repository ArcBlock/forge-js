import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';

import Wrapper from './wrapper';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, contentOnly }) {
  if (contentOnly) {
    return <Container>{children}</Container>;
  }

  return (
    <Container>
      <AppBar position="static" color="default">
        <Wrapper>
          <Header />
        </Wrapper>
      </AppBar>
      <Wrapper>{children}</Wrapper>
      <Wrapper>
        <Footer />
      </Wrapper>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  contentOnly: PropTypes.bool,
};

Layout.defaultProps = {
  contentOnly: false,
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fbfbfb;
`;
