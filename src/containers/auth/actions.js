import * as constants from './constants';

// Log In
export const tryLogIn = values => ({
  type: constants.TRY_LOG_IN,
  values,
});

export const logInSuccess = (response) => {
  const userData = response.data;
  return {
    type: constants.LOG_IN_SUCCESS,
    firstname: userData.firstname,
    lastname: userData.lastname,
    email: userData.email,
  };
};

export const logInError = error => ({
  type: constants.CREATE_NOTIFICATION,
  message: error.data.errors[0],
  status: 'error',
});

// Session retrieval using storage
export const tryStorageAuth = () => ({ type: constants.TRY_STORAGE_AUTH });

export const storageAuthSuccess = response => ({
  type: constants.STORAGE_AUTH_SUCCESS,
  firstname: response.data.firstname,
  lastname: response.data.lastname,
  email: response.data.email,
});

export const storageAuthError = () => ({ type: 'RESET' });

// Try Register
export const register = values => ({
  type: constants.TRY_REGISTER,
  values,
});

export const registerSuccess = (response) => {
  const userData = response.data;
  return {
    type: constants.REGISTER_SUCCESS,
    firstname: userData.firstname,
    lastname: userData.lastname,
    email: userData.email,
  };
};

export const registerError = error => ({
  type: constants.CREATE_NOTIFICATION,
  message: error.data.errors[0],
  status: 'error',
});

// Forgot Password
export const forgotPw = email => ({
  type: constants.TRY_FORGOT_PW,
  email,
});

export const forgotPwSuccess = response => ({
  type: constants.FORGOT_PW_SUCCESS,
  response,
});

export const forgotPwError = error => ({
  type: constants.CREATE_NOTIFICATION,
  message: error.data.errors[0],
  status: 'error',
});

// Log out
export const tryLogOut = () => ({
  type: constants.TRY_LOG_OUT,
});

export const logOutSuccess = () => ({ type: 'RESET' });

export const logOutError = error => ({
  type: constants.CREATE_NOTIFICATION,
  message: error.data.errors[0],
  status: 'error',
});

// reset password
export const tryResetPw = passwords => ({
  type: constants.TRY_RESET_PW,
  passwords,
});

export const resetPwSuccess = () => ({
  type: constants.RESET_PW_SUCCESS,
});

export const resetPwError = error => ({
  type: constants.CREATE_NOTIFICATION,
  message: error.data.errors[0],
  status: 'error',
});
