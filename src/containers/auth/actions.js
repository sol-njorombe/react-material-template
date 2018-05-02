import * as constants from './constants';

export const tryRegister = (values) => {
  console.log('Register Params', values);
  return {
    type: constants.TRY_REGISTER,
    values,
  };
};

export const tryLogIn = (values) => {
  console.log('Login Params', values);
  return {
    type: constants.TRY_LOG_IN,
    values,
  };
};

export const logInSuccess = (response) => {
  const userData = response.data;
  return {
    type: constants.LOG_IN_SUCCESS,
    firstname: userData.firstname,
    lastname: userData.lastname,
    email: userData.email,
  };
};

export const logInError = (response) => {
  console.log(response);
  return {
    type: constants.LOG_IN_ERROR,
    response,
  };
};


export const tryForgotPw = (values) => {
  console.log('Login Params', values);
  return {
    type: constants.TRY_FORGOT_PW,
    values,
  };
};

export const tryLogOut = () => {
  console.log('Trying to log out');
  return {
    type: constants.TRY_LOG_OUT,
  };
};

export const logOutSuccess = () => {
  console.log('Logout success action');
  return { type: 'RESET' };
};

export const logOutError = () => {
  console.log('Logout error action');
  return {
    type: constants.LOG_OUT_ERROR,
  };
};

export const tryStorageAuth = () => {
  console.log('try session retrieve');
  return {
    type: constants.TRY_STORAGE_AUTH,
  };
};

export const storageAuthSuccess = (response) => {
  console.log('storage auth', response);
  return {
    type: constants.STORAGE_AUTH_SUCCESS,
    firstname: response.data.firstname,
    lastname: response.data.lastname,
    email: response.data.email,
  };
};

export const storageAuthError = () => {
  console.log('Token no longer valid');
  return {
    type: 'RESET',
  };
};
