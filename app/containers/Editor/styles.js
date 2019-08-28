import styled from 'styled-components';

export const CenteredSection = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: 'column';
  > article {
    min-height: 100vh;
    width: 33%;
  }
`;

export const LeftSide = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: 'column';
  > article {
    width: 100%;
  }
`;
