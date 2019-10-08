import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #013058;
  height: 70px;
  div:nth-child(1) {
    display: flex;
    padding: 0.25em 2em;
    justify-content: center;
    a {
      font-size: x-large;
    }
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    min-height: 165px;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    div:nth-child(1) {
      padding: 0;
    }
    div:nth-child(2) {
      flex-direction: column;
      align-items: baseline;
    }
  }
`;
