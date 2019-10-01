import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Landing from 'containers/Landing';
import Login from 'containers/Login';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import GetStarted from '../GetStartedPage';
import CreditCardSignup from '../CreditCardSignupPage';
import CRoute from './privateRoutes';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s" defaultTitle="FireWork">
        <meta name="description" content="Change Me" />
      </Helmet>
      <Header />
      <Switch>
        <CRoute exact path="/" component={Landing} />
        <CRoute exact path="/login" component={Login} />
        <CRoute exact path="/get-started" component={GetStarted} />
        <CRoute exact path="/credit-card-signup" component={CreditCardSignup} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
