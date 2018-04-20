import * as constants from './constants';

export const tryRegister = values => {
  console.log("Register Params", values);
  return {
    type: constants.TRY_REGISTER,
    values
  }
}