import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '@pages/main/MainPage';

const Router = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={MainPage} />
  </Switch>
);

export default Router;
