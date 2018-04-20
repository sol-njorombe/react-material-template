import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './containers/home';

// Auth Paths
import LogIn from './containers/auth/login';
import Register from './containers/auth/register';
import ForgotPassword from './containers/auth/forgotPassword';
import ResetPassword from './containers/auth/resetPassword';

const routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />

    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={LogIn} />
    <Route path="/forgotpw" exact component={ForgotPassword} />
    <Route path="/resetpw" exact component={ResetPassword} /> 
  </Switch>
);

export default routes;