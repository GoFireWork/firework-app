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
    height: calc(100vh - 87px);
  }
  .react-codemirror2 {
    height: calc(100vh - 87px);
    overflow-y: hidden;
  > .CodeMirror{
         height:calc(100vh - 81px);
         > .CodeMirror-vscrollbar ,.CodeMirror-hscrollbar{
         ::-webkit-scrollbar-track
          {
              background-color: #191d1f;
          }
          
          ::-webkit-scrollbar
          {
              width: 12px;
              background-color: #191d1f;
          }
          ::-webkit-scrollbar-thumb
          {
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
              background-color: #333637;
          }
      }
      > .CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler{
              background-color: #323536;
      }
  }
 
`;

export const CodeMirrorWrapper = styled(CodeMirror)`
  width: 100%;
`;
