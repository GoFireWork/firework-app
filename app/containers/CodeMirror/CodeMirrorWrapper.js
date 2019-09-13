import styled from 'styled-components';

export const CodeMirrorWrapper = styled.div`
  position: absolute;
  right: 0px;
  // width: 65%;
  height: 100%;
  display: flex;
  flex-direction: 'column';
  background-color: #263238;
    > .react-codemirror2 {
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
