import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  max-height: 30em;
  overflow-y: auto;
  overflow: visible;
  padding: 0;
  ::-webkit-scrollbar-track {
    background-color: #191d1f;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #191d1f;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #333637;
  }
  > li {
    border-top: 0px;
    > div {
      > p {
        margin-left: 15px;
        color: #4a616c;
      }
    }
  }
`;

export default Ul;
