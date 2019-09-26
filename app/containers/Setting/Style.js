import styled from 'styled-components';

export const Wrapper = styled.div`
   {
    display: flex;
    color: rgb(65, 189, 233);
    height: calc(100vh - 52px);
  }
`;

export const Sidemenu = styled.div`
   {
    width: 12%;
    background-color: #1e1f26;
    font-size: 15px;
    ul {
      padding-left: 0px;
      list-style: none;
      width: 100%;
      li {
        padding: 10px;
        color: #fff;
        font-weight: 600;
      }
      li:hover {
        cursor: pointer;
        background-color: #000;
      }
    }
  }
`;
export const Workspace = styled.div`
   {
    width: 88%;
    padding: 15px;
    background-color: #131418;
    .card {
      background-color: #2d303a;
    }
  }
`;

export const Form = styled.div`
   {
    div {
      margin: 0px;
    }
  }
`;
export const Row = styled.div`
   {
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      font-family: ' Open Sans ', ' Helvetica Neue
          ', Helvetica, Arial,
        sans-serif;
    }
    input {
      padding: 5px;
      background: #d5d7de;
      border: 3px solid #d5d7de;
      border-radius: 3px;
      outline: none;
      &:focus {
        border-color: #717790;
        background: #fff;
      }
    }
    &:nth-child(1) {
      input {
        width: 80%;
      }
    }
    &:nth-child(2) {
      width: 80%;
      margin-left: auto;
      p {
        margin: 0px;
        color: #f44336;
      }
      span {
        color: #444444;
      }
    }
    &:nth-child(3) {
      justify-content: center;
      margin: 10px 15px 20px 15px;
      label {
        margin-left: 10px;
      }
      input {
        border-radius: 15px;
      }
    }
  }
`;
