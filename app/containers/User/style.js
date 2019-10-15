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
      color: #fff !important;
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

export const Wrapper = styled.div`
  height: 100vh;
  background-color: black;
  position: absolute;
  width: 100%;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  p {
    color: #fff;
  }
`;
