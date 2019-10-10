import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: 'column';
  > article {
    min-height: 100vh;
    width: 33%;
  }
`;

// export const PriceTier = styled.div`
//   cursor: pointer;
//   display: block;
//   padding: 0px 5px;
//   position: relative;
//   background-color: #32325d;
// `;

export const PricingWrapper = styled.div`
  height: 95vh;
`;
