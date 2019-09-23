import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;

  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;

export const Span = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  div {
    margin: 0;
    text-align: right;
    a {
      margin: 0 5px 0 0;
      padding: 6px 15px;
      font-size: 15px;
      background-color: #2cbe4e;
      font-weight: 600;
      line-height: 20px;
      color: #fff;
      border-radius: 3px;
      border: none;
      &:hover {
        background-color: #269f42;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 30%;
  padding: 0 6px;
  &:hover {
    background-color: #5a5c5c;
    cursor: pointer;
    border-radius: 4px;
  }
`;

export const Title = styled.div`
  width: 70%;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  i {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ModalWrapper = styled.div`
  pre {
    white-space: pre-wrap;
    word-break: break-all;
    font-size: 14px;
  }
`;
