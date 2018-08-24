import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { InputAdornment } from 'material-ui/Input';
import { Lock } from '@material-ui/icons';
import { Card, CardContent } from 'material-ui';
import queryString from 'query-string';

import AuthCardHeader from '../../../components/ui/Card/AuthCardHeader';
import { renderTextField } from '../../../components/ui/TextField/renderTextField';
import { BlockButton } from '../../../components/ui/Buttons';
import AuthLayout from '../AuthLayout';
import validate from './validation';

import * as actions from '../actions';
import * as api from '../api';


class ResetPassword extends Component {

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    const headers = {};
    headers.uid = queryParams.uid;
    headers.client = queryParams.client_id;
    headers.expiry = queryParams.expiry;
    headers['access-token'] = queryParams.token;
    api.storeSession(headers);
    console.log(queryParams);
  }

  onSubmit = (values) => {
    this.props.tryResetPw(values);
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    return (
      <AuthLayout>
        <Card>
          <AuthCardHeader title="Change Password" />
          <CardContent>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field
                name="password"
                id="password"
                type="password"
                label="Confirm"
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
              <Field
                name="password_confirmation"
                id="password"
                type="password"
                label="Confirm Password"
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
                Change Password
              </BlockButton>

            </form>
          </CardContent>
        </Card>
      </AuthLayout>
    );
  }
}

const formDecorator = reduxForm({
  form: 'resetpw_form',
  validate,
});

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  tryResetPw: actions.tryResetPw,
};

export default connect(mapStateToProps, mapDispatchToProps)((formDecorator)(ResetPassword));
