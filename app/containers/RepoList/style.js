import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Wrapper;

export const BorderRight = styled.div`
  width: 50%;
  text-align: center;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ffffff38;
  position: absolute;
  bottom: 0px;
  width: 100%;
  div:nth-child(1) {
    border-right: 1px solid #ffffff38;
  }
`;
export const RepoType = styled.div`
  width: 72px;
  padding: 1px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  font-weight: 100;
`;
