import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, CardContent } from 'material-ui';

import AuthCardHeader from '../../../components/ui/Card/AuthCardHeader';
import { renderTextField } from '../../../components/ui/TextField/renderTextField';
import { BlockButton } from '../../../components/ui/Buttons';
import AuthLayout from '../AuthLayout';
import validate from './validation';

import * as actions from './actions';

class ForgotPassword extends Component {

  onSubmit = (values) => {
    console.log("Handle Submit", values);
    actions.tryForgotPw(values);
  }

  render(){
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
      <AuthLayout>
          <Card>
            <AuthCardHeader title="Recover Password" />
            <CardContent>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field 
                name="email" 
                id="email" 
                label="Recovery Email" 
                placeholder="Recovery Email" 
                component={renderTextField}
              />
              
              <BlockButton variant="raised" color="primary" type="submit" icontype="power_settings_new" disabled={invalid || pristine || submitting} fullWidth>
                Recover Password 
              </BlockButton>
              
            </form>
            </CardContent>
          </Card>
      </AuthLayout>  
    );
  }
}

ForgotPassword =  reduxForm({
  form: 'forgotpw_form', 
  validate,
})(ForgotPassword);

export default ForgotPassword;