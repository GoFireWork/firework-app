import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => (props.width ? `${props.width}` : '18em')};
  height: ${props => (props.height ? `${props.height}` : '18em')};
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  margin: 15px;
  border-radius: 5px;
  position: relative;
  min-height: 185px;
  background: #444;
`;

export default Wrapper;
