import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 411px;
  position: absolute;
  max-width: 641px;
  left: 40%;
  top: 37px;
  background-color: #252526;
  box-shadow: 0 2px 8px #000000;
  height: ${props => (props.toggle ? '60px' : '32px')};
  overflow: hidden;
  line-height: 19px;
  -webkit-transition: top 0.2s linear;
  transition: top 0.2s linear;
  padding: 0;
  transform: translateX(-50%);
  z-index: 999;
`;

export default Wrapper;

export const Content = styled.div`
  width: 100%;
`;
export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #fff;
  align-items: center;
  padding-right: 3px;
  i {
    font-size: 12px;
    color: #555556;
    cursor: pointer;
    &:last-child {
      color: #fff;
      &:hover {
        background: #333;
      }
    }
  }
`;
export const SearchBar = styled.div`
  padding: 0 4px;
  input {
    background-color: rgb(17, 21, 24);
    color: rgb(192, 192, 192);
    border: none;
    height: 25px;
  }
  span {
    min-width: 69px;
    font-size: 12px;
    line-height: 23px;
    margin: 0 1px 0 3px;
    color: #f48771;
    padding: 2px 2px 0;
  }
`;
export const Replace = styled.div`
  padding: 0 4px;
  margin-top: 3px;
  input {
    background-color: rgb(17, 21, 24);
    height: 25px;
    color: rgb(192, 192, 192);
    border: none;
  }
`;
export const Arrow = styled.div`
  display: flex;
  align-items: center;
  background: hsla(0, 0%, 100%, 0.1);
  height: 100%;
  i {
    color: #fff;
  }
`;
