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
        background-color: #000;
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
      &:last-child {
        a {
          background: linear-gradient(
            to bottom,
            rgba(147, 206, 222, 1) 0%,
            rgba(72, 146, 166, 1) 50%,
            rgba(147, 206, 222, 1) 100%
          );
          color: #ddd;
          &:hover {
            background: transparent;
            color: #fff;
          }
        }
      }
    }
  }
`;
export const Row = styled.div`
   {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // label {
    //   font-family: ' Open Sans ', ' Helvetica Neue
    //       ', Helvetica, Arial,
    //     sans-serif;
    //   color: #a5a5a9fa;
    // }
    span {
      color: #a5a5a9fa;
    }
    h5 {
      color: #f00;
      font-size: 12px;
      width: 100%;
      margin: 5px 0;
      letter-spacing: 0.5px;
    }
    h6 {
      color: #a5a5a9fa;
      font-size: 13px;
      text-align: center;
      width: 100%;
      margin: 10px auto;
    }
    p {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0;
    }
    input {
      padding: 5px;
      background: #d5d7de;
      border: 3px solid #d5d7de;
      border-radius: 3px;
      width: auto;
      outline: none;
      &:focus {
        border-color: #717790;
        background: #fff;
      }
    }
    input[type='email'] {
      width: 100%;
    }
    // &:nth-child(3) {
    //   width: 80%;
    //   margin-left: auto;
    //   p {
    //     color: red;
    //     margin: 0px;
    //     height: 18px;
    //     font-size: 14px;
    //     color: #a5a5a9fa;
    //   }
    // }
    &:nth-child(4) {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      align-items: center;
      img {
        height: 30px;
        margin-left: 10px;
        background: white;
        padding: 1px 10px;
      }
    }
  }
`;
