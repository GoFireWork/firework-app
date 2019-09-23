import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  overflow-y: auto;
  height: calc(100vh - 90px);
  ul {
    overflow: visible;
  }
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
`;

export default Wrapper;
