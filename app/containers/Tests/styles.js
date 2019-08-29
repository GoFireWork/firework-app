import styled from 'styled-components';

// import Check from 'react-icons/lib/go/check';
// import Cross from 'react-icons/lib/go/x';
// import DotIcon from 'react-icons/lib/go/primitive-dot';
// import LoadingBubbles from './LoadingBubbles';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  // background-color: ${props => props.theme['sideBar.background']};
  background-color: rgb(28, 32, 34);
  color: ${props =>
    props.theme.light ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  &:first-child {
    margin-top: 0;
  }
`;

export const TestsContainer = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  heigth: 100%;
`;

export const TestDetails = styled.div`
  flex: 3;
  background-color: ${props => props.theme['sideBar.background']};
  height: 100%;
`;

export const Tests = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;

  /* Using absolute for correct scrolling, browsers have trouble handling
   * an inner scroll inside a container unless the child is absolute */
  position: absolute;
  top: 3.5rem;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const PreviewHeader = styled.h4`
  margin: 0.5em 0;
  text-align: center;
  color: ${props =>
    props.theme.light ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  }
`;
