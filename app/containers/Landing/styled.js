import styled from 'styled-components';

export const BoxSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.div`
  img {
    border-radius: 50%;
    width: auto;
    background: #ededed;
    padding: 10px;
  }
`;

export const TextTitle = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const Services = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  align-items: center;
  justify-content: space-between;
  color: #fff;
  display: flex;
  padding: 0 30px;
  background: #0e1730;
  height: 120px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;
export const Wrapper = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #013058,
    #0a3c67,
    #134876,
    #1b5486,
    #236196
  );
`;
