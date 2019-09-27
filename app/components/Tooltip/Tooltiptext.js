import styled from 'styled-components';

const Tooltoptext = styled.div`
  display: none;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  width: ${props => (props.width ? `${props.width}px` : '120px')};
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  z-index: 1;
  ::after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: ${props => (props.classic ? 'none' : 'solid')};
    border-color: black transparent transparent transparent;
  }
`;

export default Tooltoptext;
