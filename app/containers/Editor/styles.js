import styled from 'styled-components';

export const EditorContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #252526;
`;

export const CenteredSection = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(17, 21, 24);
  > p {
    font-size: 18px;
    color: #fff;
    margin: 12px 0;
  }
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
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: 'column';
  > article {
    width: 100%;
  }
  > .small-sidebar {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 25%;
    background-color: rgb(28, 32, 34);
    color: rgba(255, 255, 255, 0.6);
    border-right: 0.5px solid rgba(255, 255, 255, 0.1);
    > .sub-menu {
      min-height: 3.5rem;
      padding: 10px 0;
      > svg {
        font-size: 35px;
      }
    }
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: 'column';
  > article {
    width: 100%;
  }
`;
