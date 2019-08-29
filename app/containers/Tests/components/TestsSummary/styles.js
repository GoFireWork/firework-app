import styled, { css } from 'styled-components';

export const TestDetails = styled.div`
  display: flex;
  flex: 1;
  // margin: 0 0 1rem 0.5rem;
  // font-size: 1rem;
  // border-bottom: 1px solid lightgray;
`;

const baseTestStyles = css`
  display: flex;
  margin-left: 1rem;
  align-items: center;
  text-align: center;
`;

export const PassedTests = styled.div`
  ${baseTestStyles};
  color: #12ec5a;
`;

export const FailedTests = styled.div`
  ${baseTestStyles};
  color: #ec1236;
`;

export const TotalTests = styled.div`
  ${baseTestStyles};
  color: F2E9EA;
`;

// export const RightSide = styled.div`
//   flex: 1;
//   text-align: right;
// `;
