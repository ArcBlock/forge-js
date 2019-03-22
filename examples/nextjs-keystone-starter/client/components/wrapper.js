import styled from 'styled-components';

export default styled.div`
  width: 100%;
  max-width: ${props => props.theme.breakpoints.values.lg}px;
  box-sizing: border-box;
  margin: 0 auto;
`;
