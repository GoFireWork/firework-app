import styled from 'styled-components';

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid var(--light-gray-border-color);
  background-color: var(--dark-gray-color);
  color: var(--header-font-color);
  h4 {
    margin: 0;
    a {
      text-decoration: none;
      color: var(--header-font-color);
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export default ModalHeader;
