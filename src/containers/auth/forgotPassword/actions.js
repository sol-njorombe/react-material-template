import * as constants from './constants';

export const tryForgotPw = values => {
  console.log("Login Params", values);
  return {
    type: constants.TRY_FORGOT_PW,
    values
  }
}