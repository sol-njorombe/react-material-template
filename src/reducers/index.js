import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import LogInReducer from '../containers/auth/login/reducer';

export default (routerReducer) => {
  return combineReducers({
    form: formReducer,
    login: LogInReducer
  });
};