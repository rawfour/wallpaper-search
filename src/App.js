import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainTheme from 'theme/MainTheme';
import Header from 'components/Header';
import Saved from 'views/Saved';
import NotFound from 'views/NotFound';
import ErrorPage from 'views/Error';
import WallpaperList from 'views/WallpaperList';
import history from 'history.js';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

const StyledMainWarpper = styled.div`
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
              <Route path={`${process.env.PUBLIC_URL}/`} exact component={WallpaperList} />
              <Route path={`${process.env.PUBLIC_URL}/saved`} exact component={Saved} />
              <Route path={`${process.env.PUBLIC_URL}/notFound`} exact component={NotFound} />
              <Route path={`${process.env.PUBLIC_URL}/error`} exact component={ErrorPage} />
              <Route
                path="*/error"
                render={() => <Redirect to={`${process.env.PUBLIC_URL}/error`} />}
              />
              <Route render={() => <Redirect to={`${process.env.PUBLIC_URL}/notFound`} />} />
            </Switch>
          </StyledMainWarpper>
        </Router>
      </MainTheme>
    </>
  );
};

export default App;
