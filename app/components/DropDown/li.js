import styled from 'styled-components';
const Li = styled.li`
  list-style-type: none;
  text-align: left;
  padding: 5px;
  a {
    text-decoration: none;
    color: #24292e;
    padding: 0 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  strong {
    padding: 0 15px;
  }
  :hover {
    background-color: #0366d6;
    a,
    strong {
      color: #fff;
    }
  }
`;

export default Li;
