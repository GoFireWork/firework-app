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

export const EditorContainer = styled.div`
  display: flex;
  flex-grow: 1;
  // width: 60%;
  position: absolute;
  height: 100%;
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
  top: 65px;
  display: flex;
  flex-grow: 1;
  position: fixed;
  z-index: 2;
  right: ${props => (props.open ? 0 : '-40%')};
  transition: 2s;
  height: 100%;
  width: 40%;
  background-color: ${'rgba(0, 0, 0, 0.8)'};
`;

export const Preview = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;
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

export const Button = styled.div`
  padding: 0.4em 0.5em;
  background-color: #41bde9;
  position: absolute;
  left: -34px;
  border: 1px solid #41bde9;
  opacity: 0.7;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 4px;
  cursor: pointer;
`;
