import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Card, CardContent } from 'material-ui';

import AuthCardHeader from '../../../components/ui/Card/AuthCardHeader';
import { renderTextField } from '../../../components/ui/TextField/renderTextField';
import { BlockButton } from '../../../components/ui/Buttons';
import AuthLayout from '../AuthLayout';
import validate from './validation';

import * as actions from '../actions';

class Register extends Component {

  onSubmit = (values) => {
    this.props.register(values);
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.props.auth === true) {
      return <Redirect to={from} />;
    }
    return (
      <AuthLayout>
        <Card>
          <AuthCardHeader title="Register" />
          <CardContent>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field
                name="firstname"
                id="firstname"
                label="First Name"
                placeholder="First Name"
                component={renderTextField}
              />
              <Field
                name="middlename"
                id="middlename"
                label="Middle Name"
                placeholder="Middle Name"
                component={renderTextField}
              />
              <Field
                name="lastname"
                id="lastname"
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

const FormWrapper = reduxForm({
  form: 'auth_register',
  validate,
});

const mapStateToProps = state => ({
  auth: state.Auth.authenticated,
});

const mapDispatchToProps = {
  register: actions.register,
};

export default connect(mapStateToProps, mapDispatchToProps)((FormWrapper)(Register));
