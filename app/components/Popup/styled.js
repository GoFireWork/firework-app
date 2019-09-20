import styled from 'styled-components';

export const Wrapper = styled.div`
   {
    display: flex;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: -140px;
    z-index: 999;
    left: -30px;
    right: 10px;
    border-radius: 10px;
  }
`;

export const Content = styled.div`
   {
    color: rgba(0, 0, 0, 0.65);
    font-size: 15px;
    padding: 10px 10px;
    font-weight: 600;
    line-height: 16px;
    &:before {
      content: '';
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      border-top: 10px solid white;
      position: absolute;
      bottom: -10px;
      right: 51px;
    }

    input {
      padding: 10px;
      margin: 10px 0;
      height: 35px;
      width: 100%;
      border: 1px solid #ccc;
    }
  }
`;
