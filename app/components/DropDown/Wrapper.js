import styled from 'styled-components';

const Wrapper = styled.div`
  border-top: 0px;
  box-shadow: 0 1px 15px rgba(27, 31, 35, 0.15);
  margin: 15px;
  border-radius: 5px;
  min-height: 185px;
  position: absolute;
  right: 2px;
  top: 35px;
  background: #fafafa;
  width: 180px;
  font-size: 14px;
  z-index: 10;
  ::after {
    border: 7px solid transparent;
    border-bottom-color: #fff;
    position: absolute;
    display: inline-block;
    content: '';
    top: -14px;
    right: 10px;
    left: auto;
  }
  hr {
    border-top: 1px solid #e1e4e8;
  }
`;

export default Wrapper;
