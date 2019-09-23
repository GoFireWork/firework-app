import styled from 'styled-components';

const ModalDialog = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  z-index: 100;
`;

export default ModalDialog;
