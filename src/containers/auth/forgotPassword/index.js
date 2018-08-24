import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Card, CardContent } from 'material-ui';

import AuthCardHeader from '../../../components/ui/Card/AuthCardHeader';
import { renderTextField } from '../../../components/ui/TextField/renderTextField';
import { BlockButton } from '../../../components/ui/Buttons';
import AuthLayout from '../AuthLayout';
import validate from './validation';

import * as actions from '../actions';

class ForgotPassword extends Component {

  onSubmit = (values) => {
    this.props.forgotPw(values.email);
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
      <AuthLayout>
        <Card>
          <AuthCardHeader title="Recover Password" />
          <CardContent>
            {
              (this.props.forgotPwMsg && this.props.forgotPwMsg.success) &&
              <p>{this.props.forgotPwMsg.message}</p>
            }
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

const FormWrapper = reduxForm({
  form: 'forgotpw_form',
  validate,
});

const mapStateToProps = state => ({
  auth: state.Auth.authenticated,
  forgotPwMsg: state.Auth.forgotPwMsg,
});

const mapDispatchToProps = {
  forgotPw: actions.forgotPw,
};

export default connect(mapStateToProps, mapDispatchToProps)((FormWrapper)(ForgotPassword));
