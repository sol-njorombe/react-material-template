import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Card, CardContent } from 'material-ui';

import AuthCardHeader from '../../../components/ui/Card/AuthCardHeader';
import { renderTextField } from '../../../components/ui/TextField/renderTextField';
import { BlockButton } from '../../../components/ui/Buttons';
import AuthLayout from '../AuthLayout';
import validate from './validation';

import * as actions from './actions';

class Register extends Component {

  onSubmit = (values) => {
    console.log("Handle Submit", values);
    actions.tryRegister(values);
  }

  render(){
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
      <AuthLayout>
          <Card>
            <AuthCardHeader title="Register" />
            <CardContent>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field 
                name="first_name" 
                id="first_name" 
                label="First Name" 
                placeholder="First Name" 
                component={renderTextField}
              />
              <Field 
                name="middle_name" 
                id="middle_name" 
                label="Middle Name" 
                placeholder="Middle Name" 
                component={renderTextField}
              />
              <Field 
                name="last_name" 
                id="last_name" 
                label="Last Name" 
                placeholder="Last Name" 
                component={renderTextField}
              />
              <Field 
                name="email" 
                id="email" 
                label="Email" 
                placeholder="Email" 
                component={renderTextField}
              />
              <Field 
                name="password" 
                id="password" 
                type="password" 
                label="Password" 
                placeholder="password" 
                component={renderTextField}
              />
              <Field 
                name="confirm_password" 
                id="confirm_password" 
                type="password" 
                label="Confirm Password" 
                placeholder="Confirm Password" 
                component={renderTextField}
              />
              <BlockButton variant="raised" color="primary" type="submit" icontype="power_settings_new" disabled={invalid || pristine || submitting} fullWidth>
                Register 
              </BlockButton>
              
              <Link to="/login" >
                <BlockButton variant="raised" color="default" fullWidth>
                  Log In
                </BlockButton>
              </Link>
              
            </form>
            </CardContent>
          </Card>
      </AuthLayout>  
    );
  }
}

Register =  reduxForm({
  form: 'auth_register', 
  validate,
})(Register);

export default Register;