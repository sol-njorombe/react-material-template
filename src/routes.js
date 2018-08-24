import React from 'react';
import { Route, Switch } from 'react-router';

import AuthRoute from './containers/auth/authRoute';

import Home from './containers/home';

// Auth Paths
import LogIn from './containers/auth/login';
import LogOut from './containers/auth/logout';
import Register from './containers/auth/register';
import ForgotPassword from './containers/auth/forgotPassword';
import ResetPassword from './containers/auth/resetPassword';

const Routes = () => (<Switch>
  <AuthRoute path="/" exact component={Home} />

  <Route path="/register" exact component={Register} />
  <Route path="/login" exact component={LogIn} />
  <Route path="/logout" exact component={LogOut} />
  <Route path="/forgotpw" exact component={ForgotPassword} />
  <Route path="/resetpw" exact component={ResetPassword} />

</Switch>);

export default Routes;
