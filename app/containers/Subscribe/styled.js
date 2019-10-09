/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  box-sizing: border-box;
  padding: 15px;
  min-width: 380px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
`;

export const ContentModal = styled.div`
  height: calc(100vh - 50px);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  text-align: center;
  font-size: 36px;
  width: 100%;
  margin: 0 auto 15px;
`;
