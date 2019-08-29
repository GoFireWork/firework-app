import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  background-color: rgb(28, 32, 34);
  color: ${props =>
    props.theme.light ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
`;

export const IssuesContainer = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;

  ul {
    list-style: none;
    margin: 1;
    width: 100%;
    max-height: 30em;
    overflow-y: auto;
    padding: 0;
  }

  li {
    background-color: rgb(28, 32, 34);
    color: ${props =>
      !props.theme.light ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  }
`;
