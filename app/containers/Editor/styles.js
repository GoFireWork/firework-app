import styled from 'styled-components';
import CodeMirror from 'react-codemirror';

export const CenteredSection = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  > article {
    min-height: 100vh;
    width: 33%;
  }
`;

export const LeftSide = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  > ul {
    height: 100%;
  }
`;

export const MainDiv = styled.div`
  width: 80%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  .CodeMirror {
    width: 100%;
    height: calc(100vh - 50px);
    .CodeMirror-scroll{
    padding:0;
    }
`;

export const CodeMirrorWrapper = styled(CodeMirror)`
  width: 100%;
`;
