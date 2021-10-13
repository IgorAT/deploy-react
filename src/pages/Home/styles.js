import styled from 'styled-components';

export const Counter = styled.p`
  color: ${props => props.isEven ? 'red' : 'blue'};
`