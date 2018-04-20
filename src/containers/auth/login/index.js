import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { InputAdornment } from 'material-ui/Input';
import { AccountCircle, Lock } from '@material-ui/icons';
import { Card, CardContent } from 'material-ui';

import AuthCardHeader from '../../../components/ui/Card/AuthCardHeader';
import { renderTextField } from '../../../components/ui/TextField/renderTextField';
import { BlockButton } from '../../../components/ui/Buttons';
import AuthLayout from '../AuthLayout';
import validate from './validation';

import * as actions from './actions';


class LogIn extends Component {

  onSubmit = (values) => {
    console.log("Handle Submit", values);
    actions.tryLogIn(values);
  }

  render(){
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
      <AuthLayout>
          <Card>
            <AuthCardHeader title="Log In" />
            <CardContent>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field 
                name="email" 
                id="email" 
                label="Email" 
                placeholder="Email" 
                component={renderTextField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <Field 
                name="password" 
                id="password" 
                type="password" 
                label="Password" 
                placeholder="password" 
                component={renderTextField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
              <BlockButton variant="raised" color="primary" type="submit" icontype="power_settings_new" disabled={invalid || pristine || submitting} fullWidth>
                Log In  
              </BlockButton>
              
              <Link to="/register" >
                <BlockButton variant="raised" color="default" fullWidth>
                  Register 
                </BlockButton>
              </Link>

              <Link to="/forgotpw">Forgot Password</Link>
              
            </form>
            </CardContent>
          </Card>
      </AuthLayout>  
    );
  }
}


LogIn =  reduxForm({
  form: 'login_form', 
  validate,
})(LogIn);

export default LogIn;