import * as constants from './constants';

export const tryLogIn = values => {
  console.log("Login Params", values);
  return {
    type: constants.TRY_LOG_IN,
    values
  }
}