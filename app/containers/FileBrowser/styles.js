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
  ::-webkit-scrollbar-track {
    background-color: #191d1f;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #191d1f;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #333637;
  }
`;

export const DecoratorsContainer = styled.div`
  cursor: pointer;
  display: block;
  padding: 0.3rem 1rem 0.4rem calc(1rem - 2px);
  border-left: 2px solid transparent;
  position: relative;
  &:hover {
  background-color:  ${props =>
    props.focus === 'edit' ? 'none' : 'rgb(38, 50, 56);'}
    border-left: 2px solid transparent;
    span {
      display: ${props => (props.focus === 'edit' ? 'none' : 'unset')};
      i {
        margin: 0 3px 0 3px;
        &:last-child {
          margin-right: 0;
        }
      }
      div {
      &:hover {
        visibility: visible;
        }
      }
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
    background-color: rgba(131, 226, 252, 0.2);
    padding: 0.3rem 1rem 0.4rem calc(1rem - 2px);
    margin-left: ${props => (props.type === 'add' ? '15px' : '-15px')};
    input {
      width: 100%;
      background-color: #263238;
      border: none;
      color: #fff;
      &:focus {
        border: none;
        outline: none;
      }
    }
    i {
      color: #6a9eb5;
    }
  }
`;

export const DeleteWrapper = styled.div`
   {
    color: rgba(255, 255, 255, 0.9);
    div:nth-child(3) {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      margin-top: 1rem;
      div {
        margin: 0;
      }
      div:nth-child(2) {
        a {
          background-color: rgb(220, 53, 69);
          color: #fff;
          border: 2px solid #dc3545;
        }
      }
    }
  }
`;

export const Title = styled.div`
   {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
  }
`;

export const Content = styled.div`
   {
    font-size: 14px;
    text-align: center;
  }
`;
