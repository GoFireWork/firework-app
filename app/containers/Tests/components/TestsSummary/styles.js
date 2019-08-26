import styled, { css } from 'styled-components';

export const TestDetails = styled.div`
  display: flex;
  flex: 1;
  margin-left: 1rem;
  font-size: 1rem;
`;

const baseTestStyles = css`
  display: inline-flex;
  font-weight: 500;
  margin-left: 0.8rem;
  align-items: center;
  font-size: 0.85rem;
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

export const RightSide = styled.div`
  flex: 1;
  text-align: right;
`;
