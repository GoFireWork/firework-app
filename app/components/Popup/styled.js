import styled from 'styled-components';

export const PopupWrraper = styled.div`
   {
    display: flex;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: -100px;
    z-index: 999;
    right: 10px;
    border-radius: 10px;
  }
`;

export const PopupContent = styled.div`
   {
    color: rgba(0, 0, 0, 0.65);
    font-size: 13px;
    padding: 5px 10px;
    font-weight: 600;
    line-height: 14px;
    &:before {
      content: '';
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      border-top: 10px solid white;
      position: absolute;
      bottom: -10px;
      right: 10px;
    }

    input {
      margin-top: 5px;
      border: 1px solid #ccc;
    }
  }
`;
