import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import WorkPage from 'containers/WorkPage/Loadable';
import Login from 'containers/Login';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Repo from 'containers/RepoList/Loadable';
import GetStarted from 'containers/GetStartedPage';
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
        <CRoute exact path="/" component={WorkPage} cprivate />
        <CRoute exact path="/login" component={Login} />
        <CRoute exact path="/repositories" component={Repo} cprivate />
        <CRoute exact path="/get-started" component={GetStarted} cprivate />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
