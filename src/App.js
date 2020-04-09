import React from 'react';
import styled from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import MainTheme from 'theme/MainTheme';
import Header from 'components/Header';
import Saved from 'views/Saved';
import Settings from 'views/Settings';
import NotFound from 'views/NotFound';
import ErrorPage from 'views/Error';
import WallpaperList from 'views/WallpaperList';
import history from 'history.js';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

const StyledMainWarpper = styled.div`
  /* max-width: 1500px; */
  margin: 0 auto;
  padding: 40px 15px;
`;

const App = () => {
  return (
    <>
      <MainTheme>
        <CssBaseline />
        <Router history={history}>
          <Header />
          <StyledMainWarpper>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/wallpapers" />} />
              <Route path="/wallpapers" exact component={WallpaperList} />
              <Route path="/saved" exact component={Saved} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/notFound" exact component={NotFound} />
              <Route path="/error" exact component={ErrorPage} />
              <Route path="*/error" render={() => <Redirect to="/error" />} />
              <Route render={() => <Redirect to="/notFound" />} />
            </Switch>
          </StyledMainWarpper>
        </Router>
      </MainTheme>
    </>
  );
};

export default App;
