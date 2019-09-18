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
    margin-top: 5px;
    text-align: right;
    a {
      margin: 0 5px 0 0;
      padding: 2px 14px;
      font-size: 12px;
      background-color: #2cbe4e;
      font-weight: 600;
      line-height: 20px;
      color: #fff;
      border-radius: 3px;
      border: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 30%;
  padding-left: 15px;
`;

export const Title = styled.div`
  width: 70%;
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
