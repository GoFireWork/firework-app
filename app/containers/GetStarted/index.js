import React from 'react';
import { Helmet } from 'react-helmet';

import Button from 'components/Button';
import { Wrapper } from './Styled';

export const GetStarted = () => (
  <div>
    <Helmet>
      <title>FireWork</title>
      <meta name="description" content="FireWork" />
    </Helmet>
    <Wrapper>
      <input defaultValue="https://gofirework.com/" />
      <Button>Get Started</Button>
    </Wrapper>
  </div>
);

export default GetStarted;
