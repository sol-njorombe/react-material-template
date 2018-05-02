import * as constants from './constants';

export const initialState = {
  authenticated: false,
  email: '',
  firstname: '',
  lastname: '',
  registerErrors: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.LOG_IN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
      };
    case constants.STORAGE_AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
      };
    default:
      return state;
  }
};
