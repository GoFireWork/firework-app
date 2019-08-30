import styled from 'styled-components';

export const LoginSection = styled.div`
  background: #000;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > div {
    display: flex;
    justify-content: center;
    a {
      display: flex;
      align-items: center;
      padding: 7px 15px;
      background: #343434;
      border: 1px solid #343434;
      color: #fff;
      svg {
        width: 24px;
        margin-right: 10px;
      }
      &:hover {
        background: #212121;
      }
    }
  }
`;
export const LoginTitle = styled.h3`
  font-size: 4.5rem;
  margin: 0;
  color: white;
`;
