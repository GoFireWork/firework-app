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

export const FileBrowser = styled.div`
  display: flex;
  flex-grow: 1;
  width: 30%;
  font-size: 15px;
  // max-width: 400px;
  position: absolute;
  height: 100%;
  // background-color: green;
`;
