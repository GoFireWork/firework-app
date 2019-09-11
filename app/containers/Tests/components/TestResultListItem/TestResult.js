import styled from 'styled-components';

export const TestResult = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0.5em;
  background: ${props =>
    props.testResult.status === 'fail' ? 'red' : 'green'};

  & :not(:last-child) {
    border-bottom: 1px solid ${'rgba(0, 0, 0, 0.8)'};
  }
`;
