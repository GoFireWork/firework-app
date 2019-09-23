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
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 50px);
  background-color: #21252b;
  display: flex;
  flex-direction: column;
  ul {
    width: 100%;
  }
`;

export const DecoratorsContainer = styled.div`
  cursor: pointer;
  display: block;
  padding: 0px 5px;
  position: relative;
  &:hover {
    span {
      display: unset;
    }
  }
  span {
    float: right;
    display: none;
  }
`;

export const WrappenHeader = styled.div`
   {
    display: flex;
    color: #9da5ab;
    justify-content: space-between;
    span {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;

export const InputWrapper = styled.div`
   {
    padding-left: 20px;
    display: flex;
    input {
      background-color: #263238;
      border: none;
      color: #fff;
      &:focus {
        border: none;
      }
    }
  }
`;
