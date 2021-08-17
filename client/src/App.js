import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Unauthorized from './components/Unauthrized/Unauthorized';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/home" exact component={() => (!user ? <Redirect to="/" /> : <Home />)} />
          <Route path="/" exact component={() => (!user ? <Auth /> : <Redirect to="/home" />)} />
          <Route path="/*" exact component={() => < Unauthorized />}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
