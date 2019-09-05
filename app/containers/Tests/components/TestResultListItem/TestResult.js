import styled from 'styled-components';

export const TestResult = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 1em;
  background: ${props => (props.status === 'fail' ? 'red' : 'green')};
`;
