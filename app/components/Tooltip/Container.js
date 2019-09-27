import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: inline-block;
  div {
    &:hover {
      div {
        display: unset;
      }
    }
  }
`;

export default Container;
