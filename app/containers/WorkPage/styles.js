import styled from 'styled-components';

export const CenteredSection = styled.div`
  text-align: center;
`;

export const WorkPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  bottom: 50px;
  right: 10px;
  width: 100%;
  height: 100%;
`;

export const Files = styled.div`
  display: flex;
  flex-grow: 1;
  width: 30%;
  max-width: 300px;
  position: absolute;
  height: 100%;
  background-color: green;
`;

export const EditorContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 60%;
  position: absolute;
  height: 100%;
  // background-color: black;
`;

export const CodeMirrorPlaceHolder = styled.div`
  position: absolute;
  right: 0px;
  background-color: red;
  height: 100%;
  width: 75%;
`;

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  width: 265px;
  top: 50px;
  height: 100%;
  background-color: yellow;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-grow: 1;
  position: absolute;
  right: 0px;
  height: 100%;
  width: 40%;
  background-color: ${'rgba(0, 0, 0, 0.8)'};
`;

export const Preview = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;
