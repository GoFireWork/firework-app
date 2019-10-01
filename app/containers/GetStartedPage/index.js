import React from 'react';
import Button from 'components/Button';
import { Wrapper } from './Styled';

export const GetStarted = () => (
  <Wrapper>
    <input defaultValue="https://www.facebook.com/" />
    <Button href="https://www.facebook.com/">Get Started</Button>
  </Wrapper>
);

export default GetStarted;
