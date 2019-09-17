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
      font-size: 14px;
      padding: 0.25em 1.2em;
    }
  }
`;
