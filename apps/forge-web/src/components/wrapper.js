import styled from 'styled-components';

export default styled.div`
  padding: ${props => props.theme.spacing.unit * 4}px;
  width: 100%;
  max-width: ${props => props.theme.pageWidth}px;
  color: ${props => props.theme.typography.color.main};
  box-sizing: border-box;
  margin: 0 auto;
`;
