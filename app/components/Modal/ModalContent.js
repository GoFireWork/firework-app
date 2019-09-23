import styled from 'styled-components';

const ModalContent = styled.div`
  background-color: #fefefe;
  color: black;
  width: ${props => (props.width ? `${props.width}%` : '80%')};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  overflow: hidden;
  color: black;
  width: 50%;
`;

export default ModalContent;
