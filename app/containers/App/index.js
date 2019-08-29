/**
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import WorkPage from 'containers/WorkPage/Loadable';
import EditorPage from 'containers/Editor/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1332px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  padding: 0 10px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - GnarWork" defaultTitle="GnarWork">
        <meta name="description" content="Change Me" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={WorkPage} />
        <Route exact path="/editor" component={EditorPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
