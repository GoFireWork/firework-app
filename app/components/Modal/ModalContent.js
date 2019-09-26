import styled from 'styled-components';

const ModalContent = styled.div`
  background-color: #fefefe;
  color: black;
  width: ${props => (props.width ? `${props.width}%` : '80%')};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  background-color: var(--dark-gray-color);
  border-radius: 6px;
  overflow: hidden;
`;

export default ModalContent;
