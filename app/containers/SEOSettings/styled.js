import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 15px;

  h3 {
    margin: 40px 0px 5px 0px;
  }
  div {
    input {
      margin-top: 10px;
      margin-right: 10px;
    }
  }
`;

export const Tips = styled.div`
  border: 1px solid #00000061;
  position: relative;
  margin: 0 10px;
  img {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;
export const Title = styled.div`
  background-color: #75757514;
  border-bottom: 1px solid #00000061;
  h2 {
    margin: 0;
    line-height: 50px;
    padding: 0 20px;
  }
`;
export const Content = styled.div`
  padding: 0 20px;
  h4 {
    margin: 0 0 0 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Label = styled.label``;

export const Input = styled.input``;
